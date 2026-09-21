# SmartLedger Personal Expense Tracker

> **Project #9 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Responsive UI)

---

## 📌 Domain & Problem Overview
Real-time personal finance and expense accounting platform with categorized expenditure logging, monthly budget thresholds, transaction auditing, and exportable financial summaries.

- **Domain Category:** Finance & Budgeting
- **Primary Entity:** `Financial Transaction`
- **Secondary Entity:** `Active Monthly Budget Limits`
- **Verification Status:** 100% Tested & Fully Operational

---

## 🚀 Key Features & Implementation
1. **Complete RESTful CRUD API:**
   - `GET /api/transactions` — List & search records with multi-field queries.
   - `GET /api/transactions/:id` — Retrieve detailed entity record.
   - `POST /api/transactions` — Create new validated entity with auto-timestamps.
   - `PUT /api/transactions/:id` — Modify existing record with verification.
   - `DELETE /api/transactions/:id` — Remove entity from persistent storage.
   - `GET /api/budgets` — Secondary domain service integration.
   - `GET /api/stats` — Live KPI calculation endpoint.
   - `GET /api/health` — Service health check and verification endpoint.

2. **Human-Designed Production UI:**
   - Interactive data tables with status pills and localized formatting.
   - Real-time debounced search & filter bar.
   - Modal-driven CRUD forms with client-side validation.
   - Toast notification alerts and feedback states.
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
