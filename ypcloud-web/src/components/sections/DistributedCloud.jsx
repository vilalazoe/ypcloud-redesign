import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './PillarSection.module.css'

const EASE = [0.16, 1, 0.3, 1]
const COLOR = 'var(--color-cloud)'
const SOFT  = 'var(--color-cloud-soft)'

// ─── Hub-and-spoke SVG ─────────────────────────────────────────────────────────
//  Centre = "Ultranet" (r=46)
//  6 product nodes (r=22) at r=128 from centre, every 60° starting at top
// ──────────────────────────────────────────────────────────────────────────────
const CX = 200, CY = 200, R_SPOKE = 128, R_NODE = 22, R_CENTER = 46

function pos(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: CX + R_SPOKE * Math.cos(rad), y: CY + R_SPOKE * Math.sin(rad) }
}

const NODES = [
  { label: 'MoteBus',  angle: -90  },
  { label: 'CoE',      angle: -30  },
  { label: 'AiCloud',  angle:  30  },
  { label: 'Qbix',     angle:  90  },
  { label: 'xStorage', angle: 150  },
  { label: 'MoteBus2', angle: 210, skip: true }, // 6th arm — decorative
]

const spokes = [
  { angle: -90 }, { angle: -30 }, { angle: 30 },
  { angle: 90 },  { angle: 150 }, { angle: 210 },
]

function CloudDiagram({ animate }) {
  const products = ['MoteBus', 'CoE', 'AiCloud', 'Qbix', 'xStorage']
  return (
    <svg viewBox="0 0 400 400" className={styles.diagram} fill="none" aria-hidden="true">
      {/* Outer decorative ring */}
      <circle cx={CX} cy={CY} r="175"
        stroke="var(--color-cloud)" strokeWidth="1" strokeDasharray="4 8" opacity="0.18" />

      {/* Spokes */}
      {spokes.map((s, i) => {
        const p = pos(s.angle)
        return (
          <line key={i}
            x1={CX} y1={CY} x2={p.x} y2={p.y}
            stroke="var(--color-cloud)" strokeWidth="1"
            strokeDasharray="4 5" opacity="0.25"
          />
        )
      })}

      {/* Platform ring */}
      <circle cx={CX} cy={CY} r={R_SPOKE}
        stroke="var(--color-cloud)" strokeWidth="1.5" opacity="0.2" />

      {/* Product nodes */}
      {products.map((name, i) => {
        const angle = -90 + i * 72  // pentagon layout for 5 products
        const { x, y } = (() => {
          const rad = (angle * Math.PI) / 180
          return { x: CX + R_SPOKE * Math.cos(rad), y: CY + R_SPOKE * Math.sin(rad) }
        })()
        return (
          <g key={name}>
            <circle cx={x} cy={y} r={R_NODE}
              fill="var(--color-cloud-soft)"
              stroke="var(--color-cloud)" strokeWidth="1.5" />
            <text x={x} y={y + 4} textAnchor="middle"
              fill="var(--color-cloud)" fontSize="7.5" fontWeight="700"
              fontFamily="var(--font-body)">
              {name}
            </text>
          </g>
        )
      })}

      {/* Centre: Ultranet hub */}
      <circle cx={CX} cy={CY} r={R_CENTER} fill="var(--color-cloud)" />
      <circle cx={CX} cy={CY - 10} r="18" fill="white" opacity="0.08" />
      <text x={CX} y={CY - 4} textAnchor="middle"
        fill="white" fontSize="10" fontWeight="800"
        fontFamily="var(--font-display)" letterSpacing="0.05em">
        Ultranet
      </text>
      <text x={CX} y={CY + 11} textAnchor="middle"
        fill="rgba(255,255,255,0.55)" fontSize="7.5"
        fontFamily="var(--font-body)" letterSpacing="0.06em">
        Cloud Hub
      </text>
    </svg>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function DistributedCloud() {
  const { t } = useLanguage()
  const s = t.cloud_section

  return (
    <section id="cloud" className={styles.section}
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
          <CloudDiagram />
        </motion.div>

      </div>
    </section>
  )
}
