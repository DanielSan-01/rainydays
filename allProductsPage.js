// Global
const BASEd_URl = "https://v2.api.noroff.dev/";
const endpoint = `${BASEd_URl}/rainy-days`;
let cardData = [];
const cardNode = document.getElementById("allCardsContainer");
let selectedGender = "";

const createSelectElement = () => {
  const container = document.getElementById("select-container");

  container.innerHTML = `
    <select name="genders" id="gender-selector">
      <option value="">--Please choose an option--</option>
      <option value="male">Man</option>
      <option value="female">Woman</option>
    </select>
  `;

  if (selectedGender == "male") {
    container.innerHTML = `
      <select name="genders" id="gender-selector">
        <option value="">--Please choose an option--</option>
        <option selected value="male">Man</option>
        <option value="female">Woman</option>
      </select>
    `;
  }

  if (selectedGender == "female") {
    container.innerHTML = `
      <select name="genders" id="gender-selector">
        <option value="">--Please choose an option--</option>
        <option value="male">Man</option>
        <option selected value="female">Woman</option>
      </select>
    `;
  }

  container.addEventListener("input", (event) => {
    const chosenGender = event.target.value;
    selectedGender = chosenGender;
    console.log("chosenGender", chosenGender);
    getCardData(chosenGender);
  });
};

const buildCard = (productData) => {
  console.log("productData", productData);
  let cardContainer = document.createElement("div");

  for (let i = 0; i < productData.length; i++) {
    //set var i to 0, as long as i is less than the length of productData, increment i by 1
    const card = productData[i];
    const cardContainer = document.createElement("cardContainer");
    cardContainer.innerHTML = `
      <div class="cardBuilder">
      <h1>${card.title}</h1>
      <img src="${card.image.url}" alt="${card.title}" style="max-width: 400px;">
      <p style="max-width: 400px;">${card.description}</p>
      <p>${card.price}</p>
      <a href="productpage.html?id=${card.id}">Shop now</a>
      <br><br>
      </div>
      `;
    cardNode.appendChild(cardContainer);
  }

  createSelectElement();
};

async function getCardData(genderToFilterBy = "") {
  try {
    if (genderToFilterBy) {
      const filteredData = cardData.filter(
        (product) =>
          product.gender.toLowerCase() === genderToFilterBy.toLowerCase()
      );

      cardNode.innerHTML = "";
      buildCard(filteredData);
      return;
    }

    const endPoint = "https://v2.api.noroff.dev/rainy-days";
    const response = await fetch(endPoint);
    const data = await response.json();
    cardData = data.data;

    console.log(data.data);

    buildCard(data.data);
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
