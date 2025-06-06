import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectCard } from './ui/ProjectCard';
import { Button } from './ui/Button';

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Leave Management System",
      description: "An end-to-end leave management platform for employees and admins to apply, track, and approve/reject leave requests.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "web",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/KrishnaScripts/LeaveManagementSystem"
    },
    {
      title: "URL Shortener App",
      description: "A secure and responsive web app that allows users to shorten URLs, track click analytics, and manage custom slugs.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "web",
      tech: ["React", "TypeScript", "Node.js",'MongoDB','Tailwind CSS'],
      link: "https://url-shortner-app-mernstack.onrender.com/"
    },
    {
      title: "AI-Integrated Todo App",
      description: "A sleek, mobile-first todo application with AI-powered features designed to enhance task management and productivity.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "mobile",
      tech: ["Next.js", "React", "REST API",'Vercel Hosting','TypeScript'],
      link: "https://v0-todo-app-creation-virid.vercel.app/"
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            Browse my recent work to see the variety of projects I've completed.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-card hover:bg-card/80'
                }`}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              link={project.link}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* <Button href="https://github.com" variant="outline" size="lg">
            View More on GitHub
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};