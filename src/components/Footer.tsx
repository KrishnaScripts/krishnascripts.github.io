import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/KrishnaScripts' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/developer-krishna/' },
    { icon: <Mail size={20} />, href: 'mailto:krishnahpatel2000@gmail.com' }
  ];

  return (
    <footer className="bg-card/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <motion.a 
              href="#home"
              className="text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Krishna Patel
            </motion.a>
            <p className="opacity-80 mb-6 max-w-md">
              A creative developer focused on building exceptional digital 
              experiences that inspire and delight users.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 opacity-80">
              <li>London, United Kigdom</li>
              <li>krishnahpatel2000@gmail.com</li>
              <li>+44 7900 714429</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 text-sm mb-4 md:mb-0">
            © {currentYear} Krishna patel. All rights reserved.
          </p>
          <p className="opacity-70 text-sm flex items-center">
            Made with <Heart size={14} className="text-red-500 mx-1" /> by Krishna Patel
          </p>
        </div>
      </div>
    </footer>
  );
};