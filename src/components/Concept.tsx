import { motion } from "motion/react";

export default function Concept() {
  return (
    <section className="py-32 px-6 bg-brand-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="text-[300px] md:text-[450px] font-display font-black text-white/5 leading-none select-none tracking-tighter"
            >
              0
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-8xl font-display font-black tracking-tighter text-white uppercase"
              >
                EL CONCEPTO <br /> <span className="text-brand-primary">ZERO</span>
              </motion.h2>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] border border-white/10">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div className="inline-block px-4 py-1 bg-brand-primary/20 border border-brand-primary/30 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest">
                Nuestra Filosofía
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Desaprender para <span className="italic text-brand-secondary">Escalar</span>
              </h3>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                La mayoría de las empresas intentan mejorar sobre estructuras obsoletas. Nosotros proponemos <span className="text-brand-primary font-bold">volver a zero</span>. 
              </p>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                Eliminamos el ruido, las tareas de bajo valor y las fricciones internas. Reconstruimos desde la base utilizando <span className="text-white font-medium">Inteligencia Artificial</span> para automatizar lo mecánico y <span className="text-white font-medium">Liderazgo Estratégico</span> para potenciar lo humano.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/10">
                <div>
                  <div className="text-6xl font-black mb-2 text-white tracking-tighter">0%</div>
                  <div className="text-xs uppercase tracking-widest text-brand-primary font-bold">Ruido Operativo</div>
                </div>
                <div>
                  <div className="text-6xl font-black mb-2 text-white tracking-tighter">100%</div>
                  <div className="text-xs uppercase tracking-widest text-brand-secondary font-bold">Foco Estratégico</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
