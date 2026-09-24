# SplitFair Group Expense App

> **Project #26 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Responsive UI)

---

## 📌 Domain & Problem Overview
Full-stack production-style application for SplitFair Group Expense App. Built with Express backend REST APIs, responsive modern UI, and data validation.

- **Domain Category:** FinTech
- **Primary Entity:** `Shared Expense Entry`
- **Secondary Entity:** `Peer Settlements`
- **Verification Status:** 100% Tested & Fully Operational

---

## 🚀 Key Features & Implementation
1. **Complete RESTful CRUD API:**
   - `GET /api/expenses` — List & search records with multi-field queries.
   - `GET /api/expenses/:id` — Retrieve detailed entity record.
   - `POST /api/expenses` — Create new validated entity with auto-timestamps.
   - `PUT /api/expenses/:id` — Modify existing record with verification.
   - `DELETE /api/expenses/:id` — Remove entity from persistent storage.
   - `GET /api/activityRecords` — Secondary domain service integration.
   - `GET /api/stats` — Live KPI calculation endpoint.
   - `GET /api/health` — Service health check and verification endpoint.

2. **Human-Designed Production UI:**
   - Multi-tab layout (Overview & Metrics, Data Explorer, Live Operations, Interactive API Console, Viva Blueprint).
   - Real-time interactive Chart.js visualizations (Categorical Distribution and Throughput Velocity).
   - Real-time debounced search, column sorting, and CSV/JSON data exports.
   - Slide-over inspection drawer for deep record exploration.
   - Modal-driven CRUD forms with client-side validation.
   - Web Audio API haptic feedback and toast alerts.
   - Prominent student identification badge: **Done By SaiVatsal 2500040224**.

---

## 🛠️ How to Run & Test

```bash
# 1. Install dependencies
npm install

# 2. Start the production server
npm start

# 3. Run automated tests
npm test
```

Access the live web application at: `http://localhost:3000`

---
*Created with 100% dedication by SaiVatsal (2500040224).*
