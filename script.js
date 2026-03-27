/* ============================================
   DON INACIO — MAIN SCRIPT
   ============================================ */

// ============================================
// PAGE LOADER — once per session
// ============================================
(function () {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    const hasSeenLoader = sessionStorage.getItem('loaderShown');

    if (hasSeenLoader) {
        // User has already seen the loader this session — remove it instantly
        loader.style.display = 'none';
        document.body.style.overflow = '';
    } else {
        // First visit — show loader normally
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.remove();
                    document.body.style.overflow = '';
                }, 700);
            }, 1200);
        });

        sessionStorage.setItem('loaderShown', 'true');
    }
})();

const CONFIG = {
    phone: "50369204235",
    heroInterval: 5500,
    showcaseVisible: 3,         // cards visible in showcase
    maxMessageChars: 4000
};

// ============================================
// NAVBAR — SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
if (navbar) {
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.pageYOffset > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
}

// ============================================
// MOBILE DRAWER
// ============================================
const drawerEl = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const hamburger = document.getElementById('navHamburger');
const drawerClose = document.getElementById('drawerClose');

function openDrawer() {
    drawerEl.classList.add('open');
    drawerOverlay.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawerEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
}
function closeDrawer() {
    drawerEl.classList.remove('open');
    drawerOverlay.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawerEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
}
if (hamburger) hamburger.addEventListener('click', openDrawer);
if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

// Drawer — productos sub-panel
const drawerProductosToggle = document.getElementById('drawerProductosToggle');
const drawerProductosPanel = document.getElementById('drawerProductosPanel');
if (drawerProductosToggle && drawerProductosPanel) {
    drawerProductosToggle.addEventListener('click', function () {
        const isOpen = drawerProductosPanel.classList.toggle('open');
        drawerProductosToggle.classList.toggle('open', isOpen);
        drawerProductosToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

// Drawer — open chef modal from drawer
const drawerFilosofia = document.getElementById('drawerFilosofia');
if (drawerFilosofia) {
    drawerFilosofia.addEventListener('click', () => {
        closeDrawer();
        setTimeout(openOverlay, 260);
    });
}

// Close drawer on link click (navigation)
if (drawerEl) {
    drawerEl.querySelectorAll('a[href]:not(.drawer-ver-todos)').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

// ============================================
// PRODUCTOS MODAL
// ============================================
const productosModal = document.getElementById('productosModal');
const productosModalOverlay = document.getElementById('productosModalOverlay');
const productosModalClose = document.getElementById('productosModalClose');
const btnProductosNav = document.getElementById('btnProductosNav');

function openProductosModal() {
    productosModal.classList.add('open');
    productosModalOverlay.classList.add('open');
    productosModal.setAttribute('aria-hidden', 'false');
    if (btnProductosNav) btnProductosNav.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
}
function cerrarProductosModal() {
    productosModal.classList.remove('open');
    productosModalOverlay.classList.remove('open');
    productosModal.setAttribute('aria-hidden', 'true');
    if (btnProductosNav) btnProductosNav.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
}
if (btnProductosNav) btnProductosNav.addEventListener('click', openProductosModal);
if (productosModalClose) productosModalClose.addEventListener('click', cerrarProductosModal);
if (productosModalOverlay) productosModalOverlay.addEventListener('click', cerrarProductosModal);

window.cerrarProductosModal = cerrarProductosModal;

// ============================================
// MODAL: SECCIÓN NO DISPONIBLE
// ============================================
const noDispOverlay = document.getElementById('noDisponibleOverlay');
const noDispClose = document.getElementById('noDisponibleClose');

function mostrarNoDisponible() {
    if (!noDispOverlay) return;
    noDispOverlay.classList.add('open');
    noDispOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
}
function cerrarNoDisponible() {
    if (!noDispOverlay) return;
    noDispOverlay.classList.remove('open');
    noDispOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
}
if (noDispClose) noDispClose.addEventListener('click', cerrarNoDisponible);
if (noDispOverlay) noDispOverlay.addEventListener('click', e => {
    if (e.target === noDispOverlay) cerrarNoDisponible();
});
window.mostrarNoDisponible = mostrarNoDisponible;

// ============================================
// CHEF OVERLAY
// ============================================
const overlayEl = document.getElementById('overlay');
const closeBtnEl = document.getElementById('closeBtn');
const btnFilosofia = document.getElementById('btnFilosofia');

function openOverlay() {
    overlayEl.classList.add('active');
    overlayEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
}
function closeOverlay() {
    overlayEl.classList.remove('active');
    overlayEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
}
if (btnFilosofia) btnFilosofia.addEventListener('click', openOverlay);
if (closeBtnEl) closeBtnEl.addEventListener('click', closeOverlay);
if (overlayEl) {
    overlayEl.addEventListener('click', e => {
        if (e.target === overlayEl) closeOverlay();
    });
}

// ── Auto-open chef overlay: sólo una vez por sesión de navegación ──
// sessionStorage se borra al cerrar el navegador/pestaña, pero persiste
// mientras el usuario navega entre páginas. Así el overlay aparece al
// llegar al sitio, pero no molesta cada vez que vuelven al inicio.
const SESSION_KEY = 'doninacio_chef_shown';
if (overlayEl && !sessionStorage.getItem(SESSION_KEY)) {
    // Esperar a que la página esté completamente cargada antes de mostrar el modal
    // Esto evita bloquear el LCP y la interactividad inicial
    const showChef = () => {
        setTimeout(() => {
            openOverlay();
            sessionStorage.setItem(SESSION_KEY, '1');
        }, 1200);
    };
    if (document.readyState === 'complete') {
        showChef();
    } else {
        window.addEventListener('load', showChef, { once: true });
    }
}


// ESC key — close any open modal/overlay/drawer
document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (overlayEl?.classList.contains('active')) closeOverlay();
    if (productosModal?.classList.contains('open')) cerrarProductosModal();
    if (noDispOverlay?.classList.contains('open')) cerrarNoDisponible();
    if (drawerEl?.classList.contains('open')) closeDrawer();
    const modalEl = document.querySelector('.modal-overlay');
    if (modalEl) cerrarModal();
});

// ============================================
// HERO SLIDER — SMOOTH TRANSLATE
// ============================================
const heroTrack = document.getElementById('heroTrack');
const heroPrev = document.getElementById('heroPrev');
const heroNext = document.getElementById('heroNext');
const heroDotsContainer = document.getElementById('heroDots');

let heroSlides = heroTrack ? heroTrack.querySelectorAll('.hero-slide') : [];
let heroIndex = 0;
let heroTimer = null;
let heroTouching = false;
let heroTouchX = 0;

function heroGoTo(index) {
    heroIndex = ((index % heroSlides.length) + heroSlides.length) % heroSlides.length;
    heroTrack.style.transform = `translateX(-${heroIndex * 100}%)`;
    document.querySelectorAll('.hero-dot').forEach((d, i) => {
        d.classList.toggle('active', i === heroIndex);
    });
}

function heroStart() {
    heroStop();
    heroTimer = setInterval(() => heroGoTo(heroIndex + 1), CONFIG.heroInterval);
}
function heroStop() {
    clearInterval(heroTimer);
}

if (heroTrack && heroSlides.length) {
    // Build dots
    heroSlides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => { heroGoTo(i); heroStop(); heroStart(); });
        heroDotsContainer.appendChild(dot);
    });

    // Controls
    if (heroPrev) heroPrev.addEventListener('click', () => { heroGoTo(heroIndex - 1); heroStop(); heroStart(); });
    if (heroNext) heroNext.addEventListener('click', () => { heroGoTo(heroIndex + 1); heroStop(); heroStart(); });

    // Touch/swipe support
    heroTrack.addEventListener('touchstart', e => {
        heroTouching = true;
        heroTouchX = e.changedTouches[0].clientX;
        heroStop();
    }, { passive: true });
    heroTrack.addEventListener('touchend', e => {
        if (!heroTouching) return;
        heroTouching = false;
        const dx = e.changedTouches[0].clientX - heroTouchX;
        if (Math.abs(dx) > 40) {
            heroGoTo(heroIndex + (dx < 0 ? 1 : -1));
        }
        heroStart();
    }, { passive: true });

    // Pause on focus/hover
    heroTrack.addEventListener('mouseenter', heroStop);
    heroTrack.addEventListener('mouseleave', heroStart);

    heroGoTo(0);
    heroStart();
}

