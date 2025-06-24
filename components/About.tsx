'use client';

import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'Node.js', 'Next.js', 'React.js',
    'Python', 'C++', 'C', 'Java', 'MongoDB', 'MySQL', 'HTML',
    'CSS', 'TailwindCSS', 'Bootstrap', 'Redux', 'Git', 'GitHub',
    'VS Code' 
  ];
   
  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-[#18181b] via-[#111111]/95 to-[#23272f] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none opacity-30">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <radialGradient id="bg-gradient" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#18181b" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-gradient)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 sm:mb-6 md:mb-8 tracking-tight relative"
        >
          <span className="inline-block bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            ABOUT ME
          </span>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 mx-auto mt-3 rounded-full shadow-lg"></div>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-center mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto px-4 text-base sm:text-lg md:text-xl font-light"
        >
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#18181b]/80 rounded-2xl shadow-xl px-6 py-8 sm:px-8 sm:py-10 border border-[#23272f]/60 backdrop-blur-md"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2 2z" /></svg>
              Know About me!
            </h3>
            <div className="space-y-4 text-gray-300 text-base sm:text-lg font-normal">
              <p>
                Greetings! I&apos;m <span className="font-semibold text-blue-400">Shubham Mukherjee</span>, a dedicated full stack developer located in India. My
                expertise spans Java, TypeScript, JavaScript, Node.js, React.js, and Next.js, encompassing both
                frontend and backend development.
              </p>
              <p>
                I have a proven track record of crafting high-quality digital solutions, from creating
                seamless user interfaces with React.js to architecting robust backend systems using
                Node.js. My focus is always on delivering clean, efficient, and scalable code that
                exceeds expectations.
              </p>
              <p>
                Throughout my career, I&apos;ve had the opportunity to work on a variety of projects, each
                presenting unique challenges and opportunities for growth. I thrive on the continuous
                learning and problem-solving inherent in the tech industry.
              </p>
              <p>
                Beyond coding, I enjoy staying abreast of the latest technological advancements and
                collaborating with fellow enthusiasts. Interested in discussing how we can collaborate
                on your next project? <span className="font-semibold text-blue-400">Feel free to get in touch</span>. Let&apos;s transform ideas into reality and
                make a meaningful impact together.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#18181b]/80 rounded-2xl shadow-xl px-6 py-8 sm:px-8 sm:py-10 border border-[#23272f]/60 backdrop-blur-md"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0M12 11v2m0 4h.01" /></svg>
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#23272f] to-[#1a1a1a] px-4 py-2 rounded-full text-gray-200 shadow-md border border-[#23272f]/60 transition-all text-sm sm:text-base font-medium cursor-pointer select-none hover:scale-110 hover:shadow-2xl hover:from-blue-500 hover:to-cyan-400 hover:text-white"
                >
                  {/* Optionally, you can add icons here for each skill if you have a mapping */}
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
