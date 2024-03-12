function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // save preference to localStorage
  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// check local storage for dark mode preference
const darkMode = localStorage.getItem('darkMode');
if(darkMode === 'enabled'){
  document.body.classList.add('dark-mode');
}
