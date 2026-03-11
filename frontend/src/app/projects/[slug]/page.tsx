"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Mock data for the case study
  const project = {
    title: slug ? slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : "Featured Project",
    category: "UI/UX Design • Mobile App",
    overview: "A comprehensive solution designed to streamline user workflows and enhance digital engagement through intuitive interaction patterns.",
    challenge: "The primary challenge was to simplify complex data sets into digestible visual components without losing critical information depth.",
    solution: "By implementing a hierarchical information architecture and subtle visual cues, we created a flow that guides users naturally through their tasks.",
    results: [
      "40% increase in user retention",
      "25% reduction in task completion time",
      "95% positive user feedback on the new UI"
    ],
    images: [
      "https://images.unsplash.com/photo-1551288560-199a91baad31?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop"
    ]
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Back Button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-secondary hover:text-black transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">{project.category}</span>
          <h1 className="text-5xl md:text-7xl mb-8">{project.title}</h1>
          <div className="flex flex-wrap gap-8 items-center border-y border-border py-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Role</p>
              <p className="font-medium">Lead UI/UX Designer</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Timeline</p>
              <p className="font-medium">3 Months (2025)</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Client</p>
              <p className="font-medium">Innovation Tech</p>
            </div>
            <div className="ml-auto flex gap-4">
              <button className="p-3 border border-border rounded-full hover:bg-zinc-50 transition-colors"><Share2 className="w-5 h-5" /></button>
              <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition-all">
                Live Demo <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="aspect-video rounded-3xl overflow-hidden mb-24"
        >
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-3 gap-20 mb-24">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl text-secondary leading-relaxed">{project.overview}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-20 mb-24">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl text-secondary leading-relaxed">{project.challenge}</p>
          </div>
        </div>

        {/* Multi-image grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="aspect-square rounded-3xl overflow-hidden">
            <img src={project.images[1]} alt="Process" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden">
            <img src={project.images[2]} alt="Result" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-20">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          </div>
          <div className="md:col-span-2">
            <ul className="space-y-6">
              {project.results.map((result, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-xl text-zinc-700">{result}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
