import { navBtnsLinks as linksBtns } from '../DOMElements/DOMElements.js';

const router = (path) => {
  const currentPath = window.location.pathname;
  if (path === '/') {
    window.history.pushState({}, 'path', path);
    return;
  }
  if (currentPath.includes(path)) return;
  window.history.pushState({}, 'path', path);
};

const activeLink = () => {
  const URLPathname = window.location.pathname;
  linksBtns.forEach((btn) => {
    if (URLPathname === btn.dataset.path) {
      btn.style.color = '#72b626';
      return;
    }
    btn.style.color = '#FFFFFF';
  });
};

linksBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const path = btn.dataset.path;
    router(path);
    activeLink();
  });
});

window.addEventListener('popstate', (e) => {
  activeLink();
});

// window.onload = activeLink();

export { activeLink, router };
