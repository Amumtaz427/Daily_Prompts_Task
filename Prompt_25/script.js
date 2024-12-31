
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    document.querySelector('.dot.active').classList.remove('active');
    dot.classList.add('active');
  });
});
// Example JavaScript if you'd like to add interaction
document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById("hero");

    // Change hero section background on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            heroSection.style.backgroundColor = "#333";
        } else {
            heroSection.style.backgroundColor = "#5a5a5a";
        }
    });
});