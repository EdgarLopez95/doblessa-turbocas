# Estado técnico — Turbocas

## Estado actual

Mockup estático completo del rediseño, responsive y publicado en GitHub Pages. Aprobado en la crítica independiente de diseño (ronda 4: 85/100, 0 bloqueantes).

## Base técnica

- Framework: Astro 7 + TypeScript + CSS nativo, sin dependencias nuevas.
- Rama de publicación: `main`.
- GitHub Pages: `https://edgarlopez95.github.io/doblessa-turbocas/`.
- Validación: `npm run build`.

## Rutas creadas

| Ruta | Página | CTA principal |
|---|---|---|
| `/` | Inicio: reparación y reconstrucción de turbos en Castellón | Diagnosticar mi caso |
| `/servicios/` | Seis servicios; laboratorio y taller diferenciados | Solicitar presupuesto |
| `/reconstruccion-turbos/` | Landing del servicio estrella | Solicitar diagnóstico |
| `/limpieza-fap-catalizador/` | FAP y catalizadores | Consultar mi vehículo |
| `/direcciones-hidraulicas/` | Direcciones hidráulicas | Solicitar valoración |
| `/mecanica-mantenimiento/` | Taller local por necesidad | Consultar mi revisión |
| `/laboratorio/` | Autoridad técnica, diagnóstico y maquinaria | Diagnosticar mi caso |
| `/catalogo-turbos/` | Catálogo de muestra, no ecommerce | Confirmar compatibilidad |
| `/sobre-turbocas/` | Presentación, método, equipo e instalaciones | Contactar |
| `/contacto/` | Teléfono, formulario, ubicación y logística | Enviar consulta (demo) |
| `/aviso-legal/`, `/politica-de-privacidad/` | Legales provisionales con aviso de validación | — |
| `/404` | Página no encontrada (noindex) | Volver al inicio |

Generados: `sitemap.xml` (12 rutas) y `robots.txt`, ambos bajo `/doblessa-turbocas/`.

## Componentes construidos

- **Estructura:** `BaseLayout` (SEO, canonical, Open Graph, JSON-LD), `Header` (panel de servicios accesible y menú móvil), `Footer`, `MobileActionBar` (Llamar / Diagnosticar; se oculta al escribir en formularios).
- **Cabeceras:** `HomeHero` (turbo con cotas técnicas), `PageHero`, `Breadcrumbs` (con `BreadcrumbList`), `SectionHeading` (variantes `split` y `rule`).
- **Contenido:** `NeedSelector`, `ServiceCard`, `TrustStrip`, `ProcessSteps`, `FeatureList`, `CheckList`, `Split`, `SpecFrame`, `Gallery` (rejilla y destacado), `CtaBand`.
- **Conversión:** `Faq` (`details/summary`), `DemoForm` (validación inline y mensaje demostrativo), `ServiceRequest` (FAQ + formulario sticky).
- **Catálogo:** `CatalogCard`, `CatalogFilters` (deshabilitados y rotulados como demostración).
- **Utilidades:** `LegalPage`, `Icon` (set lineal propio), `Img` (`<picture>` WebP, dimensiones y lazy), `JsonLd`.
- **Librería:** `lib/url.ts` (base de GitHub Pages), `lib/schema.ts`, `data/site.ts`.

## Imágenes copiadas a `public/images/`

Copiadas con `scripts/prepare-images.mjs` (lectura de `../Recursos`, sin modificarlo). Conservan carpeta y nombre; se añaden 16 variantes `.webp`.

- `marca/`: logo-turbocas.png, icono-turbocas.png (favicon), marcas-turbocompresores.svg
- `laboratorio/`: banco-pruebas-turbocompresores.jpeg, turbocompresores-reconstruidos.jpeg
- `fap-cat/`: equipo-limpieza-filtros-particulas.jpeg, equipo-diagnostico-limpieza-fap.jpeg, filtro-particulas-automovil.jpg, limpieza-filtro-particulas.png
- `direccion-hidraulica/`: banco-bombas-hidraulicas.jpg, banco-pruebas-direcciones-hidraulicas.jpg, bomba-direccion-hidraulica.jpg (recortada a la pieza)
- `catalogo/`: turbo-gt2052v-audi-v6-tdi.jpg, cartucho-chra-454231.jpg, cartucho-chra-708639.jpg, cartucho-chra-454135.jpg, junta-turbo-717858.jpg, junta-turbo-454232.jpg, junta-turbo-1900-100-332.jpg (recortada a la pieza)
- `ui/`: icono-whatsapp.png

