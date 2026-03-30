import { motion } from "motion/react";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-primary flex items-center justify-center font-bold text-white rounded-full shadow-md shadow-brand-primary/20">0</div>
              <span className="text-xl font-display font-bold tracking-tight text-slate-900">Equipo Cero</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
              Transformación radical de equipos y organizaciones. Fusionando tecnología de vanguardia con el potencial humano más puro.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-slate-100 bg-slate-50 rounded-full flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-8">Navegación</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#home" className="hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Servicios</a></li>
              <li><a href="#methodology" className="hover:text-brand-primary transition-colors">Metodología</a></li>
              <li><a href="#diagnosis" className="hover:text-brand-primary transition-colors">Diagnóstico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-8">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            © 2026 Equipo Cero. Todos los derechos reservados.
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></div>
            System Status: Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
