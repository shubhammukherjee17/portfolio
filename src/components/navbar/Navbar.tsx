import React from 'react'
import Image from 'next/image'
import NavPart1 from './NavPart1'
import NavPart2 from './NavPart2'
import MobileNav from './MobileNav'
import ThemeToggleButton from '../ui/theme-toggle-button'
import { Download } from 'lucide-react'

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <nav className='hidden md:block sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-gray-950/95 border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-gray-900/20'>
        <div className='flex justify-between items-center py-3 px-4 sm:px-6 md:px-8 lg:px-10 transition-all duration-300'>
          <NavPart1 />
          
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Social Icons */}
            <div className="hidden sm:block">
              <NavPart2 />
            </div>
            
            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar - Only visible on mobile */}
      <div className='md:hidden sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm'>
        <div className='flex justify-between items-center py-3 px-4'>
          {/* Logo/Name */}
          <div className='flex items-center gap-2'>
            <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg overflow-hidden">
              <Image
                src="/images/avatar.jpg"
                alt="Shubham Mukherjee"
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h4 className='font-bold text-base text-black dark:text-white'>
              Shubham
            </h4>
          </div>

          {/* Download Resume Button and Theme Toggle */}
          <div className='flex items-center gap-2'>
            <a
              href="/resume.pdf"
              download
              className='group cursor-pointer border border-[#3B3A3A] bg-[#151515] gap-1.5 h-[48px] flex items-center p-[8px] rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl'
            >
              <div className="border border-[#3B3A3A] bg-[#ff3f17] h-[32px] min-w-fit px-3 rounded-full flex items-center justify-center text-white shadow-md">
                <p className="font-medium tracking-tight flex items-center gap-1.5 justify-center whitespace-nowrap text-xs">
                  <Download size={12} />
                  Resume
                </p>
              </div>
              <div className="text-[#3b3a3a] group-hover:ml-1 group-hover:text-[#ff3f17] ease-in-out transition-all duration-300 size-[20px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]">
                <Download size={10} className="group-hover:rotate-45 ease-in-out transition-all duration-300" />
              </div>
            </a>
            <ThemeToggleButton variant="circle" start="center" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar