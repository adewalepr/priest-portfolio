"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-8">Architect of the Digital</h2>
            <h3 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-tight text-white">
              Bridging <span className="gradient-text">Logic</span> <br />
              & Artistry.
            </h3>
            <div className="space-y-8 text-muted text-xl leading-relaxed font-light">
              <p>
                I am a Full-Stack Engineer and Computer Science student obsessed with building high-performance 
                ecosystems. My work lives at the intersection of technical precision and human-centric design.
              </p>
              <p>
                From engineering complex <span className="text-white font-medium">Fintech Resolvers</span> to 
                deploying <span className="text-white font-medium">AI-driven educators</span>, I specialize 
                in creating systems that don&apos;t just work—they inspire.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <p className="text-4xl font-bold text-white mb-2">20+</p>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">Solutions Delivered</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-2">3+</p>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">Years of Code</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 mix-blend-overlay z-10" />
              <Image 
                src="/avatar.png" 
                alt="Priest Adewale" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[60px] animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
