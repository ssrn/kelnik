const renderFlats = (flats, start, finish = flats.length) => {
  for (let i = start; i < finish; i++) {
    let flat = document.createElement("article");
    flat.classList.add(`flat`);

    let status = '';
    switch (flats[i].status) {
      case 'свободно':
        status = 'free';
        break;
      case 'забронировано':
        status = 'booked';
        break;
      case 'продано':
        status = 'sold';
        break;
      default:
        console.error('значение совйства data.status не задано');
    }

    let flatMarkup = `
      <a href="#" class="flat-card flat-card--${status}">
        <div class="flat-card__header">
          ${flats[i].sale ? `<span class="flat-card__label flat-card__sale"> ${flats[i].sale} </span>` : ''}
          ${flats[i].shockPrice ? `<span class="flat-card__label flat-card__shock-price"> шок цена </span>` : ''}
        </div>
        <div class="flat-card__img-wrap"><img data-src="${flats[i].image}" alt="Планировка" class="flat-card__img js-lazy"></div>
        <div class="flat-card__body">
          <h2 class="flat-card__title">${flats[i].title}</h2>
          <div class="flat-card__param">
            <div class="flat-card__decoration">${flats[i].decoration}</div>
            <div class="flat-card__meters">${flats[i].meters} м<sup>2</sup> площадь</div>
            <div class="flat-card__floor">${flats[i].floor} этаж</div>
          </div>
          <div class="flat-card__price">${flats[i].price}</div>
        </div>
        <div class="flat-card__footer">
          <div class="flat-card__status flat-card__status--${status}">${flats[i].status}</div>
        </div>
      </a>
      <button class="favorite-btn" aria-label="Добавить в избранное"><svg class="icon__fav"><use xlink:href="/img/svg/star.svg#star"></use></svg></button>
    `;

    flat.innerHTML = flatMarkup;
    document.querySelector('.search-result__cards-wrap').appendChild(flat);
  }

  finish === flats.length && document.querySelector('.search-result__more-results').classList.add('hidden');
};

export default renderFlats;