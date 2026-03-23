import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="section-marker" />
              <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Contact</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let's build something
              <br />
              <span className="text-accent-underline">remarkable</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
              Available for frontend roles and freelance projects. If you need precision, let's talk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="mailto:gerges.naguib.dev@gmail.com"
              className="flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-display font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Send an Email <ArrowUpRight size={16} />
            </a>
            <a
              href="tel:+201112644702"
              className="flex items-center gap-2 border border-foreground text-foreground px-8 py-4 rounded-full font-display font-semibold text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              <Phone size={16} /> +20 111 264 4702
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <a href="https://github.com/Gerges-GN" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/gerges-naguib" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:gerges.naguib.dev@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={22} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
