import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Gerges delivered our booking interface exactly as designed—not a single pixel off. His attention to detail saved us weeks of back-and-forth revisions.",
    name: "Ahmed El-Sayed",
    role: "Product Lead, Cairo Startup",
  },
  {
    quote: "Working with Gerges felt different. He didn't just code the UI—he questioned edge cases, suggested improvements, and delivered cleaner code than we expected.",
    name: "Sarah Mansour",
    role: "CTO, Digital Agency",
  },
  {
    quote: "Fast, reliable, and genuinely cares about the craft. Gerges turned our Figma designs into a responsive React app in record time. Will hire again.",
    name: "Omar Farid",
    role: "Founder, E-commerce Platform",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-marker" />
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What they <span className="text-accent-underline">say</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-background p-8 rounded-xl border border-border"
            >
              <Quote size={24} className="text-primary mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm">{t.quote}</p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
