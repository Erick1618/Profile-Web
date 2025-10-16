import React from 'react'
import { EXPERIENCE } from '../data/experience'
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";



export default function Experience() {
 const { t } = useTranslation(["web","general"]);
  
 const web  =t("web.sections", { ns: "web",returnObjects: true })|| [];

  // Opción 1: si quieres mapear el array completo:
  const education  = t("education", { ns: "general", returnObjects: true }) || [];


  

  return (
    <section id="experience" className="mt-16 px-4 md:px-0 relative">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
        {web.education}
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Línea central (visible a la izquierda en móvil, centrada en desktop) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/30 to-purple-500/30 md:translate-x-[-50%]" />

        {education.map((item, idx) => (
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
                  {item.degree}
                </h3>
                <p className="text-blue-400 text-sm md:text-base">{item.school}</p>
                <p className="text-xs md:text-sm text-gray-400">
                 {item.date}
                </p>
                <p className="text-xs md:text-sm text-gray-500">{item.location}</p>
              </div>

             
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
