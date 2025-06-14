'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { scrollToSection } from '@/utils/smoothScroll';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0f172a]/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div 
            variants={fadeIn} 
            className="flex items-center group"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all duration-300">
              <span className="text-xl md:text-2xl font-bold text-white">S</span>
            </div>
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, 'home')} 
              className="ml-3 text-xl md:text-2xl font-luckiest flex items-center tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-blue-400 hover:to-blue-600 transition-all duration-300"
            >
              SHUBHAM MUKHERJEE
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-12">
            {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleClick(e, item.toLowerCase())}
                  className="text-sm font-medium tracking-wide relative group"
                >
                  <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute md:hidden top-full left-0 right-0 bg-[#0f172a]/95 backdrop-blur-md shadow-xl"
              >
                <ul className="flex flex-col divide-y divide-white/5">
                  {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => handleClick(e, item.toLowerCase())}
                        className="block py-4 px-6 text-[15px] hover:bg-white/5 active:bg-white/10 transition-colors text-gray-300 hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;