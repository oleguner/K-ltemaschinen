/* eslint no-use-before-define: 0 */
import slider1 from '../images/slider/slider1.png';
import slider2 from '../images/slider/slider2.png';
import slider3 from '../images/slider/slider3.png';

export default function handleSlider() {
  const leftBtn = document.querySelector('.slider__left-btn');
  const rightBtn = document.querySelector('.slider__right-btn');
  const radioWrap = document.querySelector('.slider__radio-wrapper');

  const imageContainer = document.querySelector('.slider__photo');
  const imgDuration = 2000;

  const radioBtns = document.querySelectorAll('.slider__radio-btn');
  let i = 0;

  radioBtns[0].style.transform = 'scale(1.3)';
  radioBtns[0].style.backgroundColor = '#0056D7';

  const images = [slider1, slider2, slider3];

  leftBtn.addEventListener('click', () => switcher('-'));
  rightBtn.addEventListener('click', () => switcher('+'));

  radioWrap.addEventListener('click', (event) => {
    if (!event.target.classList.contains('slider__radio-btn')) {
      return;
    }

    for (let j = 0; j < radioBtns.length; j += 1) {
      radioBtns[j].style.transform = 'scale(1)';
      radioBtns[j].style.backgroundColor = '#d0dddf';
    }

    radioBtns.forEach((btn, index) => {
      if (btn === event.target) {
        i = index;
        slideShow();
        radioBtns[i].style.transform = 'scale(1.3)';
        radioBtns[i].style.backgroundColor = '#0056D7';
      }
    });
  });

  function switcher(operator = '-') {
    for (let j = 0; j < radioBtns.length; j += 1) {
      radioBtns[j].style.transform = 'scale(1)';
      radioBtns[j].style.backgroundColor = '#d0dddf';
    }

    if (operator === '-') {
      i -= 1;
      if (i < 0) {
        i = images.length - 1;
      }
    }

    if (operator === '+') {
      i += 1;
      if (i === images.length) {
        i = 0;
      }
    }
    radioBtns[i].style.transform = 'scale(1.3)';
    radioBtns[i].style.backgroundColor = '#0056D7';
    slideShow();
  }

  function slideShow() {
    imageContainer.className += 'fadeOut';
    setTimeout(() => {
      imageContainer.src = images[i];
      imageContainer.className = '';
    }, 300);
  }
}
