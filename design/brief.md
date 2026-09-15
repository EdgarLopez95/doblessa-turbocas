# Brief — Rediseño Turbocas (mockup estático)

## Cliente
Turbocas, taller mecánico y laboratorio diésel en Castellón (Pol. Ind. La Raya, nave 15 — dato público pendiente de validar). Especialidad: reparación y reconstrucción de turbocompresores; también limpieza FAP/catalizadores, reconstrucción de direcciones hidráulicas y mecánica general.

## Audiencias
| Perfil | Estado | Trabajo que quiere resolver |
|---|---|---|
| Conductor particular | Preocupado por avería, coste, tiempo sin coche | Saber si le pueden ayudar y pedir diagnóstico sin jerga |
| Taller profesional | Poco tiempo, necesita especialista | Encontrar un laboratorio serio para reconstruir o probar piezas |
| Comprador de recambio | Tiene referencia o modelo | Confirmar compatibilidad antes de comprar |

## Acción principal
**Diagnosticar mi caso** (formulario corto) · alternativa inmediata: **llamar al 964 196 929**.
Secundarias: Solicitar presupuesto · Consultar mi vehículo (FAP) · Solicitar valoración (direcciones) · Confirmar compatibilidad (catálogo).

## Arquitectura
`/` · `/servicios/` · `/reconstruccion-turbos/` · `/limpieza-fap-catalizador/` · `/direcciones-hidraulicas/` · `/mecanica-mantenimiento/` · `/laboratorio/` · `/catalogo-turbos/` · `/sobre-turbocas/` · `/contacto/` · `/politica-de-privacidad/` · `/aviso-legal/`

Orden de cada landing: problema → qué hacemos → proceso → prueba (maquinaria) → preguntas → CTA.

## Personalidad
Técnica, directa, resolutiva, industrial limpia, transparente, cercana.

## Qué NO debe parecer
- Tienda de recambios / WooCommerce.
- Taller oscuro e intimidante.
- Marca racing caricaturesca.
- Web de ofertas con urgencia falsa, contadores o descuentos.
- Plantilla SaaS genérica (hero centrado + 3 cards + testimonios).

## Límites de contenido (no negociables)
Sin precios, stock, plazos, reseñas, testimonios, certificaciones, años de experiencia, horarios, email ni WhatsApp inventados. Garantía solo como concepto. Formularios demostrativos que no envían datos.

## Hallazgos en recursos
- `catalogo/turbo-repuesto-01/02/03.jpg` muestran **motores de arranque**, no turbos: excluidos del catálogo.
- Las fotos reales del laboratorio son de baja resolución (300×225): se usan a tamaño contenido; conviene pedir originales al cliente.
- `marcas-turbocompresores.svg` contiene logotipos de fabricantes: se muestra solo como referencia visual y con aviso de autorización pendiente.
