import React from 'react';
import { motion } from 'framer-motion';

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string[];
  delay?: number;
  inView: boolean;
};

export const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  tech,
  delay = 0,
  inView
}) => {
  return (
    <motion.div 
      className="bg-card gradient-border p-6 rounded-lg skill-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.3)' }}
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-80 mb-5">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="px-3 py-1 bg-background/50 rounded-full text-xs">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};