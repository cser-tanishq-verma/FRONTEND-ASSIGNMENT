async function getData() {
  let res = await fetch("https://api.escuelajs.co/api/v1/products");
  let data = await res.json();

  let container = document.getElementById("container");

  data.forEach((product) => {
    // create card
    let card = document.createElement("div");
    card.classList.add("card");

    // product name
    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = product.title;

    // price
    let price = document.createElement("div");
    price.classList.add("price");
    price.textContent = "₹ " + product.price;

    // append
    card.appendChild(title);
    card.appendChild(price);
    container.appendChild(card);
  });
}

getData();
