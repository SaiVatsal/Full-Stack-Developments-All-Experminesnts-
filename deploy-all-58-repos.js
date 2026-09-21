/**
 * 58 GitHub Repositories Automated Creator & Pusher
 * Student: SaiVatsal (2500040224)
 *
 * This script automates:
 * 1. Creating 58 individual repositories on GitHub via the GitHub REST API
 * 2. Initializing git in each folder
 * 3. Committing and pushing each project to its dedicated GitHub repository
 *
 * Usage:
 *   $env:GITHUB_TOKEN = "your_personal_access_token"
 *   node deploy-all-58-repos.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');
const { allProjects } = require('./master-catalog.js');

const GITHUB_USERNAME = 'SaiVatsal';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

function makeGitHubApiRequest(endpoint, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.github.com${endpoint}`);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'User-Agent': 'NodeJS-Deploy-Script',
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ status: res.statusCode, data: parsed });
          } else if (res.statusCode === 422 && parsed.message && parsed.message.includes('already exists')) {
            // Repo already exists on GitHub
            resolve({ status: 422, alreadyExists: true, data: parsed });
          } else {
            reject(new Error(`GitHub API Error (${res.statusCode}): ${parsed.message || body}`));
          }
        } catch (e) {
          resolve({ status: res.statusCode, raw: body });
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function createAndPushProject(project, index, total) {
  const repoName = project.folder; // e.g. "02-food-delivery-system"
  const projectDir = path.join(__dirname, project.folder);
  const repoDescription = `${project.name} - Production Full-Stack Web App. Done By SaiVatsal (2500040224)`;

  console.log(`\n================================================================`);
  console.log(`[${index + 1}/${total}] 🚀 Processing: ${project.name}`);
  console.log(`Repository: ${GITHUB_USERNAME}/${repoName}`);
  console.log(`Directory: ${project.folder}`);
  console.log(`================================================================`);

  // 1. Create GitHub Repo via REST API
  try {
    console.log(`Creating GitHub repository "${repoName}"...`);
    const createRes = await makeGitHubApiRequest('/user/repos', 'POST', {
      name: repoName,
      description: repoDescription,
      private: false,
      has_issues: true,
      has_projects: true,
      has_wiki: true
    });

    if (createRes.alreadyExists) {
      console.log(`ℹ️ Repository "${repoName}" already exists on GitHub. Proceeding to push.`);
    } else {
      console.log(`✔ Repository created successfully on GitHub!`);
    }
  } catch (err) {
    console.warn(`⚠️ Note on repo creation: ${err.message}`);
  }

  // 2. Initialize Git and Push from Directory
  try {
    const gitDir = path.join(projectDir, '.git');
    const remoteUrl = `https://${GITHUB_TOKEN ? `${GITHUB_USERNAME}:${GITHUB_TOKEN}@` : ''}github.com/${GITHUB_USERNAME}/${repoName}.git`;

    if (!fs.existsSync(gitDir)) {
      execSync('git init', { cwd: projectDir, stdio: 'pipe' });
    }

    execSync('git add .', { cwd: projectDir, stdio: 'pipe' });
    try {
      execSync(`git commit -m "feat: ${project.name} Full-Stack Solution - Done By SaiVatsal 2500040224"`, {
        cwd: projectDir,
        stdio: 'pipe'
      });
    } catch (commitErr) {
      // Commit might be clean if already committed
    }

    execSync('git branch -M main', { cwd: projectDir, stdio: 'pipe' });

    // Update or add remote
    try {
      execSync(`git remote remove origin`, { cwd: projectDir, stdio: 'pipe' });
    } catch (e) {}

    execSync(`git remote add origin ${remoteUrl}`, { cwd: projectDir, stdio: 'pipe' });
    console.log(`Pushing code to https://github.com/${GITHUB_USERNAME}/${repoName}...`);
    execSync(`git push -u origin main --force`, { cwd: projectDir, stdio: 'inherit' });

    console.log(`✅ [SUCCESS] Deployed: https://github.com/${GITHUB_USERNAME}/${repoName}`);
    return true;
  } catch (pushErr) {
    console.error(`❌ [FAILED] Push failed for ${repoName}:`, pushErr.message);
    return false;
  }
}

async function main() {
  if (!GITHUB_TOKEN) {
    console.error(`
❌ ERROR: GitHub Personal Access Token not provided!

To run this automated deployment script:
1. Generate a GitHub Personal Access Token (Classic) with 'repo' scope at:
   https://github.com/settings/tokens

2. Set the token in your terminal:
   PowerShell:
     $env:GITHUB_TOKEN = "ghp_yourGeneratedTokenHere"
     node deploy-all-58-repos.js

   Bash:
     export GITHUB_TOKEN="ghp_yourGeneratedTokenHere"
     node deploy-all-58-repos.js
`);
    process.exit(1);
  }

  console.log(`================================================================`);
  console.log(`🌟 58 INDIVIDUAL GITHUB REPOSITORIES AUTOMATED DEPLOYER`);
  console.log(`Target GitHub User: ${GITHUB_USERNAME}`);
  console.log(`Total Projects: ${allProjects.length}`);
  console.log(`Student Attribution: Done By SaiVatsal 2500040224`);
  console.log(`================================================================`);

  let successCount = 0;
  for (let i = 0; i < allProjects.length; i++) {
    const success = await createAndPushProject(allProjects[i], i, allProjects.length);
    if (success) successCount++;
    // Small delay to respect GitHub API rate limits
    await new Promise(r => setTimeout(r, 1200));
  }

  console.log(`\n================================================================`);
  console.log(`🎉 DEPLOYMENT FINISHED: ${successCount}/${allProjects.length} Repositories Created & Pushed!`);
  console.log(`Check your GitHub profile: https://github.com/${GITHUB_USERNAME}?tab=repositories`);
  console.log(`================================================================`);
}

main();
