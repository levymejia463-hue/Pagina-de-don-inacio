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
    window.location.href = "../../index.html";
}

// ============ DATOS DE PRODUCTOS SALCHICHAS ============
const productosSalchichas = [
    { imagen: '../../extern-arch/salchinas-nuevas/6.png', nombre: 'Salchicha Tradicional Ahumada', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.50' },
    { imagen: '../../extern-arch/salchinas-nuevas/5.png', nombre: 'Salchicha Camponesa', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '6.80' },
    { imagen: '../../extern-arch/salchinas-nuevas/4.png', nombre: 'Salchicha Mediterránea', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.20' },
    { imagen: '../../extern-arch/salchinas-nuevas/3.png', nombre: 'Salchicha Montaña', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de res, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.80' },
    { imagen: '../../extern-arch/salchinas-nuevas/2.png', nombre: 'Salchicha Picante', categoria: 'salchichas', descripcion: 'Salchicha fresca, cura natural a base de carne de cerdo, sal, especies y hierbas aromáticas, sin gluten, lactosa y conservantes.', precio: '7.50' },
    { imagen: '../../extern-arch/salchinas-nuevas/1.png', nombre: 'Salchicha Serrana', categoria: 'salchichas', descripcion: 'Salchicha fresca natural a base de carne de cerdo, sal, especies alimentarias y conservantes.', precio: '6.90' },
];

// ============ CREAR OVERLAY ============
function createOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', cerrarDetalles);
}

// ============ CARGAR PRODUCTOS EN EL GRID ============
function cargarProductos() {
    const grid = document.getElementById('productosGrid');
    
    productosSalchichas.forEach((producto, index) => {
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
    
    console.log(`✨ ${productosSalchichas.length} productos cargados correctamente`);
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