const data = document.querySelector("#in");
const btn = document.querySelector("#btn");
const all = document.querySelector("#all");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  let span = document.createElement("span");
  li.innerHTML = data.value;
  span.innerHTML = "cancel";
  all.appendChild(li);
  li.appendChild(span);
});
