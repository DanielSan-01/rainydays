//import {  } from "productPage.js"//fra product page
//console.log("favourites:", favourites);

//const outElement = document.getElementById("container");

const buildCheckoutCard = (cartItems) => {
  const sum = cartItems.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  // Iterables - fancy word for: array

  const cardNode = document.getElementById("checkoutCardContainer");

  for (let i = 0; i < productData.length; i++) { 
   
  }
  // Iterate (loop) cartItems
  // Make html for what you want to show

  // const cardContainer = document.createElement("checkoutCardContainer");
  // cardContainer.innerHTML = `
  //   <div class="cardContainer">
  //   <h1>${card.title}</h1>
  //   <img src="${card.image.url}" alt="${card.title}" style="max-width: 100px;">
  //   <p>${card.price}</p>
  //   </div>
  //   `;

  // console.log("productData", productData);
  // let cardContainer = document.createElement("div");

  // for (let i = 0; i < productData.length; i++) {
  //   //set var i to 0, as long as i is less than the length of productData, increment i by 1
  //   const card = productData[i];
  //   const cardContainer = document.createElement("cardContainer");
  //   cardContainer.innerHTML = `
  //     <div class="cardBuilder">
  //     <h1>${card.title}</h1>
  //     <img src="${card.image.url}" alt="${card.title}" style="max-width: 400px;">
  //     <p style="max-width: 400px;">${card.description}</p>
  //     <p>${card.price}</p>
  //     <a href="productpage.html?id=${card.id}">Shop now</a>
  //     <br><br>
  //     </div>
  //     `;
  //   cardNode.appendChild(cardContainer);
  // }

  // ADD SUM HTML
};

async function getCardData() {
  try {
    const endPoint = "https://v2.api.noroff.dev/rainy-days";
    //console.log(api);
    const response = await fetch(endPoint);
    //console.log(response);
    const data = await response.json();
    const storedProducts = JSON.parse(sessionStorage.getItem("storedProducts"));
    const filteredData = data.data.filter((product) => {
      return storedProducts.includes(product.id);
    });
    buildCheckoutCard(filteredData);
    console.log("filteredData", filteredData);
    console.log("storedProducts", storedProducts);
    console.log("SE-HER", data.data);
  } catch (error) {
    console.log(error.message);
  }
}

getCardData();
