# Brief de rediseño — Portfolio (Yerai Jiménez)

Brief para pegar en claude.ai/design. Objetivo: rediseño visual del portfolio
actual, manteniendo el contenido/estructura de `site.config.ts` y las
secciones ya escritas (están validadas), pero elevando la ejecución visual.

## El negocio

Freelance que construye webs de captación de leads para negocios locales de
servicios (gremios: tejados, impermeabilización; inmobiliarias) con un
paquete de tres pilares: **SEO técnico + contenido autoalimentado con IA +
email marketing**. Caso real ya en producción: Tejados Vitoria Express
(`reparaciondetejadosvitoria.es`). Más casos en camino (inmobiliaria,
impermeabilización).

- **Audiencia de esta web**: dueños de negocios locales de servicios
  (gremios, inmobiliarias) evaluando si confiarle su web y captación de
  clientes a esta persona. **No son técnicos ni developers.** Deciden por
  confianza y claridad, no por sofisticación de interfaz.
- **Tono de marca**: rigor sin venderse como "agencia con superpoderes de
  IA". La frase que mejor resume la propuesta: *"si no es un dato real y
  verificado, no lo vas a ver aquí"* — se rechazaron reseñas falsas aunque
  sumaban en Google, se corrigió una contradicción de precios antes de
  publicar. Ese rigor es el argumento de venta, no un detalle de relleno.
- **Precio/nivel**: freelance en construcción de cartera, no agencia
  establecida — la web no debe fingir un tamaño que no tiene, pero sí debe
  transmitir seriedad y capacidad técnica real.

## Lección de un rediseño anterior (aplica directamente aquí)

En otro proyecto (`melero-realty`) un primer intento con Claude Design usó
un sistema "Modernist": monocromo, cero border-radius, tipografía en
mayúsculas a tamaño póster, fotografía solo en blanco y negro. La clienta lo
rechazó en producción: *"No me gusta nada la estética. Es como entrar a
Claude."* — se leía como interfaz de herramienta técnica/IA, no como marca
de confianza.

**Aquí el riesgo es el mismo pero más directo**: esta web la va a ver un
dueño de negocio de tejados o una inmobiliaria decidiendo si confiar su
captación de clientes a esta persona. Si la web parece "landing genérica de
producto de IA/SaaS", desconfían justo de quien les va a vender SEO +
contenido con IA para su propio negocio. **No repetir el error de
monocromo + cero radius + tipografía póster como única dirección.**

## Dirección elegida: híbrido — serio pero no frío

Ni "portfolio de developer" puro (demasiado técnico/frío para el cliente
final del gremio) ni "agencia de marketing genérica" (gradiente
morado-azul, iconos redondos flotantes, todo `rounded-2xl`). El punto medio:

- Referencias de mundo válidas: **agencias de marketing técnico serias**
  (no genéricas de plantilla), **estudios de producto B2B con tono
  humano** — sitios que demuestran capacidad técnica real sin parecer
  fríos ni de interfaz de herramienta.
- Evitar: monocromo total, cero radius en todo, tipografía en mayúsculas
  póster (la lección de Modernist), pero también evitar gradientes
  morado-azul genéricos, iconos redondos de stock, tarjetas con barra de
  acento lateral tipo plantilla de agencia SEO.
- Debe transmitir a la vez: **"sé lo que hago técnicamente"** (para que un
  dueño de negocio confíe en la parte SEO/desarrollo) y **"soy una persona
  seria con la que se puede hablar"** (para que no dé miedo escribir).

## Moodboard de referencia (adjuntar ambas capturas en claude.ai/design)

Se probaron dos referencias en el proceso de brief. **La segunda es la
dirección elegida** — la primera queda documentada solo como "lo que NO":

1. **Referencia descartada** ("Alex Graham", portfolio de Art Director):
   fondo negro, foto en monocromo dramático superpuesta al nombre en
   tipografía gigante, acento rojo sangre, todo muy "director de arte
   presumiendo de diseño ante otros diseñadores". Se descarta por el mismo
   motivo que falló Modernist en `melero-realty`: prioriza impresionar
   sobre dar confianza, y aquí el visitante es un dueño de negocio local,
   no un reclutador de agencia creativa.

