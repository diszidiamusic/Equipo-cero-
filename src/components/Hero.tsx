import { motion } from "motion/react";
import { ArrowRight, Zap, Target, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 pt-32 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Zap size={14} className="animate-pulse" />
              <span>Transformación Radical de Equipos</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 text-slate-900 tracking-tighter"
            >
              VOLVER <br />
              A <span className="text-brand-primary">ZERO</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 max-w-xl mb-12 leading-relaxed text-balance"
            >
              No optimizamos lo que no funciona. <span className="text-brand-dark font-bold underline decoration-brand-primary decoration-4 underline-offset-4">Resetamos</span> la estructura de tu equipo para escalar con inteligencia artificial y psicología de alto rendimiento.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <button className="px-12 py-5 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-primary transition-all shadow-2xl shadow-brand-dark/20 flex items-center gap-3 group text-lg">
                Iniciar Diagnóstico
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-12 py-5 border-2 border-slate-200 bg-white text-slate-700 rounded-full hover:border-brand-primary hover:text-brand-primary transition-all font-bold text-lg">
                Metodología
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="relative aspect-[4/5] bg-brand-dark rounded-[3rem] shadow-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-noise pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Users size={200} className="text-white/5 group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 p-8 bg-white rounded-3xl shadow-2xl border border-blue-50 z-20"
              >
                <div className="text-xs font-bold text-brand-primary mb-2 uppercase tracking-widest">Productividad</div>
                <div className="text-5xl font-black text-slate-900 leading-none">+85%</div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 -left-10 p-8 bg-brand-primary rounded-3xl shadow-2xl z-20"
              >
                <div className="text-xs font-bold text-white/80 mb-2 uppercase tracking-widest">IA Integrada</div>
                <div className="text-5xl font-black text-white leading-none">CORE</div>
              </motion.div>

              {/* Decorative Lines */}
              <div className="absolute top-0 left-0 w-full h-full border-[20px] border-white/5 rounded-[3rem] pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
