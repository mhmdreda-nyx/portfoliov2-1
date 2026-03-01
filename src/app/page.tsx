"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Shield, Code2, Terminal, Bug, Globe, Home, User, Briefcase,
  FolderOpen, Mail, Phone, ExternalLink, ChevronRight, Lock,
  Network, Monitor, Cpu, Database, GitBranch, Award, Zap, Link,
  Camera,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { InteractiveGlobe } from "@/components/ui/interactive-globe";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

const skills = [
  { name: "Python", icon: <Terminal className="h-5 w-5" />, area: "md:[grid-area:1/1/2/5]" },
  { name: "Penetration Testing", icon: <Shield className="h-5 w-5" />, area: "md:[grid-area:1/5/2/9]" },
  { name: "Linux", icon: <Monitor className="h-5 w-5" />, area: "md:[grid-area:1/9/2/13]" },
  { name: "HTML & CSS", icon: <Code2 className="h-5 w-5" />, area: "md:[grid-area:2/1/3/5]" },
  { name: "JavaScript", icon: <Zap className="h-5 w-5" />, area: "md:[grid-area:2/5/3/9]" },
  { name: "Java", icon: <Cpu className="h-5 w-5" />, area: "md:[grid-area:2/9/3/13]" },
  { name: "Selenium", icon: <Bug className="h-5 w-5" />, area: "md:[grid-area:3/1/4/5]" },
  { name: "ISTQB / Jira", icon: <GitBranch className="h-5 w-5" />, area: "md:[grid-area:3/5/4/9]" },
  { name: "Network+ / eJPTv2", icon: <Network className="h-5 w-5" />, area: "md:[grid-area:3/9/4/13]" },
  { name: "Graphic Design", icon: <Globe className="h-5 w-5" />, area: "md:[grid-area:4/1/5/5]" },
  { name: "Wireshark", icon: <Database className="h-5 w-5" />, area: "md:[grid-area:4/5/5/9]" },
  { name: "CMD / Bash", icon: <Terminal className="h-5 w-5" />, area: "md:[grid-area:4/9/5/13]" },
];

const projects = [
  {
    title: "SHA-256 Hashing Script",
    description: "Python utility to calculate and compare SHA-256 checksums, ensuring file integrity and detecting unauthorized modifications.",
    tech: ["Python", "Cryptography", "Security"],
    icon: <Lock className="h-6 w-6" />,
    link: "#",
  },
  {
    title: "Password Evaluator",
    description: "A Python script that evaluates password strength based on complexity rules and entropy, providing real-time security feedback.",
    tech: ["Python", "Security"],
    icon: <Shield className="h-6 w-6" />,
    link: "#",
  },
  {
    title: "Windows Server Security Checker",
    description: "Automated data encryption tool using Python with advanced cryptographic algorithms for secure storage and file transmission.",
    tech: ["Python", "Cryptography", "Windows", "Automation"],
    icon: <Monitor className="h-6 w-6" />,
    link: "#",
  },
  {
    title: "Text-Based Investigation Game",
    description: "Interactive web game with complex conditional logic managing player choices and long-term consequences on the game state.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <Terminal className="h-6 w-6" />,
    link: "#",
  },
  {
    title: "Banking System",
    description: "A Python-based banking system application simulating core financial operations including accounts, transactions, and security checks.",
    tech: ["Python", "OOP"],
    icon: <Database className="h-6 w-6" />,
    link: "#",
  },
];

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Experience", url: "#experience", icon: Briefcase },
  { name: "Projects", url: "#projects", icon: FolderOpen },
  { name: "Contact", url: "#contact", icon: Mail },
];

