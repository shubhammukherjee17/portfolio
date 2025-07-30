import React from 'react'
import NavPart1 from './NavPart1'
import NavPart2 from './NavPart2'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50'>
      <div className='flex justify-between items-center py-3 px-4 sm:px-6 md:px-8 lg:px-10 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-gray-900/20 transition-all duration-300'>
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
  )
}

export default Navbar