// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';
import swiper from './modules/swiper';

// When DOM is ready
$(() => {
  swiper.init();
  const body = document.querySelector('body');
  const btn = document.querySelector('.burger-btn');
  const OPENED_MENU_CLASSNAME = 'main-menu-opened';
  // eslint-disable-next-line no-use-before-define
  btn.addEventListener('click', () => scrollHandler());

  const scrollHandler = () => {
    // eslint-disable-next-line no-use-before-define
    if (!body.classList.contains(OPENED_MENU_CLASSNAME)) {
      // eslint-disable-next-line no-use-before-define
      body.classList.add(OPENED_MENU_CLASSNAME);
    } else {
      // eslint-disable-next-line no-use-before-define
      body.classList.remove(OPENED_MENU_CLASSNAME);
    }
  };
});
