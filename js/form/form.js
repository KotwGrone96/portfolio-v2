import { form, formInputs, alertInputs, modalForm, modalMsg } from '../DOMElements/DOMElements.js';
import sendEmail from './sendEmail.js';
import { showModalForm } from './../modal/modal.js';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const nombre = formData.get('nombre');
  const asunto = formData.get('asunto');
  const email = formData.get('email');
  const tel = formData.get('tel');
  const mensaje = formData.get('mensaje');

  const body = { nombre, asunto, email, tel, mensaje };

  const res = await sendEmail(body);
  if (!res) {
    showModalForm(res);
    return;
  }
  showModalForm(res);
  form.reset();
});

const activeAlert = (inputName, validity) => {
  alertInputs.forEach((alertLabel) => {
    const label = Object.values(alertLabel.dataset)[0];
    if (label === inputName && !validity) {
      alertLabel.style.display = 'block';
      return;
    }
    alertLabel.style.display = 'none';
  });
};

formInputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    const regExp = e.target.validity.valid;
    if (!regExp) {
      activeAlert(e.target.name, regExp);
      return;
    }
    activeAlert(e.target.name, regExp);
  });
});
