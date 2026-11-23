const menuButton = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    const closeMenu = () => {
        navLinks.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
    };

    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks.classList.contains("show")) {
            closeMenu();
            menuButton.focus();
        }
    });
}
