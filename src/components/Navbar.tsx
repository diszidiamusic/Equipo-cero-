import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary flex items-center justify-center font-bold text-white rounded-full shadow-md shadow-brand-primary/20">0</div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-900">Equipo Zero</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#home" className="hover:text-brand-primary transition-colors">Home</a>
          <a href="#services" className="hover:text-brand-primary transition-colors">Servicios</a>
          <a href="#methodology" className="hover:text-brand-primary transition-colors">Metodología</a>
          <a href="#diagnosis" className="hover:text-brand-primary transition-colors">Diagnóstico</a>
          <a href="#contact" className="px-6 py-2 bg-brand-primary text-white rounded-full hover:bg-brand-secondary transition-all shadow-md shadow-brand-primary/20">Contacto</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-bg border-b border-brand-border p-6 flex flex-col gap-4 uppercase text-sm tracking-widest"
        >
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#methodology" onClick={() => setIsOpen(false)}>Metodología</a>
          <a href="#diagnosis" onClick={() => setIsOpen(false)}>Diagnóstico</a>
          <a href="#contact" className="text-brand-primary" onClick={() => setIsOpen(false)}>Contacto</a>
        </motion.div>
      )}
    </nav>
  );
}
