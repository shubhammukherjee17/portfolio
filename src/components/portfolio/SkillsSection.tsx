"use client"

import React from 'react'
import { MinimalCard } from '../ui/minimal-card'
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Zap
} from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code2 className="size-8 text-blue-500" />,
      title: "Frontend Development",
      skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML", "CSS", "TailwindCSS", "Bootstrap"],
      description: "Creating responsive and interactive user interfaces with modern frameworks"
    },
    {
      icon: <Database className="size-8 text-green-500" />,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
      description: "Building scalable server-side applications and APIs"
    },
    {
      icon: <Globe className="size-8 text-purple-500" />,
      title: "Database & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Firebase"],
      description: "Designing and managing efficient data storage solutions"
    },
    {
      icon: <Cloud className="size-8 text-orange-500" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Vercel", "Docker", "GitHub Actions", "Kubernetes", "Nginx"],
      description: "Deploying and managing applications in cloud environments"
    },
    {
      icon: <Smartphone className="size-8 text-pink-500" />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "Expo", "Mobile UI/UX", "App Store Deploy"],
      description: "Building cross-platform mobile applications"
    },
    {
      icon: <GitBranch className="size-8 text-gray-500" />,
      title: "Tools & Workflow",
      skills: ["Git", "VS Code", "Figma", "Postman", "Jest", "Cypress"],
      description: "Essential development tools and testing frameworks"
    },
    {
      icon: <Palette className="size-8 text-indigo-500" />,
      title: "Design & UX",
      skills: ["UI/UX Design", "Responsive Design", "Accessibility", "User Research"],
      description: "Creating user-centered designs and experiences"
    },
    {
      icon: <Zap className="size-8 text-yellow-500" />,
      title: "Performance & SEO",
      skills: ["Web Vitals", "SEO Optimization", "PWA", "Performance Testing"],
      description: "Optimizing applications for speed and search engines"
    }
  ]

  const topSkills = [
    { name: "JavaScript/TypeScript", level: 95, color: "bg-yellow-500" },
    { name: "React & Next.js", level: 90, color: "bg-blue-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "Python", level: 80, color: "bg-blue-600" },
    { name: "Database Design", level: 85, color: "bg-purple-500" },
    { name: "UI/UX Design", level: 75, color: "bg-pink-500" }
  ]

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/80 dark:text-white/80 mb-3 sm:mb-4">Skills & Expertise</h2>
          <p className="text-base sm:text-lg md:text-xl text-black/60 dark:text-white/60 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
            A comprehensive overview of my technical skills and areas of expertise 
            across the full development stack.
          </p>
        </div>

        {/* Top Skills with Progress Bars */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-semibold text-black/80 dark:text-white/80 mb-6 sm:mb-8 text-center">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {topSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-black/70 dark:text-white/70">{skill.name}</span>
                  <span className="text-black/60 dark:text-white/60">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `slideIn 1s ease-out ${index * 0.1}s both`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <MinimalCard 
              key={category.title}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black/80 dark:text-white/80">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-sm text-black/60 dark:text-white/60 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MinimalCard>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg">
            <Zap className="size-4 text-yellow-500" />
            <span className="text-sm font-medium text-black/70 dark:text-white/70">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default SkillsSection
