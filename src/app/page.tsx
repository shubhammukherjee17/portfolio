
import ProjectsSection from '@/components/portfolio/ProjectsSection'
import SkillsSection from '@/components/portfolio/SkillsSection'
import AboutSection from '@/components/portfolio/AboutSection'
import ContactSection from '@/components/portfolio/ContactSection'
import ThemeChange from '@/components/homeCards/ThemeChange'
import HeroContent from '@/components/landingPage/HeroContent'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-black transition-all duration-700 ease-in-out no-horizontal-scroll">
      <Navbar />
      <main className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <HeroContent />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ThemeChange />
    </div>
  )
}
export default page
