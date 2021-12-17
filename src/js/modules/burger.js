import $ from 'jquery';

const burger = () => {
  const $body = $('body');
  const $window = $(window);
  const $btn = $('.burger-btn');
  const $menuWrapper = $('.header__menu__wrapper');
  if (!$btn.length) {
    return;
  }
  const $navList = $('.header__nav__list');

  const OPENED_MENU_CLASSNAME = 'main-menu-opened';
  const BURGER_ACTIVE = 'header__nav__list--burger-active';
  $window.resize(() => {
    if ($window.width() > 768) {
      $menuWrapper.attr('open', true);
    }
  });

  const burgerHandler = () => {
    $body.toggleClass(OPENED_MENU_CLASSNAME);
    $navList.toggleClass(BURGER_ACTIVE);
  };

  $btn.click(() => burgerHandler());
};

export default burger;
