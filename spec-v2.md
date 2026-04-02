# YPCloud Website Redesign — Spec v2.0

## 1. Overview

### v2 與 v1 的差異
v1 是「自由發揮的現代科技風」，v2 是「貼近 YPCloud 品牌語言的精煉版」。
兩版內容架構相同，差異在視覺風格和產品深度。

### 核心設計決策
- **底色**：白底為主（對應原站品牌語言）
- **色系**：YPCloud 藍色系（深藍 + 青藍），四大支柱各有品牌色但降低飽和度
- **視覺語言**：延續原站的圓形 / 環形元素，但現代化處理
- **吉祥物**：不使用
- **互動模式**：支柱卡片 hover/click 反色，展開子產品內容

### Hero Headline
EN: "One Platform. Four Powers. Infinite Possibilities."
ZH: 「一個平台，四種力量，無限可能。」

---

## 2. Design System

### Color Tokens

```css
/* 全站基底 */
--color-bg:           #FFFFFF;
--color-bg-soft:      #F7F8FA;   /* 交替 section 背景 */
--color-border:       #E4E8EF;
--color-text:         #111827;
--color-text-muted:   #6B7280;

/* 品牌主色（來自 logo） */
--color-brand-deep:   #003087;   /* YP 深藍 */
--color-brand-main:   #00AEEF;   /* CLOUD 青藍 */

/* 四大支柱品牌色（降飽和度版） */
--color-cloud:        #4A8DB5;   /* Distributed Cloud — 藍 */
--color-edge:         #4AA58A;   /* Any Edge — 綠 */
--color-jujue:        #B57B6A;   /* Jujue — 橘紅（降調） */
--color-clouder:      #7B6AB5;   /* Clouder — 紫 */

/* 各支柱淺色背景（hover 前的卡片底色）*/
--color-cloud-soft:   #EEF4FA;
--color-edge-soft:    #EEF7F3;
--color-jujue-soft:   #FAF2EF;
--color-clouder-soft: #F2EFF9;
```

### Typography

與 v1 相同：
```
標題：Cabinet Grotesk（letter-spacing: 0.03em）
內文：DM Sans
中文：Noto Sans TC
```

### 圓形 / 環形視覺語言

原站大量使用圓形和環形，v2 保留但現代化：
- 支柱 icon 背景用圓形色塊（不用原站的 3D 環形）
- Section 背景可加入淡色弧形裝飾，增加層次感
- 避免原站過於卡通的 3D 質感

### 互動原則

**支柱卡片反色互動：**
```
預設：白底 / 淺色背景，支柱色邊框，深色文字
Hover：支柱色填滿背景，白色文字，輕微上浮陰影
Click（active）：同 hover，固定展開下方子產品內容
```

---

## 3. Information Architecture

### Navigation
```
[YPCloud Logo]   Ultra | Any Edge | Jujue | Clouder | About    [EN/中文]  [聯絡我們 →]
```

### Page Sections（scroll 順序）
```
01 Hero
02 Trust Bar
03 四大支柱總覽（互動卡片）
04 Distributed Cloud（Ultra）
05 Any Edge
06 Jujue
07 Clouder
08 生態圈 & 合作夥伴
09 CTA
10 Footer
```

---

## 4. Section Specs

### 01 Hero

**Layout：** 全版高度，白底，左右分欄
- 左：標題、副標、兩個 CTA
- 右：YP 3.0 三環示意圖（SVG 重繪，現代化版本，去掉卡通質感）

**內容：**
- Label：`YP 3.0 · Distributed Ultranet`
- Headline：`One Platform. Four Powers. Infinite Possibilities.`
- Subheadline：從 Edge 到 Cloud，從 App 到 AI，YPCloud 讓企業數位轉型不再從零開始。
- CTA Primary：`探索平台 →`
- CTA Ghost：`了解我們`

**背景：**
- 純白底，右上角有淡藍色弧形裝飾
- 不用粒子動畫，改為靜態但有設計感的 SVG 構圖

**Motion：**
- 文字 staggered fade-in
- 右側 SVG 三環在進場時旋轉 + fade in

---

### 02 Trust Bar

與 v1 相同，但改為白底深色文字：
- `2005 成立` / `雲端發明專利 20 年` / `台灣雲產業第一（經濟部 2015）` / `工業 4.0 就緒`

---

### 03 四大支柱總覽

**Layout：** 四張卡片並排（桌面），2×2（平板），單欄（手機）

**Headline：** "四種力量，一個生態"

**每張卡片包含：**
- 支柱 icon（圓形底色 + 簡單 SVG 圖示）
- 支柱名稱（大字）
- 一句定位語
- 支柱品牌色邊框

**互動行為：**
```
預設：淺色背景（--color-xxx-soft），支柱色上邊框 4px
Hover：支柱色填滿，白字，卡片上浮 4px
Click：固定 active 狀態，頁面平滑滾動到對應 section
```

**四張卡片內容：**

| 支柱 | Icon 概念 | 定位語 |
|---|---|---|
| Distributed Cloud | 雲朵 + 連線 | 企業級分散式雲端平台 |
| Any Edge | 六邊形網格 | 邊緣運算與 IoT 智能 |
| Jujue | 圓形社群 | 應用生態與社群商業 |
| Clouder | 積木 / 拼圖 | 低程式碼與數位人才 |

