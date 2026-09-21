/**
 * Master Showcase HTML Generator
 * Student: SaiVatsal (2500040224)
 */

const fs = require('fs');
const path = require('path');
const { allProjects } = require('./master-catalog.js');

const reportPath = path.join(__dirname, 'vercel-deployment-report.json');
let deploymentsMap = {};
if (fs.existsSync(reportPath)) {
  const rep = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  if (rep.deployments) {
    rep.deployments.forEach(d => {
      deploymentsMap[d.folder] = d.liveUrl;
    });
  }
}

const categories = [...new Set(allProjects.map(p => p.category))];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>58 Full-Stack Web Applications Showcase | Done By SaiVatsal (2500040224)</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0b0f19;
      --surface: #111827;
      --surface-2: #1e293b;
      --surface-hover: #26334d;
      --border: #334155;
      --border-subtle: #1e293b;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --primary: #3b82f6;
      --primary-glow: rgba(59, 130, 246, 0.25);
      --accent: #8b5cf6;
      --success: #10b981;
      --warning: #f59e0b;
      --danger: #ef4444;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--bg);
      color: var(--text);
      min-height: 100vh;
      line-height: 1.6;
      background-image:
        radial-gradient(circle at 15% 15%, rgba(59, 130, 246, 0.12) 0%, transparent 40%),
        radial-gradient(circle at 85% 85%, rgba(139, 92, 246, 0.12) 0%, transparent 40%);
      background-attachment: fixed;
    }

    .container { max-width: 1400px; margin: 0 auto; padding: 2rem 1.5rem; }

    /* Header & Hero */
    .hero {
      text-align: center;
      padding: 3rem 1rem 2rem;
      position: relative;
    }
    .badge-student {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1.25rem;
      border-radius: 9999px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15));
      border: 1px solid rgba(59, 130, 246, 0.3);
      color: #93c5fd;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    .hero h1 {
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero p {
      font-size: 1.125rem;
      color: var(--text-muted);
      max-width: 760px;
      margin: 0 auto 2rem;
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.25rem;
      margin-bottom: 3rem;
    }
    .stat-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .stat-card:hover {
      transform: translateY(-2px);
      border-color: var(--primary);
    }
    .stat-card .val {
      font-size: 2.25rem;
      font-weight: 800;
      color: #ffffff;
      font-family: 'JetBrains Mono', monospace;
      margin-bottom: 0.25rem;
    }
    .stat-card .lbl {
      color: var(--text-muted);
      font-size: 0.875rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* Search & Filter Bar */
    .filter-section {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.5rem;
      margin-bottom: 2.5rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
    }
    .search-box {
      position: relative;
      margin-bottom: 1.25rem;
    }
    .search-box i {
      position: absolute;
      left: 1.25rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      font-size: 1.1rem;
    }
    .search-box input {
      width: 100%;
      padding: 0.875rem 1.25rem 0.875rem 3.25rem;
      border-radius: 12px;
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--text);
      font-size: 1rem;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .search-box input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px var(--primary-glow);
    }
    .category-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .pill-btn {
      background: var(--surface-2);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 0.4rem 0.9rem;
      border-radius: 9999px;
      font-size: 0.813rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .pill-btn:hover {
      background: var(--surface-hover);
      color: var(--text);
      border-color: #64748b;
    }
    .pill-btn.active {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
      box-shadow: 0 2px 8px var(--primary-glow);
    }

    /* Projects Grid */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 1.5rem;
    }
    .project-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .project-card:hover {
      transform: translateY(-4px);
      border-color: #475569;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.85rem;
    }
    .card-id {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      font-weight: 700;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.1);
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
      border: 1px solid rgba(56, 189, 248, 0.2);
    }
    .card-cat {
      font-size: 0.75rem;
      font-weight: 600;
      color: #c084fc;
      background: rgba(192, 132, 252, 0.1);
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
      border: 1px solid rgba(192, 132, 252, 0.2);
    }
    .project-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }
    .project-desc {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin-bottom: 1.25rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.5;
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1.25rem;
    }
    .tech-tag {
      font-size: 0.72rem;
      font-family: 'JetBrains Mono', monospace;
      background: var(--bg);
      color: #94a3b8;
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
      border: 1px solid var(--border-subtle);
    }
    .card-actions {
      display: flex;
      gap: 0.75rem;
      border-top: 1px solid var(--border-subtle);
      padding-top: 1rem;
    }
    .btn {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.6rem 0.8rem;
      border-radius: 8px;
      font-size: 0.813rem;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-primary {
      background: var(--primary);
      color: #ffffff;
      border: none;
    }
    .btn-primary:hover {
      background: #2563eb;
    }
    .btn-secondary {
      background: var(--surface-2);
      color: var(--text);
      border: 1px solid var(--border);
    }
    .btn-secondary:hover {
      background: var(--surface-hover);
      border-color: #64748b;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 3rem 1rem 2rem;
      color: var(--text-muted);
      font-size: 0.875rem;
      border-top: 1px solid var(--border-subtle);
      margin-top: 4rem;
    }
    footer a { color: #60a5fa; text-decoration: none; }
    footer a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .projects-grid { grid-template-columns: 1fr; }
      .hero h1 { font-size: 2rem; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Hero -->
    <header class="hero">
      <div class="badge-student">
        <i class="fa-solid fa-graduation-cap"></i>
        <span>Done By SaiVatsal (2500040224)</span>
      </div>
      <h1>58 Full-Stack Web Applications</h1>
      <p>
        A comprehensive portfolio of 58 production-grade web applications with dedicated REST APIs, reactive glassmorphic UI, responsive layouts, automated test suites, and live Vercel Serverless deployments.
      </p>
    </header>

    <!-- Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="val">58 / 58</div>
        <div class="lbl">Projects Completed</div>
      </div>
      <div class="stat-card">
        <div class="val">100%</div>
        <div class="lbl">Automated Test Pass Rate</div>
      </div>
      <div class="stat-card">
        <div class="val">58</div>
        <div class="lbl">Dedicated GitHub Repos</div>
      </div>
      <div class="stat-card">
        <div class="val">58 / 58</div>
        <div class="lbl">Live on Vercel</div>
      </div>
    </div>

    <!-- Filter & Search Section -->
    <div class="filter-section">
      <div class="search-box">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" id="searchInput" placeholder="Search by project name, description, tech stack, or keyword...">
      </div>
      <div class="category-pills" id="categoryPills">
        <button class="pill-btn active" data-cat="all">All Categories (58)</button>
        ${categories.map(cat => `<button class="pill-btn" data-cat="${cat}">${cat}</button>`).join('\n        ')}
      </div>
    </div>

    <!-- Project Cards Grid -->
    <div class="projects-grid" id="projectsGrid">
      ${allProjects.map((p) => {
        const liveVercelUrl = deploymentsMap[p.folder] || `./${p.folder}/public/index.html`;
        return `
      <div class="project-card" data-cat="${p.category}" data-search="${p.name.toLowerCase()} ${p.description.toLowerCase()} ${p.category.toLowerCase()} ${p.folder.toLowerCase()}">
        <div>
          <div class="card-header">
            <span class="card-id">#${String(p.id).padStart(2, '0')}</span>
            <span class="card-cat">${p.category}</span>
          </div>
          <h3 class="project-title">${p.name}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="tech-stack">
            <span class="tech-tag">Express.js</span>
            <span class="tech-tag">REST API</span>
            <span class="tech-tag">Vercel Serverless</span>
            <span class="tech-tag">${p.fields.length} Fields</span>
          </div>
        </div>
        <div class="card-actions">
          <a href="${liveVercelUrl}" class="btn btn-primary" target="_blank">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Live App
          </a>
          <a href="https://github.com/SaiVatsal/${p.folder}" class="btn btn-secondary" target="_blank">
            <i class="fa-brands fa-github"></i> GitHub
          </a>
        </div>
      </div>`;
      }).join('\n')}
    </div>

    <!-- Footer -->
    <footer>
      <p><strong>58 Full-Stack Web Development Projects</strong> • Designed & Engineered by <a href="https://github.com/SaiVatsal" target="_blank">SaiVatsal (2500040224)</a></p>
      <p style="margin-top: 0.5rem; font-size: 0.8rem; color: #64748b;">Master Repository: <a href="https://github.com/SaiVatsal/Full-Stack-Developments-All-Experminesnts-" target="_blank">github.com/SaiVatsal/Full-Stack-Developments-All-Experminesnts-</a></p>
    </footer>
  </div>

  <script>
    const searchInput = document.getElementById('searchInput');
    const pills = document.querySelectorAll('.pill-btn');
    const cards = document.querySelectorAll('.project-card');

    let currentCat = 'all';
    let searchQuery = '';

    function filterCards() {
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-cat');
        const cardSearch = card.getAttribute('data-search');

        const matchesCat = (currentCat === 'all' || cardCat === currentCat);
        const matchesSearch = (!searchQuery || cardSearch.includes(searchQuery));

        if (matchesCat && matchesSearch) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterCards();
    });

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCat = pill.getAttribute('data-cat');
        filterCards();
      });
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('✔ Master Showcase index.html generated successfully with direct Vercel live URLs!');
