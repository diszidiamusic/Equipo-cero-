import { motion } from "motion/react";
import { Target, Shield, Zap, Info } from "lucide-react";

export default function Scenarios() {
  return (
    <section id="scenarios" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-blue-50 border border-blue-100 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            Escenarios Diferenciales
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
          >
            Entornos de <br /> <span className="text-brand-primary">Simulación</span>
          </motion.h2>
        </div>

        <div className="relative group overflow-hidden rounded-[3rem] border border-slate-100 bg-white shadow-2xl shadow-blue-100">
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
            <img 
              src="https://picsum.photos/seed/modern-office/1920/1080" 
              alt="Escenario Omaha" 
              className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-10 p-12 md:p-24 flex flex-col md:flex-row gap-12 items-center bg-gradient-to-r from-white via-white/90 to-transparent">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-brand-primary/20">01</div>
                <h3 className="text-4xl font-bold tracking-tight text-slate-900">Escenario Omaha</h3>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl"
              >
                Nuestro escenario estrella. Una simulación de alta intensidad diseñada para llevar al equipo al límite. Toma de decisiones bajo presión, liderazgo en crisis y cohesión absoluta.
              </motion.p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-primary">
                    <Shield size={20} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Resiliencia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-primary">
                    <Zap size={20} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Acción Rápida</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-primary">
                    <Target size={20} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Foco Absoluto</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-primary">
                    <Info size={20} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Inteligencia</span>
                </div>
              </div>

              <button className="px-10 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20">
                Explorar Escenario
              </button>
            </div>

            <div className="flex-1 hidden lg:block">
              <div className="relative aspect-video bg-blue-50/50 rounded-3xl border border-blue-100 backdrop-blur-sm p-8">
                <div className="w-full h-full border-2 border-dashed border-blue-200 rounded-2xl flex items-center justify-center font-bold text-xs text-brand-primary uppercase tracking-widest">
                  [SIMULACIÓN_ACTIVA]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
