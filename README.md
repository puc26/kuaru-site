# Kuaru Studios – 官方網站 (Internal Repository)

此倉庫為 **Kuaru Studios** 官方行銷網站之源碼，僅供公司內部開發與維護使用，請勿對外公開。專案採用 **Astro + Tailwind CSS** 架構，提供輕量快取的靜態輸出與流暢的互動動畫，適合品牌形象呈現與後續擴充。

## ✨ 線上環境

Production URL：<https://kuarustudios.com>  

![Screenshot of home page](public/favicon.svg)

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Available Scripts](#available-scripts)
6. [Customising Content](#customising-content)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

---

## Features

- 💫 **Astro** – lightning-fast island architecture for static sites and SSR
- 🎨 **Tailwind CSS** – utility-first styling with a fully custom design system
- ⚡️ **Scroll Animations** – Intersection Observer driven fade / translate reveals
- 🌓 **Responsive** – pixel-perfect on mobile, tablet and desktop
- 🔗 **Smooth Anchor Navigation** – custom scroll spy + active link highlighting
- 🗂 **Centralised Data** – update text & images from `src/utils/data.ts`

## Tech Stack

| Purpose                | Library / Tool |
| ---------------------- | -------------- |
| Static site framework  | [Astro](https://astro.build) |
| Styling                | [Tailwind CSS](https://tailwindcss.com) |
| Transpiler / Language  | TypeScript + TSX / Astro components |
| Package manager        | npm (v9+) |

Node **v18+** is recommended.

## Project Structure

```
kuaru-site/
├── public/                 # Static assets served verbatim
├── src/
│   ├── assets/             # Optimised images & logos
│   ├── components/         # Reusable UI atoms & molecules
│   ├── layouts/            # Page wrappers (navbar, footer…)
│   ├── pages/              # Route entry points (`index.astro`, etc.)
│   ├── utils/data.ts       # Central content definition (edit here!)
│   └── env.d.ts            # TypeScript helpers for Astro
├── tailwind.config.mjs     # Tailwind theme / plugin config
├── astro.config.mjs        # Astro project config
└── package.json            # Scripts & dependencies
```

## Getting Started

1. **Clone** the repository

   ```bash
   git clone https://github.com/yourname/kuaru-site.git
   cd kuaru-site
   ```

2. **Install** dependencies

   ```bash
   npm install
   # 或使用 pnpm / yarn
   ```

3. **Start** the dev server

   ```bash
   npm run dev
   # 打開 http://localhost:4321
   ```

## Available Scripts

| 命令            | 說明 |
| --------------- | ----------------------------------------------------------- |
| `npm run dev`   | 啟動熱重載開發伺服器 (預設 <http://localhost:4321>) |
| `npm run build` | 產生最小化靜態檔至 `dist/` |
| `npm run preview` | 建立完畢後，在本地預覽 `dist/` |
| `npm run astro ...` | 直接呼叫 Astro CLI 其他子命令 |

## Customising Content

所有段落文字、價值觀卡片、品牌資料等皆集中於：

```bash
src/utils/data.ts
```

只需編輯此檔即可同步更新介面。圖片放置在 `src/assets` 內，並以 ES Module 方式匯入。

## Deployment

Astro 產出的 `dist/` 夾可部署到任何靜態主機：GitHub Pages、Netlify、Vercel、Cloudflare Pages…

範例（GitHub Pages）：

```bash
npm run build
npx gh-pages -d dist
```

## 流程指引

1. **開發分支策略**：
   - `main`：對應 Production，僅由 CI 部署腳本寫入。
   - `develop`：日常整合分支，自動部署至 Staging。
   - 功能請以 `feature/xxx` 命名，完成後 PR 至 `develop`。

2. **CI/CD**：
   - GitHub Actions 會在 Push/PR 觸發 Lint、Build、Deploy 流程。
   - 部署金鑰與環境變數由 Infra Team 管理，無須自行設定。

3. **程式碼規範**：
   - 遵守 [EditorConfig](.editorconfig) 與 Tailwind Design Token 規範。
   - commit message 使用 Conventional Commits 格式。

4. **敏感資訊**：
   - 請勿將任何 API 金鑰、憑證寫入 repo 或 `.env`。
   - 如需測試憑證請向 DevOps 申請 GitHub Secrets。

## 授權

© Kuaru Studios 2024 — **Internal Use Only.** 未經授權禁止複製、發布或商業使用。
