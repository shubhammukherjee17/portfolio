"use client"

import React from 'react'
import { MinimalCard } from '../ui/minimal-card'
import { User, Heart, Coffee, MapPin, Calendar, Award, Target, Lightbulb, Mail, Twitter } from 'lucide-react'

const AboutSection = () => {
  const personalInfo = [
    {
      icon: <User className="size-5 text-blue-500" />,
      label: "Full Name",
      value: "Shubham Mukherjee"
    },
    {
      icon: <MapPin className="size-5 text-green-500" />,
      label: "Location",
      value: "Murshidabad, India"
    },
    {
      icon: <Mail className="size-5 text-orange-500" />,
      label: "Email",
      value: "mukherjeeshubham18@gmail.com"
    },
    {
      icon: <Twitter className="size-5 text-blue-400" />,
      label: "Twitter",
      value: "@ItsShubhamDev"
    }
  ]

  const interests = [
    { icon: "🎙️", name: "Music", description: "Creating and listening to music" },
    { icon: "🎨", name: "Design", description: "Creating beautiful user interfaces" },
    { icon: "📚", name: "Learning", description: "Exploring new technologies" },
    { icon: "🎮", name: "Gaming", description: "Strategy and puzzle games" },
    { icon: "🏃‍♂️", name: "Fitness", description: "Running and gym workouts" },
    { icon: "📸", name: "Photography", description: "Capturing moments and landscapes" }
  ]

  const values = [
    {
      icon: <Target className="size-6 text-blue-500" />,
      title: "Quality First",
      description: "I believe in writing clean, maintainable code and delivering high-quality solutions that stand the test of time."
    },
    {
      icon: <Lightbulb className="size-6 text-yellow-500" />,
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices."
    },
    {
      icon: <Heart className="size-6 text-red-500" />,
      title: "User-Centric",
      description: "Every line of code I write is with the end user in mind, ensuring great user experiences and accessibility."
    }
  ]

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black transition-all duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/80 dark:text-white/90 mb-3 sm:mb-4 animate-slide-up">About Me</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/60 dark:text-white/70 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto animate-fade-in px-4 sm:px-0">
            Get to know me better - my background, interests, and the values that drive my work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Personal Story */}
          <div className="lg:col-span-2">
            <MinimalCard className="h-full">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <User className="size-5 sm:size-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black/80 dark:text-white/90">My Story</h3>
                </div>
                
                <div className="space-y-4 text-black/70 dark:text-white/70 leading-relaxed">
                  <p>
                    Hi, I&apos;m <span className="font-semibold text-blue-600 dark:text-blue-400">Shubham Mukherjee</span>, 
                    a passionate Full Stack Developer specializing in modern web technologies. With expertise spanning 
                    <span className="font-semibold text-purple-600 dark:text-purple-400"> Java, TypeScript, JavaScript, Node.js, React.js, and Next.js</span>, 
                    I bring a comprehensive skill set to every project I undertake.
                  </p>
                  
                  <p>
                    My development approach centers on creating <span className="font-semibold text-green-600 dark:text-green-400">clean, maintainable, and scalable code</span>. 
                    I believe in writing software that not only meets current requirements but is also flexible enough to evolve with changing business needs. 
                    Every line of code I write is guided by best practices in software architecture, performance optimization, and user experience design.
                  </p>
                  
                  <p>
                    Throughout my career, I&apos;ve successfully delivered projects across various domains, from dynamic web applications 
                    to complex enterprise solutions. My experience with both frontend and backend technologies allows me to understand 
                    the full development lifecycle and make informed decisions that benefit the entire application ecosystem.
                  </p>
                  
                  <p>
                    <span className="font-semibold text-orange-600 dark:text-orange-400">Collaboration is at the heart of everything I do.</span> 
                    I thrive in team environments where ideas are shared freely, and I believe the best solutions emerge from collective creativity. 
                    Whether working with designers, product managers, or fellow developers, I bring an open mindset and strong communication skills 
                    to ensure project success.
                  </p>
                  
                  <p>
                    I&apos;m passionate about staying current with emerging technologies and industry trends. This continuous learning mindset 
                    enables me to recommend and implement cutting-edge solutions that give projects a competitive edge. I&apos;m always excited 
                    to take on new challenges and contribute to innovative projects that make a meaningful impact.
                  </p>
                </div>
              </div>
            </MinimalCard>
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            <MinimalCard>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black/80 dark:text-white/90 mb-4">Quick Info</h3>
                <div className="space-y-4">
                  {personalInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-black/60 dark:text-white/60">{info.label}</p>
                        <p className="font-medium text-black/80 dark:text-white/80">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MinimalCard>

            {/* Availability Status */}
            <MinimalCard className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-3 bg-green-500 rounded-full animate-pulse" />
                  <h4 className="font-semibold text-black/80 dark:text-white/80">Available for Work</h4>
                </div>
                <p className="text-sm text-black/70 dark:text-white/70">
                  Currently accepting new projects and opportunities. 
                  Let&apos;s build something amazing together!
                </p>
              </div>
            </MinimalCard>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-black/80 dark:text-white/90 mb-8 text-center">
            What I Believe In
          </h3>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <MinimalCard 
                key={value.title}
                className="group hover:scale-105 transition-all duration-300 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-black/80 dark:text-white/90 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </MinimalCard>
            ))}
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-black/80 dark:text-white/90 mb-8 text-center">
            When I&apos;m Not Coding
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest, index) => (
              <MinimalCard 
                key={interest.name}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer animate-slideInUp"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="p-4 text-center">
                  <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <h4 className="font-medium text-black/80 dark:text-white/80 mb-1 text-sm">
                    {interest.name}
                  </h4>
                  <p className="text-xs text-black/60 dark:text-white/60 leading-tight">
                    {interest.description}
                  </p>
                </div>
              </MinimalCard>
            ))}
          </div>
        </div>

        {/* Fun Fact */}
        <div className="text-center mt-16">
          <MinimalCard className="inline-block">
            <div className="p-6">
              <div className="flex items-center gap-2 text-lg">
                <Coffee className="size-5 text-amber-500" />
                <span className="font-medium text-black/80 dark:text-white/80">
                  Fun Fact: I&apos;ve consumed over 2,000 cups of coffee while coding! ☕
                </span>
              </div>
            </div>
          </MinimalCard>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
