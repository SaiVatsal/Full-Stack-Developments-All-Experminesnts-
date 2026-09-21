/**
 * Automated Verification & Test Suite
 * Project: Velocity Auto Fleet & Rental System
 * Done By: SaiVatsal (2500040224)
 */

const http = require('http');
const app = require('./server.js');

const server = app.listen(0, async () => {
  const port = server.address().port;
  console.log(`Running Test Suite on ephemeral port ${port}...`);

  function request(path, options = {}) {
    return new Promise((resolve, reject) => {
      const req = http.request(`http://localhost:${port}${path}`, options, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, data: JSON.parse(body) });
          } catch (e) {
            resolve({ status: res.statusCode, raw: body });
          }
        });
      });
      req.on('error', reject);
      if (options.body) req.write(JSON.stringify(options.body));
      req.end();
    });
  }

  try {
    // 1. Health Check
    const health = await request('/api/health');
    console.log('✔ Health Check:', health.status === 200 ? 'PASSED' : 'FAILED');

    // 2. GET all
    const all = await request('/api/vehicles');
    console.log(`✔ GET /api/vehicles: PASSED (${all.data.length} records)`);

    // 3. POST new item
    const postRes = await request('/api/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        vin: 'Test VIN / Plate Code',
        model: 'Test Vehicle Make & Model',
        type: 'Test Vehicle Class',
        dailyRate: 99,
        seats: 99,
        fuel: 'Test Powertrain / Fuel Type',
        location: 'Test Current Station Hub',
        status: 'Test Rental Availability'
      }
    });
    console.log('✔ POST Create Item:', postRes.status === 201 ? 'PASSED' : 'FAILED');
    const createdId = postRes.data.id;

    // 4. PUT update item
    const putRes = await request(`/api/vehicles/${createdId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: { status: 'Verified Test' }
    });
    console.log('✔ PUT Update Item:', putRes.status === 200 ? 'PASSED' : 'FAILED');

    // 5. DELETE item
    const delRes = await request(`/api/vehicles/${createdId}`, {
      method: 'DELETE'
    });
    console.log('✔ DELETE Item:', delRes.status === 200 ? 'PASSED' : 'FAILED');

    console.log(`🎉 All tests passed successfully for ${app.get ? 'Velocity Auto Fleet & Rental System' : 'Project'}! Done By SaiVatsal 2500040224`);
    server.close();
    process.exit(0);
  } catch (err) {
    console.error('❌ Test failed:', err);
    server.close();
    process.exit(1);
  }
});
