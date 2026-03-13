export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface SiteData {
  about: {
    bio: string;
    skills: {
      design: string[];
      development: string[];
    };
  };
  projects: Project[];
}

// Cloudflare D1 Binding
export interface Env {
  DB: D1Database;
}

export async function getSiteData(db: D1Database): Promise<SiteData> {
  const about = await db.prepare("SELECT bio FROM about WHERE id = 1").first<{ bio: string }>();
  const skills = await db.prepare("SELECT type, name FROM skills").all<{ type: string, name: string }>();
  const projects = await db.prepare("SELECT * FROM projects").all<Project>();

  const designSkills = skills.results.filter((s: { type: string; name: string }) => s.type === 'design').map((s: { type: string; name: string }) => s.name);
  const devSkills = skills.results.filter((s: { type: string; name: string }) => s.type === 'development').map((s: { type: string; name: string }) => s.name);

  return {
    about: {
      bio: about?.bio || "",
      skills: {
        design: designSkills,
        development: devSkills
      }
    },
    projects: projects.results || []
  };
}

export async function saveSiteData(db: D1Database, data: SiteData) {
  // Update Bio
  await db.prepare("UPDATE about SET bio = ? WHERE id = 1").bind(data.about.bio).run();

  // For projects, we'll do a simple sync (clear and re-insert for MVP simplicity, 
  // though a merge would be better for production)
  await db.prepare("DELETE FROM projects").run();
  
  const projectStmt = db.prepare("INSERT INTO projects (id, title, category, description, image) VALUES (?, ?, ?, ?, ?)");
  const batch = data.projects.map(p => projectStmt.bind(p.id, p.title, p.category, p.description, p.image));
  
  await db.batch(batch);
}
