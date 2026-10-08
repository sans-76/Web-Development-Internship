
// Get the form element
const form = document.getElementById("contactForm");

// Check the form when the user clicks Submit
form.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Read and clean the user's input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Assume the form is valid until an error is found
    let isValid = true;

    // Clear previous errors and success messages
    document.querySelectorAll(".error").forEach(function (error) {
        error.textContent = "";
    });

    document.querySelectorAll("input, textarea").forEach(function (field) {
        field.classList.remove("invalid");
        field.removeAttribute("aria-invalid");
    });

    document.getElementById("successMessage").textContent = "";

    // Function to show an error for a field
    function showError(fieldId, errorId, messageText) {
        document.getElementById(errorId).textContent = messageText;

        const field = document.getElementById(fieldId);
        field.classList.add("invalid");
        field.setAttribute("aria-invalid", "true");

        isValid = false;
    }

    // Validate name
    if (name === "") {
        showError("name", "nameError", "Name is required.");
    } else if (name.length < 2) {
        showError("name", "nameError",
            "Name must contain at least 2 characters.");
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        showError("email", "emailError", "Email is required.");
    } else if (!emailPattern.test(email)) {
        showError("email", "emailError",
            "Please enter a valid email address.");
    }

    // Validate phone number (10 digits, starting from 6 to 9)
    const phonePattern = /^[6-9]\d{9}$/;

    if (phone === "") {
        showError("phone", "phoneError",
            "Phone number is required.");
    } else if (!phonePattern.test(phone)) {
        showError("phone", "phoneError",
            "Enter a valid 10-digit Indian mobile number.");
    }

    // Validate message
    if (message === "") {
        showError("message", "messageError",
            "Message is required.");
    } else if (message.length < 10) {
        showError("message", "messageError",
            "Message must contain at least 10 characters.");
    }

    // If every field is valid, show success
    if (isValid) {
        document.getElementById("successMessage").textContent =
            "Form submitted successfully!";

        // Clear the fields after successful submission
        form.reset();
    }
});

