'use client'
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import ThreeScene from "./ThreeScene";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const pRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
      
      tl.from(titleRef.current, { y: 50, opacity: 0, delay: 0.2 })
        .from(subRef.current, { y: 30, opacity: 0 }, "-=0.6")
        .from(pRef.current, { y: 30, opacity: 0 }, "-=0.6")
        .from(socialRef.current.children, { 
          scale: 0, 
          opacity: 0, 
          stagger: 0.1,
          ease: "back.out(1.7)"
        }, "-=0.4");
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <ThreeScene />
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 font-workSans">
          <span className="block text-slate-900 dark:text-white">Songa Gowri Tharun</span>
        </h1>
        <div ref={subRef} className="flex items-center justify-center gap-4 text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium font-roboto">
          <span>Web Developer</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          <span>Problem Solver</span>
        </div>
        <p ref={pRef} className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-openSans">
          A passionate software developer who loves solving complex problems with simple, creative solutions. 
          Skilled in MERN and Java, I enjoy transforming ideas into clean, scalable, and impactful applications.
        </p>
        
        <div ref={socialRef} className="flex flex-wrap items-center justify-center gap-6">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-600/20 font-bold"
          >
            <FileText size={20} />
            <span>Download Resume</span>
          </a>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/gowritharun-songa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all shadow-sm"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gowri-tharun/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all shadow-sm"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:gowritharun461@gmail.com" 
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all shadow-sm"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;