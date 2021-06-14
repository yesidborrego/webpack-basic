import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/_variables.scss';

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
