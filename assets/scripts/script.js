// Menu burger
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    function setupDropdown(buttonId, menuId) {
        const button = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);

        button.addEventListener("mouseenter", () => {
            menu.classList.remove("opacity-0", "invisible");
            menu.classList.add("opacity-100", "visible");
        });

        button.addEventListener("mouseleave", () => {
            setTimeout(() => {
                if (!menu.matches(":hover")) {
                    menu.classList.add("opacity-0", "invisible");
                    menu.classList.remove("opacity-100", "visible");
                }
            }, 200);
        });

        menu.addEventListener("mouseleave", () => {
            menu.classList.add("opacity-0", "invisible");
            menu.classList.remove("opacity-100", "visible");
        });
    }

    setupDropdown("btn-presentation", "menu-presentation");
    setupDropdown("btn-projets", "menu-projets");
});
