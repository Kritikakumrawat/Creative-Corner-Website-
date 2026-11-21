document.addEventListener("DOMContentLoaded", function () {

    // Handles the navigation menu on smaller screens
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isExpanded);
    });

    // Closes the menu once a navigation link is selected
    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Checks the contact form before showing a confirmation message
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        formMessage.textContent =
            "Thank you, " + name + "! Your message has been received.";

        contactForm.reset();
    });

    // Confirms that the JavaScript file is connected properly
    console.log("Website is ready!");
});
