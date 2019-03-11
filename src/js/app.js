import lazyload from "./lazyload";
import loadMoreResults from "./loadMoreResults";
import sortData from "./sortData";
import mobileMenu from "./mobileMenu";
import backtotop from "./backtotop";
import validateEmail from "./validateEmail";

document.addEventListener("DOMContentLoaded", () => {
  lazyload();
  backtotop();
  mobileMenu();
  validateEmail();
  document.querySelector('.search-result__more-results').addEventListener('click', loadMoreResults);

  const priceInput = document.querySelector('[data-sort="price"]');
  const roomsInput = document.querySelector('[data-sort="rooms"]');
  priceInput.addEventListener('click', e => {
    fetch('data/flats.json')
      .then(response => response.json())
      .then(data => {
        sortData(data['flats'], e,'price', 'цену');
      });
  }, true);
  roomsInput.addEventListener('click', e => {
    fetch('data/flats.json')
      .then(response => response.json())
      .then(data => {
        sortData(data['flats'], e,'rooms', 'комнаты');
      });
  }, true);
});