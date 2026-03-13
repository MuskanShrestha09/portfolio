"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Figma,
  Layers,
  Smartphone,
  Globe,
  Box,
  Star,
  Users,
  Briefcase,
} from "lucide-react";

// ─── Animation Variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
} satisfies import("framer-motion").Variants;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
} satisfies import("framer-motion").Variants;

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
} satisfies import("framer-motion").Variants;

// ─── Typing Effect Hook ──────────────────────────────────────────
function useTypingEffect(words: string[], speed = 100, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

// ─── Data ────────────────────────────────────────────────────────
const skills = [
  { name: "UI Design", level: 95 },
  { name: "UX Research", level: 88 },
  { name: "Wireframing", level: 92 },
  { name: "Prototyping", level: 90 },
  { name: "Design Systems", level: 85 },
  { name: "User Testing", level: 82 },
];

const tools = [
  { name: "Figma", icon: "🎨" },
  { name: "Adobe XD", icon: "⚡" },
  { name: "Photoshop", icon: "🖼️" },
  { name: "Illustrator", icon: "✏️" },
  { name: "Principle", icon: "🎭" },
  { name: "InVision", icon: "💡" },
];

const projects = [
  {
    title: "Eco-Track App",
    category: "Mobile App Design",
    description: "A sustainability tracking platform for conscious consumers with intuitive dashboards.",
    image: "https://images.unsplash.com/photo-1551288560-199a91baad31?q=80&w=2070&auto=format&fit=crop",
    tags: ["UX Research", "UI Design", "Mobile"],
  },
  {
    title: "Lumina Fintech",
    category: "Web App Design",
    description: "Modern banking interface designed for the next generation of investors.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    tags: ["Fintech", "Dashboard", "UI Design"],
  },
  {
    title: "Verve Fashion",
    category: "E-Commerce Design",
    description: "Premium e-commerce experience for high-end fashion with refined UX patterns.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2072&auto=format&fit=crop",
    tags: ["E-Commerce", "Brand", "UI Design"],
  },
  {
    title: "HealthCore",
    category: "Product Design",
    description: "Streamlined healthcare dashboard for professionals and patient management.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Healthcare", "Dashboard", "UX Research"],
  },
];

const services = [
  {
    icon: <Layers className="w-7 h-7" />,
    title: "UI/UX Design",
    description: "Crafting beautiful, user-centered interfaces with clear hierarchy and smooth interactions.",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile App Design",
    description: "Designing seamless mobile experiences for iOS and Android with best-in-class UX.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Website Design",
    description: "Building stunning, responsive websites that convert visitors into engaged users.",
  },
  {
    icon: <Box className="w-7 h-7" />,
    title: "Product Design",
    description: "End-to-end product design from ideation and research to final handoff.",
  },
];

const stats = [
  { icon: <Briefcase className="w-6 h-6" />, value: "3+", label: "Years Experience" },
  { icon: <Star className="w-6 h-6" />, value: "40+", label: "Projects Completed" },
  { icon: <Users className="w-6 h-6" />, value: "25+", label: "Happy Clients" },
];

