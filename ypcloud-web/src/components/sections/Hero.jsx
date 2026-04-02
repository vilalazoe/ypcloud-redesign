import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './Hero.module.css'

// ─── Constants ────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1]

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: EASE, delay },
})

// ─── Three-ring SVG diagram ───────────────────────────────────────────────────
//
//  viewBox 0 0 480 480, centre at (240, 240)
//
//  Rings:   R1=82 (inner)  R2=146 (platform)  R3=204 (ecosystem)
//  Nodes:   4 pillar nodes on R2 at 0°/90°/180°/270°
//  Outer:   8 accent dots on R3
//

const CX = 240, CY = 240
const R1 = 82, R2 = 146, R3 = 204

const PILLARS = [
  // angle 0 = right; we rotate so first node is at top
  { id: 'cloud',   angle: 270, label: 'Cloud',   color: 'var(--color-cloud)',   soft: 'var(--color-cloud-soft)'   },
  { id: 'edge',    angle: 0,   label: 'Edge',    color: 'var(--color-edge)',    soft: 'var(--color-edge-soft)'    },
  { id: 'jujue',   angle: 90,  label: 'Jujue',   color: 'var(--color-jujue)',   soft: 'var(--color-jujue-soft)'   },
  { id: 'clouder', angle: 180, label: 'Clouder', color: 'var(--color-clouder)', soft: 'var(--color-clouder-soft)' },
]

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

// 8 small accent dots evenly spaced on outer ring
const OUTER_DOTS = Array.from({ length: 8 }, (_, i) => {
  const { x, y } = polarToCartesian(CX, CY, R3, i * 45 + 22.5)
  return { x, y }
})

function ThreeRingsSvg() {
  return (
    <svg
      viewBox="0 0 480 480"
      className={styles.svgRings}
      aria-hidden="true"
      fill="none"
    >
      {/* ── Outer ecosystem ring (dashed, decorative) ── */}
      <circle
        cx={CX} cy={CY} r={R3}
        stroke="var(--color-brand-main)"
        strokeWidth="1"
        strokeDasharray="5 9"
        opacity="0.18"
      />

      {/* Outer accent dots */}
      {OUTER_DOTS.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="2.5"
          fill="var(--color-brand-main)" opacity="0.22" />
      ))}

      {/* ── Spokes from centre to each pillar node ── */}
      {PILLARS.map(p => {
        const node = polarToCartesian(CX, CY, R2, p.angle)
        return (
          <line key={`spoke-${p.id}`}
            x1={CX} y1={CY} x2={node.x} y2={node.y}
            stroke="var(--color-brand-main)"
            strokeWidth="1"
            strokeDasharray="3 6"
            opacity="0.2"
          />
        )
      })}

      {/* ── Middle platform ring ── */}
      <circle
        cx={CX} cy={CY} r={R2}
        stroke="var(--color-brand-main)"
        strokeWidth="1.5"
        opacity="0.28"
      />

      {/* ── Inner core ring ── */}
      <circle
        cx={CX} cy={CY} r={R1}
        stroke="var(--color-brand-deep)"
        strokeWidth="2"
        opacity="0.18"
      />

      {/* ── Centre: filled disc ── */}
      <circle cx={CX} cy={CY} r="52" fill="var(--color-brand-deep)" />
      {/* subtle inner highlight */}
      <circle cx={CX} cy={CY - 14} r="30"
        fill="white" opacity="0.05" />
      <text
        x={CX} y={CY - 7}
        textAnchor="middle"
        fill="white"
        fontSize="15"
        fontWeight="800"
        fontFamily="var(--font-display)"
        letterSpacing="0.04em"
      >
        YP
      </text>
      <text
        x={CX} y={CY + 11}
        textAnchor="middle"
        fill="rgba(255,255,255,0.88)"
        fontSize="9.5"
        fontWeight="700"
        fontFamily="var(--font-display)"
        letterSpacing="0.14em"
      >
        CLOUD
      </text>
      <text
        x={CX} y={CY + 27}
        textAnchor="middle"
        fill="rgba(255,255,255,0.4)"
        fontSize="8"
        fontFamily="var(--font-body)"
        letterSpacing="0.1em"
      >
        3.0
      </text>

      {/* ── Pillar nodes on middle ring ── */}
      {PILLARS.map(p => {
        const { x, y } = polarToCartesian(CX, CY, R2, p.angle)
        return (
          <g key={p.id}>
            {/* glow halo */}
            <circle cx={x} cy={y} r="26" fill={p.soft} opacity="0.6" />
            {/* node circle */}
            <circle cx={x} cy={y} r="21"
              fill={p.soft}
              stroke={p.color}
              strokeWidth="1.5"
            />
            {/* label inside node */}
            <text
              x={x} y={y + 4}
              textAnchor="middle"
              fill={p.color}
              fontSize="8"
              fontWeight="700"
              fontFamily="var(--font-body)"
              letterSpacing="0.02em"
            >
              {p.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className={styles.hero}>
      {/* Top-right arc decoration */}
      <div className={styles.arcDecor} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── Left: text ── */}
        <div className={styles.textCol}>
          <motion.div {...fadeUp(0.1)}>
            <span className={styles.label}>YP 3.0 · Distributed Ultranet</span>
          </motion.div>

          <motion.h1 className={styles.headline} {...fadeUp(0.25)}>
            {t.hero.headline}
          </motion.h1>

          <motion.p className={styles.subheadline} {...fadeUp(0.4)}>
            {t.hero.subheadline}
          </motion.p>

          <motion.div className={styles.ctas} {...fadeUp(0.55)}>
            <a href="#cloud" className={styles.btnPrimary}>
              {t.hero.cta_primary} <ArrowRight size={16} />
            </a>
            <a href="#pillars" className={styles.btnGhost}>
              {t.hero.cta_secondary}
            </a>
          </motion.div>
        </div>

        {/* ── Right: three-ring SVG ── */}
        <motion.div
          className={styles.svgCol}
          initial={{ opacity: 0, rotate: -14, scale: 0.88 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.3 }}
        >
          <ThreeRingsSvg />
        </motion.div>
      </div>
    </section>
  )
}
