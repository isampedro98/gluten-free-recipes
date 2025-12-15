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
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    totalTimeMinutes: 30,
    servings: 4,
    difficulty: 'fácil',
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
    createdAt: '2025-01-10T12:00:00.000Z',
    source: {
      type: 'demo',
      url: null
    }
  },
  {
    id: '2',
    slug: 'pollo-al-horno',
    name: 'Pollo al horno con papas',
    category: 'carnes',
    image: '/images/pollo-al-horno.svg',
    description: 'Clásico pollo al horno jugoso con papas doradas.',
    rating: 4.3,
    prepTimeMinutes: 10,
    cookTimeMinutes: 45,
    totalTimeMinutes: 55,
    servings: 4,
    difficulty: 'fácil',
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
    createdAt: '2025-01-11T12:00:00.000Z',
    source: {
      type: 'demo',
      url: null
    }
  },
  {
    id: '3',
    slug: 'pasta-sin-gluten-pesto',
    name: 'Pasta sin gluten al pesto',
    category: 'pastas',
    image: '/images/pasta-pesto.svg',
    description: 'Pasta corta sin gluten con pesto casero y tomatitos.',
    rating: 4.8,
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    totalTimeMinutes: 20,
    servings: 2,
    difficulty: 'fácil',
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
    createdAt: '2025-01-12T12:00:00.000Z',
    source: {
      type: 'demo',
      url: null
    }
  },
  {
    id: '4',
    slug: 'brownies-sin-gluten',
    name: 'Brownies sin gluten',
    category: 'postres',
    image: '/images/brownies-sin-gluten.svg',
    description: 'Brownies intensos de chocolate con harina de almendras.',
    rating: 4.9,
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    servings: 9,
    difficulty: 'media',
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
    createdAt: '2025-01-13T12:00:00.000Z',
    source: {
      type: 'demo',
      url: null
    }
  },
  {
    id: '5',
    slug: 'pionono-sin-harina',
    name: 'Pionono sin harina (sin gluten)',
    category: 'postres',
    image: '/images/pionono-sin-harina.jpg',
    description: 'Pionono sin harina, esponjoso y versátil — apto para celíacos o quien busque opción sin gluten.',
    rating: 4.7,
    ingredients: [
      { name: 'huevos', quantity: 5, unit: 'unidad' },
      { name: 'sal', quantity: 1, unit: 'pizca' },
      { name: 'polvo para hornear apto celíacos', quantity: 1, unit: 'cdita' },
      { name: 'queso rallado', quantity: 3, unit: 'cda' },
      { name: 'aceite (para engrasar la placa)', quantity: 1, unit: 'cdita' },
      // sugeridos para el relleno (opcionales)
      { name: 'jamón cocido en fetas', quantity: 200, unit: 'g' },
      { name: 'queso en fetas', quantity: 200, unit: 'g' },
      { name: 'mayonesa o queso crema', quantity: 2, unit: 'cda' },
      { name: 'hojas verdes', quantity: 'a gusto', unit: '' },
      { name: 'zanahoria rallada fina', quantity: 'a gusto', unit: '' }
    ],
    steps: [
      { order: 1, text: 'Precalentar el horno a 200°C. Forrar una placa de 30×40 cm con papel manteca y aceitar levemente.' },
      { order: 2, text: 'Separar claras y yemas en dos bowls distintos.' },
      { order: 3, text: 'Batir las claras con una pizca de sal hasta punto nieve firme.' },
      { order: 4, text: 'Batir las yemas con el queso rallado (si usás), el polvo para hornear y la pimienta hasta integrar.' },
      { order: 5, text: 'Incorporar las claras a la mezcla de yemas en 3 tandas con movimientos envolventes.' },
      { order: 6, text: 'Volcar la mezcla en la placa y distribuir pareja con una espátula formando una capa fina.' },
      { order: 7, text: 'Hornear 8–10 minutos hasta que esté apenas dorado y flexible.' },
      { order: 8, text: 'Desmoldar sobre un paño o papel limpio, retirar el papel de cocción y dejar entibiar.' },
      { order: 9, text: 'Untar con mayonesa o queso crema y sumar jamón, queso, hojas verdes y zanahoria rallada.' },
      { order: 10, text: 'Enrollar desde el lado más largo y refrigerar al menos 30 minutos para que tome forma.' }
    ],
    createdAt: '2025-12-15T12:00:00.000Z',
    source: {
      url: 'https://tn.com.ar/cocina/recetas/2025/12/12/pionono-casero-sin-harina-para-las-fiestas-la-receta-para-prepararlo-en-solo-25-minutos/',
      type: 'external'
    }
  },
  {
    id: '6',
    slug: 'rollo-berenjena-pollo-queso',
    name: 'Rollo de berenjena con pollo y queso',
    category: 'carnes',
    image: '/images/rollo-berenjena-pollo-queso.svg',
    description: 'Rollo de berenjena dorada relleno de pollo jugoso, tomate y quesos, horneado hasta quedar irresistible. Naturalmente sin gluten.',
    rating: 4.8,
    ingredients: [
      { name: 'berenjenas', quantity: 2, unit: 'unidad' },
      { name: 'aceite para freír', quantity: 'cantidad necesaria', unit: '' },
      { name: 'cebolla', quantity: 0.5, unit: 'unidad' },
      { name: 'ajo', quantity: 2, unit: 'diente' },
      { name: 'pechuga de pollo', quantity: 300, unit: 'g' },
      { name: 'mozzarella para pizza', quantity: 150, unit: 'g' },
      { name: 'aceite de oliva', quantity: 3, unit: 'cda' },
      { name: 'pimienta negra', quantity: 'a gusto', unit: '' },
      { name: 'ajo en polvo', quantity: 1, unit: 'cdita' },
      { name: 'pimentón', quantity: 1, unit: 'cdita' },
      { name: 'pimiento dulce', quantity: 'a gusto', unit: '' },
      { name: 'perejil fresco', quantity: 'a gusto', unit: '' },
      { name: 'sal', quantity: 'a gusto', unit: '' },
      { name: 'albahaca seca', quantity: 1, unit: 'cdita' },
      { name: 'puré de tomate', quantity: 200, unit: 'g' },
      { name: 'queso parmesano rallado', quantity: 20, unit: 'g' },
      { name: 'pasta de tomate', quantity: 1, unit: 'cdita' },
      { name: 'agua', quantity: 'un chorrito', unit: '' },
      { name: 'mozzarella fior di latte', quantity: 125, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Cortar las berenjenas en láminas finas a lo largo y salarlas ligeramente. Dejar reposar 10 minutos y secar.' },
      { order: 2, text: 'Freír las láminas de berenjena en aceite caliente hasta que estén doradas y flexibles. Reservar sobre papel absorbente.' },
      { order: 3, text: 'Picar la cebolla y el ajo. Saltearlos con el aceite de oliva hasta que estén transparentes.' },
      { order: 4, text: 'Agregar la pechuga de pollo picada y cocinar hasta que esté bien dorada.' },
      { order: 5, text: 'Condimentar con sal, pimienta, ajo en polvo, pimentón, pimiento dulce y albahaca.' },
      { order: 6, text: 'Incorporar el puré de tomate, la pasta de tomate diluida en un poco de agua y cocinar 5 minutos.' },
      { order: 7, text: 'Agregar la mozzarella rallada y el parmesano. Mezclar hasta que el relleno esté cremoso.' },
      { order: 8, text: 'Sobre una superficie, superponer las láminas de berenjena formando una base.' },
      { order: 9, text: 'Distribuir el relleno de pollo y colocar la mozzarella fior di latte por encima.' },
      { order: 10, text: 'Enrollar con cuidado formando un rollo compacto.' },
      { order: 11, text: 'Colocar en una fuente y hornear a 180 °C durante 20–25 minutos, hasta que el queso esté gratinado.' },
      { order: 12, text: 'Retirar del horno, espolvorear con perejil fresco y servir caliente.' }
    ],
    createdAt: '2025-01-10T12:00:00.000Z',
    source: {
      type: 'external',
      url: 'https://youtu.be/0xgNRDO-6zY'
    }
  },
  {
    id: '7',
    slug: 'pasta-nino-bergese-sin-gluten',
    name: 'Pasta Nino Bergese sin gluten',
    category: 'pastas',
    image: '/images/pasta-nino-bergese-sin-gluten.svg',
    description: 'Pasta rellena estilo Nino Bergese, versión sin gluten, con masa casera, relleno de ricotta y espinaca y terminación con manteca y salvia.',
    rating: 4.9,
    ingredients: [
      // Masa
      { name: 'yema', quantity: 1, unit: 'unidad' },
      { name: 'huevos', quantity: 3, unit: 'unidad' },
      { name: 'harina sin TACC', quantity: 350, unit: 'g' },
      { name: 'agua', quantity: 60, unit: 'ml' },
      { name: 'aceite de oliva', quantity: 1, unit: 'cda' },
      { name: 'sal', quantity: '1 pizca', unit: '' },

      // Relleno
      { name: 'aceite de oliva', quantity: 30, unit: 'ml' },
      { name: 'espinaca fresca (solo hojas)', quantity: 1, unit: 'atado' },
      { name: 'ricotta bien escurrida', quantity: 300, unit: 'g' },
      { name: 'queso parmesano rallado', quantity: 100, unit: 'g' },
      { name: 'huevo', quantity: 1, unit: 'unidad' },
      { name: 'nuez moscada', quantity: '1 pizca', unit: '' },
      { name: 'sal fina', quantity: 'a gusto', unit: '' },
      { name: 'pimienta', quantity: 'a gusto', unit: '' },

      // Terminación
      { name: 'manteca', quantity: 125, unit: 'g' },
      { name: 'hojas de salvia (u orégano)', quantity: 1, unit: 'puñado' },
      { name: 'queso parmesano rallado', quantity: 'a gusto', unit: '' }
    ],
    steps: [
      // Masa
      { order: 1, text: 'En un bowl colocar la harina sin TACC, los huevos, la yema, el agua, el aceite de oliva y la sal.' },
      { order: 2, text: 'Amasar hasta obtener una masa lisa y homogénea. Cubrir y dejar reposar 20 minutos.' },

      // Relleno
      { order: 3, text: 'Saltear las hojas de espinaca con el aceite de oliva hasta que se reduzcan. Picar finamente.' },
      { order: 4, text: 'Mezclar la espinaca con la ricotta escurrida, el parmesano, el huevo, nuez moscada, sal y pimienta.' },

      // Armado
      { order: 5, text: 'Estirar la masa fina sobre superficie espolvoreada con harina sin TACC.' },
      { order: 6, text: 'Colocar porciones del relleno y cubrir formando raviolones o pasta rellena grande.' },
      { order: 7, text: 'Sellar bien los bordes y reservar.' },

      // Cocción
      { order: 8, text: 'Cocinar la pasta en abundante agua hirviendo con sal hasta que flote y esté tierna.' },

      // Terminación
      { order: 9, text: 'Derretir la manteca en una sartén junto con las hojas de salvia (u orégano) hasta perfumar.' },
      { order: 10, text: 'Servir la pasta con la manteca aromatizada y terminar con parmesano rallado.' }
    ],
    createdAt: '2025-01-10T12:00:00.000Z',
    source: {
      type: 'external',
      url: 'https://vt.tiktok.com/ZSfqyK8S2/'
    }
  },
  {
    id: '8',
    slug: 'pan-de-molde-sin-gluten',
    name: 'Pan de molde sin gluten',
    category: 'panificados',
    image: '/images/pan-de-molde-sin-gluten.svg',
    description: 'Pan de molde sin gluten, tierno y esponjoso, ideal para tostadas y sandwiches.',
    rating: 4.6,
    ingredients: [
      { name: 'premezcla sin gluten', quantity: 280, unit: 'g' },
      { name: 'sal', quantity: 6, unit: 'g' },
      { name: 'azúcar', quantity: 30, unit: 'g' },
      { name: 'leche', quantity: 220, unit: 'ml' },
      { name: 'levadura', quantity: 35, unit: 'g' },
      { name: 'aceite', quantity: 15, unit: 'g' },
      { name: 'huevos', quantity: 2, unit: 'unidad' }
    ],
    steps: [
      { order: 1, text: 'Precalentar el horno a 180 °C.' },
      { order: 2, text: 'Colocar en la amasadora la premezcla sin gluten, la sal, el azúcar y la levadura.' },
      { order: 3, text: 'Agregar los huevos, el aceite y la leche tibia.' },
      { order: 4, text: 'Batir durante 3 minutos hasta obtener una masa suave y cremosa.' },
      { order: 5, text: 'Aceitar una budinera de aproximadamente 25 cm y volcar la masa.' },
      { order: 6, text: 'Tapar con un lienzo y dejar levar en ambiente cálido durante 40 minutos o hasta que duplique su volumen.' },
      { order: 7, text: 'Hornear durante 40 minutos.' },
      { order: 8, text: 'Desmoldar y dejar enfriar sobre rejilla.' }
    ],
    notes: [
      'La masa no es amasable: queda pegajosa, es normal en panificados sin gluten.',
      'Se puede agregar 50 g de semillas durante el último minuto de batido para un pan con semillas.',
      'Dura hasta 10 días en heladera y 5 días a temperatura ambiente.',
      'Puede cortarse en rodajas y freezarse hasta 3 semanas.'
    ],
    createdAt: new Date().toISOString(),
    source: {
      type: 'external',
      url: 'https://santamariaproductos.com.ar/recetas/pan-de-molde/'
    }
  },
  {
    id: '9',
    slug: 'empanada-gallega-sin-gluten',
    name: 'Empanada gallega sin gluten',
    category: 'panificados',
    image: '/images/empanada-gallega-sin-gluten.svg',
    description: 'Empanada gallega sin gluten con masa casera elástica y crujiente, ideal para preparar con antelación.',
    rating: 4.9,
    ingredients: [
      // Masa (para una empanada mediana 30 × 20 cm)
      { name: 'harina de arroz', quantity: 150, unit: 'g' },
      { name: 'harina de trigo sarraceno', quantity: 150, unit: 'g' },
      { name: 'almidón de tapioca', quantity: 100, unit: 'g' },
      { name: 'azúcar', quantity: 5, unit: 'g' },
      { name: 'sal', quantity: 5, unit: 'g' },
      { name: 'aceite', quantity: 100, unit: 'g' },
      { name: 'leche', quantity: 145, unit: 'g' },
      { name: 'huevo', quantity: 1, unit: 'unidad (M, ~50 g)' },
      { name: 'goma xantana', quantity: 7, unit: 'g' },
      { name: 'colorante amarillo sin gluten', quantity: '1 pizca', unit: '' },

      // Para pincelar
      { name: 'huevo batido', quantity: 1, unit: 'unidad' }
    ],
    steps: [
      { order: 1, text: 'Preparar el relleno elegido antes de la masa y dejarlo enfriar casi por completo.' },
      { order: 2, text: 'En un recipiente grande mezclar la harina de arroz, la harina de trigo sarraceno, el almidón de tapioca, la sal y el azúcar.' },
      { order: 3, text: 'Añadir el aceite, la leche y el huevo. Mezclar hasta obtener una masa homogénea.' },
      { order: 4, text: 'Incorporar la goma xantana y el colorante amarillo. Amasar con cuidado hasta que la goma se distribuya bien.' },
      { order: 5, text: 'Cuando la masa tome un tono ligeramente amarillo, pasar a la mesa y amasar varios minutos sin añadir más harina.' },
      { order: 6, text: 'Formar una bola y golpearla varias veces contra la mesa para eliminar discontinuidades internas.' },
      { order: 7, text: 'Dividir la masa en dos porciones iguales. Si es necesario, unir restos y volver a amasar.' },
      { order: 8, text: 'Extender cada porción sobre papel de horno hasta dejarlas muy finas (menos de 0,5 cm), procurando que tengan la misma forma.' },
      { order: 9, text: 'Colocar una de las láminas sobre una bandeja de horno y distribuir el relleno dejando un borde libre de al menos 1,5 cm.' },
      { order: 10, text: 'Cubrir con la segunda lámina de masa y presionar ligeramente los bordes.' },
      { order: 11, text: 'Recortar los sobrantes y reservarlos para la decoración.' },
      { order: 12, text: 'Doblar los bordes hacia dentro sellando con los dedos.' },
      { order: 13, text: 'Decorar con los restos de masa (hojas, cordones u otros motivos).' },
      { order: 14, text: 'Pinchar la superficie con un tenedor y hacer un pequeño orificio central para que escape el vapor.' },
      { order: 15, text: 'Precalentar el horno a 190 °C con calor arriba y abajo.' },
      { order: 16, text: 'Pincelar la empanada con huevo batido.' },
      { order: 17, text: 'Hornear en el tercio inferior del horno durante 45–50 minutos a 190 °C. Si se dora demasiado, cubrir con papel de aluminio.' },
      { order: 18, text: 'Retirar del horno y dejar enfriar completamente antes de consumir.' }
    ],
    notes: [
      'La masa sale del horno algo dura y crujiente; mejora notablemente con el reposo.',
      'Esta empanada está mejor de un día para otro.',
      'Se recomienda prepararla el día anterior.',
      'La receta corresponde solo a la masa; el relleno es a elección.'
    ],
    createdAt: '2025-01-10T12:00:00.000Z',
    source: {
      type: 'external',
      url: 'https://glutendence.com/masa-empanada-gallega/'
    }
  },
  {
    id: '10',
    slug: 'tarta-manzana-almendra-sin-harina',
    name: 'Tarta de manzana y almendra sin harina',
    category: 'postres',
    image: '/images/tarta-manzana-almendra-sin-harina.svg',
    description: 'Tarta jugosa de manzana y almendra molida, sin harina y naturalmente sin gluten.',
    rating: 4.8,
    ingredients: [
      { name: 'manzanas medianas', quantity: 3, unit: 'unidad (~300 g)', notes: 'peladas y ralladas' },
      { name: 'almendra molida', quantity: 200, unit: 'g', notes: 'harina de almendra' },
      { name: 'azúcar', quantity: 100, unit: 'g', notes: 'puede usarse panela o eritritol' },
      { name: 'huevos grandes', quantity: 3, unit: 'unidad' },
      { name: 'yogur natural o griego', quantity: 120, unit: 'g' },
      { name: 'levadura en polvo', quantity: 1, unit: 'cdita', notes: 'polvo de hornear sin gluten' },
      { name: 'canela en polvo', quantity: 1, unit: 'cdita' },
      { name: 'ralladura de limón', quantity: 1, unit: 'unidad' },
      { name: 'extracto de vainilla', quantity: 1, unit: 'cdita' },
      { name: 'sal', quantity: '1 pizca', unit: '' },
      { name: 'almendras laminadas', quantity: 'a gusto', unit: '', notes: 'opcional, para decorar' }
    ],
    steps: [
      { order: 1, text: 'Precalentar el horno a 180 °C. Engrasar un molde redondo de 22 cm de diámetro y cubrir la base con papel vegetal.' },
      { order: 2, text: 'En un bol grande, batir los huevos con el azúcar hasta obtener una mezcla espumosa y más clara.' },
      { order: 3, text: 'Agregar el yogur, la ralladura de limón y el extracto de vainilla. Mezclar suavemente.' },
      { order: 4, text: 'Incorporar la almendra molida, la levadura, la canela y la pizca de sal. Mezclar hasta lograr una masa cremosa y algo espesa.' },
      { order: 5, text: 'Añadir la manzana rallada y mezclar con movimientos suaves hasta distribuirla de manera uniforme.' },
      { order: 6, text: 'Verter la mezcla en el molde y, si se desea, decorar la superficie con almendras laminadas.' },
      { order: 7, text: 'Hornear durante 35 a 40 minutos, hasta que al pinchar el centro con un palillo salga limpio o con pocas migas húmedas.' },
      { order: 8, text: 'Retirar del horno y dejar enfriar unos 15 minutos antes de desmoldar.' }
    ],
    servingSuggestions: [
      'Espolvorear con canela o azúcar glas.',
      'Acompañar con yogur griego, nata ligera o helado de vainilla.',
      'Servir con una infusión, café con leche o té negro.'
    ],
    storage: [
      'A temperatura ambiente en recipiente hermético: hasta 3 días.',
      'En heladera: hasta 5 días.',
      'Congelada en porciones individuales: hasta 1 mes.'
    ],
    createdAt: new Date().toISOString(),
    source: {
      type: 'external',
      url: 'https://recetas.passwords-generator.net/%f0%9f%8d%8f-tarta-de-manzana-y-almendra-sin-harina-una-delicia-de-otono-que-abraza-el-alma-%f0%9f%8c%b0/#more-1744'
    }
  }

];
