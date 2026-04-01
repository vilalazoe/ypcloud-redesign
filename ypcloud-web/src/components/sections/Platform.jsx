import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Network, Cpu, Server, Zap } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './Platform.module.css'

const EASE = [0.16, 1, 0.3, 1]

// ─── Architecture SVG Diagram ─────────────────────────────────────────────────
//
//  Layout (viewBox 0 0 480 420) — symmetric diamond, equal distances from hub:
//
//   [Device]              [Edge]
//       \                  /
//        \                /
//         [ Ultranet Hub ]    ← geometric centre (240, 200)
//        /                \
//       /                  \
//   [Cloud]              [AI]
//
//  All outer nodes 130 px from centre (92 px on each axis at 45°).
//  Lines: outer node → centre only, no cross-connections.

const CX = 240  // horizontal centre
const CY = 200  // vertical centre
const D  = 92   // axis offset — gives sqrt(D²+D²) ≈ 130 px diagonal

const NODES = [
  { id: 'device',   x: CX - D, y: CY - D, r: 26, label: 'Device',   sub: 'IoT / Edge HW' },
  { id: 'edge',     x: CX + D, y: CY - D, r: 26, label: 'Edge',     sub: 'Gateway'        },
  { id: 'ultranet', x: CX,     y: CY,     r: 40, label: 'Ultranet', sub: 'Hub'            },
  { id: 'cloud',    x: CX - D, y: CY + D, r: 26, label: 'Cloud',    sub: 'SPhere'         },
  { id: 'ai',       x: CX + D, y: CY + D, r: 26, label: 'AI',       sub: 'Inference'      },
]

// Only outer-node → Ultranet centre connections
const LINES = [
  { x1: CX - D, y1: CY - D, x2: CX, y2: CY }, // device  → ultranet
  { x1: CX + D, y1: CY - D, x2: CX, y2: CY }, // edge    → ultranet
  { x1: CX - D, y1: CY + D, x2: CX, y2: CY }, // cloud   → ultranet
  { x1: CX + D, y1: CY + D, x2: CX, y2: CY }, // ai      → ultranet
]

function ArchDiagram({ animate }) {
  return (
    <svg
      viewBox="0 0 480 420"
      className={`${styles.diagramSvg} ${animate ? styles.animate : ''}`}
      aria-label="Architecture diagram: Device and Edge nodes connect through Ultranet to Cloud and AI"
      role="img"
    >
      {/* Connection lines — outer nodes → Ultranet only */}
      {LINES.map((l, i) => (
        <line
          key={i}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          className={styles.line}
          style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
        />
      ))}

      {/* Animated flow dots travelling along each line */}
      {LINES.map((l, i) => (
        <line
          key={`flow-${i}`}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          className={styles.flowDot}
          style={{ animationDelay: `${i * 0.7}s` }}
        />
      ))}

      {/* Nodes */}
      {NODES.map(n => (
        <g key={n.id} className={styles.node}>
          {n.id === 'ultranet' && (
            <circle cx={n.x} cy={n.y} r={n.r + 8} className={styles.hubGlow} />
          )}
          <circle
            cx={n.x} cy={n.y} r={n.r}
            className={n.id === 'ultranet' ? styles.hubRing : styles.nodeRing}
          />
          <circle cx={n.x} cy={n.y} r={4} className={styles.nodeDot} />
          {/* Labels sit centred directly below the circle */}
          <text x={n.x} y={n.y + n.r + 16} className={styles.nodeLabel}>{n.label}</text>
          <text x={n.x} y={n.y + n.r + 30} className={styles.nodeSub}>{n.sub}</text>
        </g>
      ))}
    </svg>
  )
}

// ─── Pillar icons mapping ──────────────────────────────────────────────────────
const PILLAR_ICONS = {
  ultranet: <Network size={18} />,
  motebus:  <Zap      size={18} />,
  sphere:   <Server   size={18} />,
  edge:     <Cpu      size={18} />,
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Platform() {
  const { t } = useLanguage()
  const [active, setActive] = useState('ultranet')

  const diagramRef = useRef(null)
  const diagramInView = useInView(diagramRef, { once: true, margin: '-100px' })

  const pillars = Object.entries(t.platform.pillars).map(([key, val]) => ({
    key,
    ...val,
  }))

  return (
    <section id="platform" className={styles.section}>
      <div className={styles.inner}>
        {/* Left: text + pillar cards */}
        <div>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {t.platform.label}
          </motion.span>

          <motion.h2
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            {t.platform.headline}
          </motion.h2>

          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          >
            {t.platform.subheadline}
          </motion.p>

          <motion.div
            className={styles.pillars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09 } },
            }}
          >
            {pillars.map(({ key, title, desc }) => (
              <motion.div
                key={key}
                className={`${styles.pillar} ${active === key ? styles.active : ''}`}
                onClick={() => setActive(key)}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show:   { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                }}
              >
                <div className={styles.pillarIcon}>{PILLAR_ICONS[key]}</div>
                <div className={styles.pillarText}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: SVG architecture diagram */}
        <div className={styles.diagramWrap} ref={diagramRef}>
          <ArchDiagram animate={diagramInView} />
        </div>
      </div>
    </section>
  )
}
