// Todas las rutas internas pasan por aquí para funcionar bajo la base de GitHub Pages.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const SITE_ORIGIN = 'https://edgarlopez95.github.io';

/** Ruta interna con base: url('contacto/') → /doblessa-turbocas/contacto/ */
export function url(path = ''): string {
  return `${BASE}/${path.replace(/^\/+/, '')}`;
}

/** Recurso en public/images con base. */
export function img(path: string): string {
  return url(`images/${path}`);
}

/** URL absoluta (canonical, Open Graph, JSON-LD, sitemap). */
export function absolute(path = ''): string {
  return new URL(url(path), SITE_ORIGIN).href;
}
