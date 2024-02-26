

async function getData() {
  try {
    const api = "https://v2.api.noroff.dev/rainy-days";
    const response = await fetch(api);
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
    const obj = await response.json();
    console.log(obj);    
  } catch (error) {
    console.error(error.message); 
  }
}

getData();

const api = "https://v2.api.noroff.dev/rainy-days";
fetch(api)
    .then ((response) => {
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        return response.json();
    })
    .then ((obj) => console.log(obj))
    .catch (error => console.error(error.message))