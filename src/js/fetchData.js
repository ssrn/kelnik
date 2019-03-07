const fetchData = (func, prop, ...args) => {
  fetch('data/flats.json')
    .then(response => response.json())
    .then(data => {
      func(data[prop], ...args)
    })
};

// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }
//   catch(e) {
//     console.log('Error!', e);
//   }
// }

export default fetchData;