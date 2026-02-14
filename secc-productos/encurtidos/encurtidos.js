// ============ DATOS DE PRODUCTOS - ENCURTIDOS ARTESANALES ============
const productos = [
    { imagen: '../../extern-arch/fotos de productos/24.jpg', nombre: 'Encurtido de Cebolla Morada', descripcion: 'Encurtido artesanal de cebolla morada en sal marina 100% natural. Elaborado con vinagre de manzana orgánico, especias y cebolla morada fresca. Producto 100% natural sin preservantes, colorantes ni ningún tipo de aditivos. Ideal para acompañar carnes, ensaladas, hamburguesas y tacos. Peso aproximado 450g. Conservar en el frío después de abrir.', precio: '6.80' },
    { imagen: '../../extern-arch/fotos de productos/25.jpg', nombre: 'Encurtido de Vegetales', descripcion: 'Encurtido artesanal de vegetales mixtos en sal marina 100% natural. Elaborado con vinagre de manzana orgánico, especias selectas y vegetales frescos. Producto 100% natural sin preservantes, colorantes ni ningún tipo de aditivos. Perfecto para tablas de quesos, aperitivos y como guarnición. Peso aproximado 450g. Conservar en el frío después de abrir.', precio: '7.20' }
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
    tituloSeccion.textContent = 'Encurtidos Artesanales';
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
