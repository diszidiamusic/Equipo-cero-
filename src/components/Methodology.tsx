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
    <section id="methodology" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-blue-50 border border-blue-100 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            Metodología Equipo Cero
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
          >
            El Sistema de <br /> <span className="text-brand-primary">Transformación</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 hidden md:block"></div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <div className="text-6xl font-display font-black text-blue-100 mb-4">{step.number}</div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-500 max-w-md leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 border-4 border-slate-50 shadow-xl shadow-blue-100">
                  <div className="w-4 h-4 bg-brand-primary rounded-full"></div>
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
