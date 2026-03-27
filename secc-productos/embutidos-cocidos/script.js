/* ============================================
   DON INACIO — EMBUTIDOS COCIDOS PAGE SCRIPT
   ============================================ */

// ============ DATOS DE PRODUCTOS ============
const productos = [
    {
        imagen: '../../extern-arch/embutidos cocidos/1.png',
        nombre: 'Bacon Ahumado 100% Cerdo',
        descripcion: 'Bacon ahumado artesanalmente, elaborado con carne 100% de cerdo. Textura jugosa y sabor intenso ahumado. Presentación: Pieza entera, trocitos 500 g, loncha 250 g / 500 g. Ideal para desayunos, ensaladas y como ingrediente en múltiples recetas.',
        precio: '12.50',
        enStock: true
    },
    {
        imagen: '../../extern-arch/embutidos cocidos/2.png',
        nombre: 'Costilla Ahumada 100% Cerdo',
        descripcion: 'Costilla de cerdo 100% ahumada lentamente con técnicas tradicionales. Carne tierna con hueso que aporta sabor intenso. Presentación: Pieza entera, packs de 2 unidades. Perfecta para asar a la parrilla o al horno, ideal para barbacoas y comidas familiares.',
        precio: '14.80',
        enStock: true
    },
    {
        imagen: '../../extern-arch/embutidos cocidos/3.png',
        nombre: 'Jamón Cocido al Natural 100% Cerdo',
        descripcion: 'Jamón cocido al natural elaborado con carne de cerdo 100%, sin aditivos artificiales. Sabor auténtico y suave. Presentación: Pieza entera (2/4 lb), loncha 250 g / 500 g. Perfecto para bocadillos, ensaladas y como fiambre saludable para toda la familia.',
        precio: '9.90',
        enStock: false
    },
    {
        imagen: '../../extern-arch/embutidos cocidos/4.png',
        nombre: 'Jamón Cocido Ahumado 100% Cerdo',
        descripcion: 'Jamón cocido ahumado con madera natural, 100% carne de cerdo. Combina la suavidad del jamón cocido con las notas intensas del ahumado. Presentación: Pieza entera (2/4 lb), loncha 250 g / 500 g. Excelente para bocadillos gourmet, pizzas y pastas.',
        precio: '10.80',
        enStock: false
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
        'nav-volver': 'Volver',
        'nav-inicio': 'Inicio',
        'nav-reservar': 'Reservar Mesa',
        'hero-label': 'Tienda Artesanal',
        'hero-title': 'Embutidos <em>Cocidos</em>',
        'hero-desc': 'Tradición artesanal en cada bocado',
        'hero-body': 'Nuestra línea de embutidos cocidos artesanales ofrece sabores auténticos elaborados con carne 100% de cerdo. Desde el bacon ahumado hasta el jamón cocido en sus diferentes variedades, cada producto pasa por un proceso cuidadoso que garantiza calidad superior, jugosidad y el sabor casero que buscas.',
        'bc-productos': 'Productos',
        'bc-cocidos': 'Embutidos Cocidos',
        'seccion-titulo': 'Colección de <em>Embutidos Gourmet</em>',
        'seccion-desc': 'Sabores auténticos elaborados con carne 100% de cerdo y tradición artesanal.',
        'card-badge-artesanal': 'Artesanal',
        'card-badge-agotado': 'Agotado',
        'card-cta-ver': 'Ver detalle',
        'card-cta-nodisponible': 'No disponible',
        'modal-label': 'Embutido Cocido · Don Inacio',
        'modal-btn-wsp': 'Pedir por WhatsApp',
        'modal-btn-agotado': 'Producto Agotado',
        'modal-wsp-msg': 'Hola! Me interesa el embutido cocido:',
        'modal-wsp-precio': 'Precio:',
        'precio-por-libra': 'precio por libra',
        'allergen-section-title': 'Información de Alérgenos',
        'allergen-sin-gluten':    'Sin Gluten',
        'allergen-sin-lactosa':   'Sin Lactosa',
        // p0
        'p0-nombre': 'Bacon Ahumado 100% Cerdo',
        'p0-desc': 'Bacon ahumado artesanalmente, elaborado con carne 100% de cerdo. Textura jugosa y sabor intenso ahumado. Presentación: Pieza entera, trocitos 500 g, loncha 250 g / 500 g. Ideal para desayunos, ensaladas y como ingrediente en múltiples recetas.',
        // p1
        'p1-nombre': 'Costilla Ahumada 100% Cerdo',
        'p1-desc': 'Costilla de cerdo 100% ahumada lentamente con técnicas tradicionales. Carne tierna con hueso que aporta sabor intenso. Presentación: Pieza entera, packs de 2 unidades. Perfecta para asar a la parrilla o al horno, ideal para barbacoas y comidas familiares.',
        // p2
        'p2-nombre': 'Jamón Cocido al Natural 100% Cerdo',
        'p2-desc': 'Jamón cocido al natural elaborado con carne de cerdo 100%, sin aditivos artificiales. Sabor auténtico y suave. Presentación: Pieza entera (2/4 lb), loncha 250 g / 500 g. Perfecto para bocadillos, ensaladas y como fiambre saludable para toda la familia.',
        // p3
        'p3-nombre': 'Jamón Cocido Ahumado 100% Cerdo',
        'p3-desc': 'Jamón cocido ahumado con madera natural, 100% carne de cerdo. Combina la suavidad del jamón cocido con las notas intensas del ahumado. Presentación: Pieza entera (2/4 lb), loncha 250 g / 500 g. Excelente para bocadillos gourmet, pizzas y pastas.',
    },
    pt: {
        'nav-volver': 'Voltar',
        'nav-inicio': 'Início',
        'nav-reservar': 'Reservar Mesa',
        'hero-label': 'Loja Artesanal',
        'hero-title': 'Enchidos <em>Cozidos</em>',
        'hero-desc': 'Tradição artesanal em cada dentada',
        'hero-body': 'A nossa linha de enchidos cozidos artesanais oferece sabores autênticos elaborados com carne 100% de porco. Desde o bacon fumado até ao fiambre nas suas diferentes variedades, cada produto passa por um processo cuidadoso que garante qualidade superior, suculência e o sabor caseiro que procura.',
        'bc-produtos': 'Produtos',
        'bc-productos': 'Produtos',
        'bc-cocidos': 'Enchidos Cozidos',
        'seccion-titulo': 'Coleção de <em>Enchidos Gourmet</em>',
        'seccion-desc': 'Sabores autênticos elaborados com carne 100% de porco e tradição artesanal.',
        'card-badge-artesanal': 'Artesanal',
        'card-badge-agotado': 'Esgotado',
        'card-cta-ver': 'Ver detalhe',
        'card-cta-nodisponible': 'Indisponível',
        'modal-label': 'Enchido Cozido · Don Inacio',
        'modal-btn-wsp': 'Pedir pelo WhatsApp',
        'modal-btn-agotado': 'Produto Esgotado',
        'modal-wsp-msg': 'Olá! Tenho interesse no enchido cozido:',
        'modal-wsp-precio': 'Preço:',
        'precio-por-libra': 'preço por libra',
        'allergen-section-title': 'Informação de Alergénios',
        'allergen-sin-gluten':    'Sem Glúten',
        'allergen-sin-lactosa':   'Sem Lactose',
        'p0-nombre': 'Bacon Fumado 100% Porco',
        'p0-desc': 'Bacon fumado artesanalmente, elaborado com carne 100% de porco. Textura suculenta e sabor intenso fumado. Apresentação: Peça inteira, cubinhos 500 g, fatia 250 g / 500 g. Ideal para pequenos-almoços, saladas e como ingrediente em múltiplas receitas.',
        'p1-nombre': 'Entrecosto Fumado 100% Porco',
        'p1-desc': 'Entrecosto de porco 100% fumado lentamente com técnicas tradicionais. Carne tenra com osso que confere sabor intenso. Apresentação: Peça inteira, packs de 2 unidades. Perfeito para assar na grelha ou no forno, ideal para churrascos e refeições familiares.',
        'p2-nombre': 'Fiambre Natural 100% Porco',
        'p2-desc': 'Fiambre natural elaborado com carne de porco 100%, sem aditivos artificiais. Sabor autêntico e suave. Apresentação: Peça inteira (2/4 lb), fatia 250 g / 500 g. Perfeito para sandes, saladas e como fatiado saudável para toda a família.',
        'p3-nombre': 'Fiambre Fumado 100% Porco',
        'p3-desc': 'Fiambre fumado com madeira natural, 100% carne de porco. Combina a suavidade do fiambre com as notas intensas do fumado. Apresentação: Peça inteira (2/4 lb), fatia 250 g / 500 g. Excelente para sandes gourmet, pizzas e massas.',
    },
    en: {
        'nav-volver': 'Back',
        'nav-inicio': 'Home',
        'nav-reservar': 'Book a Table',
        'hero-label': 'Artisan Store',
        'hero-title': 'Cooked <em>Meats</em>',
        'hero-desc': 'Artisan tradition in every bite',
        'hero-body': 'Our artisan cooked meat line offers authentic flavors made with 100% pork. From smoked bacon to cooked ham in its different varieties, each product goes through a careful process that ensures superior quality, juiciness and the homemade flavor you\'re looking for.',
        'bc-productos': 'Products',
        'bc-cocidos': 'Cooked Meats',
        'seccion-titulo': 'Our <em>Gourmet Cooked Meats</em> Collection',
        'seccion-desc': 'Authentic flavors made with 100% pork and artisan tradition.',
        'card-badge-artesanal': 'Artisan',
        'card-badge-agotado': 'Sold Out',
        'card-cta-ver': 'View details',
        'card-cta-nodisponible': 'Not available',
        'modal-label': 'Cooked Meat · Don Inacio',
        'modal-btn-wsp': 'Order via WhatsApp',
        'modal-btn-agotado': 'Out of Stock',
        'modal-wsp-msg': 'Hello! I\'m interested in:',
        'modal-wsp-precio': 'Price:',
        'precio-por-libra': 'price per pound',
        'allergen-section-title': 'Allergen Information',
        'allergen-sin-gluten':    'Gluten Free',
        'allergen-sin-lactosa':   'Lactose Free',
        'p0-nombre': 'Smoked Bacon 100% Pork',
        'p0-desc': 'Artisan smoked bacon, made with 100% pork. Juicy texture and intense smoky flavor. Presentation: Whole piece, diced 500 g, sliced 250 g / 500 g. Ideal for breakfasts, salads and as an ingredient in multiple recipes.',
        'p1-nombre': 'Smoked Ribs 100% Pork',
        'p1-desc': '100% pork ribs slowly smoked using traditional techniques. Tender bone-in meat that delivers intense flavor. Presentation: Whole piece, packs of 2 units. Perfect for grilling or oven roasting, ideal for barbecues and family meals.',
        'p2-nombre': 'Natural Cooked Ham 100% Pork',
        'p2-desc': 'Natural cooked ham made with 100% pork, no artificial additives. Authentic and mild flavor. Presentation: Whole piece (2/4 lb), sliced 250 g / 500 g. Perfect for sandwiches, salads and as a healthy cold cut for the whole family.',
        'p3-nombre': 'Smoked Cooked Ham 100% Pork',
        'p3-desc': 'Cooked ham smoked with natural wood, 100% pork. Combines the tenderness of cooked ham with the intense notes of smoking. Presentation: Whole piece (2/4 lb), sliced 250 g / 500 g. Excellent for gourmet sandwiches, pizzas and pasta.',
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

    const grid = document.getElementById('productosGrid');
    if (grid) { grid.innerHTML = ''; cargarProductos(); }
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

    productos.forEach((p, i) => {
        const nombre = t(`p${i}-nombre`) || p.nombre;
        const badgeTxt = p.enStock ? t('card-badge-artesanal') : t('card-badge-agotado');
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
                ${getAllergenStrip('small')}
                <div class="product-footer">
                    <div class="product-price-wrap">
                        <span class="product-price">$${p.precio}</span>
                        <span class="product-price-label">${t('precio-por-libra')}</span>
                    </div>
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
                <p class="modal-price-label">${t('precio-por-libra')}</p>
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
});