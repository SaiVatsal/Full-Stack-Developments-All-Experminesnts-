const https = require('https');
const fs = require('fs');
const path = require('path');

const token = fs.readFileSync(path.join(__dirname, 'vercel.token'), 'utf8').trim();

function patch(pathStr, data) {
  return new Promise((resolve) => {
    const bodyStr = JSON.stringify(data);
    const options = {
      hostname: 'api.vercel.com',
      path: pathStr,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(bodyStr)
      }
    };
    const req = https.request(options, (res) => {
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
    req.on('error', (e) => resolve({ error: e.message }));
    req.write(bodyStr);
    req.end();
  });
}

function get(pathStr) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.vercel.com',
      path: pathStr,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    const req = https.request(options, (res) => {
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
    req.on('error', (e) => resolve({ error: e.message }));
    req.end();
  });
}

async function testProtection() {
  const proj = await get('/v9/projects/01-ecommerce-platform');
  console.log('Project details:', proj.data.name, 'ssoProtection:', proj.data.ssoProtection);

  // Disable Vercel Authentication / SSO Protection so it's 100% public
  const updated = await patch('/v9/projects/01-ecommerce-platform', {
    ssoProtection: null,
    passwordProtection: null
  });
  console.log('Update result:', updated.status);
}

testProtection();
