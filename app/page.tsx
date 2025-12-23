import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Terminal } from "@/components/features/Terminal";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center overflow-x-hidden">
      <Navbar />

      <div className="w-full flex flex-col items-center">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </div>

      <div className="w-full">
        <Footer />
      </div>

      <Terminal />
    </main>
  );
}
