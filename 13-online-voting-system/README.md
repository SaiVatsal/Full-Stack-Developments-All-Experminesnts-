# CivicTrust Secure E-Voting Portal

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-000000?logo=vercel&logoColor=white&style=for-the-badge)](https://13-online-voting-system-8k927tnc4-sais-projects-d9375997.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white&style=for-the-badge)](https://github.com/SaiVatsal/13-online-voting-system)
[![Tests](https://img.shields.io/badge/Tests-100%25%20Passing-success?style=for-the-badge)](test.js)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#)

> **Project #13 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Vercel Serverless)
> **🚀 Live Production Deployment:** [https://13-online-voting-system-8k927tnc4-sais-projects-d9375997.vercel.app](https://13-online-voting-system-8k927tnc4-sais-projects-d9375997.vercel.app)
> **📦 GitHub Source Code:** [https://github.com/SaiVatsal/13-online-voting-system](https://github.com/SaiVatsal/13-online-voting-system)

---

## 🌐 Live Application & Demo
Experience the fully functional, live production deployment of **CivicTrust Secure E-Voting Portal** hosted on Vercel:
👉 **[Launch Live Application 🚀](https://13-online-voting-system-8k927tnc4-sais-projects-d9375997.vercel.app)**

---

## 📌 Project Overview & Description
Educational simulation of tamper-evident democratic voting with voter identity verification, encrypted ballot submissions, and live audit tallies.

This application is engineered as an independent, enterprise-grade full-stack solution featuring a high-performance Express REST API backend and a modern, reactive glassmorphic user interface. It is fully optimized for cloud deployment using Vercel Serverless Functions with persistent state synchronization.

- **Domain Category:** Governance & E-Voting
- **Primary Entity:** `Candidate / Ballot Item`
- **Secondary Entity / Feature:** `Cryptographic Ballot Audit Logs`
- **Verification Status:** 100% Automated Test Suite Passing
- **Live Vercel Link:** [https://13-online-voting-system-8k927tnc4-sais-projects-d9375997.vercel.app](https://13-online-voting-system-8k927tnc4-sais-projects-d9375997.vercel.app)

---

## 🚀 Key Features & Implementation

1. **Production-Grade RESTful API:**
   - `GET /api/candidate / ballot items` — Retrieve and search all candidate / ballot items with multi-parameter filtering.
   - `GET /api/candidate / ballot items/:id` — Fetch detailed individual candidate / ballot item records.
   - `POST /api/candidate / ballot items` — Create new records with automatic schema validation and timestamps.
   - `PUT /api/candidate / ballot items/:id` — Update existing entries with verification.
   - `DELETE /api/candidate / ballot items/:id` — Securely delete records from persistent storage.
   - `GET /api/stats` — Live aggregate KPI and metrics calculation endpoint.
   - `GET /api/health` — System diagnostics and author verification endpoint (`Done By SaiVatsal 2500040224`).

2. **Reactive, Senior-Developer Quality UI/UX:**
   - Modern typography, clean contrast hierarchy, and responsive Tailwind CSS layout.
   - Real-time debounced search bar and instant category filtering.
   - Dynamic modal windows for record creation and editing.
   - Toast notification alerts for user interactions and server responses.
   - Interactive KPI cards with real-time metric counters.
   - Prominent student identification badge: **Done By SaiVatsal (2500040224)**.

3. **Cloud & Serverless Architecture:**
   - Fully configured for Vercel Serverless deployment via `/api/index.js` and `vercel.json`.
   - Ephemeral `/tmp/db.json` automatic seeding ensuring reliable write operations in serverless execution environments.

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/SaiVatsal/13-online-voting-system.git
cd 13-online-voting-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```bash
npm start
```
The application will be running at `http://localhost:3000`.

### 4. Run Automated Test Suite
```bash
npm test
```

---

## 📂 Project Structure
```text
13-online-voting-system/
├── api/
│   └── index.js           # Vercel Serverless Function entry point
├── data/
│   └── db.json            # Persistent JSON database seed
├── public/
│   └── index.html         # Modern responsive single-page web UI
├── server.js              # Express.js REST API server & routing
├── test.js                # Automated verification and health check suite
├── vercel.json            # Vercel deployment and routing rules
├── package.json           # Node.js project manifest & dependencies
└── README.md              # Project documentation & live links
```

---

## 👤 Author & Certification
- **Developer:** SaiVatsal
- **College ID / Roll No:** 2500040224
- **Project Signature:** `Done By SaiVatsal 2500040224`
- **Live Vercel URL:** [https://13-online-voting-system-8k927tnc4-sais-projects-d9375997.vercel.app](https://13-online-voting-system-8k927tnc4-sais-projects-d9375997.vercel.app)
- **GitHub Repository:** [https://github.com/SaiVatsal/13-online-voting-system](https://github.com/SaiVatsal/13-online-voting-system)
