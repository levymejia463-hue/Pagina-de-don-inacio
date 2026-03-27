// ============ DATOS DE PRODUCTOS VINOS ============
const productosVinos = [
    // p0
    {
        imagen: '../../extern-arch/imgs-vinos/2.png',
        nombre: 'Porto Rubí',
        categoria: 'ruby',
        descripcion: 'Un Porto Rubí vibrante y expresivo, elaborado con una cuidada selección de las mejores uvas del Douro: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Su color rubí intenso y sus aromas frutales lo convierten en la elección perfecta tanto como aperitivo para comenzar una velada especial, como digestivo para cerrar con broche de oro.',
        precio: '49.20',
        enStock: true
    },
    // p1
    {
        imagen: '../../extern-arch/imgs-vinos/16.png',
        nombre: 'Porto Tawny',
        categoria: 'tawny',
        descripcion: 'El Porto Tawny clásico que no puede faltar en ninguna colección. Ofrece el perfil Tawny característico con su color rubí evolucionado y aromas que recuerdan a frutos secos, caramelo y especias suaves. Extraordinariamente versátil: disfrútalo como aperitivo refrescante ligeramente frío o como digestivo.',
        precio: '48.60',
        enStock: true
    },
    // p2
    {
        imagen: '../../extern-arch/imgs-vinos/3.png',
        nombre: 'Porto Rubí Reserva Orgánica',
        categoria: 'ruby',
        descripcion: 'Una joya orgánica certificada del valle del Douro. Este Porto Rubí Reserva combina tradición portuguesa con prácticas sostenibles, elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca cultivadas sin químicos sintéticos. Su perfil elegante y natural lo hace perfecto para acompañar tus postres favoritos.',
        precio: '68.70',
        enStock: true
    },
    // p3
    {
        imagen: '../../extern-arch/imgs-vinos/14.png',
        nombre: 'Porto Reserva Especial Tawny',
        categoria: 'tawny',
        descripcion: 'Una Reserva Especial que representa la esencia del estilo Tawny del Douro. Ha sido envejecido cuidadosamente en barricas para desarrollar su carácter único. Presenta un equilibrio magistral entre frescura frutal y notas evolucionadas de frutos secos, caramelo y especias. Reconocido con 91 puntos Robert Parker.',
        precio: '64.80',
        enStock: true
    },
    // p4
    {
        imagen: '../../extern-arch/imgs-vinos/13.png',
        nombre: 'Porto Tawny 20 Años',
        categoria: 'tawny',
        descripcion: 'Dos décadas de paciencia dan como resultado este extraordinario Porto Tawny 20 Años. Ha envejecido en barricas de roble, desarrollando un color ámbar brillante y una paleta aromática de gran sofisticación. Notas de caramelo, almendras tostadas, higos secos y especias dulces. Reconocido con 91 puntos Robert Parker.',
        precio: '98.50',
        enStock: true
    },
    // p5
    {
        imagen: '../../extern-arch/imgs-vinos/15.png',
        nombre: 'Porto Tawny 40 Años - Woodbox',
        categoria: 'tawny',
        descripcion: 'La cumbre de la paciencia y el arte vinícola: Porto Tawny 40 Años de viñas viejas centenarias. Cuatro décadas de crianza oxidativa en barricas han transformado este Porto en una experiencia sensorial única. Sus 94 puntos Robert Parker confirman su estatus legendario. Presentado en lujosa caja de madera.',
        precio: '276.60',
        enStock: true
    },
    // p6
    {
        imagen: '../../extern-arch/imgs-vinos/11.png',
        nombre: 'Porto Vintage 2007',
        categoria: 'vintage',
        descripcion: 'Un Porto Vintage excepcional de la añada 2007 del valle del Douro. Elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca de viñedos seleccionados. Con casi dos décadas de evolución, este Vintage ha desarrollado una complejidad extraordinaria con notas de frutos negros maduros, especias, chocolate y toques balsámicos. Ha recibido el reconocimiento de 93 puntos Robert Parker.',
        precio: '138.60',
        enStock: true
    },
    // p7
    {
        imagen: '../../extern-arch/imgs-vinos/5.png',
        nombre: 'Porto Vintage 2013',
        categoria: 'vintage',
        descripcion: 'Un Vintage excepcional que captura la esencia de la añada 2013 del valle del Douro. Elaborado con las variedades más nobles, este Porto Vintage desarrolla complejidad con el tiempo, ofreciendo notas de frutos negros, especias y chocolate. Con el prestigio de 92 puntos Robert Parker y 90 puntos Wine & Spirits Magazine.',
        precio: '87.40',
        enStock: true
    },
    // p8
    {
        imagen: '../../extern-arch/imgs-vinos/6.png',
        nombre: 'Porto Vintage 2015',
        categoria: 'vintage',
        descripcion: 'La añada 2015 brindó condiciones climáticas excepcionales en el Douro, resultando en este magnífico Porto Vintage. Rico, concentrado y con un potencial de guarda extraordinario, este Vintage es ideal como digestivo contemplativo o para acompañar momentos gastronómicos especiales. Reconocido con 90 puntos Robert Parker.',
        precio: '73.80',
        enStock: true
    },
    // p9
    {
        imagen: '../../extern-arch/imgs-vinos/7.png',
        nombre: 'Porto Vintage 2016',
        categoria: 'vintage',
        descripcion: 'El 2016 fue declarado año de Vintage por las principales casas del Douro. Un ensamblaje magistral que ofrece una intensidad aromática excepcional y una estructura tánica impresionante. Sus notas de frutas negras maduras, regaliz y especias dulces lo hacen perfecto como digestivo de lujo. 93 puntos Wine Enthusiast Magazine.',
        precio: '69.30',
        enStock: true
    },
    // p10
    {
        imagen: '../../extern-arch/imgs-vinos/8.png',
        nombre: 'Porto Vintage 2017',
        categoria: 'vintage',
        descripcion: 'El Vintage 2017 representa la más reciente expresión de excelencia del Douro. Destaca por su frescura vibrante y su concentración excepcional. Joven pero con un potencial de evolución fascinante, ofrece aromas explosivos de frutos rojos, violetas y especias. Robert Parker lo ha distinguido con 93 puntos.',
        precio: '66.80',
        enStock: true
    },
    // p11
    {
        imagen: '../../extern-arch/imgs-vinos/26.png',
        nombre: 'Porto Vintage 1992',
        categoria: 'vintage',
        descripcion: 'Una añada histórica que ha alcanzado su plenitud después de más de 30 años. Con décadas de evolución en botella, ofrece una complejidad única con notas de frutas en conserva, tabaco, cuero, especias orientales y toques balsámicos. Perfecto para ocasiones muy especiales, aniversarios significativos o como regalo para coleccionistas.',
        precio: '243.10',
        enStock: true
    },
    // p12
    {
        imagen: '../../extern-arch/imgs-vinos/9.png',
        nombre: 'Porto Colheita 1974 - Woodbox',
        categoria: 'colheita',
        descripcion: 'Una verdadera reliquia líquida: Porto Colheita de la añada 1974, con más de 50 años de crianza en barrica. Ha desarrollado una complejidad sublime durante su larga maduración. Presenta notas de frutos secos, caramelo, especias exóticas y maderas nobles. Presentado en elegante caja de madera.',
        precio: '368.40',
        enStock: true
    },
    // p13
    {
        imagen: '../../extern-arch/imgs-vinos/24.png',
        nombre: 'Chateau Champion - Saint-Émilion Grand Cru 2015',
        categoria: 'grand-cru',
        descripcion: 'Un Grand Cru de la prestigiosa denominación Saint-Émilion que representa la elegancia bordelesa en su máxima expresión. La añada 2015, considerada excepcional en Burdeos, brilla en este ensamblaje clásico de Cabernet Sauvignon, Cabernet Franc y Merlot. Medalla de Oro en el Concurso Féminalise.',
        precio: '63.90',
        enStock: true
    },
    // p14
    {
        imagen: '../../extern-arch/imgs-vinos/25.png',
        nombre: 'Chateau Champion - Saint-Émilion Grand Cru 2018',
        categoria: 'grand-cru',
        descripcion: 'La añada 2018 de este Saint-Émilion Grand Cru demuestra la consistencia de Chateau Champion en elaborar vinos excepcionales. Este blend magistral de Cabernet Sauvignon, Cabernet Franc y Merlot captura la esencia del terruño bordelés con su complejidad aromática y estructura elegante. Medalla de Oro en el Concurso Féminalise.',
        precio: '58.70',
        enStock: true
    }
];

