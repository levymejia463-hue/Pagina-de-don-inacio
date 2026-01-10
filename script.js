const overlay = document.getElementById('overlay')
const btnClose = document.getElementById('closeBtn')
const btnOpen = document.getElementById('present-card')

btnClose.addEventListener('click', () => {
    overlay.classList.remove('active');
});

btnOpen.addEventListener('click', () => {
    overlay.classList.add('active');
} );

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
