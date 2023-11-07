const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const imgOne = document.querySelector(".img-one");
const imgTwo = document.querySelector(".img-two");
const imgThree = document.querySelector(".img-three");
const vis = document.querySelector(".visible");
let currentImage = 1;
next.addEventListener("click", function () {
  if (imgOne.classList.contains("visible")) {
    imgOne.classList.remove("visible");
    imgTwo.classList.add("visible");
  } else if (imgTwo.classList.contains("visible")) {
    imgTwo.classList.remove("visible");
    imgThree.classList.add("visible");
  } else if (imgThree.classList.contains("visible")) {
    imgThree.classList.remove("visible");
    imgOne.classList.add("visible");
  }
});
prev.addEventListener("click", function () {
  if (imgOne.classList.contains("visible")) {
    imgOne.classList.remove("visible");
    imgTwo.classList.add("visible");
  } else if (imgTwo.classList.contains("visible")) {
    imgTwo.classList.remove("visible");
    imgThree.classList.add("visible");
  } else if (imgThree.classList.contains("visible")) {
    imgThree.classList.remove("visible");
    imgOne.classList.add("visible");
  }
});
