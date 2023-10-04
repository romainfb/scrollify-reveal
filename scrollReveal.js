/**
 * scrollReveal - Crée des animations de défilement réactives pour les éléments HTML.
 * @param {string} selector - Un sélecteur CSS ciblant les éléments à animer.
 * @param {Object} options - Options de configuration (facultatif).
 */
function scrollReveal(selector, options) {
    // Sélectionne tous les éléments correspondant au sélecteur
    const elements = document.querySelectorAll(selector);

    // Options par défaut pour les animations de défilement
    const defaultOptions = {
        delay: 0, // Délai avant le début de l'animation
        distance: '0px', // Distance de translation verticale
        duration: '500ms', // Durée de l'animation
        easing: 'cubic-bezier(0.5, 0, 0, 1)', // Fonction de temporisation (courbe de vitesse)
        zoomOnAppear: true,
        hideOnExit: true, // Activer ou désactiver la disparition lorsqu'ils sortent de la vue
    };

    // Fusionne les options par défaut avec les options fournies
    options = { ...defaultOptions, ...options };

    // Crée un observateur d'intersection pour détecter la visibilité des éléments
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // Vérifie si l'élément n'a pas déjà été révélé
                if (!target.classList.contains('revealed')) {
                    setTimeout(() => {
                        // Applique l'animation d'apparition
                        target.style.opacity = '1';
                        target.style.transform = 'scale(1)';
                        target.style.transition = `opacity ${options.duration} ${options.easing}, transform ${options.duration} ${options.easing}`;
                        target.style.transitionDelay = `${options.delay}ms, ${options.delay}ms`;

                        // Marque l'élément comme révélé
                        target.classList.add('revealed');
                    }, options.delay);
                }
            } else if (options.hideOnExit) {
                const target = entry.target;

                // Vérifie si l'élément a été révélé précédemment
                if (target.classList.contains('revealed')) {
                    // Applique l'animation de disparition
                    target.style.opacity = '0';

                    // Définit la transformation en fonction de options.zoomOnAppear
                    target.style.transform = `translateY(${options.distance}) ${options.zoomOnAppear ? 'scale(0.8)' : ''}`;
                    
                    target.style.transition = `opacity ${options.duration} ${options.easing}, transform ${options.duration} ${options.easing}`;
                    target.style.transitionDelay = '0s, 0s';

                    // Marque l'élément comme non révélé
                    target.classList.remove('revealed');
                }
            }
        });
    });

    // Initialise les styles et l'observateur pour chaque élément
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = `translateY(${options.distance}) scale(0.9)`;
        element.style.transition = `opacity ${options.duration} ${options.easing}, transform ${options.duration} ${options.easing}`;
        element.style.transitionDelay = '0s, 0s';

        // Observe l'élément pour les changements de visibilité
        observer.observe(element);
    });
}
