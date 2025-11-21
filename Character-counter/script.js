const textarea = document.getElementById('message');
const charCountElement = document.getElementById('charCount');
const charCounterDiv = document.getElementById('char-counter');
const helpText = document.getElementById('help-text');

const MAX_LENGTH = 250;
const WARNING_THRESHOLD = 200;

function updateCharacterCount() {
    const currentLength = textarea.value.length;
    const remaining = MAX_LENGTH - currentLength;

    charCountElement.textContent = currentLength;

    textarea.classList.remove('warning', 'error');
    charCounterDiv.classList.remove('warning', 'error');
    helpText.classList.remove('warning', 'error');

    if (currentLength>= MAX_LENGTH) {
        // when limit reached
        textarea.classList.add('error');
        charCounterDiv.classList.add('error');
        helpText.classList.add('error');
        helpText.textContent = 'Maximum character limit reached!';
    } else if (currentLength >= WARNING_THRESHOLD) {
        // when limited char left
        textarea.classList.add('warning');
        charCounterDiv.classList.add('warning');
        helpText.classList.add('warning');
        helpText.textContent = `${remaining} characer reamining`;
    } else {
        // normal state
        helpText.textContent = '';
    }
}

// Preventing typing beyond limit
function preventExcessInput(e) {
    const currentLength = textarea.value.length;

    // Allowed keys
    const allowedKeys = [
        'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 
        'ArrowUp', 'ArrowDown', 'Home', 'End', 'Tab'
    ]

    if (e.ctrlKey || e.metaKey) {
        return;
    }

    if (currentLength >= MAX_LENGTH && !allowedKeys.includes(e.key)) {
        e.preventDefault();
    }
}

textarea.addEventListener('input', updateCharacterCount);
textarea.addEventListener('keydown', preventExcessInput);

updateCharacterCount();
