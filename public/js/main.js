// Utility functions for handling localStorage
function getStoredTheme() {
    return localStorage.getItem('theme') || 'dark';
  }
  
  function setStoredTheme(theme) {
    localStorage.setItem('theme', theme);
  }
  
  // Initialize theme based on localStorage
  const theme = getStoredTheme();
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    document.querySelector('.header').classList.add('light-theme');
    document.querySelector('.footer').classList.add('light-theme');
    document.getElementById('theme-toggle').textContent = 'Switch to Dark Theme';
  } else {
    document.body.classList.remove('light-theme');
    document.querySelector('.header').classList.remove('light-theme');
    document.querySelector('.footer').classList.remove('light-theme');
    document.getElementById('theme-toggle').textContent = 'Switch to Light Theme';
  }
  
  // Toggle theme on button click
  document.getElementById('theme-toggle').addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
      document.body.classList.remove('light-theme');
      document.querySelector('.header').classList.remove('light-theme');
      document.querySelector('.footer').classList.remove('light-theme');
      setStoredTheme('dark'); // Save theme to localStorage
      document.getElementById('theme-toggle').textContent = 'Switch to Light Theme';
    } else {
      document.body.classList.add('light-theme');
      document.querySelector('.header').classList.add('light-theme');
      document.querySelector('.footer').classList.add('light-theme');
      setStoredTheme('light'); // Save theme to localStorage
      document.getElementById('theme-toggle').textContent = 'Switch to Dark Theme';
    }
  });
  