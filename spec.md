# YPCloud Website Redesign — Spec v1.0

## 1. Overview

### Project Context
This is a ground-up redesign of ypcloud.com, created as part of a vibe coding interview test for YPCloud's AI Model Writing position. The goal is to demonstrate product thinking, design rationale, and execution capability — not just visual polish.

### Core Narrative
YPCloud tells a three-layer story, in this order:

1. **Platform** — A reliable, patented cloud infrastructure (Ultranet + MoteBus)
2. **AI Enablement** — The layer that lets enterprises adopt AI without rebuilding from scratch
3. **Ecosystem** — A living community of partners, developers, and talent (雲耕學院)

Hero Headline (EN):
> "The Cloud Infrastructure for the AI-Native Era"

Hero Subheadline (EN):
> From edge devices to enterprise AI — one platform, endless connections.

Hero Headline (ZH):
> 「為 AI 時代而生的雲端基礎」

Hero Subheadline (ZH):
> 從邊緣裝置到企業 AI，一個平台，無限串連。

### Target Audiences
| Persona | Goal | Entry Point |
|---|---|---|
| Enterprise decision-maker (CTO / procurement) | Evaluate reliability & ROI | Use Cases section |
| Technical developer | Understand architecture & APIs | Platform section |
| Partner / investor | Assess ecosystem viability | Ecosystem section |
| Job seeker / talent | Explore culture & opportunity | 雲耕學院 section |

### Language Strategy
- Default: English
- Toggle: 中文 / EN switcher in top-right nav
- All copy written in both languages; i18n handled via JSON locale files
- No auto-detection; user-controlled

---

## 2. Information Architecture

### Navigation (Sticky Top Bar)
```
[YPCloud Logo]    Platform  |  Solutions  |  Ecosystem  |  About  |  雲耕學院    [EN/中文]  [Contact Us →]
```
- Sticky on scroll, background transitions from transparent → dark blur (backdrop-filter)
- Mobile: hamburger menu with full-screen overlay
- Active section highlighted via scroll-spy

### Page Sections (Scroll Order = Narrative Order)

```
01 Hero
02 Trust Bar (logos / stats)
03 Platform — What it is
04 Solutions — What it enables (AI use cases)
05 Product Grid — The full suite
06 Ecosystem — Partners + community
07 雲耕學院 — Talent & culture
08 Latest / News (optional, can be static placeholder)
09 CTA — Contact / Get Started
10 Footer
```

---

## 3. Section Specs

### 01 Hero
**Layout:** Full viewport height, dark background, centered content with animated canvas behind it

**Content:**
- Headline (large, bold)
- Subheadline (1–2 lines, muted)
- Two CTAs: `[Explore Platform →]` (primary) and `[Watch Demo]` (ghost/outline)
- Animated background: particle network / data-flow lines suggesting connected nodes — lightweight canvas or CSS only

**Motion:**
- Text fades in with staggered delay (headline → subheadline → CTAs)
- Background animation loops subtly, does not distract
- Scroll-down indicator (animated chevron or dot)

**Design Note:** This section sets the tone. Dark, spacious, confident. Not "startup fun", not "enterprise boring".

---

### 02 Trust Bar
**Layout:** Horizontal scrolling strip or static row

**Content:**
- 3–5 key stats: `Founded 2005`, `Cloud Patent Holder`, `Industry 4.0 Ready`, `Taiwan #1 Cloud Co. (2015 MOEA)`
- Partner / client logos (placeholder if no real assets available)

**Design Note:** Low height, subtle — just enough to build credibility before the technical content.

---

### 03 Platform Section
**Layout:** Split — left text, right interactive diagram or illustration

**Headline:** "Built on Ultranet. Proven at Scale."

**Content:**
- 3–4 core technology pillars in card or tab format:
  - **Ultranet** — Distributed cloud-native networking
  - **MoteBus** — Patented peer-to-peer communication protocol (xMsg / xRPC)
  - **SPhere** — Enterprise cloud in a box (runs on PC or Raspberry Pi)
  - **Edge Intelligence** — IoT + AI at the network edge

**Right side:** Animated architecture diagram showing how devices → edge → cloud → AI layer connect through Ultranet. SVG-based, simple, clean.

