/**
 * 58 Vercel Projects Automated Deployer
 * Student: SaiVatsal (2500040224)
 *
 * This script automates deploying all 58 projects to Vercel:
 * 1. Reads authentication securely from vercel.token or process.env.VERCEL_TOKEN
 * 2. Deploys each project folder directly to Vercel production
 * 3. Captures the generated live production URLs
 * 4. Generates a deployment report and markdown catalog with live links
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { allProjects } = require('./master-catalog.js');

const rootDir = __dirname;
const tokenPath = path.join(rootDir, 'vercel.token');
let VERCEL_TOKEN = process.env.VERCEL_TOKEN || process.env.VERCEL_AUTH_TOKEN || '';

if (!VERCEL_TOKEN && fs.existsSync(tokenPath)) {
  VERCEL_TOKEN = fs.readFileSync(tokenPath, 'utf8').trim();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function deployProject(project, index, total) {
  const repoName = project.folder;
  const projectDir = path.join(rootDir, project.folder);

  console.log(`\n================================================================`);
  console.log(`[${index + 1}/${total}] 🚀 Deploying to Vercel: ${project.name}`);
  console.log(`Directory: ${project.folder}`);
  console.log(`Student Attribution: Done By SaiVatsal (2500040224)`);
  console.log(`================================================================`);

  try {
    const deployCmd = `npx --yes vercel deploy --prod --yes --token=${VERCEL_TOKEN}`;

    const output = execSync(deployCmd, {
      cwd: projectDir,
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf8',
      timeout: 180000 // 3 minutes max per project
    });

    let liveUrl = '';
    let inspectorUrl = '';

    try {
      const parsed = JSON.parse(output.trim());
      if (parsed && parsed.deployment && parsed.deployment.url) {
        liveUrl = parsed.deployment.url.startsWith('http') ? parsed.deployment.url : `https://${parsed.deployment.url}`;
        inspectorUrl = parsed.deployment.inspectorUrl || '';
      }
    } catch (e) {
      // Fallback text parsing if not JSON
      const lines = output.trim().split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      const urlLine = lines.find(l => l.startsWith('https://') && l.includes('.vercel.app')) || lines[lines.length - 1];
      liveUrl = urlLine.startsWith('http') ? urlLine : `https://${urlLine}`;
    }

    if (!liveUrl) {
      liveUrl = `https://${repoName}.vercel.app`;
    }

    console.log(`  ✅ Successfully Deployed: ${liveUrl}`);
    if (inspectorUrl) console.log(`  🔍 Vercel Dashboard: ${inspectorUrl}`);

    return {
      id: project.id,
      name: project.name,
      folder: repoName,
      category: project.category,
      liveUrl: liveUrl,
      inspectorUrl: inspectorUrl,
      githubUrl: `https://github.com/SaiVatsal/${repoName}`,
      status: 'SUCCESS'
    };
  } catch (err) {
    const errMsg = err.stderr ? err.stderr.toString() : err.message;
    console.error(`  ❌ Deployment notice for ${repoName}:`, errMsg.trim());
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
  console.log(`================================================================\n`);

  if (!VERCEL_TOKEN) {
    console.error('❌ Error: VERCEL_TOKEN not found in environment or vercel.token file!');
    process.exit(1);
  }

  const results = [];
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < allProjects.length; i++) {
    const res = await deployProject(allProjects[i], i, allProjects.length);
    results.push(res);
    if (res.status === 'SUCCESS') passed++;
    else failed++;

    // Small delay between deployments to prevent API rate limiting
    await sleep(800);
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
