"use client"

import React from 'react'
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react'
import WrapButton from '../ui/wrap-button'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/shubhammukherjee17',
      icon: <Github className="size-5" />,
      hoverColor: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shubhammukherjee17',
      icon: <Linkedin className="size-5" />,
      hoverColor: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: 'mailto:mukherjeeshubham18@gmail.com',
      icon: <Mail className="size-5" />,
      hoverColor: 'hover:text-red-500'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-xl font-bold text-black/80 dark:text-white/90">
                Shubham Mukherjee
              </h3>
            </div>
            <p className="text-black/60 dark:text-white/70 mb-6 max-w-md leading-relaxed">
              Full-stack developer passionate about creating modern web applications 
              with cutting-edge technologies and exceptional user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-black/60 dark:text-white/60 transition-all duration-300 hover:scale-110 hover:shadow-lg ${link.hoverColor}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-black/80 dark:text-white/90 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-black/80 dark:text-white/90 mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className="text-black/60 dark:text-white/60 text-sm">
                Open to opportunities and collaborations
              </p>
              <WrapButton href="#contact" className="text-sm">
                <Mail className="size-3" />
                Contact Me
              </WrapButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-black/60 dark:text-white/60 text-sm text-center sm:text-left">
              © {currentYear} Shubham Mukherjee. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-black/60 dark:text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="size-4 text-red-500 animate-pulse" fill="currentColor" />
              <span>by Shubham Mukherjee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ExternalLink className="size-5 rotate-90" />
      </button>
    </footer>
  )
}

export default Footer
