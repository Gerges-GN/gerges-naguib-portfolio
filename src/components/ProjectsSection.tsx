import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectHotel from "@/assets/project-hotel.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectYoutube from "@/assets/project-youtube.jpg";

const projects = [
  {
    title: "Hotel Reservation System",
    description: "Full-stack booking platform with real-time room availability, JWT auth, and seamless booking UX.",
    stack: ["React", "Strapi", "PostgreSQL", "Tailwind CSS"],
    image: projectHotel,
    github: "https://github.com/Gerges-GN",
    live: "#",
  },
  {
    title: "Elegant E-Commerce",
    description: "Performant product catalog with Zustand global state, cart management, and mobile-first responsive design.",
    stack: ["React", "Zustand", "Tailwind CSS"],
    image: projectEcommerce,
    github: "https://github.com/Gerges-GN",
  },
  {
    title: "YouTube Clone",
    description: "Core YouTube browsing experience with live API data, category navigation, and video detail pages.",
    stack: ["React", "Material UI", "RapidAPI"],
    image: projectYoutube,
    github: "https://github.com/Gerges-GN",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-marker" />
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Projects</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Selected <span className="text-accent-underline">work</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12 }}
              className="group border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 bg-background"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                  <div className="flex gap-2">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
