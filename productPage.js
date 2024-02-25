/* const getProductDetails = async () => {
 const id = "ff94a6eb-524b-4a56-b326-92fd13ee0918";
    console.log("lol");
    //console.log(api);
    const response = await fetch(endPoint);
    console.log("seher",response);
}
getProductDetails(); */

async function getProductDetails() {
  try {
    /* const id = "ff94a6eb-524b-4a56-b326-92fd13ee0918"; */
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    console.log("se for id her", id);

    // https://v2.api.noroff.dev/rainy-days/ff94a6eb-524b-4a56-b326-92fd13ee0918

    const endPoint = `https://v2.api.noroff.dev/rainy-days/${id}`;
    //console.log(api);
    const response = await fetch(endPoint);
    //console.log(response);
    const data = await response.json();
    buildCard(data.data);
    console.log("SE-HER", data.data);
  } catch (error) {
    console.log(error.message);
  }
}

getProductDetails();


const buildCard = (productData) => {
  const productNode = document.getElementById("productpage_container");
  productNode.innerHTML = `
      <h1>${productData.title}</h1>
      <img src="${productData.image.url}" alt="${productData.title}">
      <p>${productData.description}</p>
      <p>${productData.price}</p>
      `;
  /* productNode.appendChild(cardContainer); */
  console.log(productNode);
};
