
// Contact form validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been submitted.");
    form.reset();
});

// Dark mode toggle
const darkModeButton = document.createElement("button");
darkModeButton.textContent = "Toggle Theme";
darkModeButton.style.margin = "15px";
document.querySelector("header").appendChild(darkModeButton);

darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});

const topButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