// ============ I18N ============
const langMeta = {
    es: { flag: '🇪🇸', code: 'ES', htmlLang: 'es' },
    pt: { flag: '🇵🇹', code: 'PT', htmlLang: 'pt' },
    en: { flag: '🇺🇸', code: 'EN', htmlLang: 'en' },
};

const translations = {
    es: {
        // Nav
        'nav-volver': 'Atrás',
        'nav-inicio': 'Inicio',
        'nav-reservar': 'Reservar Mesa',
        // Hero
        'hero-label': 'CARTA DE',
        'hero-title': 'VINOS PORTO',
        'hero-desc': 'Una selección exclusiva de vinos y portos portugueses',
        // Filters
        'filter-all': 'Todos',
        // Card UI
        'card-badge-agotado': 'Agotado',
        'card-cta-ver': '📱 Pedir por WhatsApp',
        'card-cta-nodisponible': '❌ No disponible',
        // Modal UI
        'modal-btn-wsp': '📱 Pedir por WhatsApp',
        'modal-btn-agotado': '❌ No disponible',
        'modal-wsp-msg': 'Hola! Me interesa el producto:',
        'modal-wsp-precio': 'Precio:',
        // Products — nombres
        'p0-nombre': 'Porto Rubí',
        'p1-nombre': 'Porto Tawny',
        'p2-nombre': 'Porto Rubí Reserva Orgánica',
        'p3-nombre': 'Porto Reserva Especial Tawny',
        'p4-nombre': 'Porto Tawny 20 Años',
        'p5-nombre': 'Porto Tawny 40 Años - Woodbox',
        'p6-nombre': 'Porto Vintage 2007',
        'p7-nombre': 'Porto Vintage 2013',
        'p8-nombre': 'Porto Vintage 2015',
        'p9-nombre': 'Porto Vintage 2016',
        'p10-nombre': 'Porto Vintage 2017',
        'p11-nombre': 'Porto Vintage 1992',
        'p12-nombre': 'Porto Colheita 1974 - Woodbox',
        'p13-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2015',
        'p14-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2018',
        // Products — descripciones
        'p0-desc': 'Un Porto Rubí vibrante y expresivo, elaborado con una cuidada selección de las mejores uvas del Douro: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Su color rubí intenso y sus aromas frutales lo convierten en la elección perfecta tanto como aperitivo para comenzar una velada especial, como digestivo para cerrar con broche de oro.',
        'p1-desc': 'El Porto Tawny clásico que no puede faltar en ninguna colección. Ofrece el perfil Tawny característico con su color rubí evolucionado y aromas que recuerdan a frutos secos, caramelo y especias suaves. Extraordinariamente versátil: disfrútalo como aperitivo refrescante ligeramente frío o como digestivo.',
        'p2-desc': 'Una joya orgánica certificada del valle del Douro. Este Porto Rubí Reserva combina tradición portuguesa con prácticas sostenibles, elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca cultivadas sin químicos sintéticos. Su perfil elegante y natural lo hace perfecto para acompañar tus postres favoritos.',
        'p3-desc': 'Una Reserva Especial que representa la esencia del estilo Tawny del Douro. Ha sido envejecido cuidadosamente en barricas para desarrollar su carácter único. Presenta un equilibrio magistral entre frescura frutal y notas evolucionadas de frutos secos, caramelo y especias. Reconocido con 91 puntos Robert Parker.',
        'p4-desc': 'Dos décadas de paciencia dan como resultado este extraordinario Porto Tawny 20 Años. Ha envejecido en barricas de roble, desarrollando un color ámbar brillante y una paleta aromática de gran sofisticación. Notas de caramelo, almendras tostadas, higos secos y especias dulces. Reconocido con 91 puntos Robert Parker.',
        'p5-desc': 'La cumbre de la paciencia y el arte vinícola: Porto Tawny 40 Años de viñas viejas centenarias. Cuatro décadas de crianza oxidativa en barricas han transformado este Porto en una experiencia sensorial única. Sus 94 puntos Robert Parker confirman su estatus legendario. Presentado en lujosa caja de madera.',
        'p6-desc': 'Un Porto Vintage excepcional de la añada 2007 del valle del Douro. Elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca de viñedos seleccionados. Con casi dos décadas de evolución, este Vintage ha desarrollado una complejidad extraordinaria con notas de frutos negros maduros, especias, chocolate y toques balsámicos. Ha recibido el reconocimiento de 93 puntos Robert Parker.',
        'p7-desc': 'Un Vintage excepcional que captura la esencia de la añada 2013 del valle del Douro. Elaborado con las variedades más nobles, este Porto Vintage desarrolla complejidad con el tiempo, ofreciendo notas de frutos negros, especias y chocolate. Con el prestigio de 92 puntos Robert Parker y 90 puntos Wine & Spirits Magazine.',
        'p8-desc': 'La añada 2015 brindó condiciones climáticas excepcionales en el Douro, resultando en este magnífico Porto Vintage. Rico, concentrado y con un potencial de guarda extraordinario, este Vintage es ideal como digestivo contemplativo o para acompañar momentos gastronómicos especiales. Reconocido con 90 puntos Robert Parker.',
        'p9-desc': 'El 2016 fue declarado año de Vintage por las principales casas del Douro. Un ensamblaje magistral que ofrece una intensidad aromática excepcional y una estructura tánica impresionante. Sus notas de frutas negras maduras, regaliz y especias dulces lo hacen perfecto como digestivo de lujo. 93 puntos Wine Enthusiast Magazine.',
        'p10-desc': 'El Vintage 2017 representa la más reciente expresión de excelencia del Douro. Destaca por su frescura vibrante y su concentración excepcional. Joven pero con un potencial de evolución fascinante, ofrece aromas explosivos de frutos rojos, violetas y especias. Robert Parker lo ha distinguido con 93 puntos.',
        'p11-desc': 'Una añada histórica que ha alcanzado su plenitud después de más de 30 años. Con décadas de evolución en botella, ofrece una complejidad única con notas de frutas en conserva, tabaco, cuero, especias orientales y toques balsámicos. Perfecto para ocasiones muy especiales, aniversarios significativos o como regalo para coleccionistas.',
        'p12-desc': 'Una verdadera reliquia líquida: Porto Colheita de la añada 1974, con más de 50 años de crianza en barrica. Ha desarrollado una complejidad sublime durante su larga maduración. Presenta notas de frutos secos, caramelo, especias exóticas y maderas nobles. Presentado en elegante caja de madera.',
        'p13-desc': 'Un Grand Cru de la prestigiosa denominación Saint-Émilion que representa la elegancia bordelesa en su máxima expresión. La añada 2015, considerada excepcional en Burdeos, brilla en este ensamblaje clásico de Cabernet Sauvignon, Cabernet Franc y Merlot. Medalla de Oro en el Concurso Féminalise.',
        'p14-desc': 'La añada 2018 de este Saint-Émilion Grand Cru demuestra la consistencia de Chateau Champion en elaborar vinos excepcionales. Este blend magistral de Cabernet Sauvignon, Cabernet Franc y Merlot captura la esencia del terruño bordelés con su complejidad aromática y estructura elegante. Medalla de Oro en el Concurso Féminalise.',
    },

    pt: {
        // Nav
        'nav-volver': 'Voltar',
        'nav-inicio': 'Início',
        'nav-reservar': 'Reservar Mesa',
        // Hero
        'hero-label': 'CARTA DE',
        'hero-title': 'VINHOS PORTO',
        'hero-desc': 'Uma seleção exclusiva de vinhos e portos portugueses',
        // Filters
        'filter-all': 'Todos',
        // Card UI
        'card-badge-agotado': 'Esgotado',
        'card-cta-ver': '📱 Pedir pelo WhatsApp',
        'card-cta-nodisponible': '❌ Indisponível',
        // Modal UI
        'modal-btn-wsp': '📱 Pedir pelo WhatsApp',
        'modal-btn-agotado': '❌ Indisponível',
        'modal-wsp-msg': 'Olá! Tenho interesse no produto:',
        'modal-wsp-precio': 'Preço:',
        // Products — nomes
        'p0-nombre': 'Porto Ruby',
        'p1-nombre': 'Porto Tawny',
        'p2-nombre': 'Porto Ruby Reserva Orgânico',
        'p3-nombre': 'Porto Reserva Especial Tawny',
        'p4-nombre': 'Porto Tawny 20 Anos',
        'p5-nombre': 'Porto Tawny 40 Anos - Woodbox',
        'p6-nombre': 'Porto Vintage 2007',
        'p7-nombre': 'Porto Vintage 2013',
        'p8-nombre': 'Porto Vintage 2015',
        'p9-nombre': 'Porto Vintage 2016',
        'p10-nombre': 'Porto Vintage 2017',
        'p11-nombre': 'Porto Vintage 1992',
        'p12-nombre': 'Porto Colheita 1974 - Woodbox',
        'p13-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2015',
        'p14-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2018',
        // Products — descrições
        'p0-desc': 'Um Porto Ruby vibrante e expressivo, elaborado com uma cuidadosa seleção das melhores uvas do Douro: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão e Tinta Barroca. A sua cor rubi intensa e os aromas frutados tornam-no a escolha perfeita como aperitivo para iniciar uma noite especial ou como digestivo.',
        'p1-desc': 'O Porto Tawny clássico que não pode faltar em nenhuma coleção. Oferece o perfil Tawny característico com a sua cor rubi evoluída e aromas que evocam frutos secos, caramelo e especiarias suaves. Extraordinariamente versátil: desfrute-o como aperitivo refrescante ligeiramente frio ou como digestivo.',
        'p2-desc': 'Uma joia orgânica certificada do vale do Douro. Este Porto Ruby Reserva combina tradição portuguesa com práticas sustentáveis, elaborado com Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão e Tinta Barroca cultivadas sem químicos sintéticos. O seu perfil elegante e natural é perfeito para acompanhar as suas sobremesas favoritas.',
        'p3-desc': 'Uma Reserva Especial que representa a essência do estilo Tawny do Douro. Foi cuidadosamente envelhecido em barricas para desenvolver o seu carácter único. Apresenta um equilíbrio magistral entre frescura frutal e notas evoluídas de frutos secos, caramelo e especiarias. Reconhecido com 91 pontos Robert Parker.',
        'p4-desc': 'Duas décadas de paciência resultam neste extraordinário Porto Tawny 20 Anos. Envelheceu em barricas de carvalho, desenvolvendo uma cor âmbar brilhante e uma paleta aromática de grande sofisticação. Notas de caramelo, amêndoas torradas, figos secos e especiarias doces. Reconhecido com 91 pontos Robert Parker.',
        'p5-desc': 'O cume da paciência e da arte vinícola: Porto Tawny 40 Anos de vinhas velhas centenárias. Quatro décadas de estágio oxidativo em barrica transformaram este Porto numa experiência sensorial única. Os seus 94 pontos Robert Parker confirmam o seu estatuto lendário. Apresentado em luxuosa caixa de madeira.',
        'p6-desc': 'Um Porto Vintage excecional da colheita de 2007 do vale do Douro. Elaborado com Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão e Tinta Barroca de vinhedos selecionados. Com quase duas décadas de evolução, este Vintage desenvolveu uma complexidade extraordinária com notas de frutos negros maduros, especiarias, chocolate e toques balsâmicos. Reconhecido com 93 pontos Robert Parker.',
        'p7-desc': 'Um Vintage excecional que capta a essência da colheita de 2013 do vale do Douro. Elaborado com as castas mais nobres, este Porto Vintage desenvolve complexidade com o tempo, oferecendo notas de frutos negros, especiarias e chocolate. Distinguido com 92 pontos Robert Parker e 90 pontos Wine & Spirits Magazine.',
        'p8-desc': 'A colheita de 2015 proporcionou condições climáticas excepcionais no Douro, resultando neste magnífico Porto Vintage. Rico, concentrado e com um extraordinário potencial de guarda, este Vintage é ideal como digestivo contemplativo ou para acompanhar momentos gastronómicos especiais. Reconhecido com 90 pontos Robert Parker.',
        'p9-desc': 'O ano 2016 foi declarado ano de Vintage pelas principais casas do Douro. Um lote magistral que oferece uma intensidade aromática excecional e uma estrutura tânica impressionante. As suas notas de frutos negros maduros, alcaçuz e especiarias doces tornam-no perfeito como digestivo de luxo. 93 pontos Wine Enthusiast Magazine.',
        'p10-desc': 'O Vintage 2017 representa a mais recente expressão de excelência do Douro. Destaca-se pela sua frescura vibrante e concentração excecional. Jovem mas com um fascinante potencial de evolução, oferece aromas explosivos de frutos vermelhos, violetas e especiarias. Robert Parker distinguiu-o com 93 pontos.',
        'p11-desc': 'Uma colheita histórica que atingiu a sua plenitude após mais de 30 anos. Com décadas de evolução em garrafa, oferece uma complexidade única com notas de frutas em conserva, tabaco, couro, especiarias orientais e toques balsâmicos. Perfeito para ocasiões muito especiais, aniversários significativos ou como presente para colecionadores.',
        'p12-desc': 'Uma verdadeira relíquia líquida: Porto Colheita da colheita de 1974, com mais de 50 anos de estágio em barrica. Desenvolveu uma complexidade sublime durante a sua longa maturação. Apresenta notas de frutos secos, caramelo, especiarias exóticas e madeiras nobres. Apresentado em elegante caixa de madeira.',
        'p13-desc': 'Um Grand Cru da prestigiosa denominação Saint-Émilion que representa a elegância bordalesa na sua máxima expressão. A colheita de 2015, considerada excecional em Bordéus, brilha neste lote clássico de Cabernet Sauvignon, Cabernet Franc e Merlot. Medalha de Ouro no Concurso Féminalise.',
        'p14-desc': 'A colheita de 2018 deste Saint-Émilion Grand Cru demonstra a consistência do Chateau Champion em elaborar vinhos excecionais. Este lote magistral de Cabernet Sauvignon, Cabernet Franc e Merlot capta a essência do terroir bordalês com a sua complexidade aromática e estrutura elegante. Medalha de Ouro no Concurso Féminalise.',
    },

    en: {
        // Nav
        'nav-volver': 'Back',
        'nav-inicio': 'Home',
        'nav-reservar': 'Book a Table',
        // Hero
        'hero-label': 'WINE',
        'hero-title': 'WINES PORTO',
        'hero-desc': 'An exclusive selection of Portuguese wines and ports',
        // Filters
        'filter-all': 'All',
        // Card UI
        'card-badge-agotado': 'Sold Out',
        'card-cta-ver': '📱 Order via WhatsApp',
        'card-cta-nodisponible': '❌ Unavailable',
        // Modal UI
        'modal-btn-wsp': '📱 Order via WhatsApp',
        'modal-btn-agotado': '❌ Unavailable',
        'modal-wsp-msg': 'Hello! I\'m interested in:',
        'modal-wsp-precio': 'Price:',
        // Products — names
        'p0-nombre': 'Porto Ruby',
        'p1-nombre': 'Porto Tawny',
        'p2-nombre': 'Porto Ruby Reserva Organic',
        'p3-nombre': 'Porto Special Reserve Tawny',
        'p4-nombre': 'Porto Tawny 20 Years',
        'p5-nombre': 'Porto Tawny 40 Years - Woodbox',
        'p6-nombre': 'Porto Vintage 2007',
        'p7-nombre': 'Porto Vintage 2013',
        'p8-nombre': 'Porto Vintage 2015',
        'p9-nombre': 'Porto Vintage 2016',
        'p10-nombre': 'Porto Vintage 2017',
        'p11-nombre': 'Porto Vintage 1992',
        'p12-nombre': 'Porto Colheita 1974 - Woodbox',
        'p13-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2015',
        'p14-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2018',
        // Products — descriptions
        'p0-desc': 'A vibrant and expressive Porto Ruby, crafted from a careful selection of the finest Douro grapes: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão and Tinta Barroca. Its intense ruby colour and fruity aromas make it the perfect choice as an aperitif to begin a special evening or as a digestif to close on a high note.',
        'p1-desc': 'The classic Porto Tawny that is a must in any collection. It offers the characteristic Tawny profile with its evolved ruby colour and aromas reminiscent of dried fruits, caramel and gentle spices. Extraordinarily versatile: enjoy it as a refreshing aperitif slightly chilled or as a digestif.',
        'p2-desc': 'A certified organic gem from the Douro Valley. This Porto Ruby Reserva blends Portuguese tradition with sustainable practices, made from Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão and Tinta Barroca grown without synthetic chemicals. Its elegant, natural profile makes it the perfect companion to your favourite desserts.',
        'p3-desc': 'A Special Reserve that embodies the essence of the Douro\'s Tawny style. It has been carefully aged in barrels to develop its unique character. It presents a masterly balance between fruity freshness and evolved notes of dried fruits, caramel and spices. Awarded 91 points by Robert Parker.',
        'p4-desc': 'Two decades of patience yield this extraordinary Porto Tawny 20 Years. Aged in oak barrels, it has developed a brilliant amber colour and a highly sophisticated aromatic palette. Notes of caramel, toasted almonds, dried figs and sweet spices. Awarded 91 points by Robert Parker.',
        'p5-desc': 'The pinnacle of patience and winemaking artistry: Porto Tawny 40 Years from century-old old vines. Four decades of oxidative ageing in barrels have transformed this Port into a unique sensory experience. Its 94 Robert Parker points confirm its legendary status. Presented in a luxurious wooden box.',
        'p6-desc': 'An exceptional Porto Vintage from the 2007 harvest of the Douro Valley. Crafted from Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão and Tinta Barroca from selected vineyards. With almost two decades of evolution, this Vintage has developed extraordinary complexity with notes of ripe dark fruits, spices, chocolate and balsamic hints. Awarded 93 points by Robert Parker.',
        'p7-desc': 'An exceptional Vintage capturing the essence of the 2013 harvest from the Douro Valley. Crafted from the noblest varieties, this Porto Vintage develops complexity over time, offering notes of dark fruits, spices and chocolate. Awarded 92 points by Robert Parker and 90 points by Wine & Spirits Magazine.',
        'p8-desc': 'The 2015 harvest delivered exceptional climatic conditions in the Douro, giving rise to this magnificent Porto Vintage. Rich, concentrated and with an extraordinary ageing potential, this Vintage is ideal as a contemplative digestif or to accompany special gastronomic occasions. Awarded 90 points by Robert Parker.',
        'p9-desc': 'The year 2016 was declared a Vintage year by the leading Douro houses. A masterly blend offering exceptional aromatic intensity and an impressive tannic structure. Its notes of ripe dark fruits, liquorice and sweet spices make it the perfect luxury digestif. 93 points Wine Enthusiast Magazine.',
        'p10-desc': 'The 2017 Vintage represents the most recent expression of excellence from the Douro. It stands out for its vibrant freshness and exceptional concentration. Young yet with a fascinating ageing potential, it delivers explosive aromas of red fruits, violets and spices. Robert Parker awarded it 93 points.',
        'p11-desc': 'A historic vintage that has reached its peak after more than 30 years. With decades of bottle evolution, it offers unique complexity with notes of preserved fruits, tobacco, leather, oriental spices and balsamic hints. Perfect for very special occasions, milestone anniversaries or as a gift for collectors.',
        'p12-desc': 'A true liquid relic: Porto Colheita from the 1974 harvest, with over 50 years of barrel ageing. It has developed a sublime complexity during its long maturation. It presents notes of dried fruits, caramel, exotic spices and noble woods. Presented in an elegant wooden box.',
        'p13-desc': 'A Grand Cru from the prestigious Saint-Émilion appellation, representing Bordeaux elegance at its finest. The 2015 vintage, considered exceptional in Bordeaux, shines in this classic blend of Cabernet Sauvignon, Cabernet Franc and Merlot. Gold Medal at the Féminalise Competition.',
        'p14-desc': 'The 2018 vintage of this Saint-Émilion Grand Cru demonstrates Chateau Champion\'s consistent ability to craft exceptional wines. This masterly blend of Cabernet Sauvignon, Cabernet Franc and Merlot captures the essence of the Bordeaux terroir with its aromatic complexity and elegant structure. Gold Medal at the Féminalise Competition.',
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

    // Re-render the grid in the new language
    const lista = document.getElementById('productosLista');
    if (lista) {
        lista.innerHTML = '';
        cargarProductos(filtroActivo);
    }
}

// ============ ESTADO DEL FILTRO ============
let filtroActivo = 'all';

// ============ FUNCIÓN PARA CARGAR PRODUCTOS ============
function cargarProductos(categoria = 'all') {
    const lista = document.getElementById('productosLista');
    lista.innerHTML = '';

    const productosFiltrados = categoria === 'all'
        ? productosVinos
        : productosVinos.filter(p => p.categoria === categoria);

    productosFiltrados.forEach((producto) => {
        // Find the original index for i18n keys
        const idx = productosVinos.indexOf(producto);
        const nombreTraducido = t(`p${idx}-nombre`) || producto.nombre;

        const numeroWhatsApp = '50369204235';
        const mensaje = `${t('modal-wsp-msg')} ${nombreTraducido} – ${t('modal-wsp-precio')} $${producto.precio}`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card';
        productoCard.style.cursor = 'pointer';

        productoCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-whatsapp')) {
                abrirModal(producto, idx);
            }
        });

        productoCard.innerHTML = `
            <div class="producto-imagen-wrapper">
                <img src="${producto.imagen}" alt="${nombreTraducido}" class="producto-imagen" loading="lazy">
                ${!producto.enStock ? `<span class="badge-agotado">${t('card-badge-agotado')}</span>` : ''}
            </div>
            <div class="producto-contenido">
                <h2 class="producto-nombre">${nombreTraducido}</h2>
                <p class="producto-descripcion">${t(`p${idx}-desc`) || producto.descripcion}</p>
                <p class="producto-precio">$${producto.precio}</p>
                <button 
                    class="btn-whatsapp ${!producto.enStock ? 'disabled' : ''}" 
                    onclick="event.stopPropagation(); ${producto.enStock ? `window.open('${urlWhatsApp}', '_blank')` : 'return false;'}"
                    ${!producto.enStock ? 'disabled' : ''}
                >
                    ${producto.enStock ? t('card-cta-ver') : t('card-cta-nodisponible')}
                </button>
            </div>
        `;

        lista.appendChild(productoCard);
    });
}

