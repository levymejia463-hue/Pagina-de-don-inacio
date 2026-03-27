// ============ DATOS DE PRODUCTOS — VINOS TINTOS ============
const productosVinos = [
    // p0
    {
        imagen: '../../extern-arch/imgs-vinos/24.png',
        nombre: 'Chateau Champion - Saint-Émilion Grand Cru 2015',
        anada: '2015',
        descripcion: 'Un Grand Cru de la prestigiosa denominación Saint-Émilion que representa la elegancia bordelesa en su máxima expresión. La añada 2015, considerada excepcional en Burdeos, brilla en este ensamblaje clásico de Cabernet Sauvignon, Cabernet Franc y Merlot. Un vino de estructura impresionante, con taninos sedosos y notas complejas de frutas negras, cedro y especias.',
        precio: '63.90',
        enStock: true
    },
    // p1
    {
        imagen: '../../extern-arch/imgs-vinos/25.png',
        nombre: 'Chateau Champion - Saint-Émilion Grand Cru 2018',
        anada: '2018',
        descripcion: 'La añada 2018 de este Saint-Émilion Grand Cru demuestra la consistencia de Chateau Champion en elaborar vinos excepcionales. Este blend magistral de Cabernet Sauvignon, Cabernet Franc y Merlot captura la esencia del terruño bordelés con su complejidad aromática y estructura elegante. Aromas de ciruela, violetas frescas y cacao amargo, con un final largo y persistente.',
        precio: '58.70',
        enStock: true
    }
];

// ============ I18N ============
const langMeta = {
    es: { flag: '🇪🇸', code: 'ES', htmlLang: 'es' },
    pt: { flag: '🇵🇹', code: 'PT', htmlLang: 'pt' },
    en: { flag: '🇺🇸', code: 'EN', htmlLang: 'en' },
};

