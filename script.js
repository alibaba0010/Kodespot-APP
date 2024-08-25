const quizContainer = document.getElementsByClassName("quiz-container");
const questionElement = document.getElementsByClassName("question-header");
const answersElement = document.getElementById("answer-btns");
const submitButton = document.getElementById("next-btn");
// Sample quiz data
const quizData = [
  {
    question: "What is the capital of France?",
    // options: [
    //   { text: "Paris", text: "London", text: "Berlin", text: "Madrid" },
    // ],
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which ocean is the largest on Earth?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    correctAnswer: "Au",
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  submitButton.innerHTML = "Next";
  loadQuestion();
}
function loadQuestion() {
  // resetState();
  const currentQuestion = quizData[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  // questionElement.textContent = currentQuestion.question;
  for (let i = 0; i < questionElement.length; i++) {
    questionElement[i].innerHTML = questionNo + "." + currentQuestion.question;
  }
  answersElement.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const answerButton = document.createElement("button");
    // const answerLi = document.createElement("li");
    answerButton.innerHTML = option;
    // answerLi.textContent = option;
    answerButton.classList.add("answer-btn");
    answersElement.appendChild(answerButton);
    // answersElement.appendChild(answerLi);
  });
}

startQuiz();

submitButton.addEventListener("click", () => {
  // Check answer and update score
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    // Quiz finished
  }
});
