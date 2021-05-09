/* eslint no-use-before-define: 0 */
import flippedArrow from '../images/Vector_colored_flipped.svg';
import coloredArrow from '../images/Vector_colored.svg';
import arrow from '../images/Vector.svg';

export default function createPopup() {
  const popupContainer = document.querySelector('.nav__list');

  const buttonStore = [
    document.querySelector('#prod-btn'),
    document.querySelector('#per-btn'),
    document.querySelector('#dein-btn'),
  ];

  let isPopupOpen = false;
  if (!isPopupOpen) {
    popupContainer.addEventListener('click', touchPopup);

    popupContainer.addEventListener('mouseover', (overEvent) => {
      if (overEvent.target.tagName === 'DIV' && !isPopupOpen) {
        overEvent.target.firstElementChild.setAttribute('src', coloredArrow);
      } else if (overEvent.target.tagName === 'IMG' && !isPopupOpen) {
        overEvent.target.setAttribute('src', coloredArrow);
      }
    });

    popupContainer.addEventListener('mouseout', (outEvent) => {
      if (outEvent.target.tagName === 'DIV' && !isPopupOpen) {
        outEvent.target.firstElementChild.setAttribute('src', arrow);
      }
    });
  }

  let prevClick = null;

  function touchPopup(clickEvent) {
    const isArrow = clickEvent.target.tagName === 'IMG';

    if (clickEvent.target.tagName === 'DIV' || isArrow) {
      const target = clickEvent.target.tagName === 'IMG'
        ? clickEvent.target.closest('div') : clickEvent.target;

      if (prevClick === target) {
        isPopupOpen = !isPopupOpen;
      } else {
        isPopupOpen = true;
      }

      const img = target.firstElementChild || clickEvent.target;

      const setArrow = img.getAttribute('src').includes('flipped')
        ? arrow : flippedArrow;

      buttonStore.forEach((btn) => {
        if (btn !== target) {
          btn.lastElementChild.classList.remove('popup--hidden');
          btn.firstElementChild.setAttribute('src', arrow);
        }
      });

      img.setAttribute('src', setArrow);

      if (target === buttonStore[0]
        || target === buttonStore[1]
        || target === buttonStore[2]
      ) {
        target.lastElementChild.classList.toggle('popup--hidden');
        target.style.border = '2px solid transparent';
        prevClick = target;
      }
    }
  }
}

export function toggleBurger() {
  const burgerBtn = document.querySelector('.burger');
  const navDiv = document.querySelector('.nav');

  burgerBtn.addEventListener('click', (e) => {
    const topBar = document.querySelector('.burger__top');
    const midBar = document.querySelector('.burger__middle');
    const bottomBar = document.querySelector('.burger__bottom');

    const navDisplay = getComputedStyle(navDiv, null)
      .getPropertyValue('display');
    if (navDisplay === 'none') {
      midBar.style.display = 'none';
      navDiv.style.display = 'block';
      topBar.style.transform = 'rotateZ(45deg)';
      bottomBar.style.transform = 'rotateZ(-45deg)';
      burgerBtn.style.transform = 'translateY(5px)';
    } else {
      navDiv.style.display = 'none';
      midBar.style.display = '';
      topBar.style.transform = '';
      bottomBar.style.transform = '';
      burgerBtn.style.transform = '';
    }
  });
}

toggleBurger();
