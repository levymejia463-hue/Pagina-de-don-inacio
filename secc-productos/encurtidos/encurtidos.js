/* ============================================
   DON INACIO — ENCURTIDOS ARTESANALES SCRIPT
   ============================================ */

// ============ DATOS DE PRODUCTOS ============
const productosEncurtidos = [
    {
        imagen: '../../extern-arch/fotos de productos/24.jpg',
        nombre: 'Encurtido de Cebolla Morada',
        descripcion: 'Encurtido artesanal de cebolla morada en sal marina 100% natural. Elaborado con vinagre de manzana orgánico, especias y cebolla morada fresca. Producto 100% natural sin preservantes, colorantes ni ningún tipo de aditivos. Ideal para acompañar carnes, ensaladas, hamburguesas y tacos. Peso aproximado 450g. Conservar en el frío después de abrir.',
        precio: '8.60',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/25.jpg',
        nombre: 'Encurtido de Vegetales',
        descripcion: 'Encurtido artesanal de vegetales mixtos en sal marina 100% natural. Elaborado con vinagre de manzana orgánico, especias selectas y vegetales frescos. Producto 100% natural sin preservantes, colorantes ni ningún tipo de aditivos. Perfecto para tablas de quesos, aperitivos y como guarnición. Peso aproximado 450g. Conservar en el frío después de abrir.',
        precio: '9.50',
        enStock: true
    }
];

const WA_NUMBER = '50369204235';

// ============ I18N ============
const langMeta = {
    es: { flag: '🇪🇸', code: 'ES', htmlLang: 'es' },
    pt: { flag: '🇵🇹', code: 'PT', htmlLang: 'pt' },
    en: { flag: '🇺🇸', code: 'EN', htmlLang: 'en' },
};

