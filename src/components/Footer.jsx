import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 pt-10 pb-6 mt-20 relative overflow-hidden">
      {/* Efecto de luz de fondo, igual que en el Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* SECCIÓN IZQUIERDA: Marca y Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-mono font-bold text-slate-100 mb-2">
              ~/paulo-spaciuk
              <span className="text-cyan-500 animate-pulse">_</span>
            </h3>
            <p className="text-slate-500 text-sm">
              © {currentYear} Paulo Sebastian Spaciuk. MIT License.
            </p>
          </div>

          {/* SECCIÓN DERECHA: Redes y Scroll Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Redes Sociales (Versión compacta) */}
            <div className="flex gap-4">
              <SocialLink
                href="https://github.com/darukio"
                icon={<FaGithub />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/paulo-sebastian-spaciuk/"
                icon={<FaLinkedin />}
                label="LinkedIn"
              />
            </div>

            {/* Built With */}
            <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
              <span>Built with</span>
              <FaHeart className="text-red-500 w-3 h-3" />
              <span>using React & Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Componente auxiliar para botones sociales (Reutilizable y limpio)
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-slate-400 hover:text-cyan-400 transition-colors text-xl p-2 hover:bg-slate-900 rounded-lg border border-transparent hover:border-slate-800"
  >
    {icon}
  </a>
);

export default Footer;
