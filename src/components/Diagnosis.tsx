import { motion } from "motion/react";
import { Search, BarChart, FileText, CheckCircle, Target } from "lucide-react";

export default function Diagnosis() {
  return (
    <section id="diagnosis" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[2px] bg-brand-primary rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Diagnóstico de Equipos</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900"
            >
              Mapa de <br /> <span className="text-brand-primary">Equipo</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              No nos quedamos en la superficie. Tras nuestras intervenciones, entregamos un informe profesional con el <span className="text-brand-primary font-bold italic">Mapa de Equipo</span>: una radiografía real de las relaciones internas, roles teóricos vs reales y carencias críticas.
            </motion.p>

            <div className="space-y-6">
              {[
                "Evaluación de conductas observables en tiempo real.",
                "Informe profesional detallado para la dirección.",
                "Identificación de roles de liderazgo natural.",
                "Propuestas de mejora concretas y medibles."
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-full group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-slate-600 group-hover:text-slate-900 transition-colors font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-square bg-white border border-slate-100 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl shadow-blue-100"
            >
              {/* Visual Team Map Simulation */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,#3B82F6_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
              </div>

              <div className="w-full h-full border border-blue-50 flex items-center justify-center relative">
                {/* Central Node */}
                <div className="w-24 h-24 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-full z-10 shadow-xl shadow-blue-200/50">
                  <Target size={40} className="text-brand-primary" />
                </div>

                {/* Sub Nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="absolute w-14 h-14 bg-white border border-slate-100 flex items-center justify-center rounded-full shadow-md"
                    style={{
                      transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`
                    }}
                  >
                    <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-brand-primary' : 'bg-brand-secondary'}`}></div>
                  </motion.div>
                ))}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
                  <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 8" />
                  <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 8" />
                  <line x1="50%" y1="50%" x2="80%" y2="60%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 8" />
                  <line x1="50%" y1="50%" x2="20%" y2="40%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 8" />
                </svg>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-10 left-10 p-4 bg-white rounded-2xl border border-slate-100 shadow-xl font-bold text-[10px] uppercase tracking-widest">
                <div className="text-brand-primary mb-1">Liderazgo Natural</div>
                <div className="text-slate-900">Identificado: Nodo 04</div>
              </div>
              <div className="absolute bottom-10 right-10 p-4 bg-white rounded-2xl border border-slate-100 shadow-xl font-bold text-[10px] uppercase tracking-widest">
                <div className="text-brand-secondary mb-1">Cohesión Grupal</div>
                <div className="text-slate-900">Nivel: 8.5/10</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
