
// Portfolio JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    console.log("Welcome to Soujanya Hiremath's Portfolio!");

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Active navigation link
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();

    // Contact email console message
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {

        link.addEventListener("click", function () {
            console.log("Opening email application...");
        });
    });

    console.log("JavaScript loaded successfully!");

});

// Print Resume or Bio-data
function printDocument() {
    window.print();
}
