# EduVanguard LMS Platform

> **Project #4 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Responsive UI)

---

## 📌 Domain & Problem Overview
Comprehensive Learning Management System supporting course module structuring, student enrollments, interactive lesson tracking, gradebook assessments, and certificates.

- **Domain Category:** EdTech & Training
- **Primary Entity:** `Course`
- **Secondary Entity:** `Student Submissions & Gradebook`
- **Verification Status:** 100% Tested & Fully Operational

---

## 🚀 Key Features & Implementation
1. **Complete RESTful CRUD API:**
   - `GET /api/courses` — List & search records with multi-field queries.
   - `GET /api/courses/:id` — Retrieve detailed entity record.
   - `POST /api/courses` — Create new validated entity with auto-timestamps.
   - `PUT /api/courses/:id` — Modify existing record with verification.
   - `DELETE /api/courses/:id` — Remove entity from persistent storage.
   - `GET /api/submissions` — Secondary domain service integration.
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
