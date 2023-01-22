if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((res) => console.log('Service Worker registrado correctamente', res))
    .catch((err) => console.error('Hubo un error en el registro del service worker', err));
}
