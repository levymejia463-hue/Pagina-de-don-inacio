/* ============================================
   DON INACIO — MERMELADAS PAGE SCRIPT
   ============================================ */

// ============ DATOS DE PRODUCTOS ============
const productos = [
    {
        imagen: '../../extern-arch/fotos de productos/0.jpg',
        nombre: 'Mermelada de Zanahoria con Jengibre y Canela',
        descripcion: 'Mermelada artesanal de zanahoria elaborada con zanahorias frescas, jengibre y canela, cocida lentamente para concentrar sus aromas y obtener una textura untuosa. Perfecta en tostadas, con quesos suaves o como glaseado ligero para carnes. Presentación 250g; conservar en frío tras abrir.',
        precio: '5.20',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/1.jpg',
        nombre: 'Mermelada de Tomate con Albahaca',
        descripcion: 'Mermelada de tomate elaborada con tomates maduros y albahaca fresca, con un equilibrio entre acidez y dulzor. Recomendable para bruschettas, tablas de quesos y como acompañamiento de platos mediterráneos. Presentación 250g; conservar en frío tras abrir.',
        precio: '6.15',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/2.jpg',
        nombre: 'Mermelada de Remolacha con Jengibre y Limón',
        descripcion: 'Mermelada de remolacha con jengibre y limón, que aporta un sabor terroso con toques cítricos y un ligero picor del jengibre. Ideal para combinar con quesos curados, ensaladas y platos vegetarianos. Presentación 250g; refrigerar después de abrir.',
        precio: '5.60',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/3.jpg',
        nombre: 'Mermelada de Repollo con Cúrcuma y Tomillo',
        descripcion: 'Mermelada de repollo con cúrcuma y tomillo: una combinación cálida y aromática que aporta un toque terroso y herbal, perfecta para realzar platos salados, quesos y ensaladas creativas. Presentación 250g; conservar en frío tras abrir.',
        precio: '6.15',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/4.jpg',
        nombre: 'Mermelada de Limón con Manzana y Pimienta Cayena',
        descripcion: 'Mermelada de limón y manzana con un sutil toque picante de pimienta cayena. Fresca y brillante, sirve para postres, tostadas o para dar un punto ácido-dulce a platos de pescado y aves. Presentación 250g; conservar en frío tras abrir.',
        precio: '6.08',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/5.jpg',
        nombre: 'Mermelada de Chile Dulce con Pimienta Cayena',
        descripcion: 'Mermelada de chile dulce con pimienta cayena: combina dulzor afrutado con un calor gradual, ideal para acompañar carnes a la parrilla, quesos fuertes y como ingrediente en salsas. Presentación 250g; conservar en frío tras abrir.',
        precio: '6.20',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/6.jpg',
        nombre: 'Mermelada de Chile Dulce con Chocolate Oscuro',
        descripcion: 'Mermelada de chile dulce con chocolate oscuro: una fusión entre el dulzor y notas amargas del chocolate, con un fondo picante moderado. Perfecta en postres, sobre pan tostado o para maridar con quesos azules. Presentación 250g; refrigerar tras abrir.',
        precio: '6.80',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/7.jpg',
        nombre: 'Mermelada de Chile Dulce con Aceitunas Negras',
        descripcion: 'Mermelada de chile dulce con aceitunas negras: mezcla salina y dulce, pensada para tablas de quesos, tapas y para dar un contraste único a sándwiches gourmet. Presentación 250g; conservar en frío tras abrir.',
        precio: '6.40',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/8.jpg',
        nombre: 'Mermelada de Cebolla Morada con Jengibre y Pimienta Negra',
        descripcion: 'Mermelada de cebolla morada con jengibre y pimienta negra: caramelizada y especiada, aporta profundidad y dulzor complejo a hamburguesas, quesos y platos de carne. Presentación 250g; refrigerar después de abrir.',
        precio: '5.20',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/9.jpg',
        nombre: 'Mermelada de Cebolla con Flor de Jamaica y Naranja',
        descripcion: 'Mermelada de cebolla con flor de jamaica y naranja: combinación cítrica y floral que equilibra la dulzura de la cebolla; ideal con carnes, quesos y como complemento en entradas. Presentación 250g; conservar en frío tras abrir.',
        precio: '5.60',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/10.jpg',
        nombre: 'Mermelada de Cebolla Blanca con Vino de Oporto y Bacon Ahumado',
        descripcion: 'Mermelada artesanal 100% natural que combina la dulzura caramelizada de la cebolla blanca con la intensidad del vino de Oporto y el sabor ahumado del bacon. Perfecta para acompañar carnes rojas, quesos curados, tablas de charcutería, o como glaseado para costillas y cerdo. También ideal en hamburguesas gourmet y bruschettas. Presentación 250g; conservar refrigerado después de abrir.',
        precio: '7.50',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/11.jpg',
        nombre: 'Mermelada de Camote con Apio y Vino Tinto',
        descripcion: 'Mermelada gourmet 100% natural elaborada con camote fresco, apio crujiente y vino tinto de calidad. Ofrece un equilibrio perfecto entre el dulzor natural del camote, las notas herbáceas del apio y la profundidad del vino tinto. Ideal para acompañar quesos de cabra, carnes asadas, aves al horno, o untar en pan artesanal. Presentación 250g; refrigerar tras abrir.',
        precio: '6.80',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/12.jpg',
        nombre: 'Mermelada de Calabaza con Nueces y Canela',
        descripcion: 'Mermelada artesanal 100% natural que captura los sabores del otoño con calabaza fresca, nueces tostadas y canela aromática. Ofrece una textura rica y cremosa con el crunch perfecto de las nueces. Excelente para desayunos en pan tostado, como relleno de croissants, acompañamiento de quesos brie o camembert, y en postres. Presentación 250g; conservar en frío después de abrir.',
        precio: '6.50',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/13.jpg',
        nombre: 'Mermelada de Apio con Ajo y Romero',
        descripcion: 'Mermelada gourmet 100% natural que combina el sabor fresco del apio con el carácter aromático del ajo y romero. Ideal para marinar carnes antes de asar, acompañar quesos maduros, untar en bruschettas, agregar profundidad a sopas y guisos, o como glaseado para pescados y mariscos. Presentación 250g; refrigerar tras abrir.',
        precio: '6.20',
        enStock: true
    }
];

