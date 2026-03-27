/* ============================================
   DON INACIO – SALCHICHAS FRESCAS PAGE SCRIPT
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
        'hero-title': 'Salchichas <em>Frescas</em>',
        'hero-subtitle': 'Tradición artesanal en cada bocado',
        'hero-desc': 'Explora nuestra variedad de salchichas frescas artesanales de diferentes tradiciones culinarias. Desde la clásica salchicha tradicional ahumada hasta la picante serrana, cada salchicha está elaborada con carnes selectas y especias auténticas. Perfectas para la parrilla, el asado o para darle un toque especial a tus recetas favoritas. <strong>Precios por libra.</strong>',
        /* Breadcrumb */
        'bc-productos': 'Productos',
        'bc-salchichas': 'Salchichas Frescas',
        /* Sección */
        'seccion-titulo': 'Colección de <em>Salchichas Gourmet</em>',
        'seccion-desc': 'Artesanales, sin gluten, sin lactosa y sin conservantes. Puras de origen.',
        /* Cards */
        'card-badge-agotado': 'Agotado',
        'card-cta-ver': 'Ver detalle',
        'card-cta-nodisponible': 'No disponible',
        /* Modal */
        'modal-sublabel': 'Salchicha Fresca · Don Inacio',
        'modal-precio-nota': 'precio por libra',
        'modal-btn-wsp': 'Pedir por WhatsApp',
        'modal-btn-agotado': 'Producto Agotado',
        'modal-wsp-msg': 'Hola! Me interesa la salchicha:',
        'modal-wsp-precio': 'Precio:',
        'modal-wsp-unidad': 'x libra',
        'allergen-section-title': 'Información de Alérgenos',
        'allergen-sin-gluten':    'Sin Gluten',
        'allergen-sin-lactosa':   'Sin Lactosa',
        /* Productos */
        'p0-nombre': 'Salchicha tradicional ahumada',
        'p0-desc': 'Salchicha fresca ligeramente ahumada, alaborada a base de trcitos de carne 100% cerdo, especias sin gluten ni lactosa.',
        'p1-nombre': 'Salchicha Serrana',
        'p1-desc': 'Salchicha fresca artesanal elaborada con 100% carne de cerdo y tripa natural de cerdo. Sin gluten ni lactosa.',
        'p2-nombre': 'Salchicha Montana con Aceitunas Negras',
        'p2-desc': 'Salchicha elaborada con 100% carne de res ligeramente madurada, aceitunas negras y tripa natural de cerdo. Sin gluten ni lactosa.',
        'p3-nombre': 'Salchicha Camponesa',
        'p3-desc': 'Salchicha fresca artesanal elaborada con 100% carne de cerdo y tripa natural de cerdo. Sin gluten ni lactosa.',
        'p4-nombre': 'Salchicha Picante',
        'p4-desc': 'Salchicha fresca elaborada con 100% carne de cerdo, especias picantes y tripa natural de cerdo. Sin gluten ni lactosa.',
        'p5-nombre': 'Salchicha Mediterránea con Jalapeño',
        'p5-desc': 'Salchicha fresca semi picante elaborada con 100% carne de cerdo, jalapeño y tripa natural de cerdo. Sin gluten ni lactosa.',
        'p6-nombre': 'Bratwurst',
        'p6-desc': 'Salchicha fresca de estilo alemán elaborada con 100% carne de cerdo y tripa natural de cerdo. Sin gluten. Contiene lactosa.',
        'p7-nombre': 'Italiana',
        'p7-desc': 'Salchicha fresca al estilo italiano elaborada con 100% carne de cerdo-queso, sin gluten y tripa natural de cerdo. Sin gluten. Contiene lactosa.',
        'p8-nombre': 'Salchicha Don Inacio',
        'p8-desc': 'Salchicha premium elaborada con 100% carne de cordero (Pelibuey), ligeramente picante, en tripa natural de cerdo. Sin gluten ni lactosa.',
        'p9-nombre': 'Salchicha Desayuno',
        'p9-desc': 'Salchicha fresca elaborada a base de carne de cerdo, en tripa 100% de cerdo. Sin gluten. Contiene lactosa.',
        'p10-nombre': 'Salchicha de Pescado',
        'p10-desc': 'Salchicha fresca elaborada con 100% pescado fresco, especias y hierbas aromáticas, en tripa 100% de cerdo. Sin gluten ni lactosa.',
    },

    pt: {
        /* Navbar */
        'nav-volver': 'Voltar',
        'nav-inicio': 'Início',
        'nav-reservar': 'Reservar Mesa',
        /* Hero */
        'hero-label': 'Loja Artesanal',
        'hero-title': 'Salsichas <em>Frescas</em>',
        'hero-subtitle': 'Tradição artesanal em cada dentada',
        'hero-desc': 'Explore a nossa variedade de salsichas frescas artesanais de diferentes tradições culinárias. Desde a clássica salsicha tradicional defumada até à picante serrana, cada salsicha é elaborada com carnes selecionadas e especiarias autênticas. Perfeitas para a grelha, o assado ou para dar um toque especial às suas receitas favoritas. <strong>Preços por libra.</strong>',
        /* Breadcrumb */
        'bc-produtos': 'Produtos',
        'bc-salchichas': 'Salsichas Frescas',
        /* Sección */
        'seccion-titulo': 'Coleção de <em>Salsichas Gourmet</em>',
        'seccion-desc': 'Artesanais, sem glúten, sem lactose e sem conservantes. Puras de origem.',
        /* Cards */
        'card-badge-agotado': 'Esgotado',
        'card-cta-ver': 'Ver detalhe',
        'card-cta-nodisponible': 'Indisponível',
        /* Modal */
        'modal-sublabel': 'Salsicha Fresca · Don Inacio',
        'modal-precio-nota': 'preço por libra',
        'modal-btn-wsp': 'Pedir pelo WhatsApp',
        'modal-btn-agotado': 'Produto Esgotado',
        'modal-wsp-msg': 'Olá! Tenho interesse na salsicha:',
        'modal-wsp-precio': 'Preço:',
        'modal-wsp-unidad': 'por libra',
        'allergen-section-title': 'Informação de Alergénios',
        'allergen-sin-gluten':    'Sem Glúten',
        'allergen-sin-lactosa':   'Sem Lactose',
        /* Produtos */
        'p0-nombre': 'Salsicha Tradicional',
        'p0-desc': 'Salsicha fresca levemente defumada, feita com 100% carne de porco, especiarias e tripa natural de porco. Semi picante. Sem glúten nem lactose.',
        'p1-nombre': 'Salsicha Serrana',
        'p1-desc': 'Salsicha fresca artesanal feita com 100% carne de porco e tripa natural de porco. Sem glúten nem lactose.',
        'p2-nombre': 'Salsicha Montana com Azeitonas Pretas',
        'p2-desc': 'Salsicha feita com 100% carne de vaca levemente maturada, azeitonas pretas e tripa natural de porco. Sem glúten nem lactose.',
        'p3-nombre': 'Salsicha Camponesa',
        'p3-desc': 'Salsicha fresca artesanal feita com 100% carne de porco e tripa natural de porco. Sem glúten nem lactose.',
        'p4-nombre': 'Salsicha Picante',
        'p4-desc': 'Salsicha fresca feita com 100% carne de porco, especiarias picantes e tripa natural de porco. Sem glúten nem lactose.',
        'p5-nombre': 'Salsicha Mediterrânea com Jalapeño',
        'p5-desc': 'Salsicha fresca semi picante feita com 100% carne de porco, jalapeño e tripa natural de porco. Sem glúten nem lactose.',
        'p6-nombre': 'Bratwurst',
        'p6-desc': 'Salsicha fresca estilo alemão feita com 100% carne de porco e tripa natural de porco. Sem glúten. Contém lactose.',
        'p7-nombre': 'Italiana',
        'p7-desc': 'Salsicha fresca estilo italiano feita com 100% carne de porco e tripa natural de porco. Sem glúten. Contém lactose.',
        'p8-nombre': 'Salsicha Don Inacio',
        'p8-desc': 'Salsicha premium feita com 100% carne de cordeiro (Pelibuey), levemente picante, em tripa natural de porco. Sem glúten nem lactose.',
        'p9-nombre': 'Salsicha de Pequeno-Almoço',
        'p9-desc': 'Salsicha fresca feita com carne de porco, em tripa 100% de porco. Sem glúten. Contém lactose.',
        'p10-nombre': 'Salsicha de Peixe',
        'p10-desc': 'Salsicha fresca feita com 100% peixe fresco, especiarias e ervas aromáticas, em tripa 100% de porco. Sem glúten nem lactose.',
    },

    en: {
        /* Navbar */
        'nav-volver': 'Back',
        'nav-inicio': 'Home',
        'nav-reservar': 'Book a Table',
        /* Hero */
        'hero-label': 'Artisan Shop',
        'hero-title': 'Fresh <em>Sausages</em>',
        'hero-subtitle': 'Artisan tradition in every bite',
        'hero-desc': 'Explore our variety of artisan fresh sausages from different culinary traditions. From the classic smoked traditional sausage to the spicy mountain-style, each sausage is crafted from choice cuts of meat with authentic spices. Perfect for the grill, the roast, or to add a special touch to your favorite recipes. <strong>Prices per pound.</strong>',
        /* Breadcrumb */
        'bc-productos': 'Products',
        'bc-salchichas': 'Fresh Sausages',
        /* Sección */
        'seccion-titulo': 'Our <em>Gourmet Sausage</em> Collection',
        'seccion-desc': 'Artisan-crafted, gluten-free, lactose-free and preservative-free. Pure origin.',
        /* Cards */
        'card-badge-agotado': 'Sold Out',
        'card-cta-ver': 'View details',
        'card-cta-nodisponible': 'Unavailable',
        /* Modal */
        'modal-sublabel': 'Fresh Sausage · Don Inacio',
        'modal-precio-nota': 'price per pound',
        'modal-btn-wsp': 'Order via WhatsApp',
        'modal-btn-agotado': 'Product Sold Out',
        'modal-wsp-msg': 'Hi! I\'m interested in the sausage:',
        'modal-wsp-precio': 'Price:',
        'modal-wsp-unidad': 'per pound',
        'allergen-section-title': 'Allergen Information',
        'allergen-sin-gluten':    'Gluten Free',
        'allergen-sin-lactosa':   'Lactose Free',
        /* Products */
        'p0-nombre': 'Traditional Sausage',
        'p0-desc': 'Lightly smoked fresh sausage made with 100% pork, spices and natural pork casing. Semi-spicy. Gluten-free and lactose-free.',
        'p1-nombre': 'Serrana Sausage',
        'p1-desc': 'Artisan fresh sausage made with 100% pork and natural pork casing. Gluten-free and lactose-free.',
        'p2-nombre': 'Montana Sausage with Black Olives',
        'p2-desc': 'Sausage made with 100% lightly aged beef, black olives and natural pork casing. Gluten-free and lactose-free.',
        'p3-nombre': 'Camponesa Sausage',
        'p3-desc': 'Artisan fresh sausage made with 100% pork and natural pork casing. Gluten-free and lactose-free.',
        'p4-nombre': 'Spicy Sausage',
        'p4-desc': 'Fresh sausage made with 100% pork, hot spices and natural pork casing. Gluten-free and lactose-free.',
        'p5-nombre': 'Mediterranean Sausage with Jalapeño',
        'p5-desc': 'Semi-spicy fresh sausage made with 100% pork, jalapeño and natural pork casing. Gluten-free and lactose-free.',
        'p6-nombre': 'Bratwurst',
        'p6-desc': 'German-style fresh sausage made with 100% pork and natural pork casing. Gluten-free. Contains lactose.',
        'p7-nombre': 'Italiana',
        'p7-desc': 'Italian-style fresh sausage made with 100% pork and natural pork casing. Gluten-free. Contains lactose.',
        'p8-nombre': 'Don Inacio Sausage',
        'p8-desc': 'Premium sausage made with 100% lamb (Pelibuey), lightly spicy, in natural pork casing. Gluten-free and lactose-free.',
        'p9-nombre': 'Breakfast Sausage',
        'p9-desc': 'Fresh sausage made with pork meat in 100% pork casing. Gluten-free. Contains lactose.',
        'p10-nombre': 'Fish Sausage',
        'p10-desc': 'Fresh sausage made with 100% fresh fish, spices and aromatic herbs, in 100% pork casing. Gluten-free and lactose-free.',
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

// ============ ALLERGEN STRIP ============
function getAllergenStrip(size) {
    var lg = (size === 'large');
    var lSG = (translations[currentLang] || translations.es)['allergen-sin-gluten'] || 'Sin Gluten';
    var lSL = (translations[currentLang] || translations.es)['allergen-sin-lactosa'] || 'Sin Lactosa';
    var s = lg ? 'allergen-icon--large' : '';
    var imgSize = lg ? '52' : '28';
    
    var iconSG = '../../extern-arch/allergen-icons/sin-gluten.svg';
    var iconSL = '../../extern-arch/allergen-icons/sin-lactosa.svg';
    
    function makeChip(src, label) {
        return '<span class="allergen-chip allergen-chip--free ' + s + '" title="' + label + '">'
          + '<img src="' + src + '" alt="' + label + '" width="' + imgSize + '" height="' + imgSize + '" style="display:block;">'
          + (lg ? '<span class="allergen-label">' + label + '</span>' : '')
          + '</span>';
    }

    var c1 = makeChip(iconSG, lSG);
    var c2 = makeChip(iconSL, lSL);
    
    return '<div class="allergen-strip allergen-strip--' + (lg ? 'large' : 'small') + '">' + c1 + c2 + '</div>';
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
const productosSalchichas = [
    { imagen: '../../extern-arch/salchinas-nuevas/5.png', precio: '7.95', enStock: true },   // p0 – Tradicional
    { imagen: '../../extern-arch/salchinas-nuevas/1.png', precio: '8.40', enStock: true },   // p1 – Serrana
    { imagen: '../../extern-arch/salchinas-nuevas/3.png', precio: '10.70', enStock: true },  // p2 – Montana c/ Aceitunas
    { imagen: '../../extern-arch/salchinas-nuevas/6.png', precio: '8.65', enStock: true },   // p3 – Camponesa
    { imagen: '../../extern-arch/salchinas-nuevas/2.png', precio: '8.85', enStock: true },   // p4 – Picante
    { imagen: '../../extern-arch/salchinas-nuevas/4.png', precio: '9.10', enStock: true },   // p5 – Mediterránea c/ Jalapeño
    { imagen: '../../extern-arch/salchinas-nuevas/8.png', precio: '8.85', enStock: true },   // p6 – Bratwurst
    { imagen: '../../extern-arch/salchinas-nuevas/8.png', precio: '9.10', enStock: true },   // p7 – Italiana
    { imagen: '../../extern-arch/salchinas-nuevas/8.png', precio: '15.80', enStock: true },  // p8 – Don Inacio (Cordero)
    { imagen: '../../extern-arch/salchinas-nuevas/8.png', precio: '8.90', enStock: false },  // p9 – Desayuno
    { imagen: '../../extern-arch/salchinas-nuevas/8.png', precio: '14.60', enStock: false },  // p10 – Pescado
];

const WA_NUMBER = '50369204235';

// ============ RENDER GRID ============
function renderGrid() {
    const grid = document.getElementById('productosGrid');
    if (!grid) return;

    productosSalchichas.forEach((p, i) => {
        const nombre = t(`p${i}-nombre`);
        const ctaTxt = p.enStock ? t('card-cta-ver') : t('card-cta-nodisponible');

        const card = document.createElement('article');
        card.className = 'product-card' + (p.enStock ? '' : ' out-of-stock');
        card.style.animationDelay = `${i * 0.08}s`;

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
            : `<span class="product-cta" style="color:var(--color-tierra);opacity:.6">${ctaTxt}</span>`;

        card.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${p.imagen}" alt="${nombre}" class="product-image" loading="lazy">
                ${badge}
            </div>
            <div class="product-content">
                <h2 class="product-name">${nombre}</h2>
                ${getAllergenStrip('small')}
                <div class="product-footer">
                    <div class="product-price">$${p.precio}<span>${t('modal-precio-nota')}</span></div>
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
    const unidad = t('modal-wsp-unidad');

    const waMsg = `${msgPrefix} ${nombre} – ${precioLbl} $${p.precio} ${unidad}`;
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
                <div class="modal-allergen-section">
                    <div class="modal-allergen-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#c8962a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;flex-shrink:0;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                        ${(translations[currentLang] || translations.es)['allergen-section-title'] || 'Información de Alérgenos'}
                    </div>
                    ${getAllergenStrip('large')}
                </div>
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