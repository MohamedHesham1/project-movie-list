const CardsContainer = document.querySelector(".cards-container");
let filmData = [
  {
    id: "1",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: " 1",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "1",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: " 1",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "1",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: " 1",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "1",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: " 1",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "1",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: " 1",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "1",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: " 1",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "1",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: " 1",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "1",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: " 1",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "1",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: " 1",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  addMovies();
  deleteCard();
  addFilm();
});
// injecting html card template into the cards container
function addMovies() {
  filmData.forEach((filmData) => {
    CardsContainer.innerHTML += `
  <li class="card" data-id="${filmData.id}" >
    <img class="card-poster" src=${filmData.poster}  alt="Dr.Strangelove poster" >  
    <button class="x-button">
      <svg class="x-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(174, 254, 255, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
    </button>
    <div class="film-info">
      <h3 class="film-name">${filmData.title}</h3>
      <div class="stats">
        <p class="film-date">${filmData.date}</p>
        <p class="rate">${filmData.rate}</p>
        <img class="star-icon" src="./imgs/star-outline-svgrepo-com.svg" alt="star" width="13" height="12">
      </div>
      <div class="review">
        <p>my review:</p> 
        <p>${filmData.review}</p> 
      </div>
      <button class="review-button">view full review</button>
    </div>
  </li>
  `;
  });
  console.log(filmData);
}

//remove the card from the DOM
function deleteCard() {
  CardsContainer.addEventListener("click", (e) => {
    if (e.target.closest(".x-button")) {
      e.target.parentElement.remove();
      deleteFromArray(e);
    }
  });
}

function deleteFromArray(e) {
  const id = e.target.parentElement.getAttribute("data-id");
  const filmIndex = filmData.findIndex((film) => film.id == id);
  filmData.splice(filmIndex, 1);
  console.log(filmData);
}

function getFilmInput() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
