import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './PillarSection.module.css'

const EASE = [0.16, 1, 0.3, 1]
const COLOR = 'var(--color-edge)'
const SOFT  = 'var(--color-edge-soft)'

// ─── 3-tier hierarchy SVG ─────────────────────────────────────────────────────
//  Cloud (top) → Gateway (mid) → 4 Devices (bottom)
// ──────────────────────────────────────────────────────────────────────────────
const DEVICES = ['AnyPi', 'AnyPro', 'Mote Sphere', 'AnyAi']

function EdgeDiagram() {
  const W = 400, H = 380
  const cloudX = 200, cloudY = 60, cloudR = 38
  const gateX  = 200, gateY  = 170, gateR  = 32

  // 4 device nodes spread across bottom row
  const devY = 300, devR = 26
  const devXs = [60, 140, 260, 340]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={styles.diagram} fill="none" aria-hidden="true">
      {/* Background ring (decorative) */}
      <circle cx={200} cy={190} r="165"
        stroke="var(--color-edge)" strokeWidth="1" strokeDasharray="4 8" opacity="0.15" />

      {/* Cloud → Gateway line */}
      <line x1={cloudX} y1={cloudY + cloudR} x2={gateX} y2={gateY - gateR}
        stroke="var(--color-edge)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.4" />

      {/* Gateway → Device lines */}
      {devXs.map((dx, i) => (
        <line key={i} x1={gateX} y1={gateY + gateR} x2={dx} y2={devY - devR}
          stroke="var(--color-edge)" strokeWidth="1" strokeDasharray="3 5" opacity="0.3" />
      ))}

      {/* Device nodes */}
      {devXs.map((dx, i) => (
        <g key={i}>
          <circle cx={dx} cy={devY} r={devR}
            fill="var(--color-edge-soft)" stroke="var(--color-edge)" strokeWidth="1.5" />
          <text x={dx} y={devY + 4} textAnchor="middle"
            fill="var(--color-edge)" fontSize="7" fontWeight="700"
            fontFamily="var(--font-body)">
            {DEVICES[i].split(' ')[0]}
          </text>
        </g>
      ))}

      {/* Device labels below */}
      {devXs.map((dx, i) => (
        <text key={`lbl-${i}`} x={dx} y={devY + devR + 13} textAnchor="middle"
          fill="var(--color-edge)" fontSize="6.5" fontFamily="var(--font-body)" opacity="0.75">
          {DEVICES[i]}
        </text>
      ))}

      {/* Gateway node */}
      <circle cx={gateX} cy={gateY} r={gateR}
        fill="var(--color-edge-soft)" stroke="var(--color-edge)" strokeWidth="2" />
      <text x={gateX} y={gateY - 4} textAnchor="middle"
        fill="var(--color-edge)" fontSize="9" fontWeight="700"
        fontFamily="var(--font-body)">
        Edge
      </text>
      <text x={gateX} y={gateY + 9} textAnchor="middle"
        fill="var(--color-edge)" fontSize="7.5" fontFamily="var(--font-body)" opacity="0.75">
        Gateway
      </text>

      {/* Cloud node */}
      <circle cx={cloudX} cy={cloudY} r={cloudR} fill="var(--color-edge)" />
      <circle cx={cloudX} cy={cloudY - 10} r="16" fill="white" opacity="0.1" />
      <text x={cloudX} y={cloudY - 3} textAnchor="middle"
        fill="white" fontSize="10" fontWeight="800"
        fontFamily="var(--font-display)" letterSpacing="0.04em">
        Any
      </text>
      <text x={cloudX} y={cloudY + 11} textAnchor="middle"
        fill="rgba(255,255,255,0.7)" fontSize="8"
        fontFamily="var(--font-body)" letterSpacing="0.08em">
        EDGE
      </text>
    </svg>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function AnyEdge() {
  const { t } = useLanguage()
  const s = t.edge_section

  return (
    <section id="edge" className={styles.section}
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
          <EdgeDiagram />
        </motion.div>

      </div>
    </section>
  )
}
