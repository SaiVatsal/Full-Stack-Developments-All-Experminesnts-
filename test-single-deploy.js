const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const tokenPath = path.join(__dirname, 'vercel.token');
const token = fs.readFileSync(tokenPath, 'utf8').trim();
const projectDir = path.join(__dirname, '01-ecommerce-platform');

console.log('Testing single project deployment on Vercel: 01-ecommerce-platform...');

try {
  const cmd = `npx --yes vercel deploy --prod --yes --token=${token}`;
  console.log('Running:', 'npx --yes vercel deploy --prod --yes --token=***');
  const output = execSync(cmd, {
    cwd: projectDir,
    stdio: ['pipe', 'pipe', 'pipe'],
    encoding: 'utf8',
    timeout: 120000
  });

  console.log('Output from Vercel:');
  console.log(output);
} catch (err) {
  console.error('Error during Vercel deployment:');
  if (err.stdout) console.log('STDOUT:', err.stdout.toString());
  if (err.stderr) console.error('STDERR:', err.stderr.toString());
  console.error('Message:', err.message);
}
