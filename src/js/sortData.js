import renderFlats from './renderFlats';
import loadMoreResults from "./loadMoreResults";
import lazyload from "./lazyload";

const  sortData = (data, e, prop, message) => {
  const sorted = compare(data, e, prop, message);

  document.querySelector('.search-result__cards-wrap').innerHTML = '';

  renderFlats(sorted, 0, 12);

  document.querySelector('.search-result__more-results').removeEventListener('click', loadMoreResults);
  document.querySelector('.search-result__more-results').addEventListener('click', () => {
    renderFlats(sorted, 12);
    lazyload();
  });
};

const compare = (data, e, prop, message) => {
  e.target.classList.toggle("sorter__sort-arrow--asc");

  let sorted;

  if (e.target.classList.contains("sorter__sort-arrow--asc")) {
    sorted = data.sort((a, b) => {
      a = parseInt(a[prop].replace(/ /g, ''));
      b = parseInt(b[prop].replace(/ /g, ''));
      return a - b;
    });
    e.target.setAttribute("aria-label", `Сортировать ${message} по убыванию`);
  } else {
    sorted = data.sort((a, b) => {
      a = parseInt(a[prop].replace(/ /g, ''));
      b = parseInt(b[prop].replace(/ /g, ''));
      return b - a;
    });
    e.target.setAttribute("aria-label", `Сортировать ${message} по возрастанию`);
  }

  return sorted;
};

export default sortData;
