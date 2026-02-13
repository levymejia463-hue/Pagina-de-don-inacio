// ============ MANEJO DEL MENÚ ============
const menu = document.getElementById('manuham');
const open = document.getElementById('openMenu');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    menu.classList.add('actives');
    open.classList.add('remove');
});

close.addEventListener('click', () => {
    menu.classList.remove('actives');
    open.classList.remove('remove');
});

// ============ FUNCIÓN VOLVER AL INICIO ============
function volver() {
    window.location.href = "../index.html";
}

// ============ DATOS DE PRODUCTOS SALES ============
const productosSales = [
    { imagen: '../../extern-arch/sales/10.png', nombre: 'Sal Trío Cítrico', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especies y hierbas aromáticas. Ideal para pollo a la parrilla, pescados y ensaladas. Una combinación perfecta de sabores cítricos que realzan el sabor natural de tus ingredientes.', precio: '4.50' },
    { imagen: '../../extern-arch/sales/9.png', nombre: 'Sal Ahumada', categoria: 'sales', descripcion: 'Sal Marina 100% natural ahumada naturalmente. Ideal para todo tipo de carnes después de parrilladas, guisos y pizza. El toque ahumado perfecto para dar profundidad a tus platos.', precio: '5.20' },
    { imagen: '../../extern-arch/sales/8.png', nombre: 'Sal al Vino Tinto', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especias y hierbas aromáticas. Perfecta para carnes rojas, guisos, y carnes a la parrilla. El vino tinto aporta un sabor robusto y complejo.', precio: '4.80' },
    { imagen: '../../extern-arch/sales/7.png', nombre: 'Sal Lemon Pepper', categoria: 'sales', descripcion: 'Sal Marina 100% natural con apio, cebolla, ajo y especias. Ideal para carnes rojas, aves, vegetales asados, ensaladas y papas. Una mezcla clásica y versátil.', precio: '4.60' },
    { imagen: '../../extern-arch/sales/5.png', nombre: 'Sal Picante', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especias y hierbas aromáticas. Ideal para carnes, huevos, papa frita, y salsas. Aporta el toque picante perfecto para los amantes del sabor intenso.', precio: '4.70' },
    { imagen: '../../extern-arch/sales/4.png', nombre: 'Sal Oriental', categoria: 'sales', descripcion: 'Sal Marina 100% natural con apio, cebolla, ajo y especias. Ideal para cerdo a la parrilla y guisos. Inspirada en los sabores tradicionales de Oriente.', precio: '4.90' },
    { imagen: '../../extern-arch/sales/6.png', nombre: 'Sal de Naranja', categoria: 'sales', descripcion: 'Limón, Sal Marina 100% natural, especias y hierbas aromáticas. Ideal para pescado, mariscos, pollo y ensaladas frescas. El cítrico de naranja aporta frescura y brillo.', precio: '4.65' },
    { imagen: '../../extern-arch/sales/2.png', nombre: 'Sal Cítrica', categoria: 'sales', descripcion: 'Limón, Sal Marina 100% natural, especias y hierbas aromáticas. Perfecta para pescado, mariscos, pollo y ensaladas frescas. Una variante cítrica versátil y refrescante.', precio: '4.65' },
    { imagen: '../../extern-arch/sales/1.png', nombre: 'Sal Mediterránea', categoria: 'sales', descripcion: 'Sal Marina 100% natural con especias y hierbas aromáticas. Ideal para pescado y guisos. Captura la esencia de la cocina mediterránea en cada grano.', precio: '4.75' },
    { imagen: '../../extern-arch/sales/3.png', nombre: 'Sal Apio', categoria: 'sales', descripcion: 'Sal Marina 100% natural, especias y hierbas aromáticas, con apio. Versátil para ensaladas, guisos, y carnes. El apio aporta un sabor fresco y aromático.', precio: '4.40' }
];

// ============ CREAR OVERLAY ============
function createOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', cerrarDetalles);
}

// ============ CARGAR PRODUCTOS EN EL GRID ============
function cargarProductos() {
    const grid = document.getElementById('productosGrid');
    
    productosSales.forEach((producto, index) => {
        const productoCard = document.createElement('div');
        productoCard.className = 'producto';
        productoCard.style.animationDelay = `${index * 0.1}s`;
        productoCard.onclick = () => mostrarDetalles(producto);
        
        productoCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <div class="producto-info">
                <h2 class="producto-nombre">${producto.nombre}</h2>
                <p class="producto-precio">$${producto.precio}</p>
            </div>
        `;
        
        grid.appendChild(productoCard);
    });
    
    console.log(`✨ ${productosSales.length} productos cargados correctamente`);
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
        <img src="${producto.imagen}" alt="${producto.nombre}" class="detalles-imagen">
        <h2 class="detalles-nombre">${producto.nombre}</h2>
        <p class="detalles-descripcion">${producto.descripcion}</p>
        <p class="detalles-precio">$${producto.precio}</p>
        <button class="btn-whatsapp" onclick="window.open('${urlWhatsApp}', '_blank')">
            Pedir por WhatsApp
        </button>
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