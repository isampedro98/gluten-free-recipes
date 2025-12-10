// Temporal data source. Replace with Mongo later.
import type { Recipe } from '~/types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    slug: 'ensalada-quinoa-verduras',
    name: 'Ensalada de quinoa y verduras',
    category: 'ensaladas',
    image: '/images/ensalada-quinoa-verduras.svg',
    description: 'Ensalada fresca con quinoa, vegetales crocantes y limón.',
    rating: 4.7,
    ingredients: [
      { name: 'quinoa', quantity: 1, unit: 'taza' },
      { name: 'zanahoria rallada', quantity: 1, unit: 'unidad' },
      { name: 'morrón rojo', quantity: '1/2', unit: 'unidad' },
      { name: 'pepino', quantity: 1, unit: 'unidad' },
      { name: 'aceite de oliva', quantity: 2, unit: 'cda' },
      { name: 'jugo de limón', quantity: 1, unit: 'cda' },
      { name: 'sal', quantity: 'a gusto' },
      { name: 'pimienta', quantity: 'a gusto' }
    ],
    steps: [
      { order: 1, text: 'Lavar bien la quinoa hasta que el agua salga clara.' },
      { order: 2, text: 'Hervir la quinoa en agua con sal durante 12-15 minutos.' },
      { order: 3, text: 'Picar las verduras en cubos pequeños.' },
      { order: 4, text: 'Mezclar quinoa fría con las verduras en un bowl.' },
      { order: 5, text: 'Aderezar con aceite de oliva, jugo de limón, sal y pimienta.' }
    ],
    createdAt: '2025-01-10T12:00:00.000Z'
  },
  {
    id: '2',
    slug: 'pollo-al-horno',
    name: 'Pollo al horno con papas',
    category: 'carnes',
    image: '/images/pollo-al-horno.svg',
    description: 'Clásico pollo al horno jugoso con papas doradas.',
    rating: 4.3,
    ingredients: [
      { name: 'muslos de pollo', quantity: 4, unit: 'unidad' },
      { name: 'papas', quantity: 3, unit: 'unidad' },
      { name: 'ajo', quantity: 3, unit: 'diente' },
      { name: 'romero', quantity: 1, unit: 'cda' },
      { name: 'aceite de oliva', quantity: 3, unit: 'cda' },
      { name: 'sal', quantity: 'a gusto' },
      { name: 'pimienta', quantity: 'a gusto' }
    ],
    steps: [
      { order: 1, text: 'Precalentar el horno a 200°C.' },
      { order: 2, text: 'Cortar las papas en gajos y mezclarlas con aceite, sal y romero.' },
      { order: 3, text: 'Colocar pollo y papas en una fuente y agregar ajo picado.' },
      { order: 4, text: 'Hornear 40-45 minutos hasta dorar, girando a mitad de cocción.' }
    ],
    createdAt: '2025-01-11T12:00:00.000Z'
  },
  {
    id: '3',
    slug: 'pasta-sin-gluten-pesto',
    name: 'Pasta sin gluten al pesto',
    category: 'pastas',
    image: '/images/pasta-pesto.svg',
    description: 'Pasta corta sin gluten con pesto casero y tomatitos.',
    rating: 4.8,
    ingredients: [
      { name: 'pasta sin gluten', quantity: 400, unit: 'g' },
      { name: 'albahaca fresca', quantity: 1, unit: 'taza' },
      { name: 'nueces', quantity: 1 / 3, unit: 'taza' },
      { name: 'aceite de oliva', quantity: 4, unit: 'cda' },
      { name: 'queso rallado', quantity: 3, unit: 'cda' },
      { name: 'tomates cherry', quantity: 12, unit: 'unidad' },
      { name: 'sal', quantity: 'a gusto' }
    ],
    steps: [
      { order: 1, text: 'Hervir la pasta según instrucciones del paquete.' },
      { order: 2, text: 'Procesar albahaca, nueces, aceite y queso hasta formar pesto.' },
      { order: 3, text: 'Mezclar pasta caliente con el pesto y agregar tomates cherry partidos.' }
    ],
    createdAt: '2025-01-12T12:00:00.000Z'
  },
  {
    id: '4',
    slug: 'brownies-sin-gluten',
    name: 'Brownies sin gluten',
    category: 'postres',
    image: '/images/brownies-sin-gluten.svg',
    description: 'Brownies intensos de chocolate con harina de almendras.',
    rating: 4.9,
    ingredients: [
      { name: 'chocolate amargo', quantity: 180, unit: 'g' },
      { name: 'manteca', quantity: 120, unit: 'g' },
      { name: 'azúcar', quantity: 150, unit: 'g' },
      { name: 'huevos', quantity: 3, unit: 'unidad' },
      { name: 'harina de almendras', quantity: 120, unit: 'g' },
      { name: 'cacao en polvo', quantity: 2, unit: 'cda' },
      { name: 'nueces picadas', quantity: 0.5, unit: 'taza' }
    ],
    steps: [
      { order: 1, text: 'Derretir chocolate y manteca a baño maría.' },
      { order: 2, text: 'Batir huevos con azúcar y unir con el chocolate derretido.' },
      { order: 3, text: 'Incorporar harina de almendras y cacao. Agregar nueces.' },
      { order: 4, text: 'Hornear en molde forrado a 180°C por 20-25 minutos.' }
    ],
    createdAt: '2025-01-13T12:00:00.000Z'
  }
];
