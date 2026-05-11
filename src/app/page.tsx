"use client";

import { ArrowUpRight, Mail, Github, Linkedin, MoveRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import portrait from "@/assets/portrait.jpg";

const stack = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Tailwind"],
  Backend: ["Node.js", "Express.js"],
  Tools: ["Git", "GitHub", "Vercel", "Render", "Airtable", "Make.com", "Flutterwave"],
  "AI / Automation": ["OpenAI API", "AI Integrations", "Workflows"],
};

const projects = [
  { n: "01", title: "AI Student Assistant", year: "2025", tags: ["React", "OpenAI", "Node.js"], blurb: "An AI-powered educational assistant helping students study smarter through conversational tutoring." },
  { n: "02", title: "Sentinel Payment Resolver", year: "2025", tags: ["React", "Airtable", "Make.com", "Flutterwave"], blurb: "Payment resolution and automation platform that streamlines transaction tracking and dispute handling." },
  { n: "03", title: "E-Commerce Platform", year: "2024", tags: ["React", "Tailwind", "Node.js"], blurb: "A modern fashion storefront with authentication, browsing and a fully responsive interface." },
  { n: "04", title: "Automated Luxury Booking", year: "2024", tags: ["Softr", "Airtable", "Make.com"], blurb: "Smart apartment booking system with end-to-end automated workflows and integrated payments." },
];

const journey = [
  { year: "2024", title: "The Beginning", body: "Started in web and mobile development — fundamentals of programming and interface design." },
  { year: "2024", title: "AI & Automation", body: "Built first AI automation systems and integrated large language models into real applications." },
  { year: "2025", title: "Real-World Impact", body: "Shipped multiple platforms for clients — payment resolvers and e-commerce solutions." },
  { year: "2025", title: "Continuous Growth", body: "Exploring cybersecurity via TryHackMe while sharpening Next.js and Tailwind craft." },
];

const services = [
  "Frontend Development",
  "Full-Stack Web Apps",
  "Mobile Development",
  "AI Integrations",
  "Automation Systems",
  "UI/UX Implementation",
];

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="grain min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background cursor-none">
      <CustomCursor />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-foreground z-[100] origin-left"
        style={{ scaleX }}
      />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Projects />
      <Journey />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(target.closest('a, button, [role="button"]') !== null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePos.x - 16,
        y: mousePos.y - 16,
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}

