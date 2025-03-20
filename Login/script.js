// Function to handle form submission
function submitForm() {
    // Get input values and trim whitespace
    const username = document.getElementById('username').value.trim();
    const farmingType = document.getElementById('farming-type').value;
    const contact = document.getElementById('contact').value.trim();

    // Message display area
    const message = document.getElementById('message');

    // Clear previous messages
    message.textContent = '';
    message.style.color = '';

    // Validate input fields
    if (!username || !farmingType || !contact) {
        message.style.color = 'red';
        message.textContent = "❗ Please fill in all fields.";
        return;
    }

    // Check if contact number is valid (10 digits)
    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(contact)) {
        message.style.color = 'orange';
        message.textContent = "⚠️ Please enter a valid 10-digit contact number.";
        return;
    }

    // Display success message
    message.style.color = 'lightgreen';
    message.innerHTML = `✅ Form Submitted Successfully!<br>
    <strong>Username:</strong> ${username}<br>
    <strong>Farming Type:</strong> ${farmingType}<br>
    <strong>Contact:</strong> ${contact}`;

    // Simulate sending data to backend (console output here)
    console.log({
        username,
        farmingType,
        contact
    });

    // Clear fields after submission
    document.getElementById('username').value = '';
    document.getElementById('farming-type').value = 'organic';
    document.getElementById('contact').value = '';

    // Automatically clear success message after 5 seconds
    setTimeout(() => {
        message.textContent = '';
    }, 5000);
}
function login() {
    const username = document.getElementById('username').value;
    const farmingType = document.getElementById('farming-type').value;
    const contact = document.getElementById('contact').value;

    if (username && farmingType && contact) {
        alert(`Login Successful!\nUsername: ${username}\nFarming Type: ${farmingType}\nContact: ${contact}`);
        window.location.href = './index.html'; // Navigate to index.html (one level up)
    } else {
        alert('Please fill in all fields.');
    }
}


