"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic Animated Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 shadow-xl cursor-pointer"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">Available for Opportunities</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-[140px] font-extrabold tracking-tighter mb-8 leading-[0.85] text-white drop-shadow-2xl">
            DESIGNING <br />
            <span className="gradient-text italic pr-4">THE FUTURE.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-3xl text-muted mb-14 font-light leading-relaxed">
            I am <span className="text-white font-medium">Priest Adewale</span>. 
            A visionary Full-Stack Developer architecting intelligent, high-performance digital ecosystems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="group px-12 py-5 rounded-full bg-white text-black text-lg font-bold hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all flex items-center gap-3"
            >
              Explore Work
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-12 py-5 rounded-full glass text-lg font-bold transition-all border border-white/10 hover:border-white/30"
            >
              Get in touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted/50"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
