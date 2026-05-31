(function () {
    const hamburger = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('mainMenu');
    const menuLinks = menu.querySelectorAll('a');

    /**
     * Alterna la visibilidad del menú móvil
     */
    function toggleMenu() {
        const isActive = menu.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);
        hamburger.setAttribute(
            'aria-label',
            isActive ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
        );
    }

    /**
     * Cierra el menú móvil
     */
    function closeMenu() {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
    }

    // Evento: click en el botón hamburguesa
    hamburger.addEventListener('click', toggleMenu);

    // Evento: click en cualquier enlace del menú → cerrar menú
    menuLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // Evento: tecla Escape → cerrar menú
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            closeMenu();
            hamburger.focus();
        }
    });
})();