import { motion } from "motion/react";
import { BookOpen, Briefcase, Users, Search, Target, Zap, Cpu, BarChart } from "lucide-react";

const services = [
  {
    category: "Formación de Élite",
    title: "Productividad y Soft Skills",
    description: "Capacitación avanzada para empresas y administraciones públicas. Habilidades clave para el nuevo paradigma laboral.",
    icon: BookOpen,
    color: "text-brand-primary"
  },
  {
    category: "Transformación Digital",
    title: "IA y Automatización",
    description: "Implementación de IA para eliminar tareas de bajo valor. Liberamos tiempo para lo que realmente importa.",
    icon: Cpu,
    color: "text-brand-secondary"
  },
  {
    category: "Consultoría Estratégica",
    title: "Optimización de Procesos",
    description: "Mejora radical de la productividad empresarial mediante la integración de herramientas tecnológicas de vanguardia.",
    icon: Briefcase,
    color: "text-blue-500"
  },
  {
    category: "Experiencial",
    title: "Team Building Inmersivo",
    description: "Actividades de alto impacto en escenarios reales. Desarrollo de liderazgo, comunicación y resiliencia.",
    icon: Users,
    color: "text-purple-500"
  },
  {
    category: "Diagnóstico",
    title: "Mapa de Equipo 360º",
    description: "Evaluación de conductas observables e informe profesional. Roles reales vs teóricos y áreas de mejora concretas.",
    icon: Search,
    color: "text-yellow-500"
  },
  {
    category: "Especial",
    title: "Escenario Omaha",
    description: "Simulaciones en entornos realistas para pruebas de estrés, toma de decisiones y cohesión bajo presión.",
    icon: Target,
    color: "text-red-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-brand-primary rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Portafolio de Soluciones</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-8xl font-display font-black tracking-tighter text-slate-900 leading-[0.85]"
            >
              NUESTROS <br /> <span className="text-brand-primary">SERVICIOS</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-xs text-sm font-medium leading-relaxed pb-2"
          >
            Fusionamos tecnología y psicología para transformar la cultura operativa de tu organización.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-12 bg-white hover:bg-slate-50 transition-colors group relative overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className={`mb-10 w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center ${service.color} group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-inner`}>
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">{service.category}</div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 tracking-tight leading-tight group-hover:text-brand-primary transition-colors">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg mb-8">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Explorar Solución
                <Zap size={14} className="animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