**Motion:** Diagram nodes animate in on scroll entry. Lines draw themselves (SVG stroke animation).

---

### 04 Solutions Section (AI Use Cases)
**Layout:** Alternating left/right blocks, or tabbed interface

**Headline:** "From IoT to AI — Without Starting Over"

**3 Use Cases:**
1. **Industry 4.0 Integration** — Connect factory equipment to cloud analytics
2. **AI Agent Orchestration** — Deploy Flow Bot for automated workflows
3. **Smart Spaces** — Smart Screen + IVR for intelligent environments

Each use case: icon, title, 2-sentence description, subtle background illustration

**Motion:** Each block slides in from alternating sides on scroll.

---

### 05 Product Grid
**Layout:** 3-column card grid (2 on mobile)

**Headline:** "The Full Stack, Your Way"

**Products:**
| Product | One-liner |
|---|---|
| Ultranet Platform | Distributed cloud-native networking layer |
| SPhere | Enterprise cloud software, runs anywhere |
| Flow Bot | No-code AI workflow automation |
| Smart Screen | Cross-domain screen broadcasting |
| IP IVR | Intelligent voice response system |
| OTSI | Cloud operations & maintenance service |

Each card: icon, name, one-liner, subtle hover effect (lift + glow)

---

### 06 Ecosystem Section
**Layout:** Dark section with map or network visualization background

**Headline:** "Join the Ultranet Ecosystem"

**Content:**
- Partner logos grid (placeholder)
- 3 ecosystem roles: `Technology Partners`, `System Integrators`, `Academic Partners`
- Brief description of consortium / co-creation model
- CTA: `[Become a Partner →]`

**Design Note:** This is where the story expands beyond product. Tone shifts from "what we built" to "what we can build together".

---

### 07 雲耕學院 (Cloud Academy)
**Layout:** Warm contrast section — slightly lighter tone than rest of page

**Headline (EN):** "Cultivating the Next Generation of Cloud Builders"
**Headline (ZH):** 「雲耕學院：培育台灣雲端人才」

**Content:**
- Mission statement (2–3 sentences)
- 3 pillars: `Training Programs`, `Internship Pipeline`, `Community Events`
- CTA: `[Explore Careers →]` + `[Join the Community →]`

**Design Note:** This section is specifically relevant to the job-seeker persona. It should feel human and forward-looking, not corporate.

---

### 08 CTA / Contact
**Layout:** Full-width, dark, centered — simple and punchy

**Headline:** "Ready to build on Ultranet?"
**Subtext:** "Talk to our team. We'll find the right fit for your stack."
**CTA:** `[Get in Touch →]` — opens contact form modal or links to contact page

---

### 09 Footer
**Columns:**
- Logo + tagline + social links (LinkedIn, GitHub, Facebook)
- Products quick links
- Company (About, Careers, News)
- Contact info (Taipei address, email, phone)
- Language toggle + copyright

---

## 4. Design System

### Color Tokens
```css
--color-bg:           #0A0E17;   /* near-black, deep navy */
--color-surface:      #111827;   /* card / section background */
--color-border:       #1E2A3A;   /* subtle borders */
--color-primary:      #00C2FF;   /* electric blue — main accent */
--color-primary-glow: #00C2FF33; /* glow effect */
--color-secondary:    #7B5EA7;   /* violet — AI / intelligence accent */
--color-text:         #E8EDF5;   /* primary text */
--color-text-muted:   #6B7A99;   /* secondary text, labels */
--color-success:      #00D97E;   /* positive indicators */
```

### Typography
```
Display / Hero:    "Syne" (Google Fonts) — geometric, bold, distinctive
Body / UI:         "DM Sans" — clean, readable, modern but not generic
Mono / Code:       "JetBrains Mono" — for tech specs, API references
Chinese fallback:  "Noto Sans TC" for 繁中
```

### Spacing Scale
Based on 8px base unit: `8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px`

### Border Radius
- Cards: `12px`
- Buttons: `8px`
- Badges / tags: `99px` (pill)

### Motion Principles
- **Scroll-triggered:** Sections animate in as they enter viewport (IntersectionObserver or GSAP ScrollTrigger)
- **Staggered reveals:** Children elements animate with 80–120ms delays between them
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — fast start, smooth settle (Expo Out feel)
- **Duration:** Entrances 400–600ms, micro-interactions 150–200ms
- **No autoplay video**, no heavy 3D — keep it fast
- **Respect prefers-reduced-motion**

