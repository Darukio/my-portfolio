import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiPython, SiTailwindcss } from "react-icons/si";
import AVATAR_ASCII from "../assets/avatar_ascii.txt?raw";
import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center pt-24 md:pt-32 max-w-5xl mx-auto"
    >
      {/* --- SECCIÓN SUPERIOR: 2 COLUMNAS (Avatar | Títulos) --- */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-12">
        {/* COLUMNA IZQUIERDA: ASCII AVATAR */}
        {/* 'flex-shrink-0' evita que el avatar se aplaste */}
        <div className="flex-shrink-0 relative group select-none">
          {/* Efecto de brillo/glow detrás del avatar */}
          <div className="absolute -inset-6 bg-cyan-500/20 blur-3xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

          {/* Contenedor del ASCII */}
          <pre className="relative font-mono text-[10px] sm:text-xs leading-[1.1] text-cyan-400 whitespace-pre font-bold pointer-events-none">
            {AVATAR_ASCII}
          </pre>
        </div>

        {/* COLUMNA DERECHA: BADGE + INFO PRINCIPAL */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left pt-2">
          {/* Badge de disponibilidad */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t("hero.available_for_hire")}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 tracking-tight mb-4">
            Paulo Sebastian Spaciuk
            <span className="animate-pulse text-cyan-500">_</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-400 font-light">
            <Trans
              i18nKey="hero.role"
              components={[
                /* El índice 0 del array corresponde a <0> en el JSON */
                <span className="text-slate-600 mx-2" key="0"></span>,
              ]}
            />
          </h2>
        </div>
      </div>

      {/* --- SECCIÓN INFERIOR: DESCRIPCIÓN Y ACCIONES --- */}
      {/* Esto va fuera del flex row para que ocupe todo el ancho debajo */}
      <div className="flex flex-col items-center md:items-start">
        {/* Descripción */}
        <p className="text-slate-400 text-lg leading-relaxed mb-10 text-center md:text-left md:border-l-4 md:border-cyan-500/50 md:pl-6 bg-slate-900/30 md:bg-transparent py-4 md:py-0 px-4 md:px-0 rounded-lg">
          <Trans
            i18nKey="hero.description"
            components={[<strong key="0"></strong>]}
          />
        </p>

        {/* Botones */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16">
          <a
            href="https://github.com/darukio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700 hover:border-cyan-500/50 group"
          >
            <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/paulo-sebastian-spaciuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-all shadow-[0_0_15px_rgba(8,145,178,0.3)] hover:shadow-[0_0_25px_rgba(8,145,178,0.5)] group"
          >
            <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Tech Stack */}
        <div className="w-full border-t border-slate-800 pt-8">
          <h3 className="text-sm uppercase tracking-widest text-slate-500 mb-6 font-semibold text-center">
            {t("hero.tech_stack")}
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <TechIcon
              Icon={SiReact}
              name="React"
              color="group-hover:text-cyan-400"
            />
            <TechIcon
              Icon={SiNodedotjs}
              name="Node.js"
              color="group-hover:text-emerald-500"
            />
            <TechIcon
              Icon={SiTailwindcss}
              name="Tailwind"
              color="group-hover:text-cyan-300"
            />
            <TechIcon
              Icon={SiPython}
              name="Python"
              color="group-hover:text-yellow-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente TechIcon optimizado
const TechIcon = ({ Icon, name, color }) => (
  <div
    className={`flex flex-col items-center gap-2 group cursor-pointer transition-all`}
  >
    <Icon
      className={`text-4xl text-slate-600 transition-colors duration-300 group-hover:-translate-y-1 ${color}`}
    />
    <span className="text-xs text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </span>
  </div>
);

export default Hero;
