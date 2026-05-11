"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Smartphone, Bot, Cpu, Zap } from 'lucide-react';

const services = [
  {
    title: "Frontend Development",
    description: "Building high-performance, pixel-perfect web interfaces using Next.js, React, and Tailwind CSS.",
    icon: <Layout className="w-8 h-8" />
  },
  {
    title: "Full-Stack Web Apps",
    description: "End-to-end web applications with scalable architectures and robust backend integrations.",
    icon: <Code2 className="w-8 h-8" />
  },
  {
    title: "Mobile Development",
    description: "Developing cross-platform mobile experiences with React Native and modern UI patterns.",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: "AI Integrations",
    description: "Powering applications with intelligent features using OpenAI, LangChain, and custom AI models.",
    icon: <Bot className="w-8 h-8" />
  },
  {
    title: "Automation Systems",
    description: "Streamlining workflows using Make.com, Airtable, and custom serverless functions.",
    icon: <Cpu className="w-8 h-8" />
  },
  {
    title: "UI/UX Implementation",
    description: "Translating complex designs into interactive, accessible, and user-friendly web experiences.",
    icon: <Zap className="w-8 h-8" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-4">Core Competencies</h2>
          <h3 className="text-5xl font-bold tracking-tighter text-white">How I <span className="gradient-text">Empower Brands.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] glass hover:bg-white/5 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
              
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl border border-white/5">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">{service.title}</h4>
              <p className="text-muted leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