// ============================================
// SHOWCASE MINI SLIDER
// ============================================
const showcaseTrack = document.getElementById('showcaseTrack');
const showcasePrev = document.getElementById('showcasePrev');
const showcaseNext = document.getElementById('showcaseNext');
const showcaseDotsEl = document.getElementById('showcaseDots');

let showcaseIndex = 0;
let showcaseItems = [];
let showcaseVisible = CONFIG.showcaseVisible;

function getShowcaseVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function showcaseGoTo(index) {
    if (!showcaseItems.length) return;
    const visible = getShowcaseVisible();
    const max = Math.max(0, showcaseItems.length - visible);
    showcaseIndex = Math.min(Math.max(index, 0), max);

    const itemW = showcaseItems[0].getBoundingClientRect().width + 24; // gap 24px
    showcaseTrack.style.transform = `translateX(-${showcaseIndex * itemW}px)`;

    document.querySelectorAll('.showcase-dot').forEach((d, i) => {
        d.classList.toggle('active', i === showcaseIndex);
    });

    if (showcasePrev) showcasePrev.disabled = showcaseIndex === 0;
    if (showcaseNext) showcaseNext.disabled = showcaseIndex >= max;
}

function buildShowcaseDots() {
    if (!showcaseDotsEl) return;
    showcaseDotsEl.innerHTML = '';
    const visible = getShowcaseVisible();
    const pages = Math.max(1, showcaseItems.length - visible + 1);
    for (let i = 0; i < pages; i++) {
        const d = document.createElement('button');
        d.className = 'showcase-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', `Grupo ${i + 1}`);
        d.addEventListener('click', () => showcaseGoTo(i));
        showcaseDotsEl.appendChild(d);
    }
}

if (showcaseTrack) {
    showcaseItems = Array.from(showcaseTrack.querySelectorAll('.showcase-item'));

    // Click on item → navigate
    showcaseItems.forEach(item => {
        item.addEventListener('click', () => {
            const href = item.dataset.href;
            if (href) window.location.href = href;
        });
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); item.click();
            }
        });
    });

    if (showcasePrev) showcasePrev.addEventListener('click', () => showcaseGoTo(showcaseIndex - 1));
    if (showcaseNext) showcaseNext.addEventListener('click', () => showcaseGoTo(showcaseIndex + 1));

    // Touch/swipe
    let touchStartX = 0;
    showcaseTrack.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    showcaseTrack.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) showcaseGoTo(showcaseIndex + (dx < 0 ? 1 : -1));
    }, { passive: true });

    buildShowcaseDots();
    showcaseGoTo(0);

    // Rebuild on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            buildShowcaseDots();
            showcaseGoTo(0);
        }, 200);
    });
}

