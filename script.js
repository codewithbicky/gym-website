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
function calculateBMI() {
    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;

    if (height === 0 || weight === "") {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
    }

    let bmi = (weight / (height * height)).toFixed(1);

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi < 25) {
        status = "Normal Weight";
    } else if (bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    document.getElementById("result").innerHTML =
        `Your BMI: ${bmi} (${status})`;
}
