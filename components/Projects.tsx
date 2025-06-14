/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/animations';
import { projects } from '@/data/projects';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111111] text-white py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group relative bg-[#111827]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
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
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
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