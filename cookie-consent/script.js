const cookieConsent = document.getElementById('cookieConsent');
const closeBtn = document.getElementById('closeBtn');
const acceptBtn = document.getElementById('acceptBtn');
const declineBtn = document.getElementById('declineBtn');

function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted' || consent === 'declined') {
        cookieConsent.classList.add('hidden')
    }
}

function hidePopup() {
    cookieConsent.classList.add('hidden')
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    console.log('Cookies accepted');
    hidePopup();
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    console.log('Cookies declined');
    hidePopup();
}

closeBtn.addEventListener('click', hidePopup);
acceptBtn.addEventListener('click', acceptCookies);
declineBtn.addEventListener('click', declineCookies);

checkCookieConsent();
