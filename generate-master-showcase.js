/**
 * Master Showcase HTML Generator
 * Student: SaiVatsal (2500040224)
 */

const fs = require('fs');
const path = require('path');
const { allProjects } = require('./master-catalog.js');

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
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15));
      border: 1px solid rgba(59, 130, 246, 0.3);
      padding: 0.4rem 1rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 600;
      color: #60a5fa;
      margin-bottom: 1.25rem;
      box-shadow: 0 0 20px var(--primary-glow);
    }
    .hero h1 {
      font-size: 2.75rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      margin-bottom: 0.75rem;
      background: linear-gradient(135deg, #ffffff 30%, #94a3b8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero p {
      color: var(--text-muted);
      font-size: 1.125rem;
      max-width: 750px;
      margin: 0 auto 1.5rem;
    }

    /* Stats Ribbon */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2.5rem;
    }
    .stat-card {
      background: var(--surface);
      border: 1px solid var(--border-subtle);
      padding: 1.25rem;
      border-radius: 12px;
      text-align: center;
      transition: all 0.2s ease;
    }
    .stat-card:hover {
      border-color: var(--border);
      transform: translateY(-2px);
    }
    .stat-card .val {
      font-size: 1.85rem;
      font-weight: 700;
      color: #60a5fa;
      font-family: 'JetBrains Mono', monospace;
    }
    .stat-card .lbl {
      font-size: 0.813rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 0.25rem;
    }

    /* Search & Filter Bar */
    .filter-section {
      background: var(--surface);
      border: 1px solid var(--border-subtle);
      border-radius: 16px;
      padding: 1.25rem;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .search-box {
      position: relative;
      width: 100%;
    }
    .search-box i {
      position: absolute;
      left: 1.1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
    }
    .search-box input {
      width: 100%;
      padding: 0.85rem 1rem 0.85rem 2.8rem;
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: 10px;
      color: var(--text);
      font-size: 0.95rem;
      outline: none;
      transition: border-color 0.2s ease;
    }
    .search-box input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 2px var(--primary-glow);
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
      padding: 0.4rem 0.85rem;
      border-radius: 8px;
      font-size: 0.813rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .pill-btn:hover, .pill-btn.active {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    /* Projects Grid */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: 1.5rem;
    }
    .project-card {
      background: var(--surface);
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.25s ease;
      position: relative;
    }
    .project-card:hover {
      border-color: var(--primary);
      transform: translateY(-4px);
      box-shadow: 0 12px 30px -10px rgba(0,0,0,0.5), 0 0 20px var(--primary-glow);
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.75rem;
    }
    .card-id {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      font-weight: 600;
      color: #93c5fd;
      background: rgba(59, 130, 246, 0.12);
      padding: 0.2rem 0.5rem;
      border-radius: 6px;
    }
    .card-cat {
      font-size: 0.75rem;
      color: var(--text-muted);
      background: var(--surface-2);
      padding: 0.2rem 0.6rem;
      border-radius: 6px;
    }
    .project-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.5rem;
    }
    .project-desc {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin-bottom: 1.25rem;
      line-height: 1.5;
      flex-grow: 1;
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1.25rem;
    }
    .tech-tag {
      font-size: 0.7rem;
      font-family: 'JetBrains Mono', monospace;
      color: #cbd5e1;
      background: var(--surface-2);
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
    <!-- Hero Header -->
    <header class="hero">
      <div class="badge-student">
        <i class="fa-solid fa-graduation-cap"></i>
        <span>Done By SaiVatsal • Roll / College ID: 2500040224</span>
      </div>
      <h1>58 Full-Stack Applications Portfolio</h1>
      <p>Production-Grade Full-Stack Solutions featuring RESTful APIs, Dynamic Glassmorphic Frontends, In-Memory/Persistent Database Engines, and Vercel Serverless Architecture.</p>
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
        <div class="val">Vercel Ready</div>
        <div class="lbl">Serverless Deployment</div>
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
      ${allProjects.map((p, idx) => `
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
            <span class="tech-tag">${p.fields.length} Data Fields</span>
          </div>
        </div>
        <div class="card-actions">
          <a href="./${p.folder}/public/index.html" class="btn btn-primary" target="_blank">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Open App
          </a>
          <a href="https://github.com/SaiVatsal/${p.folder}" class="btn btn-secondary" target="_blank">
            <i class="fa-brands fa-github"></i> GitHub
          </a>
        </div>
      </div>`).join('\n')}
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
console.log('✔ Master Showcase index.html generated successfully!');