const timelineData = [
  {
    title: "Now",
    content: (
      <div className="space-y-6">
        <ExperienceCard
          role="Cybersecurity Intern"
          org="IEEE"
          desc="Administering Linux systems via CLI — managing permissions and network configurations. Analyzing network traffic and protocols (TCP/IP, OSI) using Wireshark. Deep dive into OWASP Top 10 vulnerabilities."
          tags={["Linux", "Wireshark", "OWASP", "Networking"]}
          icon={<Shield className="h-4 w-4 text-[#00ff96]" />}
        />
        <ExperienceCard
          role="Software Tester"
          org="DEPI — Digital Egypt Pioneers Initiative"
          desc="Applied ISTQB methodologies for both Manual and Automated Testing. Developed test automation scripts and frameworks using Java."
          tags={["ISTQB", "Java", "Selenium", "QA"]}
          icon={<Bug className="h-4 w-4 text-[#00e5ff]" />}
        />
        <ExperienceCard
          role="Technical Staff (Volunteer)"
          org="SBS — Shbab Btsad Shbab"
          desc="Contributing technical expertise as a volunteer staff member, supporting community tech initiatives and workshops."
          tags={["Leadership", "Community", "Tech"]}
          icon={<Network className="h-4 w-4 text-[#7c3aed]" />}
        />
      </div>
    ),
  },
  {
    title: "DECI Journey",
    content: (
      <div className="space-y-4">
        <div className="relative rounded-xl border border-[#00ff96]/20 bg-black/40 backdrop-blur-sm p-5">
          <GlowingEffect disabled={false} />
          <p className="text-sm text-[#00ff96]/80 font-mono mb-3">
            ▸ Completed a 2-year intensive scholarship by the Ministry of Communications (MCIT)
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[#00ff96] font-mono text-xs mt-0.5">2022</span>
              <div>
                <p className="text-sm font-semibold text-white font-mono">DECI Level 2 — IT Foundations</p>
                <p className="text-xs text-gray-400 mt-1">Built a comprehensive technical foundation: IT basics, programming, and soft skills. Graduated in 1st place — Ismailia Governorate. 🏆</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {["IT Basics", "Programming", "Soft Skills"].map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#00ff96]/10 border border-[#00ff96]/20 text-[#00ff96]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-[#00ff96]/10" />
            <div className="flex items-start gap-3">
              <span className="text-[#00e5ff] font-mono text-xs mt-0.5">2023</span>
              <div>
                <p className="text-sm font-semibold text-white font-mono">DECI Level 3 — Cybersecurity</p>
                <p className="text-xs text-gray-400 mt-1">Specialized in Cybersecurity: Network Security, Linux, and Ethical Hacking.</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {["Network Security", "Linux", "Ethical Hacking"].map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Awards",
    content: (
      <div className="space-y-4">
        <AchievementCard
          title="1st Place — Innovation Day"
          org="Google & MCIT"
          year="2023"
          icon={<Award className="h-5 w-5 text-yellow-400" />}
        />
        <AchievementCard
          title="1st Place — DECI Graduation"
          org="MCIT — Ismailia Governorate"
          year="2022"
          icon={<Award className="h-5 w-5 text-[#00ff96]" />}
        />
      </div>
    ),
  },
];

function ExperienceCard({ role, org, desc, tags, icon }: {
  role: string; org: string; desc: string; tags: string[]; icon: React.ReactNode;
}) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-5">
      <GlowingEffect disabled={false} />
      <div className="flex items-center gap-2 mb-1 relative z-10">
        {icon}
        <p className="text-sm font-bold text-white font-mono">{role}</p>
      </div>
      <p className="text-xs text-[#00ff96]/70 font-mono mb-2 relative z-10">@ {org}</p>
      <p className="text-xs text-gray-400 leading-relaxed mb-3 relative z-10">{desc}</p>
      <div className="flex flex-wrap gap-1 relative z-10">
        {tags.map(t => (
          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">{t}</span>
        ))}
      </div>
    </div>
  );
}

function AchievementCard({ title, org, year, icon }: {
  title: string; org: string; year: string; icon: React.ReactNode;
}) {
  return (
    <div className="relative flex items-center gap-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
      <GlowingEffect disabled={false} />
      <div className="shrink-0 relative z-10">{icon}</div>
      <div className="relative z-10">
        <p className="text-sm font-bold text-white font-mono">{title}</p>
        <p className="text-xs text-gray-400">{org} · {year}</p>
      </div>
    </div>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="relative group">
      {/* Outer glow ring */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#00ff96] via-[#00e5ff] to-[#7c3aed] opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-500" />

      {/* Inner Image Container */}
      <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-[#00ff96]/40 bg-[#0a1628] overflow-hidden p-1">
        <div className="relative w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
          <Image
            src="/personal.png"
            alt="Mohamed Reda"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Stylized Corner Brackets */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00ff96] rounded-tl z-10" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#00ff96] rounded-tr z-10" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#00ff96] rounded-bl z-10" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#00ff96] rounded-br z-10" />
    </div>
  );
}

export default function Portfolio() {
  const [scanLine, setScanLine] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const interval = setInterval(() => setScanLine(prev => (prev + 1) % 100), 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const glitch = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 5000);
    return () => clearInterval(glitch);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "projects", "contact"];
    const nameMap: Record<string, string> = {
      home: "Home", about: "About", experience: "Experience",
      projects: "Projects", contact: "Contact",
    };
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(nameMap[id]);
          });
        },
        { rootMargin: "-40% 0px -40% 0px" } // Triggers when section is in the middle 20% of viewport
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <style>{`nextjs-portal { display: none !important; }`}</style>

      <div
        className="pointer-events-none fixed inset-0 z-[100]"
        style={{
          background: `linear-gradient(transparent ${scanLine}%, rgba(0,255,150,0.015) ${scanLine}%, rgba(0,255,150,0.015) ${scanLine + 0.5}%, transparent ${scanLine + 0.5}%)`,
        }}
      />

      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,150,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,150,0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff96]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-[120px]" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-[#00e5ff]/5 rounded-full blur-[100px]" />
      </div>

      <NavBar items={navItems} activeTab={activeSection} />

      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-[#00ff96]/30 bg-[#00ff96]/5 px-4 py-1.5 text-xs text-[#00ff96] font-mono mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff96] animate-pulse" />
                SYSTEM_ONLINE :: v2.0
              </motion.div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-6">
                <PhotoPlaceholder />
                <div className="text-center lg:text-left">
                  <h1 className={`text-5xl lg:text-7xl font-black mb-3 tracking-tight font-mono ${glitchActive ? 'glitch' : ''}`}>
                    <span className="text-white">Mohamed</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#00ff96] via-[#00e5ff] to-[#7c3aed] bg-clip-text text-transparent">
                      Reda
                    </span>
                  </h1>
                  <div className="text-[#00ff96] font-mono text-sm md:text-base opacity-80">
                    <span className="text-gray-500">{">"} </span>
                    Engineering Student · Penetration Tester · Software Tester
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed mb-8">
                A strategic innovator at the intersection of{" "}
                <span className="text-[#00ff96]">technical precision</span> and{" "}
                <span className="text-[#7c3aed]">creative expression</span>. Enthusiast in Software Quality and Cybersecurity, balanced by a mastery of Visual Design — ensuring security and aesthetics coexist in every project.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#00ff96] text-black font-bold font-mono text-sm hover:bg-[#00ff96]/90 transition-all hover:shadow-lg hover:shadow-[#00ff96]/25"
                >
                  <Terminal className="h-4 w-4" /> CONNECT
                </button>
                <a
                  href="https://linktr.ee/mhr_exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#00ff96]/30 text-[#00ff96] font-bold font-mono text-sm hover:bg-[#00ff96]/10 transition-all"
                >
                  <Link className="h-4 w-4" /> LINKTREE
                </a>
              </div>

              <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
                {[
                  { label: "Certifications", value: "3+" },
                  { label: "Projects", value: "5+" },
                  { label: "Years Learning", value: "3+" },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-black text-[#00ff96] font-mono">{stat.value}</p>
                    <p className="text-xs text-gray-500 font-mono">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex-1 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#00ff96]/5 blur-3xl scale-110" />
                <InteractiveGlobe size={420} />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#00ff96]/40 whitespace-nowrap">
                  [ DRAG TO ROTATE ]
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="text-center">
              <p className="text-[#00ff96] font-mono text-sm mb-3 opacity-70">// MISSION_STATEMENT</p>
              <h2 className="text-3xl md:text-5xl font-black font-mono text-white leading-tight">
                Security meets{" "}
                <span className="bg-gradient-to-r from-[#00ff96] via-[#00e5ff] to-[#7c3aed] bg-clip-text text-transparent">
                  creativity
                </span>
              </h2>
              <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">
                Building secure, beautiful, and tested digital experiences from Cairo to the world.
              </p>
            </div>
          }
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
              {[
                { icon: <Shield className="h-6 w-6" />, label: "Cyber Security", color: "#00ff96" },
                { icon: <Bug className="h-6 w-6" />, label: "Software QA", color: "#00e5ff" },
                { icon: <Code2 className="h-6 w-6" />, label: "Web Dev", color: "#7c3aed" },
                { icon: <Network className="h-6 w-6" />, label: "Networking", color: "#00ff96" },
                { icon: <Terminal className="h-6 w-6" />, label: "Python & Linux", color: "#00e5ff" },
                { icon: <Globe className="h-6 w-6" />, label: "Design", color: "#7c3aed" },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all"
                  style={{ boxShadow: `0 0 20px ${item.color}10` }}
                >
                  <div style={{ color: item.color }}>{item.icon}</div>
                  <span className="text-xs font-mono text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="text-[10px] font-mono text-[#00ff96]/30 tracking-widest">
              [ SCROLL TO EXPLORE ]
            </div>
          </div>
        </ContainerScroll>
      </section>

      <section id="about" className="relative py-24 z-10">
        <div className="container mx-auto px-6">
          <SectionHeader label="ABOUT_ME.exe" subtitle="skills & capabilities" />
          <ul className="grid grid-cols-2 md:grid-cols-12 gap-3 mt-12">
            {skills.map((skill) => (
              <li key={skill.name} className={`list-none min-h-[5rem] col-span-2 md:col-span-4 ${skill.area}`}>
                <motion.div
                  className="relative h-full rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-4 flex items-center gap-3 cursor-default"
                  whileHover={{ scale: 1.02, borderColor: "rgba(0,255,150,0.4)" }}
                  transition={{ duration: 0.2 }}
                >
                  <GlowingEffect disabled={false} />
                  <div className="w-8 h-8 rounded-lg bg-[#00ff96]/10 border border-[#00ff96]/20 flex items-center justify-center shrink-0 text-[#00ff96]">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold font-mono text-gray-200">{skill.name}</span>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experience" className="relative py-24 z-10">
        <div className="container mx-auto px-6">
          <SectionHeader label="EXPERIENCE.log" subtitle="career & achievements" />
          <div className="mt-12">
            <Timeline data={timelineData} />
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-24 z-10">
        <div className="container mx-auto px-6">
          <SectionHeader label="PROJECTS.db" subtitle="things I've built" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgba(0,255,150,0.4)" }}
                className="relative block rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 flex flex-col h-full group cursor-pointer"
              >
                <GlowingEffect disabled={false} />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-[#00ff96]/10 border border-[#00ff96]/20 flex items-center justify-center text-[#00ff96]">
                    {project.icon}
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-600 group-hover:text-[#00ff96] transition-colors" />
                </div>
                <h3 className="text-base font-bold font-mono text-white mb-2 relative z-10">{project.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed flex-1 mb-4 relative z-10">{project.description}</p>
                <div className="flex flex-wrap gap-1 relative z-10">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#00ff96]/10 border border-[#00ff96]/20 text-[#00ff96] font-mono">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 z-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeader label="CONTACT.sh" subtitle="get in touch" />
          <motion.div
            className="relative mt-12 rounded-2xl border border-[#00ff96]/20 bg-black/50 backdrop-blur-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlowingEffect disabled={false} spread={80} />
            <div className="text-center mb-10 relative z-10">
              <p className="text-gray-400 text-sm">
                {">"} Open to opportunities in Cybersecurity, Software Testing, and innovative tech projects.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
              {[
                {
                  icon: <Phone className="h-5 w-5" />,
                  label: "Phone",
                  value: "+20 101 523 0604",
                  href: "tel:+201015230604",
                  external: false,
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  label: "Email",
                  value: "mohamedreda.dx\n@gmail.com",
                  href: "mailto:mohamedreda.dx@gmail.com",
                  external: false,
                },
                {
                  icon: <Link className="h-5 w-5" />,
                  label: "Linktree",
                  value: "linktr.ee/mhr_exe",
                  href: "https://linktr.ee/mhr_exe",
                  external: true,
                },
              ].map(contact => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 hover:border-[#00ff96]/40 bg-black/30 hover:bg-[#00ff96]/5 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00ff96]/10 border border-[#00ff96]/20 flex items-center justify-center text-[#00ff96] group-hover:bg-[#00ff96]/20 transition-colors">
                    {contact.icon}
                  </div>
                  <p className="text-[10px] text-gray-500 font-mono uppercase">{contact.label}</p>
                  <p className="text-xs text-white font-mono text-center break-all whitespace-pre-line">{contact.value}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5 py-8 text-center font-mono text-xs text-gray-600">
        <p>© 2026 Mohamed Reda · <span className="text-[#00ff96]">mhr_exe</span></p>
        <p className="mt-1 text-[10px] opacity-50">{"[ SYSTEM SECURE | ALL PORTS CLOSED ]"}</p>
      </footer>
    </div>
  );
}

function SectionHeader({ label, subtitle }: { label: string; subtitle: string }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-2">
        <ChevronRight className="h-4 w-4 text-[#00ff96]" />
        <h2 className="text-2xl md:text-3xl font-black font-mono text-white">{label}</h2>
      </div>
      <p className="text-[#00ff96]/60 font-mono text-xs ml-7">// {subtitle}</p>
      <div className="ml-7 mt-3 h-px w-24 bg-gradient-to-r from-[#00ff96] to-transparent" />
    </motion.div>
  );
}
