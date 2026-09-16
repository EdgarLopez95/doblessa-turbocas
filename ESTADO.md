# Estado técnico — Turbocas

## Estado actual

**Cierre final del rediseño estático para presentación**. El sitio se encuentra completamente auditado, pulido a nivel UX/UI/SEO, probado en compilación estática (`npm run build`), verificado con tests automatizados en el repositorio (`npm run verify`) y con todos los commits atómicos organizados en `main` bajo la base `/doblessa-turbocas/`.

Documentación complementaria entregada:
- `GAPS.md`: Matriz honesta y rigurosa de huecos que **solo puede resolver el cliente** (horarios, teléfono WhatsApp, garantías, datos fiscales, etc.) sin inventar datos en el código ni en la documentación.
- `BUGS.md`: Registro formal de las 13 incidencias detectadas y corregidas durante la auditoría senior.

## Base técnica

- **Framework**: Astro 7 + TypeScript + CSS nativo (sin frameworks JS pesados ni librerías externas).
- **Publicación**: Rama `main` en GitHub Pages (`https://edgarlopez95.github.io/doblessa-turbocas/`).
- **SEO & Privacidad**: Directiva incondicional `<meta name="robots" content="noindex, follow" />` en `BaseLayout` para evitar canibalizar la web antigua.
- **Fuentes autoalojadas**: Barlow Condensed (600, 700) e Inter (400, 500, 600, 700) en formato WOFF2 en `public/fonts/`, con `@font-face` local y `font-display: swap`. Sin peticiones externas a Google Fonts ni violación de GDPR.
- **Validación automatizada**: Script `scripts/verify-build.mjs` (`npm run verify`) integrado en el proyecto sobre las 13 páginas de `dist/` certificando 0 errores y 0 warnings.

## Resumen de mejoras y cambios aplicados en esta sesión

1. **A1. WhatsApp informativo**: Sustituido el botón inerte "Próximamente" por bloque informativo accesible en `contacto.astro`: *"WhatsApp: canal previsto. Publicaremos el número cuando Turbocas lo confirme. Mientras tanto, llama o usa el formulario."* (Commit `8a64635`).
2. **A2. Ruta para talleres mecánicos**: Añadido selector radial en `DemoForm.astro` (`¿Eres un taller profesional?`), soporte para preselección vía parámetro URL `?tipo=taller`, adaptación dinámica del texto de confirmación y llamadas a la acción dedicadas desde `HomeHero.astro` y `laboratorio.astro`. (Commit `db26e63`).
3. **A3. Panel "Qué datos nos ayudan"**: Creado componente `HelpfulDataPanel.astro` con las 5 viñetas técnicas (ficha técnica/número de bastidor, referencia en placa, síntomas/testigos, fotografía y aviso previo de envío desde fuera de Castellón) y nota de cierre exacta: *«Con lo que tengas a mano empezamos.»*. Integrado en `ServiceRequest.astro` y `contacto.astro`. (Commits `8a610ae` y `e5d201d`).
4. **A4 & A7. Landings diferenciadas y encuadre de fotos**:
   - **Turbos (`reconstruccion-turbos.astro`)**: Añadida ficha técnica de ejemplo de turbo de fábrica GT2052V (VNT, aplicación Audi V6 TDI documentada como muestra pendiente de validar) y encuadre técnico con fondo tinta para fotos de 300px.
   - **FAP y catalizador (`limpieza-fap-catalizador.astro`)**: Esquema técnico del sistema (3 pasos: Testigo/modo degradado → Diagnóstico de contrapresión → Limpieza hidrodinámica en equipo) y unificación del contenedor `.equip-frame` a 220px eliminando el desajuste vertical a 768px entre fotos 4:3 y 3:4.
   - **Direcciones (`direcciones-hidraulicas.astro`)**: Rótulo de banco de presiones en hero, flujo específico de 5 pasos para bombas y cremalleras, y fotos enmarcadas con pie de toma recomendada en HD.
   - Textos de garantía unificados en todas las landings. (Commit `fa8838e`).
