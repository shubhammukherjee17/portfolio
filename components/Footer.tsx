'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => { 
  const socialLinks = [
    { 
      icon: <FaLinkedin size={24} />, 
      url: 'https://linkedin.com/in/theshubhammukherjee', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10' // LinkedIn theme
    },
    { 
      icon: <FaGithub size={24} />, 
      url: 'https://github.com/shubhammukherjee17', 
      label: 'GitHub',
      hoverColor: 'hover:text-[#333333] hover:bg-[#333333]/10' // GitHub theme
    },
    { 
      icon: <FaTwitter size={24} />,  
      url: 'https://twitter.com/ItsShubhamDev', 
      label: 'Twitter',
      hoverColor: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10' // Twitter theme
    },
    { 
      icon: <FaInstagram size={24} />, 
      url: 'https://instagram.com/shubham.mukherjee_', 
      label: 'Instagram',
      hoverColor: 'hover:text-[#E4405F] hover:bg-[#E4405F]/10' // Instagram theme
    }
  ];


  return (
    <footer className="relative py-12 bg-gradient-to-t from-[#18181b]/90 to-[#23272f]/80 text-white border-t-0 backdrop-blur-xl overflow-hidden">
      {/* Animated gradient border at the top */}
      <div className="absolute top-0 left-0 w-full h-1 animate-footer-gradient bg-[linear-gradient(90deg,theme(colors.blue.500),theme(colors.purple.500),theme(colors.cyan.400),theme(colors.blue.500))] bg-[length:200%_100%]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto max-w-4xl flex flex-col items-center justify-center text-center gap-8"
      >
        {/* Glassmorphism card */}
        <div className="glass w-full px-6 py-10 rounded-3xl shadow-2xl flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-space-grotesk tracking-tight gradient-text">SHUBHAM MUKHERJEE</h2>
            <p className="text-gray-300 max-w-xl mx-auto font-poppins mb-6 text-base sm:text-lg">
              As a frontend-oriented web developer, I specialize in crafting the user-facing aspects of websites and web applications, contributing to the overall success of the product.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex gap-4 md:gap-6 justify-center">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, boxShadow: '0 0 16px 4px rgba(59,130,246,0.25)' }}
                  className={`text-gray-300 ${link.hoverColor} p-3 rounded-full cursor-pointer transition-all duration-300 shadow-sm`}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 text-xs text-gray-400 font-poppins"
          >
            <p>
              © 2025. Made with <span className="text-pink-400">♥</span> by{' '}
              <Link href="https://linkedin.com/in/theshubhammukherjee" className="text-white hover:text-blue-500 transition-colors font-semibold">
                Shubham Mukherjee
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;