const CardsContainer = document.querySelector(".cards-container");
let filmData = [
  {
    id: "1",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: "Dr.Strangelove",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "2",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: "Dr.Strangelove",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "3",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: "Dr.Strangelove",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "4",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: "Dr.Strangelove",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "5",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: "Dr.Strangelove",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "6",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: "Dr.Strangelove",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "7",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: "Dr.Strangelove",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "8",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: "Dr.Strangelove",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
  {
    id: "9",
    poster: "./imgs/Dr-Strangelove.jpg",
    title: "Dr.Strangelove",
    date: "1964",
    rate: "9",
    review:
      "Absolutely outstanding farce. Like a slow-motion screwball. George C. Scott and his faces absolutely run away with this thing.",
  },
];

filmData.forEach((filmData) => {
  CardsContainer.innerHTML += `
  <div class="card">
    <img class="card-poster" src=${filmData.poster}  alt="Dr.Strangelove poster" >
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
  </div>
  `;
});
