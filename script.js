// Este archivo contiene la funcionalidad de JavaScript para la página de QullqiCripto.

document.addEventListener('DOMContentLoaded', function () {

  // Seleccionamos el botón del menú móvil y el menú desplegable
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Verificamos que los elementos existan antes de añadir el evento
  if (mobileMenuButton && mobileMenu) {
    // Añadimos un evento de 'click' al botón
    mobileMenuButton.addEventListener('click', function () {
      // Alternamos la clase 'hidden' en el menú para mostrarlo u ocultarlo.
      // La clase 'hidden' es de Tailwind CSS y aplica 'display: none'.
      mobileMenu.classList.toggle('hidden');
    });
  }

});
