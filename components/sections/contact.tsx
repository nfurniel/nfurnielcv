"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Loader } from "lucide-react"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simular envío
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground">¿Tienes un proyecto en mente? Me encantaría hablar contigo.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="glass p-8 rounded-lg space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Asunto</label>
            <input
              type="text"
              placeholder="Asunto del mensaje"
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Mensaje</label>
            <textarea
              placeholder="Tu mensaje..."
              rows={5}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-foreground rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader className="animate-spin" size={18} />
                Enviando...
              </span>
            ) : submitted ? (
              "¡Mensaje enviado! 🎉"
            ) : (
              "Enviar mensaje"
            )}
          </motion.button>
        </motion.form>

        {/* Direct contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">O contactame directamente en:</p>
          <motion.a
            href="mailto:tu@email.com"
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            <Mail size={20} />
            tu@email.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
