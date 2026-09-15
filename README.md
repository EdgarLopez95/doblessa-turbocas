# Doblessa — Turbocas

Mockup estático del rediseño de Turbocas. Este repositorio contiene únicamente la implementación; la investigación y los recursos aprobados están en la carpeta madre `01 turbocas/Recursos/`.

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

El sitio se publica automáticamente en GitHub Pages al hacer push a `main`.

## Estructura

- `src/pages/`: una ruta por pantalla, más `sitemap.xml` y `robots.txt` generados.
- `src/components/`: header, footer, cards, proceso, galería, FAQ, formulario demostrativo, catálogo…
- `src/data/site.ts`: datos de negocio, servicios y navegación. `src/lib/url.ts` construye todas las rutas bajo la base `/doblessa-turbocas`.
- `design/`: brief, dirección visual y críticas de diseño (las capturas de `design/qa/` no se versionan).

## Imágenes

`node scripts/prepare-images.mjs` copia desde `../Recursos/recursos-web/imagenes/` solo los recursos usados y genera variantes WebP en `public/images/`. No modifica `Recursos/`.

- Repositorio: `https://github.com/EdgarLopez95/doblessa-turbocas`
- Presentación: `https://edgarlopez95.github.io/doblessa-turbocas/`

## Git

Antes de trabajar, revisar `AGENTS.md` y `ESTADO.md`. Para una entrega:

```bash
git status
git add <archivos>
git commit -m "feat: descripcion breve"
git push origin main
```

No usar `git push --force` ni modificar `Recursos/` desde este repositorio.
