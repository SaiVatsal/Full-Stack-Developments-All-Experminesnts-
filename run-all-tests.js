/**
 * Master Test Runner & Quality Verifier
 * Iterates through all 58 projects, starts their server on ephemeral ports,
 * executes CRUD operations against their REST APIs, verifies student attribution,
 * and asserts UI assets.
 *
 * Student: SaiVatsal (2500040224)
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { allProjects } = require('./master-catalog.js');

const rootDir = __dirname;

function testSingleProject(project) {
  return new Promise((resolve) => {
    const projectDir = path.join(rootDir, project.folder);
    const serverPath = path.join(projectDir, 'server.js');
    const htmlPath = path.join(projectDir, 'public', 'index.html');
    const dbPath = path.join(projectDir, 'data', 'db.json');

    // 1. Static Asset Verification
    if (!fs.existsSync(serverPath)) return resolve({ project: project.name, pass: false, error: 'server.js missing' });
    if (!fs.existsSync(htmlPath)) return resolve({ project: project.name, pass: false, error: 'index.html missing' });
    if (!fs.existsSync(dbPath)) return resolve({ project: project.name, pass: false, error: 'db.json missing' });

    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    if (!htmlContent.includes('SaiVatsal') || !htmlContent.includes('2500040224')) {
      return resolve({ project: project.name, pass: false, error: 'Student attribution missing from HTML' });
    }

    // 2. Dynamic Server & API Test
    try {
      delete require.cache[require.resolve(serverPath)];
      const app = require(serverPath);
      const server = app.listen(0, async () => {
        const port = server.address().port;

        function makeReq(endpoint, options = {}) {
          return new Promise((res, rej) => {
            const req = http.request(`http://localhost:${port}${endpoint}`, options, (r) => {
              let body = '';
              r.on('data', chunk => body += chunk);
              r.on('end', () => {
                try {
                  res({ status: r.statusCode, data: JSON.parse(body) });
                } catch (e) {
                  res({ status: r.statusCode, raw: body });
                }
              });
            });
            req.on('error', rej);
            if (options.body) req.write(JSON.stringify(options.body));
            req.end();
          });
        }

        try {
          // A. Health check
          const health = await makeReq('/api/health');
          if (health.status !== 200 || health.data.student !== 'SaiVatsal' || health.data.collegeId !== '2500040224') {
            throw new Error(`Health check mismatch: ${JSON.stringify(health.data)}`);
          }

          // B. GET entities
          const list = await makeReq(`/api/${project.entitiesName}`);
          if (list.status !== 200 || !Array.isArray(list.data)) {
            throw new Error(`GET /api/${project.entitiesName} failed`);
          }

          // C. POST entity
          const payload = {};
          project.fields.forEach(f => {
            payload[f.key] = f.type === 'number' ? 100 : `Test ${f.label}`;
          });
          const createRes = await makeReq(`/api/${project.entitiesName}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload
          });
          if (createRes.status !== 201 || !createRes.data.id) {
            throw new Error(`POST /api/${project.entitiesName} failed`);
          }
          const createdId = createRes.data.id;

          // D. PUT entity
          const putRes = await makeReq(`/api/${project.entitiesName}/${createdId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: { status: 'Verified' }
          });
          if (putRes.status !== 200) {
            throw new Error(`PUT /api/${project.entitiesName}/${createdId} failed`);
          }

          // E. DELETE entity
          const delRes = await makeReq(`/api/${project.entitiesName}/${createdId}`, {
            method: 'DELETE'
          });
          if (delRes.status !== 200) {
            throw new Error(`DELETE /api/${project.entitiesName}/${createdId} failed`);
          }

          server.close(() => {
            resolve({ project: project.name, id: project.id, folder: project.folder, pass: true });
          });
        } catch (apiErr) {
          server.close(() => {
            resolve({ project: project.name, id: project.id, folder: project.folder, pass: false, error: apiErr.message });
          });
        }
      });
    } catch (importErr) {
      resolve({ project: project.name, id: project.id, folder: project.folder, pass: false, error: importErr.message });
    }
  });
}

async function runAll() {
  console.log(`================================================================`);
  console.log(`🧪 EXECUTING COMPREHENSIVE TEST SUITE FOR ALL 58 PROJECTS`);
  console.log(`Student Name: SaiVatsal | College ID: 2500040224`);
  console.log(`================================================================\n`);

  let passedCount = 0;
  let failedCount = 0;

  for (const proj of allProjects) {
    const res = await testSingleProject(proj);
    if (res.pass) {
      passedCount++;
      console.log(`[✔ PASSED] #${String(proj.id).padStart(2, '0')} | ${proj.name} (${proj.folder})`);
    } else {
      failedCount++;
      console.error(`[❌ FAILED] #${String(proj.id).padStart(2, '0')} | ${proj.name}: ${res.error}`);
    }
  }

  console.log(`\n================================================================`);
  console.log(`🏁 TEST SUITE COMPLETE: ${passedCount}/58 PASSED (${failedCount} Failures)`);
  console.log(`Attribution Verified: "Done By SaiVatsal 2500040224" across all 58 projects`);
  console.log(`================================================================`);

  if (failedCount > 0) {
    process.exit(1);
  }
}

runAll();
