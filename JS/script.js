// Toggle menu
const h = document.getElementById("hamburger");  // No "#" here
h.addEventListener("click", function() {
    document.querySelector("#show").classList.toggle("show");
});

let backToTopBtn = document.getElementById("backToTop");

// Show/hide button on scroll
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Scroll to top smoothly
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
