import React from "react";
import { motion } from "framer-motion";
import { NavbarDetalles } from "../components/NavbarDetalles"
import profilePic from '../image/logo.png';
import { useLocation, useParams } from 'react-router-dom'

import { useTranslation } from "react-i18next";



export default function DetallesProyectos() {

function calcularFecha(fechaInicio, fechaFin,fecha){
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
    
    mes=fecha.month;
  }else{
     mes=fecha.months;
  }

  if(years==1){
    
    anio=fecha.year;
  }else{
     anio=fecha.years;
  }

  return { years, months, mes,anio };
}

const location = useLocation();
  const { id } = location.state || {}; // 👈 obtenemos el ID enviado


  if (!id) {
    return <h1>Proyecto con ID: 😢{id}</h1>; 
  }
  
   const { t } = useTranslation(["web","projects"]);
    
   const web  =t("web.sections.experience", { ns: "web",returnObjects: true })|| [];
  console.log(id);

    const projects = t("projects", { ns: "projects", returnObjects: true }) || [];
  const proyect = projects.find(p => p.id === id);

  const fecha = calcularFecha(proyect.dateB,proyect.dateEnd,web);

  return (
    
    <div className="pt-24 pb-16 min-h-screen bg-[#0D1117] text-gray-100">
    <NavbarDetalles />
      <section className="mt-24 ">

      
        
      <div className="container mx-auto grid md:grid-row-2 gap-8 px-6">
       
          <motion.div
            
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.2 }}
            
          >{/* ← sección de GitHub <div className="mt-4 mb-8 flex flex-wrap gap-2">
              <img
              src={profilePic}
              className="w- h-44 object-cover rounded-full"
                whileHover={{ scale: 1.25 }}
                transition={{ type: "spring", stiffness: 200 }}
            />
            <img
              src={profilePic}
              className="w-44 h-44 object-cover rounded-full"
                whileHover={{ scale: 1.25 }}
                transition={{ type: "spring", stiffness: 200 }}
            />
          </div>!*/}
            
              <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center  mb-10"
            >
              {proyect.company}
            </motion.h1>
            
            <article  className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] backdrop-blur-sm shadow-lg shadow-blue-500/20">
            <div className="flex items-start justify-between">
              <div >
                <div className="mt-3 flex text-md  text-blue-400 font-semibold">{proyect.city} · {proyect.date} · {fecha.years} {fecha.anio} {fecha.months} {fecha.mes} </div>
                <div className="mt-3 flex text-xl  text-blue-400 ">{proyect.role}</div>
                <p className=" flex text-2xl font-semibold text-blue-400 mb-2 mt-4">{proyect.funcional.stlc}</p>
                <p className="flex text-lg font-semibold text-gray-300 mb-4 mt-2">{proyect.description.testing_lifecycle}</p>
                <p className="flex text-2xl font-semibold text-blue-400 mt-4">{proyect.funcional.meto}</p>
                <p    className=" flex text-xl text-gray-300 mt-2">{proyect.description.methodology}</p>
                <p className="flex text-2xl font-semibold text-blue-400 mb-2 mt-4">{proyect.tipo}</p>
                {proyect.types.map((t) => <p  key={t}  className=" flex text-xl text-gray-300 mt-1"> ▪ {t}</p>)}
                 <p className="flex text-2xl font-semibold text-blue-400 mb-2 mt-4">{proyect.tipoexp} </p>
                {proyect.expertise.map((t) => <p  key={t}  className=" flex text-xl text-gray-300 mt-1"> ▪ {t}</p>)}
                <p className="flex text-2xl font-semibold text-blue-400 mt-4">{proyect.funcional.experience}</p>
                <p   className=" flex text-xl text-gray-300 mt-1">{proyect.functional_experience}</p>
                <p className="flex text-2xl font-semibold text-blue-400 mt-4 mb-0">{proyect.funcional.tools}</p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {proyect.tools.map((t) => <span key={t} className="px-2 py-1 rounded-md bg-[rgba(255,255,255,0.03)] text-lg">{t}</span>)}
                </div>
            </div>
           
              </div>
          </article>
          </motion.div>
        
      </div>
      </section>
    </div>
  );
}
