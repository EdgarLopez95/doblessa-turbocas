// Recursos con variante WebP generada por scripts/prepare-images.mjs
export const WEBP = new Set([
  'laboratorio/banco-pruebas-turbocompresores.jpeg',
  'laboratorio/turbocompresores-reconstruidos.jpeg',
  'fap-cat/equipo-limpieza-filtros-particulas.jpeg',
  'fap-cat/equipo-diagnostico-limpieza-fap.jpeg',
  'fap-cat/filtro-particulas-automovil.jpg',
  'fap-cat/limpieza-filtro-particulas.png',
  'direccion-hidraulica/banco-bombas-hidraulicas.jpg',
  'direccion-hidraulica/banco-pruebas-direcciones-hidraulicas.jpg',
  'direccion-hidraulica/bomba-direccion-hidraulica.jpg',
  'catalogo/turbo-gt2052v-audi-v6-tdi.jpg',
  'catalogo/cartucho-chra-454231.jpg',
  'catalogo/cartucho-chra-708639.jpg',
  'catalogo/cartucho-chra-454135.jpg',
  'catalogo/junta-turbo-717858.jpg',
  'catalogo/junta-turbo-454232.jpg',
  'catalogo/junta-turbo-1900-100-332.jpg',
]);

export function webpOf(src: string): string | null {
  return WEBP.has(src) ? src.replace(/\.(png|jpe?g)$/i, '.webp') : null;
}
