// ============ MANEJO DEL MENÚ ============
const menu = document.getElementById('manuham');
const open = document.getElementById('openMenu');
const close = document.getElementById('close');

if (open && menu) {
    open.addEventListener('click', () => {
        menu.classList.add('actives');
        open.classList.add('remove');
    });
}

if (close && menu && open) {
    close.addEventListener('click', () => {
        menu.classList.remove('actives');
        open.classList.remove('remove');
    });
}

// ============ DATOS DE PRODUCTOS POR SECCIÓN ============
const seccionesProductos = {
    mermeladas: {
        titulo: 'Mermeladas Artesanales',
        productos: [
            { imagen: '../../extern-arch/fotos de productos/0.jpg', nombre: 'Mermelada de Zanahoria con Jengibre y Canela', descripcion: 'Mermelada artesanal de zanahoria elaborada con zanahorias frescas, jengibre y canela, cocida lentamente para concentrar sus aromas y obtener una textura untuosa. Perfecta en tostadas, con quesos suaves o como glaseado ligero para carnes. Presentación 250g; conservar en frío tras abrir.', precio: '5.20' },
            { imagen: '../../extern-arch/fotos de productos/1.jpg', nombre: 'Mermelada de Tomate con Albahaca', descripcion: 'Mermelada de tomate elaborada con tomates maduros y albahaca fresca, con un equilibrio entre acidez y dulzor. Recomendable para bruschettas, tablas de quesos y como acompañamiento de platos mediterráneos. Presentación 250g; conservar en frío tras abrir.', precio: '6.15' },
            { imagen: '../../extern-arch/fotos de productos/2.jpg', nombre: 'Mermelada de Remolacha con Jengibre y Limón', descripcion: 'Mermelada de remolacha con jengibre y limón, que aporta un sabor terroso con toques cítricos y un ligero picor del jengibre. Ideal para combinar con quesos curados, ensaladas y platos vegetarianos. Presentación 250g; refrigerar después de abrir.', precio: '5.60' },
            { imagen: '../../extern-arch/fotos de productos/3.jpg', nombre: 'Mermelada de Repollo con Cereza y Tomillo', descripcion: 'Mermelada de repollo con cereza y tomillo: una mezcla inesperada entre lo dulce y lo herbal, perfecta para añadir contraste a platos salados, quesos y ensaladas creativas. Presentación 250g; conservar en frío tras abrir.', precio: '6.15' },
            { imagen: '../../extern-arch/fotos de productos/4.jpg', nombre: 'Mermelada de Limón con Manzana y Pimienta Cayena', descripcion: 'Mermelada de limón y manzana con un sutil toque picante de pimienta cayena. Fresca y brillante, sirve para postres, tostadas o para dar un punto ácido-dulce a platos de pescado y aves. Presentación 250g; conservar en frío tras abrir.', precio: '6.08' },
            { imagen: '../../extern-arch/fotos de productos/5.jpg', nombre: 'Mermelada de Chile Dulce con Pimienta Cayena', descripcion: 'Mermelada de chile dulce con pimienta cayena: combina dulzor afrutado con un calor gradual, ideal para acompañar carnes a la parrilla, quesos fuertes y como ingrediente en salsas. Presentación 250g; conservar en frío tras abrir.', precio: '6.20' },
            { imagen: '../../extern-arch/fotos de productos/6.jpg', nombre: 'Mermelada de Chile Dulce con Chocolate Oscuro', descripcion: 'Mermelada de chile dulce con chocolate oscuro: una fusión entre el dulzor y notas amargas del chocolate, con un fondo picante moderado. Perfecta en postres, sobre pan tostado o para maridar con quesos azules. Presentación 250g; refrigerar tras abrir.', precio: '6.80' },
            { imagen: '../../extern-arch/fotos de productos/7.jpg', nombre: 'Mermelada de Chile Dulce con Aceitunas Negras', descripcion: 'Mermelada de chile dulce con aceitunas negras: mezcla salina y dulce, pensada para tablas de quesos, tapas y para dar un contraste único a sándwiches gourmet. Presentación 250g; conservar en frío tras abrir.', precio: '6.40' },
            { imagen: '../../extern-arch/fotos de productos/8.jpg', nombre: 'Mermelada de Cebolla Morada con Jengibre y Pimienta Negra', descripcion: 'Mermelada de cebolla morada con jengibre y pimienta negra: caramelizada y especiada, aporta profundidad y dulzor complejo a hamburguesas, quesos y platos de carne. Presentación 250g; refrigerar después de abrir.', precio: '5.20' },
            { imagen: '../../extern-arch/fotos de productos/9.jpg', nombre: 'Mermelada de Cebolla con Flor de Jamaica y Naranja', descripcion: 'Mermelada de cebolla con flor de jamaica y naranja: combinación cítrica y floral que equilibra la dulzura de la cebolla; ideal con carnes, quesos y como complemento en entradas. Presentación 250g; conservar en frío tras abrir.', precio: '5.60' }
        ]
    },
    licores: {
        titulo: 'Licores Artesanales',
        productos: [
            { imagen: '../../extern-arch/fotos de productos/23.jpg', nombre: 'Licor de Mandarina', descripcion: 'Licor artesanal elaborado con mandarinas frescas y seleccionadas, maceradas para extraer sus aceites esenciales y aromas cítricos. Ideal para cócteles, postres o disfrutar solo con hielo. Presentación 750ml; 20% vol. alcohol.', precio: '15.50' },
            { imagen: '../../extern-arch/fotos de productos/21.jpg', nombre: 'Licor de Limón', descripcion: 'Licor de limón natural con un equilibrio perfecto entre dulzor y acidez. Elaborado con limones frescos mediante un proceso artesanal que preserva todo su sabor. Perfecto para preparar limoncellos caseros o cócteles refrescantes. Presentación 750ml; 22% vol. alcohol.', precio: '14.80' },
            { imagen: '../../extern-arch/fotos de productos/22.jpg', nombre: 'Licor de Lima', descripcion: 'Licor de lima artesanal con notas cítricas vibrantes y frescas. Ideal para mojitos, margaritas y cócteles tropicales. Elaborado con limas seleccionadas y azúcar de caña. Presentación 750ml; 20% vol. alcohol.', precio: '14.95' }
        ]
    },
    salsas: {
        titulo: 'Salsas y Aceites Picantes',
        productos: [
            { imagen: '../../extern-arch/picantes/1.jpeg', nombre: 'Don Inacio Chilli Oil', descripcion: 'Aceite de chile 100% natural, sin colorantes fermentados, no transgénico, con colorantes auténticos y estándar estadounidense. Una creación artesanal desde 2015 que combina tradición y calidad premium. Ideal para dar un toque picante a cualquier platillo. Presentación 250ml.', precio: '9.80' },
            { imagen: '../../extern-arch/picantes/2.jpeg', nombre: 'Oriental Chili Oil – Original Colorado', descripcion: 'Aceite de chile oriental con vinagre, añejado en barriles de roble y roble quemado en Colorado. Un proceso único de maduración que aporta complejidad y profundidad de sabor. Perfecto para cocina asiática y platos gourmet. Presentación 250ml.', precio: '12.50' },
            { imagen: '../../extern-arch/picantes/3.jpeg', nombre: 'Aceite Oriental Chilli Oil – Receta Portuguesa', descripcion: 'Aceite de chile picante 100% natural, sin conservantes, colorantes ni aditivos. "Picante que enamora". Elaborado siguiendo una auténtica receta portuguesa tradicional. Ideal para pastas, arroz, sopas y marinados. Presentación 280ml.', precio: '10.20' },
            { imagen: '../../extern-arch/picantes/4.jpeg', nombre: 'Piri Piri Salsa Portuguesa – Habanero', descripcion: 'Salsa picante 100% orgánica con habanero. "Picante que enamora". Una explosión de sabor con el característico picor del chile habanero, elaborada con ingredientes orgánicos certificados. Perfecta para tacos, alitas y carnes a la parrilla. Presentación 150ml.', precio: '7.80' },
            { imagen: '../../extern-arch/picantes/5.jpeg', nombre: 'Thai Fire Oil – Aceite Original Receta Portuguesa', descripcion: 'Aceite picante 100% natural. "Picante que enamora". Fusión única entre sabores tailandeses y técnicas portuguesas tradicionales. Ideal para dar un toque exótico y picante a tus platillos favoritos. Presentación 280ml.', precio: '11.50' },
            { imagen: '../../extern-arch/picantes/6.jpeg', nombre: 'Piri-Piri Salsa Portuguesa', descripcion: 'Salsa picante 100% natural. "Con esta salsa, cada bocado es un desafío. ¿Podrás soportarlo?". La auténtica salsa piri-piri portuguesa con nivel de picor intenso. Para los verdaderos amantes del chile. Perfecta para carnes, mariscos y tapas. Presentación 150ml.', precio: '7.20' },
            { imagen: '../../extern-arch/picantes/7.jpeg', nombre: 'Don Inacio Salsa Picante', descripcion: 'Salsa picante 100% natural, elaborada con ingredientes de producción propia, sin azúcar añadido ni sabores artificiales, orgánica y sin alcohol. Una creación única que refleja la pasión por los productos artesanales de calidad. Ideal para todo tipo de platillos. Presentación 250ml.', precio: '8.50' },
            { imagen: '../../extern-arch/picantes/8.jpeg', nombre: 'Piri Piri Salsa Portuguesa – Homemade Ninja', descripcion: 'Salsa picante 100% natural. "Haz que cada bocado arda de sabor". Elaborada artesanalmente siguiendo recetas caseras tradicionales con un toque ninja de intensidad. Perfecta para los que buscan sabor auténtico y picante memorable. Presentación 150ml.', precio: '7.50' }
        ]
    },
    pastas: {
        titulo: 'Pastas de Tomate',
        productos: [
            { imagen: '../../extern-arch/fotos de productos/14.jpg', nombre: 'Salsa de Tomate Gourmet', descripcion: 'Salsa de tomate artesanal elaborada con tomates maduros seleccionados, albahaca fresca y aceite de oliva. Sin conservantes ni colorantes. Ideal para pastas, pizzas, bruschetas y como base para guisos. Receta portuguesa tradicional. Presentación 300g.', precio: '6.50' },
            { imagen: '../../extern-arch/fotos de productos/15.jpg', nombre: 'Pasta de Pimentón Dulce Ahumado Gourmet', descripcion: 'Pasta artesanal de pimentón dulce con un delicado toque ahumado. Elaborada con pimientos rojos seleccionados mediante receta portuguesa tradicional. Sin conservantes, colorantes ni aditivos. Perfecta para arroces, guisos, carnes y como untable. Presentación 300g.', precio: '7.20' }
        ]
    },
    encurtidos: {
        titulo: 'Encurtidos Artesanales',
        productos: [
            { imagen: '../../extern-arch/fotos de productos/24.jpg', nombre: 'Encurtido de Cebolla Morada', descripcion: 'Encurtido artesanal de cebolla morada en sal marina 100% natural. Elaborado con vinagre de manzana orgánico, especias y cebolla morada fresca. Producto 100% natural sin preservantes, colorantes ni ningún tipo de aditivos. Ideal para acompañar carnes, ensaladas, hamburguesas y tacos. Peso aproximado 450g. Conservar en el frío después de abrir.', precio: '6.80' },
            { imagen: '../../extern-arch/fotos de productos/25.jpg', nombre: 'Encurtido de Vegetales', descripcion: 'Encurtido artesanal de vegetales mixtos en sal marina 100% natural. Elaborado con vinagre de manzana orgánico, especias selectas y vegetales frescos. Producto 100% natural sin preservantes, colorantes ni ningún tipo de aditivos. Perfecto para tablas de quesos, aperitivos y como guarnición. Peso aproximado 450g. Conservar en el frío después de abrir.', precio: '7.20' }
        ]
    },
    manteca: {
        titulo: 'Manteca Natural',
        productos: [
            { imagen: '../../extern-arch/fotos de productos/26.jpg', nombre: 'Manteca 100% Natural de Cerdo - Don Inacio', descripcion: 'Manteca artesanal 100% natural de cerdo elaborada según receta tradicional portuguesa. Producto gourmet sin aditivos, conservantes ni colorantes. Ideal para cocina tradicional, freír, confitar y dar sabor auténtico a tus platillos. Perfecta para tortillas, frijoles, tamales y recetas que requieran grasa pura de cerdo. Presentación en frasco de vidrio. Conservar en lugar fresco y seco.', precio: '8.50' }
        ]
    }
};

