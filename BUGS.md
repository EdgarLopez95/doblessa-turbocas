# Registro de corrección de bugs y mejoras técnicas (BUGS) — Turbocas

Este documento registra todas las incidencias, desajustes de diseño, inconsistencias de UX/UI, accesibilidad y SEO detectados y corregidos durante el cierre del rediseño del mockup estático de Turbocas.

---

## Tabla de incidencias y resolución

| ID | Dónde | Qué pasaba | Estado | Verificación |
| :--- | :--- | :--- | :--- | :--- |
| **BUG-01** | `src/pages/contacto.astro` | Botón desactivado "WhatsApp Próximamente" sin explicación clara de contacto disponible. | **Resuelto** | Sustituido por bloque informativo accesible con texto explícito: *"WhatsApp: canal previsto. Publicaremos el número cuando Turbocas lo confirme. Mientras tanto, llama o usa el formulario."* (Commit `8a64635`). |
| **BUG-02** | `src/components/DemoForm.astro`, `HomeHero.astro`, `laboratorio.astro` | Ausencia de canal directo y segmentación de formulario para talleres mecánicos profesionales. | **Resuelto** | Creado grupo de radios `¿Eres un taller profesional?`, preselección vía `?tipo=taller`, resumen adaptado y botones de acceso en Hero y sección Talleres del laboratorio. (Commit `db26e63`). |
| **BUG-03** | `src/components/HelpfulDataPanel.astro`, `ServiceRequest.astro`, `contacto.astro` | Los usuarios no sabían qué datos o papeles preparar antes de llamar o consultar por formulario. | **Resuelto** | Diseñado e insertado panel visible con 4 viñetas exactas (ficha técnica, síntomas, foto/referencia, urgencia) y pie de tranquilidad *"Con lo que tengas a mano empezamos"*. (Commit `8a610ae`). |
| **BUG-04** | `src/pages/limpieza-fap-catalizador.astro` | Salto de altura antiestético en tablet (768px) entre las dos fotos de equipos FAP (una 4:3 y otra vertical 3:4). | **Resuelto** | Unificado contenedor `.equip-frame` a 220px con fondo neutro `var(--ink-950)` y pie de foto; añadido además esquema técnico paso a paso del sistema. (Commit `fa8838e`). |
| **BUG-05** | `reconstruccion-turbos`, `limpieza-fap`, `direcciones-hidraulicas` | Landings de servicio poco diferenciadas entre sí y fotos de 300px del cliente sin encuadre técnico. | **Resuelto** | Creada ficha de ejemplo en turbos (GT2052V), flujo específico de 5 pasos en circuito hidráulico, fotos enmarcadas con fondo tinta y pie con recomendación de fotos HD. (Commit `fa8838e`). |
| **BUG-06** | `src/pages/mecanica-mantenimiento.astro` e `index.astro` | Servicios secundarios (aire acondicionado y gases de escape) no tenían ancla visible ni enlaces activos desde la Home. | **Resuelto** | Añadidos identificadores `id="aire-acondicionado"` e `id="gases-de-escape"`, `scroll-margin-top` adaptado al header sticky y filas de la home convertidas en enlaces interactivos con flecha. (Commit `440849d`). |
| **BUG-07** | `src/components/CatalogFilters.astro` y `catalogo-turbos.astro` | Filtros de catálogo deshabilitados sin aviso claro, generando confusión al visitante. | **Resuelto** | Incorporado aviso destacado accesible sobre filtros de muestra, y tarjeta "¿No encuentras tu turbo?" enlazada a `contacto/#formulario` con contexto precargado. (Commit `e5ccc47`). |
| **BUG-08** | `src/components/ServiceCard.astro` | En resolución tablet (640-1023px), la foto horizontal de las tarjetas destacadas dejaba un hueco en blanco debajo. | **Resuelto** | Configurado `.featured .media` con `align-self: stretch`, `margin: 0`, `aspect-ratio: auto` y bordes enrasados para cubrir la altura completa de la tarjeta. (Commit `3536192`). |
| **BUG-09** | `src/layouts/BaseLayout.astro` y `global.css` | Dependencia externa de Google Fonts (riesgo de rendimiento y privacidad) y meta `noindex` no forzado en todas las vistas. | **Resuelto** | Fuentes WOFF2 (Barlow Condensed e Inter) autoalojadas localmente en `public/fonts/`, directivas `@font-face` con `font-display: swap`, precarga local y meta `noindex, follow` incondicional. (Commit `a083e6c`). |
| **BUG-10** | `src/components/Footer.astro` | Pie de página carecía de una mención unificada y transparente sobre las condiciones de garantía. | **Resuelto** | Añadido bloque de garantía con icono de escudo y texto exacto: *"Trabajamos con garantía. El plazo y las condiciones las confirmará Turbocas en el presupuesto."* (Commit `abf00cc`). |
| **BUG-11** | `src/components/Header.astro` | Resaltado de pestaña activa fallaba al navegar a URLs que incluían un ancla con `#hash`. | **Resuelto** | Normalizadas las funciones `isCurrent` e `isSection` para comparar los paths descartando el fragmento hash (`href.split('#')[0]`). (Commit `440849d`). |
| **BUG-12** | Global / Build en `dist/` | Verificación de integridad: comprobar ausencia de enlaces rotos, anclas huérfanas, etiquetas H1 duplicadas o imágenes sin medidas. | **Resuelto** | Script de auditoría ejecutado sobre las 13 páginas compiladas: 0 errores, 0 warnings, 1 único H1 por página, jerarquía estricta y todos los enlaces bajo `/doblessa-turbocas`. |

---

## Criterios de calidad verificados

1. **Jerarquía semántica**: 1 sola etiqueta `<h1>` por página, progresión estricta `h1 -> h2 -> h3`.
2. **Navegación e integridad**: Sin ningún `href="#"`. Todos los enlaces internos parten de `/doblessa-turbocas/`.
3. **Anclajes en el DOM**: Todas las anclas (`#formulario`, `#proceso`, `#aire-acondicionado`, etc.) apuntan a elementos existentes.
4. **Accesibilidad y contraste**: Botón primario `#f4b000` con texto `#111827` alcanza ratio de contraste de 9.94:1 (supera WCAG AAA).
5. **Animaciones y rendimiento**: Soporte completo para `prefers-reduced-motion: reduce`, evitando opacidades nulas o saltos.
6. **Formularios estáticos**: Todos los botones de envío interceptados (`event.preventDefault()`) mostrando feedback inmediato en el DOM con resumen de datos.
