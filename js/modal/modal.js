import { modalForm, modalMsg } from './../DOMElements/DOMElements.js';

const showModalForm = (bool) => {
  if (bool) {
    modalForm.style.display = 'flex';
    modalMsg.textContent = 'Mensaje enviado correctamente!!! 😃😃😃';
    setTimeout(() => {
      modalMsg.style.transition = 'all 1s';
      modalMsg.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
      modalMsg.style.opacity = '0';
    }, 2000);
    setTimeout(() => {
      modalForm.style.display = 'none';
      modalMsg.style.transition = 'none';
      modalMsg.style.transform = 'translateY(-200%)';
      modalMsg.style.opacity = '1';
    }, 3000);

    return;
  }
  modalMsg.textContent = 'Ha ocurrido un error, por favor intente mas tarde 😔😔😔';
  modalMsg.style.backgroundColor = '#d00';
  modalForm.style.display = 'flex';
  setTimeout(() => {
    modalMsg.style.transition = 'all 1s';
    modalMsg.style.transform = 'translateY(0)';
  }, 100);

  setTimeout(() => {
    modalMsg.style.opacity = '0';
  }, 2000);
  setTimeout(() => {
    modalForm.style.display = 'none';
    modalMsg.style.transition = 'none';
    modalMsg.style.transform = 'translateY(-200%)';
    modalMsg.style.opacity = '1';
  }, 3000);
};

export { showModalForm };
