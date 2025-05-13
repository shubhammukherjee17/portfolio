'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { scrollToSection } from '@/utils/smoothScroll';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className="fixed w-full z-50 bg-[#111111]/95 backdrop-blur-sm text-white py-2 md:py-4"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <motion.div variants={fadeIn} className="flex items-center">
            <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-blue-500 rounded-full">
              <span className="text-lg md:text-xl font-bold">S</span>
            </div>
            <a href="#home" onClick={(e) => handleClick(e, 'home')} 
              className="ml-3 text-xl md:text-2xl font-luckiest flex items-center tracking-wider"
            >
              SHUBHAM MUKHERJEE
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10">
            {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleClick(e, item.toLowerCase())}
                  className="text-sm tracking-wide hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

          {/* Mobile Menu - Only visible on mobile */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute md:hidden top-full left-0 right-0 bg-[#111111]/95 backdrop-blur-sm"
            >
              <ul className="flex flex-col">
                {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
                  <li key={item} className="border-b border-gray-800/30">
                    <a 
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleClick(e, item.toLowerCase())}
                      className="block py-4 px-6 text-[15px] hover:bg-white/5 active:bg-white/10 transition-colors text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;