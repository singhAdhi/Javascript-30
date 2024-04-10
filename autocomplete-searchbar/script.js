const data = document.querySelector("#in");
const btn = document.querySelector("#btn");
const all = document.querySelector("#all");

function getData() {
  let query = data.value;
  api(query);
}

function debounce(cb, delay) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}
async function api(query) {
  let data = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  let resp = await data.json();
  let product = resp.products.map((title) => {
    return title.title;
  });
  console.log(product);
  all.innerHTML = product.map((tit) => {
    return `<div>${tit}</div>`;
  });
}
api();
data.addEventListener("keyup", debounce(getData, 1000));
