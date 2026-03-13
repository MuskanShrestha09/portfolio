"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SiteData, Project } from "@/lib/data";

const AdminDashboard = () => {
  const [data, setData] = useState<SiteData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    fetch("/api/admin")
      .then(res => res.json())
      .then((data: unknown) => setData(data as SiteData));
  }, [router]);

  const handleSave = async () => {
    if (!data) return;
    setIsSaving(true);
    await fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    setIsSaving(false);
    alert("Changes saved successfully!");
  };

  const updateBio = (bio: string) => {
    if (!data) return;
    setData({ ...data, about: { ...data.about, bio } });
  };

  const updateProject = (index: number, project: Project) => {
    if (!data) return;
    const newProjects = [...data.projects];
    newProjects[index] = project;
    setData({ ...data, projects: newProjects });
  };

  if (!data) return <div className="pt-32 px-6 text-center">Loading...</div>;

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">CMS Dashboard</h1>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/80 disabled:opacity-50 transition-all"
          >
            {isSaving ? "Saving..." : "Save All Changes"}
          </button>
        </div>

        <section className="glass-dark p-8 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
          <div className="space-y-4">
            <label className="block text-sm font-medium text-secondary">Bio Description</label>
            <textarea 
              value={data.about.bio}
              onChange={(e) => updateBio(e.target.value)}
              className="w-full h-40 px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all resize-none"
            />
          </div>
        </section>

        <section className="glass-dark p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="space-y-8">
            {data.projects.map((project, i) => (
              <div key={project.id} className="p-6 border border-white/5 rounded-2xl bg-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Project Title</label>
                    <input 
                      type="text" 
                      value={project.title}
                      onChange={(e) => updateProject(i, { ...project, title: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Category</label>
                    <input 
                      type="text" 
                      value={project.category}
                      onChange={(e) => updateProject(i, { ...project, category: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 outline-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <button 
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            router.push("/");
          }}
          className="mt-12 text-secondary hover:text-red-400 transition-colors"
        >
          Logout Session
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
