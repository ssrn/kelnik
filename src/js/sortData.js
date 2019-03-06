import renderFlats from './renderFlats';
import loadMoreResults from "./loadMoreResults";

const  sortData = (data, e, prop) => {
  const sorted = compare(data, prop, e);

  document.querySelector('.search-result__cards-wrap').innerHTML = '';

  renderFlats(sorted, 0, 12);

  document.querySelector('.search-result__more-results').removeEventListener('click', loadMoreResults);
  document.querySelector('.search-result__more-results').addEventListener('click', () => {
    renderFlats(sorted, 12)
  });
};

const compare = (data, prop, e) => {
  e.target.classList.toggle("sorter__sort-arrow--asc");

  let sorted;

  if (e.target.classList.contains("sorter__sort-arrow--asc")) {
    sorted = data.sort((a, b) => {
      a = parseInt(a[prop].replace(/ /g, ''));
      b = parseInt(b[prop].replace(/ /g, ''));

      return a - b;
    })
  } else {
    sorted = data.sort((a, b) => {
      a = parseInt(a[prop].replace(/ /g, ''));
      b = parseInt(b[prop].replace(/ /g, ''));

      return b - a;
    })
  }

  return sorted;
};

export default sortData;
