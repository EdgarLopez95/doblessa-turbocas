# Huecos pendientes de resolución exclusiva por el cliente (GAPS) — Turbocas

Este documento recopila las decisiones, datos y materiales que **únicamente Turbocas puede confirmar o proporcionar**. Durante la fase de prototipado y mockup estático se han adoptado soluciones neutrales, avisos transparentes y estructuras preparadas para que la transición a producción sea inmediata en cuanto el cliente valide cada punto.

---

## Matriz de temas pendientes del cliente

| Tema | Estado actual en mockup | Qué necesitamos del cliente | Impacto en lanzamiento |
| :--- | :--- | :--- | :--- |
| **1. Horario de atención comercial** | Se indica lunes a viernes (horario estándar de taller). No se mencionan sábados ni festivos. | Horario exacto de apertura de taller y atención telefónica (mañanas, tardes, sábados). | **Medio**: Evita que clientes o transportistas acudan o llamen fuera de horario. |
| **2. Correo electrónico definitivo** | Se utiliza `info@turbocas.com` como valor provisional documentado. | Confirmación de la dirección de correo real que recibirá las solicitudes de diagnóstico y presupuestos. | **Crítico**: Sin este dato el backend o formulario funcional no sabrá a dónde dirigir los leads. |
| **3. Número de WhatsApp de atención** | Sustituido por bloque informativo explícito: *"WhatsApp: canal previsto. Publicaremos el número cuando Turbocas lo confirme. Mientras tanto, llama o usa el formulario."* | Número móvil oficial para WhatsApp Business y persona/departamento responsable de responder. | **Alto**: Canal preferente de conversión rápida para particulares y talleres en ruta. |
| **4. Plazo y condiciones exactas de garantía** | Se unificó en todas las páginas y pie: *"Trabajamos con garantía. El plazo y las condiciones las confirmará Turbocas en el presupuesto."* Se eliminaron promesas de 1 año. | Definición de plazos exactos (meses/años) y coberturas por servicio: turbos reconstruidos, limpieza FAP/catalizador y direcciones hidráulicas. | **Crítico**: Exigencia legal en contratación y factor determinante de confianza técnica. |
| **5. Logística de envíos nacionales** | Se menciona recepción y envío para clientes fuera de provincia, sin prometer "48 h" ni "envío gratis". | Agencias concertadas (SEUR, MRW, GLS, etc.), tiempos medios reales de tránsito y política de portes (¿a cargo de quién?). | **Alto**: Esencial para formalizar la captación de talleres de fuera de Castellón. |
| **6. Autorización de marcas de fabricantes** | Se citan como ejemplos técnicos de piezas compatibles (Garrett, BorgWarner, IHI, Holset, etc.) sin usar logotipos comerciales protegidos. | Confirmación legal de relaciones comerciales o estatus de distribuidor/reparador independiente para evaluar si se pueden mostrar logos oficiales. | **Medio/Legal**: Protección marcaria frente a requerimientos de fabricantes oficiales. |
| **7. Alcance en vehículo industrial, agrícola y obra pública** | Se incluye tarjeta y mención neutral de compatibilidad en el laboratorio para turbos industriales. | Validación de si realmente aceptan camiones, tractores, autobuses y maquinaria pesada, o si su foco es 100% turismo y furgoneta. | **Alto en posicionamiento**: Define si se abren o no landings SEO específicas de vehículo pesado. |
| **8. Fotografías reales en alta resolución** | Se usan 5 fotos reales del cliente (300×225 px) con marcos técnicos, fondo neutro y aviso explícito: *"Fotografía actual del cliente; se recomienda una toma nueva en alta resolución."* | Sesión fotográfica o fotos nítidas en alta resolución de las instalaciones reales: bancos de calibración, equipos de limpieza FAP, banco hidráulico y fachada/recepción. | **Muy Alto (Visual)**: Eleva radicalmente la percepción de laboratorio industrial de vanguardia y sustituye fotos heredadas de baja resolución. |
| **9. Datos fiscales para Aviso Legal** | Redactado con plantilla legal con placeholders visibles `[Razón Social]`, `[NIF]`, `[Domicilio Social]`, `[Registro Mercantil]`. | Razón social exacta (S.L., S.A. o Autónomo), CIF/NIF, dirección fiscal completa y datos de inscripción registral. | **Crítico/Legal**: Obligatorio por LSSI-CE para publicación en dominio definitivo. |
| **10. Política de redirecciones 301 de URLs antiguas** | Mockup limpio con arquitectura moderna basada en slugs amigables. Rutas antiguas documentadas en la auditoría. | Acceso al DNS / servidor para configurar reglas de redirección 301 (`.htaccess` o Nginx) desde las URLs indexadas antiguas a las páginas equivalentes del nuevo diseño. | **Crítico para SEO**: Evita pérdida de tráfico orgánico indexado y errores 404 en Google tras el despliegue. |
| **11. Desinfección y baja del WordPress comprometido** | Web nueva es 100% estática en Astro, inmune a inyecciones PHP/SQL y ataques que sufre el CMS actual. | Acceso al hosting actual para sanear, hacer copia de seguridad de datos históricos y apagar/reemplazar el WordPress vulnerado por este bundle estático. | **Crítico para Reputación**: La web antigua cuenta con malware inyectado y enlaces sospechosos que dañan el dominio en buscadores y navegadores. |

---

## Recomendación de orden de resolución

1. **Fase Inmediata (para validar propuesta final)**: Temas 1, 2, 3, 4 y 9 (Contacto, Garantía y Legal).
2. **Fase Pre-lanzamiento (para puesta en producción)**: Temas 5, 8, 10 y 11 (Logística, Fotos definitivas, Redirecciones 301 y sustitución del hosting).
3. **Fase Crecimiento (estrategia de catálogo ampliado)**: Temas 6 y 7 (Fabricantes y Vehículo industrial).
