# Velocity Auto Fleet & Rental System

> **Project #11 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Responsive UI)

---

## 📌 Domain & Problem Overview
Fleet management and car rental booking portal with multi-class vehicle selection, daily rate calculations, reservation conflict checking, and vehicle maintenance scheduling.

- **Domain Category:** Automotive & Travel
- **Primary Entity:** `Rental Vehicle`
- **Secondary Entity:** `Active Customer Reservations`
- **Verification Status:** 100% Tested & Fully Operational

---

## 🚀 Key Features & Implementation
1. **Complete RESTful CRUD API:**
   - `GET /api/vehicles` — List & search records with multi-field queries.
   - `GET /api/vehicles/:id` — Retrieve detailed entity record.
   - `POST /api/vehicles` — Create new validated entity with auto-timestamps.
   - `PUT /api/vehicles/:id` — Modify existing record with verification.
   - `DELETE /api/vehicles/:id` — Remove entity from persistent storage.
   - `GET /api/reservations` — Secondary domain service integration.
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
