// ============================================================
// ARCHIVO MAESTRO DE CONFIGURACIÓN
// Para clonar a otro sitio: modifica SOLO este archivo.
// ============================================================

export interface Pillar {
  icon: string; // SVG path data
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  url: string;
  shortDesc: string;
  tags: string[];
  status: 'live' | 'in-progress';
}

export const site = {
  name: 'Yerai Jiménez',
  tagline: 'SEO técnico + contenido con IA + email marketing, para negocios locales de servicios.',
  email: 'yerayjimeenez07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yeray-jimenez0770/',
  github: 'https://github.com/Kaiver07',
  locale: 'es_ES',
  lang: 'es',
  schemaType: 'Person',

  // SEO defaults
  defaultTitle: 'Yerai Jiménez — SEO técnico, contenido con IA y email marketing',
  defaultDescription:
    'Construyo webs para negocios locales de servicios con SEO técnico riguroso, blogs autoalimentados con IA y email marketing. Caso real: reparaciondetejadosvitoria.es.',
  defaultOgImage: '/og-default.jpg',

  // Marca (colores documentados — se aplican en global.css vía @theme)
  colors: { primary: '#0b1220', secondary: '#4f46e5', accent: '#22d3ee' },

  // ============================================================
  // LOS TRES PILARES DEL SERVICIO
  // ============================================================
  pillars: [
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />`,
      title: 'SEO técnico',
      description:
        'Estructura, velocidad, datos estructurados y contenido pensado para posicionar de verdad — sin trucos ni prácticas que Google penaliza. Cada decisión se verifica, nunca se da por buena sin comprobarla.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />`,
      title: 'Contenido automatizado con IA',
      description:
        'Sistemas de generación de contenido con calendario editorial y validación de calidad antes de publicar: longitud mínima, sin enlaces inventados, sin publicar si algo falla. La IA genera, pero nunca publica sin control.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />`,
      title: 'Email marketing',
      description:
        'Captación de leads, secuencias de nurture automatizadas y comunicación directa con el cliente del negocio — la pieza que la mayoría de webs de servicios locales no tiene.',
    },
  ] satisfies Pillar[],

  // ============================================================
  // PROYECTOS
  // ============================================================
  projects: [
    {
      slug: 'tejados-vitoria',
      name: 'Tejados Vitoria Express',
      url: 'https://reparaciondetejadosvitoria.es',
      shortDesc:
        'Web completa para una empresa real de reparación de tejados en Vitoria-Gasteiz: SEO técnico, blog autoalimentado con IA y arquitectura de servicios/zonas.',
      tags: ['Astro', 'Tailwind', 'Vercel', 'SEO técnico', 'IA'],
      status: 'live',
    },
  ] satisfies Project[],
};
