import { navBtnsLinks } from '../DOMElements/DOMElements.js';

const btnLines = Object.values(document.querySelectorAll('.nav-btn-line'));
const menuBtn = document.querySelector('.nav-btn');
const navBar = document.querySelector('.navbar');

//ESTADO DEL NAVBAR
let isOpen = false;

//MANEJADOR VISUAL DEL NAVBAR
const handleNavBar = () => {
  isOpen
    ? ((navBar.style.transition = 'transform 0.5s ease-in-out'),
      (navBar.style.transform = 'translate(0)'))
    : ((navBar.style.transition = 'transform 0.5s ease-in-out'),
      (navBar.style.transform = 'translateX(-100vw)'));
  setTimeout(() => {
    navBar.style.transition = 'none';
  }, 500);
};

//MANEJADOR VISUAL DEL BOTÓN DEL NAVBAR
const handleMenuBtn = () => {
  btnLines[0].style.transform = isOpen
    ? 'rotate(0) translate(0)'
    : 'rotate(45deg) translate(8px, 8px)';
  btnLines[1].style.transform = isOpen ? 'rotate(0)' : 'rotate(-45deg)';
  btnLines[2].style.display = isOpen ? 'block' : 'none';
  isOpen = isOpen ? false : true;
};

//MANEJO DE NAVBAR EN BASE A LOS LINKS HREF AL SER PRESIONADOS

const handleLinkBtn = () => {
  if (!isOpen) return;
  handleMenuBtn();
  handleNavBar();
};

menuBtn.addEventListener('click', () => {
  handleMenuBtn();
  handleNavBar();
});

//MANEJO DE NAVBAR AL PRESIONAR CUALQUIERA DE LOS LINKS HREF
navBtnsLinks.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleLinkBtn();
  });
});
