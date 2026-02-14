// ============ DATOS DE PRODUCTOS - SALSAS Y ACEITES PICANTES ============
const productos = [
    { imagen: '../../extern-arch/picantes/1.jpeg', nombre: 'Don Inacio Chilli Oil', descripcion: 'Aceite de chile 100% natural, sin colorantes fermentados, no transgénico, con colorantes auténticos y estándar estadounidense. Una creación artesanal desde 2015 que combina tradición y calidad premium. Ideal para dar un toque picante a cualquier platillo. Presentación 250ml.', precio: '9.80' },
    { imagen: '../../extern-arch/picantes/2.jpeg', nombre: 'Oriental Chili Oil – Original Colorado', descripcion: 'Aceite de chile oriental con vinagre, añejado en barriles de roble y roble quemado en Colorado. Un proceso único de maduración que aporta complejidad y profundidad de sabor. Perfecto para cocina asiática y platos gourmet. Presentación 250ml.', precio: '12.50' },
    { imagen: '../../extern-arch/picantes/3.jpeg', nombre: 'Aceite Oriental Chilli Oil – Receta Portuguesa', descripcion: 'Aceite de chile picante 100% natural, sin conservantes, colorantes ni aditivos. "Picante que enamora". Elaborado siguiendo una auténtica receta portuguesa tradicional. Ideal para pastas, arroz, sopas y marinados. Presentación 280ml.', precio: '10.20' },
    { imagen: '../../extern-arch/picantes/4.jpeg', nombre: 'Piri Piri Salsa Portuguesa – Habanero', descripcion: 'Salsa picante 100% orgánica con habanero. "Picante que enamora". Una explosión de sabor con el característico picor del chile habanero, elaborada con ingredientes orgánicos certificados. Perfecta para tacos, alitas y carnes a la parrilla. Presentación 150ml.', precio: '7.80' },
    { imagen: '../../extern-arch/picantes/5.jpeg', nombre: 'Thai Fire Oil – Aceite Original Receta Portuguesa', descripcion: 'Aceite picante 100% natural. "Picante que enamora". Fusión única entre sabores tailandeses y técnicas portuguesas tradicionales. Ideal para dar un toque exótico y picante a tus platillos favoritos. Presentación 280ml.', precio: '11.50' },
    { imagen: '../../extern-arch/picantes/6.jpeg', nombre: 'Piri-Piri Salsa Portuguesa', descripcion: 'Salsa picante 100% natural. "Con esta salsa, cada bocado es un desafío. ¿Podrás soportarlo?". La auténtica salsa piri-piri portuguesa con nivel de picor intenso. Para los verdaderos amantes del chile. Perfecta para carnes, mariscos y tapas. Presentación 150ml.', precio: '7.20' },
    { imagen: '../../extern-arch/picantes/7.jpeg', nombre: 'Don Inacio Salsa Picante', descripcion: 'Salsa picante 100% natural, elaborada con ingredientes de producción propia, sin azúcar añadido ni sabores artificiales, orgánica y sin alcohol. Una creación única que refleja la pasión por los productos artesanales de calidad. Ideal para todo tipo de platillos. Presentación 250ml.', precio: '8.50' },
    { imagen: '../../extern-arch/picantes/8.jpeg', nombre: 'Piri Piri Salsa Portuguesa – Homemade Ninja', descripcion: 'Salsa picante 100% natural. "Haz que cada bocado arda de sabor". Elaborada artesanalmente siguiendo recetas caseras tradicionales con un toque ninja de intensidad. Perfecta para los que buscan sabor auténtico y picante memorable. Presentación 150ml.', precio: '7.50' }
];

// ============ CREAR OVERLAY ============
function createOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', cerrarDetalles);
}

// ============ CARGAR PRODUCTOS ============
function cargarProductos() {
    const container = document.getElementById('seccionesContainer');
    
    // Crear el contenedor de la sección
    const seccionDiv = document.createElement('div');
    seccionDiv.className = 'seccion-productos';
    
    // Título de la sección
    const tituloSeccion = document.createElement('h2');
    tituloSeccion.className = 'titulo-seccion';
    tituloSeccion.textContent = 'Salsas y Aceites Picantes';
    seccionDiv.appendChild(tituloSeccion);
    
    // Grid de productos
    const grid = document.createElement('div');
    grid.className = 'productos-grid';
    
    productos.forEach((producto, index) => {
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
    });
    
    seccionDiv.appendChild(grid);
    container.appendChild(seccionDiv);
    
    console.log(`✨ ${productos.length} productos cargados`);
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
