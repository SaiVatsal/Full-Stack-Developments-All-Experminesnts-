# Vanguard EventHub & Conference Suite

> **Project #18 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Responsive UI)

---

## 📌 Domain & Problem Overview
End-to-end conference and event management software supporting speaker agendas, ticket reservations, venue capacity management, and attendee badge registrations.

- **Domain Category:** Events & Hospitality
- **Primary Entity:** `Conferences & Event`
- **Secondary Entity:** `Attendee Registration & Badges`
- **Verification Status:** 100% Tested & Fully Operational

---

## 🚀 Key Features & Implementation
1. **Complete RESTful CRUD API:**
   - `GET /api/events` — List & search records with multi-field queries.
   - `GET /api/events/:id` — Retrieve detailed entity record.
   - `POST /api/events` — Create new validated entity with auto-timestamps.
   - `PUT /api/events/:id` — Modify existing record with verification.
   - `DELETE /api/events/:id` — Remove entity from persistent storage.
   - `GET /api/registrations` — Secondary domain service integration.
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
