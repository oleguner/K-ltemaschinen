/* eslint no-use-before-define: 0 */
import image from '../images/Vector.svg';

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

  producteBtn.addEventListener('click', toutchPopup);

  peripBtn.addEventListener('click', toutchPopup);

  dienstBtn.addEventListener('click', toutchPopup);

  function toutchPopup(clickEvent) {
    if (clickEvent.target.id === 'prod-btn') {
      producteIcon.style.backgroundImage = image;
      console.log(producteIcon);
    }
    if (clickEvent.target.id === 'per-btn') {
      peripIcon.style.backgroundImage = 'url(../images/Vector_colored_flipped.svg)';
      console.log(peripIcon);
    }
    if (clickEvent.target.id === 'dein-btn') {
      dienstIcon.style.backgroundImage = 'url(../images/Vector_colored_flipped.svg)';
      console.log(producteIcon);
    }
    // console.log(clickEvent.target);
  }
};

createPopup();