const translations = {
    es: {
        // Navbar
        'nav-volver': 'Volver',
        'nav-inicio': 'Inicio',
        'nav-reservar': 'Reservar Mesa',

        // Hero
        'hero-label': 'Tienda Artesanal',
        'hero-title': 'Encurtidos <em>Artesanales</em>',
        'hero-desc': 'Tradición natural en cada frasco',
        'hero-body': 'Disfruta de nuestra selección de encurtidos artesanales elaborados en sal marina 100% natural con vinagre de manzana orgánico. Productos completamente naturales <strong>sin preservantes, colorantes ni aditivos</strong>, perfectos para acompañar tus platillos favoritos, tablas de quesos o aperitivos.',

        // Breadcrumb
        'bc-productos': 'Productos',
        'bc-encurtidos': 'Encurtidos Artesanales',

        // Sección
        'seccion-titulo': 'Colección de <em>Encurtidos Gourmet</em>',
        'seccion-desc': '100% naturales, sin preservantes, colorantes ni aditivos. Pura tradición artesanal.',

        // Cards
        'card-badge-artesanal': 'Artesanal',
        'card-badge-agotado': 'Agotado',
        'card-cta-ver': 'Ver detalle',
        'card-cta-nodisponible': 'No disponible',

        // Modal
        'modal-label': 'Encurtido Artesanal · Don Inacio',
        'modal-price-note': 'precio por frasco · 450g aprox.',
        'modal-btn-wsp': 'Pedir por WhatsApp',
        'modal-btn-agotado': 'Producto Agotado',
        'modal-wsp-msg': 'Hola! Me interesa el encurtido:',
        'modal-wsp-precio': 'Precio:',

        // Producto p0 — Cebolla Morada
        'p0-nombre': 'Encurtido de Cebolla Morada',
        'p0-desc': 'Encurtido artesanal de cebolla morada en sal marina 100% natural. Elaborado con vinagre de manzana orgánico, especias y cebolla morada fresca. Producto 100% natural sin preservantes, colorantes ni ningún tipo de aditivos. Ideal para acompañar carnes, ensaladas, hamburguesas y tacos. Peso aproximado 450g. Conservar en el frío después de abrir.',

        // Producto p1 — Vegetales
        'p1-nombre': 'Encurtido de Vegetales',
        'p1-desc': 'Encurtido artesanal de vegetales mixtos en sal marina 100% natural. Elaborado con vinagre de manzana orgánico, especias selectas y vegetales frescos. Producto 100% natural sin preservantes, colorantes ni ningún tipo de aditivos. Perfecto para tablas de quesos, aperitivos y como guarnición. Peso aproximado 450g. Conservar en el frío después de abrir.',
    },
    pt: {
        // Navbar
        'nav-volver': 'Voltar',
        'nav-inicio': 'Início',
        'nav-reservar': 'Reservar Mesa',

        // Hero
        'hero-label': 'Loja Artesanal',
        'hero-title': 'Pickles <em>Artesanais</em>',
        'hero-desc': 'Tradição natural em cada frasco',
        'hero-body': 'Desfrute da nossa seleção de pickles artesanais elaborados em sal marinho 100% natural com vinagre de maçã orgânico. Produtos completamente naturais <strong>sem conservantes, corantes nem aditivos</strong>, perfeitos para acompanhar os seus pratos favoritos, tábuas de queijos ou aperitivos.',

        // Breadcrumb
        'bc-produtos': 'Produtos',
        'bc-productos': 'Produtos',
        'bc-encurtidos': 'Pickles Artesanais',

        // Sección
        'seccion-titulo': 'Coleção de <em>Pickles Gourmet</em>',
        'seccion-desc': '100% naturais, sem conservantes, corantes nem aditivos. Pura tradição artesanal.',

        // Cards
        'card-badge-artesanal': 'Artesanal',
        'card-badge-agotado': 'Esgotado',
        'card-cta-ver': 'Ver detalhe',
        'card-cta-nodisponible': 'Indisponível',

        // Modal
        'modal-label': 'Pickle Artesanal · Don Inacio',
        'modal-price-note': 'preço por frasco · 450g aprox.',
        'modal-btn-wsp': 'Pedir pelo WhatsApp',
        'modal-btn-agotado': 'Produto Esgotado',
        'modal-wsp-msg': 'Olá! Tenho interesse no pickle:',
        'modal-wsp-precio': 'Preço:',

        // Produto p0 — Cebola Roxa
        'p0-nombre': 'Pickle de Cebola Roxa',
        'p0-desc': 'Pickle artesanal de cebola roxa em sal marinho 100% natural. Elaborado com vinagre de maçã orgânico, especiarias e cebola roxa fresca. Produto 100% natural sem conservantes, corantes nem quaisquer aditivos. Ideal para acompanhar carnes, saladas, hambúrgueres e tacos. Peso aproximado 450g. Conservar no frio após abrir.',

        // Produto p1 — Vegetais
        'p1-nombre': 'Pickle de Vegetais',
        'p1-desc': 'Pickle artesanal de vegetais mistos em sal marinho 100% natural. Elaborado com vinagre de maçã orgânico, especiarias selecionadas e vegetais frescos. Produto 100% natural sem conservantes, corantes nem quaisquer aditivos. Perfeito para tábuas de queijos, aperitivos e como guarnição. Peso aproximado 450g. Conservar no frio após abrir.',
    },
    en: {
        // Navbar
        'nav-volver': 'Back',
        'nav-inicio': 'Home',
        'nav-reservar': 'Book a Table',

        // Hero
        'hero-label': 'Artisan Store',
        'hero-title': 'Artisan <em>Pickles</em>',
        'hero-desc': 'Natural tradition in every jar',
        'hero-body': 'Enjoy our selection of artisan pickles made in 100% natural sea salt with organic apple cider vinegar. Completely natural products <strong>with no preservatives, colorings or additives</strong>, perfect for accompanying your favorite dishes, cheese boards or appetizers.',

        // Breadcrumb
        'bc-productos': 'Products',
        'bc-encurtidos': 'Artisan Pickles',

        // Sección
        'seccion-titulo': 'Our <em>Gourmet Pickle</em> Collection',
        'seccion-desc': '100% natural, no preservatives, colorings or additives. Pure artisan tradition.',

        // Cards
        'card-badge-artesanal': 'Artisan',
        'card-badge-agotado': 'Sold Out',
        'card-cta-ver': 'View details',
        'card-cta-nodisponible': 'Not available',

        // Modal
        'modal-label': 'Artisan Pickle · Don Inacio',
        'modal-price-note': 'price per jar · approx. 450g',
        'modal-btn-wsp': 'Order via WhatsApp',
        'modal-btn-agotado': 'Out of Stock',
        'modal-wsp-msg': 'Hello! I\'m interested in:',
        'modal-wsp-precio': 'Price:',

        // Product p0 — Red Onion
        'p0-nombre': 'Red Onion Pickle',
        'p0-desc': 'Artisan red onion pickle in 100% natural sea salt. Made with organic apple cider vinegar, spices and fresh red onion. 100% natural product with no preservatives, colorings or any additives. Ideal for accompanying meats, salads, burgers and tacos. Approximate weight 450g. Keep refrigerated after opening.',

        // Product p1 — Vegetables
        'p1-nombre': 'Mixed Vegetable Pickle',
        'p1-desc': 'Artisan mixed vegetable pickle in 100% natural sea salt. Made with organic apple cider vinegar, select spices and fresh vegetables. 100% natural product with no preservatives, colorings or any additives. Perfect for cheese boards, appetizers and as a side. Approximate weight 450g. Keep refrigerated after opening.',
    }
};

