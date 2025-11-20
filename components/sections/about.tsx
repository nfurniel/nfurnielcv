"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Sobre mí</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy Nicolas Furnieles, estudiante de segundo año de Desarrollo de Aplicaciones Web y Escritorio (DAWE) en
              la UTAD. Me apasiona el desarrollo web y estoy constantemente aprendiendo nuevas tecnologías para crear
              aplicaciones modernas y eficientes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Actualmente me especializo en desarrollo Full Stack, trabajando con tecnologías como React, PHP, Laravel y
              bases de datos como MySQL y MongoDB. Me encanta combinar diseño y funcionalidad para crear experiencias de
              usuario excepcionales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Durante mi formación en la UTAD, he desarrollado diversos proyectos académicos que me han permitido
              aplicar mis conocimientos en HTML, CSS, JavaScript moderno, TypeScript, y frameworks como Bootstrap y
              Tailwind CSS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {[
              {
                icon: Zap,
                title: "Desarrollo Ágil",
                desc: "Metodologías ágiles y buenas prácticas",
              },
              {
                icon: Award,
                title: "Calidad de Código",
                desc: "Código limpio, mantenible y escalable",
              },
              {
                icon: BookOpen,
                title: "Aprendizaje Constante",
                desc: "Siempre buscando nuevos desafíos",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <item.icon className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
