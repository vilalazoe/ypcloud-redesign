import { motion } from 'framer-motion'
import { BookOpen, Briefcase, Calendar, ArrowRight, Users } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './CloudAcademy.module.css'

const EASE = [0.16, 1, 0.3, 1]

const PILLAR_ICONS = [
  <BookOpen  size={22} />,
  <Briefcase size={22} />,
  <Calendar  size={22} />,
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const pillarVariant = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function CloudAcademy() {
  const { t } = useLanguage()

  return (
    <section id="academy" className={styles.section}>
      <div className={styles.inner}>

        {/* Header — split: headline left, subheadline right */}
        <div className={styles.header}>
          <motion.div
            className={styles.headerLeft}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <span className={styles.label}>{t.academy.label}</span>
            <h2 className={styles.headline}>{t.academy.headline}</h2>
          </motion.div>

          <motion.div
            className={styles.headerRight}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
          >
            <p className={styles.subheadline}>{t.academy.subheadline}</p>
          </motion.div>
        </div>

        {/* Pillar cards */}
        <motion.div
          className={styles.pillars}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.academy.pillars.map((pillar, i) => (
            <motion.div key={i} className={styles.pillar} variants={pillarVariant}>
              <div className={styles.pillarIcon}>{PILLAR_ICONS[i]}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
        >
          <a href="#contact" className={styles.btnPrimary}>
            {t.academy.cta_careers} <ArrowRight size={16} />
          </a>
          <a href="#contact" className={styles.btnOutline}>
            <Users size={16} /> {t.academy.cta_community}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
