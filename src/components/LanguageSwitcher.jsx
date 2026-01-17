import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  // Extraemos i18n y t
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2 border-l border-slate-700 pl-4 ml-4">
      <span className="text-slate-500 text-xs hidden sm:inline">
        {t("switch_btn")}
      </span>

      <div className="flex gap-1">
        <button
          onClick={() => changeLanguage("es")}
          className={`
            px-2 py-0.5 rounded text-xs font-bold transition-all
            ${
              i18n.resolvedLanguage === "es"
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/50"
                : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"
            }
          `}
        >
          ES
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`
            px-2 py-0.5 rounded text-xs font-bold transition-all
            ${
              i18n.resolvedLanguage === "en"
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/50"
                : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"
            }
          `}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
