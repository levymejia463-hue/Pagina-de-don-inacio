/* ============================================
   DON INACIO — PRODUCTOS SCRIPT
   ============================================ */

const CONFIG = {
    phone: "50372760109",
};

// ============================================
// DATOS DE PRODUCTOS
// ============================================
const productos = [
    // NATURAL (Mermeladas Artesanales - 14 productos)
    { imagen: '../extern-arch/fotos de productos/0.jpg', nombre: 'Mermelada de Zanahoria con Jengibre y Canela', categoria: 'natural', descripcion: 'Mermelada artesanal de zanahoria elaborada con zanahorias frescas, jengibre y canela, cocida lentamente para concentrar sus aromas y obtener una textura untuosa. Perfecta en tostadas, con quesos suaves o como glaseado ligero para carnes. Presentación 250g; conservar en frío tras abrir.', precio: '5.20' },
    { imagen: '../extern-arch/fotos de productos/1.jpg', nombre: 'Mermelada de Tomate con Albahaca', categoria: 'natural', descripcion: 'Mermelada de tomate elaborada con tomates maduros y albahaca fresca, con un equilibrio entre acidez y dulzor. Recomendable para bruschettas, tablas de quesos y como acompañamiento de platos mediterráneos. Presentación 250g; conservar en frío tras abrir.', precio: '6.15' },
    { imagen: '../extern-arch/fotos de productos/2.jpg', nombre: 'Mermelada de Remolacha con Jengibre y Limón', categoria: 'natural', descripcion: 'Mermelada de remolacha con jengibre y limón, que aporta un sabor terroso con toques cítricos y un ligero picor del jengibre. Ideal para combinar con quesos curados, ensaladas y platos vegetarianos. Presentación 250g; refrigerar después de abrir.', precio: '5.60' },
    { imagen: '../extern-arch/fotos de productos/3.jpg', nombre: 'Mermelada de Repollo con Cereza y Tomillo', categoria: 'natural', descripcion: 'Mermelada de repollo con cereza y tomillo: una mezcla inesperada entre lo dulce y lo herbal, perfecta para añadir contraste a platos salados, quesos y ensaladas creativas. Presentación 250g; conservar en frío tras abrir.', precio: '6.15' },
    { imagen: '../extern-arch/fotos de productos/4.jpg', nombre: 'Mermelada de Limón con Manzana y Pimienta Cayena', categoria: 'natural', descripcion: 'Mermelada de limón y manzana con un sutil toque picante de pimienta cayena. Fresca y brillante, sirve para postres, tostadas o para dar un punto ácido-dulce a platos de pescado y aves. Presentación 250g; conservar en frío tras abrir.', precio: '6.08' },
    { imagen: '../extern-arch/fotos de productos/5.jpg', nombre: 'Mermelada de Chile Dulce con Pimienta Cayena', categoria: 'natural', descripcion: 'Mermelada de chile dulce con pimienta cayena: combina dulzor afrutado con un calor gradual, ideal para acompañar carnes a la parrilla, quesos fuertes y como ingrediente en salsas. Presentación 250g; conservar en frío tras abrir.', precio: '6.20' },
    { imagen: '../extern-arch/fotos de productos/6.jpg', nombre: 'Mermelada de Chile Dulce con Chocolate Oscuro', categoria: 'natural', descripcion: 'Mermelada de chile dulce con chocolate oscuro: una fusión entre el dulzor y notas amargas del chocolate, con un fondo picante moderado. Perfecta en postres, sobre pan tostado o para maridar con quesos azules. Presentación 250g; refrigerar tras abrir.', precio: '6.80' },
    { imagen: '../extern-arch/fotos de productos/7.jpg', nombre: 'Mermelada de Chile Dulce con Aceitunas Negras', categoria: 'natural', descripcion: 'Mermelada de chile dulce con aceitunas negras: mezcla salina y dulce, pensada para tablas de quesos, tapas y para dar un contraste único a sándwiches gourmet. Presentación 250g; conservar en frío tras abrir.', precio: '6.40' },
    { imagen: '../extern-arch/fotos de productos/8.jpg', nombre: 'Mermelada de Cebolla Morada con Jengibre y Pimienta Negra', categoria: 'natural', descripcion: 'Mermelada de cebolla morada con jengibre y pimienta negra: caramelizada y especiada, aporta profundidad y dulzor complejo a hamburguesas, quesos y platos de carne. Presentación 250g; refrigerar después de abrir.', precio: '5.20' },
    { imagen: '../extern-arch/fotos de productos/9.jpg', nombre: 'Mermelada de Cebolla con Flor de Jamaica y Naranja', categoria: 'natural', descripcion: 'Mermelada de cebolla con flor de jamaica y naranja: combinación cítrica y floral que equilibra la dulzura de la cebolla; ideal con carnes, quesos y como complemento en entradas. Presentación 250g; conservar en frío tras abrir.', precio: '5.60' },
    { imagen: '../extern-arch/fotos de productos/10.jpg', nombre: 'Mermelada de Cebolla Blanca con Vino de Oporto y Bacon Ahumado', categoria: 'natural', descripcion: 'Mermelada de cebolla blanca con vino de Oporto y bacon ahumado: rica y compleja, con notas dulces, afrutadas y ahumadas; indicada para acompañar quesos curados, foie y platos de caza. Presentación 250g; conservar en frío tras abrir.', precio: '5.20' },
    { imagen: '../extern-arch/fotos de productos/11.jpg', nombre: 'Mermelada Gourmet de Camote con Apio y Vino Tinto', categoria: 'natural', descripcion: 'Mermelada gourmet de camote con apio y vino tinto: textura aterciopelada y sabor profundo, ideal para tostas, rellenos y acompañamiento de platos otoñales. Presentación 250g; refrigerar tras abrir.', precio: '6.15' },
    { imagen: '../extern-arch/fotos de productos/12.jpg', nombre: 'Mermelada de Calabaza con Nueces y Canela', categoria: 'natural', descripcion: 'Mermelada de calabaza con nueces y canela: dulce especiada con trozos de nuez que aporta textura; perfecta para desayunos, postres y combinaciones saladas-dulces. Presentación 250g; conservar en frío tras abrir.', precio: '9.95' },
    { imagen: '../extern-arch/fotos de productos/13.jpg', nombre: 'Mermelada Gourmet de Albaricoque con Romero', categoria: 'natural', descripcion: 'Mermelada gourmet de albaricoque infusionada con romero: mezcla de fruta madura y toques herbales que funciona muy bien con quesos de cabra, carnes blancas y repostería. Presentación 250g; refrigerar tras abrir.', precio: '10.40' },

    // EMBUTIDOS CURADOS (12 productos)
    { imagen: '../extern-arch/imgs embutidos curados/1.png', nombre: 'Salchichón Familia Inacio', categoria: 'embutido curado', descripcion: 'Salchichón tradicional elaborado con 50% cerdo, 30% búfalo y 20% cordero. Pieza entera curada artesanalmente siguiendo recetas tradicionales portuguesas. Sabor intenso y equilibrado.', precio: '12.50' },
    { imagen: '../extern-arch/imgs embutidos curados/2.png', nombre: 'Salchichón al Ajo Fresco', categoria: 'embutido curado', descripcion: 'Salchichón tradicional aromatizado con ajo fresco recién picado. Curado lentamente para desarrollar un sabor intenso y aromático con toques picantes del ajo. Perfecto para tablas de embutidos.', precio: '11.80' },
    { imagen: '../extern-arch/imgs embutidos curados/3.png', nombre: 'Chorizo Ibérico Curado', categoria: 'embutido curado', descripcion: 'Chorizo ibérico de cerdo curado tradicionalmente con pimentón de la Vera. Textura firme y sabor ahumado característico. Ideal para tapas y bocadillos gourmet.', precio: '14.20' },
    { imagen: '../extern-arch/imgs embutidos curados/4.png', nombre: 'Salami Italiano Artesanal', categoria: 'embutido curado', descripcion: 'Salami artesanal elaborado siguiendo la receta italiana tradicional. Mezcla de carnes selectas, especias mediterráneas y curado natural. Textura suave y sabor refinado.', precio: '13.50' },
    { imagen: '../extern-arch/imgs embutidos curados/5.png', nombre: 'Fuet Catalán Tradicional', categoria: 'embutido curado', descripcion: 'Fuet catalán elaborado con carne de cerdo magra y especias naturales. Embutido fino y alargado con sabor delicado. Perfecto para picar entre horas o en bocadillos.', precio: '10.90' },
    { imagen: '../extern-arch/imgs embutidos curados/6.png', nombre: 'Longaniza Española Premium', categoria: 'embutido curado', descripcion: 'Longaniza española premium curada con pimentón y especias tradicionales. Sabor intenso y ligeramente picante. Ideal para asar o consumir en crudo.', precio: '12.80' },
    { imagen: '../extern-arch/imgs embutidos curados/7.png', nombre: 'Chouriço Português Tradicional', categoria: 'embutido curado', descripcion: 'Chouriço portugués tradicional elaborado con vino tinto, ajo y pimentón ahumado. Sabor profundo y característico de la gastronomía portuguesa. Perfecto para asar o guisos.', precio: '11.50' },
    { imagen: '../extern-arch/imgs embutidos curados/8.png', nombre: 'Salchichón de Venado', categoria: 'embutido curado', descripcion: 'Salchichón artesanal elaborado con carne de venado de caza sostenible. Sabor suave y distintivo con bajo contenido graso. Una opción gourmet y saludable.', precio: '16.80' },
    { imagen: '../extern-arch/imgs embutidos curados/9.png', nombre: 'Chorizo Picante al Vino', categoria: 'embutido curado', descripcion: 'Chorizo picante macerado en vino tinto con chiles seleccionados. Sabor intenso con un punto de picor equilibrado. Ideal para los amantes de los sabores fuertes.', precio: '13.20' },
    { imagen: '../extern-arch/imgs embutidos curados/10.png', nombre: 'Lomo Embuchado Ibérico', categoria: 'embutido curado', descripcion: 'Lomo de cerdo ibérico embuchado y curado naturalmente. Pieza magra y jugosa con sabor delicado. Una de las joyas de la charcutería ibérica.', precio: '18.90' },
    { imagen: '../extern-arch/imgs embutidos curados/11.png', nombre: 'Salami Picante Milano', categoria: 'embutido curado', descripcion: 'Salami estilo Milano con mezcla de especias picantes. Sabor italiano auténtico con un toque de calor. Perfecto para pizzas, pasta o tablas de quesos.', precio: '14.50' },
    { imagen: '../extern-arch/imgs embutidos curados/12.png', nombre: 'Alheira Tradicional de Mirandela', categoria: 'embutido curado', descripcion: 'Alheira tradicional portuguesa de Mirandela elaborada con carnes de ave, pan y especias. Sabor suave y textura única. Se recomienda asar antes de consumir.', precio: '9.80' },

    // EMBUTIDOS COCIDOS (4 productos)
    { imagen: '../extern-arch/embutidos cocidos/1.png', nombre: 'Bacon Ahumado 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Bacon ahumado artesanalmente con madera de haya, elaborado con carne 100% de cerdo. Textura jugosa y sabor intenso ahumado. Presentación: Pieza entera, trocitos 500g, loncha 250g / 500g. Ideal para desayunos, ensaladas y como ingrediente en múltiples recetas.', precio: '12.50' },
    { imagen: '../extern-arch/embutidos cocidos/2.png', nombre: 'Costilla Ahumada 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Costilla de cerdo 100% ahumada lentamente con técnicas tradicionales. Carne tierna con hueso que aporta sabor intenso. Presentación: Pieza entera, packs de 2 unidades. Perfecta para asar a la parrilla o al horno, ideal para barbacoas y comidas familiares.', precio: '14.80' },
    { imagen: '../extern-arch/embutidos cocidos/3.png', nombre: 'Jamón Cocido al Natural 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Jamón cocido al natural elaborado con carne de cerdo 100%, sin aditivos artificiales. Sabor auténtico y suave. Presentación: Pieza entera (4/6 kg), loncha 250g / 500g. Perfecto para bocadillos, ensaladas y como fiambre saludable para toda la familia.', precio: '9.90' },
    { imagen: '../extern-arch/embutidos cocidos/4.png', nombre: 'Jamón Cocido Ahumado 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Jamón cocido ahumado con madera natural, 100% carne de cerdo. Combina la suavidad del jamón cocido con las notas intensas del ahumado. Presentación: Pieza entera (4/6 kg), loncha 250g / 500g. Excelente para bocadillos gourmet, pizzas y pastas.', precio: '10.80' },

    // SALCHICHAS (6 productos)
    { imagen: '../extern-arch/salchinas-nuevas/6.png', nombre: 'Salchicha Tradicional Ahumada', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.50' },
    { imagen: '../extern-arch/salchinas-nuevas/5.png', nombre: 'Salchicha Camponesa', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '6.80' },
    { imagen: '../extern-arch/salchinas-nuevas/4.png', nombre: 'Salchicha Mediterránea', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.20' },
    { imagen: '../extern-arch/salchinas-nuevas/3.png', nombre: 'Salchicha Montaña', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de res, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.80' },
    { imagen: '../extern-arch/salchinas-nuevas/2.png', nombre: 'Salchicha Picante', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.50' },
    { imagen: '../extern-arch/salchinas-nuevas/1.png', nombre: 'Salchicha Serrana', categoria: 'salchichas', descripcion: 'Salchicha fresca natural a base de carne de cerdo, sal, especies alimentarias y conservantes.', precio: '6.90' },

    // VINOS Y PORTOS (15 productos)
    { imagen: '../extern-arch/imgs-vinos/2.png', nombre: 'Porto Rubí', categoria: 'vinos', descripcion: 'Un Porto Rubí vibrante y expresivo, elaborado con una cuidada selección de las mejores uvas del Douro: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Su color rubí intenso y sus aromas frutales lo convierten en la elección perfecta tanto como aperitivo para comenzar una velada especial, como digestivo para cerrar con broche de oro.', precio: '49.20' },
    { imagen: '../extern-arch/imgs-vinos/3.png', nombre: 'Porto Rubí Reserva Orgánica', categoria: 'vinos', descripcion: 'Una joya orgánica certificada del valle del Douro. Este Porto Rubí Reserva combina tradición portuguesa con prácticas sostenibles, elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca cultivadas sin químicos sintéticos. Su perfil elegante y natural lo hace perfecto para acompañar tus postres favoritos.', precio: '68.70' },
    { imagen: '../extern-arch/imgs-vinos/5.png', nombre: 'Porto Vintage 2013', categoria: 'vinos', descripcion: 'Un Vintage excepcional que captura la esencia de la añada 2013 del valle del Douro. Elaborado con las variedades más nobles, este Porto Vintage desarrolla complejidad con el tiempo, ofreciendo notas de frutos negros, especias y chocolate. Con el prestigio de 92 puntos Robert Parker y 90 puntos Wine & Spirits Magazine.', precio: '87.40' },
    { imagen: '../extern-arch/imgs-vinos/6.png', nombre: 'Porto Vintage 2015', categoria: 'vinos', descripcion: 'La añada 2015 brindó condiciones climáticas excepcionales en el Douro, resultando en este magnífico Porto Vintage. Rico, concentrado y con un potencial de guarda extraordinario, este Vintage es ideal como digestivo contemplativo o para acompañar momentos gastronómicos especiales. Reconocido con 90 puntos Robert Parker.', precio: '73.80' },
    { imagen: '../extern-arch/imgs-vinos/7.png', nombre: 'Porto Vintage 2016', categoria: 'vinos', descripcion: 'El 2016 fue declarado año de Vintage por las principales casas del Douro. Un ensamblaje magistral que ofrece una intensidad aromática excepcional y una estructura tánica impresionante. Sus notas de frutas negras maduras, regaliz y especias dulces lo hacen perfecto como digestivo de lujo. 93 puntos Wine Enthusiast Magazine.', precio: '69.30' },
    { imagen: '../extern-arch/imgs-vinos/8.png', nombre: 'Porto Vintage 2017', categoria: 'vinos', descripcion: 'El Vintage 2017 representa la más reciente expresión de excelencia del Douro. Destaca por su frescura vibrante y su concentración excepcional. Joven pero con un potencial de evolución fascinante, ofrece aromas explosivos de frutos rojos, violetas y especias. Robert Parker lo ha distinguido con 93 puntos.', precio: '66.80' },
    { imagen: '../extern-arch/imgs-vinos/26.png', nombre: 'Porto Vintage 1992', categoria: 'vinos', descripcion: 'Una añada histórica que ha alcanzado su plenitud después de más de 30 años. Con décadas de evolución en botella, ofrece una complejidad única con notas de frutas en conserva, tabaco, cuero, especias orientales y toques balsámicos. Perfecto para ocasiones muy especiales, aniversarios significativos o como regalo para coleccionistas.', precio: '243.10' },
    { imagen: '../extern-arch/imgs-vinos/9.png', nombre: 'Porto Colheita 1974 - Woodbox', categoria: 'vinos', descripcion: 'Una verdadera reliquia líquida: Porto Colheita de la añada 1974, con más de 50 años de crianza en barrica. Ha desarrollado una complejidad sublime durante su larga maduración. Presenta notas de frutos secos, caramelo, especias exóticas y maderas nobles. Presentado en elegante caja de madera.', precio: '368.40' },
    { imagen: '../extern-arch/imgs-vinos/11.png', nombre: 'Porto Vintage 2007', categoria: 'vinos', descripcion: 'Un Porto Vintage excepcional de la añada 2007 del valle del Douro. Elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca de viñedos seleccionados. Con casi dos décadas de evolución, este Vintage ha desarrollado una complejidad extraordinaria con notas de frutos negros maduros, especias, chocolate y toques balsámicos. Ha recibido el reconocimiento de 93 puntos Robert Parker.', precio: '138.60' },
    { imagen: '../extern-arch/imgs-vinos/13.png', nombre: 'Porto Tawny 20 Años', categoria: 'vinos', descripcion: 'Dos décadas de paciencia dan como resultado este extraordinario Porto Tawny 20 Años. Ha envejecido en barricas de roble, desarrollando un color ámbar brillante y una paleta aromática de gran sofisticación. Notas de caramelo, almendras tostadas, higos secos y especias dulces. Reconocido con 91 puntos Robert Parker.', precio: '98.50' },
    { imagen: '../extern-arch/imgs-vinos/14.png', nombre: 'Porto Tawny 40 Años - Woodbox', categoria: 'vinos', descripcion: 'La cumbre de la paciencia y el arte vinícola: Porto Tawny 40 Años de viñas viejas centenarias. Cuatro décadas de crianza oxidativa en barricas han transformado este Porto en una experiencia sensorial única. Sus 94 puntos Robert Parker confirman su estatus legendario. Presentado en lujosa caja de madera.', precio: '276.60' },
    { imagen: '../extern-arch/imgs-vinos/15.png', nombre: 'Porto Reserva Especial Tawny', categoria: 'vinos', descripcion: 'Una Reserva Especial que representa la esencia del estilo Tawny del Douro. Ha sido envejecido cuidadosamente en barricas para desarrollar su carácter único. Presenta un equilibrio magistral entre frescura frutal y notas evolucionadas de frutos secos, caramelo y especias. Reconocido con 91 puntos Robert Parker.', precio: '64.80' },
    { imagen: '../extern-arch/imgs-vinos/16.png', nombre: 'Porto Tawny', categoria: 'vinos', descripcion: 'El Porto Tawny clásico que no puede faltar en ninguna colección. Ofrece el perfil Tawny característico con su color rubí evolucionado y aromas que recuerdan a frutos secos, caramelo y especias suaves. Extraordinariamente versátil: disfrútalo como aperitivo refrescante ligeramente frío o como digestivo.', precio: '48.60' },
    { imagen: '../extern-arch/imgs-vinos/24.png', nombre: 'Chateau Champion - Saint-Émilion Grand Cru 2015', categoria: 'vinos', descripcion: 'Un Grand Cru de la prestigiosa denominación Saint-Émilion que representa la elegancia bordelesa en su máxima expresión. La añada 2015, considerada excepcional en Burdeos, brilla en este ensamblaje clásico de Cabernet Sauvignon, Cabernet Franc y Merlot. Medalla de Oro en el Concurso Féminalise.', precio: '63.90' },
    { imagen: '../extern-arch/imgs-vinos/25.png', nombre: 'Chateau Champion - Saint-Émilion Grand Cru 2018', categoria: 'vinos', descripcion: 'La añada 2018 de este Saint-Émilion Grand Cru demuestra la consistencia de Chateau Champion en elaborar vinos excepcionales. Este blend magistral de Cabernet Sauvignon, Cabernet Franc y Merlot captura la esencia del terruño bordelés con su complejidad aromática y estructura elegante. Medalla de Oro en el Concurso Féminalise.', precio: '58.70' },

    // ENCURTIDOS (2 productos)
    { imagen: '../extern-arch/fotos de productos/24.jpg', nombre: 'Encurtido de Cebolla Morada', categoria: 'encurtidos', descripcion: 'Encurtido artesanal de cebolla morada en sal marina 100% natural. Elaborado con vinagre de manzana orgánico, especias y cebolla morada fresca. Producto 100% natural sin preservantes, colorantes ni ningún tipo de aditivos. Ideal para acompañar carnes, ensaladas, hamburguesas y tacos. Peso aproximado 450g. Conservar en el frío después de abrir.', precio: '8.60' },
    { imagen: '../extern-arch/fotos de productos/25.jpg', nombre: 'Encurtido de Vegetales', categoria: 'encurtidos', descripcion: 'Encurtido artesanal de vegetales mixtos en sal marina 100% natural. Elaborado con vinagre de manzana orgánico, especias selectas y vegetales frescos. Producto 100% natural sin preservantes, colorantes ni ningún tipo de aditivos. Perfecto para tablas de quesos, aperitivos y como guarnición. Peso aproximado 450g. Conservar en el frío después de abrir.', precio: '9.50' },

    // PASTAS Y SALSAS GOURMET (1 producto)
    { imagen: '../extern-arch/fotos de productos/14.jpg', nombre: 'Salsa de Tomate Gourmet', categoria: 'pastas', descripcion: 'Salsa de tomate artesanal elaborada con tomates maduros seleccionados, albahaca fresca y aceite de oliva. Sin conservantes ni colorantes. Ideal para pastas, pizzas, bruschetas y como base para guisos. Receta portuguesa tradicional. Presentación 300g.', precio: '6.50' },

    // SALES GOURMET (10 productos)
    { imagen: '../extern-arch/sales/1.png', nombre: 'Sal Trío Cítrico', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especies y hierbas aromáticas. Ideal para pollo a la parrilla, pescados y ensaladas. Una combinación perfecta de sabores cítricos que realzan el sabor natural de tus ingredientes.', precio: '4.00' },
    { imagen: '../extern-arch/sales/2.png', nombre: 'Sal Ahumada', categoria: 'sales', descripcion: 'Sal Marina 100% natural ahumada naturalmente. Ideal para todo tipo de carnes después de parrilladas, guisos y pizza. El toque ahumado perfecto para dar profundidad a tus platos.', precio: '4.00' },
    { imagen: '../extern-arch/sales/3.png', nombre: 'Sal al Vino Tinto', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especias y hierbas aromáticas. Perfecta para carnes rojas, guisos, y carnes a la parrilla. El vino tinto aporta un sabor robusto y complejo.', precio: '4.00' },
    { imagen: '../extern-arch/sales/4.png', nombre: 'Sal Lemon Pepper', categoria: 'sales', descripcion: 'Sal Marina 100% natural con apio, cebolla, ajo y especias. Ideal para carnes rojas, aves, vegetales asados, ensaladas y papas. Una mezcla clásica y versátil.', precio: '4.00' },
    { imagen: '../extern-arch/sales/5.png', nombre: 'Sal Picante', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especias y hierbas aromáticas. Ideal para carnes, huevos, papa frita, y salsas. Aporta el toque picante perfecto para los amantes del sabor intenso.', precio: '4.00' },
    { imagen: '../extern-arch/sales/6.png', nombre: 'Sal Oriental', categoria: 'sales', descripcion: 'Sal Marina 100% natural con apio, cebolla, ajo y especias. Ideal para cerdo a la parrilla y guisos. Inspirada en los sabores tradicionales de Oriente.', precio: '4.00' },
    { imagen: '../extern-arch/sales/7.png', nombre: 'Sal de Naranja', categoria: 'sales', descripcion: 'Limón, Sal Marina 100% natural, especias y hierbas aromáticas. Ideal para pescado, mariscos, pollo y ensaladas frescas. El cítrico de naranja aporta frescura y brillo.', precio: '4.00' },
    { imagen: '../extern-arch/sales/8.png', nombre: 'Sal Cítrica', categoria: 'sales', descripcion: 'Limón, Sal Marina 100% natural, especias y hierbas aromáticas. Perfecta para pescado, mariscos, pollo y ensaladas frescas. Una variante cítrica versátil y refrescante.', precio: '4.00' },
    { imagen: '../extern-arch/sales/9.png', nombre: 'Sal Mediterránea', categoria: 'sales', descripcion: 'Sal Marina 100% natural con especias y hierbas aromáticas. Ideal para pescado y guisos. Captura la esencia de la cocina mediterránea en cada grano.', precio: '4.00' },
    { imagen: '../extern-arch/sales/10.png', nombre: 'Sal Apio', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especias y hierbas aromáticas, con apio. Versátil para ensaladas, guisos, y carnes. El apio aporta un sabor fresco y aromático.', precio: '4.00' }
];

// ============================================
// HEADER SCROLL EFFECT
// ============================================
const header = document.getElementById('simpleHeader');
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.pageYOffset > 60);
    }, { passive: true });
}

// ============================================
// CARGAR PRODUCTOS
// ============================================
function loadProducts() {
    const categories = {
        'natural': 'naturalGrid',
        'embutido curado': 'embutidoCuradoGrid',
        'embutidos cocidos': 'embutidosCocidosGrid',
        'salchichas': 'salchichasGrid',
        'vinos': 'vinosGrid',
        'encurtidos': 'encurtidosGrid',
        'pastas': 'pastasGrid',
        'sales': 'salesGrid'
    };

    Object.entries(categories).forEach(([category, gridId]) => {
        const grid = document.getElementById(gridId);
        if (!grid) return;

        const categoryProducts = productos.filter(p => p.categoria === category);

        categoryProducts.forEach(producto => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-wrap">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${producto.nombre}</h3>
                    <div class="product-price">$${producto.precio}</div>
                </div>
            `;

            card.addEventListener('click', () => openModal(producto));
            grid.appendChild(card);
        });
    });

    console.log(`✨ ${productos.length} productos cargados correctamente`);
}

// ============================================
// MODAL DE PRODUCTO
// ============================================
let currentProduct = null;

function openModal(producto) {
    currentProduct = producto;
    const modal = document.getElementById('productModal');

    document.getElementById('modalImage').src = producto.imagen;
    document.getElementById('modalImage').alt = producto.nombre;
    document.getElementById('modalName').textContent = producto.nombre;
    document.getElementById('modalDesc').textContent = producto.descripcion;
    document.getElementById('modalPrice').textContent = `$${producto.precio}`;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
}

function cerrarModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    currentProduct = null;
}

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

// ============================================
// WHATSAPP
// ============================================
function contactarWhatsapp() {
    if (!currentProduct) return;

    const mensaje = `Hola! Me interesa el producto:\n\n*${currentProduct.nombre}*\nPrecio: $${currentProduct.precio}\n\n¿Podrían darme más información?`;
    const url = `https://api.whatsapp.com/send?phone=${CONFIG.phone}&text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
}
window.contactarWhatsapp = contactarWhatsapp;
window.cerrarModal = cerrarModal;

// ============================================
// SCROLL TO TOP
// ============================================
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.pageYOffset > 500);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// INTERSECTION OBSERVER - REVEAL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // applyTranslations(currentLang);
    loadProducts();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.category-block').forEach(block => {
        observer.observe(block);
    });
});