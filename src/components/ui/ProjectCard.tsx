import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  delay?: number;
  inView: boolean;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  link,
  delay = 0,
  inView
}) => {
  return (
    <motion.div 
      className="project-card bg-card gradient-border rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span key={index} className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="opacity-80 mb-6">{description}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:underline"
        >
          View Project <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};