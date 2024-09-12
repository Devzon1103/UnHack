function updateFavicon(theme) {
    const favicon = document.getElementById('favicon');
    if (theme === 'dark') {
      favicon.href = 'assets/images/logos/favicon-white.png';  // Path to dark theme favicon
    } else {
      favicon.href = 'assets/images/logos/favicon.png'; // Path to light theme favicon
    }
  }
  
  // Example of detecting system theme preference
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  updateFavicon(mediaQuery.matches ? 'dark' : 'light');
  
  
  // Listen for changes in theme preference
  mediaQuery.addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    updateFavicon(newTheme);
  });
  