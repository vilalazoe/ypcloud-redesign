import { motion } from 'framer-motion'
import { Network, Server, Workflow, Monitor, PhoneCall, Settings } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './ProductGrid.module.css'

const EASE = [0.16, 1, 0.3, 1]

const PRODUCT_ICONS = {
  ultranet: <Network   size={22} />,
  sphere:   <Server    size={22} />,
  flowbot:  <Workflow  size={22} />,
  screen:   <Monitor   size={22} />,
  ivr:      <PhoneCall size={22} />,
  otsi:     <Settings  size={22} />,
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function ProductGrid() {
  const { t } = useLanguage()

  return (
    <section id="products" className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className={styles.label}>{t.products.label}</span>
          <h2 className={styles.headline}>{t.products.headline}</h2>
        </motion.div>

        {/* Card grid */}
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.products.items.map((product) => (
            <motion.article
              key={product.id}
              className={styles.card}
              variants={cardVariant}
            >
              <div className={styles.cardIcon}>
                {PRODUCT_ICONS[product.id]}
              </div>
              <h3 className={styles.cardName}>{product.name}</h3>
              <p className={styles.cardDesc}>{product.desc}</p>
              <span className={styles.cardArrow} aria-hidden="true">→</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
