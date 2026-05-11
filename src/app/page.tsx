import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030303] selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      {/* Noise Texture */}
      <div className="noise" />
      
      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Mouse Follow Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 opacity-0 md:opacity-100"
          style={{ left: 'var(--mouse-x, 50%)', top: 'var(--mouse-y, 50%)' }}
        />
      </div>

      <ScrollProgress />
      <Navbar />
      
      <div className="relative z-10" onMouseMove={(e) => {
        const x = e.clientX + 'px';
        const y = e.clientY + 'px';
        document.documentElement.style.setProperty('--mouse-x', x);
        document.documentElement.style.setProperty('--mouse-y', y);
      }}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <ContactForm />
      </div>
      
    </main>
  );
}
