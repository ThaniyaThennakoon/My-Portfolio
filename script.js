
// ================================
// Mobile Menu
// ================================

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

}


// ================================
// Close Menu After Clicking a Link
// ================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

    });

});


// ================================
// Navbar Background While Scrolling
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(5, 6, 10, 0.97)";

    } else {

        header.style.background = "rgba(7, 9, 18, 0.88)";

    }

});


// ================================
// Typing Animation
// ================================

const typingText = document.getElementById("typing-text");

const words = [

    {
        text: "Student Developer",
        color: "cyan"
    },

    {
        text: "Web Developer",
        color: "purple"
    },

    {
        text: "Software Developer",
        color: "pink"
    }

];


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];


    // Typing

    if (!isDeleting) {

        typingText.textContent =
            currentWord.text.substring(0, charIndex + 1);

        charIndex++;

    }

    // Deleting

    else {

        typingText.textContent =
            currentWord.text.substring(0, charIndex - 1);

        charIndex--;

    }


    // Change class/color

    typingText.className = currentWord.color;


    // Typing speed

    let speed = isDeleting ? 55 : 95;


    // Word completed

    if (!isDeleting && charIndex === currentWord.text.length) {

        speed = 1500;
        isDeleting = true;

    }


    // Word deleted

    else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 400;

    }


    setTimeout(typeEffect, speed);

}


typeEffect();

