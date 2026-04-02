import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './TrustBar.module.css'

const EASE = [0.16, 1, 0.3, 1]

export default function TrustBar() {
  const { t } = useLanguage()

  const stats = [
    { num: t.trust.stat1_num, label: t.trust.stat1_label },
    { num: t.trust.stat2_num, label: t.trust.stat2_label },
    { num: t.trust.stat3_num, label: t.trust.stat3_label },
    { num: t.trust.stat4_num, label: t.trust.stat4_label },
  ]

  return (
    <section id="trust" className={styles.section}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className={styles.stat}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
          >
            <span className={styles.num}>{s.num}</span>
            <span className={styles.label}>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