// ─── Page ────────────────────────────────────────────────────────
export default function HomePage() {
  const typedText = useTypingEffect(["UI/UX Designer", "Product Designer", "Visual Storyteller", "Problem Solver"]);

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#6c63ff]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#ff6584]/8 blur-[120px] pointer-events-none" />

        <div className="container-custom flex flex-col items-center text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">
            <motion.span variants={fadeUp} className="section-label mb-6">
              ✦ Available for freelance
            </motion.span>

            <motion.h1 variants={fadeUp} className="hero-heading text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Muskan</span>
              <br />
              Shrestha
            </motion.h1>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6 h-12">
              <span className="text-2xl md:text-3xl font-medium text-[#a0a0a0]">I&apos;m a</span>
              <span className="text-2xl md:text-3xl font-semibold text-[#6c63ff]">
                {typedText}
                <span className="inline-block w-[2px] h-[1.1em] bg-[#6c63ff] ml-1 align-middle animate-pulse" />
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="body-text max-w-[520px] mb-10 text-lg">
              I design intuitive digital experiences that are simple, usable, and human‑centered.
              Turning complex problems into elegant, delightful solutions.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-row gap-4 flex-wrap justify-center">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#6c63ff] text-white text-sm font-semibold hover:bg-[#5a52e0] hover:gap-3 transition-all duration-300"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:muskan@example.com"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-white/15 text-white text-sm font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <Mail className="w-4 h-4" /> Hire Me
              </a>
            </motion.div>
          </motion.div>

          {/* scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555]"
          >
            <span className="text-xs tracking-[2px] uppercase">Scroll</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#6c63ff] to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ══ ABOUT ═════════════════════════════════════════════════ */}
      <section id="about" className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col md:flex-row gap-16 md:gap-20 items-center"
          >
            {/* Image */}
            <motion.div variants={fadeIn} className="flex-shrink-0 w-[260px] md:w-[320px]">
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl overflow-hidden glass border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
                    alt="Muskan Shrestha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-[#6c63ff]/30 -z-10" />
              </div>
            </motion.div>

            {/* Text */}
            <div className="flex flex-col gap-6 flex-1">
              <motion.span variants={fadeUp} className="section-label">About Me</motion.span>
              <motion.h2 variants={fadeUp} className="section-heading text-white">
                Designing with purpose,<br />crafting with passion
              </motion.h2>
              <motion.p variants={fadeUp} className="body-text leading-[1.9]">
                I&apos;m Muskan Shrestha, a UI/UX designer with 3+ years of experience creating clean,
                intuitive, and meaningful digital products. I specialize in transforming complex problems
                into simple, elegant solutions that users love.
              </motion.p>
              <motion.p variants={fadeUp} className="body-text leading-[1.9]">
                With a strong foundation in user research, information architecture, and visual design,
                I bridge the gap between user needs and business goals through thoughtful, data-driven design decisions.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-row gap-4 mt-2">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#6c63ff] text-white text-sm font-semibold hover:bg-[#5a52e0] transition-colors"
                >
                  Download CV
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SKILLS ════════════════════════════════════════════════ */}
      <section id="skills" className="section-spacing">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label">Skills & Tools</motion.span>
            <motion.h2 variants={fadeUp} className="section-heading text-white mb-14">
              What I bring to the table
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-16">
              {/* Skill bars */}
              <div className="flex-1 flex flex-col gap-6">
                {skills.map((skill) => (
                  <motion.div key={skill.name} variants={fadeUp}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-[#6c63ff] font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-[3px] w-full bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#6c63ff] to-[#ff6584]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tools */}
              <div className="flex-shrink-0 md:w-[280px]">
                <p className="text-sm font-semibold uppercase tracking-[2px] text-[#a0a0a0] mb-6">Tools I Use</p>
                <div className="flex flex-row flex-wrap gap-3">
                  {tools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      variants={fadeUp}
                      className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] text-sm text-white hover:border-[#6c63ff]/50 transition-colors"
                    >
                      <span>{tool.icon}</span> {tool.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ PROJECTS ══════════════════════════════════════════════ */}
      <section id="projects" className="section-spacing">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label">Selected Work</motion.span>
            <motion.h2 variants={fadeUp} className="section-heading text-white mb-14">
              Projects I&apos;m proud of
            </motion.h2>

            <div className="flex flex-row flex-wrap gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="w-full md:w-[calc(50%-16px)] group"
                >
                  <Link href={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}>
                    <div className="glass border border-white/[0.07] rounded-2xl overflow-hidden hover:border-[#6c63ff]/40 transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-[240px] overflow-hidden bg-[#111]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#6c63ff]/80 text-white backdrop-blur-md">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-sm text-[#a0a0a0] leading-[1.7] mb-4">{project.description}</p>
                        <div className="flex flex-row flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/[0.05] text-[#a0a0a0] border border-white/[0.06]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════ */}
      <section id="services" className="section-spacing">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label">Services</motion.span>
            <motion.h2 variants={fadeUp} className="section-heading text-white mb-14">
              How I can help you
            </motion.h2>

            <div className="flex flex-row flex-wrap gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="w-full md:w-[calc(50%-12px)] glass glass-hover border border-white/[0.07] rounded-2xl p-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#6c63ff]/10 border border-[#6c63ff]/20 flex items-center justify-center text-[#6c63ff] mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-[#a0a0a0] leading-[1.8]">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ STATS ═════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="glass border border-white/[0.07] rounded-3xl px-10 py-14 flex flex-col md:flex-row items-center justify-around gap-10 text-center"
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={fadeUp} transition={{ delay: i * 0.15 }} className="flex flex-col items-center gap-2">
                <div className="text-[#6c63ff] mb-1">{stat.icon}</div>
                <span className="text-5xl font-bold text-white gradient-text">{stat.value}</span>
                <span className="text-sm text-[#a0a0a0] font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════════ */}
      <section id="contact" className="section-spacing">
        <div className="container-custom flex flex-col items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="w-full max-w-[600px] flex flex-col"
          >
            <motion.span variants={fadeUp} className="section-label text-center">Contact</motion.span>
            <motion.h2 variants={fadeUp} className="section-heading text-white mb-4 text-center">
              Let&apos;s work together
            </motion.h2>
            <motion.p variants={fadeUp} className="body-text text-center mb-10">
              Have a project in mind or just want to chat? I&apos;d love to hear from you.
            </motion.p>

            <motion.form variants={fadeUp} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 h-12 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 text-sm text-white placeholder-[#555] outline-none focus:border-[#6c63ff]/60 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 h-12 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 text-sm text-white placeholder-[#555] outline-none focus:border-[#6c63ff]/60 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full h-12 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 text-sm text-white placeholder-[#555] outline-none focus:border-[#6c63ff]/60 transition-colors"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-sm text-white placeholder-[#555] outline-none focus:border-[#6c63ff]/60 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#6c63ff] text-white text-sm font-semibold hover:bg-[#5a52e0] transition-colors duration-300"
              >
                Send Message
              </button>
            </motion.form>

            {/* Social + Email */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4">
              <a href="mailto:muskan@example.com" className="text-sm text-[#a0a0a0] hover:text-white transition-colors">
                muskan@example.com
              </a>
              <div className="flex flex-row gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass border border-white/[0.08] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6c63ff]/40 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass border border-white/[0.08] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6c63ff]/40 transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass border border-white/[0.08] flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#6c63ff]/40 transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
