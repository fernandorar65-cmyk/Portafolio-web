import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/animations'
import { skills } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function Skills() {
  return (
    <section id="habilidades" className="section">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeUp()}>
          <SectionHeader
            number="02 — Stack"
            title="Habilidades"
            intro="Tecnologías y herramientas con las que trabajo día a día."
          />
        </motion.div>
        <div className="skills-panel">
          <motion.ul className="skill-list" variants={staggerContainer}>
            {skills.map((skill) => (
              <motion.li key={skill} variants={staggerItem} whileHover={{ scale: 1.06 }}>
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  )
}
