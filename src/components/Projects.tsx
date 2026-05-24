import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/animations'
import { projects } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function Projects() {
  return (
    <section id="proyectos" className="section">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeUp()}>
          <SectionHeader
            number="04 — Trabajo"
            title="Proyectos destacados"
            intro="Una selección de trabajos recientes. Puedes ver el código y las demos."
          />
        </motion.div>
        <motion.div className="project-grid" variants={staggerContainer}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <span className="project-card__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer">
                  Ver demo
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Código
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
