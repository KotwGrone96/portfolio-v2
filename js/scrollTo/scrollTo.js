import { navBtnsLinks, sections } from '../DOMElements/DOMElements.js';

navBtnsLinks.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    window.scrollTo(0, sections[index].offsetTop - 16);
  });
});

window.addEventListener('load', () => {
  const URLPathname = window.location.pathname;
  let scrollYvalues = [];
  sections.forEach((section) => {
    const offsetTop = section.offsetTop - 16;
    scrollYvalues.push(offsetTop);
  });
  switch (URLPathname) {
    case '/about': {
      window.scrollTo(0, scrollYvalues[1]);
      return;
    }
    case '/portfolio': {
      window.scrollTo(0, scrollYvalues[2]);
      return;
    }
    case '/contact': {
      window.scrollTo(0, scrollYvalues[3]);
      return;
    }

    default:
      window.scrollTo(0, 0);
  }
});
