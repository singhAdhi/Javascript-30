const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "In which year did World War II end?",
    answers: [
      { text: "1943", correct: false },
      { text: "1944", correct: false },
      { text: "1945", correct: true },
      { text: "1946", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Chinese Yuan", correct: false },
      { text: "Japanese Yen", correct: true },
      { text: "Euro", correct: false },
      { text: "US Dollar", correct: false },
    ],
  },
];
const answerBtn = document.getElementById("answer-btn");
const quest = document.getElementById("question");
const next = document.getElementById("next");
let currentQues = 0;

function startQuz() {
  showQuestion();
}

function showQuestion() {
  quest.innerHTML = quizQuestions[currentQues].question;
  quizQuestions[currentQues].answers.forEach((x) => {
    let btn = document.createElement("button");
    btn.innerHTML = x.text;
    answerBtn.appendChild(btn);
    btn.addEventListener("click", ans);
  });
}

startQuz();
function ans(e) {
  let selectedbtn = e.target;
  const correct = selectedbtn.dataset;
  console.log(correct);
}
