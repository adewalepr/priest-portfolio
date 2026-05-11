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
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h3 className="text-5xl font-bold tracking-tight">Featured <span className="gradient-text">Work.</span></h3>
          </div>
          <p className="max-w-md text-muted text-lg">
            A collection of high-impact digital products, from AI-driven ecosystems to premium e-commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px]">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700 ${
                idx === 0 ? 'md:col-span-8 md:row-span-2' : 
                idx === 1 ? 'md:col-span-4 md:row-span-2' :
                'md:col-span-6 md:row-span-1'
              }`}
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted text-sm mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all text-white">
                    <Github size={20} />
                  </a>
                  <a href={project.link} target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all text-white">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
