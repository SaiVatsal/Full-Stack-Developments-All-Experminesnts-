const https = require('https');
const fs = require('fs');
const path = require('path');

const token = fs.readFileSync(path.join(__dirname, 'vercel.token'), 'utf8').trim();

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
          resolve(JSON.parse(body));
        } catch (e) {
          resolve(body);
        }
      });
    });
    req.on('error', (e) => resolve({ error: e.message }));
    req.end();
  });
}

async function inspect() {
  const projects = await get('/v9/projects');
  console.log('Projects count:', projects.projects ? projects.projects.length : 'none');
  if (projects.projects && projects.projects.length > 0) {
    console.log('Project 0:', projects.projects[0].name, projects.projects[0].targets);
  }
}

inspect();
