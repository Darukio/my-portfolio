import projectsData from "../data/projects.json";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCheckCircle, // Icono para completado
  FaTools, // Icono para WIP
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiAngular,
  SiPrisma,
  SiMariadb,
  SiNestjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

// Mapa de iconos de tecnologías
const ICON_MAP = {
  react: { icon: <FaReact />, color: "text-cyan-400" },
  node: { icon: <FaNodeJs />, color: "text-emerald-500" },
  python: { icon: <FaPython />, color: "text-amber-300" },
  javascript: { icon: <FaJs />, color: "text-yellow-400" },
  html: { icon: <FaHtml5 />, color: "text-orange-500" },
  css: { icon: <FaCss3Alt />, color: "text-blue-500" },
  tailwind: { icon: <SiTailwindcss />, color: "text-cyan-300" },
  typescript: { icon: <SiTypescript />, color: "text-blue-600" },
  angular: { icon: <SiAngular />, color: "text-red-600" },
  mongodb: { icon: <SiMongodb />, color: "text-green-500" },
  postgresql: { icon: <SiPostgresql />, color: "text-indigo-400" },
  reactnative: { icon: <TbBrandReactNative />, color: "text-cyan-400" },
  prisma: { icon: <SiPrisma />, color: "text-blue-400" },
  mariadb: { icon: <SiMariadb />, color: "text-blue-700" },
  java: { icon: <FaJava />, color: "text-red-500" },
  nestjs: { icon: <SiNestjs />, color: "text-red-600" },
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24">
      {/* Encabezado de la sección */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
          {t("projects.title")}
          <span className="animate-pulse text-cyan-500">.</span>
        </h2>
        <div className="h-px bg-slate-700 flex-grow"></div>
        <span className="text-cyan-500 font-mono text-sm hidden md:block">
          {projectsData.length} {t("projects.items_found")}
        </span>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => {
          // Lógica para determinar el estado (WIP o Completed)
          const isWip = project.status === "wip";

          return (
            <article
              key={project.id}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              {/* Efecto Glow superior */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6 flex flex-col h-full">
                {/* --- HEADER DE LA TARJETA (Estado + Links) --- */}
                <div className="flex justify-between items-start mb-4">
                  {/* Badge de Estado */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-mono font-semibold border ${
                      isWip
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    }`}
                  >
                    {isWip ? (
                      <>
                        <FaTools className="text-[10px] animate-pulse" />
                        <span>{t("projects.status.wip")}</span>
                      </>
                    ) : (
                      <>
                        <FaCheckCircle className="text-[10px]" />
                        <span>{t("projects.status.completed")}</span>
                      </>
                    )}
                  </div>

                  {/* Link al Repo */}
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver código fuente de ${project.title}`}
                    className="text-slate-500 hover:text-white transition-colors p-1.5 hover:bg-slate-800 rounded-lg -mr-2"
                  >
                    <FiExternalLink size={18} />
                  </a>
                </div>

                {/* Título del Proyecto */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
                  {t(`projects.projects_content.${project.id}.title`)}
                </h3>

                {/* Descripción */}
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {t(`projects.projects_content.${project.id}.desc`)}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                  {project.tech.map((techKey) => {
                    const tech = ICON_MAP[techKey] || {
                      icon: null,
                      color: "text-slate-400",
                    };
                    return (
                      <div
                        key={techKey}
                        className="flex items-center gap-1.5 bg-slate-800/50 px-2.5 py-1 rounded-md text-xs text-slate-300 border border-slate-700/50"
                      >
                        <span className={`${tech.color} text-sm`}>
                          {tech.icon}
                        </span>
                        <span className="capitalize">{techKey}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
