/* ============================================
   DON INACIO – SALSAS Y ACEITES PICANTES
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
        'hero-title': 'Salsas y Aceites <em>Picantes</em>',
        'hero-subtitle': 'Fuego artesanal en cada gota',
        'hero-desc': 'Explora nuestra colección premium de salsas y aceites picantes artesanales. Desde recetas portuguesas tradicionales hasta fusiones orientales únicas, cada producto está elaborado <strong>100% naturalmente sin conservantes ni aditivos</strong>. Para los verdaderos amantes del picante.',
        /* Breadcrumb */
        'bc-productos': 'Productos',
        'bc-salsas': 'Salsas y Aceites Picantes',
        /* Sección */
        'seccion-titulo': 'Colección de <em>Picantes Gourmet</em>',
        'seccion-desc': 'Artesanales, 100% naturales, sin conservantes ni aditivos.',
        'subsec-aceites': 'Aceites Picantes',
        'subsec-salsas': 'Salsas Picantes',
        /* Cards */
        'card-badge-agotado': 'Agotado',
        'card-cta-ver': 'Ver detalle',
        'card-cta-nodisponible': 'No disponible',
        /* Modal */
        'modal-sublabel': 'Picante Artesanal · Don Inacio',
        'modal-precio-nota': 'precio por unidad',
        'modal-btn-wsp': 'Pedir por WhatsApp',
        'modal-btn-agotado': 'Producto Agotado',
        'modal-wsp-msg': 'Hola! Me interesa:',
        'modal-wsp-precio': 'Precio:',
        /* Aceites */
        'p0-nombre': 'Chilli Oil Don INACIO Gourmet, Edición Limitada',
        'p0-desc': '100% no fermentado, no transgénico, con colorantes auténticos y estándar estadounidense. Since 2015. Una creación artesanal que combina tradición y calidad premium. Ideal para dar un toque picante a cualquier platillo. Presentación 250ml.',
        'p1-nombre': 'Oriental Chilli Oil Gourmet',
        'p1-desc': 'Con vinagre, añejado en Colorado. Madurado en barril de roble y roble quemado. Un proceso único de maduración que aporta complejidad y profundidad de sabor. Perfecto para cocina asiática y platos gourmet. Presentación 250ml.',
        'p2-nombre': 'Chilli Oil Aceite Oriental – Receta Portuguesa',
        'p2-desc': '"Picante que enamora." Aceite de chile picante 100% natural, sin conservantes, colorantes ni aditivos de ningún tipo. Elaborado siguiendo una auténtica receta portuguesa tradicional. Ideal para pastas, arroz, sopas y marinados. Presentación 280ml.',
        'p3-nombre': 'Chili Thai',
        'p3-desc': '"Picante que enamora." Aceite picante 100% natural. Fusión única entre sabores orientales y técnicas portuguesas tradicionales. Ideal para dar un toque exótico y picante a tus platillos favoritos. Presentación 100ml.',
        /* Salsas */
        'p4-nombre': 'Piri-Piri Salsa Picante Habanero',
        'p4-desc': '"Picante que enamora." Salsa picante 100% orgánica con habanero. Una explosión de sabor con el característico picor del chile habanero, elaborada con ingredientes orgánicos certificados. Perfecta para tacos, alitas y carnes a la parrilla. Presentación 250ml.',
        'p5-nombre': 'Piri-Piri Salsa Picante Diabolo',
        'p5-desc': '"Con esta salsa, cada bocado es un desafío. ¿Podrás soportarlo?" Salsa picante 100% natural. La auténtica salsa piri-piri portuguesa con nivel de picor intenso. Para los verdaderos amantes del chile. Perfecta para carnes, mariscos y tapas. Presentación 250ml.',
        'p6-nombre': 'Don INACIO Salsa Picante Gourmet, Edición Limitada',
        'p6-desc': 'Salsa picante Don INACIO 100% natural. Elaborada con ingredientes de producción propia (chile 100% carolina reaper), sin azúcar añadido ni sabores artificiales. Producto fermentado 12 meses, lo que hace que sea una creación única que refleja la pasión por los productos artesanales de calidad. Presentación 250ml.',
        'p7-nombre': 'Piri-Piri Salsa Picante Infierno',
        'p7-desc': '"¡Haz que cada bocado arda de sabor!" Salsa picante 100% natural. Elaborada artesanalmente siguiendo recetas caseras tradicionales con un toque de intensidad. Perfecta para los que buscan sabor auténtico y picante memorable. Presentación 250ml.',
    },

    pt: {
        /* Navbar */
        'nav-volver': 'Voltar',
        'nav-inicio': 'Início',
        'nav-reservar': 'Reservar Mesa',
        /* Hero */
        'hero-label': 'Loja Artesanal',
        'hero-title': 'Molhos e Azeites <em>Picantes</em>',
        'hero-subtitle': 'Fogo artesanal em cada gota',
        'hero-desc': 'Explore a nossa coleção premium de molhos e azeites picantes artesanais. Desde receitas portuguesas tradicionais até fusões orientais únicas, cada produto é elaborado <strong>100% naturalmente sem conservantes nem aditivos</strong>. Para os verdadeiros amantes do picante.',
        /* Breadcrumb */
        'bc-produtos': 'Produtos',
        'bc-produtos': 'Produtos',
        'bc-salsas': 'Molhos e Azeites Picantes',
        /* Sección */
        'seccion-titulo': 'Coleção de <em>Picantes Gourmet</em>',
        'seccion-desc': 'Artesanais, 100% naturais, sem conservantes nem aditivos.',
        'subsec-aceites': 'Azeites Picantes',
        'subsec-salsas': 'Molhos Picantes',
        /* Cards */
        'card-badge-agotado': 'Esgotado',
        'card-cta-ver': 'Ver detalhe',
        'card-cta-nodisponible': 'Indisponível',
        /* Modal */
        'modal-sublabel': 'Picante Artesanal · Don Inacio',
        'modal-precio-nota': 'preço por unidade',
        'modal-btn-wsp': 'Pedir pelo WhatsApp',
        'modal-btn-agotado': 'Produto Esgotado',
        'modal-wsp-msg': 'Olá! Tenho interesse em:',
        'modal-wsp-precio': 'Preço:',
        /* Aceites */
        'p0-nombre': 'Chilli Oil Don INACIO Gourmet, Edição Limitada',
        'p0-desc': '100% não fermentado, não transgénico, com corantes autênticos e padrão norte-americano. Since 2015. Uma criação artesanal que combina tradição e qualidade premium. Ideal para dar um toque picante a qualquer prato. Apresentação 250ml.',
        'p1-nombre': 'Oriental Chilli Oil Gourmet',
        'p1-desc': 'Com vinagre, envelhecido no Colorado. Maturado em barril de carvalho e carvalho queimado. Um processo único de maturação que confere complexidade e profundidade de sabor. Perfeito para cozinha asiática e pratos gourmet. Apresentação 250ml.',
        'p2-nombre': 'Chilli Oil Azeite Oriental – Receita Portuguesa',
        'p2-desc': '"Picante que enamora." Azeite de piri-piri 100% natural, sem conservantes, corantes nem aditivos de qualquer tipo. Elaborado seguindo uma autêntica receita portuguesa tradicional. Ideal para massas, arroz, sopas e marinadas. Apresentação 280ml.',
        'p3-nombre': 'Chili Thai',
        'p3-desc': '"Picante que enamora." Azeite picante 100% natural. Fusão única entre sabores orientais e técnicas portuguesas tradicionais. Ideal para dar um toque exótico e picante aos seus pratos favoritos. Apresentação 100ml.',
        /* Salsas */
        'p4-nombre': 'Piri-Piri Molho Picante Habanero',
        'p4-desc': '"Picante que enamora." Molho picante 100% orgânico com habanero. Uma explosão de sabor com o característico picante do piri-piri habanero, elaborado com ingredientes orgânicos certificados. Perfeito para tacos, asas de frango e carnes grelhadas. Apresentação 250ml.',
        'p5-nombre': 'Piri-Piri Molho Picante Diabolo',
        'p5-desc': '"Com este molho, cada dentada é um desafio. Consegues aguentar?" Molho picante 100% natural. O autêntico molho piri-piri português com nível de picante intenso. Para os verdadeiros apreciadores de piri-piri. Perfeito para carnes, mariscos e tapas. Apresentação 250ml.',
        'p6-nombre': 'Don INACIO Molho Picante Gourmet, Edição Limitada',
        'p6-desc': 'Molho picante Don INACIO 100% natural. Elaborado com ingredientes de produção própria (piri-piri 100% carolina reaper), sem açúcar adicionado nem aromas artificiais. Produto fermentado 12 meses, o que o torna uma criação única que reflete a paixão pelos produtos artesanais de qualidade. Apresentação 250ml.',
        'p7-nombre': 'Piri-Piri Molho Picante Inferno',
        'p7-desc': '"Faz com que cada dentada arda de sabor!" Molho picante 100% natural. Elaborado artesanalmente seguindo receitas caseiras tradicionais com um toque de intensidade. Perfeito para quem procura sabor autêntico e picante memorável. Apresentação 250ml.',
    },

    en: {
        /* Navbar */
        'nav-volver': 'Back',
        'nav-inicio': 'Home',
        'nav-reservar': 'Book a Table',
        /* Hero */
        'hero-label': 'Artisan Shop',
        'hero-title': 'Hot Sauces &amp; <em>Spicy Oils</em>',
        'hero-subtitle': 'Artisan fire in every drop',
        'hero-desc': 'Explore our premium collection of artisan hot sauces and spicy oils. From traditional Portuguese recipes to unique oriental fusions, every product is crafted <strong>100% naturally with no preservatives or additives</strong>. For true spice lovers.',
        /* Breadcrumb */
        'bc-productos': 'Products',
        'bc-salsas': 'Hot Sauces & Spicy Oils',
        /* Sección */
        'seccion-titulo': 'Our <em>Gourmet Spice</em> Collection',
        'seccion-desc': 'Artisan-crafted, 100% natural, no preservatives or additives.',
        'subsec-aceites': 'Spicy Oils',
        'subsec-salsas': 'Hot Sauces',
        /* Cards */
        'card-badge-agotado': 'Sold Out',
        'card-cta-ver': 'View details',
        'card-cta-nodisponible': 'Unavailable',
        /* Modal */
        'modal-sublabel': 'Artisan Spice · Don Inacio',
        'modal-precio-nota': 'price per unit',
        'modal-btn-wsp': 'Order via WhatsApp',
        'modal-btn-agotado': 'Product Sold Out',
        'modal-wsp-msg': 'Hi! I\'m interested in:',
        'modal-wsp-precio': 'Price:',
        /* Aceites */
        'p0-nombre': 'Chilli Oil Don INACIO Gourmet, Limited Edition',
        'p0-desc': '100% non-fermented, non-GMO, with authentic colorings and US standard. Since 2015. An artisan creation combining tradition and premium quality. Perfect for adding a spicy kick to any dish. 250ml presentation.',
        'p1-nombre': 'Oriental Chilli Oil Gourmet',
        'p1-desc': 'With vinegar, aged in Colorado. Matured in oak and charred oak barrels. A unique aging process that brings complexity and depth of flavor. Perfect for Asian cuisine and gourmet dishes. 250ml presentation.',
        'p2-nombre': 'Chilli Oil Oriental – Portuguese Recipe',
        'p2-desc': '"Spice that captivates." 100% natural hot chili oil, with no preservatives, colorings or additives of any kind. Made following an authentic traditional Portuguese recipe. Ideal for pasta, rice, soups and marinades. 280ml presentation.',
        'p3-nombre': 'Chili Thai',
        'p3-desc': '"Spice that captivates." 100% natural spicy oil. A unique fusion of oriental flavors and traditional Portuguese techniques. Perfect for adding an exotic, spicy touch to your favorite dishes. 100ml presentation.',
        /* Salsas */
        'p4-nombre': 'Piri-Piri Habanero Hot Sauce',
        'p4-desc': '"Spice that captivates." 100% organic hot sauce with habanero. A flavor explosion with the characteristic heat of habanero chile, made with certified organic ingredients. Perfect for tacos, wings and grilled meats. 250ml presentation.',
        'p5-nombre': 'Piri-Piri Diabolo Hot Sauce',
        'p5-desc': '"With this sauce, every bite is a challenge. Can you handle it?" 100% natural hot sauce. The authentic Portuguese piri-piri sauce with intense heat level. For true chili lovers. Perfect for meats, seafood and tapas. 250ml presentation.',
        'p6-nombre': 'Don INACIO Gourmet Hot Sauce, Limited Edition',
        'p6-desc': 'Don INACIO 100% natural hot sauce. Made with home-grown ingredients (100% carolina reaper chile), no added sugar or artificial flavors. Fermented for 12 months, making it a unique creation that reflects a passion for quality artisan products. 250ml presentation.',
        'p7-nombre': 'Piri-Piri Inferno Hot Sauce',
        'p7-desc': '"Make every bite burn with flavor!" 100% natural hot sauce. Artisan-crafted following traditional homemade recipes with a touch of intensity. Perfect for those seeking authentic flavor and memorable heat. 250ml presentation.',
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

    // Re-render grids with new language
    const gridAceites = document.getElementById('gridAceites');
    const gridSalsas = document.getElementById('gridSalsas');
    if (gridAceites) { gridAceites.innerHTML = ''; renderizarProductos(aceites, 'gridAceites', 0); }
    if (gridSalsas) { gridSalsas.innerHTML = ''; renderizarProductos(salsas, 'gridSalsas', aceites.length); }
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

// ============ ACEITES (orden según lista) ============
const aceites = [
    {
        imagen: '../../extern-arch/picantes/8.png',
        nombre: 'Chilli Oil Don INACIO Gourmet, Edición Limitada',
        descripcion: 'Chilli Oil Don INACIO Gourmet, Edición Limitada, elaborada a baso de 50 de aceite vegeta y 50 oliva extra virgen, 100 %chile calorina riper fermenteado por un priododo minim de 12 meses. creacion artesanal unica con un sabor inigualable. que combina tradicion y palidad premiun. presentacion 250ml',
        precio: '16.80',
        enStock: true
    },
    {
        imagen: '../../extern-arch/picantes/7.png',
        nombre: 'Oriental Chilli Oil Gourmet',
        descripcion: 'chili oil ariental abase de 50% aceite oliva 50% aceite vegetal, 50% chile carolina reper y 50% chile cayena, fermentado minimoo de 6 meses, que aporta complejidad y profundidad de sabor, perfecto para realzar el sabor de tus platillos favoritos, presentacion 250ml',
        precio: '13.80',
        enStock: true
    },
    {
        imagen: '../../extern-arch/picantes/6.png',
        nombre: 'Chilli Oil Aceite Oriental – Receta Portuguesa',
        descripcion: 'aceite de chiles picantes 100% natural, sin conservantes, colorantes ni aditivos de ningun tipo, elaborado siguiendo una autentica receta portuguesa tradicional, ideal para pastas, arroz, sopas y marinados, presentacion 250ml',
        precio: '9.30',
        enStock: true
    },
    {
        imagen: '../../extern-arch/picantes/4.png',
        nombre: 'Chili Thai',
        descripcion: '"Picante que enamora." Aceite picante 100% natural. Fusión única entre sabores orientales y técnicas portuguesas tradicionales. Ideal para dar un toque exótico y picante a tus platillos favoritos. Presentación 250ml.',
        precio: '11.40',
        enStock: true
    }
];

// ============ SALSAS (orden según lista) ============
const salsas = [
    {
        imagen: '../../extern-arch/picantes/5.png',
        nombre: 'Piri-Piri Salsa Picante Habanero',
        descripcion: '"Picante que enamora." Salsa picante 100% orgánica con habanero. Una explosión de sabor con el característico picor del chile habanero, elaborada con ingredientes orgánicos certificados. Perfecta para tacos, alitas y carnes a la parrilla. Presentación 250ml.',
        precio: '6.20',
        enStock: true
    },
    {
        imagen: '../../extern-arch/picantes/3.png',
        nombre: 'Piri-Piri Salsa Picante Diabolo',
        descripcion: '"Con esta salsa, cada bocado es un desafío. ¿Podrás soportarlo?" Salsa picante 100% natural. La auténtica salsa piri-piri portuguesa con nivel de picor intenso. Para los verdaderos amantes del chile. Perfecta para carnes, mariscos y tapas. Presentación 250ml.',
        precio: '8.10',
        enStock: true
    },
    {
        imagen: '../../extern-arch/picantes/2.png',
        nombre: 'Don INACIO Salsa Picante Gourmet, Edición Limitada',
        descripcion: 'Salsa picante Don INACIO 100% natural. Elaborada con ingredientes de producción propia (chile 100% carolina reaper), sin azúcar añadido ni sabores artificiales. Producto fermentado 12 meses, lo que hace que sea una creación única que refleja la pasión por los productos artesanales de calidad. Presentación 250ml.',
        precio: '18.50',
        enStock: true
    },
    {
        imagen: '../../extern-arch/picantes/1.png',
        nombre: 'Piri-Piri Salsa Picante Infierno',
        descripcion: '"¡Haz que cada bocado arda de sabor!" Salsa picante 100% natural. Elaborada artesanalmente siguiendo recetas caseras tradicionales con un toque de intensidad. Perfecta para los que buscan sabor auténtico y picante memorable. Presentación 250ml.',
        precio: '7.40',
        enStock: true
    }
];

const WA_NUMBER = '50369204235';

// ============ RENDER ============
// offset: índice base para buscar claves de traducción (aceites=0, salsas=aceites.length)
function renderizarProductos(lista, gridId, offset) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    lista.forEach((p, i) => {
        const idx = offset + i;
        const nombre = t(`p${idx}-nombre`) || p.nombre;
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
                <div class="product-footer">
                    <div class="product-price">$${p.precio}</div>
                    ${cta}
                </div>
            </div>`;

        if (p.enStock) {
            card.addEventListener('click', () => abrirModal(p, idx));
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirModal(p, idx); }
            });
        }

        grid.appendChild(card);
    });
}

function cargarProductos() {
    renderizarProductos(aceites, 'gridAceites', 0);
    renderizarProductos(salsas, 'gridSalsas', aceites.length);
}

// ============ MODAL ============
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function abrirModal(p, idx) {
    const nombre = t(`p${idx}-nombre`) || p.nombre;
    const desc = t(`p${idx}-desc`) || p.descripcion;
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
    // NOTE: applyTranslations() already calls cargarProductos() internally — do NOT call it again here.
    applyTranslations(currentLang);
});