import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './PillarSection.module.css'

const EASE = [0.16, 1, 0.3, 1]
const COLOR = 'var(--color-jujue)'
const SOFT  = 'var(--color-jujue-soft)'

// ─── Community-rings SVG ──────────────────────────────────────────────────────
//  3 concentric rings; 5 product nodes scattered on outer ring
// ──────────────────────────────────────────────────────────────────────────────
const CX = 200, CY = 205

function polarXY(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

const OUTER_NODES = [
  { label: 'Jujue',       angle: -90  },
  { label: 'Shoppu',      angle: -18  },
  { label: 'SmartScreen', angle:  54  },
  { label: 'jBoard',      angle: 126  },
  { label: 'AiBot',       angle: 198  },
]

function JujueDiagram() {
  const R1 = 55, R2 = 100, R3 = 150

  return (
    <svg viewBox="0 0 400 410" className={styles.diagram} fill="none" aria-hidden="true">
      {/* Outer ring (dashed) */}
      <circle cx={CX} cy={CY} r={R3}
        stroke="var(--color-jujue)" strokeWidth="1" strokeDasharray="5 9" opacity="0.2" />

      {/* Middle ring */}
      <circle cx={CX} cy={CY} r={R2}
        stroke="var(--color-jujue)" strokeWidth="1.5" opacity="0.2" />

      {/* Inner ring */}
      <circle cx={CX} cy={CY} r={R1}
        stroke="var(--color-jujue)" strokeWidth="2" opacity="0.22" />

      {/* Spokes to outer nodes */}
      {OUTER_NODES.map(n => {
        const { x, y } = polarXY(CX, CY, R3, n.angle)
        return (
          <line key={n.label}
            x1={CX} y1={CY} x2={x} y2={y}
            stroke="var(--color-jujue)" strokeWidth="1"
            strokeDasharray="3 6" opacity="0.18" />
        )
      })}

      {/* Outer product nodes */}
      {OUTER_NODES.map(n => {
        const { x, y } = polarXY(CX, CY, R3, n.angle)
        const shortLabel = n.label.length > 7 ? n.label.slice(0, 7) : n.label
        return (
          <g key={n.label}>
            <circle cx={x} cy={y} r="20"
              fill="var(--color-jujue-soft)"
              stroke="var(--color-jujue)" strokeWidth="1.5" />
            <text x={x} y={y + 4} textAnchor="middle"
              fill="var(--color-jujue)" fontSize="7" fontWeight="700"
              fontFamily="var(--font-body)">
              {shortLabel}
            </text>
          </g>
        )
      })}

      {/* Centre circle */}
      <circle cx={CX} cy={CY} r="44" fill="var(--color-jujue)" />
      <circle cx={CX} cy={CY - 11} r="17" fill="white" opacity="0.09" />
      <text x={CX} y={CY - 3} textAnchor="middle"
        fill="white" fontSize="13" fontWeight="800"
        fontFamily="var(--font-display)" letterSpacing="0.04em">
        Jujue
      </text>
      <text x={CX} y={CY + 13} textAnchor="middle"
        fill="rgba(255,255,255,0.55)" fontSize="7.5"
        fontFamily="var(--font-body)" letterSpacing="0.1em">
        ECOSYSTEM
      </text>
    </svg>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Jujue() {
  const { t } = useLanguage()
  const s = t.jujue_section

  return (
    <section id="jujue" className={styles.section}
      style={{ background: 'var(--color-bg)', '--pillar-color': COLOR, '--pillar-soft': SOFT }}>
      <div className={styles.inner}>

        {/* Left: text */}
        <motion.div className={styles.textCol}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}>
          <span className={styles.label}>{s.label}</span>
          <h2 className={styles.headline}>{s.headline}</h2>
          <p className={styles.desc}>{s.desc}</p>
          <ul className={styles.productList}>
            {s.products.map(p => (
              <li key={p.name} className={styles.productItem}>
                <span className={styles.dot} />
                <span className={styles.productName}>{p.name}</span>
                <span className={styles.productDesc}>— {p.desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: SVG */}
        <motion.div className={styles.svgCol}
          initial={{ opacity: 0, scale: 0.88, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}>
          <JujueDiagram />
        </motion.div>

      </div>
    </section>
  )
}
