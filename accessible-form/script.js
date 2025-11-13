// Form elements
const form = document.getElementById('profileForm');
const inputs = {
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

passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const isPassword = input.type === 'password';

        input.type = isPassword ? 'text' : 'password';
        this.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
});

function validateFullName(value) {
    return value.trim().length >= 2;
}

function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}

function validatePassword(value) {
    return value.length >= 2;
}

function validateConfirmPassword(password, confirmPassword) {
    return password.length >= 2 && password === confirmPassword;
}

function updateFieldState(fieldName, isValid) {
    const input = inputs[fieldName];
    const errorMessage = document.getElementById(`${fieldName}-error`);
    const checklistItem = document.getElementById(`check-${fieldName}`);

    validationState[fieldName] = isValid;

    input.classList.remove('error', 'success');
    if(input.value) {
        input.classList.add(isValid ? 'success' : 'error');
    }

    if(input.value && !isValid) {
        errorMessage.classList.add('show');
        input.setAttribute('aria-invalid', 'true');
    } else {
        errorMessage.classList.remove('show');
        input.setAttribute('aria-invalid', 'false');
    }

    if(isValid) {
        checklistItem.classList.add('completed');
        checklistItem.querySelector('.checklist-icon').classList.remove('checklist-icon--incomplete');
        checklistItem.querySelector('.checklist-icon').classList.add('checklist-icon--complete');
    } else {
        checklistItem.classList.remove('completed')
        checklistItem.querySelector('.checklist-icon').classList.remove('checklist-icon--complete');
        checklistItem.querySelector('.checklist-icon').classList.add('checklist-icon--incomplete');
    }

    updateProgress();
}

function updateProgress() {
    const completedFields = Object.values(validationState).filter(Boolean).length;
    const totalFields = Object.keys(validationState).length;
    const percentage = Math.round((completedFields / totalFields) * 100);

    progressText.textContent = `${percentage}%`;

    const offset = circleCircumference - (percentage / 100) * circleCircumference;
    progressCircle.style.strokeDashoffset = offset;

    document.querySelector('.progress-circle').setAttribute('aria-label', `Profile completeness: ${percentage}%`);
}

inputs.fullName.addEventListener('input', (e) => {
    updateFieldState('fullName', validateFullName(e.target.value));
});

inputs.email.addEventListener('input', (e) => {
    updateFieldState('email', validateEmail(e.target.value));
});

inputs.password.addEventListener('input', (e) => {
    const isValid = validatePassword(e.target.value);
    updateFieldState('password', isValid);

    if(inputs.confirmPassword.value) {
        updateFieldState('confirmPassword', validateConfirmPassword(inputs.password.value, e.target.value));
    }
});

inputs.confirmPassword.addEventListener('input', (e) => {
    updateFieldState('confirmPassword', validateConfirmPassword(inputs.password.value, e.target.value));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    updateFieldState('fullName', validateFullName(inputs.fullName.value));
    updateFieldState('email', validateEmail(inputs.email.value));
    updateFieldState('password', validatePassword(inputs.password.value));
    updateFieldState('confirmPassword', validateConfirmPassword(inputs.password.value, inputs.confirmPassword.value));

    const allValid = Object.values(validationState).every(Boolean);

    if(allValid) {
        alert('Profile updated successfully!\n\nForm data:\n' + 
            `Name: ${inputs.fullName.value}\n` +
            `Email: ${inputs.email.value}\n` +
            `Password: ${'*'.repeat(inputs.password.value.length)}`
        );
        form.reset();

        Object.keys(validationState).forEach(key => {
            validationState[key] = false;
        });

        Object.values(inputs).forEach(input => {
            input.classList.remove('success', 'error');
            input.setAttribute('aria-invalid', 'false');
        });

        document.querySelectorAll('.error-message').forEach(msg => {
            msg.classList.remove('show');
        });

        document.querySelectorAll('.checklist-item').forEach(item => {
            item.classList.remove('completed');
            const icon = item.querySelector('.checklist-icon');
            icon.classList.remove('checklist-icon--complete');
            icon.classList.add('checklist-icon--incomplete');
        });

        updateProgress();
    } else {
        const firstInvalidField = Object.keys(validationState).find(key => !validationState[key]);
        if(firstInvalidField) {
            inputs[firstInvalidField].focus();
        }
        alert('Please fix the errors before submitting.');
    }
});
