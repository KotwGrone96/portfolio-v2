import { form } from '../DOMElements/DOMElements.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
