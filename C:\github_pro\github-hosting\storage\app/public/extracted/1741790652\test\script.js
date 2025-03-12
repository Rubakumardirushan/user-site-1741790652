function validateForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');

    let valid = true;

    // Email validation
    if (!email) {
        emailError.textContent = "Email is required.";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (!password) {
        passwordError.textContent = "Password is required.";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    return valid;
}