let currentLang = localStorage.getItem('doninacio_lang') || 'es';

function t(key) {
    return translations[currentLang]?.[key] ?? translations['es']?.[key] ?? key;
}

function applyTranslations(lang) {
    currentLang = lang;
    const tObj = translations[lang];
    if (!tObj) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (tObj[key] !== undefined) el.innerHTML = tObj[key];
    });

    document.documentElement.lang = langMeta[lang].htmlLang;

    const flagEl = document.querySelector('#langSwitcher .lang-flag');
    const codeEl = document.querySelector('#langSwitcher .lang-code');
    if (flagEl) flagEl.textContent = langMeta[lang].flag;
    if (codeEl) codeEl.textContent = langMeta[lang].code;

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('doninacio_lang', lang);

    // Re-render el grid con el nuevo idioma
    const grid = document.getElementById('productosGrid');
    if (grid) { grid.innerHTML = ''; cargarProductos(); }
}

// Toggle del selector
const langSwitcherEl = document.getElementById('langSwitcher');
const langCurrentBtn = document.getElementById('langCurrent');
if (langCurrentBtn) {
    langCurrentBtn.addEventListener('click', e => {
        e.stopPropagation();
        langSwitcherEl.classList.toggle('open');
        langCurrentBtn.setAttribute('aria-expanded', langSwitcherEl.classList.contains('open'));
    });
    document.addEventListener('click', () => {
        langSwitcherEl?.classList.remove('open');
        langCurrentBtn?.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            applyTranslations(btn.dataset.lang);
            langSwitcherEl.classList.remove('open');
            langCurrentBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// ============ RENDER GRID ============
function cargarProductos() {
    const grid = document.getElementById('productosGrid');
    if (!grid) return;

    productosEncurtidos.forEach((p, i) => {
        const nombre = t(`p${i}-nombre`) || p.nombre;
        const badgeTxt = p.enStock ? t('card-badge-artesanal') : t('card-badge-agotado');
        const ctaTxt = p.enStock ? t('card-cta-ver') : t('card-cta-nodisponible');

        const card = document.createElement('article');
        card.className = 'product-card' + (p.enStock ? '' : ' out-of-stock');
        card.style.animationDelay = `${i * 0.10}s`;

        if (p.enStock) {
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', nombre);
        }

        const badge = !p.enStock
            ? `<span class="out-of-stock-badge">${badgeTxt}</span>`
            : '';

        const cta = p.enStock
            ? `<span class="product-cta">
                    ${ctaTxt}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
               </span>`
            : `<span class="product-cta" style="color:var(--color-tierra);opacity:.6">${ctaTxt}</span>`;

        card.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${p.imagen}" alt="${nombre}" class="product-image" loading="lazy">
                ${badge}
            </div>
            <div class="product-content">
                <h2 class="product-name">${nombre}</h2>
                <div class="product-footer">
                    <div class="product-price">$${p.precio}</div>
                    ${cta}
                </div>
            </div>`;

        if (p.enStock) {
            card.addEventListener('click', () => abrirModal(p, i));
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirModal(p, i); }
            });
        }

        grid.appendChild(card);
    });
}

// ============ MODAL ============
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function abrirModal(p, idx) {
    const nombre = t(`p${idx}-nombre`) || p.nombre;
    const desc = t(`p${idx}-desc`) || p.descripcion;
    const label = t('modal-label');
    const priceNote = t('modal-price-note');
    const btnWsp = t('modal-btn-wsp');
    const btnAgot = t('modal-btn-agotado');
    const msgPrefix = t('modal-wsp-msg');
    const precioLbl = t('modal-wsp-precio');

    const waMsg = `${msgPrefix} ${nombre} – ${precioLbl} $${p.precio}`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    modalContent.innerHTML = `
        <div class="modal-body">
            <div class="modal-img-col">
                <img src="${p.imagen}" alt="${nombre}">
            </div>
            <div class="modal-info-col">
                <p class="modal-label">${label}</p>
                <h2 class="modal-title">${nombre}</h2>
                <p class="modal-price">$${p.precio}</p>
                <p class="modal-price-note">${priceNote}</p>
                <div class="modal-divider"></div>
                <p class="modal-description">${desc}</p>
                <div class="modal-actions">
                    ${p.enStock
            ? `<a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                ${btnWsp}
                           </a>`
            : `<button class="btn-whatsapp disabled" disabled>${btnAgot}</button>`
        }
                </div>
            </div>
        </div>`;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function cerrarModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

if (modalClose) modalClose.addEventListener('click', cerrarModal);
if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) cerrarModal();
    });
}
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') cerrarModal();
});

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ============ SCROLL TO TOP ============
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
});