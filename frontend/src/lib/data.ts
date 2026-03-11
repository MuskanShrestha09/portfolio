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

import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data.json');

export function getData(): SiteData {
  if (!fs.existsSync(DATA_PATH)) {
    const initialData: SiteData = {
      about: {
        bio: "I am a passionate creator who lives at the intersection of design and technology...",
        skills: {
          design: ["UI/UX Design", "Brand Identity", "Prototyping", "Interaction Design"],
          development: ["Next.js / React", "TypeScript", "Tailwind CSS", "Cloudflare Stack"]
        }
      },
      projects: [
        {
          id: "1",
          title: "Nova Dashboard",
          category: "UI/UX Design",
          description: "A comprehensive dashboard for monitoring cloud infrastructure.",
          image: "/hero_abstract_bg.png"
        }
      ]
    };
    fs.writeFileSync(DATA_PATH, JSON.stringify(initialData, null, 2));
    return initialData;
  }
  const fileContent = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(fileContent);
}

export function saveData(data: SiteData) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}
