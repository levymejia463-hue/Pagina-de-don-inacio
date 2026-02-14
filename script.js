const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('closeBtn');
const btnOpen = document.getElementById('present-card');

// Abrir overlay desde botón present-card
if (btnOpen) {
    btnOpen.addEventListener('click', () => {
        overlay.classList.add('active');
    });
}

// Cerrar overlay
if (btnClose) {
    btnClose.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
}

// Cerrar overlay al hacer click fuera del contenido
if (overlay) {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
}

const menu = document.getElementById('manuham');
const open = document.getElementById('openMenu');
const close = document.getElementById('close');

if (open && menu) {
    open.addEventListener('click', () => {
        menu.classList.add('actives');
        open.classList.add('remove');
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    });
}

if (close && menu && open) {
    close.addEventListener('click', () => {
        menu.classList.remove('actives');
        open.classList.remove('remove');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    });
}

// Cerrar menú al hacer click en el overlay oscuro
if (menu) {
    menu.addEventListener('click', (e) => {
        if (e.target === menu) {
            menu.classList.remove('actives');
            open.classList.remove('remove');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
        }
    });
}

const slider = document.getElementById("slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (next && slider) {
    next.addEventListener("click", () => {
        slider.scrollLeft += 320;
    });
}

if (prev && slider) {
    prev.addEventListener("click", () => {
        slider.scrollLeft -= 320;
    });
}

function resena(){
    window.location.href="https://www.google.com/maps/place/Restaurante+Don+Inacio/@13.9844312,-89.5587424,15z/data=!4m17!1m8!3m7!1s0x8f62e97bd357222d:0xf094f90683731f2b!2sRestaurante+Don+Inacio!8m2!3d13.9844366!4d-89.5588233!10e5!16s%2Fg%2F11yczhmw3h!3m7!1s0x8f62e97bd357222d:0xf094f90683731f2b!8m2!3d13.9844366!4d-89.5588233!9m1!1b1!16s%2Fg%2F11yczhmw3h?hl=es&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D";
}

function productos() {
    window.location.href="/secc-productos/index2.html";
}

