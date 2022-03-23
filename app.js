const CardsContainer = document.querySelector(".cards-container");
let id = 0;
const form = document.querySelector("form");
const filmData = [];
document.addEventListener("DOMContentLoaded", () => {
  deleteCard();
  FilmInput();
});
// injecting html card template into the cards container
function addCard() {
  CardsContainer.innerHTML += `
  <li class="card" data-id="${filmData[filmData.length - 1].cardId}" >
    <img class="card-poster" src=${
      filmData[filmData.length - 1].poster
    }  alt="Dr.Strangelove poster" >  
    <button class="x-button">
      <svg class="x-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(174, 254, 255, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
    </button>
    <div class="film-info">
      <h3 class="film-name">${filmData[filmData.length - 1].title}</h3>
      <div class="stats">
        <p class="film-date">${filmData[filmData.length - 1].date}</p>
        <p class="rate">${filmData[filmData.length - 1].rate}</p>
        <img class="star-icon" src="./imgs/star-outline-svgrepo-com.svg" alt="star" width="13" height="12">
      </div>
      <div class="review">
        <p>my review:</p> 
        <p>${filmData[filmData.length - 1].review}</p> 
      </div>
      <button class="review-button">view full review</button>
    </div>
  </li>
  `;
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
  const filmIndex = filmData.findIndex((film) => film.cardId == id);
  console.log(filmIndex);
  filmData.splice(filmIndex, 1);
  console.log(filmData);
}

function FilmInput() {
  const inputValues = document.querySelectorAll("input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    filmData.push({
      cardId: ++id,
      poster: "./imgs/Dr-Strangelove.jpg",
      title: form.title.value,
      date: form.year.value,
      rate: form.rate.value,
      review:
        "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
    });
    addCard();
    clearInputFields(inputValues);
    console.log(filmData);
  });
}
function clearInputFields(inputValues) {
  inputValues.forEach((input) => {
    input.value = "";
  });
}
