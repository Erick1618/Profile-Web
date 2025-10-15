import React from 'react'
import { Link } from "react-router-dom"
import { PROJECTS } from "../data/projects"
import { trackProjectClick } from "../analytics/gaEvents";
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";


  


export default function Projects() {
  const { t } = useTranslation("web");
        const web = t("web.sections", { returnObjects: true }) || [];
  
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-bold mb-6">{web.projects}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <article key={i} className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] backdrop-blur-sm shadow-lg shadow-blue-500/20">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg font-semibold">{p.title}</div>
                <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
               
                <p className="text-sm font-semibold text-white mt-3">Tipos de {p.tipo}
                  {p.type.map((t) => <p  key={t}  className="text-xs text-gray-300 mt-1"> ▪ {t}</p>)}
                </p>
                 <p className="text-sm font-semibold text-white mt-3">Experiencia En {p.tipo}
                  {p.Exp.map((t) => <p  key={t}  className="text-xs text-gray-300 mt-1"> ▪ {t}</p>)}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => <span key={t} className="px-2 py-1 rounded-md bg-[rgba(255,255,255,0.03)] text-xs">{t}</span>)}
                </div>
              </div>
              <div className="ml-4 flex flex-col gap-2">
               <Link
                  to="/detallesproyecto"
                  state={{ id: p.id }} // 👈 así se pasa el JSON directo
                  className="text-sm inline-flex items-center gap-2 px-3 py-2 bg-sky-600 rounded-md hover:bg-sky-700"
                  onClick={() => trackProjectClick(p.name)}
                >
                  Ver
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
