import { motion, useScroll, useSpring } from 'framer-motion';

import Header  from './components/Header';
import Hero  from './components/Hero';
import  About  from './components/About';
import  Skills  from './components/Skills';
import  Projects  from './components/Projects';
import  Contact  from './components/Contact';
import  Footer  from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;