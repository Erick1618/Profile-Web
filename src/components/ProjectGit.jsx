import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Projects() {

  const { t } = useTranslation("web");
        const web = t("web.sections", { returnObjects: true }) || [];
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Erick1618/repos?sort=updated&per_page=10")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error("Error al obtener repositorios:", err));
  }, []);

  return (
    <section id="projects" className="mt-16 px-4 md:px-0 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">
        <Github className="inline-block w-7 h-7 mr-2 text-blue-400" />
        {web.github}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 shadow-lg shadow-blue-500/10  transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-gray-100 mb-2">{repo.name}</h3>
              <p className="text-sm text-gray-400 mb-3 line-clamp-3">{repo.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
            </motion.a>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            Cargando proyectos de GitHub...
          </p>
        )}
      </div>
    </section>
  );
}
