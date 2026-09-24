# KisanDirect Farmer-Buyer Marketplace

> **Project #45 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Responsive UI)

---

## 📌 Domain & Problem Overview
Full-stack production-style application for KisanDirect Farmer-Buyer Marketplace. Built with Express backend REST APIs, responsive modern UI, and data validation.

- **Domain Category:** Agriculture & AgriTech
- **Primary Entity:** `Crop Harvest Lot`
- **Secondary Entity:** `Buyer Direct Contracts`
- **Verification Status:** 100% Tested & Fully Operational

---

## 🚀 Key Features & Implementation
1. **Complete RESTful CRUD API:**
   - `GET /api/crops` — List & search records with multi-field queries.
   - `GET /api/crops/:id` — Retrieve detailed entity record.
   - `POST /api/crops` — Create new validated entity with auto-timestamps.
   - `PUT /api/crops/:id` — Modify existing record with verification.
   - `DELETE /api/crops/:id` — Remove entity from persistent storage.
   - `GET /api/activityRecords` — Secondary domain service integration.
   - `GET /api/stats` — Live KPI calculation endpoint.
   - `GET /api/health` — Service health check and verification endpoint.
   - `POST /api/auth/login` — User authentication and JWT token issuance.
   - `GET /api/auth/me` — Active session claims and permissions inspection.
   - `GET /api/auth/users` — Available IAM personas and clearance matrices.

2. **Human-Designed Production UI:**
   - Multi-tab layout (Overview & Metrics, Data Explorer, Live Operations, Interactive API Console, Viva Blueprint, Access & IAM Portal).
   - Identity & Access Management (IAM) Portal with 1-click persona switching (Lead Admin, Specialist, Evaluator, Guest).
   - Live JWT session token generator and decoded claims payload visualizer.
   - Real-time interactive Chart.js visualizations (Categorical Distribution and Throughput Velocity).
   - Real-time debounced search, column sorting, and CSV/JSON data exports.
   - Slide-over inspection drawer for deep record exploration.
   - Modal-driven CRUD forms with client-side validation.
   - Dual-theme engine (Dark / Light mode) with localStorage persistence.
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
