# BiblioTech Library Management System

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-000000?logo=vercel&logoColor=white&style=for-the-badge)](https://47-online-library-management-ou9xi8ngh-sais-projects-d9375997.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white&style=for-the-badge)](https://github.com/SaiVatsal/47-online-library-management)
[![Tests](https://img.shields.io/badge/Tests-100%25%20Passing-success?style=for-the-badge)](test.js)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#)

> **Project #47 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Vercel Serverless)
> **🚀 Live Production Deployment:** [https://47-online-library-management-ou9xi8ngh-sais-projects-d9375997.vercel.app](https://47-online-library-management-ou9xi8ngh-sais-projects-d9375997.vercel.app)
> **📦 GitHub Source Code:** [https://github.com/SaiVatsal/47-online-library-management](https://github.com/SaiVatsal/47-online-library-management)

---

## 🌐 Live Application & Demo
Experience the fully functional, live production deployment of **BiblioTech Library Management System** hosted on Vercel:
👉 **[Launch Live Application 🚀](https://47-online-library-management-ou9xi8ngh-sais-projects-d9375997.vercel.app)**

---

## 📌 Project Overview & Description
Full-stack production-style application for BiblioTech Library Management System. Built with Express backend REST APIs, responsive modern UI, and data validation.

This application is engineered as an independent, enterprise-grade full-stack solution featuring a high-performance Express REST API backend and a modern, reactive glassmorphic user interface. It is fully optimized for cloud deployment using Vercel Serverless Functions with persistent state synchronization.

- **Domain Category:** Library & Archival
- **Primary Entity:** `Catalog Book Entry`
- **Secondary Entity / Feature:** `Member Borrow History`
- **Verification Status:** 100% Automated Test Suite Passing
- **Live Vercel Link:** [https://47-online-library-management-ou9xi8ngh-sais-projects-d9375997.vercel.app](https://47-online-library-management-ou9xi8ngh-sais-projects-d9375997.vercel.app)

---

## 🚀 Key Features & Implementation

1. **Production-Grade RESTful API:**
   - `GET /api/catalog book entrys` — Retrieve and search all catalog book entrys with multi-parameter filtering.
   - `GET /api/catalog book entrys/:id` — Fetch detailed individual catalog book entry records.
   - `POST /api/catalog book entrys` — Create new records with automatic schema validation and timestamps.
   - `PUT /api/catalog book entrys/:id` — Update existing entries with verification.
   - `DELETE /api/catalog book entrys/:id` — Securely delete records from persistent storage.
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
git clone https://github.com/SaiVatsal/47-online-library-management.git
cd 47-online-library-management
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
47-online-library-management/
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
- **Live Vercel URL:** [https://47-online-library-management-ou9xi8ngh-sais-projects-d9375997.vercel.app](https://47-online-library-management-ou9xi8ngh-sais-projects-d9375997.vercel.app)
- **GitHub Repository:** [https://github.com/SaiVatsal/47-online-library-management](https://github.com/SaiVatsal/47-online-library-management)
