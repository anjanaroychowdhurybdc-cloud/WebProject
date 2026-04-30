document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Unobserve after animating once to keep it visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements to be animated
    const animElements = document.querySelectorAll('.anim-fade-up, .anim-fade-in');
    animElements.forEach(el => observer.observe(el));

    // 2. Navbar glass effect on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(11, 15, 25, 0.9) !important';
                navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'rgba(11, 15, 25, 0.7) !important';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // 3. Simple form validation interaction for Contact form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const originalText = btn.innerHTML;
            
            // Basic animation feedback for the button
            btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
            btn.disabled = true;

            // Simulate form submisson
            setTimeout(() => {
                btn.innerHTML = '<i class="bi bi-check-circle"></i> Sent Successfully';
                btn.classList.remove('btn-gradient');
                btn.classList.add('btn-success');
                form.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.add('btn-gradient');
                    btn.classList.remove('btn-success');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
