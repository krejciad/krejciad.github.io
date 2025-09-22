document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const homeLink = document.querySelector('.social-header-link.active');

    // Funkce pro přepínání sekcí
    function switchSection(sectionId) {
        // Update nav active state
        navItems.forEach(navItem => navItem.classList.remove('active'));
        document.querySelector(`.nav-item[data-section="${sectionId}"]`).classList.add('active');

        // Show section
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    }

    // Nastavení menu položek
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            switchSection(sectionId);
            
            // Zavřít mobilní menu po kliknutí
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            }
        });
    });

    // Home link v horní liště
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = homeLink.getAttribute('data-section');
        switchSection(sectionId);
    });

    // Mobilní menu toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    // Zavřít menu při kliknutí na overlay
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    // Zavřít menu při změně velikosti okna
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }
    });

    // Workspace switcher (just for visual effect)
    const workspaces = document.querySelectorAll('.workspace');
    workspaces.forEach(workspace => {
        workspace.addEventListener('click', () => {
            workspaces.forEach(ws => ws.classList.remove('active'));
            workspace.classList.add('active');
        });
    });
});
