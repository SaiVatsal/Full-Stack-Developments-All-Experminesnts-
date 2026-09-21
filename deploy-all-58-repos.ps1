# 58 GitHub Repositories Automated Creator & Pusher (PowerShell & GitHub CLI / REST API)
# Student: SaiVatsal (2500040224)

param (
    [string]$Token = $env:GITHUB_TOKEN
)

$Username = "SaiVatsal"
$RootDir = $PSScriptRoot

if (-not $Token -and -not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host @"
====================================================================
❌ GitHub Authentication Needed!
====================================================================
You can run this in either of 2 easy ways:

METHOD 1: Using GitHub CLI (Recommended - No token needed):
1. Install GitHub CLI:
   winget install --id GitHub.cli
2. Authenticate:
   gh auth login
3. Run this script:
   .\deploy-all-58-repos.ps1

METHOD 2: Using GitHub Personal Access Token (PAT):
1. Get a token from: https://github.com/settings/tokens (select 'repo' scope)
2. Run:
   .\deploy-all-58-repos.ps1 -Token "ghp_yourTokenHere"
====================================================================
"@ -ForegroundColor Yellow
    exit 1
}

$catalog = Get-Content (Join-Path $RootDir "master-catalog.js") -Raw
# Or read subfolders
$folders = Get-ChildItem -Directory -Path $RootDir | Where-Object { $_.Name -match '^\d{2}-' } | Sort-Object Name

Write-Host "Found $($folders.Count) project folders to deploy to individual GitHub repositories.`n" -ForegroundColor Cyan

$i = 1
foreach ($folder in $folders) {
    $repoName = $folder.Name
    $folderPath = $folder.FullName
    Write-Host "[$i/$($folders.Count)] Processing $repoName..." -ForegroundColor Green

    # Check if using gh CLI
    if (Get-Command gh -ErrorAction SilentlyContinue) {
        Write-Host "Creating & Pushing via GitHub CLI..."
        Push-Location $folderPath
        if (-not (Test-Path ".git")) {
            git init | Out-Null
        }
        git add . | Out-Null
        git commit -m "feat: $repoName Full-Stack Solution - Done By SaiVatsal 2500040224" --quiet
        git branch -M main | Out-Null

        gh repo create "$Username/$repoName" --public --source=. --remote=origin --push --confirm
        Pop-Location
    } elseif ($Token) {
        # Using GitHub REST API
        $headers = @{
            "Authorization" = "token $Token"
            "Accept" = "application/vnd.github.v3+json"
            "User-Agent" = "PowerShell-Deployer"
        }
        $body = @{
            name = $repoName
            description = "$repoName - Production Full-Stack Application. Done By SaiVatsal 2500040224"
            private = $false
        } | ConvertTo-Json

        try {
            Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body | Out-Null
            Write-Host "✔ Created repo $repoName on GitHub"
        } catch {
            Write-Host "ℹ️ Repo $repoName already exists or created."
        }

        Push-Location $folderPath
        if (-not (Test-Path ".git")) {
            git init | Out-Null
        }
        git add . | Out-Null
        git commit -m "feat: $repoName Full-Stack Solution - Done By SaiVatsal 2500040224" --quiet
        git branch -M main | Out-Null

        try { git remote remove origin | Out-Null } catch {}
        $remoteUrl = "https://${Username}:${Token}@github.com/${Username}/${repoName}.git"
        git remote add origin $remoteUrl
        git push -u origin main --force
        Pop-Location
    }

    $i++
    Start-Sleep -Milliseconds 800
}

Write-Host "`n🎉 All 58 project repositories have been processed and pushed to GitHub!" -ForegroundColor Green
