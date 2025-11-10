// Form elements
const form = document.getElementById('profileForm');
const input = {
    fullName: document.getElementById('fullName'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword')
};

// Progress elements
const progressText = document.getElementById('progressText');
const progressCircle = document.getElementById('progressCircle');
const circleCircumference = 439.8;

// Passsword toggle buttons
const passwordToggles = document.querySelectorAll('.password-toggle');

// Validation state
const validationState = {
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false
};

// Password toggle functionality
passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const isPassword = input.type === 'password';

        input.type = isPassword ? 'text' : 'password';
        this.setAtrribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
});
