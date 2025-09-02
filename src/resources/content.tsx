import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Shubham",
  lastName: "Mukherjee",
  name: `Shubham Mukherjee`,
     role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "mukherjeeshubham18@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Bengali"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/shubhammukherjee17",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/theshubhammukherjee/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Full Stack Developer`,
  description: `Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.`,
  headline: <>Creating innovative solutions and beautiful user experiences</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">AI Website Builder</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/ai-website-builder",
  },
  subline: (
    <>
             I&apos;m Shubham, a passionate Full Stack Developer from Murshidabad, India
      {/* <Logo
        dark
        icon=" "
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      /> */}
      , specializing in modern web technologies and
      <br /> creating scalable, user-focused applications.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I&apos;m Shubham Mukherjee, a passionate Full Stack Developer specializing in modern web technologies.
        With expertise spanning Java, TypeScript, JavaScript, Node.js, React.js, and Next.js, I bring a 
        comprehensive skill set to every project I undertake. My development approach centers on creating 
        clean, maintainable, and scalable code that meets current requirements while being flexible enough 
        to evolve with changing business needs. From Murshidabad, India, I&apos;m always excited to take on
        new challenges and contribute to innovative projects that make a meaningful impact.
      </>
    ),
  },
     work: {
     display: true, // set to false to hide this section
     title: "Featured Projects",
    experiences: [
      {
         company: "AI Website Builder",
         timeframe: "2024",
         role: "Full Stack Development",
         achievements: [
           <>
             A powerful AI-powered full-stack website and backend builder designed for non-technical 
             founders and entrepreneurs. Build, generate, and deploy complete web applications without 
             writing a single line of code.
           </>,
           <>
             Features include drag & drop interface, real-time preview, responsive design, 
             component-based design system that automatically adapts to mobile, tablet, and desktop.
           </>,
           <>
             <strong>Live Demo:</strong> <a href="https://ai-website-builder-eta.vercel.app" target="_blank" 
             rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'underline'}}>View Project</a> | 
             <strong>Source Code:</strong> <a href="https://github.com/shubhammukherjee17/ai-website-builder" 
             target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'underline'}}>GitHub</a>
           </>,
         ],
         images: [],
      },
      {
         company: "QR Builder with 3D Effects",
         timeframe: "2024",
         role: "Full Stack Development",
         achievements: [
           <>
             A modern, feature-rich QR code generator with stunning 3D animations, extensive 
             customization options, and powerful database integration using Supabase.
           </>,
           <>
             Features full-page 3D background with animated QR cube, floating geometric shapes, 
             particle systems, and interactive 3D elements throughout the interface.
           </>,
           <>
             <strong>Live Demo:</strong> <a href="https://my-qr-builder.vercel.app" target="_blank" 
             rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'underline'}}>View Project</a> | 
             <strong>Source Code:</strong> <a href="https://github.com/shubhammukherjee17/qr-builder" 
             target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'underline'}}>GitHub</a>
           </>,
         ],
         images: [],
      },
      {
         company: "AcuHealth - AI Healthcare Platform",
         timeframe: "2025",
         role: "Full Stack Development",
         achievements: [
           <>
             A comprehensive AI-powered healthcare platform with features like AI health assistant, 
             health issue scanning via images, and prescription/medical report scanning.
           </>,
           <>
             Features include AI Health Assistant for personalized health advice, AI Vision for 
             analyzing images for potential health issues, and Document Scanning for organizing 
             prescriptions and medical reports.
           </>,
           <>
             <strong>Live Demo:</strong> <a href="https://acu-health.vercel.app" target="_blank" 
             rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'underline'}}>View Project</a> | 
             <strong>Source Code:</strong> <a href="https://github.com/shubhammukherjee17/AcuHealth" 
             target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'underline'}}>GitHub</a>
           </>,
         ],
         images: [],
      },
      {
         company: "Caption Genie AI",
         timeframe: "2024",
         role: "Full Stack Development",
         achievements: [
           <>
             An intelligent caption generator that uses AI to create engaging, relevant captions 
             for social media posts, helping content creators enhance their online presence.
           </>,
           <>
             Leverages advanced natural language processing to generate contextually appropriate 
             captions with hashtag suggestions and engagement optimization.
           </>,
           <>
             <strong>Live Demo:</strong> <a href="https://caption-genie-ai.vercel.app" target="_blank" 
             rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'underline'}}>View Project</a> | 
             <strong>Source Code:</strong> <a href="https://github.com/shubhammukherjee17/caption-generator" 
             target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'underline'}}>GitHub</a>
           </>,
         ],
         images: [],
      },
      {
         company: "Smart Taskify",
         timeframe: "2024",
         role: "Full Stack Development",
         achievements: [
           <>
             A comprehensive task management application with smart features for productivity 
             enhancement, team collaboration, and efficient project tracking.
           </>,
           <>
             Built with modern React.js frontend and robust backend, featuring real-time 
             collaboration, smart notifications, progress tracking, and intuitive user interface.
           </>,
           <>
             <strong>Live Demo:</strong> <a href="https://smart-taskify.vercel.app" target="_blank" 
             rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'underline'}}>View Project</a> | 
             <strong>Source Code:</strong> <a href="https://github.com/shubhammukherjee17/Taskify" 
             target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6', textDecoration: 'underline'}}>GitHub</a>
           </>,
         ],
         images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
             {
         name: "Gyan Ganga Institute of Technology and Sciences",
         description: <>Studying AIML (Artificial Intelligence and Machine Learning).</>,
       },
             {
         name: "St Joseph's Mission School",
         description: <>Completed Matriculation and Intermediate with focus on Science and Mathematics.</>,
       },
    ],
  },
     technical: {
     display: true, // set to false to hide this section
     title: "Technical skills",
     skills: [
       {
         title: "Frontend Development",
         description: (
           <>Creating responsive and interactive user interfaces with modern JavaScript frameworks and libraries.</>
         ),
         tags: [
           {
             name: "JavaScript",
             icon: "javascript",
           },
           {
             name: "TypeScript",
             icon: "typescript",
           },
           {
             name: "React",
             icon: "react",
           },
           {
             name: "Next.js",
             icon: "nextjs",
           },
         ],
         images: [
           {
             src: "/images/projects/project-01/cover-01.jpg",
             alt: "Frontend Development",
             width: 16,
             height: 9,
           },
         ],
       },
       {
         title: "Backend Development",
         description: (
           <>Building scalable server-side applications and APIs with Node.js, Python, and modern frameworks.</>
         ),
         tags: [
           {
             name: "Node.js",
             icon: "nodejs",
           },
           {
             name: "Python",
             icon: "python",
           },
           {
             name: "Express",
             icon: "express",
           },
           {
             name: "FastAPI",
             icon: "fastapi",
           },
         ],
         images: [
           {
             src: "/images/projects/project-01/cover-02.jpg",
             alt: "Backend Development",
             width: 16,
             height: 9,
           },
         ],
       },
       {
         title: "Database & Storage",
         description: (
           <>Designing and managing efficient data storage solutions with both SQL and NoSQL databases.</>
         ),
         tags: [
           {
             name: "PostgreSQL",
             icon: "postgresql",
           },
           {
             name: "MongoDB",
             icon: "mongodb",
           },
           {
             name: "Redis",
             icon: "redis",
           },
           {
             name: "Prisma",
             icon: "prisma",
           },
         ],
         images: [
           {
             src: "/images/projects/project-01/cover-03.jpg",
             alt: "Database Technologies",
             width: 16,
             height: 9,
           },
         ],
       },
       {
         title: "Cloud & DevOps",
         description: (
           <>Deploying and managing applications in cloud environments with modern DevOps practices.</>
         ),
         tags: [
           {
             name: "AWS",
             icon: "aws",
           },
           {
             name: "Docker",
             icon: "docker",
           },
           {
             name: "Vercel",
             icon: "vercel",
           },
           {
             name: "Git",
             icon: "git",
           },
         ],
         images: [
           {
             src: "/images/projects/project-01/cover-04.jpg",
             alt: "Cloud & DevOps",
             width: 16,
             height: 9,
           },
         ],
       },
       {
         title: "Mobile Development",
         description: (
           <>Building cross-platform mobile applications with React Native and modern mobile technologies.</>
         ),
         tags: [
           {
             name: "React Native",
             icon: "reactnative",
           },
           {
             name: "Flutter",
             icon: "flutter",
           },
           {
             name: "Expo",
             icon: "expo",
           },
         ],
         images: [],
       },
       {
         title: "UI/UX Design",
         description: (
           <>Creating user-centered designs and experiences with modern design tools and frameworks.</>
         ),
         tags: [
           {
             name: "Figma",
             icon: "figma",
           },
           {
             name: "TailwindCSS",
             icon: "tailwindcss",
           },
           {
             name: "CSS",
             icon: "css",
           },
         ],
         images: [],
       },
     ],
   },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack web applications, e-commerce platforms, and modern development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
