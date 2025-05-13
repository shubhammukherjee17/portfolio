'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const ProjectButton = () => (
  <motion.a
    href="#projects"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-blue-500 rounded-lg group"
  >
    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
    <span className="relative flex items-center">
      PROJECTS
      <svg 
        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </span>
  </motion.a>
);
const Home = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      id="home" 
      className="min-h-screen flex items-center justify-center bg-[#111111] text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto text-center relative z-10">
        <motion.h1 
          variants={fadeInUp} 
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-luckiest mb-4 sm:mb-6 tracking-wider font-extrabold"
        >
          HEY, I&apos;M <br className="sm:hidden" />
          <span className="text-blue-500">SHUBHAM MUKHERJEE</span>
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp} 
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-semibold px-4"
        >
          A skilled web developer, crafting and managing websites and web applications to
          ensure the success of the entire product with finesse.
        </motion.p>

        <motion.div 
          variants={fadeInUp}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <ProjectButton />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;