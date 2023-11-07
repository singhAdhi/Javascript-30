const shop = document.getElementById("shop");
const search = document.getElementById("search");
const input = document.getElementById("input");
const dropdown = document.getElementById("dropdown");
const cartAmount = document.getElementById("cartAmount");
const cartData = document.getElementById("cartData");
const Total = document.getElementById("Total");
let add;
let minus;
let product;
let cart = [];

let data = async () => {
  try {
    let resp = await fetch("https://fakestoreapi.com/products");
    product = await resp.json();
    showData(product);
  } catch (error) {
    console.log(error);
  }
};
data();

let showData = (data) => {
  shop.innerHTML = data
    .map((x) => {
      return `<div id=product-id-${x.id} class="card">
      <img class="card-img-top h-50" src=${x.image} alt="">
      <div class="card-body">
        <h3 class="card-title">${x.title}</h3>
        <p class="card-text text-truncate">${x.description}</p>
        <div class="price-quantity">
          <h2>$ ${x.price} </h2>
          <button class="add btn btn-primary">
          +
          </button>
          <button class="minus btn btn-primary">
          -
          </button>
        </div>
      </div>
    </div>`;
    })
    .join("");

  add = document.querySelectorAll(".add");
  minus = document.querySelectorAll(".minus");

  add.forEach((x, index) => {
    x.addEventListener("click", function () {
      cart.push(product[index]);
      cartAmount.innerHTML = cart.length;
      updateCartData();
      total();
    });
  });
  minus.forEach((x, index) => {
    x.addEventListener("click", function () {
      cart.pop(product[index]);
      console.log(cart);
      cartAmount.innerHTML = cart.length;
      updateCartData();
      total();
    });
  });
  function updateCartData() {
    cartData.innerHTML = cart
      .map((x) => {
        return `<div id=product-id-${x.id} class="card my-2">
          <img class="card-img-top h-50" src=${x.image} alt="">
          <div class="card-body">
            <h3 class="card-title">${x.title}</h3>
            <p class="card-text text-truncate">${x.description}</p>
            <div class="price-quantity">
              <h2>$ ${x.price} </h2>
            </div>
          </div>
        </div>`;
      })
      .join("");
  }
};
function total() {
  console.log(cart);
  let price = [];
  let b = cart.map((x) => {
    return price.push(x.price);
  });
  Total.innerHTML = price.reduce((a, c) => a + c);
}

search.addEventListener("click", function () {
  let value = input.value;
  let searchData = product.filter((x) => {
    return x.title.toLowerCase().includes(value.toLowerCase());
  });
  showData(searchData);
});

dropdown.addEventListener("change", function (e) {
  if (e.target.value === "plth") {
    const sortedItemsLowToHigh = product.sort((a, b) => a.price - b.price);
    showData(sortedItemsLowToHigh);
  } else if (e.target.value === "phtl") {
    const sortedItemsHighToLow = product.sort((a, b) => b.price - a.price);
    showData(sortedItemsHighToLow);
  } else {
    const popular = product.sort((a, b) => b.rating.rate - a.rating.rate);
    showData(popular);
  }
});