2. **Referencia elegida** (portfolio estilo "Moxa/Tayler", plantilla de
   creative freelancer): fondo claro cálido, foto real recortada en
   círculo, titular cercano y directo ("Hi, I'm Tayler..."), franja de
   stats (años/proyectos/clientes), lista numerada de logros, marquesina
   de texto en movimiento con skills, grid de portfolio. **Esta es la base
   a pedir a Claude Design.**

### Cómo adaptar esta referencia a tu contenido real (no copiar literal)

- **Franja de stats**: aquí es donde más cuidado hay que tener. La
  plantilla usa "50+ proyectos, 30+ clientes felices" — números de relleno
  inflados. Tu marca ya tiene el principio de "si no es un dato real y
  verificado, no lo vas a ver aquí" (está en tu copy actual). Los números
  reales hoy son modestos (proyectos en producción: 1 público en el
  portfolio + varios más en camino). **Pedir a Claude Design que el
  componente de stats admita números pequeños y honestos sin verse vacío**
  — ej. "Proyectos en producción", "Sectores distintos", "SEO técnico +
  IA + email, siempre los tres juntos" en vez de cifras infladas. Si al
  final los números dan vergüenza en pequeño, se puede quitar esta franja
  y usar ese espacio para la sección de "Sobre mí"/rigor.
- **Bloque "Awards" de la referencia** → reconvertir en **"Cómo trabajo"**:
  misma estructura de lista numerada con icono, pero con tus ejemplos
  reales de rigor (rechazar reseñas falsas, detectar la contradicción de
  precios antes de publicar, bloquear publicación de contenido con IA si
  falla una validación) en vez de premios de diseño.
- **Marquesina de texto en movimiento** → tu stack y pilares reales:
  "SEO TÉCNICO · CONTENIDO CON IA · EMAIL MARKETING · ASTRO · TAILWIND ·
  VERCEL" en bucle, en vez de "DESIGN · BRANDING · STRATEGY...".
- **Grid de portfolio** → tarjetas de caso de estudio (hoy 1, con espacio
  para crecer a 3-4), no thumbnails de diseño gráfico.

### Foto

Decisión: se usa la foto actual (perfil en sombra, tratamiento casi
ilustrado/artístico) — es la única disponible por ahora. Como esta foto
juega en contra de la calidez de la referencia 2, hay que compensarlo en
el tratamiento, no en la foto en sí:

- **Recorte pequeño y circular** (como en la referencia Moxa), no un
  retrato grande a sangre completa como en la referencia 1 descartada —
  cuanto más grande y protagonista, más pesa el tono dramático de la foto.
- **Fondo cálido detrás del círculo** (el mismo tono de acento ámbar/crema
  de la paleta, no negro) para suavizar el contraste duro de la sombra.
- **El peso del hero recae en el titular y el copy**, no en el retrato —
  la foto acompaña, no protagoniza. Esto es justo al revés que la
  referencia 1 (donde la cara ocupaba toda la sección).
- Si más adelante aparece una foto con más luz y cara visible, sustituir
  sin tocar el resto del sistema — el layout no debe depender de que esta
  foto concreta sea la definitiva.

## Paleta y tipografía — decisión concreta (a pedir explícitamente)

Para romper con el look "SaaS técnico" (navy/indigo/cyan actual) sin
perder seriedad, y para que la web resuene con el mismo lenguaje visual
"cálido/de confianza" que ya usas en el trabajo real para clientes
(ámbar en `impermeabilizaciones-benidorm`, dorado en `melero-realty`):

```
Fondo:        cálido, casi blanco (ej. #FAF7F2 / #F7F5F1) — no blanco puro
Texto/ink:    carbón cálido, no negro puro (ej. #1A1D23)
Acento:       ámbar/terracota cálido (ej. #D97706 o similar) para CTAs y
              detalles — mismo espíritu que el ámbar ya usado en tus
              proyectos de cliente reales
Bloque oscuro puntual: el mismo carbón cálido a sangre completa, solo en
              la marquesina de skills y el CTA final/footer — no todo el
              sitio en oscuro
```

Tipografía: sans moderna con calidez (peso legible, no geométrica fría) —
proponer algo tipo **Manrope** o **Plus Jakarta Sans** vía Google Fonts en
vez de `system-ui` puro. Radius: consistente y suave (`rounded-xl`/`2xl`,
foto en círculo) — nunca cero-radius.

