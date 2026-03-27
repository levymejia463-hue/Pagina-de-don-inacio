/* ============================================
   DON INACIO — MANTECA PAGE SCRIPT
   ============================================ */

// ============ DATOS DE PRODUCTOS ============
const productos = [
    {
        imagen: '../../extern-arch/fotos de productos/26.jpg',
        nombre: 'Manteca 100% Natural de Cerdo – Don Inacio',
        descripcion: 'Manteca artesanal 100% natural de cerdo elaborada según receta tradicional portuguesa. Producto gourmet sin aditivos, conservantes ni colorantes. Ideal para cocina tradicional, freír, confitar y dar sabor auténtico a tus platillos. Perfecta para tortillas, frijoles, tamales y recetas que requieran grasa pura de cerdo. Presentación en frasco de vidrio. Conservar en lugar fresco y seco.',
        precio: '8.50',
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
        'nav-volver':   'Volver',
        'nav-inicio':   'Inicio',
        'nav-reservar': 'Reservar Mesa',

        // Hero
        'hero-label': 'Tienda Artesanal',
        'hero-title': 'Manteca <em>Natural</em>',
        'hero-desc':  'Elaborada según la auténtica receta tradicional portuguesa, nuestra manteca 100% natural de cerdo es un producto gourmet sin aditivos, conservantes ni colorantes. Pureza y sabor en cada cucharada.',

        // Breadcrumb
        'bc-productos': 'Productos',
        'bc-manteca':   'Manteca Natural',

        // Sección
        'seccion-titulo': 'Producto <em>Artesanal Gourmet</em>',
        'seccion-desc':   'Tradición portuguesa en su forma más pura, sin artificios ni aditivos.',

        // Cards
        'card-badge-artesanal':  'Artesanal',
        'card-badge-agotado':    'Agotado',
        'card-cta-ver':          'Ver detalle',
        'card-cta-nodisponible': 'No disponible',

        // Modal
        'modal-label':       'Producto Artesanal · Don Inacio',
        'modal-btn-wsp':     'Pedir por WhatsApp',
        'modal-btn-agotado': 'Producto Agotado',
        'modal-wsp-msg':     'Hola! Me interesa el producto:',
        'modal-wsp-precio':  'Precio:',

        // Producto p0
        'p0-nombre': 'Manteca 100% Natural de Cerdo – Don Inacio',
        'p0-desc':   'Manteca artesanal 100% natural de cerdo elaborada según receta tradicional portuguesa. Producto gourmet sin aditivos, conservantes ni colorantes. Ideal para cocina tradicional, freír, confitar y dar sabor auténtico a tus platillos. Perfecta para tortillas, frijoles, tamales y recetas que requieran grasa pura de cerdo. Presentación en frasco de vidrio. Conservar en lugar fresco y seco.',
    },
    pt: {
        // Navbar
        'nav-volver':   'Voltar',
        'nav-inicio':   'Início',
        'nav-reservar': 'Reservar Mesa',

        // Hero
        'hero-label': 'Loja Artesanal',
        'hero-title': 'Banha <em>Natural</em>',
        'hero-desc':  'Elaborada segundo a autêntica receita tradicional portuguesa, a nossa banha 100% natural de porco é um produto gourmet sem aditivos, conservantes nem corantes. Pureza e sabor em cada colherada.',

        // Breadcrumb
        'bc-produtos': 'Produtos',
        'bc-productos': 'Produtos',
        'bc-manteca':  'Banha Natural',

        // Sección
        'seccion-titulo': 'Produto <em>Artesanal Gourmet</em>',
        'seccion-desc':   'Tradição portuguesa na sua forma mais pura, sem artifícios nem aditivos.',

        // Cards
        'card-badge-artesanal':  'Artesanal',
        'card-badge-agotado':    'Esgotado',
        'card-cta-ver':          'Ver detalhe',
        'card-cta-nodisponible': 'Indisponível',

        // Modal
        'modal-label':       'Produto Artesanal · Don Inacio',
        'modal-btn-wsp':     'Pedir pelo WhatsApp',
        'modal-btn-agotado': 'Produto Esgotado',
        'modal-wsp-msg':     'Olá! Tenho interesse no produto:',
        'modal-wsp-precio':  'Preço:',

        // Produto p0
        'p0-nombre': 'Banha 100% Natural de Porco – Don Inacio',
        'p0-desc':   'Banha artesanal 100% natural de porco elaborada segundo receita tradicional portuguesa. Produto gourmet sem aditivos, conservantes nem corantes. Ideal para cozinha tradicional, fritar, confitar e dar sabor autêntico às suas receitas. Perfeita para ovos, feijão, pratos típicos e receitas que requeiram gordura pura de porco. Apresentação em frasco de vidro. Conservar em local fresco e seco.',
    },
    en: {
        // Navbar
        'nav-volver':   'Back',
        'nav-inicio':   'Home',
        'nav-reservar': 'Book a Table',

        // Hero
        'hero-label': 'Artisan Store',
        'hero-title': 'Natural <em>Lard</em>',
        'hero-desc':  'Crafted following the authentic traditional Portuguese recipe, our 100% natural pork lard is a gourmet product with no additives, preservatives or colorings. Pure flavor in every spoonful.',

        // Breadcrumb
        'bc-productos': 'Products',
        'bc-manteca':   'Natural Lard',

        // Sección
        'seccion-titulo': 'Artisan <em>Gourmet Product</em>',
        'seccion-desc':   'Portuguese tradition in its purest form, with no artifice or additives.',

        // Cards
        'card-badge-artesanal':  'Artisan',
        'card-badge-agotado':    'Sold Out',
        'card-cta-ver':          'View details',
        'card-cta-nodisponible': 'Not available',

        // Modal
        'modal-label':       'Artisan Product · Don Inacio',
        'modal-btn-wsp':     'Order via WhatsApp',
        'modal-btn-agotado': 'Out of Stock',
        'modal-wsp-msg':     'Hello! I\'m interested in:',
        'modal-wsp-precio':  'Price:',

        // Product p0
        'p0-nombre': '100% Natural Pork Lard – Don Inacio',
        'p0-desc':   '100% natural artisan pork lard made following a traditional Portuguese recipe. Gourmet product with no additives, preservatives or colorings. Ideal for traditional cooking, frying, confit and adding authentic flavor to your dishes. Perfect for tortillas, beans, tamales and any recipe requiring pure pork fat. Presented in a glass jar. Store in a cool, dry place.',
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
    if (grid) { grid.innerHTML = ''; renderGrid(); }
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
function renderGrid() {
    const grid = document.getElementById('productosGrid');
    if (!grid) return;

    productos.forEach((p, i) => {
        const nombre  = t(`p${i}-nombre`) || p.nombre;
        const badgeTxt = p.enStock ? t('card-badge-artesanal') : t('card-badge-agotado');
        const ctaTxt   = p.enStock ? t('card-cta-ver') : t('card-cta-nodisponible');

        const card = document.createElement('article');
        card.className = 'producto-card' + (p.enStock ? '' : ' sin-stock');
        card.style.animationDelay = `${i * 0.06}s`;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', p.enStock ? '0' : '-1');
        card.setAttribute('aria-label', nombre);

        card.innerHTML = `
            <div class="card-img-wrap">
                <img src="${p.imagen}" alt="${nombre}" loading="lazy">
                <div class="card-img-overlay"></div>
                <span class="card-badge ${p.enStock ? '' : 'agotado'}">${badgeTxt}</span>
            </div>
            <div class="card-body">
                <h3 class="card-nombre">${nombre}</h3>
                <p class="card-desc-preview">${t(`p${i}-desc`) || p.descripcion}</p>
                <div class="card-footer">
                    <span class="card-precio">$${p.precio}</span>
                    ${p.enStock
                        ? `<span class="card-cta">
                                ${ctaTxt}
                                <span class="material-symbols-outlined">arrow_forward</span>
                           </span>`
                        : `<span class="card-cta" style="color:#aaa">${ctaTxt}</span>`
                    }
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
const modalClose   = document.getElementById('modalClose');

function abrirModal(p, idx) {
    const nombre    = t(`p${idx}-nombre`) || p.nombre;
    const desc      = t(`p${idx}-desc`)   || p.descripcion;
    const label     = t('modal-label');
    const btnWsp    = t('modal-btn-wsp');
    const btnAgot   = t('modal-btn-agotado');
    const msgPrefix = t('modal-wsp-msg');
    const precioLbl = t('modal-wsp-precio');

    const waMsg = `${msgPrefix} ${nombre} – ${precioLbl} $${p.precio}`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    modalContent.innerHTML = `
        <div class="modal-img-col">
            <img src="${p.imagen}" alt="${nombre}">
        </div>
        <div class="modal-info-col">
            <p class="modal-label">${label}</p>
            <h2 class="modal-nombre">${nombre}</h2>
            <p class="modal-precio">$${p.precio}</p>
            <div class="modal-divider"></div>
            <p class="modal-descripcion">${desc}</p>
            <div class="modal-acciones">
                ${p.enStock
                    ? `<button class="btn-wsp" onclick="window.open('${waUrl}','_blank','noopener,noreferrer')">
                            <svg class="wsp-icon" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            ${btnWsp}
                       </button>`
                    : `<button class="btn-wsp disabled" disabled>${btnAgot}</button>`
                }
            </div>
        </div>`;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
}

function cerrarModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
}

if (modalClose)   modalClose.addEventListener('click', cerrarModal);
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