document.addEventListener('DOMContentLoaded', function () {
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
});