const WA_NUMBER = '50369204235';

// ============ SISTEMA DE IDIOMAS (i18n) ============
const langMeta = {
    es: { flag: '🇪🇸', code: 'ES', htmlLang: 'es' },
    pt: { flag: '🇵🇹', code: 'PT', htmlLang: 'pt' },
    en: { flag: '🇺🇸', code: 'EN', htmlLang: 'en' },
};

const translations = {
    es: {
        // Nav
        'nav-volver': 'Volver',
        'nav-inicio': 'Inicio',
        'nav-reservar': 'Reservar Mesa',
        // Hero
        'hero-label': 'Tienda Artesanal',
        'hero-title': 'Mermeladas <em>Artesanales</em>',
        'hero-desc': 'Elaboradas con amor y dedicación, nuestras mermeladas capturan la esencia pura de ingredientes naturales seleccionados. Cada receta es una celebración de sabores auténticos que honran la tierra y sus frutos.',
        // Breadcrumb & header
        'bc-productos': 'Productos',
        'bc-mermeladas': 'Mermeladas',
        'seccion-titulo': 'Colección de <em>Mermeladas Gourmet</em>',
        'seccion-desc': 'Sabores únicos y sofisticados que transforman lo ordinario en extraordinario.',
        // Tarjetas (generadas por JS)
        'card-badge-artesanal': 'Artesanal',
        'card-badge-agotado': 'Agotado',
        'card-cta-ver': 'Ver detalle',
        'card-cta-nodisponible': 'No disponible',
        // Modal
        'modal-sublabel': 'Mermelada Artesanal · Don Inacio',
        'modal-btn-wsp': 'Pedir por WhatsApp',
        'modal-btn-agotado': 'Producto Agotado',
        'modal-wsp-msg': 'Hola! Me interesa la mermelada:',
        'modal-wsp-precio': 'Precio:',
        // Productos — nombres y descripciones
        'p0-nombre': 'Mermelada de Zanahoria con Jengibre y Canela',
        'p0-desc': 'Mermelada artesanal de zanahoria elaborada con zanahorias frescas, jengibre y canela, cocida lentamente para concentrar sus aromas y obtener una textura untuosa. Perfecta en tostadas, con quesos suaves o como glaseado ligero para carnes. Presentación 250g; conservar en frío tras abrir.',
        'p1-nombre': 'Mermelada de Tomate con Albahaca',
        'p1-desc': 'Mermelada de tomate elaborada con tomates maduros y albahaca fresca, con un equilibrio entre acidez y dulzor. Recomendable para bruschettas, tablas de quesos y como acompañamiento de platos mediterráneos. Presentación 250g; conservar en frío tras abrir.',
        'p2-nombre': 'Mermelada de Remolacha con Jengibre y Limón',
        'p2-desc': 'Mermelada de remolacha con jengibre y limón, que aporta un sabor terroso con toques cítricos y un ligero picor del jengibre. Ideal para combinar con quesos curados, ensaladas y platos vegetarianos. Presentación 250g; refrigerar después de abrir.',
        'p3-nombre': 'Mermelada de Repollo con Cúrcuma y Tomillo',
        'p3-desc': 'Mermelada de repollo con cúrcuma y tomillo: una combinación cálida y aromática que aporta un toque terroso y herbal, perfecta para realzar platos salados, quesos y ensaladas creativas. Presentación 250g; conservar en frío tras abrir.',
        'p4-nombre': 'Mermelada de Limón con Manzana y Pimienta Cayena',
        'p4-desc': 'Mermelada de limón y manzana con un sutil toque picante de pimienta cayena. Fresca y brillante, sirve para postres, tostadas o para dar un punto ácido-dulce a platos de pescado y aves. Presentación 250g; conservar en frío tras abrir.',
        'p5-nombre': 'Mermelada de Chile Dulce con Pimienta Cayena',
        'p5-desc': 'Mermelada de chile dulce con pimienta cayena: combina dulzor afrutado con un calor gradual, ideal para acompañar carnes a la parrilla, quesos fuertes y como ingrediente en salsas. Presentación 250g; conservar en frío tras abrir.',
        'p6-nombre': 'Mermelada de Chile Dulce con Chocolate Oscuro',
        'p6-desc': 'Mermelada de chile dulce con chocolate oscuro: una fusión entre el dulzor y notas amargas del chocolate, con un fondo picante moderado. Perfecta en postres, sobre pan tostado o para maridar con quesos azules. Presentación 250g; refrigerar tras abrir.',
        'p7-nombre': 'Mermelada de Chile Dulce con Aceitunas Negras',
        'p7-desc': 'Mermelada de chile dulce con aceitunas negras: mezcla salina y dulce, pensada para tablas de quesos, tapas y para dar un contraste único a sándwiches gourmet. Presentación 250g; conservar en frío tras abrir.',
        'p8-nombre': 'Mermelada de Cebolla Morada con Jengibre y Pimienta Negra',
        'p8-desc': 'Mermelada de cebolla morada con jengibre y pimienta negra: caramelizada y especiada, aporta profundidad y dulzor complejo a hamburguesas, quesos y platos de carne. Presentación 250g; refrigerar después de abrir.',
        'p9-nombre': 'Mermelada de Cebolla con Flor de Jamaica y Naranja',
        'p9-desc': 'Mermelada de cebolla con flor de jamaica y naranja: combinación cítrica y floral que equilibra la dulzura de la cebolla; ideal con carnes, quesos y como complemento en entradas. Presentación 250g; conservar en frío tras abrir.',
        'p10-nombre': 'Mermelada de Cebolla Blanca con Vino de Oporto y Bacon Ahumado',
        'p10-desc': 'Mermelada artesanal 100% natural que combina la dulzura caramelizada de la cebolla blanca con la intensidad del vino de Oporto y el sabor ahumado del bacon. Perfecta para acompañar carnes rojas, quesos curados, tablas de charcutería, o como glaseado para costillas y cerdo. También ideal en hamburguesas gourmet y bruschettas. Presentación 250g; conservar refrigerado después de abrir.',
        'p11-nombre': 'Mermelada de Camote con Apio y Vino Tinto',
        'p11-desc': 'Mermelada gourmet 100% natural elaborada con camote fresco, apio crujiente y vino tinto de calidad. Ofrece un equilibrio perfecto entre el dulzor natural del camote, las notas herbáceas del apio y la profundidad del vino tinto. Ideal para acompañar quesos de cabra, carnes asadas, aves al horno, o untar en pan artesanal. Presentación 250g; refrigerar tras abrir.',
        'p12-nombre': 'Mermelada de Calabaza con Nueces y Canela',
        'p12-desc': 'Mermelada artesanal 100% natural que captura los sabores del otoño con calabaza fresca, nueces tostadas y canela aromática. Ofrece una textura rica y cremosa con el crunch perfecto de las nueces. Excelente para desayunos en pan tostado, como relleno de croissants, acompañamiento de quesos brie o camembert, y en postres. Presentación 250g; conservar en frío después de abrir.',
        'p13-nombre': 'Mermelada de Apio con Ajo y Romero',
        'p13-desc': 'Mermelada gourmet 100% natural que combina el sabor fresco del apio con el carácter aromático del ajo y romero. Ideal para marinar carnes antes de asar, acompañar quesos maduros, untar en bruschettas, agregar profundidad a sopas y guisos, o como glaseado para pescados y mariscos. Presentación 250g; refrigerar tras abrir.',
    },
    pt: {
        'nav-volver': 'Voltar',
        'nav-inicio': 'Início',
        'nav-reservar': 'Reservar Mesa',
        'hero-label': 'Loja Artesanal',
        'hero-title': 'Compotas <em>Artesanais</em>',
        'hero-desc': 'Elaboradas com amor e dedicação, as nossas compotas capturam a essência pura de ingredientes naturais seleccionados. Cada receita é uma celebração de sabores autênticos que honram a terra e os seus frutos.',
        'bc-productos': 'Produtos',
        'bc-mermeladas': 'Compotas',
        'seccion-titulo': 'Coleção de <em>Compotas Gourmet</em>',
        'seccion-desc': 'Sabores únicos e sofisticados que transformam o ordinário em extraordinário.',
        'card-badge-artesanal': 'Artesanal',
        'card-badge-agotado': 'Esgotado',
        'card-cta-ver': 'Ver detalhe',
        'card-cta-nodisponible': 'Não disponível',
        'modal-sublabel': 'Compota Artesanal · Don Inacio',
        'modal-btn-wsp': 'Pedir pelo WhatsApp',
        'modal-btn-agotado': 'Produto Esgotado',
        'modal-wsp-msg': 'Olá! Tenho interesse na compota:',
        'modal-wsp-precio': 'Preço:',
        'p0-nome': 'Compota de Cenoura com Gengibre e Canela',
        'p0-desc': 'Compota artesanal de cenoura elaborada com cenouras frescas, gengibre e canela, cozida lentamente para concentrar os seus aromas e obter uma textura aveludada. Perfeita em torradas, com queijos suaves ou como glaze leve para carnes. Apresentação 250g; conservar no frio após abrir.',
        'p1-nome': 'Compota de Tomate com Manjericão',
        'p1-desc': 'Compota de tomate elaborada com tomates maduros e manjericão fresco, com equilíbrio entre acidez e doçura. Recomendada para bruschettas, tábuas de queijos e como acompanhamento de pratos mediterrâneos. Apresentação 250g; conservar no frio após abrir.',
        'p2-nome': 'Compota de Beterraba com Gengibre e Limão',
        'p2-desc': 'Compota de beterraba com gengibre e limão, que oferece um sabor terroso com toques cítricos e um ligeiro picante do gengibre. Ideal para combinar com queijos curados, saladas e pratos vegetarianos. Apresentação 250g; refrigerar após abrir.',
        'p3-nome': 'Compota de Couve com Cúrcuma e Tomilho',
        'p3-desc': 'Compota de couve com cúrcuma e tomilho: uma combinação quente e aromática que oferece um toque terroso e herbal, perfeita para realçar pratos salgados, queijos e saladas criativas. Apresentação 250g; conservar no frio após abrir.',
        'p4-nome': 'Compota de Limão com Maçã e Pimenta Caiena',
        'p4-desc': 'Compota de limão e maçã com um subtil toque picante de pimenta caiena. Fresca e brilhante, serve para sobremesas, torradas ou para dar um ponto ácido-doce a pratos de peixe e aves. Apresentação 250g; conservar no frio após abrir.',
        'p5-nome': 'Compota de Pimento Doce com Pimenta Caiena',
        'p5-desc': 'Compota de pimento doce com pimenta caiena: combina doçura frutada com um calor gradual, ideal para acompanhar carnes na grelha, queijos fortes e como ingrediente em molhos. Apresentação 250g; conservar no frio após abrir.',
        'p6-nome': 'Compota de Pimento Doce com Chocolate Negro',
        'p6-desc': 'Compota de pimento doce com chocolate negro: uma fusão entre a doçura e as notas amargas do chocolate, com um fundo picante moderado. Perfeita em sobremesas, sobre pão torrado ou para maridar com queijos azuis. Apresentação 250g; refrigerar após abrir.',
        'p7-nome': 'Compota de Pimento Doce com Azeitonas Pretas',
        'p7-desc': 'Compota de pimento doce com azeitonas pretas: mistura salgada e doce, pensada para tábuas de queijos, tapas e para dar um contraste único a sandes gourmet. Apresentação 250g; conservar no frio após abrir.',
        'p8-nome': 'Compota de Cebola Roxa com Gengibre e Pimenta Preta',
        'p8-desc': 'Compota de cebola roxa com gengibre e pimenta preta: caramelizada e especiada, acrescenta profundidade e doçura complexa a hambúrgueres, queijos e pratos de carne. Apresentação 250g; refrigerar após abrir.',
        'p9-nome': 'Compota de Cebola com Flor de Jamaica e Laranja',
        'p9-desc': 'Compota de cebola com flor de jamaica e laranja: combinação cítrica e floral que equilibra a doçura da cebola; ideal com carnes, queijos e como complemento em entradas. Apresentação 250g; conservar no frio após abrir.',
        'p10-nome': 'Compota de Cebola Branca com Vinho do Porto e Bacon Fumado',
        'p10-desc': 'Compota artesanal 100% natural que combina a doçura caramelizada da cebola branca com a intensidade do vinho do Porto e o sabor fumado do bacon. Perfeita para acompanhar carnes vermelhas, queijos curados, tábuas de charcutaria, ou como glaze para costelas e porco. Também ideal em hambúrgueres gourmet e bruschettas. Apresentação 250g; conservar refrigerado após abrir.',
        'p11-nome': 'Compota de Batata-Doce com Aipo e Vinho Tinto',
        'p11-desc': 'Compota gourmet 100% natural elaborada com batata-doce fresca, aipo crocante e vinho tinto de qualidade. Oferece um equilíbrio perfeito entre a doçura natural da batata-doce, as notas herbáceas do aipo e a profundidade do vinho tinto. Ideal para acompanhar queijos de cabra, carnes assadas, aves no forno, ou barrar em pão artesanal. Apresentação 250g; refrigerar após abrir.',
        'p12-nome': 'Compota de Abóbora com Nozes e Canela',
        'p12-desc': 'Compota artesanal 100% natural que captura os sabores do outono com abóbora fresca, nozes torradas e canela aromática. Oferece uma textura rica e cremosa com o crunch perfeito das nozes. Excelente para pequenos-almoços em pão torrado, como recheio de croissants, acompanhamento de queijos brie ou camembert, e em sobremesas. Apresentação 250g; conservar no frio após abrir.',
        'p13-nome': 'Compota de Aipo com Alho e Alecrim',
        'p13-desc': 'Compota gourmet 100% natural que combina o sabor fresco do aipo com o carácter aromático do alho e alecrim. Ideal para marinar carnes antes de assar, acompanhar queijos maduros, barrar em bruschettas, acrescentar profundidade a sopas e guisados, ou como glaze para peixes e mariscos. Apresentação 250g; refrigerar após abrir.',
    },
    en: {
        'nav-volver': 'Back',
        'nav-inicio': 'Home',
        'nav-reservar': 'Reserve a Table',
        'hero-label': 'Artisan Shop',
        'hero-title': 'Artisan <em>Jams</em>',
        'hero-desc': 'Crafted with love and dedication, our jams capture the pure essence of selected natural ingredients. Each recipe is a celebration of authentic flavours that honour the land and its fruits.',
        'bc-productos': 'Products',
        'bc-mermeladas': 'Jams',
        'seccion-titulo': 'Gourmet <em>Jam Collection</em>',
        'seccion-desc': 'Unique and sophisticated flavours that transform the ordinary into the extraordinary.',
        'card-badge-artesanal': 'Artisan',
        'card-badge-agotado': 'Sold out',
        'card-cta-ver': 'View details',
        'card-cta-nodisponible': 'Not available',
        'modal-sublabel': 'Artisan Jam · Don Inacio',
        'modal-btn-wsp': 'Order via WhatsApp',
        'modal-btn-agotado': 'Product Sold Out',
        'modal-wsp-msg': 'Hello! I\'m interested in the jam:',
        'modal-wsp-precio': 'Price:',
        'p0-nombre': 'Carrot Jam with Ginger and Cinnamon',
        'p0-desc': 'Artisan carrot jam made with fresh carrots, ginger and cinnamon, slow-cooked to concentrate its aromas and achieve a smooth, velvety texture. Perfect on toast, with mild cheeses or as a light glaze for meats. 250g jar; refrigerate after opening.',
        'p1-nombre': 'Tomato Jam with Basil',
        'p1-desc': 'Tomato jam made with ripe tomatoes and fresh basil, balancing acidity and sweetness. Recommended for bruschettas, cheese boards and as a side for Mediterranean dishes. 250g jar; refrigerate after opening.',
        'p2-nombre': 'Beetroot Jam with Ginger and Lemon',
        'p2-desc': 'Beetroot jam with ginger and lemon, delivering an earthy flavour with citrus notes and a mild ginger heat. Ideal paired with aged cheeses, salads and vegetarian dishes. 250g jar; refrigerate after opening.',
        'p3-nombre': 'Cabbage Jam with Turmeric and Thyme',
        'p3-desc': 'Cabbage jam with turmeric and thyme: a warm, aromatic combination with an earthy and herbal depth, perfect to enhance savoury dishes, cheeses and creative salads. 250g jar; refrigerate after opening.',
        'p4-nombre': 'Lemon and Apple Jam with Cayenne Pepper',
        'p4-desc': 'Lemon and apple jam with a subtle kick of cayenne pepper. Fresh and bright — great for desserts, toast or to add a sweet-sour note to fish and poultry dishes. 250g jar; refrigerate after opening.',
        'p5-nombre': 'Sweet Pepper Jam with Cayenne',
        'p5-desc': 'Sweet pepper jam with cayenne: combines fruity sweetness with a building heat, ideal alongside grilled meats, strong cheeses and as an ingredient in sauces. 250g jar; refrigerate after opening.',
        'p6-nombre': 'Sweet Pepper and Dark Chocolate Jam',
        'p6-desc': 'Sweet pepper jam with dark chocolate: a fusion of sweetness and bitter chocolate notes with a moderate spicy finish. Perfect in desserts, on toast or paired with blue cheeses. 250g jar; refrigerate after opening.',
        'p7-nombre': 'Sweet Pepper and Black Olive Jam',
        'p7-desc': 'Sweet pepper jam with black olives: a sweet-salty blend crafted for cheese boards, tapas and to give a unique contrast to gourmet sandwiches. 250g jar; refrigerate after opening.',
        'p8-nombre': 'Red Onion Jam with Ginger and Black Pepper',
        'p8-desc': 'Red onion jam with ginger and black pepper: caramelised and spiced, adding depth and complex sweetness to burgers, cheeses and meat dishes. 250g jar; refrigerate after opening.',
        'p9-nombre': 'Onion Jam with Hibiscus and Orange',
        'p9-desc': 'Onion jam with hibiscus and orange: a citrusy, floral combination that balances the sweetness of the onion; ideal with meats, cheeses and as a starter complement. 250g jar; refrigerate after opening.',
        'p10-nombre': 'White Onion Jam with Port Wine and Smoked Bacon',
        'p10-desc': '100% natural artisan jam combining the caramelised sweetness of white onion with the intensity of Port wine and the smoky flavour of bacon. Perfect with red meats, aged cheeses, charcuterie boards, or as a glaze for ribs and pork. Also great in gourmet burgers and bruschettas. 250g jar; refrigerate after opening.',
        'p11-nombre': 'Sweet Potato Jam with Celery and Red Wine',
        'p11-desc': '100% natural gourmet jam made with fresh sweet potato, crunchy celery and quality red wine. Offers a perfect balance between the natural sweetness of sweet potato, the herby notes of celery and the depth of red wine. Ideal alongside goat\'s cheese, roast meats, oven-baked poultry, or spread on artisan bread. 250g jar; refrigerate after opening.',
        'p12-nombre': 'Pumpkin Jam with Walnuts and Cinnamon',
        'p12-desc': '100% natural artisan jam capturing the flavours of autumn with fresh pumpkin, toasted walnuts and aromatic cinnamon. Offers a rich, creamy texture with the perfect walnut crunch. Excellent for breakfasts on toast, as a croissant filling, with brie or camembert, and in desserts. 250g jar; refrigerate after opening.',
        'p13-nombre': 'Celery Jam with Garlic and Rosemary',
        'p13-desc': '100% natural gourmet jam combining the fresh flavour of celery with the aromatic character of garlic and rosemary. Ideal for marinating meats before roasting, alongside mature cheeses, spread on bruschettas, adding depth to soups and stews, or as a glaze for fish and seafood. 250g jar; refrigerate after opening.',
    }
};

