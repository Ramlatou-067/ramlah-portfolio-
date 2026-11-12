
// Get the HTML elements
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

// Listen for form submission
contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values entered by the visitor
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    // Check for empty fields
    if (name === "" || email === "" || phone === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Check phone number
    if (!/^\d+$/.test(phone)) {
        formMessage.textContent = "Phone number must contain digits only.";
        return;
    }

    // Display success message
    formMessage.textContent = "Thank you! Your form has been submitted successfully.";

    // Clear the form
    contactForm.reset();
});
