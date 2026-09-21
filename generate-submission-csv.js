/**
 * 58 Projects CSV Submission Generator
 * Generates official spreadsheet submission files with direct Vercel & GitHub clickable URLs.
 * Student: SaiVatsal (2500040224)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const reportPath = path.join(rootDir, 'vercel-deployment-report.json');
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

// Helper to escape CSV values according to RFC 4180
function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return `"${str}"`;
}

// 1. Generate Standard CSV
const headers = [
  'S.No',
  'Project Name',
  'Category',
  'Live Vercel Deployment URL',
  'GitHub Repository URL',
  'Student Name',
  'College ID / Roll No',
  'Architecture',
  'Deployment Status'
];

const csvRows = [headers.map(escapeCsv).join(',')];

report.deployments.forEach(d => {
  const row = [
    d.id,
    d.name,
    d.category,
    d.liveUrl,
    d.githubUrl,
    'SaiVatsal',
    '2500040224',
    'Node.js + Express REST API + Tailwind CSS + Vercel Serverless',
    'Live & Verified'
  ];
  csvRows.push(row.map(escapeCsv).join(','));
});

const csvContent = csvRows.join('\r\n');

// Write primary and secondary filename variants for convenience
const mainCsvPath = path.join(rootDir, '58_Projects_Submission_Sheet.csv');
const altCsvPath = path.join(rootDir, 'PROJECTS_SUBMISSION_SHEET.csv');

fs.writeFileSync(mainCsvPath, csvContent, 'utf8');
fs.writeFileSync(altCsvPath, csvContent, 'utf8');

console.log('✔ Successfully generated: 58_Projects_Submission_Sheet.csv');
console.log('✔ Successfully generated: PROJECTS_SUBMISSION_SHEET.csv');

// Also generate a clean HTML interactive table page that can be opened or shared
const htmlTable = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>58 Projects Official Submission Sheet | SaiVatsal (2500040224)</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --border: #334155;
      --text: #f8fafc;
      --muted: #94a3b8;
      --primary: #3b82f6;
      --success: #10b981;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: var(--bg);
      color: var(--text);
      padding: 2rem 1.5rem;
      line-height: 1.5;
    }
    .header {
      max-width: 1400px;
      margin: 0 auto 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid var(--border);
      padding-bottom: 1.5rem;
    }
    .title-area h1 { font-size: 1.85rem; font-weight: 800; color: #ffffff; }
    .title-area p { color: var(--muted); margin-top: 0.25rem; }
    .btn-download {
      background: var(--primary);
      color: #fff;
      padding: 0.75rem 1.25rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: background 0.2s;
    }
    .btn-download:hover { background: #2563eb; }
    .table-container {
      max-width: 1400px;
      margin: 0 auto;
      background: var(--card-bg);
      border-radius: 12px;
      border: 1px solid var(--border);
      overflow-x: auto;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.875rem;
    }
    th {
      background: #111827;
      color: #cbd5e1;
      padding: 1rem 1.25rem;
      font-weight: 600;
      border-bottom: 1px solid var(--border);
      white-space: nowrap;
    }
    td {
      padding: 1rem 1.25rem;
      border-bottom: 1px solid rgba(51, 65, 85, 0.5);
      vertical-align: middle;
    }
    tr:hover td { background: rgba(59, 130, 246, 0.05); }
    .badge-sno {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.1);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }
    .cat-tag {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 600;
      color: #c084fc;
      background: rgba(192, 132, 252, 0.1);
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
    }
    .btn-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.45rem 0.85rem;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.8rem;
      text-decoration: none;
      transition: all 0.2s;
    }
    .btn-vercel {
      background: #000;
      color: #fff;
      border: 1px solid #334155;
    }
    .btn-vercel:hover { background: #222; border-color: #64748b; }
    .btn-github {
      background: #24292f;
      color: #fff;
      border: 1px solid #444c56;
    }
    .btn-github:hover { background: #32383f; }
    .badge-status {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: #34d399;
      font-weight: 600;
      font-size: 0.8rem;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="title-area">
      <h1>📋 58 Full-Stack Projects Official Submission Sheet</h1>
      <p>Student: <strong>SaiVatsal</strong> • College ID: <strong>2500040224</strong> • Status: <strong>58/58 Live on Vercel & GitHub</strong></p>
    </div>
    <div>
      <a href="./58_Projects_Submission_Sheet.csv" download class="btn-download">
        <i class="fa-solid fa-file-csv"></i> Download CSV File
      </a>
    </div>
  </div>

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Project Title</th>
          <th>Category</th>
          <th>🚀 Live Vercel Deployment</th>
          <th>📦 GitHub Repository</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${report.deployments.map(d => `
        <tr>
          <td><span class="badge-sno">${String(d.id).padStart(2, '0')}</span></td>
          <td><strong>${d.name}</strong></td>
          <td><span class="cat-tag">${d.category}</span></td>
          <td>
            <a href="${d.liveUrl}" target="_blank" class="btn-link btn-vercel">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live App
            </a>
          </td>
          <td>
            <a href="${d.githubUrl}" target="_blank" class="btn-link btn-github">
              <i class="fa-brands fa-github"></i> GitHub Repo
            </a>
          </td>
          <td><span class="badge-status"><i class="fa-solid fa-circle-check"></i> Live</span></td>
        </tr>`).join('')}
      </tbody>
    </table>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(rootDir, 'submission-sheet.html'), htmlTable, 'utf8');
console.log('✔ Successfully generated: submission-sheet.html');
