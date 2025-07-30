import React from 'react'
import Image from 'next/image'

const NavPart1 = () => {
  return (
    <div className='flex items-center gap-2 sm:gap-4'>
        <a href="#" className='flex items-center gap-2 group transition-all duration-300 ease-in-out hover:scale-105'>
            <div className="size-7 sm:size-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <Image
                  src="/images/avatar.jpg"
                  alt="Shubham Mukherjee"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <h4 className='font-bold text-sm sm:text-base md:text-lg text-black dark:text-white transition-colors duration-300'>
                  <span className="hidden sm:inline">Shubham Mukherjee</span>
                  <span className="sm:hidden">Shubham</span>
                </h4>
                <p className='text-[10px] sm:text-xs border border-green-600 dark:border-green-400 rounded-full px-1.5 py-0.5 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 transition-all duration-300 w-fit'>
                  Available
                </p>
            </div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-3 lg:ml-4">
            <a href="#about" className='text-gray-500 dark:text-gray-400 text-sm lg:text-base hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 relative group px-2 py-1' >
              About
              <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-blue-500 group-hover:w-[calc(100%-1rem)] transition-all duration-300"></span>
            </a>
            <a href="#projects" className='text-gray-500 dark:text-gray-400 text-sm lg:text-base hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 relative group px-2 py-1' >
              Projects
              <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-blue-500 group-hover:w-[calc(100%-1rem)] transition-all duration-300"></span>
            </a>
            <a href="#contact" className='text-gray-500 dark:text-gray-400 text-sm lg:text-base hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 relative group px-2 py-1' >
              Contact
              <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-blue-500 group-hover:w-[calc(100%-1rem)] transition-all duration-300"></span>
            </a>
        </div>
    </div>
  )
}

export default NavPart1