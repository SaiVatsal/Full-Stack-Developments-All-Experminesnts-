/**
 * VentureForge Crowdfunding Platform - Backend REST API Server
 * Domain: Crowdfunding & Startups
 * Done By: SaiVatsal (Roll/ID: 2500040224)
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'data', 'db.json');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper to read database
function readDb() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { ventures: [], activityRecords: [] };
  }
}

// Helper to write database
function writeDb(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// 1. Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    project: 'VentureForge Crowdfunding Platform',
    category: 'Crowdfunding & Startups',
    student: 'SaiVatsal',
    collegeId: '2500040224',
    timestamp: new Date().toISOString()
  });
});

// 2. Stats API
app.get('/api/stats', (req, res) => {
  const db = readDb();
  const items = db.ventures || [];
  const secondary = db.activityRecords || [];
  res.json({
    totalPrimary: items.length,
    totalSecondary: secondary.length,
    student: 'SaiVatsal (2500040224)',
    project: 'VentureForge Crowdfunding Platform'
  });
});

// 3. GET all primary entities
app.get('/api/ventures', (req, res) => {
  const db = readDb();
  let items = db.ventures || [];
  const { search, category, status } = req.query;

  if (search) {
    const q = search.toLowerCase();
    items = items.filter(item =>
      Object.values(item).some(val => String(val).toLowerCase().includes(q))
    );
  }
  if (category && category !== 'All') {
    items = items.filter(item => item.category === category);
  }
  if (status && status !== 'All') {
    items = items.filter(item => item.status === status);
  }

  res.json(items);
});

// 4. GET single primary entity
app.get('/api/ventures/:id', (req, res) => {
  const db = readDb();
  const item = (db.ventures || []).find(i => String(i.id) === String(req.params.id));
  if (!item) {
    return res.status(404).json({ error: 'Startup Campaign not found' });
  }
  res.json(item);
});

// 5. POST create primary entity
app.post('/api/ventures', (req, res) => {
  const db = readDb();
  const newItem = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString(),
    createdBy: 'SaiVatsal (2500040224)'
  };

  db.ventures = db.ventures || [];
  db.ventures.unshift(newItem);
  writeDb(db);

  res.status(201).json(newItem);
});

// 6. PUT update primary entity
app.put('/api/ventures/:id', (req, res) => {
  const db = readDb();
  const items = db.ventures || [];
  const index = items.findIndex(i => String(i.id) === String(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Startup Campaign not found' });
  }

  const updatedItem = {
    ...items[index],
    ...req.body,
    id: items[index].id,
    updatedAt: new Date().toISOString(),
    updatedBy: 'SaiVatsal (2500040224)'
  };

  items[index] = updatedItem;
  db.ventures = items;
  writeDb(db);

  res.json(updatedItem);
});

// 7. DELETE primary entity
app.delete('/api/ventures/:id', (req, res) => {
  const db = readDb();
  const items = db.ventures || [];
  const filtered = items.filter(i => String(i.id) !== String(req.params.id));

  if (filtered.length === items.length) {
    return res.status(404).json({ error: 'Startup Campaign not found' });
  }

  db.ventures = filtered;
  writeDb(db);

  res.json({ message: 'Startup Campaign deleted successfully', id: req.params.id });
});

// 8. GET secondary entities
app.get('/api/activityRecords', (req, res) => {
  const db = readDb();
  res.json(db.activityRecords || []);
});

// 9. POST secondary entity
app.post('/api/activityRecords', (req, res) => {
  const db = readDb();
  const newEntry = {
    id: 'SEC-' + Date.now().toString().slice(-4),
    ...req.body,
    recordedAt: new Date().toISOString(),
    supervisor: 'SaiVatsal (2500040224)'
  };
  db.activityRecords = db.activityRecords || [];
  db.activityRecords.unshift(newEntry);
  writeDb(db);
  res.status(201).json(newEntry);
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`======================================================`);
    console.log(`🚀 ${project.name} is running!`);
    console.log(`📂 Category: ${project.category}`);
    console.log(`👤 Author: SaiVatsal | College ID: 2500040224`);
    console.log(`🔗 Web Portal: http://localhost:${PORT}`);
    console.log(`======================================================`);
  });
}

module.exports = app;
