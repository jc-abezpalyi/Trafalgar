import $ from 'jquery';

const burger = () => {
  const body = $('body');
  const $btn = $('.burger-btn');
  const $navList = $('.header__nav__list');

  const OPENED_MENU_CLASSNAME = 'main-menu-opened';
  const BURGER_ACTIVE = 'header__nav__list--burger-active';

  const burgerHandler = () => {
    if (!$btn.length) {
      return;
    }
    body.toggleClass(OPENED_MENU_CLASSNAME);
    $navList.toggleClass(BURGER_ACTIVE);
  };

  $btn.click(() => burgerHandler());
};

export default burger;
