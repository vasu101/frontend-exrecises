const { DateTime } = luxon;

const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

let selectedDay = 15;
let selectedMonth = 5;
let selectedYear = 2000;

function initPickers() {
    const dayPicker = document.getElementById('dayPicker');
    const monthPicker = document.getElementById('monthPicker');
    const yearPicker = document.getElementById('yearPicker');

    const topSpacer = '<div class="picker-item" style="opacity: 0; pointer-events: none;"></div>'.repeat(2);
    
    const bottomSpacer = '<div class="picker-item" style="opacity: 0; pointer-events: none;"></div>'.repeat(2);

    // days
    dayPicker.innerHTML = topSpacer;
    for (let i = 1; i <= 31; i++) {
        const div = document.createElement('div');
        div.className = 'picker-item';
        div.textContent = i;
        div.dataset.value = i;
        dayPicker.appendChild(div);
    }
    dayPicker.innerHTML += bottomSpacer;

    // months
    monthPicker.innerHTML = topSpacer;
    months.forEach((month, index) => {
        const div = document.createElement('div');
        div.className = 'picker-item';
        div.textContent = month;
        div.dataset.value = index + 1;
        monthPicker.appendChild(div);
    });
    monthPicker.innerHTML += bottomSpacer;

    // years
    yearPicker.innerHTML = topSpacer;
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const div = document.createElement('div');
        div.className = 'picker-item';
        div.textContent = i;
        div.dataset.value = i;
        yearPicker.appendChild(div);
    }
    yearPicker.innerHTML += bottomSpacer;

    // initial positions
    scrollToValue(dayPicker, selectedDay);
    scrollToValue(monthPicker, selectedMonth);
    scrollToValue(yearPicker, selectedYear);

    dayPicker.addEventListener('scroll', () => updateSelection(dayPicker, (val) => selectedDay = val));
    monthPicker.addEventListener('scroll', () => updateSelection(monthPicker, (val) => selectedMonth = val));
    yearPicker.addEventListener('scroll', () => updateSelection(yearPicker, (val) => selectedYear = val));

    // Initial update
    updateSelection(dayPicker, (val) => selectedDay = val);
    updateSelection(monthPicker, (val) => selectedMonth = val);
    updateSelection(yearPicker, (val) => selectedYear = val);
}

function scrollToValue(picker, value) {
    const items = picker.querySelectorAll('.picker-item');
    items.forEach((item, index) => {
        if (parseInt(item.dataset.value) === value) {
            picker.scrollTop = index * 60;
        }
    });
}

function updateSelection(picker, callback) {
    const items = picker.querySelectorAll('.picker-item');
    const scrollTop = picker.scrollTop;
    const centerPosition = scrollTop + 100;

    items.forEach((item, index) => {
        const itemTop = index * 60;
        const itemCenter = itemTop + 30;
        const distance = Math.abs(centerPosition - itemCenter);

        if (distance < 30) {
            item.classList.add('active');
            callback(parseInt(item.dataset.value));
        } else {
            item.classList.remove('active');
        }
    });
}

function calculateAge() {
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    
    errorDiv.textContent = '';
    resultDiv.style.display = 'none';

    const dateString = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
    
    const birthDate = DateTime.fromISO(dateString);
    
    if (!birthDate.isValid) {
        errorDiv.textContent = 'Invalid date! Please check your selection.';
        return;
    }

    const today = DateTime.now();
    
    if (birthDate > today) {
        errorDiv.textContent = 'Birth date cannot be in the future!';
        return;
    }

    // Calculate age
    const diff = today.diff(birthDate, ['years', 'months', 'days']);
    
    const years = Math.floor(diff.years);
    const months = Math.floor(diff.months);
    const days = Math.floor(diff.days);

    // Display result
    resultDiv.innerHTML = `
        <h2>Your Age</h2>
        <div class="age-display">
            ${years} years ${months} months
        </div>
        <div class="birth-info">
            and ${days} days old<br>
            Born on ${birthDate.toFormat('MMMM dd, yyyy')}
        </div>
    `;
    resultDiv.style.display = 'block';
}

initPickers();
