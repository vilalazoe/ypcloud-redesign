import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './PillarSection.module.css'

const EASE = [0.16, 1, 0.3, 1]
const COLOR = 'var(--color-clouder)'
const SOFT  = 'var(--color-clouder-soft)'

// ─── Hub-and-spoke SVG ────────────────────────────────────────────────────────
//  Centre = "Clouder" (r=46)
//  6 builder nodes (r=22) at r=125 from centre, every 60° starting at top
// ──────────────────────────────────────────────────────────────────────────────
const CCX = 200, CCY = 200, CR = 125, CR_NODE = 22, CR_CTR = 46

const BUILDER_NODES = [
  { label: 'fBuilder',  angle: -90  },
  { label: 'iBuilder',  angle: -30  },
  { label: 'jBuilder',  angle:  30  },
  { label: 'pBuilder',  angle:  90  },
  { label: 'Miki AIGC', angle: 150  },
  { label: 'Xapps',     angle: 210  },
]

function cPos(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: CCX + CR * Math.cos(rad), y: CCY + CR * Math.sin(rad) }
}

function ClouderDiagram() {
  return (
    <svg viewBox="0 0 400 400" className={styles.diagram} fill="none" aria-hidden="true">
      {/* Outer decorative ring */}
      <circle cx={CCX} cy={CCY} r="175"
        stroke="var(--color-clouder)" strokeWidth="1" strokeDasharray="4 8" opacity="0.18" />

      {/* Platform ring */}
      <circle cx={CCX} cy={CCY} r={CR}
        stroke="var(--color-clouder)" strokeWidth="1.5" opacity="0.2" />

      {/* Spokes */}
      {BUILDER_NODES.map(n => {
        const { x, y } = cPos(n.angle)
        return (
          <line key={n.label}
            x1={CCX} y1={CCY} x2={x} y2={y}
            stroke="var(--color-clouder)" strokeWidth="1"
            strokeDasharray="4 5" opacity="0.25" />
        )
      })}

      {/* Builder nodes */}
      {BUILDER_NODES.map(n => {
        const { x, y } = cPos(n.angle)
        const short = n.label.length > 8 ? n.label.slice(0, 8) : n.label
        return (
          <g key={n.label}>
            <circle cx={x} cy={y} r={CR_NODE}
              fill="var(--color-clouder-soft)"
              stroke="var(--color-clouder)" strokeWidth="1.5" />
            <text x={x} y={y + 4} textAnchor="middle"
              fill="var(--color-clouder)" fontSize="7" fontWeight="700"
              fontFamily="var(--font-body)">
              {short}
            </text>
          </g>
        )
      })}

      {/* Centre: Clouder hub */}
      <circle cx={CCX} cy={CCY} r={CR_CTR} fill="var(--color-clouder)" />
      <circle cx={CCX} cy={CCY - 11} r="18" fill="white" opacity="0.08" />
      <text x={CCX} y={CCY - 4} textAnchor="middle"
        fill="white" fontSize="10" fontWeight="800"
        fontFamily="var(--font-display)" letterSpacing="0.05em">
        Clouder
      </text>
      <text x={CCX} y={CCY + 11} textAnchor="middle"
        fill="rgba(255,255,255,0.55)" fontSize="7.5"
        fontFamily="var(--font-body)" letterSpacing="0.06em">
        Low Code
      </text>
    </svg>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Clouder() {
  const { t } = useLanguage()
  const s = t.clouder_section

  return (
    <section id="clouder" className={styles.section}
      style={{ background: 'var(--color-bg-soft)', '--pillar-color': COLOR, '--pillar-soft': SOFT }}>
      <div className={`${styles.inner} ${styles.reverse}`}>

        {/* Right: text (order:2 via .reverse) */}
        <motion.div className={styles.textCol}
          initial={{ opacity: 0, x: 32 }}
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

        {/* Left: SVG (order:1 via .reverse) */}
        <motion.div className={styles.svgCol}
          initial={{ opacity: 0, scale: 0.88, rotate: 8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}>
          <ClouderDiagram />
        </motion.div>

      </div>
    </section>
  )
}
