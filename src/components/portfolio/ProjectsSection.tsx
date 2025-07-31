import React from 'react'
import { MinimalCard, MinimalCardImage } from '../ui/minimal-card'
import { Github, ExternalLink, Play } from 'lucide-react'
import WrapButton from '../ui/wrap-button'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Next.js, TypeScript, and Stripe integration. Features include product catalog, shopping cart, user authentication, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      image: "/images/card1.webp",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/images/card2.webp",
      githubUrl: "https://github.com/shubhammukherjee17/Taskify",
      liveUrl: "https://demo.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Modern weather application with location-based forecasts, interactive maps, and beautiful data visualizations.",
      technologies: ["Vue.js", "D3.js", "Weather API", "Tailwind CSS"],
      image: "/images/card3.webp",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern animations, dark/light theme, and optimized performance.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      image: "/images/card4.webp",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with rooms, file sharing, and user presence indicators built with modern web technologies.",
      technologies: ["React", "Socket.io", "Express", "Redis"],
      image: "/images/card5.webp",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      id: 6,
      title: "Data Visualization Tool",
      description: "Interactive data visualization dashboard for analyzing complex datasets with customizable charts and filters.",
      technologies: ["Python", "Streamlit", "Plotly", "Pandas"],
      image: "/images/card6.webp",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    }
  ]

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/80 dark:text-white/90 mb-3 sm:mb-4 animate-slide-up">Featured Projects</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/60 dark:text-white/70 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto animate-fade-in px-4 sm:px-0">
            A collection of projects that showcase my skills in full-stack development, 
            UI/UX design, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <MinimalCard 
              key={project.id}
              className={`group hover:scale-[1.02] sm:hover:scale-105 transition-all duration-500 ease-out hover-lift ${
                project.featured ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
              style={{
                animation: `slide-up 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative overflow-hidden">
                <MinimalCardImage 
                  src={project.image} 
                  alt={project.title}
                  className="group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-1 sm:gap-2">
                    <a 
                      href={project.githubUrl}
                      className="p-1.5 sm:p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-3 sm:size-4 text-gray-700 dark:text-gray-300" />
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="p-1.5 sm:p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="size-3 sm:size-4 text-gray-700 dark:text-gray-300" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-black/80 dark:text-white/90 transition-colors duration-300 line-clamp-2">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-medium shadow-lg animate-gradient-shift flex-shrink-0 ml-2">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-black/60 dark:text-white/70 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed transition-colors duration-300 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <WrapButton href={project.liveUrl}>
                    <Play className="size-3" />
                    Live Demo
                  </WrapButton>
                  <WrapButton href={project.githubUrl}>
                    <Github className="size-3" />
                    Code
                  </WrapButton>
                </div>
              </div>
            </MinimalCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <WrapButton href="https://github.com/shubhammukherjee17">
            <Github className="size-4" />
            View All Projects on GitHub
          </WrapButton>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
