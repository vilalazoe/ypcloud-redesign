import { Globe, Globe2, ExternalLink } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './Footer.module.css'

export default function Footer() {
  const { t, toggle, lang } = useLanguage()

  const productItems = t.products.items

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand column */}
        <div className={styles.brand}>
          <a href="#hero" className={styles.logo}>
            YP<span>Cloud</span>
          </a>
          <p className={styles.tagline}>{t.footer.tagline}</p>
          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <Globe size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <Globe2 size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Products column */}
        <div className={styles.col}>
          <h4>{t.footer.products}</h4>
          <ul>
            {productItems.map((item) => (
              <li key={item.id}>
                <a href="#products">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div className={styles.col}>
          <h4>{t.footer.company}</h4>
          <ul>
            {t.footer.links_company.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className={`${styles.col} ${styles.contact}`}>
          <h4>{t.nav.contact}</h4>
          <p>{t.footer.address}</p>
          <p><a href={`mailto:${t.footer.email}`}>{t.footer.email}</a></p>
          <p><a href={`tel:${t.footer.phone}`}>{t.footer.phone}</a></p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>{t.footer.copyright}</p>
        <button
          onClick={toggle}
          style={{
            background: 'none',
            border: '1px solid var(--color-border)',
            borderRadius: '99px',
            color: 'var(--color-text-muted)',
            padding: '0.25rem 0.75rem',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
          }}
        >
          {lang === 'en' ? '中文' : 'EN'}
        </button>
      </div>
    </footer>
  )
}
