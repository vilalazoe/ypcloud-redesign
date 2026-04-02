import { motion } from 'framer-motion'
import { Cloud, Cpu, Users, Layers } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import PillarCard from '../ui/PillarCard'
import styles from './PillarOverview.module.css'

const EASE = [0.16, 1, 0.3, 1]

// Static pillar metadata — ids must match section ids in App.jsx
const PILLAR_META = [
  {
    id:        'cloud',
    sectionId: 'cloud',
    color:     'var(--color-cloud)',
    softColor: 'var(--color-cloud-soft)',
    icon:      <Cloud size={24} />,
  },
  {
    id:        'edge',
    sectionId: 'edge',
    color:     'var(--color-edge)',
    softColor: 'var(--color-edge-soft)',
    icon:      <Cpu size={24} />,
  },
  {
    id:        'jujue',
    sectionId: 'jujue',
    color:     'var(--color-jujue)',
    softColor: 'var(--color-jujue-soft)',
    icon:      <Users size={24} />,
  },
  {
    id:        'clouder',
    sectionId: 'clouder',
    color:     'var(--color-clouder)',
    softColor: 'var(--color-clouder-soft)',
    icon:      <Layers size={24} />,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function PillarOverview() {
  const { t } = useLanguage()

  return (
    <section id="pillars" className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className={styles.headline}>{t.pillars.headline}</h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PILLAR_META.map(meta => (
            <motion.div key={meta.id} variants={cardVariant} style={{ height: '100%' }}>
              <PillarCard
                name={t.pillars[meta.id].name}
                tagline={t.pillars[meta.id].tagline}
                icon={meta.icon}
                color={meta.color}
                softColor={meta.softColor}
                sectionId={meta.sectionId}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
