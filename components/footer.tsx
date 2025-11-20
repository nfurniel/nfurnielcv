"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-xl font-bold gradient-text mb-2">Nicolas Furnieles</h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer apasionado por crear experiencias web excepcionales.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {["Inicio", "Sobre mí", "Proyectos", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-2 glass rounded-full text-foreground hover:text-primary transition-colors"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Nicolas Furnieles. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
