# YPCloud Website — Claude Code Requirements

> 把這個檔案和 spec.md 放在同一個資料夾，開始前先讓 Claude Code 讀完兩份文件。

---

## 0. 開始前請先讀取

- `spec.md` — 完整的設計規格、內容、IA、Design System
- `requirements.md` — 本檔案，執行指令與優先順序

---

## 1. 專案初始化

建立一個全新的 Vite + React 專案，結構如下：

```bash
npm create vite@latest ypcloud-web -- --template react
cd ypcloud-web
npm install
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

安裝完成後設定 Tailwind：

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
}
```

```css
/* src/styles/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

在 `src/main.jsx` import tailwind.css：
```js
import './styles/tailwind.css'
import './styles/globals.css'
```

---

## 2. Design Tokens（必須第一步建立）

建立 `src/styles/globals.css`，寫入以下 CSS 變數，**所有組件的顏色、字體都必須引用這些變數，不可以寫死顏色值**：

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&family=Noto+Sans+TC:wght@400;500;700&display=swap');

:root {
  /* Colors */
  --color-bg:           #0A0E17;
  --color-surface:      #111827;
  --color-border:       #1E2A3A;
  --color-primary:      #00C2FF;
  --color-primary-glow: rgba(0, 194, 255, 0.15);
  --color-secondary:    #7B5EA7;
  --color-text:         #E8EDF5;
  --color-text-muted:   #6B7A99;
  --color-success:      #00D97E;

  /* Typography */
  --font-display: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --font-zh:      'Noto Sans TC', sans-serif;

  /* Shadows */
  --shadow-card:  0 4px 24px rgba(0, 0, 0, 0.4);
  --glow-primary: 0 0 32px rgba(0, 194, 255, 0.15);
  --glow-hover:   0 0 48px rgba(0, 194, 255, 0.25);

  /* Easing */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}

/* 中文語系時切換字體 */
[lang="zh"] body {
  font-family: var(--font-zh);
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 3. Locale 檔案

建立 `src/locales/en.json` 和 `src/locales/zh.json`。

**en.json（完整版）：**
```json
{
  "nav": {
    "platform": "Platform",
    "solutions": "Solutions",
    "ecosystem": "Ecosystem",
    "about": "About",
    "academy": "Cloud Academy",
    "contact": "Contact Us"
  },
  "hero": {
    "headline": "The Cloud Infrastructure for the AI-Native Era",
    "subheadline": "From edge devices to enterprise AI — one platform, endless connections.",
    "cta_primary": "Explore Platform",
    "cta_secondary": "Watch Demo"
  },
  "trust": {
    "stat1_num": "2005",  "stat1_label": "Founded",
    "stat2_num": "20yr",  "stat2_label": "Cloud Patent",
    "stat3_num": "#1",    "stat3_label": "Taiwan Cloud Co. (MOEA 2015)",
    "stat4_num": "4.0",   "stat4_label": "Industry Ready"
  },
  "platform": {
    "label": "Platform",
    "headline": "Built on Ultranet. Proven at Scale.",
    "subheadline": "A patented, distributed cloud-native infrastructure connecting devices, edges, and enterprise AI.",
    "pillars": {
      "ultranet": { "title": "Ultranet",           "desc": "Distributed cloud-native networking layer connecting cloud, IoT, and edge." },
      "motebus":  { "title": "MoteBus",            "desc": "Patented peer-to-peer communication protocol — xMsg and xRPC." },
      "sphere":   { "title": "SPhere",             "desc": "Enterprise cloud in a box. Runs on PC or Raspberry Pi." },
      "edge":     { "title": "Edge Intelligence",  "desc": "Deploy AI processing at the network edge, not just the cloud." }
    }
  },
  "solutions": {
    "label": "Solutions",
    "headline": "From IoT to AI — Without Starting Over",
    "items": [
      {
        "id": "industry",
        "title": "Industry 4.0 Integration",
        "desc": "Connect factory equipment, sensors, and legacy systems into a unified cloud analytics layer — no rip-and-replace required."
      },
      {
        "id": "agents",
        "title": "AI Agent Orchestration",
        "desc": "Deploy Flow Bot to automate complex enterprise workflows. Trigger, route, and respond — all without writing backend code."
      },
      {
        "id": "spaces",
        "title": "Smart Space Deployment",
        "desc": "Combine Smart Screen broadcasting and IP IVR to build intelligent environments for retail, healthcare, and public spaces."
      }
    ]
  },
  "products": {
    "label": "Products",
    "headline": "The Full Stack, Your Way",
    "items": [
      { "id": "ultranet",  "name": "Ultranet Platform", "desc": "Distributed cloud-native networking layer" },
      { "id": "sphere",    "name": "SPhere",            "desc": "Enterprise cloud software, runs anywhere" },
      { "id": "flowbot",   "name": "Flow Bot",          "desc": "No-code AI workflow automation" },
      { "id": "screen",    "name": "Smart Screen",      "desc": "Cross-domain screen broadcasting" },
      { "id": "ivr",       "name": "IP IVR",            "desc": "Intelligent voice response system" },
      { "id": "otsi",      "name": "OTSI",              "desc": "Cloud operations & maintenance service" }
    ]
  },
  "ecosystem": {
    "label": "Ecosystem",
    "headline": "Join the Ultranet Ecosystem",
    "subheadline": "We build with partners, not just for them.",
    "roles": [
      { "title": "Technology Partners", "desc": "Co-develop integrations on the Ultranet Platform." },
      { "title": "System Integrators",  "desc": "Deploy YPCloud solutions for enterprise clients." },
      { "title": "Academic Partners",   "desc": "Research collaboration and talent pipeline." }
    ],
    "cta": "Become a Partner"
  },
  "academy": {
    "label": "Cloud Academy",
    "headline": "Cultivating the Next Generation of Cloud Builders",
    "subheadline": "雲耕學院 is YPCloud's social enterprise initiative — training talent, building community, and accelerating Taiwan's cloud transition.",
    "pillars": [
      { "title": "Training Programs", "desc": "Hands-on cloud and AI courses for students and professionals." },
      { "title": "Internship Pipeline", "desc": "Real projects, real impact. Direct path into the industry." },
      { "title": "Community Events",  "desc": "Meetups, hackathons, and open knowledge sharing." }
    ],
    "cta_careers": "Explore Careers",
    "cta_community": "Join the Community"
  },
  "cta": {
    "headline": "Ready to build on Ultranet?",
    "subheadline": "Talk to our team. We'll find the right fit for your stack.",
    "button": "Get in Touch"
  },
  "footer": {
    "tagline": "Distributed Ultranet — Connecting the AI-Native World",
    "products": "Products",
    "company": "Company",
    "links_company": ["About", "Careers", "News", "Contact"],
    "address": "6D-07, No.5, Sec.5, Xinyi Rd., Taipei City 110202, Taiwan",
    "email": "info@ypcloud.com",
    "phone": "+886 2 7728 3060",
    "copyright": "© 2025 YPCloud Inc. All rights reserved."
  }
}
```

**zh.json（對應翻譯，結構與 en.json 完全相同）：**
```json
{
  "nav": {
    "platform": "平台",
    "solutions": "解決方案",
    "ecosystem": "生態系",
    "about": "關於我們",
    "academy": "雲耕學院",
    "contact": "聯絡我們"
  },
  "hero": {
    "headline": "為 AI 時代而生的雲端基礎",
    "subheadline": "從邊緣裝置到企業 AI，一個平台，無限串連。",
    "cta_primary": "探索平台",
    "cta_secondary": "觀看 Demo"
  },
  "trust": {
    "stat1_num": "2005",  "stat1_label": "成立年份",
    "stat2_num": "20年",  "stat2_label": "雲端發明專利",
    "stat3_num": "第一",  "stat3_label": "台灣雲產業排名（經濟部 2015）",
    "stat4_num": "4.0",   "stat4_label": "工業整合就緒"
  },
  "platform": {
    "label": "平台",
    "headline": "以 Ultranet 為基，大規模驗證。",
    "subheadline": "專利分散式雲原生基礎架構，串連裝置、邊緣與企業 AI。",
    "pillars": {
      "ultranet": { "title": "Ultranet",         "desc": "分散式雲原生網路層，串連雲端、IoT 與邊緣。" },
      "motebus":  { "title": "MoteBus",          "desc": "專利點對點通訊協議，支援 xMsg 與 xRPC。" },
      "sphere":   { "title": "SPhere",           "desc": "企業級雲端軟體，可在 PC 或樹莓派上運行。" },
      "edge":     { "title": "邊緣智能",          "desc": "在網路邊緣部署 AI 運算，不再依賴中央雲端。" }
    }
  },
  "solutions": {
    "label": "解決方案",
    "headline": "從 IoT 到 AI，不需要重來",
    "items": [
      {
        "id": "industry",
        "title": "工業 4.0 串接整合",
        "desc": "將工廠設備、感測器與舊有系統整合進統一的雲端分析層，無需全面汰換。"
      },
      {
        "id": "agents",
        "title": "AI Agent 工作流程",
        "desc": "部署 Flow Bot 自動化複雜企業工作流程，無需撰寫後端程式碼。"
      },
      {
        "id": "spaces",
        "title": "智慧空間部署",
        "desc": "結合 Smart Screen 推播與 IP IVR，為零售、醫療與公共場域打造智慧環境。"
      }
    ]
  },
  "products": {
    "label": "產品",
    "headline": "完整產品線，自由組合",
    "items": [
      { "id": "ultranet",  "name": "Ultranet Platform", "desc": "分散式雲原生網路層" },
      { "id": "sphere",    "name": "SPhere",            "desc": "企業雲軟體，隨處運行" },
      { "id": "flowbot",   "name": "Flow Bot",          "desc": "無程式碼 AI 工作流程自動化" },
      { "id": "screen",    "name": "Smart Screen",      "desc": "跨網域螢幕推播服務" },
      { "id": "ivr",       "name": "IP IVR",            "desc": "智慧語音流程系統" },
      { "id": "otsi",      "name": "OTSI",              "desc": "雲端維運系統服務" }
    ]
  },
  "ecosystem": {
    "label": "生態系",
    "headline": "加入 Ultranet 生態圈",
    "subheadline": "我們與夥伴共建，而不只是為客戶服務。",
    "roles": [
      { "title": "技術夥伴",  "desc": "在 Ultranet 平台上共同開發整合方案。" },
      { "title": "系統整合商", "desc": "為企業客戶部署 YPCloud 解決方案。" },
      { "title": "學術合作",  "desc": "研究協作與人才培育管道。" }
    ],
    "cta": "成為合作夥伴"
  },
  "academy": {
    "label": "雲耕學院",
    "headline": "培育下一代雲端建造者",
    "subheadline": "雲耕學院是 YPCloud 的社會企業計畫，致力於培訓人才、建立社群，加速台灣產業雲端化。",
    "pillars": [
      { "title": "培訓課程",  "desc": "針對學生與專業人士的雲端與 AI 實作課程。" },
      { "title": "實習管道",  "desc": "真實專案、真實影響，直通產業的路徑。" },
      { "title": "社群活動",  "desc": "Meetup、黑客松與開放知識分享。" }
    ],
    "cta_careers": "探索職缺",
    "cta_community": "加入社群"
  },
  "cta": {
    "headline": "準備好在 Ultranet 上建構了嗎？",
    "subheadline": "與我們的團隊對話，找到最適合你的方案。",
    "button": "立即聯絡"
  },
  "footer": {
    "tagline": "分散式 Ultranet — 串連 AI 原生世界",
    "products": "產品",
    "company": "公司",
    "links_company": ["關於我們", "徵才", "最新消息", "聯絡我們"],
    "address": "台北市信義區信義路五段五號 6D-07",
    "email": "info@ypcloud.com",
    "phone": "+886 2 7728 3060",
    "copyright": "© 2025 乒乓話網股份有限公司 版權所有"
  }
}
```

---

## 4. useLanguage Hook

建立 `src/hooks/useLanguage.jsx`：

```jsx
import { createContext, useContext, useState } from 'react'
import en from '../locales/en.json'
import zh from '../locales/zh.json'

