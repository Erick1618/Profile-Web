import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../image/user.png';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-12">
      <div className="flex justify-center md:justify-start">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-[#19304a] to-[#0f1b2a] p-1 shadow-xl">
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
      </div>

      <div className="md:col-span-2">
        <motion.h1 initial={{ opacity: 1, y: 8 }} animate={{ opacity: 2, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-extrabold leading-tight">¡Hola!, Soy 👋 </motion.h1>
        <motion.h1 initial={{ opacity: 1, y: 8 }} animate={{ opacity: 2, y: 0 }} transition={{ duration: 0.8 }} className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight"> <span className="text-white">Erick Augusto Olachea Ortega</span> </motion.h1>
        <p className="mt-3 text-xl text-sky-300">QA Software Tester Engineer · Web Developer</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg shadow-lg">Ver proyectos</a>
          <a href="#contact" className="inline-flex items-center px-5 py-3 bg-transparent border border-gray-700 hover:border-gray-500 rounded-lg">Contactar</a>
        </div>

        <p className="mt-6 text-gray-400">Ingeniero de QA con experiencia en analisis, diseño y ejecucion de pruebas funcionales: como pruebas de regresion, de integrasion, de API , Humo, manuales y automatización de pruebas de API REST y E2E. Seguimiento de requerimientos y gestión de defectos, Con experiencia en metodologías ágiles y control de versiones, trabajando bajo STLC, SDLC y con Fundamentos ISTQ. Integración continua y mejora de procesos de calidad, me interesa resolver problemas complejos mediante pruebas sólidas y reproducibles. Tambien, realizo desarrollo de aplicaciones web y videojuegos. </p>
      </div>
    </section>
  )
}
