"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-grid opacity-[0.15]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            Available for New Opportunities
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
            I build <span className="gradient-text">modern web</span> <br />
            & AI-powered systems.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted mb-10 leading-relaxed">
            Hi, I&apos;m <span className="text-foreground font-medium">Priest Adewale</span>. 
            A Full-Stack Developer specializing in high-performance frontend engineering, 
            scalable mobile apps, and intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full glass font-semibold hover:bg-white/5 transition-all">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
