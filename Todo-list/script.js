const data = document.querySelector("#in");
const btn = document.querySelector("#btn");
const all = document.querySelector("#all");
data.addEventListener("keyup", function () {
  let ina = data.value;
  let fil = suggestions.filter((x) => {
    return x.toLowerCase().includes(ina.toLowerCase());
  });
  console.log(fil);
});