// ============ FUNCIÓN PARA MANEJAR FILTROS ============
function configurarFiltros() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const categoria = btn.getAttribute('data-filter');
            filtroActivo = categoria;

            cargarProductos(categoria);
        });
    });
}

// ============ FUNCIONES DEL MODAL ============
function abrirModal(producto, idx) {
    const modal = document.getElementById('productoModal');
    const modalImagen = document.getElementById('modalImagen');
    const modalNombre = document.getElementById('modalNombre');
    const modalDescripcion = document.getElementById('modalDescripcion');
    const modalPrecio = document.getElementById('modalPrecio');
    const modalWhatsapp = document.getElementById('modalWhatsapp');

    const nombre = t(`p${idx}-nombre`) || producto.nombre;
    const desc = t(`p${idx}-desc`) || producto.descripcion;

    modalImagen.src = producto.imagen;
    modalImagen.alt = nombre;
    modalNombre.textContent = nombre;
    modalDescripcion.textContent = desc;
    modalPrecio.textContent = `$${producto.precio}`;

    if (producto.enStock) {
        const numeroWhatsApp = '50369204235';
        const mensaje = `${t('modal-wsp-msg')} ${nombre} – ${t('modal-wsp-precio')} $${producto.precio}`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        modalWhatsapp.textContent = t('modal-btn-wsp');
        modalWhatsapp.onclick = () => window.open(urlWhatsApp, '_blank');
        modalWhatsapp.disabled = false;
        modalWhatsapp.classList.remove('disabled');
    } else {
        modalWhatsapp.textContent = t('modal-btn-agotado');
        modalWhatsapp.disabled = true;
        modalWhatsapp.classList.add('disabled');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const modal = document.getElementById('productoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============ LANG SWITCHER LOGIC ============
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

// ============ CERRAR MODAL CON ESC ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
});

// ============ DOM CONTENT LOADED ============
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved language — this also calls cargarProductos(filtroActivo) internally
    applyTranslations(currentLang);

    // Setup filters
    configurarFiltros();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});