"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techData = [
  { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Tailwind CSS"] },
  { category: "Backend", skills: ["Node.js", "Express.js"] },
  { category: "Tools", skills: ["Git", "GitHub", "Vercel", "Render", "Airtable", "Make.com", "Flutterwave"] },
  { category: "AI & Automation", skills: ["OpenAI API", "AI Integrations", "Automation Workflows"] }
];

const TechStack = () => {
  return (
    <section id="tech" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Core Stack</h2>
          <h3 className="text-4xl font-bold tracking-tight">Technologies I <span className="gradient-text">Mastered.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group"
            >
              <h4 className="text-lg font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-border/50 text-muted text-xs font-medium hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
