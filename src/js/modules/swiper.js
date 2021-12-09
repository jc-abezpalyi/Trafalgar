import Swiper, { Navigation, Pagination,effect } from 'swiper';

Swiper.use([Navigation, Pagination,effect]);

const swiper = (()=> {
  function init() {
    new Swiper(".testimonials", {
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  return {
    init: init
  }
})();
export default swiper;
