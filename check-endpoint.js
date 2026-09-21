const https = require('https');

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', err => resolve({ error: err.message }));
  });
}

async function test() {
  const res1 = await fetch('https://01-ecommerce-platform-hextk8i3l-sais-projects-d9375997.vercel.app');
  console.log('Homepage Status:', res1.statusCode, res1.headers ? res1.headers.location : '');

  const res2 = await fetch('https://01-ecommerce-platform-hextk8i3l-sais-projects-d9375997.vercel.app/api/health');
  console.log('Health Status:', res2.statusCode, res2.headers ? res2.headers.location : '');
  if (res2.headers && res2.headers.location) {
    const res3 = await fetch(res2.headers.location);
    console.log('Redirect Status:', res3.statusCode, res3.body.substring(0, 200));
  }
}

test();
