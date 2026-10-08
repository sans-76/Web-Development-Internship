

// Open the product modal and display product details
function openModal(name, description, price) {

    document.getElementById("modalTitle").textContent = name;

    document.getElementById("modalDescription").textContent =
        description;

    document.getElementById("modalPrice").textContent =
        price;

    document.getElementById("productModal").style.display =
        "flex";
}


// Close the product modal
function closeModal() {

    document.getElementById("productModal").style.display =
        "none";
}


// Close modal when clicking outside the modal box
window.addEventListener("click", function (event) {

    const modal = document.getElementById("productModal");

    if (event.target === modal) {
        closeModal();
    }

});


// ==========================================
// OFFER SLIDER
// ==========================================

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");


// Display selected slide
function showSlide(index) {

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}


// Show next slide
function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}


// Show previous slide
function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}


// ==========================================
// FAQ ACCORDION
// ==========================================

// Open or close FAQ answers
function toggleFAQ(number) {

    const answer =
        document.getElementById("faqAnswer" + number);

    if (answer.style.display === "block") {

        answer.style.display = "none";

    } else {

        answer.style.display = "block";

    }
}

