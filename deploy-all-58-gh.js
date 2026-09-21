/**
 * 58 GitHub Repositories Automated Creator & Pusher (Using GitHub CLI)
 * Student: SaiVatsal (2500040224)
 *
 * This script automates:
 * 1. Creating 58 individual public repositories on GitHub for each project
 * 2. Initializing git in each folder
 * 3. Committing and pushing each project to its dedicated GitHub repository
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { allProjects } = require('./master-catalog.js');

const GH_EXE = 'C:\\Program Files\\GitHub CLI\\gh.exe';
const GITHUB_USERNAME = 'SaiVatsal';
const rootDir = __dirname;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function deployProject(project, index, total) {
  const repoName = project.folder;
  const projectDir = path.join(rootDir, project.folder);
  const repoDescription = `${project.name} - Production Full-Stack Web App. Done By SaiVatsal (2500040224)`;

  console.log(`\n================================================================`);
  console.log(`[${index + 1}/${total}] 🚀 Deploying: ${project.name}`);
  console.log(`Repository: ${GITHUB_USERNAME}/${repoName}`);
  console.log(`Directory: ${project.folder}`);
  console.log(`================================================================`);

  // 1. Create GitHub Repo via gh CLI
  try {
    console.log(`Creating public repository "${GITHUB_USERNAME}/${repoName}"...`);
    execSync(`"${GH_EXE}" repo create "${GITHUB_USERNAME}/${repoName}" --public --description "${repoDescription.replace(/"/g, '\\"')}"`, {
      stdio: 'pipe'
    });
    console.log(`✔ Repository created successfully on GitHub!`);
  } catch (err) {
    const errMsg = err.stderr ? err.stderr.toString() : err.message;
    if (errMsg.includes('already exists') || errMsg.includes('Name already exists')) {
      console.log(`ℹ️ Repository "${repoName}" already exists on GitHub. Continuing.`);
    } else {
      console.warn(`⚠️ Repo creation notice: ${errMsg.trim()}`);
    }
  }

  // 2. Initialize and Push Project Directory
  try {
    const gitDir = path.join(projectDir, '.git');
    const gitignorePath = path.join(projectDir, '.gitignore');

    // Create .gitignore if missing
    if (!fs.existsSync(gitignorePath)) {
      fs.writeFileSync(gitignorePath, 'node_modules/\npackage-lock.json\n*.log\n.DS_Store\n');
    }

    if (!fs.existsSync(gitDir)) {
      execSync('git init', { cwd: projectDir, stdio: 'pipe' });
    }

    execSync('git add .', { cwd: projectDir, stdio: 'pipe' });

    try {
      execSync(`git commit -m "feat: ${project.name} Vercel Serverless Ready - Done By SaiVatsal 2500040224\n\nCo-Authored-By: Claude Code <noreply@anthropic.com>"`, {
        cwd: projectDir,
        stdio: 'pipe'
      });
    } catch (e) {
      // Commit clean if nothing changed
    }

    execSync('git branch -M main', { cwd: projectDir, stdio: 'pipe' });

    const remoteUrl = `https://github.com/${GITHUB_USERNAME}/${repoName}.git`;
    try {
      execSync('git remote remove origin', { cwd: projectDir, stdio: 'pipe' });
    } catch (e) {}

    execSync(`git remote add origin ${remoteUrl}`, { cwd: projectDir, stdio: 'pipe' });
    console.log(`Pushing code to ${remoteUrl}...`);
    execSync('git push -u origin main', { cwd: projectDir, stdio: 'inherit' });

    console.log(`✅ [SUCCESS] Deployed: https://github.com/${GITHUB_USERNAME}/${repoName}`);
    return { name: project.name, repo: repoName, url: `https://github.com/${GITHUB_USERNAME}/${repoName}`, status: 'SUCCESS' };
  } catch (pushErr) {
    const errText = pushErr.stderr ? pushErr.stderr.toString() : pushErr.message;
    console.error(`❌ [FAILED] Push failed for ${repoName}:`, errText);
    return { name: project.name, repo: repoName, error: errText, status: 'FAILED' };
  }
}

async function run() {
  console.log(`================================================================`);
  console.log(`🌟 58 INDIVIDUAL GITHUB REPOSITORIES AUTOMATED DEPLOYER`);
  console.log(`Target GitHub Account: https://github.com/${GITHUB_USERNAME}`);
  console.log(`Total Projects: ${allProjects.length}`);
  console.log(`Student Attribution: Done By SaiVatsal 2500040224`);
  console.log(`================================================================`);

  const results = [];
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < allProjects.length; i++) {
    const res = await deployProject(allProjects[i], i, allProjects.length);
    results.push(res);
    if (res.status === 'SUCCESS') passed++;
    else failed++;

    // Small delay to prevent API rate limiting
    await sleep(800);
  }

  console.log(`\n================================================================`);
  console.log(`🏁 AUTOMATED DEPLOYMENT COMPLETE: ${passed}/${allProjects.length} Repositories Pushed!`);
  console.log(`Explore your repositories at: https://github.com/${GITHUB_USERNAME}?tab=repositories`);
  console.log(`================================================================`);

  // Save report
  fs.writeFileSync(
    path.join(rootDir, 'deployment-report.json'),
    JSON.stringify({ date: new Date().toISOString(), student: 'SaiVatsal', collegeId: '2500040224', total: allProjects.length, passed, failed, results }, null, 2)
  );
}

run();
