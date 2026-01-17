import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col text-slate-200 selection:bg-cyan-500 selection:text-white font-mono overflow-x-hidden">
      {/* Fondos y efectos... */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-10 blur-[100px]"></div>
      <Navbar />
      {/* El 'flex-grow' hace que este div ocupe todo el espacio disponible, empujando el Footer hacia abajo */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
