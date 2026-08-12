// Welcome Link — guide generator.
// Takes the Copal master (copal/index.html) and produces each other property's guide by swapping
// only the per-property pieces (hero, host note, "how we live here" character, guest count, pool),
// plus the property name/slug/urls. Everything else (team, arrival, beaches, eat, experiences, WiFi,
// contact) is shared across the Alebrijes collection and inherited verbatim.
//
//   node build.js
//
// Shared facts confirmed by the host: WiFi = "Villas Alebrijes" / "Alebrijes26" (whole collection),
// guide contact routes to the on-ground manager (Luis) on the Copal WhatsApp line.
const fs = require('fs'), path = require('path');
const root = __dirname;
const MASTER = fs.readFileSync(path.join(root, 'copal', 'index.html'), 'utf8');

// Copal's original values for the per-property keys (what we replace out). Same in every guide,
// so an exact global swap catches both the baked HTML and the T.en/T.es dictionary at once.
const OLD = {
  en: {
    'og-desc': 'A sanctuary for two, steps from a wild beach. Tierra en Armonía, La Barra.',
    'hero-h1': 'Welcome to <em>your sanctuary<br>by the sea</em>',
    'hero-sub': 'A calm little world for two, a few minutes from a wild, quiet beach. Everything you need for an easy, beautiful stay is here.',
    'welcome-note': '"Copal is the sacred resin we burn to purify a space and carry an intention. That is what we wish for your stay: a clearing, a deep breath, a return to yourself. This is a complete little home, cared for every day, a few minutes from a wild and quiet beach. We are so glad you came."',
    'host-reviews': '4.94 ★ · 233 reviews · 9 years hosting',
    'rule1-title': 'A calm little sanctuary',
    'rule1-text': 'A king bed, a waterfall shower, a private pool on the terrace, and Oaxacan craft in every corner. Made for a couple, and just as restful for one.',
    'guests-val': '2 maximum',
    'pool-label': 'Private pool',
    'pool-val': 'Yours alone, on the terrace'
  },
  es: {
    'hero-h1': 'Bienvenido a <em>tu santuario<br>junto al mar</em>',
    'hero-sub': 'Un mundo tranquilo para dos, a unos minutos de una playa salvaje y tranquila. Aquí tienes todo lo que necesitas para una estancia fácil y hermosa.',
    'welcome-note': '"El copal es la resina sagrada que quemamos para purificar un espacio y llevar una intención. Eso deseamos para tu estancia: un respiro, una pausa, un regreso a ti. Esta es una casa completa, cuidada cada día, a unos minutos de una playa salvaje y tranquila. Nos alegra mucho que hayas venido."',
    'host-reviews': '4.94 ★ · 233 reseñas · 9 años como anfitriona',
    'rule1-title': 'Un pequeño santuario tranquilo',
    'rule1-text': 'Cama king, regadera de cascada, alberca privada en la terraza, y arte oaxaqueño en cada rincón. Hecha para una pareja, e igual de descansada para uno.',
    'guests-val': '2 máximo',
    'pool-label': 'Alberca privada',
    'pool-val': 'Solo tuya, en la terraza'
  }
};

// Generic superhost line for the new guides (Copal's 233 is its own listing's count; don't reuse it).
const HOST_EN = '4.9 ★ Superhost · 9 years hosting';
const HOST_ES = '4.9 ★ Superhost · 9 años como anfitriona';

