// ==============================
// SWEET CRUMBS - JAVASCRIPT
// ==============================

// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
    });
});


// Product Order Buttons

const orderButtons = document.querySelectorAll(".order-button");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName = button.getAttribute("data-product");

        const message = `Hello Sweet Crumbs! I would like to order ${productName}. Could you please share more details?`;

        const whatsappNumber = "919876543210";

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

});


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const occasion = document.getElementById("occasion").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = `
Hello Sweet Crumbs!

My name is ${name}.

Phone: ${phone}
Email: ${email}
Occasion: ${occasion}

My request:
${message}

Looking forward to hearing from you!
    `;

    const whatsappNumber = "919876543210";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    contactForm.reset();

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetID = this.getAttribute("href");

        if (targetID === "#") {
            return;
        }

        const targetElement = document.querySelector(targetID);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// Scroll Animation

const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, observerOptions);


const animatedElements = document.querySelectorAll(
    ".product-card, .feature, .testimonial-card, .about-content, .custom-order-content"
);

animatedElements.forEach(function (element) {

    element.classList.add("fade-element");

    observer.observe(element);

});