import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../lib/animations'
import { profile } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function About() {
  return (
    <section id="sobre-mi" className="section">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeUp()}>
          <SectionHeader
            number="01 — Sobre mí"
            title="Conóceme un poco más"
            intro="Mi trayectoria y enfoque al desarrollar software."
          />
        </motion.div>
        <div className="about-content">
          {profile.about.map((paragraph, index) => (
            <motion.p key={paragraph.slice(0, 32)} variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { delay: index * 0.1 } } }}>
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
