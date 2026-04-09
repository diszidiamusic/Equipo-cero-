import { motion } from "motion/react";
import { Target, Shield, Zap, Info } from "lucide-react";

export default function Scenarios() {
  return (
    <section id="scenarios" className="py-32 px-6 bg-brand-dark relative overflow-hidden">
      {/* Background Noise & Grid */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-slate opacity-[0.02] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            Escenarios Diferenciales
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white leading-none"
          >
            ENTORNOS DE <br /> <span className="text-brand-primary">SIMULACIÓN</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative group overflow-hidden rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-3xl"
        >
          <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-1000">
            <img 
              src="https://picsum.photos/seed/tactical-mission/1920/1080" 
              alt="Escenario Omaha" 
              className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-24 flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-6 mb-10"
              >
                <div className="w-20 h-20 bg-brand-primary rounded-[2rem] flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-brand-primary/40 rotate-3 group-hover:rotate-0 transition-transform duration-500">01</div>
                <h3 className="text-5xl md:text-6xl font-display font-black tracking-tighter text-white uppercase">Escenario Omaha</h3>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl text-balance"
              >
                Nuestro escenario estrella. Una simulación de <span className="text-brand-primary font-bold">alta intensidad</span> diseñada para llevar al equipo al límite. Toma de decisiones bajo presión, liderazgo en crisis y cohesión absoluta.
              </motion.p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Shield, label: "Resiliencia" },
                  { icon: Zap, label: "Acción Rápida" },
                  { icon: Target, label: "Foco Absoluto" },
                  { icon: Info, label: "Inteligencia" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary border border-white/10 group-hover/item:bg-brand-primary group-hover/item:text-white transition-all duration-300">
                      <item.icon size={24} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover/item:text-white transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>

              <button className="px-12 py-5 bg-brand-primary text-white font-bold rounded-full hover:bg-white hover:text-brand-dark transition-all shadow-2xl shadow-brand-primary/20 text-lg uppercase tracking-widest">
                Explorar Escenario
              </button>
            </div>

            <div className="flex-1 hidden lg:block">
              <div className="relative aspect-square bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-md p-12 overflow-hidden group/viz">
                <div className="absolute inset-0 bg-noise opacity-20"></div>
                <div className="w-full h-full border-2 border-dashed border-brand-primary/30 rounded-[2rem] flex flex-col items-center justify-center gap-6 relative">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-24 h-24 bg-brand-primary/20 rounded-full flex items-center justify-center"
                  >
                    <Zap size={48} className="text-brand-primary animate-pulse" />
                  </motion.div>
                  <div className="text-center">
                    <div className="text-xs font-black text-brand-primary uppercase tracking-[0.3em] mb-2">Simulación Activa</div>
                    <div className="text-4xl font-black text-white tracking-tighter">OMAHA_v2.0</div>
                  </div>
                  
                  {/* Decorative Scan Line */}
                  <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-px bg-brand-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
