// script.js

function toggleDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
}

document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);

if (localStorage.getItem('darkMode') === 'enabled') {
    document.getElementById('darkModeToggle').checked = true;
    toggleDarkMode();
}
