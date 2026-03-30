import { motion } from "motion/react";

export default function Concept() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[240px] md:text-[320px] font-display font-black text-blue-50 leading-none select-none"
            >
              0
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900"
              >
                El Concepto <br /> <span className="text-brand-primary">Cero</span>
              </motion.h2>
            </div>
          </div>

          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold tracking-tight text-brand-primary">
                Desaprender para Escalar
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                La mayoría de las empresas intentan mejorar sobre estructuras obsoletas. Nosotros proponemos <span className="text-brand-primary font-bold">volver a cero</span>. 
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                Eliminamos el ruido, las tareas de bajo valor y las fricciones internas. Reconstruimos desde la base utilizando <span className="text-slate-900 font-medium">Inteligencia Artificial</span> para automatizar lo mecánico y <span className="text-slate-900 font-medium">Liderazgo Estratégico</span> para potenciar lo humano.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-4xl font-bold mb-2 text-slate-900">0%</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Ruido Operativo</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-slate-900">100%</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Foco Estratégico</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
