const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
const grids = document.querySelector(".grid");
let arr = [];
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let images = document.createElement("img");
    console.log(images);
    images.setAttribute("src", `./images/blank.png`);
    images.setAttribute("data-id", i);
    grids.appendChild(images);
    images.addEventListener("click", flipcard);
  }
}
createBoard();
function check() {
  if (arr[0] === arr[1]) {
    console.log("its a match");
  }
}

function flipcard() {
  let id = this.getAttribute("data-id");
  let names = cardArray[id].name;
  arr.push(names);
  this.setAttribute("src", cardArray[id].img);
  if (arr.length === 2) {
    setTimeout(check, 500);
  }
}