5. **A5. Localización de aire acondicionado y gases de escape**: Creados anclajes `#aire-acondicionado` y `#gases-de-escape` en `mecanica-mantenimiento.astro` con `scroll-margin-top` adaptado al header sticky. Filas secundarias en la Home (`index.astro`) convertidas en enlaces interactivos con icono de flecha. (Commit `440849d`).
6. **A6. Catálogo y filtros demostrativos**: Añadido aviso visible en `CatalogFilters.astro` aclarando que la búsqueda por referencia operará en la web real, manteniendo los filtros desactivados de forma honesta y enlazando la tarjeta "¿No encuentras tu turbo?" a `contacto/#formulario` con contexto precargado. (Commit `e5ccc47`).
7. **A8. Home a 768px**: Ajustado `.featured .media` en `ServiceCard.astro` con `align-self: stretch`, `margin: 0` y `aspect-ratio: auto` para eliminar el hueco en blanco debajo de la imagen en dispositivos tablet. (Commit `3536192`).
8. **A9. SEO técnico, privacidad y fuentes locales**: Incorporado `noindex, follow` permanente en `BaseLayout.astro`. Descargadas 6 variantes WOFF2 e implementadas en `global.css`, suprimiendo los `preconnect` y stylesheet de Google Fonts. Actualizada la política de privacidad para reflejar que las fuentes son locales y no hay llamadas a Google Fonts. (Commits `a083e6c` y `e5d201d`).
9. **A10. Garantía y horario en pie de página**: Incorporado bloque con icono de escudo en `Footer.astro` con la redacción exacta requerida: *"Trabajamos con garantía. El plazo y las condiciones las confirmará Turbocas en el presupuesto."* Añadido aviso de horario pendiente de confirmar sin inventar franjas: *"Horario de atención: pendiente de confirmar por Turbocas. Mientras tanto, llama al 964 196 929."*. (Commits `abf00cc` y `e5d201d`).

- **Hero de inicio con vídeo de taller** (`HomeHero.astro`): vídeo decorativo de fondo (`aria-hidden`, `autoplay muted loop playsinline`, sin `controls`, `preload="none"`) en WebM VP9 1,1 MB + MP4 H.264 1,1 MB, con poster `inicio/hero-taller-castellon.jpg` (22 KB) como LCP, preload y og:image de la home. El etalonaje rojo se neutraliza con `grayscale` y un virado frío (`steel-500`, `mix-blend-mode: color`). Velo por zonas: denso bajo el texto (≥ 10,9:1 incluso con un fotograma blanco) y abierto entre texto y placa, a la derecha y en el margen izquierdo de pantallas anchas para que se lea el taller; en móvil denso hasta el 55 % del alto, con leyenda y lema sobre fondo tinta propio. Con `prefers-reduced-motion: reduce` o `saveData` el `<video>` se elimina y queda solo el poster. La placa del turbo con cotas flota a la derecha (400 px) desde 960 px y pasa bajo el copy en móvil.

- **CTA de presupuesto como card** (`CtaBand.astro`, en inicio, servicios, laboratorio y sobre Turbocas): card tinta completa sobre fondo claro con aire por encima y por debajo, para que no se confunda con el footer. Sin solape a propósito: comparten color y la parte solapada volvía a fundirse con el pie.
- **Enlace «Inicio» visible**: añadido como primer enlace del menú móvil (con `aria-current` en la home) y de la columna «Turbocas» del footer. En escritorio se mantiene el logo como vuelta al inicio, junto a las migas de pan.

## Rutas compiladas en `dist/`

