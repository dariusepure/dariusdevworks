document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Mode Toggle (Dark / Light)
    const modeBtn = document.querySelector('.mode-toggle-btn');

    function applyMode(mode) {
        if (mode === 'light') {
            document.documentElement.setAttribute('data-mode', 'light');
            if (modeBtn) modeBtn.textContent = '☀️';
        } else {
            document.documentElement.removeAttribute('data-mode');
            if (modeBtn) modeBtn.textContent = '🌙';
        }
        localStorage.setItem('darius-theme-mode', mode);
    }

    const savedMode = localStorage.getItem('darius-theme-mode') || 'dark';
    applyMode(savedMode);

    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            const currentMode = document.documentElement.getAttribute('data-mode') === 'light' ? 'light' : 'dark';
            const newMode = currentMode === 'light' ? 'dark' : 'light';
            applyMode(newMode);
        });
    }

    // 1. Evidențiere automată a paginii curente în meniu (fără Home)
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href').toLowerCase();

        const isProjects = currentPath.includes('/projects');
        const isAbout = currentPath.includes('/about');
        const isContact = currentPath.includes('/contact');

        const isLinkProjects = href.includes('projects');
        const isLinkAbout = href.includes('about');
        const isLinkContact = href.includes('contact');

        // Acordă activ doar pentru Projects, About, Contact
        // Home nu va primi niciodată clasa 'active'
        const isActive =
            (isProjects && isLinkProjects) ||
            (isAbout && isLinkAbout) ||
            (isContact && isLinkContact);

        link.classList.toggle('active', isActive);
    });

    // Curățare estetică URL (șterge index.html și slash-ul final din bara de adrese)
    try {
        let cleanUrl = window.location.href;
        if (cleanUrl.includes('index.html')) {
            cleanUrl = cleanUrl.replace(/\/index\.html$/, '');
        }
        if (window.location.pathname !== '/' && cleanUrl.endsWith('/')) {
            cleanUrl = cleanUrl.replace(/\/$/, '');
        }
        if (cleanUrl !== window.location.href) {
            window.history.replaceState(null, '', cleanUrl);
        }
    } catch (e) {
        // Ignoră erorile de securitate pe file://
    }

    // 2. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('.nav-links');

    if (mobileToggle && navList) {
        mobileToggle.addEventListener('click', () => {
            navList.classList.toggle('show');
            const isExpanded = navList.classList.contains('show');
            mobileToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // 3. Typing Effect în stil Terminal pe pagina principală
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const phrases = [
            "Code with Vision."
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 30 : 60;

            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2200; // Pause at full text
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 400; // Pause before typing next phrase
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // 4. Client-side Form Handling (Interactive UX)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            
            formStatus.className = 'form-status';
            formStatus.style.display = 'block';
            formStatus.textContent = 'Sending message...';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = 'Thank you! Your message has been sent directly to dariusdevworks@gmail.com.';
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    throw new Error(data.message || 'Form submission failed');
                }
            } catch (err) {
                formStatus.className = 'form-status error';
                formStatus.style.background = 'rgba(248, 81, 73, 0.15)';
                formStatus.style.color = '#f85149';
                formStatus.style.border = '1px solid rgba(248, 81, 73, 0.3)';
                formStatus.textContent = 'Unable to send message right now. Please email directly at dariusdevworks@gmail.com.';
            }
        });
    }

    // 5. Projects Sidebar Navigation Switcher
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');
    sidebarButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sidebarButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 6. Automatic Dynamic Year in Footer
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
});