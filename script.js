// === 1. USERNAME STORAGE LOGIC ===
const usernameInput = document.getElementById('usernameInput');
const headingUsername = document.getElementById('headingUsername');

// Check if a username was previously saved in the browser memory
const savedName = localStorage.getItem('userSavedName');
if (savedName) {
    headingUsername.textContent = savedName + "!";
    usernameInput.value = savedName;
}

// Save the name automatically as you type
usernameInput.addEventListener('input', function() {
    const newName = usernameInput.value.trim();
    if (newName === "") {
        headingUsername.textContent = "___";
        localStorage.removeItem('userSavedName'); // Clears memory if input is empty
    } else {
        headingUsername.textContent = newName + "!";
        localStorage.setItem('userSavedName', newName); // Saves to browser memory
    }
});


// === 2. LIVE CLOCK & DATE LOGIC ===
const dateParagraph = document.getElementById('currentdate');
const timeParagraph = document.getElementById('currenttime');

function updateClock() {
    const now = new Date();

    // Format the date (e.g., sunday, august 30, 2026)
    const dateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions).toLowerCase();

    // Format the time (e.g., 6:38:00 pm)
    const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions).toLowerCase();

    // Push the live data into the HTML
    dateParagraph.textContent = formattedDate;
    timeParagraph.textContent = formattedTime;
}

// Run the clock immediately when the page loads
updateClock();

// Force the clock to update every single second (1000 milliseconds)
setInterval(updateClock, 1000);