let currentLang = localStorage.getItem('doninacio_lang') || 'es';

function t(key) {
    return translations[currentLang]?.[key] ?? translations['es']?.[key] ?? key;
}

function applyTranslations(lang) {
    currentLang = lang;
    const tObj = translations[lang];
    if (!tObj) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (tObj[key] !== undefined) el.innerHTML = tObj[key];
    });

    document.documentElement.lang = langMeta[lang].htmlLang;

    const flagEl = document.querySelector('#langSwitcher .lang-flag');
    const codeEl = document.querySelector('#langSwitcher .lang-code');
    if (flagEl) flagEl.textContent = langMeta[lang].flag;
    if (codeEl) codeEl.textContent = langMeta[lang].code;

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('doninacio_lang', lang);

    // Re-render grid with new language
    const grid = document.getElementById('productosGrid');
    if (grid) { grid.innerHTML = ''; renderGrid(); }
}

// Lang switcher toggle
const langSwitcherEl = document.getElementById('langSwitcher');
const langCurrentBtn = document.getElementById('langCurrent');
if (langCurrentBtn) {
    langCurrentBtn.addEventListener('click', e => {
        e.stopPropagation();
        langSwitcherEl.classList.toggle('open');
        langCurrentBtn.setAttribute('aria-expanded', langSwitcherEl.classList.contains('open'));
    });
    document.addEventListener('click', () => {
        langSwitcherEl?.classList.remove('open');
        langCurrentBtn?.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            applyTranslations(btn.dataset.lang);
            langSwitcherEl.classList.remove('open');
            langCurrentBtn.setAttribute('aria-expanded', 'false');
        });
    });
}