### Shadows & Glow
```css
--shadow-card:    0 4px 24px rgba(0, 0, 0, 0.4);
--glow-primary:   0 0 32px rgba(0, 194, 255, 0.15);
--glow-hover:     0 0 48px rgba(0, 194, 255, 0.25);
```

---

## 5. Technical Architecture

### Stack Decision

| 項目 | 選擇 | 理由 |
|---|---|---|
| 框架 | Vite + React | 比 Next.js 學習成本低，無 SSR 複雜度，適合 demo 場景 |
| 語言 | JSX（非 TypeScript） | 有 React 基礎即可上手，不增加型別學習負擔 |
| 樣式 | CSS Modules + Tailwind | 各司其職，見下方規則 |
| 動畫 | Framer Motion | React 生態，API 直觀，支援 scroll-trigger |
| i18n | 自製 useLanguage hook | 簡單夠用，不需要第三方套件 |
| 圖示 | Lucide React | 輕量，風格一致 |
| 字型 | Google Fonts（@import） | Syne（標題）+ DM Sans（內文）+ Noto Sans TC（中文） |
| 部署 | Netlify / GitHub Pages | 免費，一鍵部署，可分享網址給面試官 |

### 樣式使用規則（CSS Modules vs Tailwind）

**用 CSS Modules 當：**
- 這是獨立的 UI 組件（`Card`、`Button`、`NavBar`、`Badge`）
- 有 hover、active 等多狀態樣式
- 有 `@keyframes` 動畫（例如 SVG 描線、粒子）
- 樣式會被多個地方 import，需要封裝避免污染

**用 Tailwind 當：**
- Section 級別的佈局（`flex`、`grid`、`gap`、`padding`）
- 一次性顏色或字體微調
- 響應式斷點（`md:`、`lg:`）
- 快速 prototype，不值得另開 `.module.css`

```jsx
// 範例：Card 組件
import styles from './Card.module.css'   // 組件本身的樣式

export function Card({ title, desc }) {
  return (
    // Tailwind 處理外部間距和佈局
    <div className={`${styles.card} p-6 rounded-xl`}>
      <h3 className={styles.title}>{title}</h3>
      <p className="text-sm mt-2">{desc}</p>   {/* 一次性調整用 Tailwind */}
    </div>
  )
}
```

### Component Architecture

`App.jsx` 是唯一的根組件，只負責組裝 sections，不含任何邏輯或樣式。

```jsx
// src/App.jsx — 組裝器，不含邏輯
import { LanguageProvider } from './hooks/useLanguage'
import NavBar      from './components/ui/NavBar'
import Hero        from './components/sections/Hero'
import TrustBar    from './components/sections/TrustBar'
import Platform    from './components/sections/Platform'
import Solutions   from './components/sections/Solutions'
import ProductGrid from './components/sections/ProductGrid'
import Ecosystem   from './components/sections/Ecosystem'
import CloudAcademy from './components/sections/CloudAcademy'
import CtaSection  from './components/sections/CtaSection'
import Footer      from './components/ui/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <NavBar />
      <main>
        <Hero />
        <TrustBar />
        <Platform />
        <Solutions />
        <ProductGrid />
        <Ecosystem />
        <CloudAcademy />
        <CtaSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
```

各 section 組件原則：
- 自己管自己的樣式
- 自己從 `useLanguage()` 拿翻譯文字
- 自己管自己的動畫狀態
- 不與其他 section 通訊，無共享狀態

### i18n 實作（自製 hook）

```jsx
// src/hooks/useLanguage.jsx
import { createContext, useContext, useState } from 'react'
import en from '../locales/en.json'
import zh from '../locales/zh.json'

const translations = { en, zh }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
```

各組件取用方式：
```jsx
// 任意 section 組件內
import { useLanguage } from '../../hooks/useLanguage'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section>
      <h1>{t.hero.headline}</h1>
      <p>{t.hero.subheadline}</p>
    </section>
  )
}
```

