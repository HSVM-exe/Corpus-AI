# CorpusAI — Multi-Agent OS Command Center & Governance Lab

[![Built with enter.pro](https://img.shields.io/badge/Build%20with-Enter.pro-FC5776?style=for-the-badge&labelColor=1F1F1F)](https://enter.pro)
[![React](https://img.shields.io/badge/React-19.0-blue?style=flat-square)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green?style=flat-square)](https://supabase.com/)
[![Vitest](https://img.shields.io/badge/Tests-Vitest%20Passed-success?style=flat-square)](https://vitest.dev/)

CorpusAI is a premium, multi-agent enterprise operating system command-center dashboard and governance lab. It provides a visual interface to monitor, audit, mathematically optimize, and constrain autonomous AI agents (Marketing, Finance, Engineering, and Orchestrator) executing corporate initiatives.

---

## 🎮 Hackathon Live Presenter Hotkeys

When presenting or testing CorpusAI, use these presenter hotkeys for instant feature demonstration:

| Hotkey | Action | Description |
| :--- | :--- | :--- |
| **`Shift + D`** | **▶ Demo Mode** | Runs an automated 60-second guided presentation story (`Kickoff ➔ Nash Bargaining ➔ Attack Blocked ➔ Boardroom Escalation ➔ PDF Export`). |
| **`Shift + E`** | **PDF Export** | Instantly generates a print-ready A4 Governance Compliance Audit PDF Report. |
| **`Shift + A`** | **Red-Team Test** | Triggers an adversarial prompt injection attack against the term-frequency vector classifier. |
| **`Shift + M`** | **Agent Memory** | Opens the Agent Vector Memory & RAG Explainability Inspector modal. |

---

## 🚀 Key Features

### 1. Core Command-Center
- **Command Deck**: Kickoff new campaigns and track active initiatives through an animated Orchestrator FSM timeline (Marketing $\rightarrow$ Finance $\rightarrow$ Sign-off $\rightarrow$ Ratified).
- **Interactive Lineage Graph**: A force-directed D3 network graph mapping communications, data flow, and lineage relationships between sub-agents.
- **Negotiation Hub**: Observe real-time agent-to-agent negotiations with collapsible "Agent Thoughts" cards highlighting underlying reasoning.
- **Activity Terminal**: Monospace activity feed tracking system execution logs.
- **Autonomy Gauge & Analytics**: Telemetry cards and Recharts analytics displaying resource spending, token usage, and system autonomy percentages.

### 2. Governance & Security Lab (`/lab`)
- **Policy Sandbox**: Adjust constitutional bounds (spending caps, strict mode, variance tolerance) in real-time.
- **Nash Bargaining Kernel**: Runs mathematical budget resolution between Marketing and Finance, plotting converging offers and tracking bargaining efficiency.
- **Adversarial Immune System**: Launches red-team attacks using term-frequency (TF) cosine similarity vectors to filter and block injections.
- **Boardroom Debate Escalation**: Triggers three-persona boardroom discussions (Optimist, Auditor, Safety Advocate) when expenditures exceed safety limits.
- **1-Click PDF Compliance Exporter**: Generates a downloadable compliance report summarizing active rules, verified decision gates, and security audit logs.
- **Enterprise RBAC Persona Switcher**: Switch between **CAIO**, **AI Security Lead**, **Finance Auditor**, and **Read-Only Observer** roles.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui, Recharts, D3.js, framer-motion.
- **Testing**: Vitest automated unit test suite (`npm test`).
- **Backend & Database**: Supabase PostgreSQL, Deno-based Edge Functions, and WebSockets.
- **Audio Synthesizer**: Pure Web Audio API synthetic sound engine (`soundEngine.ts`).

---

## ⚙️ Local Development & Testing

```bash
# Clone the repository
git clone https://github.com/Madihawahab/CorpusAI.git
cd CorpusAI

# Install dependencies
npm install --legacy-peer-deps

# Run automated Vitest unit test suite (13/13 tests)
npm test

# Run TypeScript compiler check
npx --package=typescript tsc -p tsconfig.app.json

# Run local Vite development server
npm run dev
```

---

## 📡 Live APIs & Deployment

- **Live Command-Center API**: `https://corpusai-2ftb.onrender.com`
- **Live Command-Center WebSockets**: `wss://corpusai-2ftb.onrender.com`
- **1-Click Deployment**: Pre-configured with [`vercel.json`](file:///C:/Users/Yash/.gemini/antigravity/scratch/CorpusAI/vercel.json) for Vercel/Netlify single-page app hosting.
