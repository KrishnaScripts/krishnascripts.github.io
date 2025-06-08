import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, BookOpen } from 'lucide-react';
import imageReact from '../Image/download.png';
import imageTypescript from '../Image/download (1).jpeg';
import imageNodejs from '../Image/Nodejs.png';
import imageTailwandcss from '../Image/tailwandcss.jpeg';
import imageMongodb from '../Image/mongoDB.png';



export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { icon: <Calendar size={24} />, value: '6+', label: 'Years Experience' },
    { icon: <Award size={24} />, value: '20+', label: 'Projects Completed' },
    { icon: <BookOpen size={24} />, value: '10+', label: 'Technologies' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.div 
            className="lg:w-1/2"
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="gradient-border rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right--1 bg-card p-6 rounded-lg gradient-border shadow-lg">
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex justify-center mb-2 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-70">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2> 
            <div className="w-20 h-1 bg-primary mb-6"></div>
            
            <p className="text-lg mb-6 opacity-80">
             I'm a results-driven Frontend Developer with over 6 years of professional experience building modern, responsive web applications. I specialize in React, TypeScript, and Tailwind CSS, and bring full-stack knowledge using Node.js and Express.js to deliver seamless, scalable digital experiences.
            </p>
            
            <p className="text-lg mb-6 opacity-80">
              My journey began in 2018, and since then, I’ve worked with startups and enterprise-level companies across the UK and India, including WEBFX UK&I and Reborn Healthcare. I’m passionate about crafting high-performance interfaces, writing clean and maintainable code, and deploying production-ready solutions using modern DevOps practices.
            </p>

            <p className="text-lg mb-6 opacity-80">
              With a strong academic foundation (BCA & MCA in Computer Science), I’m continuously evolving by learning new technologies and best practices to stay ahead in the ever-changing world of web development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <img src={imageReact} alt="React Logo" className="w-5 h-5 inline-block" />
              <img src={imageTypescript} alt="React Logo" className="w-5 h-5 inline-block" />
              <img src={imageNodejs} alt="React Logo" className="w-5 h-5 inline-block" />
              <img src={imageTailwandcss} alt="React Logo" className="w-5 h-5 inline-block" />
              <img src={imageMongodb} alt="React Logo" className="w-5 h-5 inline-block" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};