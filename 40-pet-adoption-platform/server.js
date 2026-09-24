/**
 * PawsHaven Pet Adoption Network - Backend REST API Server
 * Domain: Animals & Welfare
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
          fs.writeFileSync(VERCEL_TMP_DB, JSON.stringify({ pets: [], activityRecords: [] }), 'utf8');
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
    return { pets: [], activityRecords: [] };
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
    project: 'PawsHaven Pet Adoption Network',
    category: 'Animals & Welfare',
    student: 'SaiVatsal',
    collegeId: '2500040224',
    timestamp: new Date().toISOString()
  });
});

// 2. Stats API
app.get('/api/stats', (req, res) => {
  const db = readDb();
  const items = db.pets || [];
  const secondary = db.activityRecords || [];
  res.json({
    totalPrimary: items.length,
    totalSecondary: secondary.length,
    student: 'SaiVatsal (2500040224)',
    project: 'PawsHaven Pet Adoption Network'
  });
});

// 3. GET all primary entities
app.get('/api/pets', (req, res) => {
  const db = readDb();
  let items = db.pets || [];
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
app.get('/api/pets/:id', (req, res) => {
  const db = readDb();
  const item = (db.pets || []).find(i => String(i.id) === String(req.params.id));
  if (!item) {
    return res.status(404).json({ error: 'Rescue Pet Profile not found' });
  }
  res.json(item);
});

// 5. POST new primary entity
app.post('/api/pets', (req, res) => {
  const db = readDb();
  const items = db.pets || [];
  const newId = String(Date.now());
  const newItem = {
    id: newId,
    ...req.body,
    createdAt: new Date().toISOString(),
    author: 'SaiVatsal (2500040224)'
  };
  items.unshift(newItem);
  db.pets = items;
  writeDb(db);
  res.status(201).json(newItem);
});

// 6. PUT update primary entity
app.put('/api/pets/:id', (req, res) => {
  const db = readDb();
  const items = db.pets || [];
  const index = items.findIndex(i => String(i.id) === String(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Rescue Pet Profile not found' });
  }

  items[index] = {
    ...items[index],
    ...req.body,
    updatedAt: new Date().toISOString()
  };

  db.pets = items;
  writeDb(db);
  res.json(items[index]);
});

// 7. DELETE primary entity
app.delete('/api/pets/:id', (req, res) => {
  const db = readDb();
  const items = db.pets || [];
  const filtered = items.filter(i => String(i.id) !== String(req.params.id));

  if (filtered.length === items.length) {
    return res.status(404).json({ error: 'Rescue Pet Profile not found' });
  }

  db.pets = filtered;
  writeDb(db);

  res.json({ message: 'Rescue Pet Profile deleted successfully', id: req.params.id });
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

// 10. Authentication: POST /api/auth/login
app.post('/api/auth/login', (req, res) => {
  const { email = 'admin@saivatsal.dev', password = '', role = 'Administrator' } = req.body || {};
  const user = {
    id: 'USR-2500040224',
    name: role === 'Administrator' ? 'Sai Vatsal (Lead Admin)' : role === 'Specialist' ? 'Alex Chen (Specialist)' : role === 'Auditor' ? 'Dr. Evelyn Reed (Evaluator)' : 'Jordan Taylor (Guest)',
    email: email || (role === 'Administrator' ? 'admin@saivatsal.dev' : role === 'Specialist' ? 'staff@saivatsal.dev' : role === 'Auditor' ? 'auditor@college.edu' : 'demo@saivatsal.dev'),
    role: role || 'Administrator',
    studentId: '2500040224',
    college: 'Full-Stack Software Engineering',
    avatar: role === 'Administrator'
      ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'
      : role === 'Specialist'
      ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80'
      : role === 'Auditor'
      ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80'
      : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80',
    permissions: role === 'Administrator'
      ? ['READ', 'WRITE', 'DELETE', 'ADMIN', 'EXPORT', 'API_SANDBOX', 'VIVA_DEFENSE']
      : role === 'Specialist'
      ? ['READ', 'WRITE', 'OPERATIONS', 'EXPORT']
      : role === 'Auditor'
      ? ['READ', 'VIVA_DEFENSE', 'AUDIT']
      : ['READ'],
    authenticatedAt: new Date().toISOString()
  };
  const token = 'jwt-saivatsal-' + Buffer.from(JSON.stringify({ sub: user.id, role: user.role, student: '2500040224', exp: Date.now() + 86400000 })).toString('base64');
  res.json({
    success: true,
    message: 'Welcome back, ' + user.name + '! Session authenticated.',
    token,
    user
  });
});

// 11. Authentication: GET /api/auth/me
app.get('/api/auth/me', (req, res) => {
  const authHeader = req.headers.authorization;
  res.json({
    authenticated: true,
    student: 'SaiVatsal (2500040224)',
    project: 'PawsHaven Pet Adoption Network',
    user: {
      id: 'USR-2500040224',
      name: 'Sai Vatsal (Lead Admin)',
      email: 'admin@saivatsal.dev',
      role: 'Administrator',
      studentId: '2500040224',
      permissions: ['READ', 'WRITE', 'DELETE', 'ADMIN', 'EXPORT', 'API_SANDBOX', 'VIVA_DEFENSE']
    },
    sessionStatus: 'ACTIVE_VERIFIED',
    tokenHeader: authHeader || 'Bearer default-simulated-token'
  });
});

// 12. Authentication: GET /api/auth/users
app.get('/api/auth/users', (req, res) => {
  res.json([
    { id: 'USR-2500040224', name: 'Sai Vatsal (Lead Admin)', email: 'admin@saivatsal.dev', role: 'Administrator', studentId: '2500040224', badge: 'Full Access' },
    { id: 'USR-SPECIALIST', name: 'Alex Chen (Operations Specialist)', email: 'staff@saivatsal.dev', role: 'Specialist', studentId: '2500040224', badge: 'Ops & CRUD' },
    { id: 'USR-AUDITOR', name: 'Dr. Evelyn Reed (Academic Auditor)', email: 'auditor@college.edu', role: 'Auditor', studentId: '2500040224', badge: 'Read & Viva' },
    { id: 'USR-GUEST', name: 'Jordan Taylor (Demo Guest)', email: 'demo@saivatsal.dev', role: 'Viewer', studentId: '2500040224', badge: 'Read-Only' }
  ]);
});

// 13. Authentication: POST /api/auth/logout
app.post('/api/auth/logout', (req, res) => {
  res.json({ success: true, message: 'Session terminated. Logged out successfully.', loggedOutAt: new Date().toISOString() });
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('======================================================');
    console.log('🚀 PawsHaven Pet Adoption Network is running!');
    console.log('📂 Category: Animals & Welfare');
    console.log('👤 Author: SaiVatsal | College ID: 2500040224');
    console.log('🔗 Web Portal: http://localhost:' + PORT);
    console.log('======================================================');
  });
}

module.exports = app;
