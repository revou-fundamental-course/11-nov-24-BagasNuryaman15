// Variable Selector
const navMenu = document.getElementById('nav-menu');
const btnToggle = document.getElementById('btn-toggle');
const btnClose = document.getElementById('btn-close');

// Menu Show
if (btnToggle) {
  btnToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })

// Menu Hidden
if (btnClose) {
  btnClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}
}