# Dirección visual — "Precisión que devuelve potencia"

## Idea central
**La web como hoja técnica de laboratorio.** Cada bloque se lee como una ficha de ingeniería: etiquetas de referencia (`TC-01 · Diagnóstico`), líneas de cota finas, datos en Barlow Condensed y fotografía real de maquinaria. Rigor visible, lenguaje humano.

## Elemento memorable
Hero oscuro con el turbo recortado sobre una retícula de plano técnico y **anotaciones con líneas de cota** que señalan partes del turbo ("Rueda del compresor", "Carcasa", "Brida de salida"), que se dibujan una vez al cargar. El mismo lenguaje de cota reaparece en el proceso 01–04 como una **línea de flujo** que conecta nodos numerados.

## Paleta (tokens del sistema propuesto)
| Token | Valor | Rol semántico |
|---|---|---|
| `--ink-950` | #111827 | `--surface-dark`, `--text-strong` |
| `--ink-800` | #1F2937 | superficies oscuras secundarias |
| `--steel-500` | #64748B | texto secundario sobre claro (4.76:1 sobre blanco, AA) |
| `--steel-100` | #E8EDF2 | bordes, fondos suaves |
| `--workshop-50` | #F7F8FA | `--surface-base` |
| `--turbo-500` | #F4B000 | CTA primario (texto ink-950 → 9.9:1) y acentos sobre oscuro |
| `--turbo-600` | #C98700 | hover de CTA |
| `--signal-500` | #E95132 | errores de formulario (texto de error en #B93A1F para AA) |
| `--success-600` | #14804A | confirmación de formulario |

Amarillo solo en CTA, foco sobre oscuro, numeración y hairlines de acento. Nunca texto pequeño amarillo sobre blanco.

## Tipografía
- Display/datos: Barlow Condensed 600/700, mayúsculas solo en etiquetas y numeración.
- Texto/UI: Inter 400/500/600/700 (impuesta por el sistema del cliente).
- Escala: H1 `clamp(2.5rem, 1.6rem + 3.2vw, 3.5rem)`/1.07 · H2 `clamp(1.875rem, 1.4rem + 1.6vw, 2.25rem)`/1.17 · H3 1.5rem/1.25 · cuerpo 1rem/1.625 · etiqueta .75rem tracking .08em.

## Retícula y forma
Contenedor 1200 px · 12/8/4 columnas · gutter 24/16 px · ritmo 24/40/64/96 · radio 8 px en tarjetas, 999 px en chips, 4 px en inputs y botones (rectangulares, 48 px de alto) · sombras casi inexistentes: se separa con bordes `steel-100` y cambio de superficie.

## Composición (wireframes)
```
HOME desktop                                   HOME móvil
[header blanco: logo | nav | tel | CTA]        [logo | tel | ☰]
[HERO oscuro  H1 izq (7col) | turbo+cotas 5c]  [HERO: H1, texto, CTA, turbo abajo]
[¿Qué necesita tu vehículo? 5 rutas en fila]   [5 rutas en lista vertical]
[Servicios: 3 destacados grandes + 3 filas]    [apilado]
[Confianza: franja 4 columnas con iconos]      [2x2 → 1]
[Proceso 01—02—03—04 línea de flujo oscura]    [vertical con línea a la izquierda]
[Laboratorio: galería asimétrica 12 col]       [2 col]
[Industrial: bloque partido texto/foto]        [apilado]
[CTA presupuesto amarillo sobre ink]           [CTA + barra inferior tel/diagnóstico]
[footer ink-950]
```
Landings de servicio: hero partido (texto 7 col + imagen 5 col con marco de cota) · síntomas en lista de chips/filas · ficha "qué se revisa" tipo tabla técnica · proceso · banco de pruebas foto+texto · FAQ · formulario lateral sticky en desktop.

## Motion
- Hero: líneas de cota se dibujan (stroke-dashoffset, 240 ms, escalonadas 60 ms); turbo aparece con fade/translate 8 px.
- Reveal al scroll: pasos del proceso escalonados (opacity + translateY 12 px, 220 ms), vía IntersectionObserver; contenido visible por defecto sin JS.
- Microinteracciones: botones 180 ms (background, transform translateY(-1px)); tarjetas borde → ink-950 y flecha desplaza 4 px; FAQ chevron rota.
- `prefers-reduced-motion`: sin transformaciones ni dibujo, estado final inmediato.
- Nunca `transition: all`, sin carruseles ni autoplay.

## Autocrítica anti-genérico
- ¿Hero centrado genérico? No: asimétrico con anotaciones técnicas del producto real.
- ¿Todo cards iguales? No: servicios estrella en bloques grandes con imagen; secundarios como filas compactas; confianza como franja sin cajas; proceso como diagrama.
- ¿Gradientes/glass? No. Superficies planas, hairlines, retícula técnica al 6 % de opacidad.
- ¿Las decisiones salen del producto? Sí: cotas y fichas vienen del mundo del laboratorio y el banco de pruebas.
