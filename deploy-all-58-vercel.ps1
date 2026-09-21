# 58 Vercel Automated Deployment Script (PowerShell)
# Student: SaiVatsal (2500040224)

param (
    [string]$Token = $env:VERCEL_TOKEN
)

$RootDir = $PSScriptRoot

Write-Host @"
====================================================================
🚀 58 VERCEL AUTOMATED PROJECT DEPLOYER
Student: SaiVatsal (2500040224)
====================================================================
"@ -ForegroundColor Cyan

if (-not $Token) {
    Write-Host "ℹ️ Checking Vercel CLI Authentication..." -ForegroundColor Yellow
}

if ($Token) {
    $env:VERCEL_TOKEN = $Token
}

# Run the Node.js deployer
node (Join-Path $RootDir "deploy-all-58-vercel.js")
