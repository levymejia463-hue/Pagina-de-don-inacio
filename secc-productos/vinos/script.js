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

// ============ DATOS DE PRODUCTOS VINOS ============
const productosVinos = [
    { imagen: '../../extern-arch/imgs-vinos/2.png', nombre: 'Porto Rubí', categoria: 'vinos', descripcion: 'Porto Rubí elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Ideal como aperitivo o digestivo, excelente para complementar una refrescante sangría. 90 puntos CellarTracker, 88 puntos Wine Spectator.', precio: '32.00' },
    { imagen: '../../extern-arch/imgs-vinos/3.png', nombre: 'Porto Rubí Reserva Orgánica', categoria: 'vinos', descripcion: 'Porto Rubí Reserva Orgánica con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Perfecto para postres y quesos. Excelente como aperitivo o digestivo.', precio: '38.00' },
    { imagen: '../../extern-arch/imgs-vinos/5.png', nombre: 'Porto Vintage 2013', categoria: 'vinos', descripcion: 'Porto Vintage 2013 con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Perfecto como digestivo o para incorporar en comidas especiales. 92 puntos Robert Parker, 90 puntos Wine & Spirits Magazine.', precio: '95.00' },
    { imagen: '../../extern-arch/imgs-vinos/6.png', nombre: 'Porto Vintage 2015', categoria: 'vinos', descripcion: 'Porto Vintage 2015 elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Ideal como digestivo o para acompañar comidas especiales. 90 puntos Robert Parker.', precio: '89.00' },
    { imagen: '../../extern-arch/imgs-vinos/7.png', nombre: 'Porto Vintage 2016', categoria: 'vinos', descripcion: 'Porto Vintage 2016 con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Perfecto como digestivo o para comidas especiales. 93 puntos Wine Enthusiast Magazine, 90 puntos Robert Parker.', precio: '92.00' },
    { imagen: '../../extern-arch/imgs-vinos/8.png', nombre: 'Porto Vintage 2017', categoria: 'vinos', descripcion: 'Porto Vintage 2017 elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Excelente como digestivo o para acompañar comidas especiales. 93 puntos Robert Parker.', precio: '94.00' },
    { imagen: '../../extern-arch/imgs-vinos/9.png', nombre: 'Porto Colheita 1974 - Woodbox', categoria: 'vinos', descripcion: 'Porto Colheita 1974 con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Para ocasiones especiales o como regalo único. Magnífico digestivo y aperitivo. Presentación en caja de madera.', precio: '450.00' },
    { imagen: '../../extern-arch/imgs-vinos/11.png', nombre: 'Porto Colheita 2007', categoria: 'vinos', descripcion: 'Porto Colheita 2007 elaborado con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Ideal para ocasiones especiales o como regalo único. Magnífico digestivo y aperitivo. 93 puntos Robert Parker.', precio: '120.00' },
    { imagen: '../../extern-arch/imgs-vinos/13.png', nombre: 'Porto Tawny 20 Años', categoria: 'vinos', descripcion: 'Porto Tawny 20 Años con Touriga Franca, Tinta Barroca, Tinta Roriz y Touriga Nacional. Perfecto para postres. Magnífico digestivo y aperitivo. 91 puntos Robert Parker.', precio: '78.00' },
    { imagen: '../../extern-arch/imgs-vinos/14.png', nombre: 'Porto Tawny 40 Años - Woodbox', categoria: 'vinos', descripcion: 'Porto Tawny 40 Años de viñas viejas. Ideal con quesos intensos o café. Perfecto para postres. Magnífico digestivo y aperitivo. 94 puntos Robert Parker. Presentación en caja de madera.', precio: '280.00' },
    { imagen: '../../extern-arch/imgs-vinos/15.png', nombre: 'Porto Reserva Especial Tawny', categoria: 'vinos', descripcion: 'Porto Reserva Especial Tawny con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Perfecto para postres y quesos. 91 puntos Robert Parker.', precio: '52.00' },
    { imagen: '../../extern-arch/imgs-vinos/16.png', nombre: 'Porto Tawny', categoria: 'vinos', descripcion: 'Porto Tawny con Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cão y Tinta Barroca. Aperitivo o digestivo, perfecto para postres y quesos. Excelente para sangría.', precio: '35.00' },
    { imagen: '../../extern-arch/imgs-vinos/24.png', nombre: 'Chateau Champion - Saint-Émilion Grand Cru 2015', categoria: 'vinos', descripcion: 'Vino tinto francés Grand Cru con Cabernet Sauvignon, Cabernet Franc y Merlot. Acompaña carnes rojas, parrilladas y quesos fuertes. Medalla de Oro en el Concurso Féminalise.', precio: '65.00' },
    { imagen: '../../extern-arch/imgs-vinos/25.png', nombre: 'Chateau Champion - Saint-Émilion Grand Cru 2018', categoria: 'vinos', descripcion: 'Vino tinto francés Grand Cru con Cabernet Sauvignon, Cabernet Franc y Merlot. Ideal con carnes rojas, parrilladas y quesos fuertes. Medalla de Oro en el Concurso Féminalise.', precio: '68.00' },

];

// ============ CREAR OVERLAY ============
function createOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', cerrarDetalles);
}

// ============ CARGAR PRODUCTOS EN EL GRID ============
function cargarProductos() {
    const grid = document.getElementById('productosGrid');
    
    productosVinos.forEach((producto, index) => {
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
    
    console.log(`✨ ${productosVinos.length} productos cargados correctamente`);
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