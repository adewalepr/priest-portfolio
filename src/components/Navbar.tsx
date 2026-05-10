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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-background/60 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent'
        }`}>
          <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            Priest<span className="gradient-text">.dev</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-[1px] bg-border mx-2" />
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 px-6 md:hidden"
          >
            <div className="glass rounded-2xl p-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex items-center space-x-6">
                <a href="https://github.com" className="text-muted"><Github size={24} /></a>
                <a href="https://linkedin.com" className="text-muted"><Linkedin size={24} /></a>
                <a href="mailto:contact@example.com" className="text-muted"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
