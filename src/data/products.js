// src/data/products.js
export const products = [
  {
    id: 'grip-socks-pro',
    name: 'Grip Socks Pro',
    category: 'socks',
    price: 24.95,
    image: '/assets/products/grip-socks-pro.jpg',
    sizes: ['S', 'M', 'L'],
    description: 'Calcetín largo antideslizante con trama de silicona en toda la planta. Compresión gradual para mayor sensibilidad del balón.',
  },
  {
    id: 'grip-socks-classic',
    name: 'Grip Socks Classic',
    category: 'socks',
    price: 19.95,
    image: '/assets/products/grip-socks-classic.jpg',
    sizes: ['S', 'M', 'L'],
    description: 'El clásico de CTRL-GRIP. Tejido resistente al lavado repetido sin perder agarre.',
  },
  {
    id: 'grip-socks-superlight',
    name: 'Grip Socks Superlight',
    category: 'socks',
    price: 22.95,
    image: '/assets/products/grip-socks-superlight.jpg',
    sizes: ['S', 'M', 'L'],
    description: 'Versión de tejido fino para meses de calor, mismo nivel de agarre.',
  },
  {
    id: 'shinguards-lite',
    name: 'Shinguards Lite',
    category: 'shinguards',
    price: 29.95,
    image: '/assets/products/shinguards-lite.jpg',
    sizes: ['S', 'M', 'L'],
    description: 'Espinillera ultraligera de polímero flexible, apenas se nota puesta.',
  },
  {
    id: 'shinguards-pro-ankle',
    name: 'Shinguards Pro Ankle',
    category: 'shinguards',
    price: 34.95,
    image: '/assets/products/shinguards-pro-ankle.jpg',
    sizes: ['S', 'M', 'L'],
    description: 'Protección extendida hasta el tobillo, para posiciones de contacto.',
  },
  {
    id: 'pro-tape-5cm',
    name: 'Pro Tape 5cm',
    category: 'tape',
    price: 8.95,
    image: '/assets/products/pro-tape-5cm.jpg',
    sizes: [],
    description: 'Rollo individual de tape profesional, sujeción firme incluso con lluvia.',
  },
  {
    id: 'pro-tape-pack-x3',
    name: 'Pro Tape Pack x3',
    category: 'tape',
    price: 21.95,
    image: '/assets/products/pro-tape-pack.jpg',
    sizes: [],
    description: 'Pack de 3 rollos de Pro Tape, para toda la temporada.',
  },
  {
    id: 'shoe-bag',
    name: 'Shoe Bag',
    category: 'accessories',
    price: 14.95,
    image: '/assets/products/shoe-bag.jpg',
    sizes: [],
    description: 'Bolsa impermeable para tus botas, separa lo limpio de lo sucio en la mochila.',
  },
  {
    id: 'grip-spray',
    name: 'Grip Spray',
    category: 'accessories',
    price: 12.95,
    image: '/assets/products/grip-spray.jpg',
    sizes: [],
    description: 'Spray reactivador de agarre para alargar la vida de tus grip socks.',
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category) {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}