| Ruta | Página | Función principal | Estado H1 / Enlaces |
| :--- | :--- | :--- | :--- |
| `/` | Inicio | Propuesta de valor, laboratorio, proceso y servicios | 1 H1 · 100% OK |
| `/servicios/` | Índice de servicios | Separación limpia entre laboratorio y taller local | 1 H1 · 100% OK |
| `/reconstruccion-turbos/` | Reconstrucción de turbos | Servicio estrella, ficha técnica y banco de calibración | 1 H1 · 100% OK |
| `/limpieza-fap-catalizador/`| FAP y catalizadores | Diagnóstico, esquema técnico y regeneración en equipo | 1 H1 · 100% OK |
| `/direcciones-hidraulicas/` | Direcciones hidráulicas | Bombas y cajas de dirección, banco de presiones | 1 H1 · 100% OK |
| `/mecanica-mantenimiento/` | Taller mecánico | Anclas a aire acondicionado, gases de escape y pre-ITV | 1 H1 · 100% OK |
| `/laboratorio/` | Laboratorio central | Maquinaria de precisión, banco de flujo y canal talleres | 1 H1 · 100% OK |
| `/catalogo-turbos/` | Catálogo de muestra | Referencias ilustrativas, filtros rotulados y consulta | 1 H1 · 100% OK |
| `/sobre-turbocas/` | Sobre Turbocas | Equipo, método de trabajo e instalaciones de Castellón | 1 H1 · 100% OK |
| `/contacto/` | Contacto y presupuesto | Teléfono directo, panel de datos, horario pendiente y formulario demo | 1 H1 · 100% OK |
| `/aviso-legal/` | Aviso legal | Plantilla legal con placeholders demarcados y email pendiente | 1 H1 · 100% OK |
| `/politica-de-privacidad/`| Privacidad | Cláusula actualizada: fuentes autoalojadas y email de privacidad pendiente | 1 H1 · 100% OK |
| `/404` | Página no encontrada | Manejo de error 404 bajo la base de GitHub Pages | 1 H1 · 100% OK |

Archivos auxiliares: `robots.txt` y `sitemap.xml` con 12 rutas canónicas absolutas.

## Auditoría de calidad técnica (QA Senior)

- **Compilación**: `npm run build` genera 13 páginas HTML estáticas en ~2.5 segundos sin ningún error ni advertencia.
- **Verificación automatizada**: `npm run verify` (`scripts/verify-build.mjs`) comprueba exhaustivamente:
  - 1 sola etiqueta `<h1>` por página, progresión estricta de niveles sin saltos (`h1 -> h2 -> h3`).
  - Cero enlaces vacíos (`href="#"`). Cada ruta interna utiliza la función auxiliar `url()` preservando el prefijo `/doblessa-turbocas/`.
  - Todas las anclas con hash `#` corresponden a IDs existentes en la página de destino.
  - Cero peticiones externas a `fonts.googleapis.com` o `fonts.gstatic.com`.
  - Inclusión de `<meta name="robots" content="noindex, follow" />` en todos los documentos HTML.
  - Cero correos inventados `info@turbocas.com` en HTML o CSS.
  - Cero promesas no confirmadas («1 año», «48 h», «envío gratis»).
  - Presencia obligatoria del texto exacto *«Con lo que tengas a mano empezamos.»* en contacto y landings de laboratorio.
  - Fuentes `@font-face` apuntando exclusivamente a `/doblessa-turbocas/fonts/...`.
- **Accesibilidad**: Contraste del botón de acción primario (`#f4b000` con `#111827`) de 9.94:1 (cumple WCAG AAA). Respeto absoluto a `prefers-reduced-motion: reduce`. Atributos `alt`, `width` y `height` en todas las imágenes.
- **Formularios demostrativos**: Todos los formularios previenen la recarga de página mediante `preventDefault()` y muestran un resumen de confirmación en el DOM con feedback accesible.

## Próximos pasos (cuando el cliente resuelva `GAPS.md`)

1. **Reemplazar datos provisionales**: Configurar el correo receptor de leads, horario comercial y teléfono móvil de WhatsApp.
2. **Fotografía definitiva**: Reemplazar las imágenes provisionales de 300×225 px en `public/images/` por fotografías de alta resolución en formato WebP/JPG.
3. **Formalizar textos legales**: Completar razón social, CIF y domicilio fiscal en `aviso-legal.astro`.
4. **Despliegue en dominio final**:
   - Ajustar `site` y `base` en `astro.config.mjs` para el dominio definitivo (ej. `https://turbocas.com` con `base: '/'`).
   - Retirar `<meta name="robots" content="noindex, follow" />` en `BaseLayout.astro`.
   - Implementar redirecciones 301 desde las URLs antiguas del WordPress comprometido en el servidor de producción.
