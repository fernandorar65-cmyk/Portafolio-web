import type { Variants, ViewportOptions } from 'framer-motion'

export const viewport: ViewportOptions = {
  once: true,
  margin: '-80px',
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] },
  },
})
