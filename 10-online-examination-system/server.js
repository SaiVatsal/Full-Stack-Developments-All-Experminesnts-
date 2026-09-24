/**
 * TestMaster Pro Online Examination Portal - Backend REST API Server
 * Domain: Assessment & Testing
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
          fs.writeFileSync(VERCEL_TMP_DB, JSON.stringify({ exams: [], attempts: [] }), 'utf8');
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
    return { exams: [], attempts: [] };
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
    project: 'TestMaster Pro Online Examination Portal',
    category: 'Assessment & Testing',
    student: 'SaiVatsal',
    collegeId: '2500040224',
    timestamp: new Date().toISOString()
  });
});

// 2. Stats API
app.get('/api/stats', (req, res) => {
  const db = readDb();
  const items = db.exams || [];
  const secondary = db.attempts || [];
  res.json({
    totalPrimary: items.length,
    totalSecondary: secondary.length,
    student: 'SaiVatsal (2500040224)',
    project: 'TestMaster Pro Online Examination Portal'
  });
});

// 3. GET all primary entities
app.get('/api/exams', (req, res) => {
  const db = readDb();
  let items = db.exams || [];
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
app.get('/api/exams/:id', (req, res) => {
  const db = readDb();
  const item = (db.exams || []).find(i => String(i.id) === String(req.params.id));
  if (!item) {
    return res.status(404).json({ error: 'Examination Paper not found' });
  }
  res.json(item);
});

// 5. POST new primary entity
app.post('/api/exams', (req, res) => {
  const db = readDb();
  const items = db.exams || [];
  const newId = String(Date.now());
  const newItem = {
    id: newId,
    ...req.body,
    createdAt: new Date().toISOString(),
    author: 'SaiVatsal (2500040224)'
  };
  items.unshift(newItem);
  db.exams = items;
  writeDb(db);
  res.status(201).json(newItem);
});

// 6. PUT update primary entity
app.put('/api/exams/:id', (req, res) => {
  const db = readDb();
  const items = db.exams || [];
  const index = items.findIndex(i => String(i.id) === String(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Examination Paper not found' });
  }

  items[index] = {
    ...items[index],
    ...req.body,
    updatedAt: new Date().toISOString()
  };

  db.exams = items;
  writeDb(db);
  res.json(items[index]);
});

// 7. DELETE primary entity
app.delete('/api/exams/:id', (req, res) => {
  const db = readDb();
  const items = db.exams || [];
  const filtered = items.filter(i => String(i.id) !== String(req.params.id));

  if (filtered.length === items.length) {
    return res.status(404).json({ error: 'Examination Paper not found' });
  }

  db.exams = filtered;
  writeDb(db);

  res.json({ message: 'Examination Paper deleted successfully', id: req.params.id });
});

// 8. GET secondary entities
app.get('/api/attempts', (req, res) => {
  const db = readDb();
  res.json(db.attempts || []);
});

// 9. POST secondary entity
app.post('/api/attempts', (req, res) => {
  const db = readDb();
  const newEntry = {
    id: 'SEC-' + Date.now().toString().slice(-4),
    ...req.body,
    recordedAt: new Date().toISOString(),
    supervisor: 'SaiVatsal (2500040224)'
  };
  db.attempts = db.attempts || [];
  db.attempts.unshift(newEntry);
  writeDb(db);
  res.status(201).json(newEntry);
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('======================================================');
    console.log('🚀 TestMaster Pro Online Examination Portal is running!');
    console.log('📂 Category: Assessment & Testing');
    console.log('👤 Author: SaiVatsal | College ID: 2500040224');
    console.log('🔗 Web Portal: http://localhost:' + PORT);
    console.log('======================================================');
  });
}

module.exports = app;
