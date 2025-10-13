import React from 'react'
import { EXPERIENCE } from '../data/experience'

import { motion } from "framer-motion";

export function calcularEdad(fechaInicio, fechaFin) {
  const start = new Date(fechaInicio);
  const end = new Date(fechaFin);
  let anio;
  let mes;
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // Ajuste si el mes actual es menor que el mes inicial
  if (months < 0) {
    years--;
    months += 12;
  }

  //ajustar palabras en plural
  if(months==1){
    
    mes='mes';
  }else{
     mes='meses';
  }

  if(years==1){
    
    anio='año';
  }else{
     anio='años';
  }

  return { years, months, mes,anio };
}

/*export default function Experience() {
  const res=Array;
 EXPERIENCE.map((item1,id) => (
   res[id] = calcularEdad(item1.fechaInicio, item1.fechaTermino)
 ))

  return (
    <section id="experience" className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Experiencia Profesional</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERIENCE.map((item, idx) => (
            
          <article key={idx} className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-gray-300 font-semibold text-xl">{item.company}</div>
                <div className="text-base text-gray-400">{item.role}</div>
                <div className="text-sm text-gray-400">{res[idx].years} {res[idx].anio} {res[idx].months} {res[idx].mes}</div>
                <div className="text-sm text-gray-400">{item.location}</div>

              </div>
              
              <div className="text-sm text-gray-500">{item.period} </div>
              
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.03)] text-sm text-gray-200">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
//}*/




export default function Experience() {
  const res = [];
  EXPERIENCE.map((item1, id) => (res[id] = calcularEdad(item1.fechaInicio, item1.fechaTermino)));

  return (
    <section id="experience" className="mt-16 px-4 md:px-0 relative">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
        Experiencia Profesional
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Línea central (visible a la izquierda en móvil, centrada en desktop) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/30 to-purple-500/30 md:translate-x-[-50%]" />

        {EXPERIENCE.map((item, idx) => (
          <motion.div
            key={idx}
            className={`relative flex flex-col md:flex-row items-start mb-6 md:mb-10 ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
          >
            {/* Punto de la línea */}
            <div className="absolute left-[0.9rem] md:left-1/2 md:translate-x-[-50%] w-5 h-5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-4 border-[#0b1220] z-10 shadow-md" />

            {/* Tarjeta */}
            <div
              className={`relative mt-3 md:mt-0 w-full md:w-[45%] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-5 md:p-6 backdrop-blur-sm shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ${
                idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                  {item.company}
                </h3>
                <p className="text-blue-400 text-sm md:text-base">{item.role}</p>
                <p className="text-xs md:text-sm text-gray-400">
                 {item.period} · {res[idx].years} {res[idx].anio} {res[idx].months} {res[idx].mes}
                </p>
                <p className="text-xs md:text-sm text-gray-500">{item.location}</p>
              </div>

              {/* Tecnologías */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 md:px-3 md:py-1.5 rounded-md bg-[rgba(255,255,255,0.06)] text-xs md:text-sm text-gray-200 hover:bg-blue-600/30 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
