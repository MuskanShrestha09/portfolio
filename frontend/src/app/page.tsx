"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight,
  Linkedin, 
  Dribbble, 
  Github 
} from "lucide-react";

export default function HomePage() {
  const projects = [
    {
      title: "Eco-Track App",
      description: "A comprehensive sustainability tracking platform for conscious consumers.",
      image: "https://images.unsplash.com/photo-1551288560-199a91baad31?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Lumina Fintech",
      description: "Modern banking interface designed for the next generation of investors.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Verve Fashion",
      description: "Premium e-commerce experience for high-end fashion brands.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "HealthCore",
      description: "Streamlined dashboard for healthcare professionals and patient management.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-10 max-w-[1240px] mx-auto pt-[120px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="max-w-[700px]"
        >
          <h1 className="hero-heading mb-6 text-[#111111]">
            Hi, I'm Muskan Shrestha —<br />
            UI/UX Designer
          </h1>
          <p className="text-lg md:text-[18px] text-[#555555] max-w-[520px] mb-10 leading-[1.6]">
            I design intuitive digital experiences that are simple, usable, and human-centered.
          </p>
          <Link 
            href="#projects" 
            className="inline-flex items-center justify-center h-12 px-[28px] bg-[#111111] text-white text-sm font-medium rounded-[6px] hover:bg-[#333333] transition-colors duration-300"
          >
            View My Work
          </Link>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section-spacing px-6 md:px-10 max-w-[1240px] mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="section-heading text-[#111111]">About Me</h2>
          </div>
          <div className="max-w-[520px]">
            <p className="body-text leading-[1.7] mb-6">
              I’m Muskan Shrestha, a UI/UX designer focused on creating clean, intuitive, and meaningful digital experiences. I enjoy turning complex problems into simple and elegant solutions.
            </p>
            <p className="body-text leading-[1.7]">
              With a background in user-centric design principles, I strive to bridge the gap between user needs and business goals through thoughtful visual and interaction design.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-spacing px-6 md:px-10 max-w-[1240px] mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="mb-12"
        >
          <h2 className="section-heading text-[#111111] mb-10">Selected Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-[40px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}>
                <div className="h-[320px] rounded-[8px] overflow-hidden bg-zinc-100 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-[1.02]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[20px] font-semibold text-[#111111] mb-1">{project.title}</h3>
                <p className="text-[14px] text-[#666666]">{project.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing px-6 md:px-10 max-w-[1240px] mx-auto w-full flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="text-center w-full max-w-[520px]"
        >
          <h2 className="section-heading text-[#111111] mb-[32px]">Get in Touch</h2>
          
          <form className="space-y-[16px] text-left">
            <div className="space-y-[8px]">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full h-12 bg-white border border-[#E5E5E5] rounded-[6px] px-4 text-sm outline-none focus:border-[#111111] transition-colors" 
              />
            </div>
            <div className="space-y-[8px]">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full h-12 bg-white border border-[#E5E5E5] rounded-[6px] px-4 text-sm outline-none focus:border-[#111111] transition-colors" 
              />
            </div>
            <div className="space-y-[8px]">
              <textarea 
                rows={5} 
                placeholder="Message" 
                className="w-full h-[140px] bg-white border border-[#E5E5E5] rounded-[6px] p-4 text-sm outline-none focus:border-[#111111] transition-colors resize-none" 
              />
            </div>
            <button 
              type="submit"
              className="w-full h-12 bg-[#111111] text-white text-sm font-medium rounded-[6px] hover:bg-[#333333] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-[20px]">
            <a href="#" className="p-2 text-[#111111] hover:text-[#555555] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-[#111111] hover:text-[#555555] transition-colors">
              <Dribbble className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-[#111111] hover:text-[#555555] transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
