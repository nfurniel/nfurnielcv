"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Estudiante de DAWE",
      company: "UTAD",
      period: "2023 - Presente",
      desc: "Cursando segundo año de Desarrollo de Aplicaciones Web y Escritorio, especializándome en desarrollo Full Stack.",
      skills: ["React", "PHP", "Laravel", "JavaScript", "TypeScript"],
    },
    {
      title: "Desarrollador Freelance",
      company: "Independiente",
      period: "2022 - Presente",
      desc: "Desarrollo de proyectos web personalizados para pequeñas empresas y startups.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Experiencia</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`md:grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                <div />
                <div className="glass p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold gradient-text">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <Briefcase className="text-secondary flex-shrink-0" size={24} />
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar size={16} />
                    {exp.period}
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
