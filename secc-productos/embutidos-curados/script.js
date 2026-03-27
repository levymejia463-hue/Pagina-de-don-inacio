/* ============================================
   DON INACIO — EMBUTIDOS CURADOS PAGE SCRIPT
   ============================================ */

// ============ DATOS DE PRODUCTOS ============
const productosEmbutidosCurados = [
    {
        imagen: '../../extern-arch/imgs embutidos curados/10.png',
        nombre: 'Salamella picante 100% Cerdo',
        descripcion: 'Salamella picante 100% cerdo. Presentación en pieza entera.',
        precio: '13.50',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/11.png',
        nombre: 'Chorizo Tradicional 100% Cerdo',
        descripcion: 'Chorizo tradicional 100% cerdo. Presentación en pieza entera, mitad y lonch 250g y 500g.',
        precio: '12.80',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/12.png',
        nombre: 'Chorizo Picante 100% Cerdo',
        descripcion: 'Chorizo picante 100% cerdo. Presentación en pieza entera, mitad y lonch 250g y 500g.',
        precio: '13.20',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/13.png',
        nombre: 'Salchichón Pimienta Negra 80% Cerdo 20% Res',
        descripcion: 'Salchichón con pimienta negra, 80% cerdo y 20% res. Presentaciones: mitad, pieza entera, lonch 250g/500g.',
        precio: '14.50',
        enStock: false
    },

    {
        imagen: '../../extern-arch/imgs embutidos curados/15.png',
        nombre: 'Salamella Pimienta Negra 80% Cerdo 20% Res',
        descripcion: 'Salamella con pimienta negra, 80% cerdo y 20% res. Presentación en pieza entera.',
        precio: '13.80',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/17.png',
        nombre: 'Salamella Don Inacio 100% Cordero',
        descripcion: 'Salamella Don Inacio 100% cordero. Presentación en pieza entera.',
        precio: '16.50',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/18.png',
        nombre: 'Salchichón de Búfalo 100% Búfalo',
        descripcion: 'Salchichón de búfalo 100%. Presentaciones: entera, mitad y lonch 250g y 500g.',
        precio: '17.80',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/19.png',
        nombre: 'Salame Toscano 100% Cerdo',
        descripcion: 'Salame toscano 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        precio: '15.20',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/1.png',
        nombre: 'Salchichón Familia Inacio',
        descripcion: 'Salchichón Familia Inacio con mezcla única: 50% cerdo, 30% búfalo y 20% cordero. Presentación en pieza entera.',
        precio: '12.50',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/2.png',
        nombre: 'Salchichón al Ajo Fresco 100% Cerdo',
        descripcion: 'Salchichón al ajo fresco 100% cerdo. Presentaciones: mitad y pieza entera lonch 250g/500g.',
        precio: '11.80',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/3.png',
        nombre: 'Salamella al Ajo Fresco 100% Cerdo',
        descripcion: 'Salamella al ajo fresco 100% cerdo. Presentaciones: pieza entera.',
        precio: '12.20',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/4.png',
        nombre: 'Spianata 100% Cerdo',
        descripcion: 'Spianata calabresa 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        precio: '14.80',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/5.png',
        nombre: 'Spianata Picante 100% Cerdo',
        descripcion: 'Spianata picante 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        precio: '15.20',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/6.png',
        nombre: 'Pancetta Ahumada Pimienta Negra 100% Cerdo',
        descripcion: 'Pancetta ahumada con pimienta negra 100% cerdo. Presentaciones: pieza entera',
        precio: '16.50',
        enStock: true
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/7.png',
        nombre: 'Pancetta Arrollada Pimienta Negra 100% Cerdo', //no disponible
        descripcion: 'Pancetta arrollada con pimienta negra 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        precio: '17.20',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/8.png',
        nombre: 'Paio Curado Ahumado 100% Cerdo', //no disponible
        descripcion: 'Paio curado ahumado 100% cerdo. Presentaciones: pieza entera, lonch 250g. Embutido portugués ahumado tradicionalmente, sabor intenso y característico.',
        precio: '13.80',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/9.png',
        nombre: 'Speck Ahumado Pimienta Negra 100% Cerdo', //no disponible
        descripcion: 'Speck ahumado con pimienta negra 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        precio: '18.50',
        enStock: true
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/20.png',
        nombre: 'Lomo de Nuca Pimienta Negra 100% Cerdo (Copa)',
        descripcion: 'Lomo de nuca con pimienta negra 100% cerdo(copa). Presentaciones: entera, mitad y lonch 250g y 500g.',
        precio: '19.20',
        enStock: true
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/21.png',
        nombre: 'Lomo Pimienta Negra 100% Cerdo',
        descripcion: 'Lomo con pimienta negra 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        precio: '18.90',
        enStock: true
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/22.png',
        nombre: 'Lomo Paprika 100% Cerdo',
        descripcion: 'Lomo con paprika 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        precio: '18.50',
        enStock: false
    },
    {
        imagen: '../../extern-arch/imgs embutidos curados/23.png',
        nombre: 'Bresaola 100% Res',
        descripcion: 'Bresaola 100% res. Presentaciones: entera, mitad y lonch 250g y 500g.',
        precio: '22.50',
        enStock: true
    }
];