const translations = {
    es: {
        // Nav
        'nav-volver': 'Atrás',
        'nav-inicio': 'Inicio',
        'nav-reservar': 'Reservar Mesa',
        // Hero
        'hero-badge': 'SAINT-ÉMILION · BURDEOS',
        'hero-title': 'VINOS TINTOS',
        'hero-desc': 'Elegancia bordelesa en su máxima expresión · Chateau Champion Grand Cru',
        // Ribbon
        'ribbon-medalla': '🥇 Medalla de Oro · Concurso Féminalise',
        'ribbon-appellation': '🍷 A.O.C. Saint-Émilion Grand Cru · Burdeos, Francia',
        'ribbon-cepas': '🌿 Cabernet Sauvignon · Cabernet Franc · Merlot',
        // Card UI
        'card-badge-agotado': 'Agotado',
        'card-anada': 'Añada',
        'card-cta-ver': '📱 Pedir por WhatsApp',
        'card-cta-nodisponible': '❌ No disponible',
        // Modal UI
        'modal-appellation': 'A.O.C. Saint-Émilion Grand Cru',
        'modal-btn-wsp': '📱 Pedir por WhatsApp',
        'modal-btn-agotado': '❌ No disponible',
        'modal-wsp-msg': 'Hola! Me interesa el producto:',
        'modal-wsp-precio': 'Precio:',
        // Products — nombres
        'p0-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2015',
        'p1-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2018',
        // Products — awards
        'p0-award': 'Medalla de Oro · Concurso Féminalise',
        'p1-award': 'Medalla de Oro · Concurso Féminalise',
        // Products — descripciones
        'p0-desc': 'Un Grand Cru de la prestigiosa denominación Saint-Émilion que representa la elegancia bordelesa en su máxima expresión. La añada 2015, considerada excepcional en Burdeos, brilla en este ensamblaje clásico de Cabernet Sauvignon, Cabernet Franc y Merlot. Un vino de estructura impresionante, con taninos sedosos y notas complejas de frutas negras, cedro y especias. Medalla de Oro en el Concurso Féminalise.',
        'p1-desc': 'La añada 2018 de este Saint-Émilion Grand Cru demuestra la consistencia de Chateau Champion en elaborar vinos excepcionales. Este blend magistral de Cabernet Sauvignon, Cabernet Franc y Merlot captura la esencia del terruño bordelés con su complejidad aromática y estructura elegante. Aromas de ciruela, violetas frescas y cacao amargo, con un final largo y persistente. Medalla de Oro en el Concurso Féminalise.',
    },

    pt: {
        // Nav
        'nav-volver': 'Voltar',
        'nav-inicio': 'Início',
        'nav-reservar': 'Reservar Mesa',
        // Hero
        'hero-badge': 'SAINT-ÉMILION · BORDÉUS',
        'hero-title': 'VINHOS TINTOS',
        'hero-desc': 'Elegância bordalesa na sua máxima expressão · Chateau Champion Grand Cru',
        // Ribbon
        'ribbon-medalla': '🥇 Medalha de Ouro · Concurso Féminalise',
        'ribbon-appellation': '🍷 A.O.C. Saint-Émilion Grand Cru · Bordéus, França',
        'ribbon-cepas': '🌿 Cabernet Sauvignon · Cabernet Franc · Merlot',
        // Card UI
        'card-badge-agotado': 'Esgotado',
        'card-anada': 'Colheita',
        'card-cta-ver': '📱 Pedir pelo WhatsApp',
        'card-cta-nodisponible': '❌ Indisponível',
        // Modal UI
        'modal-appellation': 'A.O.C. Saint-Émilion Grand Cru',
        'modal-btn-wsp': '📱 Pedir pelo WhatsApp',
        'modal-btn-agotado': '❌ Indisponível',
        'modal-wsp-msg': 'Olá! Tenho interesse no produto:',
        'modal-wsp-precio': 'Preço:',
        // Products — nomes
        'p0-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2015',
        'p1-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2018',
        // Products — awards
        'p0-award': 'Medalha de Ouro · Concurso Féminalise',
        'p1-award': 'Medalha de Ouro · Concurso Féminalise',
        // Products — descrições
        'p0-desc': 'Um Grand Cru da prestigiosa denominação Saint-Émilion que representa a elegância bordalesa na sua máxima expressão. A colheita de 2015, considerada excecional em Bordéus, brilha neste lote clássico de Cabernet Sauvignon, Cabernet Franc e Merlot. Um vinho de estrutura impressionante, com taninos sedosos e notas complexas de frutos negros, cedro e especiarias. Medalha de Ouro no Concurso Féminalise.',
        'p1-desc': 'A colheita de 2018 deste Saint-Émilion Grand Cru demonstra a consistência do Chateau Champion em elaborar vinhos excecionais. Este blend magistral de Cabernet Sauvignon, Cabernet Franc e Merlot capta a essência do terroir bordalês com a sua complexidade aromática e estrutura elegante. Aromas de ameixa, violetas frescas e cacau amargo, com um final longo e persistente. Medalha de Ouro no Concurso Féminalise.',
    },

    en: {
        // Nav
        'nav-volver': 'Back',
        'nav-inicio': 'Home',
        'nav-reservar': 'Book a Table',
        // Hero
        'hero-badge': 'SAINT-ÉMILION · BORDEAUX',
        'hero-title': 'RED WINES',
        'hero-desc': 'Bordeaux elegance at its finest · Chateau Champion Grand Cru',
        // Ribbon
        'ribbon-medalla': '🥇 Gold Medal · Féminalise Competition',
        'ribbon-appellation': '🍷 A.O.C. Saint-Émilion Grand Cru · Bordeaux, France',
        'ribbon-cepas': '🌿 Cabernet Sauvignon · Cabernet Franc · Merlot',
        // Card UI
        'card-badge-agotado': 'Sold Out',
        'card-anada': 'Vintage',
        'card-cta-ver': '📱 Order via WhatsApp',
        'card-cta-nodisponible': '❌ Unavailable',
        // Modal UI
        'modal-appellation': 'A.O.C. Saint-Émilion Grand Cru',
        'modal-btn-wsp': '📱 Order via WhatsApp',
        'modal-btn-agotado': '❌ Unavailable',
        'modal-wsp-msg': 'Hello! I\'m interested in:',
        'modal-wsp-precio': 'Price:',
        // Products — names
        'p0-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2015',
        'p1-nombre': 'Chateau Champion - Saint-Émilion Grand Cru 2018',
        // Products — awards
        'p0-award': 'Gold Medal · Féminalise Competition',
        'p1-award': 'Gold Medal · Féminalise Competition',
        // Products — descriptions
        'p0-desc': 'A Grand Cru from the prestigious Saint-Émilion appellation, representing Bordeaux elegance at its finest. The 2015 vintage, considered exceptional in Bordeaux, shines in this classic blend of Cabernet Sauvignon, Cabernet Franc and Merlot. A wine of impressive structure, with silky tannins and complex notes of dark fruits, cedar and spices. Gold Medal at the Féminalise Competition.',
        'p1-desc': 'The 2018 vintage of this Saint-Émilion Grand Cru demonstrates Chateau Champion\'s consistent ability to craft exceptional wines. This masterly blend of Cabernet Sauvignon, Cabernet Franc and Merlot captures the essence of the Bordeaux terroir with its aromatic complexity and elegant structure. Aromas of plum, fresh violets and bitter cocoa, with a long and persistent finish. Gold Medal at the Féminalise Competition.',
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

    const lista = document.getElementById('productosLista');
    if (lista) {
        lista.innerHTML = '';
        cargarProductos();
    }
}

// ============ FUNCIÓN PARA CARGAR PRODUCTOS ============
function cargarProductos() {
    const lista = document.getElementById('productosLista');
    lista.innerHTML = '';

    productosVinos.forEach((producto, idx) => {
        const nombreTraducido = t(`p${idx}-nombre`) || producto.nombre;

        const numeroWhatsApp = '50369204235';
        const mensaje = `${t('modal-wsp-msg')} ${nombreTraducido} – ${t('modal-wsp-precio')} $${producto.precio}`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card';
        productoCard.style.cursor = 'pointer';

        productoCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-whatsapp')) {
                abrirModal(producto, idx);
            }
        });

        productoCard.innerHTML = `
            <div class="producto-imagen-wrapper">
                <img src="${producto.imagen}" alt="${nombreTraducido}" class="producto-imagen" loading="lazy">
                ${!producto.enStock ? `<span class="badge-agotado">${t('card-badge-agotado')}</span>` : ''}
                <div class="producto-anada-badge">
                    <span class="anada-label">${t('card-anada')}</span>
                    <span class="anada-valor">${producto.anada}</span>
                </div>
            </div>
            <div class="producto-contenido">
                <div class="producto-appellation">A.O.C. Saint-Émilion Grand Cru</div>
                <h2 class="producto-nombre">${nombreTraducido}</h2>

                <p class="producto-descripcion">${t(`p${idx}-desc`) || producto.descripcion}</p>
                <p class="producto-precio">$${producto.precio}</p>
                <button
                    class="btn-whatsapp ${!producto.enStock ? 'disabled' : ''}"
                    onclick="event.stopPropagation(); ${producto.enStock ? `window.open('${urlWhatsApp}', '_blank')` : 'return false;'}"
                    ${!producto.enStock ? 'disabled' : ''}
                >
                    ${producto.enStock ? t('card-cta-ver') : t('card-cta-nodisponible')}
                </button>
            </div>
        `;

        lista.appendChild(productoCard);
    });
}

