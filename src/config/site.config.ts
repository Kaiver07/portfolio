// ============================================================
// ARCHIVO MAESTRO DE CONFIGURACIÓN
// Todo el texto y los datos de la web salen de aquí.
// Regla: ningún dato que no se pueda comprobar en el repo de cada web.
// ============================================================

export interface Extra {
  slug: string;
  name: string;
  summary: string;
  includes: string[];
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
  role: 'Clientes por Google para oficios',
  email: 'yerayjimeenez07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yeray-jimenez0770/',
  github: 'https://github.com/Kaiver07',
  locale: 'es_ES',
  lang: 'es',

  defaultTitle: 'Clientes desde Google para empresas de tejados, reformas y pavimentos | Yerai Jiménez',
  defaultDescription:
    'Webs que ya salen en Google en tu ciudad, en exclusiva para un solo negocio por oficio y zona. Tú recibes las llamadas y pagas una cuota al mes, sin inversión inicial.',
  defaultOgImage: '/og-default.jpg',

  // Cifras de la home: sumas de los cinco casos de oficios en producción
  // (contadas en el build de cada web). Si cambia un caso, cambian aquí.
  stats: [
    { value: '5', label: 'webs de oficios en producción' },
    { value: '66', label: 'localidades con página propia' },
    { value: '42', label: 'artículos publicados por el blog automático' },
    { value: '2', label: 'webs más en preparación' },
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
          a: 'La base ya está hecha y funcionando en otras webs, así que lo que más tiempo lleva es reunir tus datos: servicios, zonas, fotos de obras y la ficha de Google. Con eso, la web se monta en días, no en meses.',
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
          text: 'Páginas por localidad y por barrio cuando hace falta, preparadas para que Google entienda dónde trabajas.',
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
          text: 'Galería de trabajos realizados con fotos que cargan rápido también en el móvil.',
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
          a: 'Sí, dos: hormigón impreso en Elche y Alicante, y resina epoxi y microcemento en Marbella y la Costa del Sol. Las dos están en la sección de casos.',
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
          a: 'Añadir un servicio o una zona es añadir una entrada a la configuración de la web: la página nueva se crea sola, lista para que Google la encuentre.',
        },
        {
          q: '¿La web es mía?',
          a: 'Hay dos modalidades. En exclusiva, la web es mía, tú la usas en tu zona y pagas una cuota al mes sin inversión inicial. En propiedad, la web y el dominio son tuyos desde el primer día.',
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
        'Una empresa de reparación de tejados en Vitoria-Gasteiz necesitaba presencia en Google desde cero, en un sector donde casi todos los competidores tienen webs antiguas, lentas o que Google casi no enseña.',
      built: [
        'Una página por servicio (reparación, retejado, goteras, canalones, claraboyas, aislamiento, fachadas, cubiertas industriales...), cada una con su título, su descripción, su contenido y sus preguntas frecuentes.',
        'Una página por cada localidad de Álava donde trabaja la empresa, escrita para esa zona y no copiada cambiando el nombre.',
        'Dirección, horario y zonas de trabajo explicados a Google en todas las páginas.',
        'Fotos que cargan rápido; la de la portada se cambió al ver que era lo que más tardaba en el móvil.',
        'Un artículo nuevo cada semana sobre dudas reales de los clientes, revisado antes de publicarse: si algo falla, no sale.',
        'Medición de visitas sin cookies, así que no hace falta banner de consentimiento.',
      ],
      decisions: [
        'Se descartó poner estrellas de reseñas propias en Google: habría quedado bonito, pero va contra sus normas.',
        'Se detectó una contradicción de precios entre dos páginas antes de publicar, revisando la web como lo haría un cliente.',
      ],
      result:
        'La web está en producción. Cuando haya cifras de Google que se puedan enseñar (cuánta gente la ve y cuánta entra), aparecerán aquí. No antes.',
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
        'Colores sacados del logo del negocio, no de un diseño de serie.',
        'Se quitó Google Analytics y con él el banner de cookies: la medición es sin cookies.',
      ],
      result:
        'En producción desde agosto de 2026. Las cifras de Google se publicarán aquí cuando haya suficientes datos.',
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
        'Galería con fotos reales de obras de la empresa.',
        'Blog semanal automático publicado desde GitHub y avisado a los buscadores al momento.',
      ],
      decisions: [
        'Las fotos de obras son de la empresa; los servicios de los que aún no hay fotos propias se cambiarán en cuanto lleguen.',
        'El aviso legal no muestra datos del Registro Mercantil mientras no estén confirmados.',
      ],
      result: 'En producción. Las cifras se añadirán cuando se puedan comprobar.',
    },
    {
      slug: 'resina-epoxi-marbella',
      name: 'Pavimentos Resina Epoxi Albamar',
      url: 'https://resinaepoximarbella.es',
      sector: 'Resina epoxi y microcemento',
      vertical: 'webs-para-pavimentos-y-hormigon-impreso',
      place: 'Marbella, Málaga y Costa del Sol',
      liveSince: 'octubre de 2026',
      image: '/casos/resina-epoxi-marbella.webp',
      shortDesc:
        'Web para un aplicador de resina epoxi y microcemento: 8 servicios, 13 localidades de la Costa del Sol y una página para cada servicio en cada localidad.',
      facts: [
        { value: '8', label: 'servicios con página propia' },
        { value: '13', label: 'localidades de la Costa del Sol' },
        { value: '104', label: 'páginas de servicio en cada localidad' },
      ],
      problem:
        'Un profesional de suelos de resina y microcemento de Málaga que competía en Google con grandes empresas: casi no había webs de profesionales como él.',
      built: [
        'Una página por servicio: suelos decorativos, garajes y parkings, industria alimentaria, naves, microcemento...',
        'Una página por cada localidad de la Costa del Sol donde trabaja, de Marbella y Estepona a Málaga, Mijas o Vélez-Málaga.',
        'Una página para cada servicio en cada localidad (104 en total), cada una con su texto y sus preguntas propias, sin copiar cambiando el nombre del pueblo.',
        'Formulario de presupuesto, llamada y WhatsApp, y correo con su dominio que llega a su buzón.',
        '100 sobre 100 en la prueba de calidad de Google para móvil (Lighthouse) en las páginas medidas tras la revisión del 6 de octubre.',
      ],
      decisions: [
        'Las reseñas son las de su ficha de Google, copiadas tal cual. Las que no hablaban de su trabajo se dejaron fuera.',
        'Las fotos de servicio que aún no son suyas están marcadas para cambiarlas en cuanto lleguen las propias.',
      ],
      result:
        'Publicada en octubre de 2026 y dada de alta en Google. Las cifras de Google se publicarán aquí cuando haya suficientes datos.',
    },
    {
      slug: 'hormigon-impreso-elche',
      name: 'Hormigón y Reformas AC',
      url: 'https://hormigonimpresoenelche.es',
      sector: 'Hormigón impreso',
      vertical: 'webs-para-pavimentos-y-hormigon-impreso',
      place: 'Elche y Alicante',
      liveSince: 'septiembre de 2026',
      image: '/casos/hormigon-impreso-elche.webp',
      shortDesc:
        'Web para una empresa de hormigón impreso de Elche: 9 servicios, 12 localidades de Elche y Alicante y presupuesto con visita a la obra.',
      facts: [
        { value: '9', label: 'servicios con página propia' },
        { value: '12', label: 'localidades de Elche y Alicante' },
        { value: '3', label: 'artículos en el blog' },
      ],
      problem:
        'Una empresa de hormigón impreso de Elche con dos fichas de Google y una web antigua enlazada a una de ellas, sin páginas para cada servicio ni para cada localidad.',
      built: [
        'Una página por servicio: hormigón impreso, pulido y vertical, entradas de garaje, piscinas, resinado, desactivado, soleras y microcemento.',
        'Una página por cada localidad de Elche y Alicante donde trabajan.',
        'Galería de trabajos, formulario de presupuesto con visita a la obra, llamada y WhatsApp.',
        'Correo con su dominio que llega a su buzón, comprobado de principio a fin.',
      ],
      decisions: [
        'Sin precios en la web, por decisión del negocio, aunque mucha gente busque el precio por metro.',
        'El mismo horario en las dos fichas de Google, para que Google no reciba datos que se contradicen.',
      ],
      result:
        'En producción desde finales de septiembre de 2026. Las cifras de Google se publicarán aquí cuando haya suficientes datos.',
    },
  ] satisfies Case[],

  // Zonas ocupadas: oficio y ciudad de cada web en exclusiva, sin nombres.
  // Servicios Generales Manuel no va aquí: es una web propia del negocio.
  zonesTaken: [
    { trade: 'Tejados', place: 'Vitoria-Gasteiz y Álava', status: 'Ocupada' },
    { trade: 'Impermeabilización', place: 'Benidorm y Marina Baixa', status: 'Ocupada' },
    { trade: 'Resina epoxi y microcemento', place: 'Marbella y Costa del Sol', status: 'Ocupada' },
    { trade: 'Hormigón impreso', place: 'Elche y Alicante', status: 'Ocupada' },
    { trade: 'Tejados', place: 'Burgos', status: 'Reservada' },
    { trade: 'Tejados', place: 'Miranda de Ebro', status: 'Reservada' },
  ],

  // Lo que no se promete: el contrapunto a quien vende cursos y cifras.
  noPromises: [
    {
      title: 'Salir el primero en Google en dos semanas',
      text: 'Nadie controla eso. Una web nueva necesita tiempo, y quien te lo garantiza te está vendiendo humo.',
    },
    {
      title: 'Que vas a facturar tanto al mes',
      text: 'Depende de tu zona, de tus precios y de cómo cojas el teléfono. Te enseño lo que pasa, no lo que me invento.',
    },
    {
      title: 'Cursos ni mentorías',
      text: 'No te vendo un curso para que montes esto tú. Hago las webs y me encargo de que funcionen.',
    },
    {
      title: 'Reseñas, fichas o negocios falsos',
      text: 'Ni para ti ni para mí. Es lo primero que Google castiga, y te puede dejar sin la ficha.',
    },
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
  // LA OFERTA: clientes en tu zona (web en exclusiva por oficio y ciudad).
  // Sin precios publicados: la cuota depende del oficio y la ciudad.
  // ============================================================
  offer: {
    name: 'Clientes en tu zona',
    summary:
      'Hago una web que sale en Google para un oficio en una ciudad, y se la cedo a un solo negocio de esa zona. Las llamadas y los presupuestos te llegan a ti. Tú pagas una cuota al mes, sin inversión inicial.',
    steps: [
      {
        title: 'Me dices tu oficio y tu ciudad',
        text: 'Compruebo si la zona está libre. Solo trabajo con un negocio por oficio y zona, así que si ya hay alguien, te lo digo.',
      },
      {
        title: 'Pongo la web a tu nombre',
        text: 'Con tu teléfono, tu WhatsApp, tus servicios, tus fotos y tu ficha de Google. Si la web de tu zona aún no existe, la monto con la misma base que las que ya funcionan.',
      },
      {
        title: 'Te llegan las llamadas',
        text: 'Directamente a ti: llamada, WhatsApp o formulario de presupuesto. Sin intermediarios ni comisiones por trabajo.',
      },
      {
        title: 'Cada mes, lo que ha pasado',
        text: 'Yo me encargo de que la web siga subiendo en Google: un artículo nuevo cada semana, revisión de que Google la sigue enseñando y un resumen al mes en lenguaje claro.',
      },
    ],
    includes: [
      'Web con una página por servicio y por localidad',
      'Tu teléfono, tu WhatsApp y formulario de presupuesto',
      'Exclusiva de tu oficio en tu zona',
      'Un artículo nuevo cada semana, revisado antes de publicar',
      'Revisión semanal de cómo sale en Google',
      'Resumen mensual de lo que ha pasado',
    ],
    priceText:
      'Cuota mensual según tu oficio y tu ciudad: no es lo mismo un tejado en una capital que en un pueblo. Te la digo antes de empezar, por escrito.',
    // Comparación con contratar una web a una agencia. Solo hechos del modelo.
    comparison: [
      { label: 'Pago al empezar', agency: 'Sí, la web se paga antes de que traiga nada', me: 'No: cuota al mes' },
      { label: 'Quién se ocupa de Google', agency: 'Tú, o lo pagas aparte', me: 'Yo, incluido' },
      { label: 'Tu competencia en la zona', agency: 'Puede contratar lo mismo', me: 'Un solo negocio por oficio y zona' },
      { label: 'Si no te compensa', agency: 'La inversión ya está hecha', me: 'Lo dejas al final de la permanencia acordada' },
    ],
    faqs: [
      {
        q: '¿Cuánto cuesta?',
        a: 'Depende del oficio y de la ciudad: cuánta competencia hay y cuánto vale un trabajo medio. Te digo la cuota antes de empezar, por escrito, y no hay inversión inicial.',
      },
      {
        q: '¿Por qué solo un negocio por zona?',
        a: 'Porque si diera la misma web a dos empresas del mismo oficio en la misma ciudad, competiría contra mí mismo y ninguna de las dos saldría ganando.',
      },
      {
        q: '¿La web es mía?',
        a: 'En esta modalidad, la web y el dominio son míos y tú los usas en exclusiva mientras dure el acuerdo. Tu teléfono, tu ficha de Google y tus clientes son siempre tuyos. Si prefieres una web en propiedad, también la hago.',
      },
      {
        q: '¿Qué pasa si lo dejo?',
        a: 'Al terminar la permanencia acordada puedes dejarlo. La web deja de llevar tus datos y la zona vuelve a quedar libre para otro negocio.',
      },
      {
        q: '¿Me garantizas salir el primero en Google?',
        a: 'No, y desconfía de quien te lo garantice: depende de tu competencia, de tu ficha y de tus reseñas. Lo que sí te garantizo es una web bien hecha, datos reales y un resumen mensual de lo que pasa.',
      },
      {
        q: '¿Y si ya tengo web?',
        a: 'Puedes quedártela. Antes de nada te digo gratis cómo estás hoy en Google en tu ciudad y si te compensa una web en exclusiva o mejorar la tuya.',
      },
    ],
  },

  // En qué se diferencia de otras ofertas de webs en alquiler o de leads.
  // Solo cosas que se cumplen en las webs publicadas.
  differentiators: [
    {
      title: 'La ficha de Google es tuya',
      text: 'La web se enlaza a tu propia ficha de empresa. No alquilo fichas de Google ni creo negocios falsos en Maps: va contra las normas de Google y te puede dejar sin nada.',
    },
    {
      title: 'Webs reales que puedes visitar',
      text: 'Las webs que enseño están publicadas, con el nombre del negocio que las usa. Nada de ejemplos inventados.',
    },
    {
      title: 'Los contactos son solo tuyos',
      text: 'No reparto el mismo presupuesto entre varios profesionales como los portales de reformas: lo que llega por tu web te llega a ti.',
    },
    {
      title: 'Sin trampas para subir en Google',
      text: 'Ni reseñas inventadas ni cifras sin respaldo. Lo que hace subir la web es contenido propio por servicio y por localidad.',
    },
  ],

  // Servicios complementarios, para quien no busca la exclusiva.
  extras: [
    {
      slug: 'web-en-propiedad',
      name: 'Web en propiedad',
      summary: 'Para quien prefiere que la web y el dominio sean suyos desde el primer día. Misma base y el mismo trabajo para salir en Google.',
      includes: [
        'Una página por servicio y por localidad',
        'Formulario de presupuesto, llamada y WhatsApp',
        'Correo con tu dominio',
        'Seguimiento mensual opcional',
      ],
    },
    {
      slug: 'ficha-de-google',
      name: 'Ficha de Google',
      summary: 'Optimizar tu perfil de empresa en Google y enlazarlo bien con la web, que es lo que más pesa en las búsquedas locales.',
      includes: [
        'Categorías, servicios y zonas revisados',
        'Fotos y descripción',
        'Enlace y QR para pedir reseñas reales',
        'Nombre, dirección y teléfono iguales en todas partes',
      ],
    },
  ] satisfies Extra[],

  // ============================================================
  // CÓMO TRABAJO
  // ============================================================
  process: [
    {
      title: 'Consulta gratis',
      text: 'Me dices tu oficio y tu ciudad. Te digo si la zona está libre y, de paso, cómo estás hoy en Google frente a tu competencia, aunque no trabajemos juntos.',
    },
    {
      title: 'Datos reales',
      text: 'Me pasas servicios, zonas, horario, fotos y tu ficha de Google. Lo que falta se queda marcado como pendiente: la web no se publica con datos de ejemplo.',
    },
    {
      title: 'Web en días',
      text: 'La base ya funciona en otras webs, así que el tiempo se va en tus servicios y tus fotos, no en reinventar nada.',
    },
    {
      title: 'Seguimiento',
      text: 'Cada semana reviso cómo sale cada web en Google, y cada mes te mando un resumen con lo que ha cambiado y lo siguiente que voy a hacer.',
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
      name: 'La misma base en todas las webs',
      text: 'Cada servicio y cada pueblo tiene su página. Y si falta un dato de verdad (teléfono, dirección, horario), la web no se publica con uno inventado.',
    },
    {
      name: 'Revisión cada lunes',
      text: 'Cada lunes miro cómo ha ido cada web en Google y si Google ha cambiado algo. Si hay que tocar algo, como mucho tres cosas, y se hacen.',
    },
    {
      name: 'Panel de control',
      text: 'Todas las webs en una pantalla: cuánta gente entra, qué busca, si la web funciona y si el artículo de la semana salió.',
    },
  ],
};
