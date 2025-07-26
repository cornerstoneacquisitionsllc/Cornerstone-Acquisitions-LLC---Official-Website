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

    // Form submission logic
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            console.log('Form submitted:', { name, email, phone, message });


            const data = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                phone: contactForm.phone.value,
                message: contactForm.message.value
            };

            const response = await fetch("https://script.google.com/macros/s/AKfycbyJE7bIxvepkQ3pqoEupT0wMwqkAvWPzZKmH6wfKYTOiACgTWnj0iSN1sS5prM7nddhRA/exec", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert("Thanks! Your message has been sent.");
                contactForm.reset();
            } else {
                alert("Oops! Something went wrong. Try again later.");
            }
        });
    }

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

