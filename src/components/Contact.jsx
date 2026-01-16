import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaTerminal,
  FaPaperPlane,
  FaCheck,
  FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 3000);
      },
      (error) => {
        console.log(error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    );
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Contáctame<span className="animate-pulse text-cyan-500">!</span>
          </h2>
          <p className="text-slate-400">
            Envíame un mensaje directamente. Responderé lo antes posible.
          </p>
        </div>

        {/* Terminal Window Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl relative">
          {/* Terminal Header */}
          <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-slate-500 text-xs font-mono flex items-center gap-2">
              <FaTerminal />
              <span>bash — 80x24</span>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-6 md:p-8 font-mono">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label className="block text-slate-500 text-sm mb-1 group-focus-within:text-cyan-400 transition-colors">
                  // Ingresa tu nombre
                </label>
                <div className="flex items-center gap-2 bg-slate-950/50 p-2 rounded border border-transparent focus-within:border-cyan-500/50 transition-all">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-cyan-400">~</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu Nombre"
                    required
                    className="bg-transparent border-none outline-none text-slate-200 w-full placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block text-slate-500 text-sm mb-1 group-focus-within:text-cyan-400 transition-colors">
                  // Ingresa tu correo
                </label>
                <div className="flex items-center gap-2 bg-slate-950/50 p-2 rounded border border-transparent focus-within:border-cyan-500/50 transition-all">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-cyan-400">@</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    required
                    className="bg-transparent border-none outline-none text-slate-200 w-full placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Title Input */}
              <div className="group">
                <label className="block text-slate-500 text-sm mb-1 group-focus-within:text-cyan-400 transition-colors">
                  // Asunto del correo
                </label>
                <div className="flex items-center gap-2 bg-slate-950/50 p-2 rounded border border-transparent focus-within:border-cyan-500/50 transition-all">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-cyan-400">#</span>
                  <input
                    type="text"
                    name="title"
                    placeholder="Propuesta de proyecto / Consulta..."
                    required
                    className="bg-transparent border-none outline-none text-slate-200 w-full placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="group">
                <label className="block text-slate-500 text-sm mb-1 group-focus-within:text-cyan-400 transition-colors">
                  // Tu mensaje
                </label>
                <div className="flex gap-2 bg-slate-950/50 p-2 rounded border border-transparent focus-within:border-cyan-500/50 transition-all">
                  <span className="text-emerald-500 mt-1">➜</span>
                  <textarea
                    name="message"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                    rows="4"
                    className="bg-transparent border-none outline-none text-slate-200 w-full resize-none placeholder:text-slate-600"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button & Status */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className={`
                    flex items-center gap-2 px-6 py-2 rounded font-bold transition-all
                    ${
                      status === "sending"
                        ? "bg-slate-700 cursor-wait text-slate-400"
                        : status === "success"
                        ? "bg-emerald-600 text-white cursor-default"
                        : "bg-cyan-600 hover:bg-cyan-500 text-slate-900 hover:shadow-[0_0_15px_rgba(8,145,178,0.4)]"
                    }
                  `}
                >
                  {status === "idle" && (
                    <>
                      <span>./enviar_correo.sh</span>
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                  {status === "sending" && <span>Ejecutando...</span>}
                  {status === "success" && (
                    <>
                      <span>Enviado</span>
                      <FaCheck />
                    </>
                  )}
                  {status === "error" && <span>Error al enviar</span>}
                </button>

                {/* Mensaje de error */}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm animate-pulse">
                    <FaExclamationCircle />
                    <span>Error de conexión. Intenta más tarde.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
