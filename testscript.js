//globals
const BASEd_URl = "https://v2.api.noroff.dev/";
const endpoint = `${BASEd_URl}/rainy-days`;
let cardData = [];
const cardNode = document.getElementById("singleCardContainer");

const buildCard = (productData) => {
  let cardContainer = document.createElement("div");

  for (let i = 0; i < cardData.length; i++) {
    //set var i to 0, as long as i is less than the length of cardData, increment i by 1
    const card = cardData[i];
    const cardContainer = document.createElement("div");
    cardContainer.innerHTML = `
      <h1>${card.title}</h1>
      <a href="productpage.html?id=${card.id}">${card.id}</a>
      <img src="${card.image.url}" alt="${card.title}">
      <p>${card.description}</p>
      <p>${card.price}</p>
      `;
    cardNode.appendChild(cardContainer);
    console.log("HEI", cardNode.innerHTML);
  }
};

async function getCardData() {
  try {
    const endPoint = "https://v2.api.noroff.dev/rainy-days";
    //console.log(api);
    const response = await fetch(endPoint);
    //console.log(response);
    const data = await response.json();
    cardData = data.data;
    buildCard(data.data);
    console.log("SE-HER", data.data);
  } catch (error) {
    console.log(error.message);
  }
}

getCardData();

let collection = [];
const outElement = document.getElementById("filteredCardContainer");

async function cardsFiltered() {
  try {
    const endPoint = "https://v2.api.noroff.dev/rainy-days";
    const response = await fetch(endPoint);
    const data = await response.json();
    cardData = data.data;
    //console.log("SE-HER", data.data);
  } catch (error) {
    console.log(error.message);
  }
}

cardsFiltered();















/* 
const inputField = document.getElementById("queryString");
inputField.addEventListener("keyup", filterCards);

function filterCards() {
  const filterQuery = inputField.value;
  //console.log(filterQuery);

  const filtered = collection.filter((card) => {
    //console.log(card.name, filterQuery);
    //console.log(card.name.toUpperCase().indexOf(filterQuery.toUpperCase()) > -1);
    return card.name.toUpperCase().indexOf(filterQuery.toUpperCase()) > -1;
  });
  console.log(collection.length, filtered.length);

  listData(filtered, outElement);
}

const queryString = document.location.search;

const params = new URLSearchParams(queryString); //take id from url

const id = params.get("id");
console.log("singleProductId",id);

const singleProductApi = "https://v2.api.noroff.dev/rainy-days/" + id;
console.log(singleProductApi); */

