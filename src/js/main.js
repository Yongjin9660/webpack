import webpackImage from '../img/webpack.png';

window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#app');
  el.innerHTML = `
  <h1>Webpack</h1>
  <img src="${webpackImage}" alt="webpack" />`;
});
