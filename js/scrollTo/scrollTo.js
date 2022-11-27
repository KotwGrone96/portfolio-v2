import { navBtnsLinks, sections } from '../DOMElements/DOMElements.js';

navBtnsLinks.forEach((btn) => {
  btn.addEventListener('click', () => {
    switch (btn.dataset.section) {
      case 'home': {
        window.scrollTo(0, sections[0].offsetTop - 16);
        return;
      }
      case 'about': {
        window.scrollTo(0, sections[1].offsetTop - 16);
        return;
      }
      // case 'skills': {
      //   window.scrollTo(0, sections[2].offsetTop - 16);
      //   return;
      // }
      case 'portfolio': {
        window.scrollTo(0, sections[2].offsetTop - 16);
        return;
      }
      case 'contact': {
        window.scrollTo(0, sections[3].offsetTop - 16);
        return;
      }

      default:
        return;
    }
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
    // case '/skills': {
    //   window.scrollTo(0, scrollYvalues[2]);
    //   return;
    // }
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
