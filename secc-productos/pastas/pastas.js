/* ============================================
   DON INACIO — PASTAS Y SALSAS GOURMET SCRIPT
   ============================================ */

// ============ DATOS POR SECCIÓN ============
const salsas = [
    {
        imagen: '../../extern-arch/fotos de productos/14.jpg',
        nombre: 'Salsa de Tomate Gourmet',
        descripcion: 'Salsa de tomate artesanal elaborada con tomates maduros seleccionados, albahaca fresca y aceite de oliva. Sin conservantes ni colorantes. Ideal para pastas, pizzas, bruschetas y como base para guisos. Receta portuguesa tradicional. Presentación 300g.',
        precio: '6.50',
        enStock: true,
        grupo: 'salsa'
    }
];

const pastas = [
    {
        imagen: '../../extern-arch/fotos de productos/15.jpg',
        nombre: 'Pasta de Pimentón Dulce Ahumado Gourmet',
        descripcion: 'Pasta artesanal de pimentón dulce con un delicado toque ahumado. Elaborada con pimientos rojos seleccionados mediante receta portuguesa tradicional. Sin conservantes, colorantes ni aditivos. Perfecta para arroces, guisos, carnes y como untable. Presentación 300g.',
        precio: '7.20',
        enStock: true,
        grupo: 'pasta'
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
        'hero-title': 'Pastas y Salsas <em>Gourmet</em>',
        'hero-desc': 'Sabor mediterráneo auténtico',
        'hero-body': 'Descubre nuestras pastas gourmet elaboradas artesanalmente siguiendo recetas portuguesas tradicionales. Productos 100% naturales <strong>sin conservantes, colorantes ni aditivos</strong>, perfectos para elevar tus platos con auténticos sabores mediterráneos.',

        // Breadcrumb
        'bc-productos': 'Productos',
        'bc-pastas': 'Pastas y Salsas Gourmet',

        // Sección
        'seccion-titulo': 'Colección de <em>Pastas y Salsas Gourmet</em>',
        'seccion-desc': 'Recetas portuguesas tradicionales. 100% naturales, sin conservantes ni aditivos.',
        'subsec-salsas': 'Salsas',
        'subsec-pastas': 'Pastas',

        // Cards
        'card-badge-artesanal': 'Artesanal',
        'card-badge-agotado': 'Agotado',
        'card-cta-ver': 'Ver detalle',
        'card-cta-nodisponible': 'No disponible',

        // Modal
        'modal-sublabel': 'Pasta y Salsa Gourmet · Don Inacio',
        'modal-price-note': 'precio por unidad · 300g',
        'modal-btn-wsp': 'Pedir por WhatsApp',
        'modal-btn-agotado': 'Producto Agotado',
        'modal-wsp-msg': 'Hola! Me interesa:',
        'modal-wsp-precio': 'Precio:',

        // Productos — salsas (índices globales: s0, s1 ...)
        's0-nombre': 'Salsa de Tomate Gourmet',
        's0-desc': 'Salsa de tomate artesanal elaborada con tomates maduros seleccionados, albahaca fresca y aceite de oliva. Sin conservantes ni colorantes. Ideal para pastas, pizzas, bruschetas y como base para guisos. Receta portuguesa tradicional. Presentación 300g.',

        // Productos — pastas (índices globales: p0, p1 ...)
        'p0-nombre': 'Pasta de Pimentón Dulce Ahumado Gourmet',
        'p0-desc': 'Pasta artesanal de pimentón dulce con un delicado toque ahumado. Elaborada con pimientos rojos seleccionados mediante receta portuguesa tradicional. Sin conservantes, colorantes ni aditivos. Perfecta para arroces, guisos, carnes y como untable. Presentación 300g.',
    },
    pt: {
        // Navbar
        'nav-volver': 'Voltar',
        'nav-inicio': 'Início',
        'nav-reservar': 'Reservar Mesa',

        // Hero
        'hero-label': 'Loja Artesanal',
        'hero-title': 'Massas e Molhos <em>Gourmet</em>',
        'hero-desc': 'Sabor mediterrâneo autêntico',
        'hero-body': 'Descubra as nossas massas gourmet elaboradas artesanalmente seguindo receitas portuguesas tradicionais. Produtos 100% naturais <strong>sem conservantes, corantes nem aditivos</strong>, perfeitos para elevar os seus pratos com autênticos sabores mediterrâneos.',

        // Breadcrumb
        'bc-produtos': 'Produtos',
        'bc-pastas': 'Massas e Molhos Gourmet',
        'bc-productos': 'Produtos',

        // Sección
        'seccion-titulo': 'Coleção de <em>Massas e Molhos Gourmet</em>',
        'seccion-desc': 'Receitas portuguesas tradicionais. 100% naturais, sem conservantes nem aditivos.',
        'subsec-salsas': 'Molhos',
        'subsec-pastas': 'Massas',

        // Cards
        'card-badge-artesanal': 'Artesanal',
        'card-badge-agotado': 'Esgotado',
        'card-cta-ver': 'Ver detalhe',
        'card-cta-nodisponible': 'Indisponível',

        // Modal
        'modal-sublabel': 'Massa e Molho Gourmet · Don Inacio',
        'modal-price-note': 'preço por unidade · 300g',
        'modal-btn-wsp': 'Pedir pelo WhatsApp',
        'modal-btn-agotado': 'Produto Esgotado',
        'modal-wsp-msg': 'Olá! Tenho interesse:',
        'modal-wsp-precio': 'Preço:',

        // Produtos — molhos
        's0-nombre': 'Molho de Tomate Gourmet',
        's0-desc': 'Molho de tomate artesanal elaborado com tomates maduros selecionados, manjericão fresco e azeite de oliva. Sem conservantes nem corantes. Ideal para massas, pizzas, bruschettas e como base para guisados. Receita portuguesa tradicional. Apresentação 300g.',

        // Produtos — massas
        'p0-nombre': 'Massa de Pimentão Doce Defumado Gourmet',
        'p0-desc': 'Massa artesanal de pimentão doce com um delicado toque defumado. Elaborada com pimentos vermelhos selecionados mediante receita portuguesa tradicional. Sem conservantes, corantes nem aditivos. Perfeita para arroz, guisados, carnes e como pasta para barrar. Apresentação 300g.',
    },
    en: {
        // Navbar
        'nav-volver': 'Back',
        'nav-inicio': 'Home',
        'nav-reservar': 'Book a Table',

        // Hero
        'hero-label': 'Artisan Store',
        'hero-title': 'Gourmet Pastes <em>&amp; Sauces</em>',
        'hero-desc': 'Authentic Mediterranean flavor',
        'hero-body': 'Discover our gourmet pastes handcrafted following traditional Portuguese recipes. 100% natural products <strong>with no preservatives, colorings or additives</strong>, perfect for elevating your dishes with authentic Mediterranean flavors.',

        // Breadcrumb
        'bc-productos': 'Products',
        'bc-pastas': 'Gourmet Pastes & Sauces',

        // Sección
        'seccion-titulo': 'Our <em>Gourmet Pastes &amp; Sauces</em> Collection',
        'seccion-desc': 'Traditional Portuguese recipes. 100% natural, no preservatives or additives.',
        'subsec-salsas': 'Sauces',
        'subsec-pastas': 'Pastes',

        // Cards
        'card-badge-artesanal': 'Artisan',
        'card-badge-agotado': 'Sold Out',
        'card-cta-ver': 'View details',
        'card-cta-nodisponible': 'Not available',

        // Modal
        'modal-sublabel': 'Gourmet Paste & Sauce · Don Inacio',
        'modal-price-note': 'price per unit · 300g',
        'modal-btn-wsp': 'Order via WhatsApp',
        'modal-btn-agotado': 'Out of Stock',
        'modal-wsp-msg': 'Hello! I\'m interested in:',
        'modal-wsp-precio': 'Price:',

        // Products — sauces
        's0-nombre': 'Gourmet Tomato Sauce',
        's0-desc': 'Artisan tomato sauce made with selected ripe tomatoes, fresh basil and olive oil. No preservatives or colorings. Ideal for pasta, pizzas, bruschettas and as a base for stews. Traditional Portuguese recipe. 300g presentation.',

        // Products — pastes
        'p0-nombre': 'Gourmet Smoked Sweet Pepper Paste',
        'p0-desc': 'Artisan sweet pepper paste with a delicate smoky touch. Made with selected red peppers following a traditional Portuguese recipe. No preservatives, colorings or additives. Perfect for rice, stews, meats and as a spread. 300g presentation.',
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

    // Re-render los grids con el nuevo idioma
    const gridS = document.getElementById('gridSalsas');
    const gridP = document.getElementById('gridPastas');
    if (gridS) gridS.innerHTML = '';
    if (gridP) gridP.innerHTML = '';
    renderizarProductos(salsas, 'gridSalsas', 's');
    renderizarProductos(pastas, 'gridPastas', 'p');
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
// prefijo: 's' para salsas, 'p' para pastas
function renderizarProductos(lista, gridId, prefijo) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    lista.forEach((p, i) => {
        const key = `${prefijo}${i}`;
        const nombre = t(`${key}-nombre`) || p.nombre;
        const badge = !p.enStock
            ? `<span class="out-of-stock-badge">${t('card-badge-agotado')}</span>`
            : '';

        const ctaTxt = p.enStock ? t('card-cta-ver') : t('card-cta-nodisponible');

        const card = document.createElement('article');
        card.className = 'product-card' + (p.enStock ? '' : ' out-of-stock');
        card.style.animationDelay = `${i * 0.10}s`;

        if (p.enStock) {
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', nombre);
        }

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
            card.addEventListener('click', () => abrirModal(p, key));
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirModal(p, key); }
            });
        }

        grid.appendChild(card);
    });
}

function cargarProductos() {
    renderizarProductos(salsas, 'gridSalsas', 's');
    renderizarProductos(pastas, 'gridPastas', 'p');
}

// ============ MODAL ============
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function abrirModal(p, key) {
    const nombre = t(`${key}-nombre`) || p.nombre;
    const desc = t(`${key}-desc`) || p.descripcion;
    const sublabel = t('modal-sublabel');
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
                <p class="modal-label">${sublabel}</p>
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