// Slider automático del hero
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    // ============================================
    // POSICIONAMIENTO DINÁMICO DEL MEGA MENU
    // ============================================
    
    const productosDropdown = document.querySelector('.productos-dropdown');
    const megaMenu = document.querySelector('.mega-menu');
    
    if (productosDropdown && megaMenu) {
        // Mostrar mega-menu al pasar el mouse
        productosDropdown.addEventListener('mouseenter', function() {
            megaMenu.style.display = 'flex';
        });
        
        // Mantener visible cuando el mouse está sobre el mega-menu
        megaMenu.addEventListener('mouseenter', function() {
            megaMenu.style.display = 'flex';
        });
        
        // Ocultar cuando el mouse sale del área
        productosDropdown.addEventListener('mouseleave', function(e) {
            const toElement = e.relatedTarget;
            if (!megaMenu.contains(toElement)) {
                setTimeout(() => {
                    if (!megaMenu.matches(':hover')) {
                        megaMenu.style.display = 'none';
                    }
                }, 100);
            }
        });
        
        megaMenu.addEventListener('mouseleave', function() {
            megaMenu.style.display = 'none';
        });
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Cambiar de slide cada 5 segundos
    setInterval(nextSlide, 5000);

    // ============================================
    // ABRIR OVERLAY AUTOMÁTICAMENTE AL CARGAR
    // ============================================
    
    // Esperar 800ms para que la página cargue completamente
    setTimeout(() => {
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.classList.add('active');
        }
    }, 800);

    // Toggle para el dropdown móvil de productos
    const mobileDropdownToggle = document.querySelector(".mobile-dropdown-toggle");
    const mobileDropdownMenu = document.querySelector(".mobile-dropdown-menu");
    
    if (mobileDropdownToggle && mobileDropdownMenu) {
        mobileDropdownToggle.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle de clases para animación suave
            mobileDropdownMenu.classList.toggle('active');
            mobileDropdownToggle.classList.toggle('active');
        });
    }

    // Toggle para expandir el texto de filosofía del chef
    const chefPhilosophy = document.querySelector(".chef-philosophy");
    const chefToggle = document.querySelector(".chef-toggle");
    
    if (chefToggle && chefPhilosophy) {
        chefToggle.addEventListener("click", function(e) {
            e.preventDefault();
            chefPhilosophy.classList.toggle("active");
            
            // Cambiar el texto del botón
            const cicleText = chefToggle.querySelector('.cicle h1');
            if (cicleText) {
                cicleText.textContent = chefPhilosophy.classList.contains("active") ? "^" : "v";
            }
        });
    }

    // ============================================
    // EFECTOS PARALLAX Y SCROLL
    // ============================================
    
    // Efecto parallax en el hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSlider = document.querySelector('.hero-slider');
        const logo1 = document.querySelector('.logo1');
        
        if (heroSlider && scrolled < window.innerHeight) {
            heroSlider.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        if (logo1 && scrolled < window.innerHeight) {
            const scale = Math.max(0.5, 1 - scrolled * 0.0005);
            logo1.style.transform = `translateY(${scrolled * 0.3}px) scale(${scale})`;
            logo1.style.opacity = Math.max(0, 1 - scrolled * 0.002);
        }

        // Mostrar/ocultar header con scroll
        const subHeader = document.querySelector('.sub-header');
        if (subHeader) {
            if (scrolled > 100) {
                subHeader.style.background = 'rgba(0, 0, 0, 0.95)';
                subHeader.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            } else {
                subHeader.style.background = 'rgba(0, 0, 0, 0.85)';
                subHeader.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
            }
        }
    });

    // ============================================
    // INTERSECTION OBSERVER PARA ANIMACIONES
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observar elementos que necesitan animación de entrada
    document.querySelectorAll('.info-item, .productos-header, .text').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // ============================================
    // CURSOR PERSONALIZADO EN CARDS
    // ============================================
    
    document.querySelectorAll('.card-item').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ============================================
    // SMOOTH SCROLL PARA ENLACES INTERNOS
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // CONTADOR DE SCROLL PARA BOTÓN "SCROLL TO TOP"
    // ============================================
    
    // Crear botón de scroll to top (opcional)
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 160px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #fca43f 0%, #fabc74 100%);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
        box-shadow: 0 5px 20px rgba(252, 164, 63, 0.4);
    `;
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.transform = 'translateY(-5px) scale(1.1)';
        scrollTopBtn.style.boxShadow = '0 8px 30px rgba(252, 164, 63, 0.6)';
    });

    scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.transform = 'translateY(0) scale(1)';
        scrollTopBtn.style.boxShadow = '0 5px 20px rgba(252, 164, 63, 0.4)';
    });

    // ============================================
    // LAZY LOADING PARA IMÁGENES
    // ============================================
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
});

// ============================================
// VALIDACIÓN Y ENVÍO DE WHATSAPP
// ============================================

const phone = "50372760109";

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sendWhatsapp(event) {
    if (event && event.preventDefault) event.preventDefault();

    const nombre = document.getElementById("nombre")?.value?.trim() || "";
    const correo = document.getElementById("correo")?.value?.trim() || "";
    const mensaje = document.getElementById("mensaje")?.value?.trim() || "";

    // Validaciones básicas
    if (!nombre) {
        showNotification("Por favor ingresa tu nombre.", "error");
        return;
    }
    if (!correo || !validateEmail(correo)) {
        showNotification("Por favor ingresa un correo válido.", "error");
        return;
    }
    if (!mensaje) {
        showNotification("Por favor escribe un mensaje.", "error");
        return;
    }

    // Límite aproximado
    const maxChars = 4000;
    if (mensaje.length > maxChars) {
        showNotification(`El mensaje es muy largo. Máximo ${maxChars} caracteres.`, "error");
        return;
    }

    // Construir mensaje y codificar
    const text = `Hola, me llamo ${nombre}.\nCorreo: ${correo}\n\n${mensaje}`;
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

    // Mostrar notificación de éxito
    showNotification("Abriendo WhatsApp...", "success");

    // Abrir en nueva pestaña
    setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
    }, 500);
}

// ============================================
// SISTEMA DE NOTIFICACIONES
// ============================================

function showNotification(message, type = "info") {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'error' ? '#f44336' : '#4caf50'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;

    // Agregar animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    if (!document.querySelector('style[data-notification-styles]')) {
        style.setAttribute('data-notification-styles', 'true');
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Exportar funciones en window
window.sendWhatsapp = sendWhatsapp;