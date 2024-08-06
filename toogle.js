// Desactivar el toogler de booststrap
toggler.addEventListener('click', () => {
    collapse.collapse('dispose');
    collapse.classList.toggle('show');
});

// Seleccionar el botón de toggler y la lista desplegable
const toggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.navbar-collapse');

// Agregar evento de clic al botón de toggler
toggler.addEventListener('click', () => {
  // Toggle la clase show en la lista desplegable
    collapse.classList.toggle('show');
});

// Agregar evento de clic al documento
document.addEventListener('click', (e) => {
  // Verificar si el elemento que se ha clickeado es el botón de toggler o la lista desplegable
    if (!toggler.contains(e.target) && !collapse.contains(e.target)) {
    // Cerrar la lista desplegable si está abierta
    collapse.classList.remove('show');
}
});