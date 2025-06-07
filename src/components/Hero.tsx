import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';
import image from '../Image/IMG_2031.jpg';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const blob1 = document.querySelector('.blob-1') as HTMLElement;
      const blob2 = document.querySelector('.blob-2') as HTMLElement;
      
      if (blob1 && blob2) {
        blob1.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        blob2.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20" ref={heroRef}>
      {/* Background blobs */}
      <div className="blob-1 absolute top-1/4 right-1/4 w-[600px] h-[600px] opacity-20 rounded-full bg-gradient-to-r from-primary to-secondary blur-[80px] z-0"></div>
      <div className="blob-2 absolute bottom-1/4 left-1/4 w-[400px] h-[400px] opacity-15 rounded-full bg-gradient-to-r from-secondary to-accent blur-[60px] z-0"></div>
      
      <div className="hero-bg"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.p 
              className="text-primary font-medium text-lg mb-4"
              variants={fadeInUp}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Krishna patel
              <span className="block text-2xl md:text-4xl mt-2 gradient-text">Frontend Web Developer</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg opacity-80 mb-8 max-w-lg mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              I build exceptional digital experiences that inspire and delight users. With over 6 years of hands-on experience, I specialize in creating fast, modern, and responsive web applications using React, TypeScript, and Tailwind CSS. From reusable UI components to secure API integrations, I bring full-stack skills to the frontend world — blending clean code with creative design.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <Button href="#projects" variant="primary" size="lg">
                View My Work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex mt-8 gap-6 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/developer-krishna/" target="_blank" rel="noopener noreferrer" 
                className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="gradient-border rounded-full aspect-square overflow-hidden">
                <img 
                  src={image}
                  alt="John Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <ArrowDown className="animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
};