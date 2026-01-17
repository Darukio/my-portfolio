import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-3">
      {/* Barra estilo "Polybar" o "Waybar" */}
      <div className="flex justify-between items-center max-w-7xl mx-auto bg-slate-900/90 border-b border-cyan-500/30 backdrop-blur-sm px-6 py-2 font-mono text-sm">
        {/* Sección Izquierda: Hostname */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-slate-400">paulo-spaciuk@linux:~</span>
        </div>

        {/* Sección Derecha: Navegación tipo texto */}
        <div className="flex items-center gap-8">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="hover:text-cyan-400 hover:underline decoration-cyan-500 underline-offset-4 transition-all"
              >
                ./{t("nav.home")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 hover:underline decoration-cyan-500 underline-offset-4 transition-all"
              >
                ./{t("nav.projects")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 hover:underline decoration-cyan-500 underline-offset-4 transition-all"
              >
                ./{t("nav.contact")}
              </a>
            </li>
          </ul>

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
