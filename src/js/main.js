/* eslint no-use-before-define: 0 */
import images from './Vector_colored_flipped.svg';

const createPopup = () => {
  const producteBtn = document.querySelector('#prod-btn');
  const peripBtn = document.querySelector('#per-btn');
  const dienstBtn = document.querySelector('#dein-btn');

  const producteIcon = document.querySelector('#prod-icon');
  const peripIcon = document.querySelector('#per-icon');
  const dienstIcon = document.querySelector('#dein-icon');

  // const productePopup = document.getElementById('prod-popup');
  // const peripPopup = document.getElementById('per-popup');
  // const deinstPopup = document.getElementById('dein-btn');

  producteBtn.addEventListener('click', touchPopup);

  peripBtn.addEventListener('click', touchPopup);

  dienstBtn.addEventListener('click', touchPopup);

  function touchPopup(clickEvent) {
    if (clickEvent.target.id === 'prod-btn') {
      console.dir(images);
      producteIcon.setAttribute('src', images);
      console.log(producteIcon);
    }
    if (clickEvent.target.id === 'per-btn') {
      // peripIcon.style.backgroundImage = `${images[fileName]}`;
      console.log(peripIcon);
    }
    if (clickEvent.target.id === 'dein-btn') {
      // dienstIcon.style.backgroundImage = `${images[fileName]}`;
      console.log(producteIcon);
    }
  }
};

createPopup();
