# Vanguard EventHub & Conference Suite

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-000000?logo=vercel&logoColor=white&style=for-the-badge)](https://18-event-management-system-6l8v8anyq-sais-projects-d9375997.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white&style=for-the-badge)](https://github.com/SaiVatsal/18-event-management-system)
[![Tests](https://img.shields.io/badge/Tests-100%25%20Passing-success?style=for-the-badge)](test.js)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#)

> **Project #18 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Vercel Serverless)
> **🚀 Live Production Deployment:** [https://18-event-management-system-6l8v8anyq-sais-projects-d9375997.vercel.app](https://18-event-management-system-6l8v8anyq-sais-projects-d9375997.vercel.app)
> **📦 GitHub Source Code:** [https://github.com/SaiVatsal/18-event-management-system](https://github.com/SaiVatsal/18-event-management-system)

---

## 🌐 Live Application & Demo
Experience the fully functional, live production deployment of **Vanguard EventHub & Conference Suite** hosted on Vercel:
👉 **[Launch Live Application 🚀](https://18-event-management-system-6l8v8anyq-sais-projects-d9375997.vercel.app)**

---

## 📌 Project Overview & Description
End-to-end conference and event management software supporting speaker agendas, ticket reservations, venue capacity management, and attendee badge registrations.

This application is engineered as an independent, enterprise-grade full-stack solution featuring a high-performance Express REST API backend and a modern, reactive glassmorphic user interface. It is fully optimized for cloud deployment using Vercel Serverless Functions with persistent state synchronization.

- **Domain Category:** Events & Hospitality
- **Primary Entity:** `Conferences & Event`
- **Secondary Entity / Feature:** `Attendee Registration & Badges`
- **Verification Status:** 100% Automated Test Suite Passing
- **Live Vercel Link:** [https://18-event-management-system-6l8v8anyq-sais-projects-d9375997.vercel.app](https://18-event-management-system-6l8v8anyq-sais-projects-d9375997.vercel.app)

---

## 🚀 Key Features & Implementation

1. **Production-Grade RESTful API:**
   - `GET /api/conferences & events` — Retrieve and search all conferences & events with multi-parameter filtering.
   - `GET /api/conferences & events/:id` — Fetch detailed individual conferences & event records.
   - `POST /api/conferences & events` — Create new records with automatic schema validation and timestamps.
   - `PUT /api/conferences & events/:id` — Update existing entries with verification.
   - `DELETE /api/conferences & events/:id` — Securely delete records from persistent storage.
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
git clone https://github.com/SaiVatsal/18-event-management-system.git
cd 18-event-management-system
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
18-event-management-system/
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
- **Live Vercel URL:** [https://18-event-management-system-6l8v8anyq-sais-projects-d9375997.vercel.app](https://18-event-management-system-6l8v8anyq-sais-projects-d9375997.vercel.app)
- **GitHub Repository:** [https://github.com/SaiVatsal/18-event-management-system](https://github.com/SaiVatsal/18-event-management-system)
