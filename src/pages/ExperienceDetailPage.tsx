import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { fadeUp, staggerContainer, staggerItem } from '../lib/animations'
import { getExperienceBySlug } from '../lib/experience'

export function ExperienceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const job = slug ? getExperienceBySlug(slug) : undefined

  if (!job) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="experience-detail">
      <motion.div
        className="container experience-detail__inner"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp()}>
          <Link to="/#experiencia" className="back-link">
            ← Volver a experiencia
          </Link>
        </motion.div>

        <motion.header variants={fadeUp()} className="experience-detail__header">
          <span className="section-label">Experiencia</span>
          <div className="experience-detail__title-row">
            <div>
              <h1>{job.role}</h1>
              <p className="experience-detail__company">{job.company}</p>
            </div>
            {job.current && <span className="timeline-badge">Actual</span>}
          </div>
          <p className="experience-detail__meta">
            {job.type}
            {' · '}
            {job.period}
            {job.duration ? ` · ${job.duration}` : ''}
            {' · '}
            {job.location}
          </p>
        </motion.header>

        <motion.section variants={fadeUp()} className="detail-block">
          <h2>Resumen</h2>
          <p>{job.overview}</p>
        </motion.section>

        {job.description && (
          <motion.section variants={fadeUp()} className="detail-block">
            <h2>En pocas palabras</h2>
            <p>{job.description}</p>
          </motion.section>
        )}

        <motion.section variants={fadeUp()} className="detail-block">
          <h2>Responsabilidades</h2>
          <motion.ul className="detail-list" variants={staggerContainer}>
            {job.responsibilities.map((item) => (
              <motion.li key={item} variants={staggerItem}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section variants={fadeUp()} className="detail-block">
          <h2>Logros destacados</h2>
          <motion.ul className="detail-list detail-list--highlights" variants={staggerContainer}>
            {job.highlights.map((item) => (
              <motion.li key={item} variants={staggerItem}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section variants={fadeUp()} className="detail-block">
          <h2>Tecnologías</h2>
          <ul className="timeline-skills">
            {job.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </motion.section>

        <motion.div variants={fadeUp()} className="experience-detail__actions">
          <Link to="/#experiencia" className="btn btn-secondary">
            Ver todas las experiencias
          </Link>
          <Link to="/#contacto" className="btn btn-primary">
            Contactar
          </Link>
        </motion.div>
      </motion.div>
    </article>
  )
}
