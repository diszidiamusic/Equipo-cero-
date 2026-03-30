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
    <section id="services" className="py-32 px-6 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[2px] bg-brand-primary rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Portafolio de Soluciones</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
          >
            Nuestros <br /> <span className="text-brand-primary">Servicios</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-brand-primary/20 transition-all group shadow-sm hover:shadow-xl hover:shadow-blue-100"
            >
              <div className={`mb-8 w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform`}>
                <service.icon size={32} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">{service.category}</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Saber más</span>
                <Zap size={14} className="text-brand-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
