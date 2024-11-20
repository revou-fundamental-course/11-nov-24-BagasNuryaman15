// For Navigation Bar
// Variable Selector
const navMenu = document.getElementById('nav-menu');
const btnToggle = document.getElementById('btn-toggle');
const btnClose = document.getElementById('btn-close');

// Menu Show
if (btnToggle) {
  btnToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
  })

// Menu Hidden
if (btnClose) {
  btnClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
}
// For Click Auto slide

const logo = document.getElementById('logo');

logo.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0, 
    behavior: 'smooth' 
  });
});

const readMore = document.getElementById('card-btn');

readMore.addEventListener('click', () => {
  preventDefault()
  window.scroll({
    top: 70,
    behavior: 'smooth'
  });
});