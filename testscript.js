//get contact with API

async function getCard() {
  try {
    const api = "https://v2.api.noroff.dev/rainy-days";
    //console.log(api);
    const response = await fetch(api);
    //console.log(response);
    const data = await response.json();
    console.log(data.data);

    const productList = data.data;
    if (data.data.lenght > 0) {
      let newList = "";
      let tempList = [];
    }
  } catch (error) {
    console.log(error.message);
  }
}
getCard();
