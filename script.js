// === 1. USERNAME STORAGE LOGIC ===
const usernameInput = document.getElementById('usernameInput');
const headingUsername = document.getElementById('headingUsername');

// Helper function to update the DOM and localStorage
const updateUsername = (name) => {
  const trimmedName = name.trim();
  
  if (!trimmedName) {
    headingUsername.textContent = "_____";
    localStorage.removeItem('userSavedName');
  } else {
    headingUsername.textContent = `${trimmedName}!`;
    localStorage.setItem('userSavedName', trimmedName);
  }
};

// Initialize on page load
const savedName = localStorage.getItem('userSavedName') || '';
if (savedName) {
  usernameInput.value = savedName;
}
updateUsername(savedName);

// Save the name automatically as you type
usernameInput.addEventListener('input', (e) => updateUsername(e.target.value));

// === 2. LIVE CLOCK & DATE LOGIC ===
const dateParagraph = document.getElementById('currentdate');
const timeParagraph = document.getElementById('currenttime');

// Cache Intl formatters for better performance
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});

const updateClock = () => {
  const now = new Date();
  
  // Format and push the live data into the HTML
  dateParagraph.textContent = dateFormatter.format(now).toLowerCase(); // Forced to lowercase
  timeParagraph.textContent = timeFormatter.format(now).toUpperCase();
};

// Run the clock immediately when the page loads
updateClock();
setInterval(updateClock, 1000);