// ============================================
// SCROLL TO TOP
// ============================================
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.pageYOffset > 500);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// INTERSECTION OBSERVER — REVEAL ANIMATIONS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const revealEls = document.querySelectorAll(
        '.section-label, .section-title, .section-desc, ' +
        '.showcase-item, .info-card, .menu-highlight-item, ' +
        '.contact-form, .contact-info-col'
    );
    revealEls.forEach((el, i) => {
        el.classList.add('reveal');
        if (i % 3 === 1) el.classList.add('reveal-delay-1');
        if (i % 3 === 2) el.classList.add('reveal-delay-2');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
});

// ============================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// NAVIGATION HELPERS
// ============================================
function resena() {
    window.open(
        'https://www.google.com/maps/place/Restaurante+Don+Inacio/@13.9844312,-89.5587424,15z/data=!4m17!1m8!3m7!1s0x8f62e97bd357222d:0xf094f90683731f2b!2sRestaurante+Don+Inacio!8m2!3d13.9844366!4d-89.5588233!10e5!16s%2Fg%2F11yczhmw3h!3m7!1s0x8f62e97bd357222d:0xf094f90683731f2b!8m2!3d13.9844366!4d-89.5588233!9m1!1b1!16s%2Fg%2F11yczhmw3h?hl=es&entry=ttu',
        '_blank', 'noopener,noreferrer'
    );
}
window.resena = resena;

// ============================================
// WHATSAPP FORM
// ============================================
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sendWhatsapp(event) {
    if (event?.preventDefault) event.preventDefault();

    const nombre = document.getElementById('nombre')?.value?.trim() || '';
    const correo = document.getElementById('correo')?.value?.trim() || '';
    const mensaje = document.getElementById('mensaje')?.value?.trim() || '';

    if (!nombre || nombre.length < 2) {
        return showNotification('Por favor ingresa tu nombre completo.', 'error');
    }
    if (!correo || !validateEmail(correo)) {
        return showNotification('Por favor ingresa un correo electrónico válido.', 'error');
    }
    if (!mensaje || mensaje.length < 10) {
        return showNotification('Por favor escribe un mensaje más detallado (mínimo 10 caracteres).', 'error');
    }
    if (mensaje.length > CONFIG.maxMessageChars) {
        return showNotification(`El mensaje es muy largo. Máximo ${CONFIG.maxMessageChars} caracteres.`, 'error');
    }

    const text = `*Nuevo mensaje desde la web*\n\n*Nombre:* ${nombre}\n*Correo:* ${correo}\n\n*Mensaje:*\n${mensaje}\n\n---\n_Enviado desde RestauranteDonInacio.com_`;
    const url = `https://api.whatsapp.com/send?phone=${CONFIG.phone}&text=${encodeURIComponent(text)}`;

    showNotification('Abriendo WhatsApp…', 'success');
    setTimeout(() => {
        document.getElementById('nombre').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('mensaje').value = '';
    }, 400);
    setTimeout(() => window.open(url, '_blank', 'noopener,noreferrer'), 500);
    return false;
}
window.sendWhatsapp = sendWhatsapp;

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    document.querySelector('.notification')?.remove();

    const el = document.createElement('div');
    el.className = `notification ${type}`;
    el.innerHTML = `<span class="material-symbols-outlined">${type === 'error' ? 'error' : 'check_circle'}</span><span>${message}</span>`;
    document.body.appendChild(el);

    setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(30px)';
        el.style.transition = 'opacity 0.3s, transform 0.3s';
        setTimeout(() => el.remove(), 320);
    }, 3200);
}
window.showNotification = showNotification;