// ============ CREAR OVERLAY ============
function createOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', cerrarDetalles);
}

// ============ CARGAR PRODUCTOS POR SECCIONES ============
function cargarProductos() {
    const container = document.getElementById('seccionesContainer');
    let totalProductos = 0;
    
    // Recorrer cada sección
    Object.keys(seccionesProductos).forEach((seccionKey) => {
        const seccion = seccionesProductos[seccionKey];
        
        // Crear el contenedor de la sección
        const seccionDiv = document.createElement('div');
        seccionDiv.className = 'seccion-productos';
        
        // Título de la sección
        const tituloSeccion = document.createElement('h2');
        tituloSeccion.className = 'titulo-seccion';
        tituloSeccion.textContent = seccion.titulo;
        seccionDiv.appendChild(tituloSeccion);
        
        // Grid de productos de esta sección
        const grid = document.createElement('div');
        grid.className = 'productos-grid';
        
        seccion.productos.forEach((producto, index) => {
            const productoCard = document.createElement('div');
            productoCard.className = 'producto';
            productoCard.style.animationDelay = `${index * 0.1}s`;
            productoCard.onclick = () => mostrarDetalles(producto);
            
            productoCard.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                <div class="producto-info">
                    <h3 class="producto-nombre">${producto.nombre}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                </div>
            `;
            
            grid.appendChild(productoCard);
            totalProductos++;
        });
        
        seccionDiv.appendChild(grid);
        container.appendChild(seccionDiv);
    });
    
    console.log(`✨ ${totalProductos} productos cargados en ${Object.keys(seccionesProductos).length} secciones`);
}

// ============ MOSTRAR DETALLES DEL PRODUCTO ============
function mostrarDetalles(producto) {
    const detallesDiv = document.getElementById('detallesDelProducto');
    const overlay = document.getElementById('overlay');
    
    const numeroWhatsApp = '50312345678';
    const mensaje = `Hola! Me interesa el producto: ${producto.nombre} - Precio: $${producto.precio}`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    detallesDiv.innerHTML = `
        <button class="btn-close" onclick="cerrarDetalles()">×</button>
        
        <div class="detalles-imagen-container">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="detalles-imagen">
        </div>
        
        <div class="detalles-info-container">
            <h2 class="detalles-nombre">${producto.nombre}</h2>
            <p class="detalles-descripcion">${producto.descripcion}</p>
            <p class="detalles-precio">$${producto.precio}</p>
            <button class="btn-whatsapp" onclick="window.open('${urlWhatsApp}', '_blank')">
                Pedir por WhatsApp
            </button>
        </div>
    `;
    
    detallesDiv.classList.add('mostrar');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============ CERRAR DETALLES ============
function cerrarDetalles() {
    const detallesDiv = document.getElementById('detallesDelProducto');
    const overlay = document.getElementById('overlay');
    
    detallesDiv.classList.remove('mostrar');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============ CERRAR CON TECLA ESCAPE ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarDetalles();
    }
});

// ============ INICIALIZAR ============
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    createOverlay();
});