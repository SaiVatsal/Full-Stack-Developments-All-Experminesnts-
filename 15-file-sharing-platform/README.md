# CloudVault Secure File Sharing Platform

> **Project #15 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Responsive UI)

---

## 📌 Domain & Problem Overview
Enterprise secure file sharing repository with permission controls, download analytics, expiration limits, encrypted storage metadata, and audit logs.

- **Domain Category:** Cloud Storage & Security
- **Primary Entity:** `Stored File Object`
- **Secondary Entity:** `Recent File Access & Audit Log`
- **Verification Status:** 100% Tested & Fully Operational

---

## 🚀 Key Features & Implementation
1. **Complete RESTful CRUD API:**
   - `GET /api/files` — List & search records with multi-field queries.
   - `GET /api/files/:id` — Retrieve detailed entity record.
   - `POST /api/files` — Create new validated entity with auto-timestamps.
   - `PUT /api/files/:id` — Modify existing record with verification.
   - `DELETE /api/files/:id` — Remove entity from persistent storage.
   - `GET /api/accessLogs` — Secondary domain service integration.
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
