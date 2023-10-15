const buttons = document.querySelectorAll(".button");
const box = document.querySelector(".input");
let string = "";
console.log(buttons);

Array.from(buttons).map((x) => {
  x.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      box.value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      box.value = string;
    } else {
      string = string + e.target.innerHTML;
      box.value = string;
    }
  });
});
