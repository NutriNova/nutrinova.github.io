document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funcionalidad del Menú Móvil (Hamburguesa)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animar el botón de hamburguesa (opcional)
        hamburger.classList.toggle('toggle');
    });

    // Cerrar menú al hacer clic en un enlace (en móvil)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 2. Animaciones al hacer Scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15, // El elemento debe estar 15% visible para activar
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que aparece
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // 3. Efecto click adicional (Feedback táctil extra para JS)
    // Complementa el :active de CSS para asegurar que en móviles se note el clic
    const interactiveBtns = document.querySelectorAll('.btn-interactive');
    interactiveBtns.forEach(btn => {
        btn.addEventListener('touchstart', () => {
            btn.style.transform = 'scale(0.92)';
        }, {passive: true});
        
        btn.addEventListener('touchend', () => {
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        }, {passive: true});
    });
});