import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import profilePic from '../image/logo.png';
import { Link, useLocation } from "react-router-dom";
import { trackNavbarClick } from "../analytics/gaEvents";
import { trackDownloadCV } from "../analytics/gaEvents";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
/*export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleInicioClick = () => {
    if (location.pathname === "/") {
      scrollToSection("hero");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0D1117]/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1
          onClick={handleInicioClick}
          className="text-xl font-bold text-white cursor-pointer"
        >
          OLACHEADEV
        </h1>

        <div className="hidden md:flex space-x-6">
          <button
            onClick={handleInicioClick}
            className="hover:text-cyan-400 transition"
          >
            Inicio
          </button>
          <Link to="/detallesproyectos" className="hover:text-cyan-400 transition">
            Proyectos Detallados
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0D1117] border-t border-gray-800"
          >
            <div className="flex flex-col items-center space-y-4 p-4">
              <button onClick={handleInicioClick} className="hover:text-cyan-400">
                Inicio
              </button>
              <Link
                to="/detallesproyectos"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                Proyectos Detallados
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}*/


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation("web");
  
    // Opción 1: si quieres mapear el array completo:
  const navbar = t("web.navbar", { returnObjects: true }) || [];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1117]/60 backdrop-blur-sm border-b border-[rgba(255,255,255,0.02)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        
        <div className="flex items-center gap-3 text-white font-semibold text-sm md:text-base">
          
          <div className="relative w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-[#19304a] to-[#0f1b2a] p-1 shadow-xl">
            <div className="bg-[#0b1220] rounded-full w-full h-full flex items-center justify-center text-3xl font-bold text-gray-200">
              <motion.img
                  src={profilePic}
                  alt="Erick Augusto Olachea"
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.25 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                        
            </div>
            
          </div>
               
          <div className="text-white font-semibold text-sm md:text-base">
          
                 
                    Erick Olachea · Software QA Tester
                
        </div>
        </div>
        

        <div className="hidden md:flex items-center gap-6 text-gray-300">
          <li onClick={() => trackNavbarClick("Experiencia")}>
              <a href="#experience" className="hover:text-white">{navbar.experience}</a>
            </li>
          <li onClick={() => trackNavbarClick("Proyectos")}>
            <a href="#projects" className="hover:text-white">{navbar.project}</a>
          </li>
          <li onClick={() => trackNavbarClick("Contacto")}>
            <a href="#contact" className="hover:text-white">{navbar.contact}</a>
          </li>
          <a href="/archivos/Erick_Olachea_Resume.pdf" className="ml-2 inline-flex items-center gap-2 bg-[#15345a] hover:bg-[#1f4f7f] text-white px-4 py-2 rounded-md"
           download onClick={trackDownloadCV}>
            {navbar.download}
          </a>
          <LanguageSwitcher />
        </div>

        
        <div className="md:hidden text-gray-300">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

     
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#0b1117] border-t border-[rgba(255,255,255,0.05)] px-6 py-4 space-y-4 text-gray-300"
          >
            <a href="#experience" className="block hover:text-white" onClick={() => setMenuOpen(false)}>{navbar.experience}</a>
            <a href="#projects" className="block hover:text-white" onClick={() => setMenuOpen(false)}>{navbar.project}</a>
            <a href="#contact" className="block hover:text-white" onClick={() => setMenuOpen(false)}>{navbar.contact}</a>
            <a href="/archivos/Erick_Olachea_Resume.pdf"
              download="Erick_Olachea_Resume.pdf" className="block bg-[#15345a] hover:bg-[#1f4f7f] text-white text-center px-4 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
              {navbar.download}
            </a>
            <LanguageSwitcher />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
