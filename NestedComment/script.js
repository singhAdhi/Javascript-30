const commentDetail = document.querySelector(".commentDetail");
const allComment = document.querySelector(".allComment");
const latest = document.querySelector(".latest");
const reply = document.querySelector("#reply");
const submit = document.querySelector("#submit");
const input = document.querySelector("#input");

reply.addEventListener("click", function (e) {
  commentDetail.style.display = "block";
});
submit.addEventListener("click", function () {
  createInputBox();
});
function createInputBox() {
  latest.innerHTML += ` <div class="card">
    <span>First Comment</span>
   
  </div>`;
  commentDetail.style.display = "none";
}
