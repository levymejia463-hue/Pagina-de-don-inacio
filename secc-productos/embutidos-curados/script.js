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

// ============ DATOS DE PRODUCTOS EMBUTIDOS CURADOS ============
const productosEmbutidosCurados = [
    { imagen: '../../extern-arch/imgs embutidos curados/1.png', nombre: 'Salchichón Familia Inacio', categoria: 'embutido curado', descripcion: 'Salchichón tradicional elaborado con 50% cerdo, 30% búfalo y 20% cordero. Pieza entera curada artesanalmente siguiendo recetas tradicionales portuguesas. Sabor intenso y equilibrado.', precio: '12.50' },
    { imagen: '../../extern-arch/imgs embutidos curados/2.png', nombre: 'Salchichón al Ajo Fresco', categoria: 'embutido curado', descripcion: 'Salchichón tradicional aromatizado con ajo fresco recién picado. Curado lentamente para desarrollar un sabor intenso y aromático con toques picantes del ajo. Perfecto para tablas de embutidos.', precio: '11.80' },
    { imagen: '../../extern-arch/imgs embutidos curados/3.png', nombre: 'Chorizo Ibérico Curado', categoria: 'embutido curado', descripcion: 'Chorizo ibérico de cerdo curado tradicionalmente con pimentón de la Vera. Textura firme y sabor ahumado característico. Ideal para tapas y bocadillos gourmet.', precio: '14.20' },
    { imagen: '../../extern-arch/imgs embutidos curados/4.png', nombre: 'Salami Italiano Artesanal', categoria: 'embutido curado', descripcion: 'Salami artesanal elaborado siguiendo la receta italiana tradicional. Mezcla de carnes selectas, especias mediterráneas y curado natural. Textura suave y sabor refinado.', precio: '13.50' },
    { imagen: '../../extern-arch/imgs embutidos curados/5.png', nombre: 'Fuet Catalán Tradicional', categoria: 'embutido curado', descripcion: 'Fuet catalán elaborado con carne de cerdo magra y especias naturales. Embutido fino y alargado con sabor delicado. Perfecto para picar entre horas o en bocadillos.', precio: '10.90' },
    { imagen: '../../extern-arch/imgs embutidos curados/6.png', nombre: 'Longaniza Española Premium', categoria: 'embutido curado', descripcion: 'Longaniza española premium curada con pimentón y especias tradicionales. Sabor intenso y ligeramente picante. Ideal para asar o consumir en crudo.', precio: '12.80' },
    { imagen: '../../extern-arch/imgs embutidos curados/7.png', nombre: 'Chouriço Português Tradicional', categoria: 'embutido curado', descripcion: 'Chouriço portugués tradicional elaborado con vino tinto, ajo y pimentón ahumado. Sabor profundo y característico de la gastronomía portuguesa. Perfecto para asar o guisos.', precio: '11.50' },
    { imagen: '../../extern-arch/imgs embutidos curados/8.png', nombre: 'Salchichón de Venado', categoria: 'embutido curado', descripcion: 'Salchichón artesanal elaborado con carne de venado de caza sostenible. Sabor suave y distintivo con bajo contenido graso. Una opción gourmet y saludable.', precio: '16.80' },
    { imagen: '../../extern-arch/imgs embutidos curados/9.png', nombre: 'Chorizo Picante al Vino', categoria: 'embutido curado', descripcion: 'Chorizo picante macerado en vino tinto con chiles seleccionados. Sabor intenso con un punto de picor equilibrado. Ideal para los amantes de los sabores fuertes.', precio: '13.20' },
    { imagen: '../../extern-arch/imgs embutidos curados/10.png', nombre: 'Lomo Embuchado Ibérico', categoria: 'embutido curado', descripcion: 'Lomo de cerdo ibérico embuchado y curado naturalmente. Pieza magra y jugosa con sabor delicado. Una de las joyas de la charcutería ibérica.', precio: '18.90' },
    { imagen: '../../extern-arch/imgs embutidos curados/11.png', nombre: 'Salami Picante Milano', categoria: 'embutido curado', descripcion: 'Salami estilo Milano con mezcla de especias picantes. Sabor italiano auténtico con un toque de calor. Perfecto para pizzas, pasta o tablas de quesos.', precio: '14.50' },
    { imagen: '../../extern-arch/imgs embutidos curados/12.png', nombre: 'Alheira Tradicional de Mirandela', categoria: 'embutido curado', descripcion: 'Alheira tradicional portuguesa de Mirandela elaborada con carnes de ave, pan y especias. Sabor suave y textura única. Se recomienda asar antes de consumir.', precio: '9.80' }
];

// ============ CREAR OVERLAY ============
function createOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', cerrarDetalles);
}

// ============ CARGAR PRODUCTOS EN EL GRID ============
function cargarProductos() {
    const grid = document.getElementById('productosGrid');
    
    productosEmbutidosCurados.forEach((producto, index) => {
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
    
    console.log(`✨ ${productosEmbutidosCurados.length} productos cargados correctamente`);
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