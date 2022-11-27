import { sliderItems } from '../DOMElements/DOMElements.js';

sliderItems.forEach((item) => {
  item.style.filter = item.dataset.filter;
});

// const sliderLastItem = sliderContainer.children[sliderContainer.children.length - 1];
// sliderContainer.insertAdjacentElement('afterbegin', sliderLastItem);

// const next = () => {
//   const sliderFirstItem = sliderContainer.children[0];
//   sliderContainer.style.transition = 'all 0.5s';
//   sliderContainer.style.marginLeft = '-80px';
//   setTimeout(() => {
//     sliderContainer.style.trasition = 'none';
//     sliderContainer.insertAdjacentElement('beforeend', sliderFirstItem);
//     sliderContainer.style.marginLeft = '0';
//   }, 500);
// };

// setInterval(() => {
//   next();
// }, 2000);

// setInterval(() => {
//   next();
// }, 1000);

// let maxScrollLeft = sliderWindow.scrollWidth - sliderWindow.clientWidth;

// let interval = null;
// let backInterval = null;

// const backSlider = () => {
//   let step = 84;

//   backInterval = setInterval(() => {
//     sliderWindow.scrollLeft = sliderWindow.scrollLeft - step;
//     if (sliderWindow.scrollLeft === 0) {
//       clearInterval(backInterval);
//       startAnimation();
//       return;
//     }
//   }, 1000);
// };

// const startAnimation = () => {
//   let step = 84;

//   interval = setInterval(() => {
//     sliderWindow.scrollLeft = sliderWindow.scrollLeft + step;
//     if (sliderWindow.scrollLeft === maxScrollLeft) {
//       clearInterval(interval);
//       backSlider();
//       return;
//     }
//   }, 1000);
// };
