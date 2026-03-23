import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Plug, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Pixel-Perfect Frontend Development",
    description: "Translating designs into production-ready interfaces with zero visual drift. Every spacing, color, and interaction—exact.",
  },
  {
    icon: Layers,
    title: "React Application Architecture",
    description: "Scalable component systems, clean state management with Zustand/Context, and routing that just works.",
  },
  {
    icon: Plug,
    title: "API Integration & Auth Systems",
    description: "REST API integrations with Axios, JWT authentication flows, secure token persistence, and robust error handling.",
  },
  {
    icon: Zap,
    title: "UI Performance Optimization",
    description: "Responsive, accessible, and fast. Optimized rendering, lazy loading, and component-level performance tuning.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-marker" />
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Services</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What I <span className="text-accent-underline">deliver</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
