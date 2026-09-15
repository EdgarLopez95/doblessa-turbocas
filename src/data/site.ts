import type { IconName } from '../lib/icons';

export const business = {
  name: 'Turbocas',
  tagline: 'Laboratorio y mecánica',
  phoneDisplay: '964 196 929',
  phoneHref: 'tel:+34964196929',
  street: 'Pol. Ind. La Raya, nave 15',
  postalCode: '12005',
  city: 'Castellón',
  region: 'Castellón',
  country: 'ES',
} as const;

export interface Service {
  slug: string;
  name: string;
  /** Cómo lo diría el cliente. */
  human: string;
  icon: IconName;
  featured: boolean;
  problem: string;
  what: string;
  next: string;
  cta: string;
  image?: { src: string; alt: string; width: number; height: number };
}

export const services: Service[] = [
  {
    slug: 'reconstruccion-turbos/',
    name: 'Reconstrucción de turbos',
    human: 'Mi coche pierde potencia o el turbo hace ruido',
    icon: 'turbo',
    featured: true,
    problem: 'Pérdida de potencia, humo, silbidos o un aviso de avería que apunta al turbo.',
    what: 'Desmontamos, revisamos cada componente y reconstruimos el turbocompresor antes de comprobarlo en banco.',
    next: 'Cuéntanos tu vehículo y los síntomas para valorar el caso.',
    cta: 'Ver reconstrucción de turbos',
    image: {
      src: 'laboratorio/banco-pruebas-turbocompresores.jpeg',
      alt: 'Banco de pruebas para turbocompresores en el laboratorio de Turbocas',
      width: 300,
      height: 225,
    },
  },
  {
    slug: 'limpieza-fap-catalizador/',
    name: 'Limpieza de FAP y catalizador',
    human: 'Tengo problemas con el filtro de partículas',
    icon: 'filter',
    featured: true,
    problem: 'Testigo de filtro de partículas, regeneraciones que no terminan o el motor entra en modo de protección.',
    what: 'Diagnosticamos el estado del FAP o catalizador y, si procede, lo limpiamos con equipo específico.',
    next: 'Consulta si tu vehículo encaja en el servicio de limpieza.',
    cta: 'Ver limpieza de FAP y catalizador',
    image: {
      src: 'fap-cat/equipo-limpieza-filtros-particulas.jpeg',
      alt: 'Equipos de limpieza de filtros de partículas y catalizadores en Turbocas',
      width: 300,
      height: 225,
    },
  },
  {
    slug: 'direcciones-hidraulicas/',
    name: 'Direcciones hidráulicas',
    human: 'La dirección está dura o hace ruido',
    icon: 'steering',
    featured: true,
    problem: 'Dirección dura, ruidos al girar o pérdidas de líquido en la bomba o la cremallera.',
    what: 'Comprobamos bombas y direcciones en banco, reconstruimos y verificamos presiones antes de entregar.',
    next: 'Solicita una valoración de tu bomba o dirección.',
    cta: 'Ver direcciones hidráulicas',
    image: {
      src: 'direccion-hidraulica/banco-pruebas-direcciones-hidraulicas.jpg',
      alt: 'Banco de pruebas de bombas y direcciones hidráulicas',
      width: 1153,
      height: 768,
    },
  },
  {
    slug: 'mecanica-mantenimiento/#aire-acondicionado',
    name: 'Carga y comprobación de aire acondicionado',
    human: 'Aire acondicionado, revisión o cambio de aceite',
    icon: 'oil',
    featured: false,
    problem: 'Carga de climatización, mantenimiento periódico o cambio de aceite.',
    what: 'Cargamos el circuito de aire acondicionado y revisamos el vehículo siguiendo el plan de mantenimiento.',
    next: 'Pide cita en el taller.',
    cta: 'Ver aire acondicionado y mantenimiento',
  },
  {
    slug: 'mecanica-mantenimiento/#gases-de-escape',
    name: 'Análisis de gases de escape y pre-ITV',
    human: 'Comprobación de gases y revisión pre-ITV',
    icon: 'clipboard',
    featured: false,
    problem: 'Dudas sobre si el vehículo superará la prueba de emisiones o la inspección técnica.',
    what: 'Analizamos los gases de escape y revisamos los puntos habituales de la inspección.',
    next: 'Reserva la revisión antes de tu cita de ITV.',
    cta: 'Ver análisis de gases y pre-ITV',
  },
  {
    slug: 'mecanica-mantenimiento/',
    name: 'Diagnóstico mecánico',
    human: 'Se ha encendido un testigo y no sé qué es',
    icon: 'gauge',
    featured: false,
    problem: 'Testigos en el cuadro, ruidos o comportamientos extraños del motor.',
    what: 'Leemos el sistema y revisamos el vehículo para orientarte sobre la avería.',
    next: 'Describe lo que notas y te indicamos el siguiente paso.',
    cta: 'Ver diagnóstico mecánico',
  },
];

export const needs: { label: string; detail: string; icon: IconName; href: string }[] = [
  { label: 'Turbo o pérdida de potencia', detail: 'Humo, ruido, tirones o falta de fuerza', icon: 'turbo', href: 'reconstruccion-turbos/' },
  { label: 'FAP o catalizador', detail: 'Testigo FAP, regeneraciones, modo protección', icon: 'filter', href: 'limpieza-fap-catalizador/' },
  { label: 'Dirección hidráulica', detail: 'Dirección dura, ruidos o fugas', icon: 'steering', href: 'direcciones-hidraulicas/' },
  { label: 'Mantenimiento', detail: 'Revisión, aceite, pre‑ITV', icon: 'wrench', href: 'mecanica-mantenimiento/' },
  { label: 'Otro caso', detail: 'Cuéntanoslo y te orientamos', icon: 'question', href: 'contacto/' },
];

export const mainNav = [
  { label: 'Servicios', href: 'servicios/' },
  { label: 'Laboratorio', href: 'laboratorio/' },
  { label: 'Catálogo', href: 'catalogo-turbos/' },
  { label: 'Sobre Turbocas', href: 'sobre-turbocas/' },
  { label: 'Contacto', href: 'contacto/' },
];

export const processSteps = [
  {
    title: 'Recogida o consulta',
    text: 'Nos cuentas el caso por teléfono o formulario. Si no estás en Castellón, acordamos cómo hacernos llegar la pieza.',
  },
  {
    title: 'Diagnóstico',
    text: 'Revisamos la pieza o el vehículo en el laboratorio y te explicamos qué ocurre antes de reparar.',
  },
  {
    title: 'Reparación o reconstrucción',
    text: 'Con tu aprobación, sustituimos lo necesario y comprobamos el resultado en banco de pruebas.',
  },
  {
    title: 'Entrega',
    text: 'Recoges tu vehículo o te enviamos la pieza con la información del trabajo realizado.',
  },
];

export const serviceOptions = [
  'Reconstrucción de turbo',
  'Limpieza de FAP / catalizador',
  'Dirección hidráulica',
  'Mecánica y mantenimiento',
  'Consulta de catálogo o referencia',
  'Otro caso',
];
