/**
 * 58 GitHub Repositories Syncer & Pusher
 * Pushes updated Vercel-ready files to the existing 58 repositories
 * Student: SaiVatsal (2500040224)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { allProjects } = require('./master-catalog.js');

const rootDir = __dirname;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function syncProject(project, index, total) {
  const repoName = project.folder;
  const projectDir = path.join(rootDir, project.folder);

  console.log(`[${index + 1}/${total}] Syncing: ${project.name} (${repoName})...`);

  try {
    execSync('git add .', { cwd: projectDir, stdio: 'pipe' });

    try {
      execSync(`git commit -m "feat: Configure Vercel serverless integration and database sync - Done By SaiVatsal 2500040224\n\nCo-Authored-By: Claude Code <noreply@anthropic.com>"`, {
        cwd: projectDir,
        stdio: 'pipe'
      });
      console.log(`  ✔ Committed Vercel configuration`);
    } catch (e) {
      // Nothing to commit
    }

    execSync('git push origin main', { cwd: projectDir, stdio: 'pipe' });
    console.log(`  ✅ Pushed to GitHub: https://github.com/SaiVatsal/${repoName}`);
    return { name: project.name, repo: repoName, status: 'SUCCESS' };
  } catch (err) {
    const errMsg = err.stderr ? err.stderr.toString() : err.message;
    console.error(`  ❌ Error syncing ${repoName}:`, errMsg.trim());
    return { name: project.name, repo: repoName, error: errMsg, status: 'FAILED' };
  }
}

async function run() {
  console.log(`================================================================`);
  console.log(`🚀 SYNCING 58 REPOSITORIES WITH VERCEL SERVERLESS INTEGRATION`);
  console.log(`Student: SaiVatsal (2500040224)`);
  console.log(`================================================================\n`);

  let passed = 0;
  let failed = 0;

  for (let i = 0; i < allProjects.length; i++) {
    const res = await syncProject(allProjects[i], i, allProjects.length);
    if (res.status === 'SUCCESS') passed++;
    else failed++;
    await sleep(400);
  }

  console.log(`\n================================================================`);
  console.log(`🏁 SYNC COMPLETE: ${passed}/${allProjects.length} Repositories Updated & Synced!`);
  console.log(`================================================================`);
}

run();
