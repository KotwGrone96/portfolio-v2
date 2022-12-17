const navBtnsLinks = Object.values(document.querySelectorAll('.menu-item a'));
const sections = document.querySelectorAll('section');
const sliderItems = document.querySelectorAll('.slider-item img');
const sliderContainer = document.querySelector('.slider-skills-container');
const form = document.getElementById('form');
const formInputs = document.querySelectorAll('.input-form');
const alertInputs = document.querySelectorAll('.input-alert');
const modalForm = document.querySelector('.modal-form');
const modalMsg = document.querySelector('.modal-msg');

export {
  navBtnsLinks,
  sections,
  sliderItems,
  sliderContainer,
  form,
  formInputs,
  alertInputs,
  modalForm,
  modalMsg,
};
