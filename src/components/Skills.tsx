import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layers, Paintbrush, Smartphone, Database, Globe } from 'lucide-react';
import { SkillCard } from './ui/SkillCard';

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'Crafting dynamic, responsive UIs using modern JavaScript frameworks to deliver seamless user experiences.',
      tech: ['React', 'TypeScript', 'TailwindCSS','Redux Toolkit','Material UI', 'HTML5', 'CSS3','Axios','Formik + Yup']
    },
    {
      icon: <Database size={24} />,
      title: 'Backend Development',
      description: 'Building robust and secure RESTful APIs and backend services, with strong focus on performance and scalability.',
      tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL','JWT Authentication','SQL Server','Mongoose','Nest.js']
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development (Learning & Exploration)',
      description: 'Currently diving into cross-platform mobile development to broaden my full-stack capabilities. Exploring modern frameworks to build responsive, intuitive mobile applications.',
      tech: ['React Native', 'Android','State Management', 'Responsive Design', 'Cross-Platform Development','AI-Enhanced Mobile Interfaces']
    },
    {
      icon: <Layers size={24} />,
      title: 'Full Stack Solutions',
      description: 'Delivering complete web solutions across the stack—from wireframes to production—with agile, test-driven practices.',
      tech: ['MERN Stack', 'CI/CD (Vercel, Render)', 'AWS','ESLint', 'Prettier', 'GitHub Collaboration','Manual & Automated Testing (Jest, Postman)']
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Performance',
      description: 'Enhancing accessibility, speed, and visibility across web platforms through performance tuning and SEO best practices.',
      tech: ['Core Web Vitals', 'SEO', 'Accessibility', 'Analytics']
    }
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
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            I bring over 6 years of professional experience delivering high-performance, scalable, and user-centric digital solutions across the full stack. My technical foundation, backed by a Master’s in Computer Science, enables me to build reliable applications from concept to deployment.
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              tech={skill.tech}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;