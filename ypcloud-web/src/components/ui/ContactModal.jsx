import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './ContactModal.module.css'

const EASE = [0.16, 1, 0.3, 1]

export default function ContactModal({ open, onClose }) {
  const { t } = useLanguage()

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
        >
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{    opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {/* Header */}
            <div className={styles.panelHead}>
              <div className={styles.headText}>
                <h3>{t.cta.button}</h3>
                <p>{t.cta.subheadline}</p>
              </div>
              <button
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Form — UI only */}
            <form
              className={styles.form}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="modal-name">Name</label>
                  <input id="modal-name" type="text" placeholder="Jane Smith" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="modal-company">Company</label>
                  <input id="modal-company" type="text" placeholder="Acme Corp" />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="modal-email">Email</label>
                <input id="modal-email" type="email" placeholder="jane@acme.com" />
              </div>

              <div className={styles.field}>
                <label htmlFor="modal-message">Message</label>
                <textarea
                  id="modal-message"
                  placeholder="Tell us what you're building…"
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <Send size={16} /> {t.cta.button}
              </button>

              <p className={styles.disclaimer}>
                UI only — no data is transmitted.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