// Per-property overrides. Any key omitted falls back to Copal's value (fine for the couples' homes).
const C = {
  raiz: {
    property: 'Raíz',
    guests: { en: 'Up to 7', es: 'Hasta 7' },
    en: {
      'og-desc': 'The first home on the land, for a family or a group of up to seven. Tierra en Armonía, La Barra.',
      'hero-h1': 'Welcome to <em>the home where<br>it all began</em>',
      'hero-sub': 'The first house we ever built here, a warm home on two floors for your whole group. Everything you need for an easy, beautiful stay is here.',
      'welcome-note': '"Raíz means root. It was the first house we built on this land, our family home for years, where our son and this whole project were born. We love that it now holds other families. Make it yours, slow down, and feel at home. We are so glad you came."',
      'host-reviews': HOST_EN,
      'rule1-title': 'A home for your group',
      'rule1-text': 'Two floors and three bedrooms, made for up to seven and just as good for four. Downstairs opens to the pool; upstairs, a full kitchen, a long table, and a wide view of the Pacific.'
    },
    es: {
      'hero-h1': 'Bienvenido a <em>la casa donde<br>todo empezó</em>',
      'hero-sub': 'La primera casa que construimos aquí, un hogar cálido de dos plantas para todo tu grupo. Aquí tienes todo lo que necesitas para una estancia fácil y hermosa.',
      'welcome-note': '"Raíz significa raíz. Fue la primera casa que construimos en esta tierra, nuestro hogar familiar durante años, donde nacieron nuestro hijo y todo este proyecto. Nos encanta que ahora reciba a otras familias. Hazla tuya, baja el ritmo, y siéntete en casa. Nos alegra mucho que hayas venido."',
      'host-reviews': HOST_ES,
      'rule1-title': 'Una casa para tu grupo',
      'rule1-text': 'Dos plantas y tres recámaras, hecha para hasta siete y perfecta también para cuatro. La planta baja abre a la alberca; arriba, cocina completa, una mesa larga, y una vista amplia del Pacífico.'
    }
  },
  arrazola: {
    property: 'Arrazola',
    guests: { en: '2 maximum', es: '2 máximo' },
    en: {
      'og-desc': 'A home for two, a tribute to Oaxacan art, steps from a wild beach. Tierra en Armonía, La Barra.',
      'hero-h1': 'Welcome to <em>a home full<br>of color</em>',
      'hero-sub': 'A calm home for two, inspired by Oaxacan art, a few minutes from a wild, quiet beach. Everything you need for an easy, beautiful stay is here.',
      'welcome-note': '"Arrazola is one of the towns where the alebrijes are carved and painted. We named this home for that craft, and filled it with color, character, and calm. It is made for two, to slow down and simply be. We are so glad you came."',
      'host-reviews': HOST_EN,
      'rule1-title': 'A colorful home for two',
      'rule1-text': 'A king bed with air conditioning, a big shower, a private pool, and a terrace to slow down on. Oaxacan art in every corner. Made for a couple.'
    },
    es: {
      'hero-h1': 'Bienvenido a <em>una casa llena<br>de color</em>',
      'hero-sub': 'Una casa tranquila para dos, inspirada en el arte oaxaqueño, a unos minutos de una playa salvaje y tranquila. Aquí tienes todo lo que necesitas para una estancia fácil y hermosa.',
      'welcome-note': '"Arrazola es uno de los pueblos donde se tallan y pintan los alebrijes. Nombramos esta casa por ese arte, y la llenamos de color, carácter y calma. Está hecha para dos, para bajar el ritmo y simplemente ser. Nos alegra mucho que hayas venido."',
      'host-reviews': HOST_ES,
      'rule1-title': 'Una casa de artista para dos',
      'rule1-text': 'Cama king con aire acondicionado, una regadera grande, alberca privada, y una terraza para bajar el ritmo. Arte oaxaqueño en cada rincón. Hecha para una pareja.'
    }
  },
  nahual: {
    property: 'Nahual',
    guests: { en: 'Up to 5', es: 'Hasta 5' },
    en: {
      'og-desc': 'A larger home for family or friends, up to five, steps from a wild beach. Tierra en Armonía, La Barra.',
      'hero-h1': 'Welcome to <em>a place where<br>everything flows</em>',
      'hero-sub': 'A relaxed home for up to five, two ensuite bedrooms and a private pool, a few minutes from a wild, quiet beach. Everything you need is here.',
      'welcome-note': '"In Zapotec belief, the nahual is our spiritual guardian, carried in animal form. We named this home for transformation, a place to flow, share, and reconnect. Settle in with your people and let the days go slow. We are so glad you came."',
      'host-reviews': HOST_EN,
      'rule1-title': 'Room for your people',
      'rule1-text': 'Two bedrooms, each with its own bathroom and air conditioning, a spacious kitchen, a big dining room, and a private pool. Made for family or friends, up to five.'
    },
    es: {
      'hero-h1': 'Bienvenido a <em>un lugar donde<br>todo fluye</em>',
      'hero-sub': 'Una casa relajada para hasta cinco, dos recámaras en suite y alberca privada, a unos minutos de una playa salvaje y tranquila. Aquí tienes todo lo que necesitas.',
      'welcome-note': '"En la creencia zapoteca, el nahual es nuestro guardián espiritual, representado en forma de animal. Nombramos esta casa por la transformación, un lugar para fluir, compartir y reconectar. Acomódate con tu gente y deja que los días pasen lento. Nos alegra mucho que hayas venido."',
      'host-reviews': HOST_ES,
      'rule1-title': 'Espacio para tu gente',
      'rule1-text': 'Dos recámaras, cada una con su baño y aire acondicionado, una cocina espaciosa, un comedor grande, y alberca privada. Hecha para familia o amigos, hasta cinco.'
    }
  },
  tonal: {
    property: 'Tonal',
    guests: { en: 'Up to 5', es: 'Hasta 5' },
    en: {
      'og-desc': 'An open, light-filled home for up to five, built around an outdoor kitchen and a pool. Tierra en Armonía, La Barra.',
      'hero-h1': 'Welcome to <em>a home built<br>around the light</em>',
      'hero-sub': 'An open home for up to five, made for long afternoons around the outdoor kitchen and the pool, a few minutes from a wild beach. Everything you need is here.',
      'welcome-note': '"In Zapotec belief, the tonal is our life force, the light we each carry. We built this home around natural light and the presence of the sea. May it feel open and easy. Gather, rest, and enjoy every hour. We are so glad you came."',
      'host-reviews': HOST_EN,
      'rule1-title': 'Open, and full of light',
      'rule1-text': 'An outdoor kitchen and a private pool at the heart of it, two bedrooms with full bathrooms, and a terrace made for long afternoons with the ocean in view. Up to five.'
    },
    es: {
      'hero-h1': 'Bienvenido a <em>una casa hecha<br>de luz</em>',
      'hero-sub': 'Una casa abierta para hasta cinco, hecha para las tardes largas alrededor de la cocina exterior y la alberca, a unos minutos de una playa salvaje. Aquí tienes todo lo que necesitas.',
      'welcome-note': '"En la creencia zapoteca, el tonal es nuestra fuerza de vida, la luz que cada uno lleva. Construimos esta casa alrededor de la luz natural y la presencia del mar. Que se sienta abierta y ligera. Reúnanse, descansen, y disfruten cada hora. Nos alegra mucho que hayas venido."',
      'host-reviews': HOST_ES,
      'rule1-title': 'Abierta y llena de luz',
      'rule1-text': 'Una cocina exterior y una alberca privada en el centro, dos recámaras con baño completo, y una terraza para las tardes largas con el mar a la vista. Hasta cinco.'
    }
  },
  ensueno: {
    property: 'Ensueño',
    guests: { en: '2 maximum', es: '2 máximo' },
    en: {
      'og-desc': 'A dreamy home for two with an infinite ocean view and a private path to the beach. Tierra en Armonía, La Barra.',
      'hero-h1': 'Welcome to <em>a waking<br>dream</em>',
      'hero-sub': 'A home for two with a private pool over an endless ocean view, and a path straight down to a wild beach. Everything you need for an easy, beautiful stay is here.',
      'welcome-note': '"Ensueño means a waking dream. In Oaxacan tradition the alebrijes were first born in dreams, and this home is our quiet one, where the horizon turns to silence and the ocean is the only sound. Breathe, drift, and rest. We are so glad you came."',
      'host-reviews': HOST_EN,
      'rule1-title': 'A dream for two',
      'rule1-text': 'A private pool with an infinite ocean view, a large terrace with its own kitchen, and a private path down to the beach in minutes. Made for a couple.'
    },
    es: {
      'hero-h1': 'Bienvenido a <em>un sueño<br>despierto</em>',
      'hero-sub': 'Una casa para dos con alberca privada sobre una vista infinita al mar, y un camino directo a una playa salvaje. Aquí tienes todo lo que necesitas para una estancia fácil y hermosa.',
      'welcome-note': '"Ensueño es un sueño despierto. En la tradición oaxaqueña los alebrijes nacieron primero en los sueños, y esta casa es la nuestra más callada, donde el horizonte se vuelve silencio y el mar es el único sonido. Respira, déjate llevar, y descansa. Nos alegra mucho que hayas venido."',
      'host-reviews': HOST_ES,
      'rule1-title': 'Un sueño para dos',
      'rule1-text': 'Una alberca privada con vista infinita al mar, una terraza amplia con su propia cocina, y un camino privado que baja a la playa en minutos. Hecha para una pareja.'
    }
  },
  tilcajete: {
    property: 'Tilcajete',
    guests: { en: '2 maximum', es: '2 máximo' },
    pool: { labelEn: 'Private jacuzzi', valEn: 'In your own garden corner', labelEs: 'Jacuzzi privado', valEs: 'En tu propio rincón del jardín' },
    en: {
      'og-desc': 'A cozy home for two among the trees, with a private jacuzzi in the garden. Tierra en Armonía, La Barra.',
      'hero-h1': 'Welcome to <em>a refuge<br>among the trees</em>',
      'hero-sub': 'A cozy home for two with a spectacular ocean view and a jacuzzi hidden in your own garden, a few minutes from a wild beach. Everything you need is here.',
      'welcome-note': '"San Martín Tilcajete is the birthplace of the alebrijes. We named this home to honor that origin, and made it a refuge among the trees, with the ocean always near and a jacuzzi hidden in the garden. Settle in and let the quiet hold you. We are so glad you came."',
      'host-reviews': HOST_EN,
      'rule1-title': 'A refuge among the trees',
      'rule1-text': 'A cozy home for two with a spectacular ocean view, air conditioning, and its own fenced garden corner with a private jacuzzi surrounded by nature.'
    },
    es: {
      'hero-h1': 'Bienvenido a <em>un refugio<br>entre los árboles</em>',
      'hero-sub': 'Una casa acogedora para dos con una vista espectacular al mar y un jacuzzi escondido en tu propio jardín, a unos minutos de una playa salvaje. Aquí tienes todo lo que necesitas.',
      'welcome-note': '"San Martín Tilcajete es la cuna de los alebrijes. Nombramos esta casa para honrar ese origen, y la hicimos un refugio entre los árboles, con el mar siempre cerca y un jacuzzi escondido en el jardín. Acomódate y deja que el silencio te abrace. Nos alegra mucho que hayas venido."',
      'host-reviews': HOST_ES,
      'rule1-title': 'Un refugio entre los árboles',
      'rule1-text': 'Una casa acogedora para dos con una vista espectacular al mar, aire acondicionado, y su propio rincón de jardín con reja y un jacuzzi privado rodeado de naturaleza.'
    }
  },
  'casa-nova': {
    property: 'Casa Nova',
    guests: { en: 'Up to 19', es: 'Hasta 19' },
    pool: { labelEn: 'Infinity pool', valEn: 'Over the ocean, and a jacuzzi too', labelEs: 'Alberca infinita', valEs: 'Sobre el mar, y también un jacuzzi' },
    wifiNote: true, // WiFi network for Casa Nova unconfirmed; using the collection network for now (host to confirm)
    en: {
      'og-desc': 'The whole house for up to nineteen, seven ensuite bedrooms, infinity pool, ocean views. Tierra en Armonía, La Barra.',
      'hero-h1': 'Welcome to <em>the whole house<br>by the sea</em>',
      'hero-sub': 'The signature home of Tierra en Armonía, for up to nineteen, with an infinity pool over the ocean and room for everyone. Everything you need is here.',
      'welcome-note': '"Casa Nova was the first home we built to welcome others, the seed the whole collection grew around. It holds up to nineteen, with the ocean in every view. Fill it with your people, gather at the long table, and make the days your own. We are so glad you came."',
      'host-reviews': HOST_EN,
      'rule1-title': 'The whole house, for everyone',
      'rule1-text': 'Seven ensuite bedrooms sleep nineteen, a table for twenty-five, an infinity pool and a jacuzzi, a cinema lounge, and a private path to the beach. Room for a big group to breathe.'
    },
    es: {
      'hero-h1': 'Bienvenido a <em>la casa entera<br>junto al mar</em>',
      'hero-sub': 'La casa insignia de Tierra en Armonía, para hasta diecinueve, con una alberca infinita sobre el mar y espacio para todos. Aquí tienes todo lo que necesitas.',
      'welcome-note': '"Casa Nova fue la primera casa que construimos para recibir a otros, la semilla alrededor de la cual creció toda la colección. Aloja hasta diecinueve, con el mar en cada vista. Llénala con tu gente, reúnanse en la mesa larga, y hagan suyos los días. Nos alegra mucho que hayas venido."',
      'host-reviews': HOST_ES,
      'rule1-title': 'La casa entera, para todos',
      'rule1-text': 'Siete recámaras en suite alojan a diecinueve, una mesa para veinticinco, una alberca infinita y un jacuzzi, una sala de cine, y un camino privado a la playa. Espacio para que un grupo grande respire.'
    }
  }
};

