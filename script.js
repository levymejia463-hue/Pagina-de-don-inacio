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
    });
}

if (close && menu && open) {
    close.addEventListener('click', () => {
        menu.classList.remove('actives');
        open.classList.remove('remove');
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

function reseña(){
    window.location.href="https://www.google.com/maps/place/Restaurante+Don+Inacio/@13.9844312,-89.5587424,15z/data=!4m17!1m8!3m7!1s0x8f62e97bd357222d:0xf094f90683731f2b!2sRestaurante+Don+Inacio!8m2!3d13.9844366!4d-89.5588233!10e5!16s%2Fg%2F11yczhmw3h!3m7!1s0x8f62e97bd357222d:0xf094f90683731f2b!8m2!3d13.9844366!4d-89.5588233!9m1!1b1!16s%2Fg%2F11yczhmw3h?hl=es&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D";
}

function productos() {
    window.location.href="/secc-productos/index2.html";
}


// Slider automático del hero
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

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

    // Toggle para el dropdown móvil de productos
    const mobileDropdownToggle = document.querySelector(".mobile-dropdown-toggle");
    const mobileDropdownMenu = document.querySelector(".mobile-dropdown-menu");
    
    if (mobileDropdownToggle && mobileDropdownMenu) {
        mobileDropdownToggle.addEventListener("click", function(e) {
            e.preventDefault();
            if (mobileDropdownMenu.style.display === "block") {
                mobileDropdownMenu.style.display = "none";
            } else {
                mobileDropdownMenu.style.display = "block";
            }
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
});







const phone = "50372760109";

function validateEmail(email) {
  // Validación simple
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sendWhatsapp(event) {
  // Si se llama desde un submit o event, impedir comportamiento por defecto
  if (event && event.preventDefault) event.preventDefault();

  const nombre = document.getElementById("nombre")?.value?.trim() || "";
  const correo = document.getElementById("correo")?.value?.trim() || "";
  const mensaje = document.getElementById("mensaje")?.value?.trim() || "";

  // Validaciones básicas
  if (!nombre) {
    alert("Por favor ingresa tu nombre.");
    return;
  }
  if (!correo || !validateEmail(correo)) {
    alert("Por favor ingresa un correo válido.");
    return;
  }
  if (!mensaje) {
    alert("Por favor escribe un mensaje.");
    return;
  }

  // Límite aproximado (WhatsApp tiene límites grandes, pero mejor prevenir)
  const maxChars = 4000;
  if (mensaje.length > maxChars) {
    alert(`El mensaje es muy largo. Máximo ${maxChars} caracteres.`);
    return;
  }

  // Construir mensaje (nuevas líneas con \n) y codificar
  const text = `Hola, me llamo ${nombre}.\nCorreo: ${correo}\n\n${mensaje}`;
  const encoded = encodeURIComponent(text);

  // Usar api.whatsapp.com que redirige correctamente en móvil y web
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

  // Abrir en nueva pestaña
  window.open(url, "_blank", "noopener,noreferrer");
}

// Si prefieres no usar el atributo onclick en el HTML, puedes descomentar
// la siguiente línea para conectar el botón por id (asegúrate de que el botón tenga id="sendBtn").
// document.getElementById("sendBtn")?.addEventListener("click", sendWhatsapp);

// Exportar en window para que funcione con onclick inline
window.sendWhatsapp = sendWhatsapp;