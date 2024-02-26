const buildCheckoutCard = (cartItems) => {
    if (!cartItems) {
        return;
    }

    const sum = cartItems.reduce((acc, product) => {
        return acc + product.price;
    }, 0);

    const cartNode = document.getElementById("checkoutCardContainer");

    if (!cartNode) {
        return;
    }

    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = document.createElement("checkoutCardContainer");
        cartItem.innerHTML = `
      <div class="cardContainer">
      <h1>${cartItems[i].title}</h1>
      <p>${cartItems[i].price}</p>
      `;

        cartNode.appendChild(cartItem);
    }

    const totalNode = document.getElementById("totalNode");
    totalNode.innerHTML = `
        <h2>Total: $${sum}</h2>
        <a href="./cartsuccess.html" class="paymentbutton">Confirm</a>
    `;
};

async function getCardData() {
    try {
        const endPoint = "https://v2.api.noroff.dev/rainy-days";
        const response = await fetch(endPoint);
        const data = await response.json();
        const storedProducts = JSON.parse(
            localStorage.getItem("storedProducts")
        );

        console.log(data);

        if (!storedProducts) {
            return;
        }

        if (storedProducts) {
            const filteredData = data.data.filter((product) => {
                return storedProducts.includes(product.id);
            });
            buildCheckoutCard(filteredData);
            return;
        }
    } catch (error) {
        console.log(error.message);
    }
}

getCardData();
