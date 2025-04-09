import cars from './data.mjs';

function imageTemplate(car){
    const html = `<img class="carousel-cell" src="${car.img}" alt="${car.alt}">`;
    return html;
}

function init() {
    let imageHTML = "";
    cars.forEach( car => {
        imageHTML += imageTemplate(car);
    });

    const carousel = document.getElementById("carousel");
    carousel.innerHTML = imageHTML;
  }
  init();