// ============ RENDER GRID ============
function renderGrid() {
    const grid = document.getElementById('productosGrid');
    if (!grid) return;

    productos.forEach((p, i) => {
        const nombreKey = currentLang === 'pt' ? `p${i}-nome` : `p${i}-nombre`;
        const nombre = t(nombreKey) || p.nombre;
        const badge = p.enStock ? t('card-badge-artesanal') : t('card-badge-agotado');
        const ctaTxt = p.enStock ? t('card-cta-ver') : t('card-cta-nodisponible');

        const card = document.createElement('article');
        card.className = 'producto-card' + (p.enStock ? '' : ' sin-stock');
        card.style.animationDelay = `${i * 0.06}s`;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', p.enStock ? '0' : '-1');
        card.setAttribute('aria-label', nombre);

        card.innerHTML = `
            <div class="card-img-wrap">
                <img src="${p.imagen}" alt="${nombre}" loading="lazy">
                <div class="card-img-overlay"></div>
                <span class="card-badge ${p.enStock ? '' : 'agotado'}">${badge}</span>
            </div>
            <div class="card-body">
                <h3 class="card-nombre">${nombre}</h3>
                <div class="card-footer">
                    <span class="card-precio">$${p.precio}</span>
                    ${p.enStock
                ? `<span class="card-cta">
                                ${ctaTxt}
                                <span class="material-symbols-outlined">arrow_forward</span>
                           </span>`
                : `<span class="card-cta" style="color:var(--text-muted)">${ctaTxt}</span>`
            }
                </div>
            </div>`;

        if (p.enStock) {
            card.addEventListener('click', () => abrirModal(p, i));
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirModal(p, i); }
            });
        }

        grid.appendChild(card);
    });
}

