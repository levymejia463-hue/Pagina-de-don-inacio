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


//funcin del h1 para volver al inicio
function volver() {
    window.location.href="../index.html"
}

//funcion principal
function mostrarDetalles(elemento){
    //productos
    const imagen = elemento.getAttribute('data-imagen');
    const nombre = elemento.getAttribute('data-nombre');
    const categoria = elemento.getAttribute('data-gategoria') || elemento.getAttribute('data-categoria') || elemento.dataset.gategoria || elemento.dataset.categoria || '';
    const descripcion = elemento.getAttribute('data-descripcion');
    const precio = elemento.getAttribute('data-precio');

    const detalles = document.getElementById('detallesDelProducto')

    detalles.innerHTML = `

    <button class="btn-cerrar" onclick="cerrarDetalles()">×</button>
    <img src="${imagen}" alt="${nombre}" class="detalles-imagen">
    <div class="textos">
        <div class="detalles-nombre">${nombre}</div>
        <div style="text-align: start;">
            <span class="detalles-categoria">${categoria}</span>
        </div>
        <div class="detalles-descripcion">${descripcion}</div>
        <div class="detalles-precio">$${precio}</div>
        <button class="btn-comprar" onclick="comprar('${nombre}', '${precio}')">
            Pedir por whatsapp!
        </button>
    </div>
    

    `; 

    detalles.classList.add('mostrar')
}

function cerrarDetalles() {
    const detalles = document.getElementById('detallesDelProducto');
    detalles.classList.remove('mostrar');
}

// Insertar un div.categorias después de la imagen en cada .producto
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.producto').forEach(prod => {
        const categoria = prod.getAttribute('data-gategoria') || prod.getAttribute('data-categoria') || prod.dataset.gategoria || prod.dataset.categoria || '';

        // Si ya existe, actualizar el texto
        let catDiv = prod.querySelector('.categorias');
        if (catDiv) {
            let p = catDiv.querySelector('p');
            if (!p) { p = document.createElement('p'); catDiv.appendChild(p); }
            p.textContent = categoria;
            return;
        }

        // Crear y colocar el contenedor de categoria
        const p = document.createElement('p');
        p.textContent = categoria;
        catDiv = document.createElement('div');
        catDiv.className = 'categorias';
        catDiv.appendChild(p);

        const img = prod.querySelector('img');
        if (img && img.parentNode) {
            img.insertAdjacentElement('afterend', catDiv);
        } else {
            prod.insertBefore(catDiv, prod.firstChild);
        }
    });
});