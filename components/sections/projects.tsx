"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Proyecto E-commerce",
      desc: "Plataforma de e-commerce completa con carrito, pagos y administración.",
      tech: ["React", "Laravel", "MySQL", "Stripe"],
      image: "/e-commerce-platform.png",
      github: "#",
      live: "#",
    },
    {
      title: "App de Gestión de Tareas",
      desc: "Aplicación para gestionar tareas diarias con sincronización en tiempo real.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/task-management-app-interface.png",
      github: "#",
      live: "#",
    },
    {
      title: "Sistema de Reservas",
      desc: "Sistema completo de reservas para restaurantes con calendario interactivo.",
      tech: ["PHP", "Laravel", "React", "PostgreSQL"],
      image: "/booking-system.png",
      github: "#",
      live: "#",
    },
    {
      title: "Dashboard Analytics",
      desc: "Dashboard interactivo con gráficos en tiempo real y estadísticas.",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind"],
      image: "/analytics-dashboard.png",
      github: "#",
      live: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-lg overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold gradient-text mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <Github size={18} />
                    Código
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <ExternalLink size={18} />
                    Ver en vivo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
