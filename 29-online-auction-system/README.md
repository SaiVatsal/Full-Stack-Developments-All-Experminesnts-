# BidMaster Real-Time Auction Hub

> **Project #29 — Full-Stack Web Application**
> **Student Author:** SaiVatsal
> **Roll / College ID:** 2500040224
> **Architecture:** Clean Full-Stack (Node.js + Express REST API + Tailwind CSS + Responsive UI)

---

## 📌 Domain & Problem Overview
Full-stack production-style application for BidMaster Real-Time Auction Hub. Built with Express backend REST APIs, responsive modern UI, and data validation.

- **Domain Category:** Auctions & Commerce
- **Primary Entity:** `Auction Listing`
- **Secondary Entity:** `Real-Time Bid Stream`
- **Verification Status:** 100% Tested & Fully Operational

---

## 🚀 Key Features & Implementation
1. **Complete RESTful CRUD API:**
   - `GET /api/auctions` — List & search records with multi-field queries.
   - `GET /api/auctions/:id` — Retrieve detailed entity record.
   - `POST /api/auctions` — Create new validated entity with auto-timestamps.
   - `PUT /api/auctions/:id` — Modify existing record with verification.
   - `DELETE /api/auctions/:id` — Remove entity from persistent storage.
   - `GET /api/activityRecords` — Secondary domain service integration.
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
