// PowerFit Gym Website

console.log("Welcome to PowerFit Gym 🚀");

// Smooth scroll for navigation
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Button animation
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 0 20px red";
});

btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
});
