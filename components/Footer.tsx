'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <FaLinkedin size={20} />, 
      url: 'https://linkedin.com/in/theshubhammukherjee', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-[#0A66C2]',
      bgColor: 'bg-[#0A66C2]/10'
    },
    { 
      icon: <FaGithub size={20} />, 
      url: 'https://github.com/shubhammukherjee17', 
      label: 'GitHub',
      hoverColor: 'hover:text-[#333333]',
      bgColor: 'bg-[#333333]/10'
    },
    { 
      icon: <FaTwitter size={20} />, 
      url: 'https://twitter.com/ItsShubhamDev', 
      label: 'Twitter',
      hoverColor: 'hover:text-[#1DA1F2]',
      bgColor: 'bg-[#1DA1F2]/10'
    },
    { 
      icon: <FaInstagram size={20} />, 
      url: 'https://instagram.com/shubham.mukherjee_', 
      label: 'Instagram',
      hoverColor: 'hover:text-[#E4405F]',
      bgColor: 'bg-[#E4405F]/10'
    }
  ];

  const contactInfo = [
    {
      icon: <HiMail className="w-5 h-5" />,
      text: 'mukherjeeshubham18@gmail.com',
      link: 'mailto:mukherjeeshubham18@gmail.com'
    },
    {
      icon: <HiPhone className="w-5 h-5" />,
      text: '+91 70672 94951',
      link: 'tel:+917067294951'
    },
    {
      icon: <HiLocationMarker className="w-5 h-5" />,
      text: 'Murshidabad, Kolakata, India',
      link: '#'
    }
  ];

  return (
    <footer className="relative py-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
                <span className="text-xl font-bold">S</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SHUBHAM MUKHERJEE
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              As a frontend-oriented web developer, I specialize in crafting the user-facing aspects of websites and
              web applications, contributing to the overall success of the product.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    {info.icon}
                  </div>
                  <span className="text-sm">{info.text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Follow Me</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl ${link.bgColor} text-gray-300 ${link.hoverColor} transition-all duration-300`}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Shubham Mukherjee. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;