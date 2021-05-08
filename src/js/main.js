/* eslint no-use-before-define: 0 */
import flippedArrow from '../images/Vector_colored_flipped.svg';
import arrow from '../images/Vector.svg';

const createPopup = () => {
  const popupContainer = document.querySelector('.nav__list');
  const producteBtn = document.querySelector('#prod-btn');
  const peripBtn = document.querySelector('#per-btn');
  const dienstBtn = document.querySelector('#dein-btn');

  const producteIcon = document.querySelector('#prod-icon');
  const peripIcon = document.querySelector('#per-icon');
  const dienstIcon = document.querySelector('#dein-icon');

  popupContainer.addEventListener('click', touchPopup);

  function touchPopup(clickEvent) {
    const isArrow = clickEvent.target.innerHTML.includes('img');
    if (clickEvent.target.closest('.nav__link--vector') || isArrow) {
      const target = clickEvent.target.tagName === 'IMG'
      ? clickEvent.target.closest('div') : clickEvent.target;
      const img = target.firstElementChild || clickEvent.target;
      const setArrow = img.getAttribute('src').includes('flipped')
        ? arrow : flippedArrow;
      console.log(img);

      img.setAttribute('src', setArrow);

      if (target === producteBtn
        || target === peripBtn
        || target === dienstBtn
      ) {
        target.lastElementChild.classList.toggle('popup--hidden');
      }
    }
  }
};

createPopup();
