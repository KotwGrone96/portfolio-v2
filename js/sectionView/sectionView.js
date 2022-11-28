import { activeLink, router } from '../router/router.js';
import { sections } from '../DOMElements/DOMElements.js';

let firstLoad = true;

const handleActiveLinkAndRoute = (id) => {
  switch (id) {
    case 'home': {
      const URLPathname = window.location.pathname;
      if (URLPathname === '/' && firstLoad) {
        firstLoad = false;
        activeLink();
        return;
      }
      if (URLPathname !== '/' && !firstLoad) {
        router('/');
        activeLink();
        return;
      }
      if (URLPathname !== '/' && firstLoad) {
        firstLoad = false;
        router('/');
        activeLink();
        return;
      }
      router(window.location.pathname);
      activeLink();
      firstLoad = false;
      return;
    }
    case 'about': {
      router(id);
      activeLink();
      return;
    }
    // case 'skills': {
    //   router(id);
    //   activeLink();
    //   return;
    // }
    case 'portfolio': {
      router(id);
      activeLink();
      return;
    }
    case 'contact': {
      router(id);
      activeLink();
      return;
    }
    default:
      return;
  }
};

const handleSectionView = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      handleActiveLinkAndRoute(entry.target.id);
      return;
    }
  });
};

let options = {
  threshold: 0.5,
};

let observer = new IntersectionObserver(handleSectionView, options);

sections.forEach((section) => {
  observer.observe(section);
});
