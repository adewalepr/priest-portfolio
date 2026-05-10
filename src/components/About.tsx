"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Crafting digital excellence with <span className="gradient-text">code and creativity.</span>
            </h3>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                I am a Computer Science student with a passion for building high-quality digital products. 
                My journey in development is driven by a desire to bridge the gap between complex 
                backend logic and beautiful, intuitive frontend experiences.
              </p>
              <p>
                I specialize in <span className="text-foreground font-medium">Frontend Engineering</span>, 
                leveraging modern frameworks like Next.js and React to create responsive, fast-loading interfaces. 
                But my skills don&apos;t stop there—I also build robust backends with Node.js and integrate 
                AI-powered solutions to solve real-world problems.
              </p>
              <p>
                Whether it&apos;s a fintech platform, an AI educational assistant, or an e-commerce store, 
                I focus on performance, scalability, and user-centric design.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl glass overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 group-hover:opacity-100 transition-opacity" />
              <Image 
                src="/avatar.png" 
                alt="Priest Adewale" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Stats */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl">
              <p className="text-3xl font-bold gradient-text">20+</p>
              <p className="text-xs text-muted font-medium uppercase tracking-wider">Projects Built</p>
            </div>
            <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl shadow-2xl">
              <p className="text-3xl font-bold gradient-text">2024</p>
              <p className="text-xs text-muted font-medium uppercase tracking-wider">Started Journey</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
