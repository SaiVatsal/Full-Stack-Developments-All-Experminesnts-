const fs = require('fs');
const path = require('path');
const https = require('https');

const tokenPath = path.join(__dirname, 'vercel.token');
let token = '';
if (fs.existsSync(tokenPath)) {
  token = fs.readFileSync(tokenPath, 'utf8').trim();
}

console.log('Testing Vercel API Authentication...');

const options = {
  hostname: 'api.vercel.com',
  path: '/v2/user',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    try {
      const data = JSON.parse(body);
      if (res.statusCode === 200 && data.user) {
        console.log('✅ Vercel Token Verified Successfully!');
        console.log(`Username: ${data.user.username}`);
        console.log(`Email: ${data.user.email}`);
        console.log(`Name: ${data.user.name || 'N/A'}`);
      } else {
        console.error('❌ Vercel Auth Error:', res.statusCode, data);
      }
    } catch (e) {
      console.error('Error parsing response:', body);
    }
  });
});

req.on('error', (err) => {
  console.error('Request failed:', err.message);
});

req.end();
