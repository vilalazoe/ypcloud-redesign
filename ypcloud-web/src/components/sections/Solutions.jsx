import { motion } from 'framer-motion'
import { Factory, BrainCircuit, Building2 } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './Solutions.module.css'

const EASE = [0.16, 1, 0.3, 1]

const ITEM_ICONS = [
  <Factory       size={28} />,
  <BrainCircuit  size={28} />,
  <Building2     size={28} />,
]

export default function Solutions() {
  const { t } = useLanguage()

  return (
    <section id="solutions" className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className={styles.label}>{t.solutions.label}</span>
          <h2 className={styles.headline}>{t.solutions.headline}</h2>
        </motion.div>

        {/* Use-case rows */}
        <div className={styles.items}>
          {t.solutions.items.map((item, i) => (
            <motion.div
              key={item.id}
              className={`${styles.item} ${i % 2 === 1 ? styles.reverse : ''}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.05 }}
            >
              {/* Text column */}
              <div className={styles.textCol}>
                <p className={styles.number}>0{i + 1}</p>
                <div className={styles.iconBox}>{ITEM_ICONS[i]}</div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>

              {/* Illustration column */}
              <div className={styles.illustCol}>
                <div className={styles.illustBox}>
                  <div className={styles.illustIcon}>{ITEM_ICONS[i]}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
