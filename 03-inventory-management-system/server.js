/**
 * StockMaster Pro Inventory System - Backend REST API Server
 * Domain: Logistics & Supply Chain
 * Done By: SaiVatsal (Roll/ID: 2500040224)
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'data', 'db.json');
const VERCEL_TMP_DB = path.join('/tmp', 'db.json');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper to determine safe persistent database path (handles serverless read-only filesystem)
function getDbFilePath() {
  if (process.env.VERCEL) {
    if (!fs.existsSync(VERCEL_TMP_DB)) {
      try {
        if (fs.existsSync(DB_FILE)) {
          fs.copyFileSync(DB_FILE, VERCEL_TMP_DB);
        } else {
          fs.writeFileSync(VERCEL_TMP_DB, JSON.stringify({ items: [], movements: [] }), 'utf8');
        }
      } catch (e) {}
    }
    return VERCEL_TMP_DB;
  }
  return DB_FILE;
}

// Helper to read database
function readDb() {
  try {
    const file = getDbFilePath();
    const data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { items: [], movements: [] };
  }
}

// Helper to write database
function writeDb(data) {
  try {
    const file = getDbFilePath();
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Database write error:', err);
  }
}

// 1. Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    project: 'StockMaster Pro Inventory System',
    category: 'Logistics & Supply Chain',
    student: 'SaiVatsal',
    collegeId: '2500040224',
    timestamp: new Date().toISOString()
  });
});

// 2. Stats API
app.get('/api/stats', (req, res) => {
  const db = readDb();
  const items = db.items || [];
  const secondary = db.movements || [];
  res.json({
    totalPrimary: items.length,
    totalSecondary: secondary.length,
    student: 'SaiVatsal (2500040224)',
    project: 'StockMaster Pro Inventory System'
  });
});

// 3. GET all primary entities
app.get('/api/items', (req, res) => {
  const db = readDb();
  let items = db.items || [];
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
app.get('/api/items/:id', (req, res) => {
  const db = readDb();
  const item = (db.items || []).find(i => String(i.id) === String(req.params.id));
  if (!item) {
    return res.status(404).json({ error: 'Inventory Item not found' });
  }
  res.json(item);
});

// 5. POST new primary entity
app.post('/api/items', (req, res) => {
  const db = readDb();
  const items = db.items || [];
  const newId = String(Date.now());
  const newItem = {
    id: newId,
    ...req.body,
    createdAt: new Date().toISOString(),
    author: 'SaiVatsal (2500040224)'
  };
  items.unshift(newItem);
  db.items = items;
  writeDb(db);
  res.status(201).json(newItem);
});

// 6. PUT update primary entity
app.put('/api/items/:id', (req, res) => {
  const db = readDb();
  const items = db.items || [];
  const index = items.findIndex(i => String(i.id) === String(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Inventory Item not found' });
  }

  items[index] = {
    ...items[index],
    ...req.body,
    updatedAt: new Date().toISOString()
  };

  db.items = items;
  writeDb(db);
  res.json(items[index]);
});

// 7. DELETE primary entity
app.delete('/api/items/:id', (req, res) => {
  const db = readDb();
  const items = db.items || [];
  const filtered = items.filter(i => String(i.id) !== String(req.params.id));

  if (filtered.length === items.length) {
    return res.status(404).json({ error: 'Inventory Item not found' });
  }

  db.items = filtered;
  writeDb(db);

  res.json({ message: 'Inventory Item deleted successfully', id: req.params.id });
});

// 8. GET secondary entities
app.get('/api/movements', (req, res) => {
  const db = readDb();
  res.json(db.movements || []);
});

// 9. POST secondary entity
app.post('/api/movements', (req, res) => {
  const db = readDb();
  const newEntry = {
    id: 'SEC-' + Date.now().toString().slice(-4),
    ...req.body,
    recordedAt: new Date().toISOString(),
    supervisor: 'SaiVatsal (2500040224)'
  };
  db.movements = db.movements || [];
  db.movements.unshift(newEntry);
  writeDb(db);
  res.status(201).json(newEntry);
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('======================================================');
    console.log('🚀 StockMaster Pro Inventory System is running!');
    console.log('📂 Category: Logistics & Supply Chain');
    console.log('👤 Author: SaiVatsal | College ID: 2500040224');
    console.log('🔗 Web Portal: http://localhost:' + PORT);
    console.log('======================================================');
  });
}

module.exports = app;
