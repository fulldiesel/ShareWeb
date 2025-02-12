const links = document.querySelectorAll(".header_nav_bar a");

document.addEventListener("DOMContentLoaded", () => {
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});