const translations = { en, zh }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const toggle = () => setLang(prev => prev === 'en' ? 'zh' : 'en')
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
```

---

## 5. App.jsx 根組件

```jsx
import { LanguageProvider } from './hooks/useLanguage'
import NavBar       from './components/ui/NavBar'
import Hero         from './components/sections/Hero'
import TrustBar     from './components/sections/TrustBar'
import Platform     from './components/sections/Platform'
import Solutions    from './components/sections/Solutions'
import ProductGrid  from './components/sections/ProductGrid'
import Ecosystem    from './components/sections/Ecosystem'
import CloudAcademy from './components/sections/CloudAcademy'
import CtaSection   from './components/sections/CtaSection'
import Footer       from './components/ui/Footer'

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

---

## 6. 執行優先順序

請依照以下順序實作，每完成一個階段確認畫面後再繼續：

### Phase 1 — 骨架（先跑起來）
- [ ] 專案初始化，Tailwind + Framer Motion 安裝完成
- [ ] `globals.css` design tokens 建立
- [ ] `useLanguage` hook 完成
- [ ] `App.jsx` 組裝完成（sections 可以是空白 placeholder）
- [ ] `NavBar` 完成（logo、links、語言切換、scroll-aware 背景）
- [ ] `Footer` 完成

### Phase 2 — Hero（最重要的第一印象）
- [ ] `Hero` section 完成，含粒子/連線背景動畫
- [ ] 標題、副標、CTA 按鈕
- [ ] 進場動畫（staggered fade-in）

