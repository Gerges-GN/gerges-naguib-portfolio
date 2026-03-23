import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="section-marker" />
              <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">About</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Precision is
              <br />
              the <span className="text-accent-underline">standard</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Cairo-based frontend developer who believes every pixel matters. I don't just write code—I architect interfaces that feel intentional, performant, and built to last.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach is simple: understand the design deeply, question every assumption, then execute with surgical precision. Whether it's a complex booking system or a high-conversion e-commerce UI, I treat every component as a product decision.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {[
                { label: "Philosophy", value: "Design fidelity over shortcuts" },
                { label: "Focus", value: "Performance & accessibility first" },
                { label: "Drive", value: "Discipline, detail, iteration" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="border-t-2 border-primary pt-4"
                >
                  <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-display font-semibold text-foreground text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              {["React", "TypeScript", "Tailwind CSS", "Zustand", "REST APIs", "JWT Auth", "Strapi", "PostgreSQL", "Vite", "Git"].map((tech) => (
                <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted-foreground bg-card">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
