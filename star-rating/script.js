const star = document.querySelectorAll(".star");

star.forEach((x) => {
  x.addEventListener("click", function () {
    x.classList.toggle("star-filled");
  });
});
