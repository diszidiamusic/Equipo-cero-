import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Inicial",
    description: "Análisis profundo de la situación actual. Identificamos cuellos de botella y fricciones operativas."
  },
  {
    number: "02",
    title: "Intervención Estratégica",
    description: "Formación de alto impacto o team building experiencial diseñado a medida para tu equipo."
  },
  {
    number: "03",
    title: "Observación Real",
    description: "Evaluamos conductas observables durante la acción. No nos basamos en teorías, sino en hechos."
  },
  {
    number: "04",
    title: "Informe Estratégico",
    description: "Mapa de equipo detallado con roles reales, carencias y propuestas de mejora concretas."
  },
  {
    number: "05",
    title: "Plan de Mejora",
    description: "Acompañamiento en la implementación de cambios y automatización de procesos con IA."
  }
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-32 px-6 bg-brand-dark relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            Metodología Equipo Zero
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white leading-none"
          >
            EL SISTEMA DE <br /> <span className="text-brand-primary">TRANSFORMACIÓN</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>

          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <div className="text-8xl font-display font-black text-white/5 mb-6 leading-none">{step.number}</div>
                    <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">{step.title}</h3>
                    <p className="text-slate-400 max-w-md leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center z-10 border border-white/10 shadow-3xl group">
                    <div className="w-4 h-4 bg-brand-primary rounded-full group-hover:scale-150 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  {/* Glowing Ring */}
                  <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-xl animate-pulse"></div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
