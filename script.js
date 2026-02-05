const overlay = document.getElementById('overlay')
const btnClose = document.getElementById('closeBtn')
const btnOpen = document.getElementById('present-card')

btnClose.addEventListener('click', () => {
    overlay.classList.remove('active');
});

btnOpen.addEventListener('click', () => {
    overlay.classList.add('active');
} );

//para el header
const btnOpen1 = document.getElementById('chef')

btnOpen1.addEventListener('click', () => {
    overlay.classList.add('active');
} );

//y aqui termina jajajaja

const menu = document.getElementById('manuham');
const open = document.getElementById('openMenu');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    menu.classList.add('actives');
    open.classList.add('remove');
})

close.addEventListener('click', () => {
    menu.classList.remove('actives');
    open.classList.remove('remove');
})

const slider = document.getElementById("slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  slider.scrollLeft += 320;
});

prev.addEventListener("click", () => {
  slider.scrollLeft -= 320;
});

function reseña(){
    window.location.href="https://www.google.com/maps/place/Restaurante+Don+Inacio/@13.9844312,-89.5587424,15z/data=!4m17!1m8!3m7!1s0x8f62e97bd357222d:0xf094f90683731f2b!2sRestaurante+Don+Inacio!8m2!3d13.9844366!4d-89.5588233!10e5!16s%2Fg%2F11yczhmw3h!3m7!1s0x8f62e97bd357222d:0xf094f90683731f2b!8m2!3d13.9844366!4d-89.5588233!9m1!1b1!16s%2Fg%2F11yczhmw3h?hl=es&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
}

function productos() {
    window.location.href="/secc-productos/index2.html"
}


const heroText = document.querySelector(".hero-text");
const heroToggle = document.querySelector(".hero-toggle");

heroToggle.addEventListener("click", () => {
  heroText.classList.toggle("active");
});