// ============ FUNCIONES DEL MODAL ============
function abrirModal(producto, idx) {
    const modal = document.getElementById('productoModal');
    const modalImagen = document.getElementById('modalImagen');
    const modalNombre = document.getElementById('modalNombre');
    const modalDescripcion = document.getElementById('modalDescripcion');
    const modalPrecio = document.getElementById('modalPrecio');
    const modalWhatsapp = document.getElementById('modalWhatsapp');
    const nombre = t(`p${idx}-nombre`) || producto.nombre;
    const desc = t(`p${idx}-desc`) || producto.descripcion;

    modalImagen.src = producto.imagen;
    modalImagen.alt = nombre;
    modalNombre.textContent = nombre;
    modalDescripcion.textContent = desc;
    modalPrecio.textContent = `$${producto.precio}`;

    if (producto.enStock) {
        const numeroWhatsApp = '50369204235';
        const mensaje = `${t('modal-wsp-msg')} ${nombre} – ${t('modal-wsp-precio')} $${producto.precio}`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        modalWhatsapp.textContent = t('modal-btn-wsp');
        modalWhatsapp.onclick = () => window.open(urlWhatsApp, '_blank');
        modalWhatsapp.disabled = false;
        modalWhatsapp.classList.remove('disabled');
    } else {
        modalWhatsapp.textContent = t('modal-btn-agotado');
        modalWhatsapp.disabled = true;
        modalWhatsapp.classList.add('disabled');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const modal = document.getElementById('productoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============ LANG SWITCHER LOGIC ============
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

// ============ CERRAR MODAL CON ESC ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
});

// ============ DOM CONTENT LOADED ============
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
});
