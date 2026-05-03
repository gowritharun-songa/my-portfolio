'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div ref={imageRef} className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ring-8 ring-white dark:ring-slate-800">
              <Image 
                src="/assets/main.jpg" 
                alt="Songa Gowri Tharun" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div ref={contentRef} className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white font-workSans">
              About Me
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-openSans">
              <p>
                Hello, I&apos;m <span className="text-blue-600 dark:text-blue-400 font-semibold text-xl">Songa Gowri Tharun</span>. 
                I&apos;m an aspiring full-stack web developer pursuing a B.Tech in Electronics and Communication Engineering 
                at Ramachandra College of Engineering, set to graduate in 2026.
              </p>
              <p>
                With hands-on experience in MERN stack projects like a creator marketplace platform (Have IT) 
                and an e-commerce site (Shoe Fusion), plus internships in full-stack development at StudyOwl Education 
                and embedded systems at Blackbucks, I excel in technologies such as React, Node.js, Express.js, MongoDB, Java, and Python.
              </p>
              <p>
                My skills include problem-solving, team leadership, and adaptability, complemented by certifications in 
                C, Python, JavaScript, Java, and data structures. Interests include creative character design, 
                wedding photography, and food exploration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;