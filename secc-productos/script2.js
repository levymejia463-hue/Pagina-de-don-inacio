//header
const menu = document.getElementById('manuham');
const open = document.getElementById('openMenu');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    menu.classList.add('actives');
    open.classList.add('remove');
})

close.addEventListener('click', () => {
    menu.classList.remove('actives');
    open.classList.remove('remove');
})

//funcion del h1 para volver al inicio
function volver() {
    window.location.href="../index.html"
}

// ============ DATOS DE PRODUCTOS ============
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
    
    // EMBUTIDOS COCIDOS (5 productos)
    { imagen: '../extern-arch/embutidos cocidos/1.png', nombre: 'Bacon Ahumado 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Bacon ahumado artesanalmente con madera de haya, elaborado con carne 100% de cerdo. Textura jugosa y sabor intenso ahumado. Presentación: Pieza entera, trocitos 500g, loncha 250g / 500g. Ideal para desayunos, ensaladas y como ingrediente en múltiples recetas.', precio: '12.50' },
    { imagen: '../extern-arch/embutidos cocidos/2.png', nombre: 'Costilla Ahumada 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Costilla de cerdo 100% ahumada lentamente con técnicas tradicionales. Carne tierna con hueso que aporta sabor intenso. Presentación: Pieza entera, packs de 2 unidades. Perfecta para asar a la parrilla o al horno, ideal para barbacoas y comidas familiares.', precio: '14.80' },
    { imagen: '../extern-arch/embutidos cocidos/3.png', nombre: 'Jamón Cocido al Natural 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Jamón cocido al natural elaborado con carne de cerdo 100%, sin aditivos artificiales. Sabor auténtico y suave. Presentación: Pieza entera (4/6 kg), loncha 250g / 500g. Perfecto para bocadillos, ensaladas y como fiambre saludable para toda la familia.', precio: '9.90' },
    { imagen: '../extern-arch/embutidos cocidos/3.png', nombre: 'Jamón Cocido con Hierbas Aromáticas 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Jamón cocido premium infusionado con una selección de hierbas aromáticas mediterráneas. Sabor delicado y refinado. Presentación: Pieza entera (4/6 kg), loncha 250g / 500g. Ideal para tablas gourmet, bocadillos especiales y platos sofisticados.', precio: '11.50' },
    { imagen: '../extern-arch/embutidos cocidos/3.png', nombre: 'Jamón Cocido Ahumado 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Jamón cocido ahumado con madera natural, 100% carne de cerdo. Combina la suavidad del jamón cocido con las notas intensas del ahumado. Presentación: Pieza entera (4/6 kg), loncha 250g / 500g. Excelente para bocadillos gourmet, pizzas y pastas.', precio: '10.80' },
    
    // SALCHICHAS (6 productos)
    { imagen: '../extern-arch/salchinas-nuevas/6.png', nombre: 'Salchicha Tradicional Ahumada', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.50' },
    { imagen: '../extern-arch/salchinas-nuevas/5.png', nombre: 'Salchicha Camponesa', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '6.80' },
    { imagen: '../extern-arch/salchinas-nuevas/4.png', nombre: 'Salchicha Mediterránea', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.20' },
    { imagen: '../extern-arch/salchinas-nuevas/3.png', nombre: 'Salchicha Montaña', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de res, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.80' },
    { imagen: '../extern-arch/salchinas-nuevas/2.png', nombre: 'Salchicha Picante', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.50' },
    { imagen: '../extern-arch/salchinas-nuevas/1.png', nombre: 'Salchicha Serrana', categoria: 'salchichas', descripcion: 'Salchicha fresca natural a base de carne de cerdo, sal, especies alimentarias y conservantes.', precio: '6.90' },
    
    // VINOS Y PORTOS (17 productos)
    { imagen: '../extern-arch/imgs-vinos/2.png', nombre: 'Porto Rubí', categoria: 'vinos', descripcion: 'Porto Rubí elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Ideal como aperitivo o digestivo, excelente para complementar una refrescante sangría. 90 puntos CellarTracker, 88 puntos Wine Spectator.', precio: '32.00' },
    { imagen: '../extern-arch/imgs-vinos/3.png', nombre: 'Porto Rubí Reserva Orgánica', categoria: 'vinos', descripcion: 'Porto Rubí Reserva Orgánica con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Perfecto para postres y quesos. Excelente como aperitivo o digestivo.', precio: '38.00' },
    { imagen: '../extern-arch/imgs-vinos/5.png', nombre: 'Porto Vintage 2011', categoria: 'vinos', descripcion: 'Porto Vintage 2011 con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Perfecto como digestivo o para incorporar en comidas especiales. 92 puntos Robert Parker, 90 puntos Wine & Spirits Magazine.', precio: '95.00' },
    { imagen: '../extern-arch/imgs-vinos/6.png', nombre: 'Porto Vintage 2015', categoria: 'vinos', descripcion: 'Porto Vintage 2015 elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Ideal como digestivo o para acompañar comidas especiales. 90 puntos Robert Parker.', precio: '89.00' },
    { imagen: '../extern-arch/imgs-vinos/8.png', nombre: 'Porto Vintage 2017', categoria: 'vinos', descripcion: 'Porto Vintage 2017 con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Perfecto como digestivo o para comidas especiales. 93 puntos Wine Enthusiast Magazine, 90 puntos Robert Parker.', precio: '92.00' },
    { imagen: '../extern-arch/imgs-vinos/8.png', nombre: 'Porto Vintage 2019', categoria: 'vinos', descripcion: 'Porto Vintage 2019 elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Excelente como digestivo o para acompañar comidas especiales. 93 puntos Robert Parker.', precio: '94.00' },
    { imagen: '../extern-arch/imgs-vinos/9.png', nombre: 'Porto Colheita 1974 - Woodbox', categoria: 'vinos', descripcion: 'Porto Colheita 1974 con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Para ocasiones especiales o como regalo único. Magnífico digestivo y aperitivo. Presentación en caja de madera.', precio: '450.00' },
    { imagen: '../extern-arch/imgs-vinos/11.png', nombre: 'Porto Colheita 2007', categoria: 'vinos', descripcion: 'Porto Colheita 2007 elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Ideal para ocasiones especiales o como regalo único. Magnífico digestivo y aperitivo. 93 puntos Robert Parker.', precio: '120.00' },
    { imagen: '../extern-arch/imgs-vinos/13.png', nombre: 'Porto Tawny 20 Años', categoria: 'vinos', descripcion: 'Porto Tawny 20 Años con Touriga Franca, Tinta Barroca, Tinta Roriz y Touriga Nacional. Perfecto para postres. Magnífico digestivo y aperitivo. 91 puntos Robert Parker.', precio: '78.00' },
    { imagen: '../extern-arch/imgs-vinos/14.png', nombre: 'Porto Tawny 40 Años - Woodbox', categoria: 'vinos', descripcion: 'Porto Tawny 40 Años de viñas viejas. Ideal con quesos intensos o café. Perfecto para postres. Magnífico digestivo y aperitivo. 94 puntos Robert Parker. Presentación en caja de madera.', precio: '280.00' },
    { imagen: '../extern-arch/imgs-vinos/15.png', nombre: 'Porto Reserva Especial Tawny', categoria: 'vinos', descripcion: 'Porto Reserva Especial Tawny con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Perfecto para postres y quesos. 91 puntos Robert Parker.', precio: '52.00' },
    { imagen: '../extern-arch/imgs-vinos/16.png', nombre: 'Porto Tawny', categoria: 'vinos', descripcion: 'Porto Tawny con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Aperitivo o digestivo, perfecto para postres y quesos. Excelente para sangría.', precio: '35.00' },
    { imagen: '../extern-arch/imgs-vinos/24.png', nombre: 'Chateau Champion - Saint-Émilion Grand Cru 2015', categoria: 'vinos', descripcion: 'Vino tinto francés Grand Cru con Cabernet Sauvignon, Cabernet Franc y Merlot. Acompaña carnes rojas, parrilladas y quesos fuertes. Medalla de Oro en el Concurso Féminalise.', precio: '65.00' },
    { imagen: '../extern-arch/imgs-vinos/25.png', nombre: 'Chateau Champion - Saint-Émilion Grand Cru 2018', categoria: 'vinos', descripcion: 'Vino tinto francés Grand Cru con Cabernet Sauvignon, Cabernet Franc y Merlot. Ideal con carnes rojas, parrilladas y quesos fuertes. Medalla de Oro en el Concurso Féminalise.', precio: '68.00' },
    { imagen: '../extern-arch/imgs-vinos/1.png', nombre: 'Vino Tinto Reserva Premium', categoria: 'vinos', descripcion: 'Vino tinto reserva de crianza en barrica de roble. Notas a frutas maduras y especias. Ideal para carnes rojas y quesos curados.', precio: '28.50' },
    { imagen: '../extern-arch/imgs-vinos/4.png', nombre: 'Vino Blanco Albariño', categoria: 'vinos', descripcion: 'Vino blanco Albariño de las Rías Baixas. Fresco y aromático con notas florales. Ideal con mariscos y pescados.', precio: '24.80' },
    { imagen: '../extern-arch/imgs-vinos/17.png', nombre: 'Vino Rosado Tempranillo', categoria: 'vinos', descripcion: 'Vino rosado joven de uva Tempranillo. Afrutado y refrescante, perfecto para el verano. Ideal con ensaladas y platos ligeros.', precio: '18.90' },
    
    // SALES GOURMET (10 productos)
    { imagen: '../extern-arch/sales/1.png', nombre: 'Sal Trío Cítrico', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especies y hierbas aromáticas. Ideal para pollo a la parrilla, pescados y ensaladas. Una combinación perfecta de sabores cítricos que realzan el sabor natural de tus ingredientes.', precio: '4.50' },
    { imagen: '../extern-arch/sales/2.png', nombre: 'Sal Ahumada', categoria: 'sales', descripcion: 'Sal Marina 100% natural ahumada naturalmente. Ideal para todo tipo de carnes después de parrilladas, guisos y pizza. El toque ahumado perfecto para dar profundidad a tus platos.', precio: '5.20' },
    { imagen: '../extern-arch/sales/3.png', nombre: 'Sal al Vino Tinto', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especias y hierbas aromáticas. Perfecta para carnes rojas, guisos, y carnes a la parrilla. El vino tinto aporta un sabor robusto y complejo.', precio: '4.80' },
    { imagen: '../extern-arch/sales/4.png', nombre: 'Sal Lemon Pepper', categoria: 'sales', descripcion: 'Sal Marina 100% natural con apio, cebolla, ajo y especias. Ideal para carnes rojas, aves, vegetales asados, ensaladas y papas. Una mezcla clásica y versátil.', precio: '4.60' },
    { imagen: '../extern-arch/sales/5.png', nombre: 'Sal Picante', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especias y hierbas aromáticas. Ideal para carnes, huevos, papa frita, y salsas. Aporta el toque picante perfecto para los amantes del sabor intenso.', precio: '4.70' },
    { imagen: '../extern-arch/sales/6.png', nombre: 'Sal Oriental', categoria: 'sales', descripcion: 'Sal Marina 100% natural con apio, cebolla, ajo y especias. Ideal para cerdo a la parrilla y guisos. Inspirada en los sabores tradicionales de Oriente.', precio: '4.90' },
    { imagen: '../extern-arch/sales/7.png', nombre: 'Sal de Naranja', categoria: 'sales', descripcion: 'Limón, Sal Marina 100% natural, especias y hierbas aromáticas. Ideal para pescado, mariscos, pollo y ensaladas frescas. El cítrico de naranja aporta frescura y brillo.', precio: '4.65' },
    { imagen: '../extern-arch/sales/8.png', nombre: 'Sal Cítrica', categoria: 'sales', descripcion: 'Limón, Sal Marina 100% natural, especias y hierbas aromáticas. Perfecta para pescado, mariscos, pollo y ensaladas frescas. Una variante cítrica versátil y refrescante.', precio: '4.65' },
    { imagen: '../extern-arch/sales/9.png', nombre: 'Sal Mediterránea', categoria: 'sales', descripcion: 'Sal Marina 100% natural con especias y hierbas aromáticas. Ideal para pescado y guisos. Captura la esencia de la cocina mediterránea en cada grano.', precio: '4.75' },
    { imagen: '../extern-arch/sales/10.png', nombre: 'Sal Apio', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especias y hierbas aromáticas, con apio. Versátil para ensaladas, guisos, y carnes. El apio aporta un sabor fresco y aromático.', precio: '4.40' }
];

// ============ CONFIGURACIÓN DE SLIDERS ============
const sliderConfigs = {
    'natural': { limit: 6 },
    'embutido curado': { limit: 6 },
    'embutidos cocidos': { limit: 6 },
    'salchichas': { limit: 6 },
    'vinos': { limit: 6 },
    'sales': { limit: 6 }
};

// Mapa de categorías a IDs de sliders
const categoryToSliderId = {
    'natural': 'naturalSlider',
    'embutido curado': 'embutidoCuradoSlider',
    'embutidos cocidos': 'embutidosCocidosSlider',
    'salchichas': 'salchichasSlider',
    'vinos': 'vinosSlider',
    'sales': 'salesSlider'
};

// ============ CARGAR SLIDERS ============
function loadSlider(category, sliderId) {
    const container = document.getElementById(sliderId);
    if (!container) return;
    
    const categoryProducts = productos.filter(p => p.categoria === category);
    const config = sliderConfigs[category];
    
    // Mostrar solo los primeros productos según el límite
    const productsToShow = categoryProducts.slice(0, config.limit);
    
    container.innerHTML = '';
    
    productsToShow.forEach((producto, index) => {
        const item = document.createElement('div');
        item.className = 'producto';
        item.setAttribute('data-imagen', producto.imagen);
        item.setAttribute('data-nombre', producto.nombre);
        item.setAttribute('data-descripcion', producto.descripcion);
        item.setAttribute('data-precio', producto.precio);
        
        item.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="nombre">
                <h2>${producto.nombre}</h2>
            </div>
            <div class="precio">
                <h3>$${producto.precio}</h3>
            </div>
        `;
        
        item.addEventListener('click', () => {
            mostrarDetalles(producto.imagen, producto.nombre, producto.descripcion, producto.precio);
        });
        
        container.appendChild(item);
    });
    
    // Agregar elemento "+50" al final del slider
    if (categoryProducts.length > config.limit) {
        const moreItem = document.createElement('div');
        moreItem.className = 'producto more-products';
        moreItem.innerHTML = `
            <div class="more-content">
                <span class="more-icon">+${categoryProducts.length - config.limit}</span>
                <p class="more-text">Ver todos</p>
            </div>
        `;
        
        // Hacer clic en "+50" redirige a la página de la categoría
        moreItem.addEventListener('click', () => {
            const categoryUrls = {
                'natural': 'natural/index.html',
                'embutido curado': 'embutidos-curados/index.html',
                'embutidos cocidos': 'embutidos-cocidos/index.html',
                'salchichas': 'salchichas/index.html',
                'vinos': 'vinos/index.html',
                'sales': 'sales/index.html'
            };
            window.location.href = categoryUrls[category];
        });
        
        container.appendChild(moreItem);
    }
}

// ============ NAVEGACIÓN DE SLIDERS ============
function setupSliderNavigation() {
    const sliderButtons = document.querySelectorAll('.slider-btn');
    
    sliderButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            const sliderId = categoryToSliderId[category];
            const container = document.getElementById(sliderId);
            
            if (!container) return;
            
            const scrollAmount = 300;
            
            if (btn.classList.contains('slider-prev')) {
                container.scrollLeft -= scrollAmount;
            } else if (btn.classList.contains('slider-next')) {
                container.scrollLeft += scrollAmount;
            }
        });
    });
}

// ============ MOSTRAR DETALLES DEL PRODUCTO ============
function mostrarDetalles(imagen, nombre, descripcion, precio) {
    const detalles = document.getElementById('detallesDelProducto');
    const overlay = document.querySelector('.overlay');
    
    const numeroWhatsApp = '50312345678';
    const mensaje = `Hola! Me interesa el producto: ${nombre} - Precio: $${precio}`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    detalles.innerHTML = `
        <button class="btn-close" onclick="cerrarDetalles()">×</button>
        <img src="${imagen}" alt="${nombre}" class="detalles-imagen">
        <h2 class="detalles-nombre">${nombre}</h2>
        <p class="detalles-descripcion">${descripcion}</p>
        <p class="detalles-precio">$${precio}</p>
        <button class="btn-whatsapp" onclick="window.open('${urlWhatsApp}', '_blank')">
            Pedir por WhatsApp
        </button>
    `;
    
    detalles.classList.add('mostrar');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarDetalles() {
    const detalles = document.getElementById('detallesDelProducto');
    const overlay = document.querySelector('.overlay');
    
    detalles.classList.remove('mostrar');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ============ CREAR OVERLAY ============
function createOverlay() {
    if (!document.querySelector('.overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.addEventListener('click', cerrarDetalles);
        document.body.appendChild(overlay);
    }
}

// ============ TOUCH/SWIPE PARA SLIDERS ============
function setupTouchForSliders() {
    const sliders = document.querySelectorAll('.slider-container');
    
    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });
        
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });
        
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
        
        slider.style.cursor = 'grab';
    });
}

// ============ INICIALIZAR TODO ============
function init() {
    // Cargar todos los sliders
    Object.entries(categoryToSliderId).forEach(([category, sliderId]) => {
        loadSlider(category, sliderId);
    });
    
    // Configurar navegación de sliders
    setupSliderNavigation();
    
    // Configurar touch para sliders
    setupTouchForSliders();
    
    // Crear overlay
    createOverlay();
    
    console.log('✨ Galería de productos cargada correctamente');
    console.log(`📦 Total de productos: ${productos.length}`);
    
    // Mostrar resumen por categoría
    Object.keys(categoryToSliderId).forEach(category => {
        const count = productos.filter(p => p.categoria === category).length;
        console.log(`   - ${category}: ${count} productos`);
    });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarDetalles();
    }
});