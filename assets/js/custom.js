// canvas menu
function canvasBar() {
    var sideBar = document.getElementById("sideBar");
    sideBar.classList.toggle("max-w-[300px]");
} 

// Search Bar
function searchBar() {
    var sideBar = document.getElementById("searchBar"); 
    sideBar.classList.toggle("hidden");
} 

//  Ccarousel

let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    if (n >= slides.length - 1) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 2;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function nextSlide() {
    showSlide(++slideIndex);
}

function prevSlide() {
    showSlide(--slideIndex);
}

showSlide(slideIndex);