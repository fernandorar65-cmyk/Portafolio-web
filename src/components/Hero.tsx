import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/animations'
import { profile } from '../data/portfolio'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <motion.div className="hero-bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </motion.div>

      <div className="container hero-layout">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <motion.p variants={fadeUp()} className="eyebrow">
            Portafolio · {profile.location}
          </motion.p>
          <motion.div variants={fadeUp()} className="hero-title-wrap">
            <h1>
              Hola, soy <span className="accent-name">{profile.name}</span>
            </h1>
          </motion.div>
          <motion.p variants={fadeUp()} className="role">
            {profile.role}
          </motion.p>
          <motion.p variants={fadeUp()} className="tagline">
            {profile.tagline}
          </motion.p>
          <motion.div variants={fadeUp()} className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contactar
            </a>
          </motion.div>
          <motion.ul variants={fadeUp()} className="hero-stats">
            {profile.stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  )
}
