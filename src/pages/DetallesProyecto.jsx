import React from "react";
import { motion } from "framer-motion";
import { NavbarDetalles } from "../components/NavbarDetalles"

import { useLocation, useParams } from 'react-router-dom'



export default function DetallesProyectos() {
 const { state } = useLocation()
  const proyecto = state

  if (!proyecto) {
    return <p>No se encontró información del proyecto 😢</p>
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#0D1117] text-gray-100">
    <NavbarDetalles />
      <section className="mt-24 text-center">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-cyan-400 mb-10"
      >
        Experiencia y Proyectos Detallados
      </motion.h1>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
       
          <motion.div
            
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.2 }}
            className="bg-[#161B22] rounded-2xl p-6 shadow-lg flex flex-col items-center"
          >
            <img
              src={proyecto.img}
              alt={proyecto.rol}
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-cyan-400">{proyecto.title}</h2>
            <p className="text-gray-400 text-center mt-2">{proyecto.desc}</p>
          </motion.div>
        
      </div>
      </section>
    </div>
  );
}
