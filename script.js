document.addEventListener('DOMContentLoaded', function () {
    /**
     * Initializes interactive elements after the page content is loaded.
     * This includes the buyer/seller toggle and the mobile menu.
     */
    function initializePageScripts() {
        const sellersBtn = document.getElementById('sellers-btn');
        const buyersBtn = document.getElementById('buyers-btn');
        const sellersContent = document.getElementById('sellers-content');
        const buyersContent = document.getElementById('buyers-content');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        // Buyer/Seller Toggle Logic
        if (sellersBtn && buyersBtn && sellersContent && buyersContent) {
            sellersBtn.addEventListener('click', () => {
                sellersContent.classList.remove('hidden');
                buyersContent.classList.add('hidden');
                sellersBtn.classList.add('bg-emerald-600', 'text-white');
                sellersBtn.classList.remove('text-stone-300', 'hover:bg-stone-600');
                buyersBtn.classList.remove('bg-emerald-600', 'text-white');
                buyersBtn.classList.add('text-stone-300', 'hover:bg-stone-600');
            });

            buyersBtn.addEventListener('click', () => {
                buyersContent.classList.remove('hidden');
                sellersContent.classList.add('hidden');
                buyersBtn.classList.add('bg-emerald-600', 'text-white');
                buyersBtn.classList.remove('text-stone-300', 'hover:bg-stone-600');
                sellersBtn.classList.remove('bg-emerald-600', 'text-white');
                sellersBtn.classList.add('text-stone-300', 'hover:bg-stone-600');
            });
        }

        // Mobile Menu Toggle
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when a link is clicked
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }
    }

    /**
     * Loads HTML partials into their respective placeholder elements.
     */
    async function loadPartials() {
        const partials = [
            { id: 'header-placeholder', url: '_header.html' },
            { id: 'hero-placeholder', url: '_hero.html' },
            { id: 'buy-sell-placeholder', url: '_how_it_works.html' },
            { id: 'features-placeholder', url: '_features.html' },
            { id: 'about-placeholder', url: '_about.html' },
            { id: 'testimonials-placeholder', url: '_testimonials.html' },
            { id: 'careers-placeholder', url: '_careers.html' },
            { id: 'contact-placeholder', url: '_contact.html' },
            { id: 'footer-placeholder', url: '_footer.html' },
        ];

        try {
            const fetchPromises = partials.map(p => 
                fetch(p.url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Failed to load ${p.url}: ${response.statusText}`);
                        }
                        return response.text();
                    })
                    .then(html => {
                        const placeholder = document.getElementById(p.id);
                        if (placeholder) {
                            placeholder.outerHTML = html;
                        } else {
                            console.warn(`Placeholder with id '${p.id}' not found.`);
                        }
                    })
            );

            await Promise.all(fetchPromises);
            
            // Once all content is loaded, initialize the scripts that depend on it.
            initializePageScripts();

        } catch (error) {
            console.error("Error loading partials:", error);
        }
    }

    loadPartials();
});