function repAll(s, a, b) { return a === b ? s : s.split(a).join(b); }

function build(slug) {
  const c = C[slug];
  let h = MASTER;

  // 1) per-property copy blocks (each Copal value appears in the baked HTML + the T dict; global swap hits all)
  for (const k of Object.keys(OLD.en)) if (c.en[k] !== undefined) h = repAll(h, OLD.en[k], c.en[k]);
  for (const k of Object.keys(OLD.es)) if (c.es[k] !== undefined) h = repAll(h, OLD.es[k], c.es[k]);

  // 2) guest count + pool/jacuzzi label
  h = repAll(h, OLD.en['guests-val'], c.guests.en);
  h = repAll(h, OLD.es['guests-val'], c.guests.es);
  if (c.pool) {
    h = repAll(h, OLD.en['pool-label'], c.pool.labelEn);
    h = repAll(h, OLD.en['pool-val'], c.pool.valEn);
    h = repAll(h, OLD.es['pool-label'], c.pool.labelEs);
    h = repAll(h, OLD.es['pool-val'], c.pool.valEs);
  }

  // 3) name + slug (URLs use lowercase 'copal'; display uses 'Copal')
  h = repAll(h, '/copal/', '/' + slug + '/');
  h = repAll(h, 'Copal', c.property);

  // 4) shared D'Coral menu PDF lives under /copal/; keep every guide pointed at it
  h = repAll(h, 'href="dcoral-menu.pdf"', 'href="https://thewelcomelink.com/copal/dcoral-menu.pdf"');

  // 5) Casa Nova WiFi flag (network unconfirmed)
  if (c.wifiNote) h = h.replace('<!-- FILL(host): confirm check-in and check-out times', '<!-- FILL(host): confirm Casa Nova WiFi network/password (using the collection network as a placeholder); confirm check-in and check-out times');

  fs.mkdirSync(path.join(root, slug), { recursive: true });
  fs.writeFileSync(path.join(root, slug, 'index.html'), h);
  // sanity: no leftover Copal references outside the shared D'Coral menu URL
  const stray = (h.match(/Copal/g) || []).length;
  console.log(`wrote ${slug}/index.html (${c.property})${stray ? '  ⚠ ' + stray + ' stray "Copal"' : ''}`);
}

for (const slug of Object.keys(C)) build(slug);
console.log('done.');
