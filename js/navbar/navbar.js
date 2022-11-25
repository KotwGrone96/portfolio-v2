const btnLines = Object.values(document.querySelectorAll('.nav-btn-line'));
const navBtn = document.querySelector('.nav-btn');
const navBar = document.querySelector('.navbar');

let isOpen = false;

const openNavbar = () => {
  isOpen
    ? ((navBar.style.transition = 'transform 0.5s ease-in-out'),
      (navBar.style.transform = 'translate(0)'))
    : ((navBar.style.transition = 'transform 0.5s ease-in-out'),
      (navBar.style.transform = 'translateX(-100vw)'));

  setTimeout(() => {
    navBar.style.transition = 'none';
  }, 1000);
};

navBtn.addEventListener('click', () => {
  btnLines[0].style.transform = isOpen
    ? 'rotate(0) translate(0)'
    : 'rotate(45deg) translate(8px, 8px)';
  btnLines[1].style.transform = isOpen ? 'rotate(0)' : 'rotate(-45deg)';
  btnLines[2].style.display = isOpen ? 'block' : 'none';
  isOpen = isOpen ? false : true;
  openNavbar();
});
