/* ============================================
   DON INACIO – GALERÍA SCRIPT
   ============================================ */

// ── HEADER SCROLL ──
const galleryHeader = document.getElementById('galleryHeader');
if (galleryHeader) {
    window.addEventListener('scroll', () => {
        galleryHeader.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ── SCROLL TO TOP ──
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// ARRAY DE IMÁGENES - ORGANIZADAS POR CATEGORÍA
// ============================================
const images = [
    // ─── FOOD ───
    { src: '../extern-arch/imagenes galeria/food/1.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/2.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/3.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/4.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/5.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/6.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/7.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/8.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/9.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/10.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/11.png', category: 'food' },
    { src: '../extern-arch/imagenes galeria/food/12.png', category: 'food' },

    // ─── AMBIENTE ───
    { src: '../extern-arch/imagenes galeria/ambiente/1.png', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/ambiente/2.png', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/ambiente/3.png', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/ambiente/4.png', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/ambiente/5.png', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/ambiente/6.png', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/ambiente/7.png', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/ambiente/8.png', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/ambiente/9.png', category: 'ambiente' },
    { src: '../extern-arch/imagenes galeria/ambiente/10.png', category: 'ambiente' },

    // ─── EVENTOS ───
    
];

// ============================================
// VARIABLES GLOBALES
// ============================================
let currentImageIndex = 0;
let filteredImages = [...images];

// ============================================
// CARGAR GALERÍA
// ============================================
const galleryGrid    = document.getElementById('galleryGrid');
const galleryCount   = document.getElementById('galleryCount');

function loadGallery(imagesToLoad = images) {
    galleryGrid.innerHTML = '';
    filteredImages = imagesToLoad;

    // Actualizar contador
    if (galleryCount) {
        galleryCount.textContent = `${imagesToLoad.length} fotografías`;
    }

    imagesToLoad.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.category = image.category;
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-label', `Ver imagen ${index + 1}`);

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = `Fotografía ${index + 1} – Restaurante Don Inacio`;
        img.loading = 'lazy';

        item.appendChild(img);
        item.addEventListener('click', () => openLightbox(index));
        item.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(index); }
        });

        galleryGrid.appendChild(item);
    });
}

// ============================================
// FILTROS
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;
        const filtered = filter === 'all' ? images : images.filter(img => img.category === filter);
        loadGallery(filtered);

        // Scroll suave a la galería
        galleryGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ============================================
// LIGHTBOX
// ============================================
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightboxImg');
const lightboxClose   = document.getElementById('lightboxClose');
const lightboxPrev    = document.getElementById('lightboxPrev');
const lightboxNext    = document.getElementById('lightboxNext');
const lightboxCounter = document.getElementById('lightboxCounter');

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    preloadAdjacentImages(index);
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxImage() {
    lightboxImg.src = filteredImages[currentImageIndex].src;
    lightboxImg.alt = `Fotografía ${currentImageIndex + 1} – Restaurante Don Inacio`;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${filteredImages.length}`;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    updateLightboxImage();
    preloadAdjacentImages(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightboxImage();
    preloadAdjacentImages(currentImageIndex);
}

// Preload imágenes adyacentes
function preloadAdjacentImages(index) {
    for (let i = 1; i <= 2; i++) {
        const ni = (index + i) % filteredImages.length;
        const pi = (index - i + filteredImages.length) % filteredImages.length;
        new Image().src = filteredImages[ni].src;
        new Image().src = filteredImages[pi].src;
    }
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
});

// Teclado
document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowRight')  nextImage();
    if (e.key === 'ArrowLeft')   prevImage();
});

// Touch / swipe
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
lightbox.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) diff > 0 ? nextImage() : prevImage();
}, { passive: true });

// ============================================
// INICIALIZAR
// ============================================
loadGallery();