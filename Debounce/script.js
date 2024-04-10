let input = document.getElementById("inputField");
let timer;
input.addEventListener("input", function () {
  let data = input.value;
  clearInterval(timer);
  timer = setTimeout(() => {
    debounce(data);
  }, 2000);
});

function debounce(data) {
  console.log(data);
}
