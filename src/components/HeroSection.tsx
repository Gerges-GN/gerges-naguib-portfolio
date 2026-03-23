import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="section-marker" />
              <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                Frontend Developer — Cairo, Egypt
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-foreground"
            >
              Gerges
              <br />
              <span className="relative">
                Naguib
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                  <path d="M1 5.5C60 2 120 1 150 3C180 5 240 6.5 299 3" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              I turn complex designs into{" "}
              <span className="text-foreground font-medium">pixel-perfect</span>,{" "}
              production-ready React applications. Clean code. Zero compromises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="bg-foreground text-background px-8 py-3.5 rounded-full font-display font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-foreground text-foreground px-8 py-3.5 rounded-full font-display font-semibold text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-5 pt-4"
            >
              <a href="https://github.com/Gerges-GN" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/gerges-naguib" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:gerges.naguib.dev@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 bg-card rounded-2xl overflow-hidden border border-border relative">
                <img
                  src={profilePhoto}
                  alt="Gerges Naguib"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Accent frame */}
              <div className="absolute -bottom-3 -right-3 w-72 h-80 md:w-80 md:h-96 border-2 border-primary rounded-2xl -z-10" />
              {/* Floating tag */}
              <div className="absolute -bottom-6 -left-4 bg-foreground text-background px-4 py-2 rounded-lg font-display text-sm font-semibold shadow-lg">
                React Specialist
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
