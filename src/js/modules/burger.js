import $ from 'jquery';

const burger = () => {
  const $body = $('body');
  const $window = $(window);
  const $btn = $('.burger-btn');
  const $menuWrapper = $('.header__nav-burger__wrapper');

  if ($window.width() < 768) {
    $menuWrapper.removeAttr('open');
  }

  if (!$btn.length) {
    return;
  }

  const $navList = $('.header__nav__list');

  const OPENED_MENU_CLASSNAME = 'header__nav-burger--opened';
  const BURGER_ACTIVE = 'header__nav__list--burger-active';

  // eslint-disable-next-line consistent-return
  $window.resize(() => {
    if ($window.width() > 768) {
      $menuWrapper.attr('open', true);
    } else if ($body.hasClass(OPENED_MENU_CLASSNAME)) {
      return false;
    } else {
      $menuWrapper.removeAttr('open');
    }
  });

  const burgerHandler = () => {
    $body.toggleClass(OPENED_MENU_CLASSNAME);
    $navList.toggleClass(BURGER_ACTIVE);
  };

  $btn.click(() => burgerHandler());
};

export default burger;
