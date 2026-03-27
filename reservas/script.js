/* ============================================
   DON INACIO — RESERVACIONES SCRIPT
   ============================================ */

// ── HEADER SCROLL ──
const resHeader = document.getElementById('resHeader');
if (resHeader) {
    window.addEventListener('scroll', () => {
        resHeader.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

// ── SCROLL TOP ──
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ── FECHA MÍNIMA = HOY ──
window.addEventListener('DOMContentLoaded', () => {
    const inputFecha = document.getElementById('fecha');
    if (inputFecha) {
        inputFecha.min = new Date().toISOString().split('T')[0];
    }

    // Aplicar idioma guardado al cargar
    applyTranslations(currentLang);
});

// ── CONTADOR DE PERSONAS ──
const btnMinus = document.getElementById('btnMinus');
const btnPlus = document.getElementById('btnPlus');
const personaIn = document.getElementById('persona');

if (btnMinus && btnPlus && personaIn) {
    btnMinus.addEventListener('click', () => {
        const v = parseInt(personaIn.value);
        if (v > 1) personaIn.value = v - 1;
    });
    btnPlus.addEventListener('click', () => {
        const v = parseInt(personaIn.value);
        if (v < 20) personaIn.value = v + 1;
    });
}

// ── VALIDACIÓN ──
function validarCampo(id, value) {
    const fg = document.getElementById('fg-' + id);
    if (!fg) return true;
    const ok = value.trim() !== '';
    fg.classList.toggle('invalid', !ok);
    return ok;
}

// Limpiar error al escribir
['nombre', 'fecha', 'hora'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('input', () => {
            const fg = document.getElementById('fg-' + id);
            if (fg) fg.classList.remove('invalid');
        });
    }
});

// ── ENVIAR A WHATSAPP ──
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const personas = document.getElementById('persona').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación
    let ok = true;
    ok = validarCampo('nombre', nombre) && ok;
    ok = validarCampo('fecha', fecha) && ok;
    ok = validarCampo('hora', hora) && ok;

    if (!ok) {
        // Scroll al primer error
        const firstError = document.querySelector('.form-group.invalid');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    // Formatear fecha legible
    const fechaObj = new Date(fecha + 'T12:00:00');
    const fechaFmt = fechaObj.toLocaleDateString('es-SV', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    // Construir mensaje WhatsApp
    let texto = '*🍽️ Nueva Reservación — Don Inacio*%0A%0A';
    texto += '👤 *Nombre:* ' + encodeURIComponent(nombre) + '%0A';
    texto += '📅 *Fecha:* ' + encodeURIComponent(fechaFmt) + '%0A';
    texto += '🕐 *Hora:* ' + encodeURIComponent(hora) + '%0A';
    texto += '👥 *Personas:* ' + personas + '%0A';

    if (mensaje.trim() !== '') {
        texto += '💬 *Mensaje:* ' + encodeURIComponent(mensaje.trim());
    }

    window.open('https://wa.me/50369204235?text=' + texto, '_blank');
}

// ── SISTEMA DE IDIOMAS (i18n) ──
const translations = {
    es: {
        'back': 'Atrás',
        'back-aria': 'Volver',
        'menu-link': 'Menú',
        // Hero
        'hero-label': 'Restaurante Don Inacio',
        'hero-title': 'Reserve<br><em>su Mesa</em>',
        'hero-desc': 'Vivir la experiencia portuguesa merece<br>el mejor momento. Reserva fácil y rápido.',
        // Info
        'info-label': 'Antes de reservar',
        'info-title': 'Todo lo que<br>necesita saber',
        'info-horario-title': 'Horario',
        'info-horario-text': 'Mar – Dom: 6:00 PM – 10:00 PM',
        'info-capacidad-title': 'Capacidad',
        'info-capacidad-text': 'Grupos de 1 a 20 personas. Para grupos mayores, contáctenos.',
        'info-confirmacion-title': 'Confirmación',
        'info-confirmacion-text': 'Recibirá confirmación vía WhatsApp en minutos.',
        'info-contacto-title': 'Contacto directo',
        // Formulario
        'form-card-title': 'Haz tu reservación',
        'form-card-desc': 'Completa el formulario y te confirmamos por WhatsApp',
        'label-nombre': 'Nombre completo',
        'label-fecha': 'Fecha',
        'label-hora': 'Hora',
        'label-personas': 'Cantidad de personas',
        'label-mensaje': 'Mensaje adicional',
        'opt-label': '(opcional)',
        'placeholder-hora': 'Seleccione la hora',
        'placeholder-nombre': 'Ej: María González',
        'placeholder-mensaje': 'Ej: cumpleaños, alergias, preferencia de mesa…',
        'btn-submit': 'Enviar por WhatsApp',
        'form-note': 'Su información se enviará directamente al restaurante vía WhatsApp.',
        'error-nombre': 'Por favor ingresa tu nombre completo.',
        'error-fecha': 'Por favor selecciona una fecha válida.',
        'error-hora': 'Por favor selecciona una hora.',
        'error-personas': 'Mínimo 1 persona.',
        // Footer
        'footer-brand-desc': 'Cocina portuguesa artesanal<br>desde el corazón',
        'footer-nav-title': 'Navegación',
        'nav-inicio': 'Inicio',
        'nav-menu': 'Menú',
        'nav-productos': 'Productos',
        'nav-galeria': 'Galería',
        'nav-reservar': 'Reservar',
        'footer-contact-title': 'Contacto',
        'footer-location': 'Santa Ana, El Salvador',
        'footer-hours': 'Mar – Dom: 6:00 PM – 10:00 PM',
        'footer-copy': '© 2026 Restaurante Don Inacio. Todos los derechos reservados.',
    },
    pt: {
        'back': 'Voltar',
        'back-aria': 'Voltar',
        'menu-link': 'Menu',
        'hero-label': 'Restaurante Don Inácio',
        'hero-title': 'Reserve<br><em>a sua Mesa</em>',
        'hero-desc': 'Viver a experiência portuguesa merece<br>o melhor momento. Reserve fácil e rápido.',
        'info-label': 'Antes de reservar',
        'info-title': 'Tudo o que<br>precisa de saber',
        'info-horario-title': 'Horário',
        'info-horario-text': 'Ter – Dom: 6:00 PM – 10:00 PM',
        'info-capacidad-title': 'Capacidade',
        'info-capacidad-text': 'Grupos de 1 a 20 pessoas. Para grupos maiores, contacte-nos.',
        'info-confirmacion-title': 'Confirmação',
        'info-confirmacion-text': 'Receberá confirmação via WhatsApp em minutos.',
        'info-contacto-title': 'Contacto direto',
        'form-card-title': 'Faça a sua reserva',
        'form-card-desc': 'Preencha o formulário e confirmamos via WhatsApp',
        'label-nombre': 'Nome completo',
        'label-fecha': 'Data',
        'label-hora': 'Hora',
        'label-personas': 'Número de pessoas',
        'label-mensaje': 'Mensagem adicional',
        'opt-label': '(opcional)',
        'placeholder-hora': 'Selecione a hora',
        'placeholder-nombre': 'Ex: Maria González',
        'placeholder-mensaje': 'Ex: aniversário, alergias, preferência de mesa…',
        'btn-submit': 'Enviar pelo WhatsApp',
        'form-note': 'A sua informação será enviada diretamente ao restaurante via WhatsApp.',
        'error-nombre': 'Por favor insira o seu nome completo.',
        'error-fecha': 'Por favor selecione uma data válida.',
        'error-hora': 'Por favor selecione uma hora.',
        'error-personas': 'Mínimo 1 pessoa.',
        'footer-brand-desc': 'Cozinha portuguesa artesanal<br>desde o coração',
        'footer-nav-title': 'Navegação',
        'nav-inicio': 'Início',
        'nav-menu': 'Menu',
        'nav-productos': 'Produtos',
        'nav-galeria': 'Galeria',
        'nav-reservar': 'Reservar',
        'footer-contact-title': 'Contacto',
        'footer-location': 'Santa Ana, El Salvador',
        'footer-hours': 'Ter – Dom: 6:00 PM – 10:00 PM',
        'footer-copy': '© 2026 Restaurante Don Inacio. Todos os direitos reservados.',
    },
    en: {
        'back': 'Back',
        'back-aria': 'Go back',
        'menu-link': 'Menu',
        'hero-label': 'Don Inacio Restaurant',
        'hero-title': 'Reserve<br><em>your Table</em>',
        'hero-desc': 'The Portuguese experience deserves<br>the perfect moment. Book fast and easy.',
        'info-label': 'Before booking',
        'info-title': 'Everything you<br>need to know',
        'info-horario-title': 'Opening Hours',
        'info-horario-text': 'Tue – Sun: 6:00 PM – 10:00 PM',
        'info-capacidad-title': 'Capacity',
        'info-capacidad-text': 'Groups from 1 to 20 people. For larger groups, contact us.',
        'info-confirmacion-title': 'Confirmation',
        'info-confirmacion-text': 'You will receive confirmation via WhatsApp within minutes.',
        'info-contacto-title': 'Direct Contact',
        'form-card-title': 'Make your reservation',
        'form-card-desc': 'Fill in the form and we will confirm via WhatsApp',
        'label-nombre': 'Full name',
        'label-fecha': 'Date',
        'label-hora': 'Time',
        'label-personas': 'Number of guests',
        'label-mensaje': 'Additional message',
        'opt-label': '(optional)',
        'placeholder-hora': 'Select a time',
        'placeholder-nombre': 'E.g. Maria González',
        'placeholder-mensaje': 'E.g. birthday, allergies, table preference…',
        'btn-submit': 'Send via WhatsApp',
        'form-note': 'Your information will be sent directly to the restaurant via WhatsApp.',
        'error-nombre': 'Please enter your full name.',
        'error-fecha': 'Please select a valid date.',
        'error-hora': 'Please select a time.',
        'error-personas': 'Minimum 1 person.',
        'footer-brand-desc': 'Artisan Portuguese cuisine<br>from the heart',
        'footer-nav-title': 'Navigation',
        'nav-inicio': 'Home',
        'nav-menu': 'Menu',
        'nav-productos': 'Products',
        'nav-galeria': 'Gallery',
        'nav-reservar': 'Reserve',
        'footer-contact-title': 'Contact',
        'footer-location': 'Santa Ana, El Salvador',
        'footer-hours': 'Tue – Sun: 6:00 PM – 10:00 PM',
        'footer-copy': '© 2026 Don Inacio Restaurant. All rights reserved.',
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

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.dataset.i18nAria;
        if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    document.documentElement.lang = langMeta[lang].htmlLang;

    const meta = langMeta[lang];
    const flagEl = document.querySelector('.lang-current .lang-flag');
    const codeEl = document.querySelector('.lang-current .lang-code');
    if (flagEl) flagEl.textContent = meta.flag;
    if (codeEl) codeEl.textContent = meta.code;

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    currentLang = lang;
    localStorage.setItem('doninacio_lang', lang);
}

// Lang switcher toggle
const langSwitcher = document.getElementById('langSwitcher');
const langCurrent = document.getElementById('langCurrent');

if (langCurrent) {
    langCurrent.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('open');
        langCurrent.setAttribute('aria-expanded', langSwitcher.classList.contains('open'));
    });

    document.addEventListener('click', () => {
        langSwitcher.classList.remove('open');
        langCurrent.setAttribute('aria-expanded', 'false');
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            applyTranslations(btn.dataset.lang);
            langSwitcher.classList.remove('open');
            langCurrent.setAttribute('aria-expanded', 'false');
        });
    });
}