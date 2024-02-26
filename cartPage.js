let addToCartButton;
let selectedProductId;
let productNode;
let cartButton;

function addToCartHandler() {
  if (!selectedProductId) {
    return;
  }

  let products = [];
  const storedProducts = JSON.parse(sessionStorage.getItem("storedProducts")); //no brackets

  if (storedProducts) {
    products = storedProducts;
  }

  if (products.includes(selectedProductId)) {
    // Remove item if it allready exists
    removeItemFromCart(selectedProductId);
    return;
  }
  
  products.push(selectedProductId);
  window.sessionStorage.setItem("storedProducts", JSON.stringify(products));
  console.log(cartButton.classList);
  
  cartButton.classList.add(
    "cartButton"
  );
}

const removeItemFromCart = (id) => {
  if (!id) {
    return;
  }
  const storedProducts = JSON.parse(sessionStorage.getItem("storedProducts"));
  const indexOfStoredItem = storedProducts.indexOf(id);

  if (indexOfStoredItem > -1) {
    storedProducts.splice(indexOfStoredItem, 1);
  }
  window.sessionStorage.setItem(
    "storedProducts",
    JSON.stringify(storedProducts)
  );

  cartButton.classList.remove("cartButton");
};

async function getProductDetails() {
  try {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    const endPoint = `https://v2.api.noroff.dev/rainy-days/${id}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    buildCard(data.data);
    selectedProductId = data.data.id;
    addToCartButton = document.getElementById(data.data.id);
    addToCartButton.addEventListener("click", addToCartHandler);
  } catch (error) {
    console.log(error.message);
  }
}

getProductDetails();

const buildCard = (productData) => {
  const storedProducts = JSON.parse(sessionStorage.getItem("storedProducts"));

  productNode = document.getElementById("productpage_container");
  
  productNode.innerHTML = `
  <h1>${productData.title}</h1>
  <img src="${productData.image.url}" alt="${productData.title}" style="max-width: 300px;">
  <p>${productData.description}</p>
  <p>${productData.price}</p>
  <button class="addToCart" id="${productData.id}">Add to cart</button>
  `;
  cartButton = document.getElementById(productData.id);
};