## Lo que NO cambiar (contenido validado, fuente: `src/config/site.config.ts`)

Estructura de la home (`src/pages/index.astro`), en orden:

1. Header — logo + nombre, nav (Inicio/Servicios/Proyectos/Contacto), CTA
   "Escríbeme"
2. Hero — badge "Freelance · Webs para negocios locales de servicios",
   titular en 3 líneas (SEO técnico / Contenido con IA / Email marketing),
   párrafo, 2 CTAs, 3 badges de confianza ("SEO sin trucos que penalicen",
   "Contenido con validación real", "Sin datos ni reseñas fabricadas")
3. Sobre mí — "Rigor antes que atajos", 2 párrafos explicando el
   diferencial y la disciplina de verificación
4. Servicios — 3 tarjetas (los pilares: SEO técnico, Contenido
   automatizado con IA, Email marketing), cada una con icono + título +
   descripción
5. Proyectos — tarjeta(s) de caso de estudio con estado "En producción",
   nombre, descripción corta, tags, 2 CTAs (ver caso / visitar web). Hoy
   hay 1 proyecto, el sistema debe soportar bien 2-4 sin verse vacío ni
   apretado
6. CTA final — bloque de fondo oscuro, pregunta directa + CTA único
7. Footer — 3 columnas (sobre mí + email, navegación, redes: LinkedIn/GitHub)

También existe una página de caso de estudio (`proyectos/tejados-vitoria.astro`)
con prosa larga (`.case-prose`: h2/h3/p/ul) — el sistema tipográfico nuevo
debe cubrir bien contenido de lectura larga, no solo bloques cortos de
marketing.

## Marca actual (punto de partida, no obligación de mantener)

```
--color-brand-primary:       #0b1220  (navy muy oscuro, casi negro)
--color-brand-primary-dark:  #05070d
--color-brand-secondary:     #4f46e5  (indigo)
--color-brand-secondary-dark:#4338ca
--color-brand-accent:        #22d3ee  (cyan)
```

Fuente: `system-ui` (sin fuente custom todavía). Radius actual: `rounded-lg`
/ `rounded-xl` / `rounded-2xl` según componente, sin sistema unificado.

⚠️ Diagnóstico honesto: navy + indigo + cyan es una paleta muy "SaaS/dev
tool" — es probablemente parte de por qué la web hoy se lee más "portfolio
técnico" que "consultor de confianza para mi negocio". Es libre decidir si
Claude Design mantiene esta paleta con más carácter o propone una dirección
de color distinta, pero si se mantiene, que sea una decisión consciente y
no por inercia.

## Qué pedir a Claude Design explícitamente

- Sistema tipográfico con jerarquía clara, que funcione tanto en titulares
  de marketing (hero) como en prosa larga (caso de estudio) — no solo una
  fuente vistosa para titulares.
- Paleta definitiva y su razón de ser: si se mantiene navy/indigo/cyan,
  justificar por qué encaja con "confianza para dueño de negocio local";
  si se propone otra, que resuelva explícitamente el problema de "parece
  SaaS técnico".
- Radius y lenguaje de forma consistente en todo el sitio (tarjetas de
  servicio, tarjeta de proyecto, botones) — decidir una dirección (con
  algo de suavidad, ni póster-anguloso ni excesivamente redondeado) y
  aplicarla igual en todos los componentes.
- Tratamiento de las 3 tarjetas de "Servicios" y de la tarjeta de
  "Proyecto" — son los dos patrones que más se repiten y donde más se nota
  si el diseño es genérico.
- Cómo se ve el badge de confianza del hero (los 3 puntos con check) sin
  que parezcan checklist de landing de producto SaaS.
- Estados hover/focus de los CTAs (`btn-cta`, `btn-outline-white`,
  `btn-primary`).
- Diseño del header sticky y del footer de 3 columnas.

## Entrega

Astro + Tailwind v4 (`@tailwindcss/vite`, sin `tailwind.config` — tokens vía
`@theme`/CSS vars en `src/styles/global.css`, ver formato actual arriba). El
sync de vuelta a este repo se hace con `DesignSync` en cuanto haya un
resultado en claude.ai/design — enseñar una captura antes de darlo por
definitivo, no portarlo a producción a ciegas (lección de `melero-realty`:
mostrarlo primero evita rehacer todo el trabajo si la dirección no encaja).
