"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-block px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm gradient-text font-semibold">Bienvenido a mi portfolio</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Nicolas Furnieles</span>
          <br />
          <span className="text-muted-foreground">Full Stack Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Apasionado por crear aplicaciones modernas y eficientes. Especializado en React, Laravel y tecnologías Full
          Stack. Estudiante de DAWE en la UTAD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Ver mis proyectos
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass font-semibold rounded-lg hover:bg-muted/20 transition-colors"
          >
            Contactame
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
            href="https://github.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 glass rounded-full text-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 glass rounded-full text-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:tu@email.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 glass rounded-full text-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-primary" size={24} />
        </motion.div>
      </div>
    </section>
  )
}
