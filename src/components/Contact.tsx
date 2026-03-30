import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[2px] bg-brand-primary rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Contacto Directo</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900"
            >
              ¿Listo para <br /> <span className="text-brand-primary">Volver a Cero?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-600 mb-12 leading-relaxed"
            >
              Transformamos organizaciones, no solo equipos. Si buscas resultados medibles y una metodología disruptiva, hablemos.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:border-brand-primary transition-all">
                  <Phone size={24} className="text-brand-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Llámanos</div>
                  <div className="text-xl font-bold text-slate-900">+34 900 000 000</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:border-brand-primary transition-all">
                  <Mail size={24} className="text-brand-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Escríbenos</div>
                  <div className="text-xl font-bold text-slate-900">info@equipocero.com</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] border border-slate-100 p-12 shadow-2xl shadow-blue-100 relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Nombre Completo</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:border-brand-primary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Empresa</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:border-brand-primary outline-none transition-all" placeholder="Empresa S.A." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Corporativo</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:border-brand-primary outline-none transition-all" placeholder="john@empresa.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Mensaje</label>
                <textarea className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:border-brand-primary outline-none transition-all h-32 resize-none" placeholder="Cuéntanos tu reto..."></textarea>
              </div>
              <button className="w-full py-5 bg-brand-primary text-white font-bold rounded-full shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary transition-all flex items-center justify-center gap-3 group">
                Enviar Solicitud
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
