"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            Priest<span className="gradient-text">.dev</span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted">
            <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
            <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
            <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted hover:text-foreground transition-colors"><Github size={20} /></a>
            <a href="#" className="text-muted hover:text-foreground transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-muted hover:text-foreground transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-muted hover:text-foreground transition-colors"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60 uppercase tracking-widest font-medium">
          <p>© {currentYear} Priest Adewale. All rights reserved.</p>
          <p>Built with Next.js, Framer Motion & Passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
