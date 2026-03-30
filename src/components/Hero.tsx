import { motion } from "motion/react";
import { ArrowRight, Zap, Target, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 pt-32 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Zap size={14} />
              <span>Transformación Inteligente</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-7xl font-display font-bold leading-[1.1] mb-8 text-slate-900"
            >
              Volver a <span className="text-brand-primary">Cero</span> <br />
              para <span className="text-brand-secondary italic">Escalar</span> el Futuro.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-600 max-w-xl mb-10 leading-relaxed"
            >
              Rediseñamos la forma en que los equipos trabajan. Fusionamos <span className="text-brand-primary font-semibold">IA avanzada</span> con <span className="text-brand-primary font-semibold">Psicología de Equipos</span> para crear organizaciones ágiles y humanas.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-10 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20 flex items-center gap-2 group">
                Iniciar Diagnóstico
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 border border-brand-border bg-white text-slate-700 rounded-full hover:bg-slate-50 transition-all font-bold shadow-sm">
                Nuestra Metodología
              </button>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-square bg-white rounded-[4rem] shadow-2xl shadow-blue-200/50 border border-white p-12 overflow-hidden"
            >
              <div className="w-full h-full bg-blue-50/50 rounded-[3rem] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
                <Users size={140} className="text-brand-primary/20" />
                
                {/* Bubble Stats */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 right-12 p-6 bg-white rounded-3xl shadow-xl border border-blue-50"
                >
                  <div className="text-xs font-bold text-brand-primary mb-1 uppercase tracking-wider">Eficiencia</div>
                  <div className="text-3xl font-bold text-slate-900">+45%</div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-12 left-12 p-6 bg-white rounded-3xl shadow-xl border border-blue-50"
                >
                  <div className="text-xs font-bold text-brand-secondary mb-1 uppercase tracking-wider">IA Integrada</div>
                  <div className="text-3xl font-bold text-slate-900">100%</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
