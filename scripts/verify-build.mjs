import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('[FAIL] dist/ directory not found. Run npm run build first.');
  process.exit(1);
}

function getFiles(dir, ext) {
  let results = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...getFiles(full, ext));
    } else if (full.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = getFiles(distDir, '.html');
const cssFiles = getFiles(path.join(distDir, '_astro'), '.css');

console.log(`[QA] Verifying build output: ${htmlFiles.length} HTML files, ${cssFiles.length} CSS files.`);

let errors = 0;

function reportError(file, msg) {
  const rel = path.relative(distDir, file).replace(/\\/g, '/');
  console.error(`  [ERROR] ${rel}: ${msg}`);
  errors++;
}

// 1. Audit HTML files
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');

  // H1 count
  const h1Matches = content.match(/<h1(\s|>)/gi) || [];
  if (h1Matches.length !== 1) {
    reportError(file, `expected exactly 1 <h1>, found ${h1Matches.length}`);
  }

  // No href="#"
  if (/href=["']\s*#\s*["']/i.test(content)) {
    reportError(file, 'contains placeholder href="#"');
  }

  // No Google Fonts
  if (content.includes('fonts.googleapis.com') || content.includes('fonts.gstatic.com')) {
    reportError(file, 'contains external Google Fonts references');
  }

  // Robots noindex
  if (!/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex[^"']*["']/i.test(content)) {
    reportError(file, 'missing <meta name="robots" content="noindex, follow" />');
  }

  // No info@turbocas.com
  if (content.toLowerCase().includes('info@turbocas.com')) {
    reportError(file, 'contains unauthorized invented email info@turbocas.com');
  }

  // Prohibited promises (1 año, 48 h, envío gratis)
  if (/\b1\s+año\b/i.test(content)) {
    reportError(file, 'contains unconfirmed guarantee promise "1 año"');
  }
  if (/\b48\s*h\b/i.test(content)) {
    reportError(file, 'contains unconfirmed delivery promise "48 h"');
  }
  if (/env[ií]o\s+gratis/i.test(content)) {
    reportError(file, 'contains unconfirmed shipping promise "envío gratis"');
  }

  // Internal links and anchor targets
  const linkMatches = content.matchAll(/<a[^>]+href=["']([^"']+)["']/gi);
  for (const m of linkMatches) {
    const href = m[1];
    if (/^(https?:\/\/|tel:|mailto:|javascript:)/i.test(href)) continue;

    if (href.startsWith('#')) {
      const id = href.slice(1);
      const hasId = content.includes(`id="${id}"`) || content.includes(`id='${id}'`);
      if (!hasId) {
        reportError(file, `in-page anchor #${id} does not exist in the DOM`);
      }
      continue;
    }

    if (!href.startsWith('/doblessa-turbocas')) {
      reportError(file, `internal link does not start with /doblessa-turbocas: "${href}"`);
    } else {
      // Validate target file and anchor
      const [pathAndQuery, hash] = href.split('#');
      const cleanPath = pathAndQuery.split('?')[0].replace('/doblessa-turbocas', '').replace(/^\//, '');
      const targetFile = path.join(distDir, cleanPath, cleanPath.endsWith('.html') ? '' : 'index.html');
      if (!fs.existsSync(targetFile)) {
        reportError(file, `target file does not exist for link "${href}" (checked: ${targetFile})`);
      } else if (hash) {
        const targetContent = fs.readFileSync(targetFile, 'utf8');
        const hasHashId = targetContent.includes(`id="${hash}"`) || targetContent.includes(`id='${hash}'`);
        if (!hasHashId) {
          reportError(file, `anchor #${hash} in link "${href}" does not exist in target file`);
        }
      }
    }
  }
}

// 2. Specific check: Presence of exact closing text in HelpfulDataPanel pages
const requiredPanelPages = [
  'contacto/index.html',
  'reconstruccion-turbos/index.html',
  'limpieza-fap-catalizador/index.html',
  'direcciones-hidraulicas/index.html',
];

for (const relPage of requiredPanelPages) {
  const filePath = path.join(distDir, relPage);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('Con lo que tengas a mano empezamos.')) {
      reportError(filePath, 'missing exact closing text "Con lo que tengas a mano empezamos."');
    }
  } else {
    reportError(filePath, 'required page not found');
  }
}

// 3. Audit CSS files
for (const file of cssFiles) {
  const content = fs.readFileSync(file, 'utf8');

  if (content.includes('fonts.googleapis.com') || content.includes('fonts.gstatic.com')) {
    reportError(file, 'CSS contains external Google Fonts link');
  }

  if (content.toLowerCase().includes('info@turbocas.com')) {
    reportError(file, 'CSS contains info@turbocas.com');
  }

  // Check that @font-face points to /doblessa-turbocas/fonts/
  const fontFaceMatches = content.match(/@font-face\s*\{[^}]+\}/gi) || [];
  for (const ff of fontFaceMatches) {
    const urlMatches = Array.from(ff.matchAll(/url\(([^)]+)\)/gi));
    for (const u of urlMatches) {
      const urlVal = u[1].replace(/['"]/g, '').trim();
      if (!urlVal.startsWith('/doblessa-turbocas/fonts/')) {
        reportError(file, `@font-face src does not point to /doblessa-turbocas/fonts/: "${urlVal}"`);
      }
    }
  }
}

if (errors > 0) {
  console.error(`\n[FAIL] Verification finished with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\n[PASS] All verification checks passed with 0 errors.');
  process.exit(0);
}
