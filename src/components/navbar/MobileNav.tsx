"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import WrapButton from '../ui/wrap-button'
import { X, Home, User, Briefcase, Mail, Github, Twitter, Download } from 'lucide-react'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const navItems = [
    { href: "#", icon: Home, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#projects", icon: Briefcase, label: "Projects" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ]

  const socialLinks = [
    { 
      href: "https://github.com/shubhammukherjee17", 
      icon: Github, 
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-white"
    },
    { 
      href: "https://twitter.com/ItsShubhamDev", 
      icon: Twitter, 
      label: "Twitter",
      color: "hover:text-blue-500"
    },
  ]

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <div className="relative w-5 h-5">
          <span
            className={`absolute top-0 left-0 w-full h-0.5 bg-gray-600 dark:bg-gray-400 transform transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`absolute top-2 left-0 w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute top-4 left-0 w-full h-0.5 bg-gray-600 dark:bg-gray-400 transform transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 dark:bg-black/80 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 shadow-2xl z-50 transform transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/avatar.jpg"
                  alt="Shubham Mukherjee"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Menu</span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close menu"
            >
              <X className="size-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 p-4 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <IconComponent className="size-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-lg">{item.label}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                </a>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            {/* Download Resume Button */}
            <div className="mb-4">
              <WrapButton 
                href="/resume.pdf" 
                className="w-full justify-center py-3"
              >
                <Download size={16} />
                Download Resume
              </WrapButton>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent className="size-5" />
                    </a>
                  )
                })}
              </div>
            </div>
            
            {/* Status */}
            <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700 dark:text-green-400">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
