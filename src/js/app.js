// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';
import swiper from './modules/swiper';
import burger from './modules/burger';

// When DOM is ready
$(() => {
  swiper.init();
  burger();
});
