// Iconos lineales 24 px (trazo currentColor). Solo contenido interno de <svg>.
export const icons = {
  turbo:
    '<circle cx="11" cy="13" r="7.5"/><circle cx="11" cy="13" r="2"/><path d="M11 5.5h8a2 2 0 0 1 2 2V11h-4"/><path d="M11 11V8.5M13 13h2.5M11 15v2.5M9 13H6.5"/>',
  filter:
    '<rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7.5 7v10M12 7v10M16.5 7v10M1 12h2M21 12h2"/>',
  steering:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.2"/><path d="M12 14.2V21M10 11.1 3.4 9M14 11.1 20.6 9"/>',
  wrench:
    '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
  clipboard:
    '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 11.5l2 2 4-4M9 17h6"/>',
  gauge: '<path d="M3.5 17a9 9 0 1 1 17 0"/><path d="M12 13l4-4"/><circle cx="12" cy="13" r="1.2"/>',
  question:
    '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01"/>',
  phone:
    '<path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  chevron: '<path d="M6 9l6 6 6-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  truck:
    '<path d="M2 6h12v10H2zM14 9.5h4l3 3.5v3h-7"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-4.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  flask:
    '<path d="M9 3h6M10 3v6l-5.5 9.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7.5 15h9"/>',
  bench:
    '<rect x="3" y="4" width="18" height="11" rx="1"/><circle cx="8.5" cy="9.5" r="2.5"/><circle cx="15.5" cy="9.5" r="2.5"/><path d="M5 15v5M19 15v5M3 20h18"/>',
  message: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
  package: '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z"/><path d="M3 7.5 12 12l9-4.5M12 12v9"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  layers: '<path d="M12 3 2 8l10 5 10-5z"/><path d="M2 13l10 5 10-5"/>',
  file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  users:
    '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  droplet: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  sound: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
  smoke: '<path d="M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1.5A4.5 4.5 0 0 1 17 18z"/>',
  warning: '<path d="M12 3.5 2.5 20h19z"/><path d="M12 10v4.5M12 17.2h.01"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  oil: '<path d="M3 10h9l3-3h3l3 3-4 1-3 7H5a2 2 0 0 1-2-2z"/><path d="M19 15s1.5 1.7 1.5 2.7a1.5 1.5 0 0 1-3 0c0-1 1.5-2.7 1.5-2.7z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
} as const;

export type IconName = keyof typeof icons;
