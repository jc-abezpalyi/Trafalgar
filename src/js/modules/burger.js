import $ from 'jquery';

const Burger = () => {
  const body = $('body');
  const btn = $('.burger-btn');
  const navList = $('.header__nav__list');
  const OPENED_MENU_CLASSNAME = 'main-menu-opened';
  const BURGER_ACTIVE = 'header__nav__list--burger-active';
  // eslint-disable-next-line no-use-before-define
  btn.click(() => burgerHandler());

  const burgerHandler = () => {
    if (!btn) return;
    if (!body.hasClass(OPENED_MENU_CLASSNAME)) {
      body.addClass(OPENED_MENU_CLASSNAME);
      navList.addClass(BURGER_ACTIVE);
    } else {
      body.removeClass(OPENED_MENU_CLASSNAME);
      navList.removeClass(BURGER_ACTIVE);
    }
  };
};

export default Burger;