// ============ MODAL ============
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function abrirModal(p, idx) {
    const nombreKey = currentLang === 'pt' ? `p${idx}-nome` : `p${idx}-nombre`;
    const nombre = t(nombreKey) || p.nombre;
    const desc = t(`p${idx}-desc`) || p.descripcion;
    const sublabel = t('modal-sublabel');
    const btnWsp = t('modal-btn-wsp');
    const btnAgot = t('modal-btn-agotado');
    const msgPrefix = t('modal-wsp-msg');
    const precioLbl = t('modal-wsp-precio');

    const waMsg = `${msgPrefix} ${nombre} – ${precioLbl} $${p.precio}`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    modalContent.innerHTML = `
        <div class="modal-img-col">
            <img src="${p.imagen}" alt="${nombre}">
        </div>
        <div class="modal-info-col">
            <p class="modal-label">${sublabel}</p>
            <h2 class="modal-nombre">${nombre}</h2>
            <p class="modal-precio">$${p.precio}</p>
            <div class="modal-divider"></div>
            <p class="modal-descripcion">${desc}</p>
            <div class="modal-acciones">
                ${p.enStock
            ? `<button class="btn-wsp" onclick="window.open('${waUrl}','_blank','noopener,noreferrer')">
                            <svg class="wsp-icon" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            ${btnWsp}
                       </button>`
            : `<button class="btn-wsp disabled" disabled>${btnAgot}</button>`
        }
            </div>
        </div>`;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
}

function cerrarModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
}

if (modalClose) modalClose.addEventListener('click', cerrarModal);
if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) cerrarModal();
    });
}
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') cerrarModal();
});

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ============ SCROLL TO TOP ============
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
    // NOTE: renderGrid() is already called inside applyTranslations() — do NOT call it again here.
});