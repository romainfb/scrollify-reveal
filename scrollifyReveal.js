class ScrollifyReveal {

    constructor() {
        // Default options for scrolling animations
        this.defaultOptions = {
            delay: 0, // Deadline before start of animation
            distance: '0px', // Vertical travel distance
            duration: '500ms', // Animation duration
            easing: 'cubic-bezier(0.5, 0, 0, 1)', // Timer function (speed curve)
            zoom: 0.8, // Zoom on appear
            hideOnExit: true, // Enable or disable disappearance when out of view
            opacity: 1, // Final opacity
        };
    }

    reveal(selector, options) {

        // Selects all items corresponding to the selector
        const elements = document.querySelectorAll(selector);

        // Merges default options with supplied options
        options = { ...this.defaultOptions, ...options };

        // Creates an intersection observer to detect the visibility of elements
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;

                    // Checks if the item has not already been revealed
                    if (!target.classList.contains('revealed')) {
                        setTimeout(() => {
                            // Applies appearance animation
                            target.style.opacity = `${options.opacity}`;
                            target.style.transform = 'scale(1)';
                            target.style.transition = `opacity ${options.duration} ${options.easing}, transform ${options.duration} ${options.easing}`;
                            target.style.transitionDelay = `${options.delay}ms, ${options.delay}ms`;

                            // Marks element as revealed
                            target.classList.add('revealed');
                        }, options.delay);
                    }
                } else if (options.hideOnExit) {
                    const target = entry.target;

                    // Checks if the item has been previously revealed
                    if (target.classList.contains('revealed')) {
                        // Applies disappearing animation
                        target.style.opacity = '0';

                        // Defines the transformation according to options.zoom
                        target.style.transform = `translateY(${options.distance}) scale(${options.zoom})`;
                        
                        target.style.transition = `opacity ${options.duration} ${options.easing}, transform ${options.duration} ${options.easing}`;
                        target.style.transitionDelay = '0s, 0s';

                        // Marks element as not revealed
                        target.classList.remove('revealed');
                    }
                }
            });
        });

        // Initialize styles and observer for each element
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = `translateY(${options.distance}) scale(${options.zoom})`;
            element.style.transition = `opacity ${options.duration} ${options.easing}, transform ${options.duration} ${options.easing}`;
            element.style.transitionDelay = '0s, 0s';

            // Observe element for visibility changes
            observer.observe(element);
        });
    }

}

const scrollifyReveal = new ScrollifyReveal();
