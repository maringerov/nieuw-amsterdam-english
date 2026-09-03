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

import { assetUrl } from './assets.js';

export function mapImageSrc(src) {
  if (!src) return src;
  if (/^https?:\/\//i.test(src) || src.startsWith('mailto:')) return src;

  const path = src.startsWith('/') ? src.slice(1) : src;
  if (path.startsWith('assets/')) {
    return assetUrl(path);
  }

  return src;
}
