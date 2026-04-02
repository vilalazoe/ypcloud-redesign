import { useState, useEffect } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './NavBar.module.css'

const NAV_SECTIONS = ['cloud', 'edge', 'jujue', 'clouder', 'about']

export default function NavBar() {
  const { toggle, lang } = useLanguage()
  const [scrolled, setScrolled]         = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { id: 'cloud',   label: 'Ultra' },
    { id: 'edge',    label: 'Any Edge' },
    { id: 'jujue',   label: 'Jujue' },
    { id: 'clouder', label: 'Clouder' },
    { id: 'about',   label: lang === 'zh' ? '關於我們' : 'About' },
  ]

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo}>
          YP<span>Cloud</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className={styles.links}>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? styles.active : ''}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.langToggle}
            onClick={toggle}
            aria-label="Toggle language"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <a href="#contact" className={styles.contactBtn}>
            {lang === 'zh' ? '聯絡我們 →' : 'Contact Us →'}
          </a>
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>
            {label}
          </a>
        ))}
        <button className={styles.langToggle} onClick={toggle}>
          {lang === 'en' ? '中文' : 'EN'}
        </button>
        <button
          onClick={() => setMobileOpen(false)}
          style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', marginTop: '1rem', fontSize: '0.875rem' }}
        >
          ✕ Close
        </button>
      </nav>
    </>
  )
}
