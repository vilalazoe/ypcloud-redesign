import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './Hero.module.css'

// ─── Particle canvas ───────────────────────────────────────────────────────────

const PARTICLE_COUNT = 72
const MAX_DIST       = 140  // px — max distance to draw a connection line
const SPEED          = 0.35 // base movement speed

function initParticles(w, h) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x:  Math.random() * w,
    y:  Math.random() * h,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
    r:  Math.random() * 1.5 + 1,
  }))
}

function useParticleCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animId
    let particles = []

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      particles = initParticles(canvas.width, canvas.height)
    }

    const draw = () => {
      const { width: w, height: h } = canvas
      ctx.clearRect(0, 0, w, h)

      // Move
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 194, 255, ${alpha})`
            ctx.lineWidth   = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 194, 255, 0.45)'
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [canvasRef])
}

// ─── Framer Motion variants ────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1]

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 32 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: EASE, delay },
})

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const { t } = useLanguage()
  const canvasRef = useRef(null)
  useParticleCanvas(canvasRef)

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={styles.content}>
        {/* Label badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className={styles.label}>YPCloud Platform</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 className={styles.headline} {...fadeUp(0.25)}>
          {t.hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p className={styles.subheadline} {...fadeUp(0.4)}>
          {t.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div className={styles.ctas} {...fadeUp(0.55)}>
          <a href="#platform" className={styles.btnPrimary}>
            {t.hero.cta_primary} →
          </a>
          <a href="#solutions" className={styles.btnGhost}>
            ▶ {t.hero.cta_secondary}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        aria-hidden="true"
      >
        <div className={styles.scrollDot} />
        <div className={styles.scrollDot} />
        <div className={styles.scrollDot} />
      </motion.div>
    </section>
  )
}
