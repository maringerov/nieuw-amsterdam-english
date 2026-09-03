/**
 * Resolve a public/ asset path for the configured Vite base (GitHub Pages subpath).
 * @param {string} path - e.g. "assets/nieuwamsterdam.png"
 */
export function assetUrl(path) {
  const normalized = path.replace(/^\//, '');
  const base = import.meta.env.BASE_URL;
  return `${base}${normalized}`;
}
