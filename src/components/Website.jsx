import { motion } from "framer-motion";
import { Globe } from "lucide-react";

import { useTranslation } from "react-i18next";

const WEBSITES = [
  {
    title: "Invitacion Boda",
    url: "https://olacheadev.com/VaronicayMarco/",
    desc: "Invitacion perosnalizada e interactiva para una boda. ",
  },
  {
    title: "Administracion de Invitaciones",
    url: "https://olacheadev.com/admin/",
    desc: "Administracion de Invitados de las invitaciones para la boda.",
  },
  {
    title: "Delegacion 74",
    url: "https://di74.olacheadev.com/",
    desc: "Pagina de la Delegacion 74 de los maestros de la Sección 37 del SNTE.",
  }
];

export default function Websites() {
    const { t } = useTranslation("web");
          const web = t("web.sections.pages", { returnObjects: true }) || [];
    
  return (
    <section id="websites" className="mt-20 px-4 md:px-0 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">
        <Globe className="inline-block w-7 h-7 mr-2 text-blue-400" />
        {web.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {web.sites.map((site, idx) => (
  <motion.div
    key={idx}
    className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20 transition-all flex flex-col items-center p-4"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
  >
    {/* Contenedor tipo "móvil" */}
    <div className="relative bg-[#0b1220] rounded-[2rem] border border-gray-700 shadow-inner overflow-hidden w-[350px] h-[650px]">
      {/* Notch o barra superior simulando un teléfono */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gray-600 rounded-full opacity-70"></div>

      <iframe
        src={site.url}
        title={site.title}
        className="w-full h-full rounded-[2rem] border-none scale-[0.98] origin-center"
        loading="lazy"
        style={{
          transform: "none",
          filter: "none",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
          imageRendering: "crisp-edges",
          overflow: "hidden",
        }}
      ></iframe>
    </div>

    <div className="text-center mt-4">
      <h3 className="text-lg font-semibold text-gray-100">{site.title}</h3>
      <p className="text-sm text-gray-400 mt-1">{site.description}</p>
    </div>
  </motion.div>
))}

      </div>
    </section>
  );
}
