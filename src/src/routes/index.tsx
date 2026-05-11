import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priest Adewale — Full-Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Priest Adewale — full-stack developer building modern web, mobile, and AI-powered systems.",
      },
      { property: "og:title", content: "Priest Adewale — Full-Stack Developer" },
      {
        property: "og:description",
        content: "Modern web & AI-powered systems. Frontend engineering, mobile, and automation.",
      },
    ],
  }),
  component: Index,
});

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

function Index() {
  return (
    <div className="grain min-h-screen bg-background text-foreground">
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

function Nav() {
  const links = [
    ["About", "#about"],
    ["Work", "#work"],
    ["Journey", "#journey"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="serif text-xl tracking-tight">
          Priest<span className="italic text-muted-foreground">.adewale</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.18em]">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="hover:text-muted-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-xs uppercase tracking-[0.18em] border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
        >
          Available '26
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-10 reveal">
          <span className="h-px w-10 bg-foreground" />
          <span>Portfolio — Vol. 01 / MMXXVI</span>
        </div>
        <h1 className="serif text-[14vw] md:text-[10.5vw] leading-[0.88] tracking-[-0.03em] reveal">
          Modern web,
          <br />
          <span className="italic text-muted-foreground">crafted</span> with
          <br />
          intent &amp; <span className="italic">AI.</span>
        </h1>
        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-5 md:col-start-7 text-base md:text-lg leading-relaxed text-ink-soft max-w-md reveal">
            Hi, I'm <span className="font-medium text-foreground">Priest Adewale</span> — a full-stack developer building high-performance frontends, scalable mobile apps and intelligent automation.
          </p>
          <div className="md:col-span-12 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-full text-sm tracking-wide hover:bg-ink-soft transition-colors"
            >
              View Selected Work
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3.5 rounded-full text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Next.js", "React Native", "TypeScript", "Node.js", "OpenAI", "Tailwind", "Automation", "Make.com"];
  const row = [...items, ...items, ...items];
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-secondary/40">
      <div className="flex gap-12 marquee whitespace-nowrap serif text-3xl md:text-4xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="italic text-muted-foreground">{t}</span>
            <span className="text-foreground">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-10">
      <span>({n})</span>
      <span className="h-px flex-1 bg-border" />
      <span>{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="01" label="About" />
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5 md:sticky md:top-24">
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              <img src={portrait} alt="Priest Adewale" className="w-full h-full object-cover grayscale" width={896} height={1152} />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <div className="serif text-5xl">20<span className="italic text-muted-foreground">+</span></div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">Projects shipped</div>
              </div>
              <div>
                <div className="serif text-5xl">2024</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">Started journey</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-10">
            <h2 className="serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em]">
              Crafting digital
              <br />
              <span className="italic">excellence</span> with
              <br />
              code &amp; creativity.
            </h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-soft max-w-xl">
              <p>
                I'm a Computer Science student with a passion for building high-quality digital products — bridging complex backend logic with beautiful, intuitive frontend experiences.
              </p>
              <p>
                I specialize in <span className="text-foreground">frontend engineering</span> with Next.js and React, but I also build robust Node.js backends and integrate AI to solve real problems.
              </p>
              <p>
                Whether it's a fintech platform, an AI educational assistant, or a storefront — I focus on performance, scale, and people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="02" label="Core Stack" />
        <h2 className="serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em] mb-16">
          Technologies <span className="italic">mastered.</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-px bg-border border border-border">
          {Object.entries(stack).map(([cat, items]) => (
            <div key={cat} className="bg-background p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">{cat}</div>
              <ul className="space-y-3 serif text-2xl">
                {items.map((it) => (
                  <li key={it} className="hover:italic transition-all cursor-default">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="03" label="Selected Work" />
        <h2 className="serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em] mb-16">
          Featured <span className="italic">projects.</span>
        </h2>
        <div className="border-t border-foreground">
          {projects.map((p) => (
            <a
              key={p.n}
              href="#contact"
              className="group grid grid-cols-12 gap-4 md:gap-8 items-center py-8 md:py-10 border-b border-border hover:bg-secondary/40 transition-colors px-2"
            >
              <div className="col-span-1 text-xs tracking-[0.18em] text-muted-foreground">{p.n}</div>
              <div className="col-span-11 md:col-span-4 serif text-3xl md:text-4xl tracking-tight group-hover:italic transition-all">
                {p.title}
              </div>
              <div className="col-span-8 md:col-span-4 text-sm text-ink-soft hidden md:block">{p.blurb}</div>
              <div className="col-span-9 md:col-span-2 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-[0.15em] border border-border rounded-full px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="col-span-3 md:col-span-1 flex items-center justify-end gap-2 text-sm">
                <span className="text-muted-foreground">{p.year}</span>
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="px-6 md:px-10 py-24 md:py-32 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="04" label="The Journey" />
        <h2 className="serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em] mb-16">
          Milestones &amp; <span className="italic">experience.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {journey.map((j, i) => (
            <div key={i} className="bg-background p-10 md:p-12">
              <div className="flex items-baseline justify-between mb-6">
                <span className="serif text-5xl">{j.year}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Ch. 0{i + 1}</span>
              </div>
              <h3 className="serif text-3xl mb-3">{j.title}</h3>
              <p className="text-ink-soft leading-relaxed">{j.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="05" label="Services" />
        <h2 className="serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em] mb-16">
          How I can <span className="italic">help.</span>
        </h2>
        <ul>
          {services.map((s, i) => (
            <li
              key={s}
              className="group flex items-center justify-between py-6 md:py-8 border-t border-border last:border-b cursor-default"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span className="text-xs text-muted-foreground tracking-[0.18em]">{String(i + 1).padStart(2, "0")}</span>
                <span className="serif text-3xl md:text-5xl group-hover:italic group-hover:translate-x-2 transition-all">
                  {s}
                </span>
              </div>
              <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-40 border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-background/60 mb-10">
          <span>(06)</span>
          <span className="h-px flex-1 bg-background/30" />
          <span>Get In Touch</span>
        </div>
        <h2 className="serif text-6xl md:text-[9vw] leading-[0.9] tracking-[-0.03em]">
          Let's build
          <br />
          <span className="italic text-background/70">something</span>
          <br />
          extraordinary.
        </h2>
        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="text-lg text-background/70 max-w-md leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
            </p>
          </div>
          <div className="md:col-span-6 space-y-4">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="priest@adewale.dev" href="mailto:priest@adewale.dev" />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="adewalepr" href="https://linkedin.com/in/adewalepr" />
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
      className="group flex items-center justify-between py-5 border-t border-background/20 last:border-b"
    >
      <div className="flex items-center gap-4">
        <span className="text-background/60">{icon}</span>
        <span className="text-xs uppercase tracking-[0.18em] text-background/60">{label}</span>
      </div>
      <div className="flex items-center gap-3 serif text-2xl group-hover:italic transition-all">
        {value}
        <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-transform" />
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 bg-foreground text-background/60 text-xs uppercase tracking-[0.18em]">
      <div className="mx-auto max-w-[1400px] flex flex-wrap items-center justify-between gap-4 border-t border-background/20 pt-8">
        <span>© MMXXVI Priest Adewale</span>
        <span className="serif italic text-base text-background/80">Designed &amp; built with care.</span>
        <span>Lagos ⇄ Worldwide</span>
      </div>
    </footer>
  );
}
