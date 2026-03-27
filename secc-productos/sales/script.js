/* ============================================
   DON INACIO – SALES GOURMET SCRIPT
   ============================================ */

// ============ I18N META ============
const langMeta = {
    es: { flag: '🇪🇸', code: 'ES', htmlLang: 'es' },
    pt: { flag: '🇵🇹', code: 'PT', htmlLang: 'pt' },
    en: { flag: '🇺🇸', code: 'EN', htmlLang: 'en' },
};

// ============ TRANSLATIONS ============
const translations = {
    es: {
        /* Navbar */
        'nav-volver': 'Volver',
        'nav-inicio': 'Inicio',
        'nav-reservar': 'Reservar Mesa',
        /* Hero */
        'hero-label': 'Tienda Artesanal',
        'hero-title': 'Sales <em>Gourmet</em>',
        'hero-subtitle': 'Sabor artesanal en cada grano',
        'hero-desc': 'Eleva tus platillos con nuestra colección de sales gourmet artesanales. Elaboradas con <strong>sal marina 100% natural</strong> y combinadas con especias, hierbas aromáticas y sabores únicos. Desde la intensidad ahumada hasta la frescura cítrica, encuentra la sal perfecta para cada ocasión culinaria.',
        /* Breadcrumb */
        'bc-productos': 'Productos',
        'bc-sales': 'Sales Gourmet',
        /* Sección */
        'seccion-titulo': 'Colección de <em>Sales Gourmet</em>',
        'seccion-desc': 'Sal marina 100% natural con especias y hierbas aromáticas artesanales.',
        /* Cards */
        'card-badge-agotado': 'Agotado',
        'card-cta-ver': 'Ver detalle',
        'card-cta-nodisponible': 'No disponible',
        /* Modal */
        'modal-sublabel': 'Sal Gourmet · Don Inacio',
        'modal-precio-nota': 'precio por unidad · sal marina artesanal',
        'modal-btn-wsp': 'Pedir por WhatsApp',
        'modal-btn-agotado': 'Producto Agotado',
        'modal-wsp-msg': 'Hola! Me interesa la Sal Gourmet:',
        'modal-wsp-precio': 'Precio:',
        /* Productos */
        'p0-nombre': 'Sal Trío Cítrico',
        'p0-desc': 'Sal marina 100% natural con especias y hierbas aromáticas. Ideal para pollo a la parrilla, pescados y ensaladas. Una combinación perfecta de sabores cítricos que realzan el sabor natural de tus ingredientes.',
        'p1-nombre': 'Sal Ahumada',
        'p1-desc': 'Sal marina 100% natural ahumada naturalmente. Ideal para todo tipo de carnes después de parrilladas, guisos y pizza. El toque ahumado perfecto para dar profundidad a tus platos.',
        'p2-nombre': 'Sal al Vino Tinto',
        'p2-desc': 'Sal marina 100% natural con especias y hierbas aromáticas. Perfecta para carnes rojas, guisos, y carnes a la parrilla. El vino tinto aporta un sabor robusto y complejo.',
        'p3-nombre': 'Sal Lemon Pepper',
        'p3-desc': 'Sal marina 100% natural con apio, cebolla, ajo y especias. Ideal para carnes rojas, aves, vegetales asados, ensaladas y papas. Una mezcla clásica y versátil.',
        'p4-nombre': 'Sal Picante',
        'p4-desc': 'Sal marina 100% natural con especias y hierbas aromáticas. Ideal para carnes, huevos, papa frita y salsas. Aporta el toque picante perfecto para los amantes del sabor intenso.',
        'p5-nombre': 'Sal Oriental',
        'p5-desc': 'Sal marina 100% natural con apio, cebolla, ajo y especias. Ideal para cerdo a la parrilla y guisos. Inspirada en los sabores tradicionales de Oriente.',
        'p6-nombre': 'Sal de Naranja',
        'p6-desc': 'Limón, sal marina 100% natural, especias y hierbas aromáticas. Ideal para pescado, mariscos, pollo y ensaladas frescas. El cítrico de naranja aporta frescura y brillo.',
        'p7-nombre': 'Sal Cítrica',
        'p7-desc': 'Limón, sal marina 100% natural, especias y hierbas aromáticas. Perfecta para pescado, mariscos, pollo y ensaladas frescas. Una variante cítrica versátil y refrescante.',
        'p8-nombre': 'Sal Mediterránea',
        'p8-desc': 'Sal marina 100% natural con especias y hierbas aromáticas. Ideal para pescado y guisos. Captura la esencia de la cocina mediterránea en cada grano.',
        'p9-nombre': 'Sal Apio',
        'p9-desc': 'Sal marina 100% natural con especias, hierbas aromáticas y apio. Versátil para ensaladas, guisos y carnes. El apio aporta un sabor fresco y aromático.',
    },

    pt: {
        /* Navbar */
        'nav-volver': 'Voltar',
        'nav-inicio': 'Início',
        'nav-reservar': 'Reservar Mesa',
        /* Hero */
        'hero-label': 'Loja Artesanal',
        'hero-title': 'Sais <em>Gourmet</em>',
        'hero-subtitle': 'Sabor artesanal em cada grão',
        'hero-desc': 'Eleve os seus pratos com a nossa coleção de sais gourmet artesanais. Elaborados com <strong>sal marinho 100% natural</strong> e combinados com especiarias, ervas aromáticas e sabores únicos. Desde a intensidade defumada até a frescura cítrica, encontre o sal perfeito para cada ocasião culinária.',
        /* Breadcrumb */
        'bc-produtos': 'Produtos',
        'bc-sales': 'Sais Gourmet',
        /* Sección */
        'seccion-titulo': 'Coleção de <em>Sais Gourmet</em>',
        'seccion-desc': 'Sal marinho 100% natural com especiarias e ervas aromáticas artesanais.',
        /* Cards */
        'card-badge-agotado': 'Esgotado',
        'card-cta-ver': 'Ver detalhe',
        'card-cta-nodisponible': 'Indisponível',
        /* Modal */
        'modal-sublabel': 'Sal Gourmet · Don Inacio',
        'modal-precio-nota': 'preço por unidade · sal marinho artesanal',
        'modal-btn-wsp': 'Pedir pelo WhatsApp',
        'modal-btn-agotado': 'Produto Esgotado',
        'modal-wsp-msg': 'Olá! Tenho interesse no Sal Gourmet:',
        'modal-wsp-precio': 'Preço:',
        /* Produtos */
        'p0-nombre': 'Sal Trio Cítrico',
        'p0-desc': 'Sal marinho 100% natural com especiarias e ervas aromáticas. Ideal para frango na grelha, peixes e saladas. Uma combinação perfeita de sabores cítricos que realçam o sabor natural dos seus ingredientes.',
        'p1-nombre': 'Sal Defumado',
        'p1-desc': 'Sal marinho 100% natural defumado naturalmente. Ideal para todo o tipo de carnes após grelhados, guisados e pizza. O toque defumado perfeito para dar profundidade aos seus pratos.',
        'p2-nombre': 'Sal ao Vinho Tinto',
        'p2-desc': 'Sal marinho 100% natural com especiarias e ervas aromáticas. Perfeito para carnes vermelhas, guisados e carnes na grelha. O vinho tinto confere um sabor robusto e complexo.',
        'p3-nombre': 'Sal Lemon Pepper',
        'p3-desc': 'Sal marinho 100% natural com aipo, cebola, alho e especiarias. Ideal para carnes vermelhas, aves, legumes assados, saladas e batatas. Uma mistura clássica e versátil.',
        'p4-nombre': 'Sal Picante',
        'p4-desc': 'Sal marinho 100% natural com especiarias e ervas aromáticas. Ideal para carnes, ovos, batata frita e molhos. Traz o toque picante perfeito para os amantes do sabor intenso.',
        'p5-nombre': 'Sal Oriental',
        'p5-desc': 'Sal marinho 100% natural com aipo, cebola, alho e especiarias. Ideal para porco na grelha e guisados. Inspirado nos sabores tradicionais do Oriente.',
        'p6-nombre': 'Sal de Laranja',
        'p6-desc': 'Limão, sal marinho 100% natural, especiarias e ervas aromáticas. Ideal para peixe, mariscos, frango e saladas frescas. O cítrico de laranja traz frescura e brilho.',
        'p7-nombre': 'Sal Cítrico',
        'p7-desc': 'Limão, sal marinho 100% natural, especiarias e ervas aromáticas. Perfeito para peixe, mariscos, frango e saladas frescas. Uma variante cítrica versátil e refrescante.',
        'p8-nombre': 'Sal Mediterrâneo',
        'p8-desc': 'Sal marinho 100% natural com especiarias e ervas aromáticas. Ideal para peixe e guisados. Captura a essência da cozinha mediterrânea em cada grão.',
        'p9-nombre': 'Sal Aipo',
        'p9-desc': 'Sal marinho 100% natural com especiarias, ervas aromáticas e aipo. Versátil para saladas, guisados e carnes. O aipo traz um sabor fresco e aromático.',
    },

    en: {
        /* Navbar */
        'nav-volver': 'Back',
        'nav-inicio': 'Home',
        'nav-reservar': 'Book a Table',
        /* Hero */
        'hero-label': 'Artisan Shop',
        'hero-title': 'Gourmet <em>Salts</em>',
        'hero-subtitle': 'Artisan flavor in every grain',
        'hero-desc': 'Elevate your dishes with our collection of artisan gourmet salts. Crafted from <strong>100% natural sea salt</strong> blended with spices, aromatic herbs, and unique flavors. From smoky intensity to citrus freshness, find the perfect salt for every culinary occasion.',
        /* Breadcrumb */
        'bc-productos': 'Products',
        'bc-sales': 'Gourmet Salts',
        /* Sección */
        'seccion-titulo': 'Our <em>Gourmet Salt</em> Collection',
        'seccion-desc': '100% natural sea salt with artisan spices and aromatic herbs.',
        /* Cards */
        'card-badge-agotado': 'Sold Out',
        'card-cta-ver': 'View details',
        'card-cta-nodisponible': 'Unavailable',
        /* Modal */
        'modal-sublabel': 'Gourmet Salt · Don Inacio',
        'modal-precio-nota': 'price per unit · artisan sea salt',
        'modal-btn-wsp': 'Order via WhatsApp',
        'modal-btn-agotado': 'Product Sold Out',
        'modal-wsp-msg': 'Hi! I\'m interested in the Gourmet Salt:',
        'modal-wsp-precio': 'Price:',
        /* Products */
        'p0-nombre': 'Citrus Trio Salt',
        'p0-desc': '100% natural sea salt with spices and aromatic herbs. Ideal for grilled chicken, fish and salads. A perfect blend of citrus flavors that enhance the natural taste of your ingredients.',
        'p1-nombre': 'Smoked Salt',
        'p1-desc': '100% natural sea salt, naturally smoked. Ideal for all types of meats after grilling, stews and pizza. The perfect smoky touch to add depth to your dishes.',
        'p2-nombre': 'Red Wine Salt',
        'p2-desc': '100% natural sea salt with spices and aromatic herbs. Perfect for red meats, stews and grilled meats. The red wine brings a robust and complex flavor.',
        'p3-nombre': 'Lemon Pepper Salt',
        'p3-desc': '100% natural sea salt with celery, onion, garlic and spices. Ideal for red meats, poultry, roasted vegetables, salads and potatoes. A classic and versatile blend.',
        'p4-nombre': 'Spicy Salt',
        'p4-desc': '100% natural sea salt with spices and aromatic herbs. Ideal for meats, eggs, french fries and sauces. Brings the perfect spicy kick for lovers of intense flavor.',
        'p5-nombre': 'Oriental Salt',
        'p5-desc': '100% natural sea salt with celery, onion, garlic and spices. Ideal for grilled pork and stews. Inspired by the traditional flavors of the East.',
        'p6-nombre': 'Orange Salt',
        'p6-desc': 'Lemon, 100% natural sea salt, spices and aromatic herbs. Ideal for fish, seafood, chicken and fresh salads. The orange citrus brings freshness and brightness.',
        'p7-nombre': 'Citrus Salt',
        'p7-desc': 'Lemon, 100% natural sea salt, spices and aromatic herbs. Perfect for fish, seafood, chicken and fresh salads. A versatile and refreshing citrus variant.',
        'p8-nombre': 'Mediterranean Salt',
        'p8-desc': '100% natural sea salt with spices and aromatic herbs. Ideal for fish and stews. Captures the essence of Mediterranean cuisine in every grain.',
        'p9-nombre': 'Celery Salt',
        'p9-desc': '100% natural sea salt with spices, aromatic herbs and celery. Versatile for salads, stews and meats. The celery brings a fresh and aromatic flavor.',
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

    // Re-render grid with new language
    const grid = document.getElementById('productosGrid');
    if (grid) { grid.innerHTML = ''; renderGrid(); }
}

// ============ LANG SWITCHER TOGGLE ============
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

// ============ DATOS DE PRODUCTOS ============
const productosSales = [
    {
        imagen: '../../extern-arch/sales/10.png',
        precio: '4.00',
        enStock: true
    },
    {
        imagen: '../../extern-arch/sales/9.png',
        precio: '4.00',
        enStock: true
    },
    {
        imagen: '../../extern-arch/sales/8.png',
        precio: '4.00',
        enStock: true
    },
    {
        imagen: '../../extern-arch/sales/7.png',
        precio: '4.00',
        enStock: true
    },
    {
        imagen: '../../extern-arch/sales/5.png',
        precio: '4.00',
        enStock: true
    },
    {
        imagen: '../../extern-arch/sales/4.png',
        precio: '4.00',
        enStock: true
    },
    {
        imagen: '../../extern-arch/sales/11.png',
        precio: '4.00',
        enStock: true
    },
    {
        imagen: '../../extern-arch/sales/2.png',
        precio: '4.00',
        enStock: true
    },
    {
        imagen: '../../extern-arch/sales/1.png',
        precio: '4.00',
        enStock: true
    },
    {
        imagen: '../../extern-arch/sales/3.png',
        precio: '4.00',
        enStock: true
    }
];

const WA_NUMBER = '50369204235';

// ============ RENDER GRID ============
function renderGrid() {
    const grid = document.getElementById('productosGrid');
    if (!grid) return;

    productosSales.forEach((p, i) => {
        const nombre = t(`p${i}-nombre`);
        const ctaTxt = p.enStock ? t('card-cta-ver') : t('card-cta-nodisponible');

        const card = document.createElement('article');
        card.className = 'product-card' + (p.enStock ? '' : ' out-of-stock');
        card.style.animationDelay = `${i * 0.06}s`;

        if (p.enStock) {
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', nombre);
        }

        const badge = !p.enStock
            ? `<span class="out-of-stock-badge">${t('card-badge-agotado')}</span>`
            : '';

        const cta = p.enStock
            ? `<span class="product-cta">
                    ${ctaTxt}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
               </span>`
            : `<span class="product-cta" style="color:var(--color-tierra);opacity:.5;font-size:0.72rem">${ctaTxt}</span>`;

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
    const nombre = t(`p${idx}-nombre`);
    const desc = t(`p${idx}-desc`);
    const sublabel = t('modal-sublabel');
    const precioNota = t('modal-precio-nota');
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
                <p class="modal-label">${sublabel}</p>
                <h2 class="modal-title">${nombre}</h2>
                <p class="modal-price">$${p.precio}</p>
                <p class="modal-price-note">${precioNota}</p>
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
    // NOTE: renderGrid() is already called inside applyTranslations() — do NOT call it again here.
});