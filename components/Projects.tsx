/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/animations';
import { projects } from '@/data/projects';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#111111] text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-2"
        >
          PROJECTS
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-2"></div>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#111827] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
);
};

export default Projects;