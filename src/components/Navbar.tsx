"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`mx-auto max-w-5xl rounded-full transition-all duration-500 flex items-center justify-between px-8 ${
          scrolled ? 'bg-black/40 backdrop-blur-2xl border border-white/10 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent py-2'
        }`}>
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white group flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm">PA</div>
            <span className="hidden sm:block">PRIEST.</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold text-muted hover:text-white transition-colors tracking-[0.2em] uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/adewalepr" 
              target="_blank" 
              className="p-2 text-muted hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/adewalepr" 
              target="_blank" 
              className="p-2 text-muted hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 glass-morphism rounded-[2rem] md:hidden z-50"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
