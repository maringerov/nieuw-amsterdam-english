export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function isDarkSection(id) {
  return id === 'proloog' || id === 'epiloog';
}

export function sectionLabel(id) {
  if (id === 'leeswijzer') return 'GUIDE';
  if (id === 'proloog') return 'BEGIN';
  if (id === 'epiloog') return 'CLOSING';
  return 'CHAPTER';
}

export function extractSubsections(bodyMarkdown) {
  return bodyMarkdown
    .split('\n')
    .filter((line) => line.startsWith('### '))
    .map((line) => line.replace(/^### /, '').trim());
}

export function splitBlocks(bodyMarkdown) {
  return bodyMarkdown.split(/\n\n+/).filter((block) => block.trim().length > 0);
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
}

export function mapImageSrc(src) {
  if (!src) return src;
  if (src.includes('01amsterdamAI.png')) return '/assets/01amsterdamAI.png';
  if (src.includes('02euc.png')) return '/assets/02euc.png';
  if (src.includes('03agendanieuwamsterdam.png')) return '/assets/03agendanieuwamsterdam.png';
  if (src.includes('nieuwamsterdam.png')) return '/assets/nieuwamsterdam.png';
  return src;
}
