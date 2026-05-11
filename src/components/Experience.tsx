"use client";

import React from 'react';
import { motion } from 'framer-motion';

const journey = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Started my journey in web and mobile development, focusing on the fundamentals of programming and UI design."
  },
  {
    year: "2024",
    title: "AI & Automation",
    description: "Built my first AI automation systems and integrated large language models into real-world applications."
  },
  {
    year: "2025",
    title: "Real-World Impact",
    description: "Developed and deployed multiple platforms for clients, including payment resolvers and e-commerce solutions."
  },
  {
    year: "2025",
    title: "Continuous Growth",
    description: "Exploring cybersecurity through TryHackMe while perfecting my frontend engineering skills with Next.js and Tailwind."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">The Journey</h2>
            <h3 className="text-4xl font-bold tracking-tight">Milestones & <span className="gradient-text">Experience.</span></h3>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {journey.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative flex flex-col md:flex-row items-center gap-8"
                >
                  <div className={`flex-1 w-full ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-primary font-bold text-lg mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-muted leading-relaxed">{item.description}</p>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(139,92,246,0.5)] border-4 border-background hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
