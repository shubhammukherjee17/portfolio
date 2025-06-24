/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/animations';
import { projects } from '@/data/projects';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background SVG overlay for depth, similar to About section */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 z-0">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <radialGradient id="projects-bg-gradient" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#18181b" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#projects-bg-gradient)" />
        </svg>
      </div>
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            PROJECTS
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 mx-auto mt-3 rounded-full shadow-lg"></div>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid-layout"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="card group relative flex flex-col overflow-hidden"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gradient">
                  {project.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-300 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={22} />
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;