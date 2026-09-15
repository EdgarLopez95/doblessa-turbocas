// JSON-LD prudente: solo datos públicos presentes en la auditoría.
import { business } from '../data/site';
import { absolute, img, SITE_ORIGIN } from './url';

export const BUSINESS_ID = `${absolute('')}#negocio`;

export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': BUSINESS_ID,
    name: business.name,
    description:
      'Taller mecánico y laboratorio en Castellón especializado en reconstrucción de turbocompresores, limpieza de FAP y catalizadores y direcciones hidráulicas.',
    url: absolute(''),
    logo: new URL(img('marca/logo-turbocas.png'), SITE_ORIGIN).href,
    telephone: '+34 964 196 929',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      postalCode: business.postalCode,
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    areaServed: [
      { '@type': 'City', name: 'Castellón' },
      { '@type': 'Country', name: 'España' },
    ],
  };
}

export function service(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absolute(path),
    serviceType: name,
    provider: { '@id': BUSINESS_ID, '@type': 'AutoRepair', name: business.name },
    areaServed: { '@type': 'Country', name: 'España' },
  };
}