// ============================================
// SISTEMA DE IDIOMAS (i18n) — DON INACIO
// ============================================
const translations = {
    es: {
        // Nav
        'nav-inicio': 'Inicio',
        'nav-galeria': 'Galería',
        'nav-menu': 'Menú',
        'nav-productos': 'Productos',
        'nav-reservar': 'Reservar Mesa',
        'nav-reservar-short': 'Reservar',
        'chef-btn': 'Filosofía del Chef',
        // Productos modal
        'modal-prod-title': 'Nuestros Productos',
        'modal-prod-desc': 'Elaborados con pasión y tradición portuguesa',
        'cat-naturales': 'Productos Naturales',
        'cat-charcuteria': 'Charcutería',
        'cat-condimentos': 'Condimentos & Bebidas',
        'cat-condimentos-title': 'Condimentos',
        'cat-bebidas': 'Bebidas',
        'prod-mermeladas': 'Mermeladas Artesanales',
        'prod-licores': 'Licores Artesanales',
        'prod-manteca': 'Manteca Natural',
        'prod-tomate': 'Salsa de Tomate',
        'prod-pastas': 'Pastas y Salsas Gourmet',
        'prod-curados': 'Embutidos Curados',
        'prod-cocidos': 'Embutidos Cocidos',
        'prod-salchichas': 'Salchichas Frescas',
        'prod-encurtidos': 'Encurtidos',
        'prod-salsas': 'Salsas Picantes',
        'prod-salsas-aceites': 'Salsas y Aceites Picantes',
        'prod-sales': 'Sales Gourmet',
        'prod-aceite': 'Aceite de Oliva',
        'prod-vinos': 'Vinos Porto',
        'prod-vinos-blancos': 'Vinos Blancos',
        'ver-todos': 'Ver Todos los Productos',
        'ver-catalogo': 'Ver Catálogo Completo',
        // Sección Productos
        'sec-prod-label': 'Tienda Artesanal',
        'sec-prod-title': 'Nuestros <em>Productos</em>',
        'sec-prod-desc': 'Cada producto nace de la misma filosofía que guía nuestra cocina: ingredientes honestos, técnica tradicional y alma portuguesa.',
        'prod-mermeladas-title': 'Mermeladas',
        'prod-mermeladas-p': 'Frutas naturales, sin conservantes. Sabor auténtico y equilibrado para desayunos y tablas gourmet.',
        'prod-salsas-title': 'Salsas Picantes',
        'prod-salsas-p': 'Chiles frescos y especias naturales. Disponibles en distintos niveles de intensidad.',
        'prod-licores-title': 'Licores Naturales',
        'prod-licores-p': 'Preparados con frutas y hierbas. Aroma suave y natural, perfectos solos o en cócteles.',
        'prod-curados-title': 'Embutidos Curados',
        'prod-curados-p': 'Curación tradicional portuguesa. Sabor intenso, ideales con quesos y vinos selectos.',
        'prod-cocidos-title': 'Embutidos Cocidos',
        'prod-cocidos-p': 'Sabor suave, cocidos al punto. Listos para consumir, ingredientes de calidad premium.',
        'prod-salchichas-title': 'Salchichas Frescas',
        'prod-salchichas-p': 'Con especias seleccionadas. Perfectas a la parrilla, jugosas y de excelente calidad.',
        'prod-tomate-title': 'Salsa de Tomate',
        'prod-tomate-p': '100% artesanal, tomates frescos, sin aditivos ni conservantes artificiales.',
        'prod-vinos-title': 'Vinos Porto',
        'prod-vinos-p': 'Selección de las mejores bodegas portuguesas. Perfectos para maridar con nuestros platos.',
        // Sección Menú
        'sec-menu-label': 'Cocina Portuguesa',
        'sec-menu-title': 'Una experiencia<br><em>gastronómica única</em>',
        'sec-menu-desc': 'Nuestro menú es un viaje sensorial por los sabores más auténticos de Portugal. Cada plato cuenta una historia, elaborado con ingredientes seleccionados y técnicas que respetan la tradición sin renunciar a la creatividad.',
        'highlight-autor': 'Cocina de autor',
        'highlight-natural': 'Ingredientes naturales',
        'highlight-artesanal': 'Elaboración artesanal',
        'btn-explorar-menu': 'Explorar el Menú',
        // Galería
        'sec-galeria-label': 'Visual',
        'sec-galeria-title': 'Nuestra <em>Galería</em>',
        'btn-ver-galeria': 'Ver Galería Completa',
        // Info
        'info-tagline': 'Auténtica cocina portuguesa<br>en el corazón de Santa Ana',
        'info-ubicacion': 'Ubicación',
        'info-ver-mapa': 'Ver en mapa →',
        'info-horario': 'Horario',
        'info-dias': 'Lunes – Domingo',
        'info-contacto': 'Contacto',
        'info-especialidad': 'Especialidad',
        'info-especialidad-desc': 'Cocina portuguesa artesanal y productos gourmet elaborados con pasión',
        // Chef overlay
        'chef-modal-title': 'Filosofía del Chef',
        'chef-p1': '"Mi pasión es <strong>la transmisión del saber</strong>, y no me conformo con dar de comer: <strong>quiero crear emociones.</strong>',
        'chef-p2': 'La excelencia está en la diversidad y el modo de progresar, es conocer y comparar las diversidades de productos, culturas y técnicas. Es importante no confundir <strong>la cocina-fusión con la cocina-confusión</strong>, que es lo que han hecho muchos cocineros que se han limitado a mezclar sin sentido…"',
        'chef-p3': 'Mi objetivo es preservar la diferencia: me gustaría ser el <strong>"chef antiglobalización".</strong> Estoy encantado de tener influencias, a favor de la mezcla, me encanta descubrir cocinas, pero no pienso que haya que crear un modelo único. El verdadero peligro es la unificación de la cocina y del pensamiento. La genialidad sin la base de un producto no tiene sentido. Pero la <strong>creatividad, si no hay un proyecto,</strong> tampoco tiene razón de ser.',
        'chef-p4': 'La gente muchas veces me decía "Haces cosas muy raras" y yo les contestaba "Me dedico a la creatividad". A veces hemos querido explicar demasiado la cocina de vanguardia cuando quizá es muy difícil de explicar. Hay que vivirla.',
        'chef-quote': 'La cocina es un lenguaje mediante el cual se puede expresar armonía, felicidad, belleza, poesía, complejidad, magia, humor, provocación, cultura.',
        'chef-p5': 'La cocina es multisensorial. En el instante en el que pruebas un plato, la información que llega al cerebro es impresionante.',
        'chef-p6': 'Las técnicas de cocción, tanto clásicas como modernas, son un patrimonio que el cocinero debe saber aprovechar al máximo.',
        'chef-p7': 'La creatividad no llega en minutos ni en horas: la creatividad llega en el momento que tiene que llegar.',
        'chef-p8': 'Cuando los clientes conocen las técnicas precisas para hacer alta cocina, valoran y disfrutan mucho más los platos que les servimos, pues en mi cocina cada plato lleva su tiempo a confeccionar, ser paciente es sinónimo de poder apreciar y disfrutar de lo que hay de mejor en nuestra cocina hecho para cada uno de nuestros clientes con mucha pasión.',
        'chef-dilema': '"Dilema del cocinero: El poeta triste escribe poemas y te hace llorar. El pintor triste pinta cuadros y te logra emocionar. El músico triste compone canciones y te hace cantar. Al cocinero triste… le está prohibido cocinar"',
        'chef-honor': 'Ser cocinero es un gran honor. Llamarse "chef", una pequeña huachafería.',
        // Contacto
        'contact-label': 'Comunícate',
        'contact-title': '¿Tienes<br>alguna consulta?',
        'contact-desc': 'Escríbenos y te responderemos a la brevedad. También puedes llamarnos o visitarnos en Santa Ana.',
        'form-nombre': 'Nombre completo',
        'form-nombre-ph': 'Ej: Juan Pérez',
        'form-correo': 'Correo electrónico',
        'form-mensaje': 'Mensaje',
        'form-mensaje-ph': 'Escribe tu consulta aquí…',
        'form-enviar': 'Enviar por WhatsApp',
        // Footer
        'footer-brand-desc': 'Cocina portuguesa artesanal<br>desde el corazón',
        'footer-nav-title': 'Navegación',
        'footer-contact-title': 'Contacto',
        'footer-hours': 'Mar – Dom: 6:00 PM – 10:00 PM',
        'footer-copy': '© 2025 Restaurante Don Inacio. Todos los derechos reservados.',
        'btn-resena': 'Reseñar',
        'nodisp-titulo': 'Estimado Visitante',
        'nodisp-cuerpo': 'Agradecemos sinceramente su interés en esta sección.<br>Esta funcionalidad se encuentra <strong>temporalmente no disponible</strong> mientras trabajamos en mejorar su experiencia.',
        'nodisp-firma': 'Atentamente,',
        'nodisp-btn': 'Entendido',
    },
    pt: {
        'nav-inicio': 'Início',
        'nav-galeria': 'Galeria',
        'nav-menu': 'Menu',
        'nav-productos': 'Produtos',
        'nav-reservar': 'Reservar Mesa',
        'nav-reservar-short': 'Reservar',
        'chef-btn': 'Filosofia do Chef',
        'modal-prod-title': 'Os Nossos Produtos',
        'modal-prod-desc': 'Elaborados com paixão e tradição portuguesa',
        'cat-naturales': 'Produtos Naturais',
        'cat-charcuteria': 'Charcutaria',
        'cat-condimentos': 'Condimentos & Bebidas',
        'cat-condimentos-title': 'Condimentos',
        'cat-bebidas': 'Bebidas',
        'prod-mermeladas': 'Compotas Artesanais',
        'prod-licores': 'Licores Artesanais',
        'prod-manteca': 'Banha Natural',
        'prod-tomate': 'Molho de Tomate',
        'prod-pastas': 'Massas e Molhos Gourmet',
        'prod-curados': 'Enchidos Curados',
        'prod-cocidos': 'Enchidos Cozidos',
        'prod-salchichas': 'Salsichas Frescas',
        'prod-encurtidos': 'Pickles',
        'prod-salsas': 'Molhos Picantes',
        'prod-salsas-aceites': 'Molhos e Azeites Picantes',
        'prod-sales': 'Sais Gourmet',
        'prod-aceite': 'Azeite',
        'prod-vinos': 'Vinhos do Porto',
        'prod-vinos-blancos': 'Vinhos Brancos',
        'ver-todos': 'Ver Todos os Produtos',
        'ver-catalogo': 'Ver Catálogo Completo',
        'sec-prod-label': 'Loja Artesanal',
        'sec-prod-title': 'Os Nossos <em>Produtos</em>',
        'sec-prod-desc': 'Cada produto nasce da mesma filosofia que guia a nossa cozinha: ingredientes honestos, técnica tradicional e alma portuguesa.',
        'prod-mermeladas-title': 'Compotas',
        'prod-mermeladas-p': 'Frutos naturais, sem conservantes. Sabor autêntico e equilibrado para pequenos-almoços e tábuas gourmet.',
        'prod-salsas-title': 'Molhos Picantes',
        'prod-salsas-p': 'Pimentos frescos e especiarias naturais. Disponíveis em diferentes níveis de intensidade.',
        'prod-licores-title': 'Licores Naturais',
        'prod-licores-p': 'Preparados com frutas e ervas. Aroma suave e natural, perfeitos sozinhos ou em cocktails.',
        'prod-curados-title': 'Enchidos Curados',
        'prod-curados-p': 'Cura tradicional portuguesa. Sabor intenso, ideais com queijos e vinhos selectos.',
        'prod-cocidos-title': 'Enchidos Cozidos',
        'prod-cocidos-p': 'Sabor suave, cozidos no ponto. Prontos a consumir, ingredientes de qualidade premium.',
        'prod-salchichas-title': 'Salsichas Frescas',
        'prod-salchichas-p': 'Com especiarias seleccionadas. Perfeitas na grelha, suculentas e de excelente qualidade.',
        'prod-tomate-title': 'Molho de Tomate',
        'prod-tomate-p': '100% artesanal, tomates frescos, sem aditivos nem conservantes artificiais.',
        'prod-vinos-title': 'Vinhos do Porto',
        'prod-vinos-p': 'Selecção das melhores adegas portuguesas. Perfeitos para harmonizar com os nossos pratos.',
        'sec-menu-label': 'Cozinha Portuguesa',
        'sec-menu-title': 'Uma experiência<br><em>gastronómica única</em>',
        'sec-menu-desc': 'O nosso menu é uma viagem sensorial pelos sabores mais autênticos de Portugal. Cada prato conta uma história, elaborado com ingredientes seleccionados e técnicas que respeitam a tradição sem abdicar da criatividade.',
        'highlight-autor': 'Cozinha de autor',
        'highlight-natural': 'Ingredientes naturais',
        'highlight-artesanal': 'Elaboração artesanal',
        'btn-explorar-menu': 'Explorar o Menu',
        'sec-galeria-label': 'Visual',
        'sec-galeria-title': 'A Nossa <em>Galeria</em>',
        'btn-ver-galeria': 'Ver Galeria Completa',
        'info-tagline': 'Autêntica cozinha portuguesa<br>no coração de Santa Ana',
        'info-ubicacion': 'Localização',
        'info-ver-mapa': 'Ver no mapa →',
        'info-horario': 'Horário',
        'info-dias': 'Segunda – Domingo',
        'info-contacto': 'Contacto',
        'info-especialidad': 'Especialidade',
        'info-especialidad-desc': 'Cozinha portuguesa artesanal e produtos gourmet elaborados com paixão',
        'chef-modal-title': 'Filosofia do Chef',
        'chef-p1': '"A minha paixão é <strong>a transmissão do saber</strong>, e não me contento em alimentar: <strong>quero criar emoções.</strong>',
        'chef-p2': 'A excelência está na diversidade e no modo de progredir, é conhecer e comparar as diversidades de produtos, culturas e técnicas. É importante não confundir <strong>a cozinha-fusão com a cozinha-confusão</strong>, que é o que fizeram muitos cozinheiros que se limitaram a misturar sem sentido…"',
        'chef-p3': 'O meu objectivo é preservar a diferença: gostaria de ser o <strong>"chef antiglobalização".</strong> Estou encantado de ter influências, a favor da mistura, adoro descobrir cozinhas, mas não acho que seja preciso criar um modelo único. O verdadeiro perigo é a unificação da cozinha e do pensamento. A genialidade sem a base de um produto não faz sentido. Mas a <strong>criatividade, se não há projecto,</strong> também não tem razão de ser.',
        'chef-p4': 'As pessoas diziam-me muitas vezes "Fazes coisas muito estranhas" e eu respondia "Dedico-me à criatividade". Por vezes quisemos explicar demasiado a cozinha de vanguarda quando talvez seja muito difícil de explicar. É preciso vivê-la.',
        'chef-quote': 'A cozinha é uma linguagem através da qual se pode expressar harmonia, felicidade, beleza, poesia, complexidade, magia, humor, provocação, cultura.',
        'chef-p5': 'A cozinha é multissensorial. No instante em que provas um prato, a informação que chega ao cérebro é impressionante.',
        'chef-p6': 'As técnicas de confecção, tanto clássicas como modernas, são um património que o cozinheiro deve saber aproveitar ao máximo.',
        'chef-p7': 'A criatividade não chega em minutos nem em horas: a criatividade chega no momento em que tem de chegar.',
        'chef-p8': 'Quando os clientes conhecem as técnicas precisas para fazer alta cozinha, valorizam e desfrutam muito mais os pratos que lhes servimos, pois na minha cozinha cada prato leva o seu tempo a confeccionar, ser paciente é sinónimo de poder apreciar e desfrutar do melhor da nossa cozinha feito para cada um dos nossos clientes com muita paixão.',
        'chef-dilema': '"Dilema do cozinheiro: O poeta triste escreve poemas e faz-te chorar. O pintor triste pinta quadros e consegue emocionar-te. O músico triste compõe canções e faz-te cantar. Ao cozinheiro triste… é-lhe proibido cozinhar"',
        'chef-honor': 'Ser cozinheiro é uma grande honra. Chamar-se "chef", uma pequena vaidade.',
        'contact-label': 'Entre em Contacto',
        'contact-title': 'Tem<br>alguma questão?',
        'contact-desc': 'Escreva-nos e responderemos brevemente. Também pode ligar-nos ou visitar-nos em Santa Ana.',
        'form-nombre': 'Nome completo',
        'form-nombre-ph': 'Ex: João Silva',
        'form-correo': 'Endereço de email',
        'form-mensaje': 'Mensagem',
        'form-mensaje-ph': 'Escreva a sua questão aqui…',
        'form-enviar': 'Enviar por WhatsApp',
        'footer-brand-desc': 'Cozinha portuguesa artesanal<br>desde o coração',
        'footer-nav-title': 'Navegação',
        'footer-contact-title': 'Contacto',
        'footer-hours': 'Ter – Dom: 6:00 PM – 10:00 PM',
        'footer-copy': '© 2025 Restaurante Don Inacio. Todos os direitos reservados.',
        'btn-resena': 'Avaliar',
        'nodisp-titulo': 'Estimado Visitante',
        'nodisp-cuerpo': 'Agradecemos sinceramente o seu interesse nesta secção.<br>Esta funcionalidade encontra-se <strong>temporariamente indisponível</strong> enquanto trabalhamos para melhorar a sua experiência.',
        'nodisp-firma': 'Atenciosamente,',
        'nodisp-btn': 'Entendido',
    },
    en: {
        'nav-inicio': 'Home',
        'nav-galeria': 'Gallery',
        'nav-menu': 'Menu',
        'nav-productos': 'Products',
        'nav-reservar': 'Reserve a Table',
        'nav-reservar-short': 'Reserve',
        'chef-btn': "Chef's Philosophy",
        'modal-prod-title': 'Our Products',
        'modal-prod-desc': 'Crafted with passion and Portuguese tradition',
        'cat-naturales': 'Natural Products',
        'cat-charcuteria': 'Charcuterie',
        'cat-condimentos': 'Condiments & Drinks',
        'cat-condimentos-title': 'Condiments',
        'cat-bebidas': 'Drinks',
        'prod-mermeladas': 'Artisan Jams',
        'prod-licores': 'Artisan Liqueurs',
        'prod-manteca': 'Natural Lard',
        'prod-tomate': 'Tomato Sauce',
        'prod-pastas': 'Gourmet Pastas & Sauces',
        'prod-curados': 'Cured Meats',
        'prod-cocidos': 'Cooked Meats',
        'prod-salchichas': 'Fresh Sausages',
        'prod-encurtidos': 'Pickles',
        'prod-salsas': 'Hot Sauces',
        'prod-salsas-aceites': 'Hot Sauces & Oils',
        'prod-sales': 'Gourmet Salts',
        'prod-aceite': 'Olive Oil',
        'prod-vinos': 'Port Wines',
        'prod-vinos-blancos': 'White Wines',
        'ver-todos': 'View All Products',
        'ver-catalogo': 'View Full Catalogue',
        'sec-prod-label': 'Artisan Shop',
        'sec-prod-title': 'Our <em>Products</em>',
        'sec-prod-desc': 'Each product is born from the same philosophy that guides our kitchen: honest ingredients, traditional technique and Portuguese soul.',
        'prod-mermeladas-title': 'Jams',
        'prod-mermeladas-p': 'Natural fruits, no preservatives. Authentic, balanced flavour for breakfasts and gourmet boards.',
        'prod-salsas-title': 'Hot Sauces',
        'prod-salsas-p': 'Fresh chillies and natural spices. Available in different levels of intensity.',
        'prod-licores-title': 'Natural Liqueurs',
        'prod-licores-p': 'Made with fruits and herbs. Soft, natural aroma — perfect on their own or in cocktails.',
        'prod-curados-title': 'Cured Meats',
        'prod-curados-p': 'Traditional Portuguese curing. Intense flavour, ideal with cheeses and select wines.',
        'prod-cocidos-title': 'Cooked Meats',
        'prod-cocidos-p': 'Mild flavour, perfectly cooked. Ready to eat, premium quality ingredients.',
        'prod-salchichas-title': 'Fresh Sausages',
        'prod-salchichas-p': 'With selected spices. Perfect on the grill, juicy and of excellent quality.',
        'prod-tomate-title': 'Tomato Sauce',
        'prod-tomate-p': '100% artisan, fresh tomatoes, no artificial additives or preservatives.',
        'prod-vinos-title': 'Port Wines',
        'prod-vinos-p': "Selection from the finest Portuguese wineries. Perfect to pair with our dishes.",
        'sec-menu-label': 'Portuguese Cuisine',
        'sec-menu-title': 'A unique<br><em>gastronomic experience</em>',
        'sec-menu-desc': "Our menu is a sensory journey through the most authentic flavours of Portugal. Each dish tells a story, crafted with selected ingredients and techniques that respect tradition while embracing creativity.",
        'highlight-autor': "Chef's cuisine",
        'highlight-natural': 'Natural ingredients',
        'highlight-artesanal': 'Artisan preparation',
        'btn-explorar-menu': 'Explore the Menu',
        'sec-galeria-label': 'Visual',
        'sec-galeria-title': 'Our <em>Gallery</em>',
        'btn-ver-galeria': 'View Full Gallery',
        'info-tagline': 'Authentic Portuguese cuisine<br>in the heart of Santa Ana',
        'info-ubicacion': 'Location',
        'info-ver-mapa': 'View on map →',
        'info-horario': 'Hours',
        'info-dias': 'Monday – Sunday',
        'info-contacto': 'Contact',
        'info-especialidad': 'Specialty',
        'info-especialidad-desc': 'Artisan Portuguese cuisine and gourmet products crafted with passion',
        'chef-modal-title': "Chef's Philosophy",
        'chef-p1': '"My passion is <strong>the transmission of knowledge</strong>, and I am not satisfied with merely feeding people: <strong>I want to create emotions.</strong>',
        'chef-p2': 'Excellence lies in diversity and the way we progress — getting to know and compare the diversity of products, cultures and techniques. It is important not to confuse <strong>fusion cuisine with confusion cuisine</strong>, which is what many chefs have done by mindlessly mixing things together…"',
        'chef-p3': 'My goal is to preserve difference: I would like to be the <strong>"anti-globalisation chef".</strong> I am happy to be influenced, I love mixing, I love discovering cuisines, but I don\'t think we should create a single model. The real danger is the unification of cuisine and thought. Genius without a product base makes no sense. But <strong>creativity without a project</strong> has no reason to exist either.',
        'chef-p4': 'People often told me "You do very strange things" and I would reply "I dedicate myself to creativity". Sometimes we have wanted to over-explain avant-garde cuisine when perhaps it is very hard to explain. You have to live it.',
        'chef-quote': 'Cuisine is a language through which one can express harmony, happiness, beauty, poetry, complexity, magic, humour, provocation, culture.',
        'chef-p5': 'Cuisine is multisensory. The moment you taste a dish, the information that reaches the brain is impressive.',
        'chef-p6': 'Cooking techniques — both classical and modern — are a heritage that the chef must know how to make the most of.',
        'chef-p7': 'Creativity does not arrive in minutes or hours: creativity arrives when it has to arrive.',
        'chef-p8': 'When clients understand the precise techniques behind haute cuisine, they appreciate and enjoy the dishes we serve them far more. In my kitchen, every dish takes time to prepare — patience is synonymous with being able to appreciate and enjoy the very best our kitchen has to offer, made for each of our clients with great passion.',
        'chef-dilema': '"The cook\'s dilemma: The sad poet writes poems and makes you cry. The sad painter paints pictures and manages to move you. The sad musician composes songs and makes you sing. The sad cook… is forbidden from cooking"',
        'chef-honor': 'Being a cook is a great honour. Calling oneself "chef" — a little pretentious.',
        'contact-label': 'Get in Touch',
        'contact-title': 'Do you have<br>a question?',
        'contact-desc': 'Write to us and we will reply promptly. You can also call us or visit us in Santa Ana.',
        'form-nombre': 'Full name',
        'form-nombre-ph': 'E.g: John Smith',
        'form-correo': 'Email address',
        'form-mensaje': 'Message',
        'form-mensaje-ph': 'Write your question here…',
        'form-enviar': 'Send via WhatsApp',
        'footer-brand-desc': 'Artisan Portuguese cuisine<br>from the heart',
        'footer-nav-title': 'Navigation',
        'footer-contact-title': 'Contact',
        'footer-hours': 'Tue – Sun: 6:00 PM – 10:00 PM',
        'footer-copy': '© 2025 Don Inacio Restaurant. All rights reserved.',
        'btn-resena': 'Review',
        'nodisp-titulo': 'Dear Visitor',
        'nodisp-cuerpo': 'We sincerely appreciate your interest in this section.<br>This feature is <strong>temporarily unavailable</strong> while we work on improving your experience.',
        'nodisp-firma': 'Sincerely,',
        'nodisp-btn': 'Understood',
    }
};

