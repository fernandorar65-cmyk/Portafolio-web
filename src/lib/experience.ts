import { experience, type Experience } from '../data/portfolio'

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experience.find((job) => job.slug === slug)
}

export function getExperiencePath(slug: string): string {
  return `/experiencia/${slug}`
}
