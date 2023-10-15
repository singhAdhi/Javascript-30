const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
let dec = document.querySelector("#time-left");
let ran;
let result = 0;
function randomSquare() {
  squares.forEach((sq) => {
    sq.classList.remove("mole");
  });
  ran = Math.floor(Math.random() * squares.length);

  let randomSq = squares[ran];
  randomSq.classList.add("mole");
}

setInterval(randomSquare, 500);
squares.forEach((sq) => {
  sq.addEventListener("click", function (e) {
    if (e.target.id == ran) {
      result++;
      score.innerHTML = result;
    }
  });
});