function Nav() {
  const links = [
    ["About", "#about"],
    ["Work", "#work"],
    ["Journey", "#journey"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#top" 
          className="serif text-2xl tracking-tighter hover:opacity-70 transition-opacity"
        >
          Priest<span className="italic text-muted-foreground opacity-60">.adewale</span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.25em] font-medium">
          {links.map(([l, h], i) => (
            <motion.a 
              key={l} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={h} 
              className="hover:text-muted-foreground transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </nav>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#contact"
          className="text-[10px] uppercase tracking-[0.2em] font-bold border border-foreground/20 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-all"
        >
          Available '26
        </motion.a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-40 md:pt-56 pb-24 md:pb-36 px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-12"
        >
          <span className="h-px w-12 bg-foreground/30" />
          <span>Portfolio — Vol. 01 / MMXXVI</span>
        </motion.div>
        
        <h1 className="serif text-[15vw] md:text-[11vw] leading-[0.82] tracking-[-0.04em]">
          <motion.span 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Modern web,
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block italic text-muted-foreground/60"
          >
            crafted
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            with intent & <span className="italic">AI.</span>
          </motion.span>
        </h1>

        <div className="mt-16 grid md:grid-cols-12 gap-10 items-end">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="md:col-span-5 md:col-start-7 text-lg md:text-xl leading-relaxed text-ink-soft font-light"
          >
            Hi, I'm <span className="font-semibold text-foreground">Priest Adewale</span> — a full-stack developer architecting high-performance frontends, scalable mobile apps and intelligent automation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="md:col-span-12 mt-12 flex flex-wrap items-center gap-6"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:shadow-2xl transition-all"
            >
              Selected Work
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-foreground hover:text-background transition-all"
            >
              Start a project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Next.js", "React Native", "TypeScript", "Node.js", "OpenAI", "Tailwind", "Automation", "Make.com"];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="border-y border-border/40 py-10 overflow-hidden bg-secondary/20 relative">
      <div className="flex gap-16 marquee whitespace-nowrap serif text-4xl md:text-6xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className="italic text-muted-foreground/40 hover:text-foreground transition-colors cursor-default">{t}</span>
            <span className="text-foreground/20 text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60 mb-14">
      <span className="font-bold">({n})</span>
      <span className="h-px flex-1 bg-border/40" />
      <span className="font-bold">{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="01" label="About" />
        <div className="grid md:grid-cols-12 gap-16 md:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5 md:sticky md:top-32"
          >
            <div className="aspect-[4/5] overflow-hidden bg-secondary/40 rounded-sm relative group shadow-2xl">
              <div className="absolute inset-0 bg-background/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
              <Image src={portrait} alt="Priest Adewale" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" />
            </div>
            <div className="mt-10 grid grid-cols-2 gap-10">
              <div className="reveal">
                <div className="serif text-6xl leading-none">20<span className="italic text-muted-foreground/40">+</span></div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-3 font-bold">Solutions shipped</div>
              </div>
              <div className="reveal">
                <div className="serif text-6xl leading-none">2024</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-3 font-bold">Genesis</div>
              </div>
            </div>
          </motion.div>
          
          <div className="md:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="serif text-6xl md:text-[88px] leading-[0.9] tracking-[-0.03em]"
            >
              Crafting digital
              <br />
              <span className="italic">excellence</span> with
              <br />
              code & creativity.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-14 space-y-8 text-xl md:text-2xl leading-relaxed text-ink-soft max-w-xl font-light"
            >
              <p>
                I'm a Computer Science student obsessed with building high-impact digital ecosystems — bridging complex backend logic with beautiful, intuitive frontend experiences.
              </p>
              <p>
                I specialize in <span className="text-foreground font-medium underline underline-offset-8 decoration-border/60">frontend engineering</span> with Next.js, but I also architect robust systems using AI to solve tangible problems.
              </p>
              <p className="text-lg md:text-xl opacity-70">
                Whether it's a fintech platform, an AI educator, or a luxury storefront — I focus on performance, scale, and human-centric design.
              </p>
              
              <div className="pt-10">
                <a href="#contact" className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-bold border-b border-foreground/20 pb-2 hover:border-foreground transition-all">
                  Read Full Bio 
                  <MoveRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-48 border-t border-border/40">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="02" label="Core Stack" />
        <h2 className="serif text-6xl md:text-[88px] leading-[0.9] tracking-[-0.03em] mb-20">
          Technologies <span className="italic">mastered.</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-px bg-border/40 border border-border/40">
          {Object.entries(stack).map(([cat, items], idx) => (
            <motion.div 
              key={cat} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background p-10 md:p-14"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-10 font-bold">{cat}</div>
              <ul className="space-y-4 serif text-3xl">
                {items.map((it) => (
                  <li key={it} className="hover:italic transition-all cursor-default hover:translate-x-1 duration-300">{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-32 md:py-48 border-t border-border/40">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="03" label="Selected Work" />
        <h2 className="serif text-6xl md:text-[88px] leading-[0.9] tracking-[-0.03em] mb-20">
          Featured <span className="italic">projects.</span>
        </h2>
        <div className="border-t border-foreground">
          {projects.map((p, idx) => (
            <motion.a
              key={p.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              href="#contact"
              className="group grid grid-cols-12 gap-6 md:gap-10 items-center py-12 md:py-16 border-b border-border/40 hover:bg-secondary/10 transition-all px-4"
            >
              <div className="col-span-1 text-[10px] tracking-[0.2em] text-muted-foreground/40 font-bold">{p.n}</div>
              <div className="col-span-11 md:col-span-4 serif text-4xl md:text-5xl tracking-tighter group-hover:italic group-hover:translate-x-2 transition-all duration-500">
                {p.title}
              </div>
              <div className="col-span-8 md:col-span-4 text-base text-ink-soft hidden md:block font-light leading-relaxed">
                {p.blurb}
              </div>
              <div className="col-span-9 md:col-span-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[9px] uppercase tracking-[0.15em] border border-border/40 rounded-full px-3 py-1 text-muted-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="col-span-3 md:col-span-1 flex items-center justify-end gap-3 text-xs">
                <span className="text-muted-foreground/40 font-bold">{p.year}</span>
                <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-all duration-500" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="px-6 md:px-10 py-32 md:py-48 border-t border-border/40 bg-secondary/10">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="04" label="The Journey" />
        <h2 className="serif text-6xl md:text-[88px] leading-[0.9] tracking-[-0.03em] mb-20">
          Milestones & <span className="italic">experience.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-border/40 border border-border/40">
          {journey.map((j, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-background p-12 md:p-16 hover:bg-secondary/5 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-10">
                <span className="serif text-7xl leading-none">{j.year}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40 font-bold">Ch. 0{i + 1}</span>
              </div>
              <h3 className="serif text-4xl mb-6 tracking-tight">{j.title}</h3>
              <p className="text-ink-soft text-lg leading-relaxed font-light">{j.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-32 md:py-48 border-t border-border/40">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="05" label="Services" />
        <h2 className="serif text-6xl md:text-[88px] leading-[0.9] tracking-[-0.03em] mb-20">
          How I can <span className="italic">help.</span>
        </h2>
        <ul className="border-b border-border/40">
          {services.map((s, i) => (
            <motion.a
              key={s}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              href="#contact"
              className="group flex items-center justify-between py-10 md:py-14 border-t border-border/40 hover:bg-secondary/5 px-4 transition-colors"
            >
              <div className="flex items-center gap-10 md:gap-16">
                <span className="text-[10px] text-muted-foreground/40 tracking-[0.3em] font-bold">{String(i + 1).padStart(2, "0")}</span>
                <span className="serif text-4xl md:text-6xl group-hover:italic group-hover:translate-x-4 transition-all duration-700">
                  {s}
                </span>
              </div>
              <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 opacity-20 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700" />
            </motion.a>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-32 md:py-56 border-t border-border/40 bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-background/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="mx-auto max-w-[1400px] relative z-10">
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-background/40 mb-16">
          <span className="font-bold">(06)</span>
          <span className="h-px flex-1 bg-background/10" />
          <span className="font-bold">Get In Touch</span>
        </div>
        
        <h2 className="serif text-7xl md:text-[9.5vw] leading-[0.85] tracking-[-0.04em]">
          Let's build
          <br />
          <span className="italic text-background/50">something</span>
          <br />
          extraordinary.
        </h2>
        
        <div className="mt-24 grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-6">
            <p className="text-xl md:text-2xl text-background/60 max-w-md leading-relaxed font-light">
              Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
            </p>
            <div className="mt-12">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:priesthood812@gmail.com"
                className="inline-flex items-center gap-4 bg-background text-foreground px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold shadow-2xl"
              >
                Send a Message
                <Mail className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
          <div className="md:col-span-6 space-y-2 border-t border-background/10">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="priesthood812@gmail.com" href="mailto:priesthood812@gmail.com" />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="priest-adewale" href="https://linkedin.com/in/priest-adewale-14155a403" />
            <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="adewalepr" href="https://github.com/adewalepr" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between py-8 border-b border-background/10"
    >
      <div className="flex items-center gap-6">
        <span className="text-background/30 group-hover:text-background transition-colors">{icon}</span>
        <span className="text-[9px] uppercase tracking-[0.3em] text-background/40 font-bold">{label}</span>
      </div>
      <div className="flex items-center gap-4 serif text-3xl md:text-4xl group-hover:italic group-hover:-translate-x-2 transition-all duration-500">
        {value}
        <ArrowUpRight className="h-5 w-5 opacity-30 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-16 bg-foreground text-background/40 text-[9px] uppercase tracking-[0.3em] font-bold">
      <div className="mx-auto max-w-[1400px] flex flex-wrap items-center justify-between gap-8 border-t border-background/10 pt-12">
        <div className="flex gap-8">
          <span>© MMXXVI</span>
          <span>Priest Adewale</span>
        </div>
        <div className="serif italic text-xl md:text-2xl text-background/70 lowercase tracking-normal font-normal">
          Designed & built with care.
        </div>
        <div className="flex gap-8">
          <span>Lagos ⇄ Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
