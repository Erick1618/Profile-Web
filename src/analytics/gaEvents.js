import ReactGA from "react-ga4";

// 🔹 Descarga de CV
export const trackDownloadCV = () => {
  ReactGA.event({
    category: "CV",
    action: "Descarga de CV",
    label: "Botón Descargar CV",
  });
};

// 🔹 Click en proyecto
export const trackProjectClick = (projectName) => {
  ReactGA.event({
    category: "Proyectos",
    action: "Click en Ver Proyecto",
    label: projectName,
  });
};

// 🔹 Click en red social
export const trackSocialClick = (networkName) => {
  ReactGA.event({
    category: "Redes Sociales",
    action: "Click en enlace",
    label: networkName,
  });
};

// 🔹 Envío de formulario
export const trackContactFormSubmit = () => {
  ReactGA.event({
    category: "Contacto",
    action: "Formulario enviado",
    label: "Formulario de contacto",
  });
};

// 🔹 Click en opción del Navbar
export const trackNavbarClick = (section) => {
  ReactGA.event({
    category: "Navegación",
    action: "Click en Navbar",
    label: section,
  });
};
