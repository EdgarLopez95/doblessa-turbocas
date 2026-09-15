// Copia a public/images/ solo los recursos usados y genera variantes WebP.
// Lectura únicamente sobre ../Recursos (nunca se modifica).
import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const SOURCE = join(import.meta.dirname, '..', '..', 'Recursos', 'recursos-web', 'imagenes');
const TARGET = join(import.meta.dirname, '..', 'public', 'images');

// [ruta relativa, ancho máximo WebP | null para copiar sin variante]
const IMAGES = [
  ['marca/logo-turbocas.png', null],
  ['marca/icono-turbocas.png', null],
  ['marca/marcas-turbocompresores.svg', null],
  ['laboratorio/banco-pruebas-turbocompresores.jpeg', 300],
  ['laboratorio/turbocompresores-reconstruidos.jpeg', 300],
  ['fap-cat/equipo-limpieza-filtros-particulas.jpeg', 300],
  ['fap-cat/equipo-diagnostico-limpieza-fap.jpeg', 708],
  ['fap-cat/filtro-particulas-automovil.jpg', 1264],
  ['fap-cat/limpieza-filtro-particulas.png', 1100],
  ['direccion-hidraulica/banco-bombas-hidraulicas.jpg', 300],
  ['direccion-hidraulica/banco-pruebas-direcciones-hidraulicas.jpg', 1153],
  ['direccion-hidraulica/bomba-direccion-hidraulica.jpg', 512],
  ['catalogo/turbo-gt2052v-audi-v6-tdi.jpg', 800],
  ['catalogo/cartucho-chra-454231.jpg', 800],
  ['catalogo/cartucho-chra-708639.jpg', 450],
  ['catalogo/cartucho-chra-454135.jpg', 150],
  ['catalogo/junta-turbo-717858.jpg', 640],
  ['catalogo/junta-turbo-454232.jpg', 500],
  ['catalogo/junta-turbo-1900-100-332.jpg', 452],
  ['ui/icono-whatsapp.png', null],
];

// La pieza ocupa una zona mínima del original: se recorta alrededor de ella.
const CROPS = {
  'catalogo/junta-turbo-1900-100-332.jpg': { left: 110, top: 120, width: 230, height: 200 },
};

for (const [file, width] of IMAGES) {
  const from = join(SOURCE, file);
  const to = join(TARGET, file);
  await mkdir(dirname(to), { recursive: true });
  const crop = CROPS[file];
  if (crop) {
    await sharp(from).extract(crop).resize({ width }).jpeg({ quality: 85 }).toFile(to);
  } else {
    await copyFile(from, to);
  }
  if (width) {
    const webp = to.replace(/\.(png|jpe?g)$/i, '.webp');
    const pipeline = crop ? sharp(from).extract(crop) : sharp(from);
    await pipeline.resize({ width, withoutEnlargement: !crop }).webp({ quality: 80 }).toFile(webp);
  }
  console.log('ok', file);
}
