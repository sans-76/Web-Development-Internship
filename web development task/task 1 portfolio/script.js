

// 1. Welcome message when the website loads
window.addEventListener("load", function () {
    console.log("Welcome to my Portfolio Website!");
});


// 2. Get the "View My Work" button
const workButton = document.querySelector(".hero button");

// 3. When the button is clicked, scroll to Projects section
if (workButton) {
    workButton.addEventListener("click", function () {

        const projectsSection = document.getElementById("projects");

        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}


// 4. Add click event to project cards
const projects = document.querySelectorAll(".project");

projects.forEach(function (project) {

    project.addEventListener("click", function () {

        alert("Thank you for checking out my project!");

    });

});


// 5. Display message in browser console
const contactSection = document.getElementById("contact");

if (contactSection) {
    console.log("Contact section is ready.");
}