const langMeta = {
    es: { flag: '🇪🇸', code: 'ES', htmlLang: 'es' },
    pt: { flag: '🇵🇹', code: 'PT', htmlLang: 'pt' },
    en: { flag: '🇺🇸', code: 'EN', htmlLang: 'en' },
};

let currentLang = localStorage.getItem('doninacio_lang') || 'es';

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // innerHTML (supports <br> and <strong>)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    // html lang
    document.documentElement.lang = langMeta[lang].htmlLang;

    // Update button display
    const flagEl = document.querySelector('#langSwitcher .lang-flag');
    const codeEl = document.querySelector('#langSwitcher .lang-code');
    if (flagEl) flagEl.textContent = langMeta[lang].flag;
    if (codeEl) codeEl.textContent = langMeta[lang].code;

    // Active option highlight
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    currentLang = lang;
    localStorage.setItem('doninacio_lang', lang);
}

// Toggle open/close
const langSwitcherEl = document.getElementById('langSwitcher');
const langCurrentBtn = document.getElementById('langCurrent');

if (langCurrentBtn) {
    langCurrentBtn.addEventListener('click', e => {
        e.stopPropagation();
        langSwitcherEl.classList.toggle('open');
        langCurrentBtn.setAttribute('aria-expanded', langSwitcherEl.classList.contains('open'));
    });

    document.addEventListener('click', () => {
        langSwitcherEl.classList.remove('open');
        langCurrentBtn.setAttribute('aria-expanded', 'false');
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

// Apply on load
applyTranslations(currentLang);

// ============================================
// IDIOMAS EN MODAL FILOSOFÍA DEL CHEF
// ============================================
(function () {
    const overlayLangBtns = document.querySelectorAll('#overlayLangSwitcher .overlay-lang-btn');
    if (!overlayLangBtns.length) return;

    const syncOverlayLang = () => {
        overlayLangBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
    };

    overlayLangBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            applyTranslations(btn.dataset.lang);
            syncOverlayLang();
        });
    });

    // Sync active button when modal opens
    if (btnFilosofia) btnFilosofia.addEventListener('click', syncOverlayLang);
    const drawerFilosofiaEl2 = document.getElementById('drawerFilosofia');
    if (drawerFilosofiaEl2) drawerFilosofiaEl2.addEventListener('click', () => setTimeout(syncOverlayLang, 270));

    // Initial sync
    syncOverlayLang();
})();