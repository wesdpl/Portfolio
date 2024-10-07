// Function to handle form validation and submission
function sendMail(event) {  // Accept 'event' as a parameter to prevent default behavior
    // Prevent any default form submission behavior
    event.preventDefault(); // This ensures the form doesn't reload the page

    // Get input elements
    const nameInput = document.getElementById('from_name');
    const emailInput = document.getElementById('email_id');
    const messageInput = document.getElementById('message');

    // Clear any previous error classes
    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    messageInput.classList.remove('is-invalid');

    // Custom validation check for required fields
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('is-invalid');
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailInput.classList.add('is-invalid');
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageInput.classList.add('is-invalid');
        isValid = false;
    }

    // If validation fails, stop the process
    if (!isValid) {
        return;
    }

    // Send the email using EmailJS
    emailjs.send("service_12dut0f", "template_5xjnoyy", {
        from_name: nameInput.value,
        email_id: emailInput.value,
        message: messageInput.value
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);

        // Show modal on successful submission (assuming you use Bootstrap)
        $('#exampleModal').modal('show');
    }, function(error) {
        console.log('FAILED...', error);
        alert("Failed to send message, please try again.");
    });

    // Clear the form fields after submission
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}
