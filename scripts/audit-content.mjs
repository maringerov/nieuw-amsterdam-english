import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const content = JSON.parse(readFileSync(join(root, 'content-en.json'), 'utf8'));

const EXPECTED_ORDER = [
  'home',
  'leeswijzer',
  'proloog',
  'ch1',
  'ch2',
  'ch3',
  'ch4',
  'ch5',
  'ch8',
  'ch6',
  'ch7',
  'epiloog',
  'bronnen',
  'dank',
];

const EXPECTED_BODY_CHARS = 77507;
const ASSETS = [
  'public/assets/nieuwamsterdam.png',
  'public/assets/01amsterdamAI.png',
  'public/assets/02euc.png',
  'public/assets/03agendanieuwamsterdam.png',
];

function extractLinks(markdown) {
  const links = [];
  const linkRe = /\[([^\]]*)\]\(([^)]+)\)/g;
  let m;
  while ((m = linkRe.exec(markdown)) !== null) {
    links.push(m[2]);
  }
  return links;
}

const sectionIds = content.sections.map((s) => s.id);
const bodyChars = content.sections.reduce((sum, s) => sum + s.bodyMarkdown.length, 0);
const allLinks = content.sections.flatMap((s) => extractLinks(s.bodyMarkdown));

let failed = false;

console.log('=== Content audit ===\n');

if (sectionIds.length !== 14) {
  console.error(`FAIL: expected 14 sections, got ${sectionIds.length}`);
  failed = true;
} else {
  console.log(`PASS: 14 sections`);
}

if (JSON.stringify(sectionIds) !== JSON.stringify(EXPECTED_ORDER)) {
  console.error('FAIL: section order mismatch');
  console.error('Expected:', EXPECTED_ORDER.join(', '));
  console.error('Actual:  ', sectionIds.join(', '));
  failed = true;
} else {
  console.log('PASS: section order exact');
}

if (bodyChars !== EXPECTED_BODY_CHARS) {
  console.warn(
    `WARN: body chars ${bodyChars} (meta says ${EXPECTED_BODY_CHARS}, diff ${bodyChars - EXPECTED_BODY_CHARS})`,
  );
} else {
  console.log(`PASS: body chars ${bodyChars}`);
}

for (const asset of ASSETS) {
  try {
    readFileSync(join(root, asset));
    console.log(`PASS: asset ${asset}`);
  } catch {
    console.error(`FAIL: missing asset ${asset}`);
    failed = true;
  }
}

const hotlinks = allLinks.filter((l) => l.includes('2sc.re') || /\.(png|jpg|gif|webp)/i.test(l) && l.startsWith('http'));
if (hotlinks.length > 0) {
  console.error('FAIL: hotlinked image URLs remain:', hotlinks);
  failed = true;
} else {
  console.log(`PASS: no hotlinked images (${allLinks.length} markdown links retained)`);
}

const localImages = content.sections
  .flatMap((s) => s.bodyMarkdown.match(/\/assets\/[^)\s]+/g) || []);
console.log(`INFO: local image refs: ${localImages.join(', ')}`);

console.log('\n=== Summary ===');
if (failed) {
  process.exit(1);
}
console.log('All critical checks passed.');
