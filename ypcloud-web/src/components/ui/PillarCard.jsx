import { ArrowRight } from 'lucide-react'
import styles from './PillarCard.module.css'

/**
 * PillarCard
 *
 * Props:
 *   name       — pillar display name
 *   tagline    — one-line positioning description
 *   icon       — React node (Lucide icon or SVG)
 *   color      — CSS value for the pillar accent colour  e.g. 'var(--color-cloud)'
 *   softColor  — CSS value for the pillar soft background e.g. 'var(--color-cloud-soft)'
 *   sectionId  — id of the target <section> to scroll to on click
 */
export default function PillarCard({ name, tagline, icon, color, softColor, sectionId }) {
  const scrollTo = () => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
      className={styles.card}
      style={{ '--pillar-color': color, '--pillar-soft': softColor }}
      onClick={scrollTo}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && scrollTo()}
      role="button"
      tabIndex={0}
      aria-label={`Go to ${name} section`}
    >
      <div className={styles.iconWrap} aria-hidden="true">
        {icon}
      </div>

      <h3 className={styles.name}>{name}</h3>

      <p className={styles.tagline}>{tagline}</p>

      <span className={styles.arrow} aria-hidden="true">
        <ArrowRight size={14} /> Explore
      </span>
    </div>
  )
}
