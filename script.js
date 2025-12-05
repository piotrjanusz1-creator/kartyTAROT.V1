// Smooth scroll for nav and hero buttons
document.addEventListener("DOMContentLoaded", function () {
    const OFFSET = 70; // approximate navbar height

    function smoothScrollTo(targetId) {
        const target = document.querySelector(targetId);
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const targetPosition = rect.top + window.pageYOffset - OFFSET;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }

    // Handle click on nav links and scroll-btns
    document.querySelectorAll('a.nav-link, .scroll-btn').forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            e.preventDefault();
            smoothScrollTo(href);

            // Close mobile nav if open
            const navList = document.querySelector(".nav-list");
            if (navList && navList.classList.contains("nav-open")) {
                navList.classList.remove("nav-open");
            }
        });
    });

    // Mobile nav toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav-list");

    if (navToggle && navList) {
        navToggle.addEventListener("click", () => {
            navList.classList.toggle("nav-open");
        });

        // Close nav on outside click (mobile)
        document.addEventListener("click", (event) => {
            if (!navList.classList.contains("nav-open")) return;

            const isClickInsideNav = navList.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle) {
                navList.classList.remove("nav-open");
            }
        });
    }

    // Contact form handling
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const privacyCheckbox = document.getElementById("privacy");
            if (!privacyCheckbox.checked) {
                alert("Aby wysłać formularz, musisz zaakceptować politykę prywatności.");
                return;
            }

            alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 24 godzin.");
            contactForm.reset();
        });
    }
});
