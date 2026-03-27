/* ============================================
   DON INACIO — LICORES PAGE SCRIPT
   ============================================ */

// ============ DATOS DE PRODUCTOS ============
const productos = [
    {
        imagen: '../../extern-arch/fotos de productos/23.jpg',
        nombre: 'Licor de Mandarina',
        descripcion: 'Licor artesanal elaborado con mandarinas frescas y seleccionadas, maceradas para extraer sus aceites esenciales y aromas cítricos. Ideal para cócteles, postres o disfrutar solo con hielo. Presentación 750ml · 20% vol. alcohol.',
        precio: '15.50',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/21.jpg',
        nombre: 'Licor de Limón',
        descripcion: 'Licor de limón natural con un equilibrio perfecto entre dulzor y acidez. Elaborado con limones frescos mediante un proceso artesanal que preserva todo su sabor. Perfecto para preparar limoncellos caseros o cócteles refrescantes. Presentación 750ml · 22% vol. alcohol.',
        precio: '14.80',
        enStock: true
    },
    {
        imagen: '../../extern-arch/fotos de productos/22.jpg',
        nombre: 'Licor de Lima',
        descripcion: 'Licor de lima artesanal con notas cítricas vibrantes y frescas. Ideal para mojitos, margaritas y cócteles tropicales. Elaborado con limas seleccionadas y azúcar de caña. Presentación 750ml · 20% vol. alcohol.',
        precio: '14.95',
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
        'hero-title': 'Licores <em>Artesanales</em>',
        'hero-desc':  'Destilados con esencia natural, nuestra colección de licores captura los aromas cítricos más frescos y vibrantes. Cada botella es el resultado de un proceso artesanal que preserva la autenticidad y el carácter único de cada fruta seleccionada.',

        // Breadcrumb
        'bc-productos': 'Productos',
        'bc-licores':   'Licores',

        // Sección
        'seccion-titulo': 'Colección de <em>Licores Gourmet</em>',
        'seccion-desc':   'Sabores cítricos naturales y sofisticados, destilados con tradición artesanal.',

        // Cards
        'card-badge-artesanal':  'Artesanal',
        'card-badge-agotado':    'Agotado',
        'card-cta-ver':          'Ver detalle',
        'card-cta-nodisponible': 'No disponible',

        // Modal
        'modal-label':       'Licor Artesanal · Don Inacio',
        'modal-btn-wsp':     'Pedir por WhatsApp',
        'modal-btn-agotado': 'Producto Agotado',
        'modal-wsp-msg':     '¡Hola! Me interesa el licor:',
        'modal-wsp-precio':  'Precio:',

        // Producto p0 — Mandarina
        'p0-nombre': 'Licor de Mandarina',
        'p0-desc':   'Licor artesanal elaborado con mandarinas frescas y seleccionadas, maceradas para extraer sus aceites esenciales y aromas cítricos. Ideal para cócteles, postres o disfrutar solo con hielo. Presentación 750ml · 20% vol. alcohol.',

        // Producto p1 — Limón
        'p1-nombre': 'Licor de Limón',
        'p1-desc':   'Licor de limón natural con un equilibrio perfecto entre dulzor y acidez. Elaborado con limones frescos mediante un proceso artesanal que preserva todo su sabor. Perfecto para preparar limoncellos caseros o cócteles refrescantes. Presentación 750ml · 22% vol. alcohol.',

        // Producto p2 — Lima
        'p2-nombre': 'Licor de Lima',
        'p2-desc':   'Licor de lima artesanal con notas cítricas vibrantes y frescas. Ideal para mojitos, margaritas y cócteles tropicales. Elaborado con limas seleccionadas y azúcar de caña. Presentación 750ml · 20% vol. alcohol.',
    },
    pt: {
        // Navbar
        'nav-volver':   'Voltar',
        'nav-inicio':   'Início',
        'nav-reservar': 'Reservar Mesa',

        // Hero
        'hero-label': 'Loja Artesanal',
        'hero-title': 'Licores <em>Artesanais</em>',
        'hero-desc':  'Destilados com essência natural, a nossa coleção de licores captura os aromas cítricos mais frescos e vibrantes. Cada garrafa é o resultado de um processo artesanal que preserva a autenticidade e o caráter único de cada fruta selecionada.',

        // Breadcrumb
        'bc-produtos':  'Produtos',
        'bc-productos': 'Produtos',
        'bc-licores':   'Licores',

        // Sección
        'seccion-titulo': 'Coleção de <em>Licores Gourmet</em>',
        'seccion-desc':   'Sabores cítricos naturais e sofisticados, destilados com tradição artesanal.',

        // Cards
        'card-badge-artesanal':  'Artesanal',
        'card-badge-agotado':    'Esgotado',
        'card-cta-ver':          'Ver detalhe',
        'card-cta-nodisponible': 'Indisponível',

        // Modal
        'modal-label':       'Licor Artesanal · Don Inacio',
        'modal-btn-wsp':     'Pedir pelo WhatsApp',
        'modal-btn-agotado': 'Produto Esgotado',
        'modal-wsp-msg':     'Olá! Tenho interesse no licor:',
        'modal-wsp-precio':  'Preço:',

        // Produto p0 — Tangerina
        'p0-nombre': 'Licor de Tangerina',
        'p0-desc':   'Licor artesanal elaborado com tangerinas frescas e selecionadas, maceradas para extrair os seus óleos essenciais e aromas cítricos. Ideal para cocktails, sobremesas ou para saborear com gelo. Apresentação 750ml · 20% vol. álcool.',

        // Produto p1 — Limão
        'p1-nombre': 'Licor de Limão',
        'p1-desc':   'Licor de limão natural com um equilíbrio perfeito entre doçura e acidez. Elaborado com limões frescos mediante um processo artesanal que preserva todo o seu sabor. Perfeito para preparar limoncellos caseiros ou cocktails refrescantes. Apresentação 750ml · 22% vol. álcool.',

        // Produto p2 — Lima
        'p2-nombre': 'Licor de Lima',
        'p2-desc':   'Licor de lima artesanal com notas cítricas vibrantes e frescas. Ideal para mojitos, margaritas e cocktails tropicais. Elaborado com limas selecionadas e açúcar de cana. Apresentação 750ml · 20% vol. álcool.',
    },
    en: {
        // Navbar
        'nav-volver':   'Back',
        'nav-inicio':   'Home',
        'nav-reservar': 'Book a Table',

        // Hero
        'hero-label': 'Artisan Store',
        'hero-title': 'Artisan <em>Liqueurs</em>',
        'hero-desc':  'Distilled with natural essence, our liqueur collection captures the freshest and most vibrant citrus aromas. Each bottle is the result of an artisan process that preserves the authenticity and unique character of every selected fruit.',

        // Breadcrumb
        'bc-productos': 'Products',
        'bc-licores':   'Liqueurs',

        // Sección
        'seccion-titulo': 'Our <em>Gourmet Liqueur</em> Collection',
        'seccion-desc':   'Natural, sophisticated citrus flavors, distilled with artisan tradition.',

        // Cards
        'card-badge-artesanal':  'Artisan',
        'card-badge-agotado':    'Sold Out',
        'card-cta-ver':          'View details',
        'card-cta-nodisponible': 'Not available',

        // Modal
        'modal-label':       'Artisan Liqueur · Don Inacio',
        'modal-btn-wsp':     'Order via WhatsApp',
        'modal-btn-agotado': 'Out of Stock',
        'modal-wsp-msg':     'Hello! I\'m interested in:',
        'modal-wsp-precio':  'Price:',

        // Product p0 — Mandarin
        'p0-nombre': 'Mandarin Liqueur',
        'p0-desc':   'Artisan liqueur made with fresh, selected mandarins, macerated to extract their essential oils and citrus aromas. Ideal for cocktails, desserts or enjoyed on its own over ice. 750ml · 20% vol. alcohol.',

        // Product p1 — Lemon
        'p1-nombre': 'Lemon Liqueur',
        'p1-desc':   'Natural lemon liqueur with a perfect balance of sweetness and acidity. Made with fresh lemons through an artisan process that preserves the full flavor. Perfect for homemade limoncello or refreshing cocktails. 750ml · 22% vol. alcohol.',

        // Product p2 — Lime
        'p2-nombre': 'Lime Liqueur',
        'p2-desc':   'Artisan lime liqueur with vibrant, fresh citrus notes. Ideal for mojitos, margaritas and tropical cocktails. Made with selected limes and cane sugar. 750ml · 20% vol. alcohol.',
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
        const nombre   = t(`p${i}-nombre`) || p.nombre;
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
                <div class="card-footer">
                    <span class="card-precio">$${p.precio}</span>
                    ${p.enStock
                        ? `<span class="card-cta">
                                ${ctaTxt}
                                <span class="material-symbols-outlined">arrow_forward</span>
                           </span>`
                        : `<span class="card-cta" style="color:var(--color-tierra)">${ctaTxt}</span>`
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