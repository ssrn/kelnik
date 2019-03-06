import renderFlats from "./renderFlats";

const loadMoreResults = () => {
  fetch('/data/flats.json')
    .then(response => response.json())
    .then(data => {
      let flats = document.querySelectorAll('.flat');
      renderFlats(data['flats'], flats.length)
    })
};

export default loadMoreResults;