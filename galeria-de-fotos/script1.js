// ============ MENU HAMBURGUESA ============
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

function volver() {
    window.location.href = "../index.html";
}

// ============ ARRAY DE IMÁGENES ============
const images = [
    { src: '../extern-arch/imagenes galeria/1.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/2.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/3.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/4.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/5.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/6.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/7.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/8.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/9.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/10.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/11.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/12.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/14.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/15.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/17.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/18.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/20.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/21.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/22.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/23.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/24.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/26.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/27.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/28.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/29.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/31.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/32.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/34.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/35.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/36.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/38.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/39.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/40.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/41.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/42.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/44.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/45.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/46.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/47.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/48.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/49.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/50.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/52.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/53.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/54.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/55.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/56.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/57.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/58.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/59.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/60.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/61.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/62.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/63.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/64.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/65.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/66.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/67.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/68.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/69.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/70.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/71.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/72.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/73.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/74.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/75.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/76.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/77.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/78.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/79.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/81.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/82.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/83.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/84.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/85.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/86.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/87.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/88.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/89.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/90.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/91.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/92.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/93.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/94.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/95.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/96.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/97.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/98.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/99.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/100.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/101.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/102.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/104.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/105.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/106.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/107.jpg', category: 'eventos' },
    { src: '../extern-arch/imagenes galeria/108.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/109.jpg', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/111.jpg', category: 'food' },
    { src: '../extern-arch/imagenes galeria/112.jpg', category: 'eventos' }
];

// ============ VARIABLES GLOBALES ============
let currentImageIndex = 0;
let filteredImages = [...images];

// ============ CARGAR GALERÍA ============
const galleryGrid = document.getElementById('galleryGrid');

function loadGallery(imagesToLoad = images) {
    galleryGrid.innerHTML = '';
    filteredImages = imagesToLoad;
    
    imagesToLoad.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.category = image.category;
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = `Imagen ${index + 1}`;
        img.loading = 'lazy'; // Lazy loading nativo
        
        item.appendChild(img);
        item.addEventListener('click', () => openLightbox(index));
        
        galleryGrid.appendChild(item);
    });
}

// ============ FILTROS ============
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar active al botón clickeado
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        
        if (filter === 'all') {
            loadGallery(images);
        } else {
            const filtered = images.filter(img => img.category === filter);
            loadGallery(filtered);
        }
    });
});

// ============ LIGHTBOX ============
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxCounter = document.getElementById('lightboxCounter');

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
}

function updateLightboxImage() {
    lightboxImg.src = filteredImages[currentImageIndex].src;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${filteredImages.length}`;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    updateLightboxImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightboxImage();
}

// Event listeners para lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Cerrar lightbox al hacer click fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// ============ TOUCH/SWIPE PARA MÓVILES ============
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next image
            nextImage();
        } else {
            // Swipe right - previous image
            prevImage();
        }
    }
}

// ============ LAZY LOADING CON INTERSECTION OBSERVER ============
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px'
});

// Observar todas las imágenes lazy
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ============ INICIALIZAR GALERÍA ============
loadGallery();

// ============ ANIMACIÓN DE SCROLL SUAVE ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ PRELOAD DE IMÁGENES CERCANAS ============
function preloadAdjacentImages(index) {
    const preloadCount = 2;
    for (let i = 1; i <= preloadCount; i++) {
        const nextIndex = (index + i) % filteredImages.length;
        const prevIndex = (index - i + filteredImages.length) % filteredImages.length;
        
        const nextImg = new Image();
        nextImg.src = filteredImages[nextIndex].src;
        
        const prevImg = new Image();
        prevImg.src = filteredImages[prevIndex].src;
    }
}

// Preload al abrir lightbox
const originalOpenLightbox = openLightbox;
openLightbox = function(index) {
    originalOpenLightbox(index);
    preloadAdjacentImages(index);
};

console.log('✨ Galería mejorada cargada correctamente');
console.log(`📸 Total de imágenes: ${images.length}`);