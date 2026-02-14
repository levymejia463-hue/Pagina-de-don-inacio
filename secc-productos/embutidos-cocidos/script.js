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

// ============ DATOS DE PRODUCTOS EMBUTIDOS COCIDOS ============
const productosEmbutidosCocidos = [
    { imagen: '../../extern-arch/embutidos cocidos/1.png', nombre: 'Bacon Ahumado 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Bacon ahumado artesanalmente con madera de haya, elaborado con carne 100% de cerdo. Textura jugosa y sabor intenso ahumado. Presentación: Pieza entera, trocitos 500g, loncha 250g / 500g. Ideal para desayunos, ensaladas y como ingrediente en múltiples recetas.', precio: '12.50' },
    { imagen: '../../extern-arch/embutidos cocidos/2.png', nombre: 'Costilla Ahumada 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Costilla de cerdo 100% ahumada lentamente con técnicas tradicionales. Carne tierna con hueso que aporta sabor intenso. Presentación: Pieza entera, packs de 2 unidades. Perfecta para asar a la parrilla o al horno, ideal para barbacoas y comidas familiares.', precio: '14.80' },
    { imagen: '../../extern-arch/embutidos cocidos/3.png', nombre: 'Jamón Cocido al Natural 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Jamón cocido al natural elaborado con carne de cerdo 100%, sin aditivos artificiales. Sabor auténtico y suave. Presentación: Pieza entera (4/6 kg), loncha 250g / 500g. Perfecto para bocadillos, ensaladas y como fiambre saludable para toda la familia.', precio: '9.90' },
    { imagen: '../../extern-arch/embutidos cocidos/3.png', nombre: 'Jamón Cocido con Hierbas Aromáticas 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Jamón cocido premium infusionado con una selección de hierbas aromáticas mediterráneas. Sabor delicado y refinado. Presentación: Pieza entera (4/6 kg), loncha 250g / 500g. Ideal para tablas gourmet, bocadillos especiales y platos sofisticados.', precio: '11.50' },
    { imagen: '../../extern-arch/embutidos cocidos/3.png', nombre: 'Jamón Cocido Ahumado 100% Cerdo', categoria: 'embutidos cocidos', descripcion: 'Jamón cocido ahumado con madera natural, 100% carne de cerdo. Combina la suavidad del jamón cocido con las notas intensas del ahumado. Presentación: Pieza entera (4/6 kg), loncha 250g / 500g. Excelente para bocadillos gourmet, pizzas y pastas.', precio: '10.80' }
];

// ============ CREAR OVERLAY ============
function createOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', cerrarDetalles);
}

// ============ CARGAR PRODUCTOS EN EL GRID ============
function cargarProductos() {
    const grid = document.getElementById('productosGrid');
    
    productosEmbutidosCocidos.forEach((producto, index) => {
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
    
    console.log(`✨ ${productosEmbutidosCocidos.length} productos cargados correctamente`);
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