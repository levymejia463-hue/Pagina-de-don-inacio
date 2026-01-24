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

function volver() {
    window.location.href="../index.html"
}



window.addEventListener('DOMContentLoaded', function() {
            const inputFecha = document.getElementById('fecha');
            const hoy = new Date().toISOString().split('T')[0];
            inputFecha.min = hoy;
        });

function enviarWhatsApp() {
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const personas = document.getElementById('persona').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!fecha || !hora || !personas) {
        alert("por favor rellene la informacion (*)");
        return
    }

    let texto = '*Nueva Reservación*%0A%0A';
    texto += 'Fecha: ' + fecha + '%0A';
    texto += 'Hora: ' + hora + '%0A';
    texto += 'Personas: ' + personas + '%0A';

    if (mensaje.trim() !== '') {
        texto += 'Mensaje: ' + mensaje;
    }

    const url = 'https://wa.me/50372760109?text=' + texto;
    window.open(url, '_blank');
}

