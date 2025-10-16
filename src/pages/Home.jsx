import React from "react";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Recommendations from '../components/Recommendations'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ProjectGit from "../components/ProjectGit";
import Website from "../components/Website";
import Education from "../components/Education";

export default function Home() {
  return (
   <div className="font-sans bg-[#0D1117] min-h-screen text-gray-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-24">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <ProjectGit />   {/* ← sección de GitHub */}
        <Website />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
