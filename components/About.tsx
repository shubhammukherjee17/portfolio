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
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#111111]/95 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6"
        >
          ABOUT ME
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-2"></div>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-4 text-sm sm:text-base"
        >
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-2 sm:px-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Know About me!</h3>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                Greetings! I&apos;m Shubham Mukherjee, a dedicated full stack developer located in India. My
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
                on your next project? Feel free to get in touch. Let&apos;s transform ideas into reality and
                make a meaningful impact together.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-2 sm:px-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-[#1a1a1a] px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md text-gray-300 hover:bg-blue-500 transition-colors text-xs sm:text-sm md:text-base"
                >
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
