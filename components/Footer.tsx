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
      hoverColor: 'hover:text-[#0A66C2]' // LinkedIn blue
    },
    { 
      icon: <FaGithub size={24} />, 
      url: 'https://github.com/shubhammukherjee17', 
      label: 'GitHub',
      hoverColor: 'hover:text-[#333333]' // GitHub dark gray
    },
    { 
      icon: <FaTwitter size={24} />, 
      url: 'https://twitter.com/ImShubham1817', 
      label: 'Twitter',
      hoverColor: 'hover:text-[#1DA1F2]' // Twitter blue
    },
    { 
      icon: <FaInstagram size={24} />, 
      url: 'https://instagram.com/shubham.mukherjee_', 
      label: 'Instagram',
      hoverColor: 'hover:text-[#E4405F]',
      bgColor: 'bg-[#E4405F]/10'
    }
  ];


  return (
    <footer className="py-8 bg-[#111111]/95 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-space-grotesk">SHUBHAM MUKHERJEE</h2>
            <p className="text-gray-300 max-w-lg font-poppins">
              As a frontend-oriented web developer, I specialize in crafting the user-facing aspects of websites and
              web applications, contributing to the overall success of the product.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start md:items-end"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-space-grotesk">SOCIAL</h3>
            <div className="flex gap-4 md:gap-6 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`text-gray-300 ${link.hoverColor} transition-colors`}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 font-poppins"
        >
          <p>
            © Copyright 2025. Made With ❤️ by{' '}
            <Link href="https://linkedin.com/in/theshubhammukherjee" className="text-white hover:text-blue-500 transition-colors">
              Shubham Mukherjee
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;