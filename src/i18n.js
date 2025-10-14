import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importamos los archivos JSON con los textos

import generalEN from "./data/resume.json";
import generalES from "./data/cv.json";
import projectsEN from "./data/proyectoEN.json";
import projectsES from "./data/proyectoES.json";
i18n
  .use(initReactI18next) // conecta i18next con React
  .init({
   resources: {
      en: {
        general: generalEN,
        projects: projectsEN,
      },
      es: {
        general: generalES,
        projects: projectsES,
      },
    },
    lng: "es", // idioma inicial (puede ser 'en' o 'es')
    fallbackLng: "en", // si falta alguna traducción, usa inglés
    interpolation: {
      escapeValue: false, // React ya se encarga de proteger el HTML
    },
  });

export default i18n;
