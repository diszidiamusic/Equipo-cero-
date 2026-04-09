import { motion } from "motion/react";
import { Search, BarChart, FileText, CheckCircle, Target } from "lucide-react";

export default function Diagnosis() {
  return (
    <section id="diagnosis" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-square bg-brand-dark rounded-[4rem] p-16 relative overflow-hidden shadow-3xl group"
            >
              <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent"></div>

              <div className="w-full h-full border border-white/10 rounded-[3rem] flex items-center justify-center relative">
                {/* Central Node */}
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-32 h-32 bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center rounded-full z-10 backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                >
                  <Target size={50} className="text-brand-primary" />
                </motion.div>
 
                {/* Sub Nodes with connecting lines */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <div key={i} className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                      className="absolute w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl backdrop-blur-md group-hover:bg-brand-primary/20 transition-colors duration-500"
                      style={{
                        transform: `rotate(${angle}deg) translate(180px) rotate(-${angle}deg)`
                      }}
                    >
                      <div className={`w-4 h-4 rounded-full ${i % 2 === 0 ? 'bg-brand-primary' : 'bg-brand-secondary'} shadow-[0_0_15px_rgba(59,130,246,0.5)]`}></div>
                    </motion.div>
                    
                    {/* Connection Line */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "180px" }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
                      className="absolute h-px bg-gradient-to-r from-brand-primary/50 to-transparent origin-left left-1/2"
                      style={{ transform: `rotate(${angle}deg)` }}
                    ></motion.div>
                  </div>
                ))}
              </div>

              {/* Floating Labels */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 left-12 p-5 bg-white rounded-2xl shadow-2xl border border-blue-50 z-20"
              >
                <div className="text-[10px] font-black text-brand-primary mb-1 uppercase tracking-[0.2em]">Liderazgo Natural</div>
                <div className="text-slate-900 font-bold">Nodo 04: Identificado</div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 right-12 p-5 bg-brand-primary rounded-2xl shadow-2xl z-20"
              >
                <div className="text-[10px] font-black text-white/80 mb-1 uppercase tracking-[0.2em]">Cohesión Grupal</div>
                <div className="text-white font-bold text-xl">8.5/10</div>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-brand-primary rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Diagnóstico de Equipos</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-10 text-slate-900 leading-[0.85]"
            >
              MAPA DE <br /> <span className="text-brand-primary">EQUIPO</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl text-slate-600 mb-12 leading-relaxed text-balance"
            >
              No nos quedamos en la superficie. Tras nuestras intervenciones, entregamos una <span className="text-brand-dark font-bold underline decoration-brand-secondary decoration-4 underline-offset-4">radiografía real</span> de las relaciones internas y roles de liderazgo.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "Conductas", desc: "Evaluación en tiempo real." },
                { title: "Liderazgo", desc: "Identificación de roles naturales." },
                { title: "Informes", desc: "Detalle estratégico para dirección." },
                { title: "Métricas", desc: "Resultados medibles y concretos." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand-primary/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <CheckCircle size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
