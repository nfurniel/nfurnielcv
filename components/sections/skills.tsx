"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["PHP", "Laravel", "Node.js", "APIs REST", "SQL"],
    },
    {
      title: "Bases de Datos",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Herramientas",
      skills: ["Git", "GitHub", "VS Code", "Docker", "Figma"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Habilidades</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-lg"
            >
              <h3 className="font-bold text-lg gradient-text mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
