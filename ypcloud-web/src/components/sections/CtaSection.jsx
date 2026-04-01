import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import ContactModal from '../ui/ContactModal'
import styles from './CtaSection.module.css'

const EASE = [0.16, 1, 0.3, 1]

export default function CtaSection() {
  const { t } = useLanguage()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section id="contact" className={styles.section}>
        <div className={styles.inner}>

          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Sparkles size={14} /> Ultranet
          </motion.span>

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
            className={styles.btnWrap}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
          >
            <button
              className={styles.btn}
              onClick={() => setModalOpen(true)}
            >
              {t.cta.button} <ArrowRight size={16} />
            </button>
          </motion.div>

        </div>
      </section>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