### Phase 3 — 核心內容 sections
- [ ] `TrustBar`
- [ ] `Platform`（含 SVG 架構圖描線動畫）
- [ ] `Solutions`
- [ ] `ProductGrid`

### Phase 4 — 生態與收尾
- [ ] `Ecosystem`
- [ ] `CloudAcademy`
- [ ] `CtaSection`（含 ContactModal UI）

### Phase 5 — 打磨
- [ ] 響應式（mobile breakpoints）
- [ ] 語言切換全站測試
- [ ] 動畫效能確認（reduced-motion 支援）
- [ ] 部署到 Netlify / GitHub Pages

---

## 7. 設計規則（不可違反）

1. **顏色一律用 CSS 變數**，不可寫死 hex 值在組件裡
2. **重複 UI 組件用 CSS Modules**，一次性佈局用 Tailwind
3. **每個 section 自己管自己的動畫**，不設全域動畫 controller
4. **文字一律從 `useLanguage()` 的 `t` 物件取值**，不可寫死任何中英文字串在組件裡
5. **語義化 HTML**：`<header>`、`<main>`、`<section>`、`<footer>`、`<h1>`–`<h3>`，不可全用 `<div>`
6. **section 之間不互相通訊**，無需 props 傳遞跨組件狀態

---

## 8. 給 Claude Code 的提示範本

每次對 Claude Code 下指令時，建議格式：

```
請根據 spec.md 和 requirements.md 實作 [組件名稱]。

要求：
- 使用 CSS Modules 處理組件樣式，Tailwind 處理佈局
- 文字從 useLanguage() 的 t 物件取值
- 動畫使用 Framer Motion whileInView，viewport once: true
- 嚴格遵守 spec.md Section 4 的 Design System

先完成基本結構和樣式，動畫最後加。
```
