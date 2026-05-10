"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "AI Student Assistant",
    description: "An AI-powered educational assistant that helps students ask questions and study smarter using OpenAI.",
    tech: ["React", "OpenAI API", "Node.js", "Vercel"],
    link: "https://ai-student-assistant-one.vercel.app/",
    github: "https://github.com/adewalepr/sentinel-payment-resolver1",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "Sentinel Payment Resolver",
    description: "A payment resolution and automation platform designed to streamline transaction tracking and issues.",
    tech: ["React", "Airtable", "Make.com", "Flutterwave"],
    link: "https://sentinel-payment-resolver1.onrender.com",
    github: "https://github.com/adewalepr/sentinel-payment-resolver1",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "E-Commerce Website",
    description: "A modern platform for fashion products with authentication, browsing, and responsive UI.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    link: "https://ecommerce-three-gamma-96.vercel.app/",
    github: "https://github.com/adewalepr/sentinel-payment-resolver1",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Automated Luxury Booking",
    description: "A smart apartment booking system with automated workflows and payment integration.",
    tech: ["Softr", "Airtable", "Make.com", "Flutterwave"],
    link: "#",
    github: "https://github.com/adewalepr/sentinel-payment-resolver1",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  }
];

const mobileApps = ["Piano App", "Quizzler App", "Magic 8 App", "Attendance App"];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold tracking-tight">Featured <span className="gradient-text">Projects.</span></h3>
          </div>
          <p className="max-w-md text-muted text-lg">
            A selection of my best work, ranging from AI applications to complex automation systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden glass mb-6">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-3 rounded-full glass hover:bg-white/10 text-white transition-all">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="p-3 rounded-full bg-primary text-white hover:scale-110 transition-all shadow-lg shadow-primary/20">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <h4 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                  {project.title}
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                </h4>
                <p className="text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Apps Section */}
        <div className="mt-24 p-12 rounded-[3rem] glass relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h4 className="text-2xl font-bold mb-8">Mobile App Showcase</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mobileApps.map((app) => (
                <div key={app} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all text-center">
                  <p className="font-semibold text-muted hover:text-foreground transition-colors">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
