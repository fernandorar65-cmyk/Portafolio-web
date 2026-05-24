import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/animations'
import { profile } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function Contact() {
  return (
    <section id="contacto" className="section">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeUp()}>
          <SectionHeader
            number="05 — Contacto"
            title="Hablemos"
            intro="¿Tienes un proyecto en mente? Escríbeme y conversemos."
          />
        </motion.div>
        <motion.div variants={fadeUp()} className="contact-card">
          <motion.a
            href={`mailto:${profile.email}`}
            className="contact-email"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {profile.email}
          </motion.a>
          <motion.ul className="social-list" variants={staggerContainer}>
            {profile.social.map((link) => (
              <motion.li key={link.label} variants={staggerItem}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
