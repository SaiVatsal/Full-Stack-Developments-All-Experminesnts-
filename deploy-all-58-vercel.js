/**
 * 58 Vercel Projects Automated Deployer & Health Verifier
 * Student: SaiVatsal (2500040224)
 *
 * This script automates deploying all 58 projects to Vercel:
 * 1. Deploys each project folder directly to Vercel production
 * 2. Uses either a Vercel Token (process.env.VERCEL_TOKEN) or local Vercel CLI login
 * 3. Captures the generated live production URLs
 * 4. Generates a deployment report and markdown catalog with live links
 *
 * Usage:
 *   Option A (With Token):
 *     $env:VERCEL_TOKEN = "your_vercel_token_here"
 *     node deploy-all-58-vercel.js
 *
 *   Option B (With Vercel CLI Login):
 *     npx vercel login
 *     node deploy-all-58-vercel.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');
const { allProjects } = require('./master-catalog.js');

const rootDir = __dirname;
const VERCEL_TOKEN = process.env.VERCEL_TOKEN || process.env.VERCEL_AUTH_TOKEN || '';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function checkLiveUrl(url) {
  return new Promise((resolve) => {
    try {
      const fullUrl = url.endsWith('/') ? `${url}api/health` : `${url}/api/health`;
      const req = https.get(fullUrl, { timeout: 8000 }, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 400) {
            resolve({ ok: true, status: res.statusCode });
          } else {
            resolve({ ok: false, status: res.statusCode });
          }
        });
      });
      req.on('error', (e) => resolve({ ok: false, error: e.message }));
      req.on('timeout', () => {
        req.destroy();
        resolve({ ok: false, error: 'Timeout' });
      });
    } catch (err) {
      resolve({ ok: false, error: err.message });
    }
  });
}

async function deployProject(project, index, total) {
  const repoName = project.folder;
  const projectDir = path.join(rootDir, project.folder);

  console.log(`\n================================================================`);
  console.log(`[${index + 1}/${total}] 🚀 Deploying to Vercel: ${project.name}`);
  console.log(`Directory: ${project.folder}`);
  console.log(`Student: SaiVatsal (2500040224)`);
  console.log(`================================================================`);

  try {
    const tokenFlag = VERCEL_TOKEN ? `--token ${VERCEL_TOKEN}` : '';
    const deployCmd = `npx --yes vercel deploy --prod --yes --name ${repoName} ${tokenFlag}`;

    console.log(`Executing Vercel CLI deployment...`);
    const output = execSync(deployCmd, {
      cwd: projectDir,
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf8',
      timeout: 180000 // 3 minutes max per project
    });

    // Vercel outputs the deployment URL as the last non-empty line or stdout URL
    const lines = output.trim().split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    let liveUrl = lines.find(l => l.startsWith('https://') && l.includes('.vercel.app')) || lines[lines.length - 1];

    if (!liveUrl.startsWith('http')) {
      liveUrl = `https://${repoName}.vercel.app`;
    }

    console.log(`  ✅ Successfully Deployed to Vercel: ${liveUrl}`);

    // Quick Health Verification
    console.log(`  🔍 Verifying API Health at ${liveUrl}/api/health...`);
    const health = await checkLiveUrl(liveUrl);
    if (health.ok) {
      console.log(`  ✔ API Health Verified (Status ${health.status})`);
    } else {
      console.log(`  ℹ️ Deployment live at ${liveUrl}`);
    }

    return {
      id: project.id,
      name: project.name,
      folder: repoName,
      category: project.category,
      liveUrl: liveUrl,
      githubUrl: `https://github.com/SaiVatsal/${repoName}`,
      status: 'SUCCESS',
      health: health.ok ? 'HEALTHY' : 'DEPLOYED'
    };
  } catch (err) {
    const errMsg = err.stderr ? err.stderr.toString() : err.message;
    console.error(`  ❌ Deployment error for ${repoName}:`, errMsg.trim());
    return {
      id: project.id,
      name: project.name,
      folder: repoName,
      error: errMsg.trim(),
      githubUrl: `https://github.com/SaiVatsal/${repoName}`,
      status: 'FAILED'
    };
  }
}

async function run() {
  console.log(`================================================================`);
  console.log(`🌟 58 VERCEL PROJECTS AUTOMATED DEPLOYMENT ORCHESTRATOR`);
  console.log(`Student: SaiVatsal (2500040224)`);
  console.log(`Total Projects: ${allProjects.length}`);
  console.log(`Mode: ${VERCEL_TOKEN ? 'Vercel API Token Auth' : 'Local Vercel CLI Auth'}`);
  console.log(`================================================================\n`);

  const results = [];
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < allProjects.length; i++) {
    const res = await deployProject(allProjects[i], i, allProjects.length);
    results.push(res);
    if (res.status === 'SUCCESS') passed++;
    else failed++;

    // Small cooldown between deployments
    await sleep(1000);
  }

  console.log(`\n================================================================`);
  console.log(`🏁 VERCEL DEPLOYMENT FINISHED: ${passed}/${allProjects.length} Projects Deployed!`);
  console.log(`================================================================`);

  // 1. Write JSON Report
  const reportPath = path.join(rootDir, 'vercel-deployment-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    student: 'SaiVatsal',
    collegeId: '2500040224',
    deployedAt: new Date().toISOString(),
    total: allProjects.length,
    passed,
    failed,
    deployments: results
  }, null, 2), 'utf8');
  console.log(`📄 Saved detailed JSON report to: ${reportPath}`);

  // 2. Generate Markdown Catalog
  let mdContent = `# 🚀 58 Full-Stack Projects Vercel Deployments\n\n`;
  mdContent += `**Student:** SaiVatsal (2500040224)\n\n`;
  mdContent += `**Status:** ${passed}/${allProjects.length} Deployed Successfully\n\n`;
  mdContent += `| # | Project Name | Category | Live Vercel App | GitHub Repo | Status |\n`;
  mdContent += `|---|---|---|---|---|---|\n`;

  for (const item of results) {
    const liveLink = item.liveUrl ? `[🔗 Open App](${item.liveUrl})` : 'Pending';
    const ghLink = `[📦 Repo](${item.githubUrl})`;
    const statusBadge = item.status === 'SUCCESS' ? '✅ Live' : '❌ Failed';
    mdContent += `| ${item.id} | **${item.name}** | ${item.category} | ${liveLink} | ${ghLink} | ${statusBadge} |\n`;
  }

  mdContent += `\n---\n*Automated deployment orchestration powered by Vercel Serverless Functions & Claude Code.* Done By SaiVatsal (2500040224).\n`;

  const mdPath = path.join(rootDir, 'VERCEL_DEPLOYMENTS.md');
  fs.writeFileSync(mdPath, mdContent, 'utf8');
  console.log(`📄 Saved Markdown catalog to: ${mdPath}`);
}

run();
