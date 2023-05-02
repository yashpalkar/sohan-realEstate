

  const cardContainer = document.getElementById("card-container");

const cardDataList = [
  { image:"assets/comercial-plot1.jpg", title: "Card 1", description: "This is the first card." },
  { image:"assets/comercial-plot2.jpg", title: "Card 2", description: "This is the second card." },
  { image:"assets/comercial-plot.jpg", title: "Card 3", description: "This is the third card." },
  { image:"assets/home-img-2.jpg",title: "Card 1", description: "This is the first card." },
  { image:"assets/home3.jpeg",  title: "Card 2", description: "This is the second card." },
  { image:"assets/home-img.jpg",title: "Card 3", description: "This is the third card." },
];

cardDataList.forEach(cardData => {
  const cardViewHtml = createCardView(cardData);
  cardContainer.insertAdjacentHTML("beforeend", cardViewHtml);
});

function createCardView(cardData) {
    return `
      <div class="card">
      <div class="card-image">
      <img class="cropped" src=${cardData.image} alt="Computer Man">
      </div>
        <h2>${cardData.title}</h2>
        <p>${cardData.description}</p>
      </div>
    `;
  }