---

### 04 Distributed Cloud（Ultra）

**Layout：** 左文右圖，白底

**Headline：** "企業級分散式雲端，從核心出發"

**左側內容：**
- 定位說明（2–3 句）
- 子產品列表（帶圓點）：
  - MoteBus — 點對點通訊協議
  - Ultranet — 萬物雲網平台
  - CoE — 卓越營運中心
  - AiCloud — AI 模型市集
  - Qbix — 分散式運算
  - xStorage — 雲端儲存

**右側：**
- 圓形架構示意圖（SVG），中心是 Ultranet，外圍是子產品節點
- 顏色用 --color-cloud 藍色系

**Motion：** scroll-in，右側圓形圖旋轉進場

---

### 05 Any Edge

**Layout：** 右文左圖（與上一 section 交錯），背景用 --color-bg-soft 淺灰

**Headline：** "邊緣智能，從裝置開始"

**右側內容：**
- 定位說明（2–3 句）
- 子產品列表：
  - Mote Sphere — 邊緣運算節點
  - AnyPi — 輕量邊緣裝置
  - AnyPro — 工業級邊緣裝置
  - AnyAi — 邊緣 AI 推論

**左側：**
- ANY Edge 六邊形網格圖（SVG），綠色系
- 節點代表不同裝置類型

---

### 06 Jujue

**Layout：** 左文右圖，白底

**Headline：** "新型應用生態，從社群到商業"

**左側內容：**
- 定位說明
- 子產品列表：
  - Jujue — Web3 應用瀏覽器
  - Shoppu — 超級市集
  - SmartScreen — 智慧螢幕推播
  - jBoard — 智慧導覽
  - AiBot / FlowBot / Actor — 數位員工

**右側：**
- 圓形社群示意圖，橘紅色系

---

### 07 Clouder

**Layout：** 右文左圖，背景用 --color-bg-soft

**Headline：** "低程式碼平台，讓每個人都能建構雲端"

**右側內容：**
- 定位說明
- 子產品列表：
  - fBuilder — Flow 低程式碼
  - iBuilder — AI Builder
  - jBuilder — Story Board
  - pBuilder — Page Builder
  - Miki AIGC — 微媒體
  - Xapps — 雲耕創作

**左側：**
- 積木 / 拼圖組合示意圖，紫色系

---

### 08 生態圈

與 v1 相同，但改為白底：
- 合作夥伴類型：技術夥伴 / 系統整合商 / 學術合作
- CTA：`成為合作夥伴 →`

---

### 09 CTA

**背景：** --color-brand-deep 深藍，白字（這個 section 用深色，與整體白底形成收尾對比）

**Headline：** "準備好加入 Ultranet 生態了嗎？"
**CTA：** `立即聯絡 →`

---

### 10 Footer

與 v1 相同，改為白底深色文字版本。

---

## 5. 與 v1 的技術差異

### 新增的互動組件

```
/components/ui/PillarCard.jsx        ← 支柱卡片，含 hover/active 反色
/components/ui/PillarCard.module.css
```

PillarCard 邏輯：
```jsx
const [active, setActive] = useState(false)

<div
  className={`${styles.card} ${active ? styles.active : ''}`}
  onMouseEnter={() => setActive(true)}
  onMouseLeave={() => setActive(false)}
  onClick={() => scrollToSection(sectionId)}
  style={{ '--pillar-color': color }}
>
```

CSS：
```css
.card {
  background: var(--color-soft);
  border-top: 4px solid var(--pillar-color);
  transition: all 0.2s ease;
}
.card:hover, .card.active {
  background: var(--pillar-color);
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
```

### Locale 新增內容

v2 新增以下 key，補進 en.json / zh.json：

```json
"pillars": {
  "cloud":   { "name": "Distributed Cloud", "tagline": "Enterprise distributed cloud platform" },
  "edge":    { "name": "Any Edge",          "tagline": "Edge computing & IoT intelligence" },
  "jujue":   { "name": "Jujue",             "tagline": "App ecosystem & community commerce" },
  "clouder": { "name": "Clouder",           "tagline": "Low-code platform & digital talent" }
},
"cloud_section": {
  "headline": "Enterprise Cloud, Built from the Core",
  "desc": "MoteBus, Ultranet, and AiCloud form the backbone of YPCloud's distributed infrastructure.",
  "products": ["MoteBus", "Ultranet", "CoE", "AiCloud", "Qbix", "xStorage"]
}
```

---

## 6. 執行順序（給 Claude Code）

```
Phase 1：Design System 更新
  - globals.css 更新為白底色系和新 color tokens
  - 確認 Cabinet Grotesk + DM Sans 字型保留

Phase 2：Hero 重做
  - 左右分欄版型
  - 右側 SVG 三環圖（現代化）

Phase 3：Trust Bar 更新色系

Phase 4：四大支柱總覽（PillarCard 互動組件）

Phase 5：四個支柱 sections（依序）

Phase 6：生態圈、CTA、Footer 更新色系

Phase 7：響應式 + 語言切換測試
```

---

## Changelog
- v1.0 — 深色科技風，自由發揮版
- v2.0 — 白底品牌風，貼近 YPCloud 視覺語言