語言切換：
```jsx
// NavBar 內的切換按鈕
const { lang, setLang } = useLanguage()
<button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>
  {lang === 'en' ? '中文' : 'EN'}
</button>
```

### Locale 檔案結構

```json
// src/locales/en.json
{
  "hero": {
    "headline": "The Cloud Infrastructure for the AI-Native Era",
    "subheadline": "From edge devices to enterprise AI — one platform, endless connections.",
    "cta_primary": "Explore Platform",
    "cta_secondary": "Watch Demo"
  },
  "platform": {
    "headline": "Built on Ultranet. Proven at Scale.",
    "pillars": {
      "ultranet": { "title": "Ultranet",          "desc": "Distributed cloud-native networking" },
      "motebus":  { "title": "MoteBus",           "desc": "Patented P2P communication protocol" },
      "sphere":   { "title": "SPhere",            "desc": "Enterprise cloud in a box" },
      "edge":     { "title": "Edge Intelligence", "desc": "IoT + AI at the network edge" }
    }
  }
}
```

### Animation 架構

每個 section 自己管動畫，不需要全域 controller。

Scroll-triggered 進場（Framer Motion）：
```jsx
import { motion } from 'framer-motion'

export default function Platform() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* content */}
    </motion.section>
  )
}
```

Staggered 卡片群（ProductGrid 等）：
```jsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

<motion.div variants={container} whileInView="show" viewport={{ once: true }}>
  {cards.map(card => (
    <motion.div key={card.id} variants={item}>
      <Card {...card} />
    </motion.div>
  ))}
</motion.div>
```

SVG 描線動畫（Platform 架構圖）：
```css
/* Card.module.css */
.diagramLine {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawLine 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}
```

### NavBar 行為
```
初始：背景透明，文字白色
scroll > 80px：背景 rgba(10,14,23,0.85) + backdrop-filter: blur(16px)
active section：透過 IntersectionObserver 偵測，對應 nav link 高亮
語言切換：呼叫 setLang()，全站文字同步更新，無頁面跳轉
```

### 檔案結構
```
/src
  App.jsx                     ← 根組件，只負責組裝
  main.jsx                    ← Vite 進入點
  /components
    /sections
      Hero.jsx                ← 全版 Hero，canvas 粒子背景
      TrustBar.jsx            ← 數據 + logo 條
      Platform.jsx            ← 技術柱 + SVG 架構圖
      Solutions.jsx           ← 3 個 AI 使用情境
      ProductGrid.jsx         ← 6 產品卡片格線
      Ecosystem.jsx           ← 夥伴 + 生態角色
      CloudAcademy.jsx        ← 雲耕學院
      CtaSection.jsx          ← 最終 CTA
    /ui
      NavBar.jsx              ← sticky，scroll-aware，語言切換
      Footer.jsx              ← 4 欄 + social links
      Button.jsx              ← primary / ghost / outline 變體
      Card.jsx                ← 基礎卡片，hover glow
      LanguageToggle.jsx      ← EN / 中文 切換按鈕
      ContactModal.jsx        ← 聯絡表單 modal（UI only）
      AnimatedSection.jsx     ← 可重用的 scroll-trigger wrapper
  /hooks
    useLanguage.jsx           ← 語言 context + hook
    useScrollSpy.jsx          ← 偵測當前 section 供 NavBar 用
  /locales
    en.json
    zh.json
  /styles
    globals.css               ← CSS 變數（design tokens）
    tailwind.css              ← Tailwind base import
  /assets
    /icons                    ← 產品 SVG icons
    /logos                    ← 夥伴 logo（placeholder）
/public
  favicon.ico
/index.html
tailwind.config.js
vite.config.js
```

### 效能注意事項
- Hero 粒子 canvas：`requestAnimationFrame`，60fps 上限，unmount 時清除
- SVG 架構圖：inline SVG，CSS `stroke-dashoffset` 動畫，無外部依賴
- 圖片：明確設定 `width` / `height`，避免 layout shift
- Framer Motion：只 import 用到的 submodule，減少 bundle size

---

## 6. Out of Scope (v1)
- Blog / news CMS
- Real contact form backend (UI only)
- Authentication
- Partner portal
- Mobile app download page (covered in Case 2)

---

## Changelog
- v1.0 — Initial spec draft