## Decisiones de implementación

- **Idea visual:** "hoja técnica de laboratorio" (cotas, etiquetas de referencia, retícula discreta). Tokens y tipografías del sistema propuesto (Barlow Condensed + Inter).
- **Hero de inicio:** usa el turbo de fábrica GT2052V. Se descartaron `servicios/reconstruccion-turbocompresores.png` y `reparacion-turbocompresores.png` (turbo cromado de estética racing con la marca de terceros "Master Power").
- **Iconos:** se descartaron las ilustraciones multicolor de `inicio/` y se usa un set lineal coherente.
- **Motores de arranque:** `catalogo/turbo-repuesto-01/02/03.jpg` muestran motores de arranque, no turbos, y quedaron fuera del catálogo. Se muestran 7 referencias más la tarjeta "¿No encuentras tu turbo?".
- **Logotipos de fabricantes:** el SVG de marcas solo aparece en la landing de turbos, con aviso de autorización pendiente.
- **Galerías:** distinguen fotografía real, "Ilustración" e "Imagen de referencia".
- **Formularios:** el botón se activa con JS y el envío se bloquea siempre, mostrando el mensaje demostrativo; sin JS no se envía nada.
- **WhatsApp:** botón "Próximamente", sin número.
- **Mapa:** plano ilustrativo rotulado como no interactivo.
- **JSON-LD:** `AutoRepair` solo con nombre, teléfono y dirección de la auditoría (sin horario, email, geo ni sameAs); `Service` en las landings; `ItemList`/`Product` sin precio ni stock en el catálogo.
- **Reveal:** nunca oculta lo que ya está en pantalla al cargar; respeta `prefers-reduced-motion` y tiene estilo de impresión.
- **Robots y sitemap:** en un sitio de proyecto de GitHub Pages, `robots.txt` queda en `/doblessa-turbocas/robots.txt`, no en la raíz del dominio; en producción irá en la raíz.

## Resultado de build y QA

- `npm run build`: correcto, 13 páginas y 2 endpoints, sin errores ni avisos.
- Verificador de `dist`: 1 H1 por página, sin `href="#"` ni enlaces vacíos, todos los enlaces y recursos existen bajo `/doblessa-turbocas/` y las anclas son válidas.
- Capturas revisadas a 1440, 1024, 768 y 390 px (no versionadas, en `design/qa/`). Sin overflow horizontal y sin errores de consola.
- Probado en navegador: validación del formulario, mensaje demostrativo, panel de servicios con Escape y menú móvil.
- Crítica de diseño: 73,5 → 81 → 84,5 → **85** (`design/critiques/`).

## Siguiente acción

Presentar el mockup al cliente y recoger la validación de datos. Con fotografía de alta resolución y contenidos confirmados, dar un rasgo propio a cada landing (ficha técnica en turbos, esquema del FAP) y resolver las mejoras menores de `design/critiques/ronda-4.md`.

## Datos que el cliente debe validar

- Dirección (Pol. Ind. La Raya, nave 15, 12005 Castellón) y teléfono 964 196 929.
- Email real (sustituir `info@localhost`), número de WhatsApp y horarios, que no se muestran.
- Garantía: plazo y condiciones (solo aparece como concepto).
- Atención nacional y logística: forma de envío y plazos (no se prometen).
- Vigencia del servicio a vehículo industrial y de mecánica (aire acondicionado, gases, pre-ITV).
- Referencias del catálogo y la aplicación "Audi V6 TDI" del GT2052V.
- Autorización de uso de logotipos de fabricantes (`marcas-turbocompresores.svg`).
- Fotografías en alta resolución del laboratorio y del equipo (las actuales son de 300×225 px) y fotos de personas.
- Fabricante y modelo de los equipos (DPF Revival, MSG) antes de citarlos.
- Textos legales completos: razón social, NIF y datos registrales.
- Decidir si el mockup debe llevar `noindex` mientras conviva con la web actual.

## Límites y bloqueos

- Sin bloqueos técnicos.
- Cualquier decisión de marca, alcance o contenido nuevo vuelve al orquestador.
