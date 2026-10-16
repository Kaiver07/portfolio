// ============================================================
// ARCHIVO MAESTRO DE CONFIGURACIÓN
// Todo el texto y los datos de la web salen de aquí.
// Regla: ningún dato que no se pueda comprobar en el repo de cada web.
// ============================================================

export interface Service {
  slug: string;
  name: string;
  summary: string;
  includes: string[];
  // PROPUESTA de precio: confirmar antes de publicar en el dominio definitivo.
  price: string;
  priceNote: string;
}

export interface Case {
  slug: string;
  name: string;
  url: string;
  sector: string;
  vertical: string; // slug de la página de oficio a la que pertenece
  place: string;
  liveSince?: string;
  image: string; // captura en /public/casos/
  shortDesc: string;
  facts: { value: string; label: string }[];
  problem: string;
  built: string[];
  decisions: string[];
  result: string;
}

export interface Vertical {
  slug: string; // URL completa: /<slug>/
  trade: string; // "empresas de tejados"
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  pains: { title: string; text: string }[];
  pages: string[]; // ejemplos de páginas que se crean para ese oficio
  faqs: { q: string; a: string }[];
}

export const site = {
  name: 'Yerai Jiménez',
  role: 'Webs y SEO local para oficios',
  // PENDIENTE: el nombre aparece como «Yeray» en LinkedIn y en el email.
  // Conviene usar una sola forma en todas partes (también en Google).
  email: 'yerayjimeenez07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yeray-jimenez0770/',
  github: 'https://github.com/Kaiver07',
  locale: 'es_ES',
  lang: 'es',

  defaultTitle: 'Páginas web para empresas de tejados, reformas y pavimentos | Yerai Jiménez',
  defaultDescription:
    'Hago webs para oficios que salen en Google en su ciudad y traen llamadas: una página por servicio y por localidad, blog automático revisado y ficha de Google bien enlazada. Webs reales en producción.',
  defaultOgImage: '/og-default.jpg',

  // Cifras de la home: sumas de los tres casos de oficios en producción.
  // Si cambia un caso, cambian aquí.
  stats: [
    { value: '3', label: 'webs de oficios en producción' },
    { value: '41', label: 'localidades con página propia' },
    { value: '36', label: 'artículos publicados por el blog automático' },
    { value: '4', label: 'webs más en preparación' },
  ],

  // ============================================================
  // OFICIOS: cada uno es una página que posiciona por
  // «páginas web para <oficio>» y enseña sus casos.
  // ============================================================
  verticals: [
    {
      slug: 'webs-para-empresas-de-tejados',
      trade: 'empresas de tejados',
      navLabel: 'Tejados y cubiertas',
      title: 'Páginas web para empresas de tejados y cubiertas | Yerai Jiménez',
      description:
        'Webs para empresas de tejados que salen en Google cuando alguien busca «reparar tejado» en tu ciudad: una página por servicio y por pueblo, urgencias y presupuesto en un toque. Caso real en Vitoria.',
      h1: 'Páginas web para empresas de tejados que traen llamadas, no solo visitas',
      intro:
        'Quien tiene una gotera no compara diez webs: llama a la primera que le inspira confianza en Google. Hago webs para empresas de tejados pensadas para ese momento: que salgas cuando buscan tu servicio en tu ciudad y que llamarte sea lo más fácil de la página.',
      pains: [
        {
          title: 'Sales en tu ciudad, pero no en los pueblos de alrededor',
          text: 'Cada localidad donde trabajas tiene su propia página, con texto escrito para esa zona, no copiado cambiando el nombre.',
        },
        {
          title: 'Una sola página de «servicios» para todo',
          text: 'Reparación, retejado, canalones, impermeabilización, claraboyas... cada servicio tiene su página, porque cada uno se busca por separado.',
        },
        {
          title: 'Las urgencias se van a otro',
          text: 'Botón de llamada fijo en el móvil, WhatsApp y horario de urgencias visibles desde el primer segundo.',
        },
      ],
      pages: [
        'Reparación de tejados en <tu ciudad>',
        'Reparación de goteras y humedades',
        'Retejado y sustitución de tejas',
        'Canalones y bajantes',
        'Impermeabilización de cubiertas',
        'Una página por cada pueblo de tu zona',
      ],
      faqs: [
        {
          q: '¿Cuánto tarda en estar lista la web?',
          a: 'La estructura base sale de una plantilla probada en producción, así que lo que más tiempo lleva es reunir tus datos: servicios, zonas, fotos de obras y la ficha de Google. Con eso, la web se monta en días, no en meses.',
        },
        {
          q: '¿Necesito tener fotos de mis trabajos?',
          a: 'Ayudan mucho, porque Google y los clientes premian lo real. Si al principio no tienes, se usan imágenes provisionales marcadas como tal y se sustituyen en cuanto las mandes.',
        },
        {
          q: '¿Me pones reseñas para empezar con estrellas?',
          a: 'No. Las reseñas inventadas van contra las normas de Google y pueden hundir tu ficha. Lo que sí hago es ponerte fácil pedirlas a clientes reales, con un enlace directo y un QR.',
        },
      ],
    },
    {
      slug: 'webs-para-impermeabilizaciones',
      trade: 'empresas de impermeabilización',
      navLabel: 'Impermeabilización',
      title: 'Páginas web para empresas de impermeabilización | Yerai Jiménez',
      description:
        'Webs para empresas de impermeabilización de terrazas, cubiertas y goteras que posicionan en su zona. Caso real en producción en Benidorm.',
      h1: 'Páginas web para empresas de impermeabilización que se encuentran cuando hay una filtración',
      intro:
        'Terrazas, áticos, telas asfálticas, fibra de vidrio, sumideros: el cliente busca el problema concreto, no «impermeabilizaciones». Cada técnica y cada problema tienen su página, explicados para alguien que no sabe del tema.',
      pains: [
        {
          title: 'El cliente no sabe qué técnica necesita',
          text: 'Las páginas explican cada solución en lenguaje claro y con preguntas frecuentes, para que llegue a pedirte presupuesto ya convencido.',
        },
        {
          title: 'Zonas turísticas con mucha competencia',
          text: 'Páginas por localidad y por barrio cuando hace falta, con datos estructurados que Google entiende.',
        },
        {
          title: 'Los formularios llegan a un correo que nadie mira',
          text: 'Correo con tu dominio reenviado a tu Gmail y avisos de cada solicitud de presupuesto.',
        },
      ],
      pages: [
        'Impermeabilización de terrazas y áticos',
        'Reparación de goteras y filtraciones',
        'Telas asfálticas',
        'Fibra de vidrio y malla',
        'Reparación de sumideros',
        'Una página por cada localidad de tu zona',
      ],
      faqs: [
        {
          q: '¿Sirve si también hago tejados?',
          a: 'Sí. La web se monta con los servicios que haces de verdad. Si haces tejados e impermeabilización, cada uno tiene su página y se enlazan entre sí.',
        },
        {
          q: '¿Qué pasa con el blog?',
          a: 'Cada semana se publica un artículo sobre una duda real de tus clientes (por ejemplo, cuándo impermeabilizar antes de las lluvias). Lo redacta la IA, pero pasa controles automáticos y no se publica si falla alguno.',
        },
      ],
    },
    {
      slug: 'webs-para-pavimentos-y-hormigon-impreso',
      trade: 'empresas de pavimentos',
      navLabel: 'Pavimentos',
      title: 'Páginas web para empresas de hormigón impreso, resina y pavimentos | Yerai Jiménez',
      description:
        'Webs para empresas de hormigón impreso, pulido, microcemento y resina epoxi. Galería de trabajos, una página por acabado y por localidad.',
      h1: 'Páginas web para empresas de hormigón impreso, resina y pavimentos',
      intro:
        'En pavimentos el cliente compra con los ojos: quiere ver acabados, colores y trabajos parecidos al suyo. La web gira en torno a tus fotos reales, con una página por tipo de acabado y por localidad.',
      pains: [
        {
          title: 'Tus trabajos no se ven',
          text: 'Galería de trabajos realizados con fotos optimizadas que cargan rápido también en el móvil.',
        },
        {
          title: 'Compites con grandes empresas',
          text: 'En búsquedas locales, una web bien estructurada de un profesional de la zona puede salir por delante de las grandes.',
        },
        {
          title: 'Presupuestos sin datos',
          text: 'Formulario que pide lo que necesitas para presupuestar: metros, tipo de superficie, localidad y fotos.',
        },
      ],
      pages: [
        'Hormigón impreso',
        'Hormigón pulido',
        'Microcemento',
        'Resina epoxi para garajes y naves',
        'Entradas de garaje y piscinas',
        'Una página por cada localidad de tu zona',
      ],
      faqs: [
        {
          q: '¿Tienes alguna web de pavimentos publicada?',
          a: 'Ahora mismo hay dos en preparación, en Elche y en Marbella, con la misma plantilla que las webs de tejados e impermeabilización que ya están en producción. Las enseñaré como caso cuando estén publicadas, no antes.',
        },
        {
          q: '¿Puedo poner precios por metro?',
          a: 'Sí, si quieres. Muchos clientes buscan «precio hormigón impreso m2». Lo que no hago es publicar precios que no hayas confirmado tú.',
        },
      ],
    },
    {
      slug: 'webs-para-fontaneros-y-reformas',
      trade: 'fontaneros, cerrajeros y empresas de reformas',
      navLabel: 'Fontanería y reformas',
      title: 'Páginas web para fontaneros, cerrajeros y empresas de reformas | Yerai Jiménez',
      description:
        'Webs para fontaneros, cerrajeros, electricistas y empresas de reformas: urgencias, una página por servicio y por municipio. Caso real en Las Palmas de Gran Canaria.',
      h1: 'Páginas web para fontaneros, cerrajeros y empresas de reformas',
      intro:
        'Cuando se rompe una tubería o alguien se queda fuera de casa, gana quien sale primero y contesta antes. Si haces varios oficios, cada uno tiene su página y su búsqueda, sin mezclarlo todo en una lista.',
      pains: [
        {
          title: 'Haces de todo, pero la web no lo dice',
          text: 'Fontanería, desatascos, cerrajería, electricidad, albañilería y reformas: cada servicio con su página y sus preguntas frecuentes.',
        },
        {
          title: 'Urgencias 24 horas',
          text: 'Teléfono y WhatsApp siempre a mano en el móvil, con el horario de urgencias bien claro.',
        },
        {
          title: 'Trabajas en muchos municipios',
          text: 'Una página por municipio, para salir en «fontanero en Telde» y no solo en la capital.',
        },
      ],
      pages: [
        'Fontanero urgente en <tu ciudad>',
        'Desatascos',
        'Cerrajero 24 horas',
        'Electricista',
        'Reformas integrales',
        'Una página por cada municipio',
      ],
      faqs: [
        {
          q: '¿Y si mañana añado un servicio nuevo?',
          a: 'Añadir un servicio o una zona es añadir una entrada a la configuración de la web: la página nueva se crea sola con su título, su descripción y sus datos estructurados.',
        },
        {
          q: '¿La web es mía?',
          a: 'Depende de la modalidad: si la compras, el dominio y la web son tuyos. Si la alquilas, pagas al mes sin inversión inicial, con una permanencia mínima que se acuerda por escrito antes de empezar.',
        },
      ],
    },
  ] satisfies Vertical[],

  // ============================================================
  // CASOS (solo webs en producción).
  // PENDIENTE: confirmar con cada negocio que acepta salir aquí.
  // ============================================================
  cases: [
    {
      slug: 'tejados-vitoria',
      name: 'Tejados Vitoria Express',
      url: 'https://reparaciondetejadosvitoria.es',
      sector: 'Tejados y cubiertas',
      vertical: 'webs-para-empresas-de-tejados',
      place: 'Vitoria-Gasteiz y Álava',
      image: '/casos/tejados-vitoria.webp',
      shortDesc:
        'Web para una empresa de reparación de tejados en Vitoria-Gasteiz: 12 servicios, 18 localidades de Álava con página propia y blog semanal automático.',
      facts: [
        { value: '12', label: 'servicios con página propia' },
        { value: '18', label: 'localidades de Álava' },
        { value: '15', label: 'artículos en el blog' },
      ],
      problem:
        'Una empresa de reparación de tejados en Vitoria-Gasteiz necesitaba presencia en Google desde cero, en un sector donde casi todos los competidores tienen webs antiguas, lentas o sin estructura para posicionar.',
      built: [
        'Una página por servicio (reparación, retejado, goteras, canalones, claraboyas, aislamiento, fachadas, cubiertas industriales...), cada una con su título, su descripción, su contenido y sus preguntas frecuentes.',
        'Una página por cada localidad de Álava donde trabaja la empresa, escrita para esa zona y no copiada cambiando el nombre.',
        'Datos estructurados de empresa local (dirección, horario, zonas de servicio) en todas las páginas.',
        'Imágenes optimizadas y la imagen principal de la portada cambiada a formato optimizado tras detectar que era lo que más tardaba en cargar.',
        'Blog que publica cada semana un artículo del calendario editorial, con controles antes de publicar: longitud mínima, sin enlaces inventados y bloqueo si algo falla.',
        'Medición de visitas sin cookies, así que no hace falta banner de consentimiento.',
      ],
      decisions: [
        'Se descartó marcar reseñas propias con datos estructurados: habría sumado estrellas visibles en Google, pero va contra sus normas.',
        'Se detectó una contradicción de precios entre dos páginas antes de publicar, revisando la web como lo haría un cliente.',
      ],
      result:
        'La web está en producción. Cuando haya cifras de Google Search Console que se puedan enseñar (páginas indexadas, impresiones, clics), aparecerán aquí. No antes.',
    },
    {
      slug: 'impermeabilizaciones-benidorm',
      name: 'Impermeabilizaciones Benidorm',
      url: 'https://impermeabilizacionesbenidorm.es',
      sector: 'Impermeabilización',
      vertical: 'webs-para-impermeabilizaciones',
      place: 'Benidorm y Marina Baixa',
      liveSince: 'agosto de 2026',
      image: '/casos/impermeabilizaciones-benidorm.webp',
      shortDesc:
        'Web para una empresa de impermeabilización en Benidorm: 7 servicios técnicos explicados en lenguaje claro, 7 localidades de la Marina Baixa y blog semanal.',
      facts: [
        { value: '7', label: 'servicios con página propia' },
        { value: '7', label: 'localidades de la Marina Baixa' },
        { value: '9', label: 'artículos en el blog' },
      ],
      problem:
        'Una empresa de impermeabilización de Benidorm sin web propia, en una zona con mucha competencia y clientes que buscan el problema («gotera en la terraza»), no la técnica.',
      built: [
        'Una página por servicio: terrazas y áticos, goteras y filtraciones, tejados, canalones, fibra de vidrio, telas asfálticas y sumideros.',
        'Páginas por localidad para Benidorm y los municipios de alrededor.',
        'Dominio propio, correo con el dominio reenviado al Gmail del negocio y formulario de presupuesto comprobado de principio a fin.',
        'Puesta en producción verificada: certificado válido, redirección de www y de http, mapa del sitio, robots y página 404 real.',
        'Blog semanal automático con la misma validación que en Vitoria.',
      ],
      decisions: [
        'Colores sacados del logo del cliente, no de una plantilla.',
        'Se quitó Google Analytics y con él el banner de cookies: la medición es sin cookies.',
      ],
      result:
        'En producción desde agosto de 2026. Las cifras de Search Console se publicarán aquí cuando haya suficientes datos.',
    },
    {
      slug: 'servicios-generales-manuel',
      name: 'Servicios Generales Manuel',
      url: 'https://serviciosgeneralesmanuel.es',
      sector: 'Fontanería, cerrajería y reformas',
      vertical: 'webs-para-fontaneros-y-reformas',
      place: 'Las Palmas de Gran Canaria',
      image: '/casos/servicios-generales-manuel.webp',
      shortDesc:
        'Web para una empresa multiservicio de Las Palmas de Gran Canaria: 8 oficios con página propia, 16 municipios de la isla y fotos reales de obras.',
      facts: [
        { value: '8', label: 'servicios con página propia' },
        { value: '16', label: 'municipios de Gran Canaria' },
        { value: '12', label: 'artículos en el blog' },
      ],
      problem:
        'Una empresa que hace fontanería, desatascos, cerrajería, electricidad, albañilería, reformas, trabajos verticales y localización de arquetas, y necesitaba aparecer por cada uno de esos servicios en toda la isla.',
      built: [
        'Una página por servicio, con urgencias y teléfono en el título de cada una.',
        'Una página por municipio de Gran Canaria donde trabajan.',
        'Galería con fotos reales de obras de la empresa, optimizadas automáticamente.',
        'Blog semanal automático publicado desde GitHub y avisado a los buscadores al momento.',
      ],
      decisions: [
        'Las fotos de obras son de la empresa; los servicios de los que aún no hay fotos propias se cambiarán en cuanto lleguen.',
        'El aviso legal no muestra datos del Registro Mercantil mientras no estén confirmados.',
      ],
      result: 'En producción. Las cifras se añadirán cuando se puedan comprobar.',
    },
  ] satisfies Case[],

  // Webs en preparación: se enseñan sin nombre ni enlace hasta publicarse.
  upcoming: [
    { sector: 'Tejados', place: 'Burgos' },
    { sector: 'Tejados', place: 'Miranda de Ebro' },
    { sector: 'Hormigón impreso', place: 'Elche' },
    { sector: 'Resina epoxi', place: 'Marbella' },
  ],

  // Otros proyectos a medida (no son el servicio principal).
  // PENDIENTE: confirmar permiso para nombrarlos.
  otherWork: [
    {
      name: 'Melero Realty',
      url: 'https://www.valeriamelero.com',
      image: '/casos/melero-realty.webp',
      desc: 'Web de una agencia de marketing inmobiliario: formulario de diagnóstico que filtra contactos, blog con autor y animaciones a medida.',
    },
    {
      name: 'Tienda de recambios de coche',
      url: '',
      image: '',
      desc: 'Tienda online a medida con búsqueda por marca, modelo y año, cuentas de cliente, pago con tarjeta y panel de gestión. En fase de prototipo.',
    },
  ],

  // ============================================================
  // SERVICIOS Y PRECIOS
  // PROPUESTA: precios orientativos, confirmar antes de publicar.
  // ============================================================
  services: [
    {
      slug: 'web-propia',
      name: 'Web para tu negocio',
      summary: 'La web es tuya: dominio, textos y fotos. Pagas una vez y luego un mantenimiento pequeño.',
      includes: [
        'Una página por servicio y por localidad',
        'Formulario de presupuesto, llamada y WhatsApp',
        'Datos estructurados, mapa del sitio y velocidad',
        'Correo con tu dominio',
        'Aviso legal, privacidad y cookies',
      ],
      price: 'desde 900 €',
      priceNote: '+ 40 €/mes de alojamiento y mantenimiento',
    },
    {
      slug: 'web-en-alquiler',
      name: 'Web en alquiler',
      summary: 'Sin inversión inicial: uso una web que posiciona en tu zona y tú pagas al mes mientras te traiga trabajo. Un solo negocio por oficio y zona.',
      includes: [
        'Todo lo de la web propia',
        'Exclusiva de tu oficio en tu zona',
        'Blog semanal incluido',
        'Permanencia mínima corta, por escrito',
      ],
      price: 'desde 250 €/mes',
      priceNote: 'según oficio y ciudad',
    },
    {
      slug: 'ficha-de-google',
      name: 'Ficha de Google',
      summary: 'Optimizar tu perfil de empresa en Google y enlazarlo bien con la web, que es lo que más pesa en las búsquedas locales.',
      includes: [
        'Categorías, servicios y zonas revisados',
        'Fotos y descripción',
        'Enlace y QR para pedir reseñas reales',
        'Coherencia de nombre, dirección y teléfono',
      ],
      price: 'desde 200 €',
      priceNote: 'pago único',
    },
    {
      slug: 'seo-mensual',
      name: 'SEO mensual',
      summary: 'Para webs ya publicadas: blog semanal, revisión de lo que Google indexa y un informe mensual en lenguaje claro.',
      includes: [
        'Un artículo a la semana, revisado antes de publicar',
        'Control de páginas indexadas',
        'Informe mensual con 3 acciones como mucho',
        'Ajustes de títulos y textos según búsquedas reales',
      ],
      price: 'desde 150 €/mes',
      priceNote: 'sin permanencia',
    },
  ] satisfies Service[],

  // ============================================================
  // CÓMO TRABAJO
  // ============================================================
  process: [
    {
      title: 'Auditoría gratis',
      text: 'Miro tu web (si tienes), tu ficha de Google y a tu competencia en tu ciudad. Te digo qué falla y qué haría, aunque no trabajemos juntos.',
    },
    {
      title: 'Datos reales',
      text: 'Me pasas servicios, zonas, horario, fotos y tu ficha de Google. Lo que falta se queda marcado como pendiente: la web no se publica con datos de ejemplo.',
    },
    {
      title: 'Web en días',
      text: 'Parto de una plantilla probada en producción, así que el tiempo se va en tu contenido, no en reinventar la web.',
    },
    {
      title: 'Seguimiento',
      text: 'Cada semana se revisan todas las webs con datos de Google Search Console, y cada mes hay un informe con lo que ha cambiado y lo siguiente que hay que hacer.',
    },
  ],

  principles: [
    {
      title: 'Rechazo lo que suma en Google pero es falso',
      text: 'Nada de reseñas inventadas ni cifras sin respaldo, aunque técnicamente den estrellas.',
    },
    {
      title: 'Reviso antes de publicar, no después',
      text: 'Cada web se revisa como lo haría un cliente. Así se encontró una contradicción de precios antes de que nadie la viera.',
    },
    {
      title: 'La IA redacta, pero no publica sola',
      text: 'Cada artículo pasa controles automáticos y, si alguno falla, no sale.',
    },
  ],

  tools: [
    {
      name: 'Plantilla para oficios',
      text: 'La base de todas las webs: servicios, zonas y páginas de servicio en cada localidad, generadas desde un solo archivo. Si falta un dato obligatorio, no deja publicar.',
    },
    {
      name: 'Vigilancia SEO semanal',
      text: 'Cada lunes cruza Google Search Console y las actualizaciones de Google y manda un semáforo por web con, como mucho, 3 acciones.',
    },
    {
      name: 'Panel de control',
      text: 'Todas las webs en un panel: clics, consultas «a tiro», indexación, estado del blog y salud técnica.',
    },
  ],
};
