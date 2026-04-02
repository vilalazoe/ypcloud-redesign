import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './CtaSection.module.css'

const EASE = [0.16, 1, 0.3, 1]

export default function CtaSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>

        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <Sparkles size={13} /> Ultranet
        </motion.p>

        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
        >
          {t.cta.headline}
        </motion.h2>

        <motion.p
          className={styles.subheadline}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        >
          {t.cta.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
        >
          <a href="mailto:info@ypcloud.com" className={styles.btn}>
            {t.cta.button} <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
