import renderFlats from "./renderFlats";
import lazyload from "./lazyload";

const loadMoreResults = () => {
  fetch('data/flats.json')
    .then(response => response.json())
    .then(data => {
      let flats = document.querySelectorAll('.flat');
      renderFlats(data['flats'], flats.length);
      lazyload();
    })
};

export default loadMoreResults;