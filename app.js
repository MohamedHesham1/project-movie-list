const CardsContainer = document.querySelector(".cards-container");
const modal = document.querySelector(".modal");
let id = 0;
const form = document.querySelector("form");
const filmData = [];
document.addEventListener("DOMContentLoaded", () => {
  deleteCard();
  FilmInput();
  toggleModal();
});
// injecting html card template into the cards container
function addCard() {
  CardsContainer.innerHTML += `
  <li class="card" data-id=${filmData[filmData.length - 1].cardId} >
    <img class="card-poster" src=${
      filmData[filmData.length - 1].poster
    }  alt="Dr.Strangelove poster" >  
    <button class="x-button close">
    &times
    </button>
    <button class="edit-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(174, 254, 255, 1);transform: ;msFilter:;"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>
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
        <p class="review-text" >${filmData[filmData.length - 1].review}</p>   
      </div>
      <button class="review-button" 
        >view full review</button>
      
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
//remove the card from array
function deleteFromArray(e) {
  const id = e.target.parentElement.getAttribute("data-id");
  const filmIndex = filmData.findIndex((film) => film.cardId == id);
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
      review: form.review.value,
    });
    addCard();
    viewReviewModal();
    // editReview();

    clearInputFields(inputValues);
    console.log(filmData);
  });
}
function clearInputFields(inputValues) {
  const textArea = document.querySelector("textarea");
  textArea.value = "";
  inputValues.forEach((input) => {
    input.value = "";
  });
}
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function toggleModal() {
  CardsContainer.addEventListener("click", (e) => {
    const id = Number(
      e.target.parentElement.parentElement.getAttribute("data-id")
    );

    if (
      id === filmData[filmData.length - 1].cardId &&
      e.target.closest("button")
    ) {
      openModal();
    }
  });
  modal.addEventListener("click", (e) => {
    if (e.target.closest(".close") || e.target == modal) {
      closeModal();
    }
  });
}
function viewReviewModal() {
  const contentModal = document.querySelector(".modal-content");
  contentModal.innerHTML = `
  <span class="close">&times</span>
  <p class="modal-text"> ${filmData[filmData.length - 1].review}</p>
  `;
}
function editReview() {
  const modalContent = document.querySelectorAll(".modal-content");
  CardsContainer.addEventListener("click", (e) => {
    if (
      Number(e.target.parentElement.parentElement.dataset.id) ==
      filmData[filmData.length - 1].cardId
    ) {
    }
  });
}
