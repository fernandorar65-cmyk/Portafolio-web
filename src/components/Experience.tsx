import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer, staggerItem, viewport } from '../lib/animations'
import { getExperiencePath } from '../lib/experience'
import { experience } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeUp()}>
          <SectionHeader
            number="03 — Trayectoria"
            title="Experiencia laboral"
            intro="Mi recorrido profesional. Haz clic en cada puesto para ver el detalle."
          />
        </motion.div>

        <ol className="timeline">
          {experience.map((job) => (
            <motion.li
              key={job.slug}
              className={`timeline-item${job.current ? ' timeline-item--current' : ''}`}
              variants={staggerItem}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <Link
                to={getExperiencePath(job.slug)}
                className="timeline-card timeline-card--link"
              >
                <div className="timeline-card__header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <div className="timeline-card__actions">
                    {job.current && <span className="timeline-badge">Actual</span>}
                    <span className="timeline-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </div>

                <p className="timeline-meta">
                  {job.type}
                  {' · '}
                  {job.period}
                  {job.duration ? ` · ${job.duration}` : ''}
                  {' · '}
                  {job.location}
                </p>

                {job.description && (
                  <p className="timeline-description">{job.description}</p>
                )}

                <ul className="timeline-skills">
                  {job.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>

                <span className="timeline-cta">Ver detalle</span>
              </Link>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  )
}
