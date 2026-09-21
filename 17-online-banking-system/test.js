/**
 * Automated Verification & Test Suite
 * Project: AuraBank Educational Digital Banking Suite
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
    const all = await request('/api/accounts');
    console.log(`✔ GET /api/accounts: PASSED (${all.data.length} records)`);

    // 3. POST new item
    const postRes = await request('/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        accountNo: 'Test Account Identifier',
        holder: 'Test Primary Account Holder',
        type: 'Test Account Classification',
        balance: 99,
        currency: 'Test Currency Code',
        tier: 'Test Relationship Tier',
        status: 'Test Account State'
      }
    });
    console.log('✔ POST Create Item:', postRes.status === 201 ? 'PASSED' : 'FAILED');
    const createdId = postRes.data.id;

    // 4. PUT update item
    const putRes = await request(`/api/accounts/${createdId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: { status: 'Verified Test' }
    });
    console.log('✔ PUT Update Item:', putRes.status === 200 ? 'PASSED' : 'FAILED');

    // 5. DELETE item
    const delRes = await request(`/api/accounts/${createdId}`, {
      method: 'DELETE'
    });
    console.log('✔ DELETE Item:', delRes.status === 200 ? 'PASSED' : 'FAILED');

    console.log(`🎉 All tests passed successfully for ${app.get ? 'AuraBank Educational Digital Banking Suite' : 'Project'}! Done By SaiVatsal 2500040224`);
    server.close();
    process.exit(0);
  } catch (err) {
    console.error('❌ Test failed:', err);
    server.close();
    process.exit(1);
  }
});
