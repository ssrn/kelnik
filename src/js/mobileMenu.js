/**
 * @file
 * Provides responsive menu toggle and dropdown functionality.
 */

const mobileMenu = () => {
  const hamburger = document.querySelector('.toggle-menu__hamburger');
  const header = document.querySelector(".page-header");
  const mainMenu = document.querySelector(".page-header__nav");
  const body = document.querySelector("body");

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    mainMenu.classList.toggle('is-active');
    header.classList.toggle('is-fixed');
    body.classList.toggle('is-fixed');
  });
};

export default mobileMenu;