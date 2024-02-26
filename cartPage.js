let total = 0;

const buildCheckoutCard = (cartItems) => {
	const sum = cartItems.reduce((acc, product) => {
		return acc + product.price;
	}, 0);

	const cardNode = document.getElementById("checkoutCardContainer");

	for (let i = 0; i < cartItems.length; i++) {
		const cartItem = document.createElement("checkoutCardContainer");
		cartItem.innerHTML = `
      <div class="cardContainer">
      <h1>${cartItems[i].title}</h1>
      <p>${cartItems[i].price}</p>
      `;

		cardNode.appendChild(cartItem);
	}

	const totalNode = document.createElement("totalNode");
	totalNode.innerHTML = `<h2>Total: $${sum}</h2>`;
};

//set var i to 0, as long as i is less than the length of productData, increment i by 1
const cardContainer = document.createElement("checkoutCardContainer");
cardContainer.innerHTML = `
    <div class="cardContainer">
    <h1>${card.title}</h1>
    <img src="${card.image.url}" alt="${card.title}" style="max-width: 100px;">
    <p>${card.price}</p>
    </div>
    cardNode.appendChild(cardContainer);
    `;

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