const WA_NUMBER = '50369204235';

// ============ I18N ============
const langMeta = {
    es: { flag: '🇪🇸', code: 'ES', htmlLang: 'es' },
    pt: { flag: '🇵🇹', code: 'PT', htmlLang: 'pt' },
    en: { flag: '🇺🇸', code: 'EN', htmlLang: 'en' },
};

const translations = {
    es: {
        'nav-volver': 'Volver',
        'nav-inicio': 'Inicio',
        'nav-reservar': 'Reservar Mesa',
        'hero-label': 'Tienda Artesanal',
        'hero-title': 'Embutidos <em>Curados</em>',
        'hero-desc': 'Artesanales y Tradicionales',
        'hero-body': 'Descubre nuestra selección premium de embutidos curados artesanalmente. Cada pieza es elaborada siguiendo tradiciones centenarias de la charcutería ibérica y portuguesa, utilizando carnes de primera calidad y especias cuidadosamente seleccionadas. El proceso de curado natural desarrolla sabores intensos y texturas excepcionales.',
        'bc-productos': 'Productos',
        'bc-embutidos': 'Embutidos Curados',
        'seccion-titulo': 'Colección de <em>Charcutería Gourmet</em>',
        'seccion-desc': 'Sabores únicos elaborados con tradición ibérica y portuguesa de generaciones.',
        'card-badge-artesanal': 'Artesanal',
        'card-badge-agotado': 'Agotado',
        'card-cta-ver': 'Ver detalle',
        'card-cta-nodisponible': 'No disponible',
        'modal-label': 'Embutido Curado · Don Inacio',
        'modal-btn-wsp': 'Pedir por WhatsApp',
        'modal-btn-agotado': 'Producto Agotado',
        'modal-wsp-msg': 'Hola! Me interesa el embutido:',
        'modal-wsp-precio': 'Precio:',
        'precio-por-libra': 'precio por libra',
        'allergen-section-title': 'Información de Alérgenos',
        'allergen-sin-gluten':    'Sin Gluten',
        'allergen-sin-lactosa':   'Sin Lactosa',
        // Productos p0–p20
        'p0-nombre': 'Salamella Picante 100% Cerdo',
        'p0-desc': 'Salamella picante 100% cerdo. Presentación en pieza entera.',
        'p1-nombre': 'Chorizo Tradicional 100% Cerdo',
        'p1-desc': 'Chorizo tradicional 100% cerdo. Presentaciones: pieza entera, mitad y lonch 250g y 500g.',
        'p2-nombre': 'Chorizo Picante 100% Cerdo',
        'p2-desc': 'Chorizo picante 100% cerdo. Presentaciones: pieza entera, mitad y lonch 250g y 500g.',
        'p3-nombre': 'Salchichón Pimienta Negra 80% Cerdo 20% Res',
        'p3-desc': 'Salchichón con pimienta negra, 80% cerdo y 20% res. Presentaciones: mitad, pieza entera, lonch 250g/500g.',
        'p4-nombre': 'Salamella Pimienta Negra 80% Cerdo 20% Res',
        'p4-desc': 'Salamella con pimienta negra, 80% cerdo y 20% res. Presentación en pieza entera.',
        'p5-nombre': 'Salamella Don Inacio 100% Cordero',
        'p5-desc': 'Salamella Don Inacio 100% cordero. Presentación en pieza entera.',
        'p6-nombre': 'Salchichón de Búfalo 100% Búfalo',
        'p6-desc': 'Salchichón de búfalo 100%. Presentaciones: entera, mitad y lonch 250g y 500g.',
        'p7-nombre': 'Salame Toscano 100% Cerdo',
        'p7-desc': 'Salame toscano 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        'p8-nombre': 'Salchichón Familia Inacio',
        'p8-desc': 'Salchichón Familia Inacio con mezcla única: 50% cerdo, 30% búfalo y 20% cordero. Presentación en pieza entera.',
        'p9-nombre': 'Salchichón al Ajo Fresco 100% Cerdo',
        'p9-desc': 'Salchichón al ajo fresco 100% cerdo. Presentaciones: mitad y pieza entera, lonch 250g/500g.',
        'p10-nombre': 'Salamella al Ajo Fresco 100% Cerdo',
        'p10-desc': 'Salamella al ajo fresco 100% cerdo. Presentación en pieza entera.',
        'p11-nombre': 'Spianata 100% Cerdo',
        'p11-desc': 'Spianata calabresa 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        'p12-nombre': 'Spianata Picante 100% Cerdo',
        'p12-desc': 'Spianata picante 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        'p13-nombre': 'Pancetta Ahumada Pimienta Negra 100% Cerdo',
        'p13-desc': 'Pancetta ahumada con pimienta negra 100% cerdo. Presentaciones: pieza entera.',
        'p14-nombre': 'Pancetta Arrollada Pimienta Negra 100% Cerdo',
        'p14-desc': 'Pancetta arrollada con pimienta negra 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        'p15-nombre': 'Paio Curado Ahumado 100% Cerdo',
        'p15-desc': 'Paio curado ahumado 100% cerdo. Presentaciones: pieza entera, lonch 250g. Embutido portugués ahumado tradicionalmente, sabor intenso y característico.',
        'p16-nombre': 'Speck Ahumado Pimienta Negra 100% Cerdo',
        'p16-desc': 'Speck ahumado con pimienta negra 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        'p17-nombre': 'Lomo de Nuca Pimienta Negra 100% Cerdo (Copa)',
        'p17-desc': 'Lomo de nuca con pimienta negra 100% cerdo (copa). Presentaciones: entera, mitad y lonch 250g y 500g.',
        'p18-nombre': 'Lomo Pimienta Negra 100% Cerdo',
        'p18-desc': 'Lomo con pimienta negra 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        'p19-nombre': 'Lomo Paprika 100% Cerdo',
        'p19-desc': 'Lomo con paprika 100% cerdo. Presentaciones: entera, mitad y lonch 250g y 500g.',
        'p20-nombre': 'Bresaola 100% Res',
        'p20-desc': 'Bresaola 100% res. Presentaciones: entera, mitad y lonch 250g y 500g.',
    },
    pt: {
        'nav-volver': 'Voltar',
        'nav-inicio': 'Início',
        'nav-reservar': 'Reservar Mesa',
        'hero-label': 'Loja Artesanal',
        'hero-title': 'Enchidos <em>Curados</em>',
        'hero-desc': 'Artesanais e Tradicionais',
        'hero-body': 'Descubra a nossa seleção premium de enchidos curados artesanalmente. Cada peça é elaborada seguindo tradições centenárias da charcutaria ibérica e portuguesa, utilizando carnes de primeira qualidade e especiarias cuidadosamente selecionadas. O processo de cura natural desenvolve sabores intensos e texturas excecionais.',
        'bc-produtos': 'Produtos',
        'bc-productos': 'Produtos',
        'bc-embutidos': 'Enchidos Curados',
        'seccion-titulo': 'Coleção de <em>Charcutaria Gourmet</em>',
        'seccion-desc': 'Sabores únicos elaborados com tradição ibérica e portuguesa de gerações.',
        'card-badge-artesanal': 'Artesanal',
        'card-badge-agotado': 'Esgotado',
        'card-cta-ver': 'Ver detalhe',
        'card-cta-nodisponible': 'Indisponível',
        'modal-label': 'Enchido Curado · Don Inacio',
        'modal-btn-wsp': 'Pedir pelo WhatsApp',
        'modal-btn-agotado': 'Produto Esgotado',
        'modal-wsp-msg': 'Olá! Tenho interesse no enchido:',
        'modal-wsp-precio': 'Preço:',
        'precio-por-libra': 'preço por libra',
        'allergen-section-title': 'Informação de Alergénios',
        'allergen-sin-gluten':    'Sem Glúten',
        'allergen-sin-lactosa':   'Sem Lactose',
        'p0-nombre': 'Salamella Picante 100% Porco',
        'p0-desc': 'Salamella picante 100% porco. Apresentação em peça inteira.',
        'p1-nombre': 'Chouriço Tradicional 100% Porco',
        'p1-desc': 'Chouriço tradicional 100% porco. Apresentações: peça inteira, metade e fatiado 250g e 500g.',
        'p2-nombre': 'Chouriço Picante 100% Porco',
        'p2-desc': 'Chouriço picante 100% porco. Apresentações: peça inteira, metade e fatiado 250g e 500g.',
        'p3-nombre': 'Salame Pimenta Negra 80% Porco 20% Vaca',
        'p3-desc': 'Salame com pimenta negra, 80% porco e 20% vaca. Apresentações: metade, peça inteira, fatiado 250g/500g.',
        'p4-nombre': 'Salamella Pimenta Negra 80% Porco 20% Vaca',
        'p4-desc': 'Salamella com pimenta negra, 80% porco e 20% vaca. Apresentação em peça inteira.',
        'p5-nombre': 'Salamella Don Inacio 100% Cordeiro',
        'p5-desc': 'Salamella Don Inacio 100% cordeiro. Apresentação em peça inteira.',
        'p6-nombre': 'Salchichón de Búfalo 100% Búfalo',
        'p6-desc': 'Salchichón de búfalo 100%. Apresentações: inteira, metade e fatiado 250g e 500g.',
        'p7-nombre': 'Salame Toscano 100% Porco',
        'p7-desc': 'Salame toscano 100% porco. Apresentações: inteira, metade e fatiado 250g e 500g.',
        'p8-nombre': 'Salchichón Família Inacio',
        'p8-desc': 'Salchichón Família Inacio com mistura única: 50% porco, 30% búfalo e 20% cordeiro. Apresentação em peça inteira.',
        'p9-nombre': 'Salchichón ao Alho Fresco 100% Porco',
        'p9-desc': 'Salchichón ao alho fresco 100% porco. Apresentações: metade e peça inteira, fatiado 250g/500g.',
        'p10-nombre': 'Salamella ao Alho Fresco 100% Porco',
        'p10-desc': 'Salamella ao alho fresco 100% porco. Apresentação em peça inteira.',
        'p11-nombre': 'Spianata 100% Porco',
        'p11-desc': 'Spianata calabresa 100% porco. Apresentações: inteira, metade e fatiado 250g e 500g.',
        'p12-nombre': 'Spianata Picante 100% Porco',
        'p12-desc': 'Spianata picante 100% porco. Apresentações: inteira, metade e fatiado 250g e 500g.',
        'p13-nombre': 'Pancetta Fumada Pimenta Negra 100% Porco',
        'p13-desc': 'Pancetta fumada com pimenta negra 100% porco. Apresentações: peça inteira.',
        'p14-nombre': 'Pancetta Enrolada Pimenta Negra 100% Porco',
        'p14-desc': 'Pancetta enrolada com pimenta negra 100% porco. Apresentações: inteira, metade e fatiado 250g e 500g.',
        'p15-nombre': 'Paio Curado Fumado 100% Porco',
        'p15-desc': 'Paio curado fumado 100% porco. Apresentações: peça inteira, fatiado 250g. Enchido português fumado tradicionalmente, sabor intenso e característico.',
        'p16-nombre': 'Speck Fumado Pimenta Negra 100% Porco',
        'p16-desc': 'Speck fumado com pimenta negra 100% porco. Apresentações: inteira, metade e fatiado 250g e 500g.',
        'p17-nombre': 'Lombo de Nuca Pimenta Negra 100% Porco (Copa)',
        'p17-desc': 'Lombo de nuca com pimenta negra 100% porco (copa). Apresentações: inteira, metade e fatiado 250g e 500g.',
        'p18-nombre': 'Lombo Pimenta Negra 100% Porco',
        'p18-desc': 'Lombo com pimenta negra 100% porco. Apresentações: inteira, metade e fatiado 250g e 500g.',
        'p19-nombre': 'Lombo Paprika 100% Porco',
        'p19-desc': 'Lombo com paprika 100% porco. Apresentações: inteira, metade e fatiado 250g e 500g.',
        'p20-nombre': 'Bresaola 100% Vaca',
        'p20-desc': 'Bresaola 100% vaca. Apresentações: inteira, metade e fatiado 250g e 500g.',
    },
    en: {
        'nav-volver': 'Back',
        'nav-inicio': 'Home',
        'nav-reservar': 'Book a Table',
        'hero-label': 'Artisan Store',
        'hero-title': 'Cured <em>Meats</em>',
        'hero-desc': 'Artisan & Traditional',
        'hero-body': 'Discover our premium selection of artisan-cured meats. Each piece is crafted following centuries-old traditions of Iberian and Portuguese charcuterie, using top-quality meats and carefully selected spices. The natural curing process develops intense flavors and exceptional textures.',
        'bc-productos': 'Products',
        'bc-embutidos': 'Cured Meats',
        'seccion-titulo': 'Our <em>Gourmet Charcuterie</em> Collection',
        'seccion-desc': 'Unique flavors crafted with generations of Iberian and Portuguese tradition.',
        'card-badge-artesanal': 'Artisan',
        'card-badge-agotado': 'Sold Out',
        'card-cta-ver': 'View details',
        'card-cta-nodisponible': 'Not available',
        'modal-label': 'Cured Meat · Don Inacio',
        'modal-btn-wsp': 'Order via WhatsApp',
        'modal-btn-agotado': 'Out of Stock',
        'modal-wsp-msg': 'Hello! I\'m interested in:',
        'modal-wsp-precio': 'Price:',
        'precio-por-libra': 'price per pound',
        'allergen-section-title': 'Allergen Information',
        'allergen-sin-gluten':    'Gluten Free',
        'allergen-sin-lactosa':   'Lactose Free',
        'p0-nombre': 'Spicy Salamella 100% Pork',
        'p0-desc': 'Spicy salamella 100% pork. Whole piece presentation.',
        'p1-nombre': 'Traditional Chorizo 100% Pork',
        'p1-desc': 'Traditional chorizo 100% pork. Presentations: whole piece, half and sliced 250g and 500g.',
        'p2-nombre': 'Spicy Chorizo 100% Pork',
        'p2-desc': 'Spicy chorizo 100% pork. Presentations: whole piece, half and sliced 250g and 500g.',
        'p3-nombre': 'Black Pepper Salchichón 80% Pork 20% Beef',
        'p3-desc': 'Black pepper salchichón, 80% pork and 20% beef. Presentations: half, whole piece, sliced 250g/500g.',
        'p4-nombre': 'Black Pepper Salamella 80% Pork 20% Beef',
        'p4-desc': 'Black pepper salamella, 80% pork and 20% beef. Whole piece presentation.',
        'p5-nombre': 'Don Inacio Salamella 100% Lamb',
        'p5-desc': 'Don Inacio salamella 100% lamb. Whole piece presentation.',
        'p6-nombre': 'Buffalo Salchichón 100% Buffalo',
        'p6-desc': '100% buffalo salchichón. Presentations: whole, half and sliced 250g and 500g.',
        'p7-nombre': 'Tuscan Salame 100% Pork',
        'p7-desc': 'Tuscan salame 100% pork. Presentations: whole, half and sliced 250g and 500g.',
        'p8-nombre': 'Familia Inacio Salchichón',
        'p8-desc': 'Familia Inacio salchichón with a unique blend: 50% pork, 30% buffalo and 20% lamb. Whole piece presentation.',
        'p9-nombre': 'Fresh Garlic Salchichón 100% Pork',
        'p9-desc': 'Fresh garlic salchichón 100% pork. Presentations: half and whole piece, sliced 250g/500g.',
        'p10-nombre': 'Fresh Garlic Salamella 100% Pork',
        'p10-desc': 'Fresh garlic salamella 100% pork. Whole piece presentation.',
        'p11-nombre': 'Spianata 100% Pork',
        'p11-desc': 'Calabrian spianata 100% pork. Presentations: whole, half and sliced 250g and 500g.',
        'p12-nombre': 'Spicy Spianata 100% Pork',
        'p12-desc': 'Spicy spianata 100% pork. Presentations: whole, half and sliced 250g and 500g.',
        'p13-nombre': 'Smoked Black Pepper Pancetta 100% Pork',
        'p13-desc': 'Smoked black pepper pancetta 100% pork. Presentations: whole piece.',
        'p14-nombre': 'Rolled Black Pepper Pancetta 100% Pork',
        'p14-desc': 'Rolled black pepper pancetta 100% pork. Presentations: whole, half and sliced 250g and 500g.',
        'p15-nombre': 'Smoked Cured Paio 100% Pork',
        'p15-desc': 'Smoked cured paio 100% pork. Presentations: whole piece, sliced 250g. Traditionally smoked Portuguese sausage with an intense, characteristic flavor.',
        'p16-nombre': 'Smoked Black Pepper Speck 100% Pork',
        'p16-desc': 'Smoked black pepper speck 100% pork. Presentations: whole, half and sliced 250g and 500g.',
        'p17-nombre': 'Black Pepper Neck Loin 100% Pork (Copa)',
        'p17-desc': 'Black pepper neck loin 100% pork (copa). Presentations: whole, half and sliced 250g and 500g.',
        'p18-nombre': 'Black Pepper Loin 100% Pork',
        'p18-desc': 'Black pepper loin 100% pork. Presentations: whole, half and sliced 250g and 500g.',
        'p19-nombre': 'Paprika Loin 100% Pork',
        'p19-desc': 'Paprika loin 100% pork. Presentations: whole, half and sliced 250g and 500g.',
        'p20-nombre': 'Bresaola 100% Beef',
        'p20-desc': '100% beef bresaola. Presentations: whole, half and sliced 250g and 500g.',
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

    const grid = document.getElementById('productsGrid');
    if (grid) { grid.innerHTML = ''; cargarProductos(); }
}

// ============ ALLERGEN STRIP ============
// All products in this section: Sin Gluten + Sin Lactosa
function getAllergenStrip(size) {
    var lg = (size === 'large');
    var lSG = (translations[currentLang] || translations.es)['allergen-sin-gluten'] || 'Sin Gluten';
    var lSL = (translations[currentLang] || translations.es)['allergen-sin-lactosa'] || 'Sin Lactosa';
    var s = lg ? 'allergen-icon--large' : '';
    var imgSize = lg ? '52' : '28';
    
    var iconSG = '../../extern-arch/allergen-icons/sin-gluten.svg';
    var iconSL = '../../extern-arch/allergen-icons/sin-lactosa.svg';
    
    function makeChip(src, label) {
        return '<span class="allergen-chip allergen-chip--free ' + s + '" title="' + label + '">'
          + '<img src="' + src + '" alt="' + label + '" width="' + imgSize + '" height="' + imgSize + '" style="display:block;">'
          + (lg ? '<span class="allergen-label">' + label + '</span>' : '')
          + '</span>';
    }

    var chip1 = makeChip(iconSG, lSG);
    var chip2 = makeChip(iconSL, lSL);
    
    return '<div class="allergen-strip allergen-strip--' + (lg ? 'large' : 'small') + '">' + chip1 + chip2 + '</div>';
}

// Toggle del selector
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
function cargarProductos() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    productosEmbutidosCurados.forEach((p, i) => {
        const nombre = t(`p${i}-nombre`) || p.nombre;
        const badgeTxt = p.enStock ? t('card-badge-artesanal') : t('card-badge-agotado');
        const ctaTxt = p.enStock ? t('card-cta-ver') : t('card-cta-nodisponible');

        const card = document.createElement('article');
        card.className = 'product-card' + (p.enStock ? '' : ' out-of-stock');
        card.style.animationDelay = `${i * 0.06}s`;
        card.setAttribute('role', p.enStock ? 'button' : 'article');
        if (p.enStock) {
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', nombre);
        }

        const badge = !p.enStock
            ? `<span class="out-of-stock-badge">${badgeTxt}</span>`
            : '';

        const cta = p.enStock
            ? `<span class="product-cta">
                    ${ctaTxt}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
               </span>`
            : `<span class="product-cta" style="color:var(--color-tierra);opacity:.6">${ctaTxt}</span>`;

        card.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${p.imagen}" alt="${nombre}" class="product-image" loading="lazy">
                ${badge}
            </div>
            <div class="product-content">
                <h2 class="product-name">${nombre}</h2>
                ${getAllergenStrip('small')}
                <div class="product-footer">
                    <div class="product-price-wrap">
                        <span class="product-price">$${p.precio}</span>
                        <span class="product-price-label">${t('precio-por-libra')}</span>
                    </div>
                    ${cta}
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
    const nombre = t(`p${idx}-nombre`) || p.nombre;
    const desc = t(`p${idx}-desc`) || p.descripcion;
    const label = t('modal-label');
    const btnWsp = t('modal-btn-wsp');
    const btnAgot = t('modal-btn-agotado');
    const msgPrefix = t('modal-wsp-msg');
    const precioLbl = t('modal-wsp-precio');

    const waMsg = `${msgPrefix} ${nombre} – ${precioLbl} $${p.precio}`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    modalContent.innerHTML = `
        <div class="modal-body">
            <div class="modal-img-col">
                <img src="${p.imagen}" alt="${nombre}">
            </div>
            <div class="modal-info-col">
                <p class="modal-label">${label}</p>
                <h2 class="modal-title">${nombre}</h2>
                <p class="modal-price">$${p.precio}</p>
                <p class="modal-price-label">${t('precio-por-libra')}</p>
                <div class="modal-divider"></div>
                <p class="modal-description">${desc}</p>
                <div class="modal-allergen-section">
                    <div class="modal-allergen-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#c8962a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;flex-shrink:0;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                        ${(translations[currentLang] || translations.es)['allergen-section-title'] || 'Información de Alérgenos'}
                    </div>
                    ${getAllergenStrip('large')}
                </div>
                <div class="modal-actions">
                    ${p.enStock
            ? `<a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                ${btnWsp}
                           </a>`
            : `<button class="btn-whatsapp disabled" disabled>${btnAgot}</button>`
        }
                </div>
            </div>
        </div>`;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function cerrarModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
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
});