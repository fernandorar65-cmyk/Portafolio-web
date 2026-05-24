import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import { profile, skills } from '../data/portfolio'

const highlightSkills = skills.slice(0, 6)

export function HeroVisual() {
  const codeLines = [
    `const dev = {`,
    `  name: "${profile.name}",`,
    `  role: "Full Stack",`,
    `  location: "${profile.location}",`,
    `  stack: [${highlightSkills.map((s) => `"${s}"`).join(', ')}],`,
    `  openToWork: true,`,
    `}`,
  ]

  return (
    <div className="hero-visual">
      <motion.div
        className="hero-terminal"
        variants={fadeUp(0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="terminal-header">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-title">portfolio.ts</span>
        </motion.div>
        <pre className="terminal-body">
          <code>
            {codeLines.map((line, i) => (
              <span key={line} className="terminal-line">
                <span className="terminal-line-num">{i + 1}</span>
                {line}
              </span>
            ))}
          </code>
        </pre>
      </motion.div>

      <motion.ul
        className="hero-stack-pills"
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="visible"
      >
        {highlightSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </motion.ul>
    </div>
  )
}
