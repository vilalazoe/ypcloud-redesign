import { motion } from 'framer-motion'
import { Handshake, Shield, GraduationCap, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './Ecosystem.module.css'

const EASE = [0.16, 1, 0.3, 1]

const ROLE_ICONS = [
  <Handshake    size={24} />,
  <Shield       size={24} />,
  <GraduationCap size={24} />,
]

const PARTNER_NAMES = ['Partner A', 'Partner B', 'Partner C', 'Partner D', 'Partner E']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function Ecosystem() {
  const { t } = useLanguage()

  return (
    <section id="ecosystem" className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className={styles.label}>{t.ecosystem.label}</span>
          <h2 className={styles.headline}>{t.ecosystem.headline}</h2>
          <p className={styles.subheadline}>{t.ecosystem.subheadline}</p>
        </motion.div>

        {/* Partner logo placeholders */}
        <motion.div
          className={styles.logos}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
        >
          {PARTNER_NAMES.map(name => (
            <div key={name} className={styles.logoSlot}>
              <span className={styles.logoText}>{name}</span>
            </div>
          ))}
        </motion.div>

        {/* Role cards */}
        <motion.div
          className={styles.roles}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.ecosystem.roles.map((role, i) => (
            <motion.div key={i} className={styles.role} variants={cardVariant}>
              <div className={styles.roleIcon}>{ROLE_ICONS[i]}</div>
              <h3 className={styles.roleTitle}>{role.title}</h3>
              <p className={styles.roleDesc}>{role.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        >
          <a href="#contact" className={styles.ctaBtn}>
            {t.ecosystem.cta} <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
