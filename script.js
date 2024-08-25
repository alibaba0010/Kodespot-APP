const quizContainer = document.getElementsByClassName("quiz-container");
const questionElement = document.getElementsByClassName("question-header");
const answersElement = document.getElementById("answer-btns");
const submitButton = document.getElementById("next-btn");
// Sample quiz data
const quizData = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", correctAnswer: true },
      { text: "London", correctAnswer: false },
      { text: "Berlin", correctAnswer: false },
      { text: "Madrid", correctAnswer: false },
    ],
    // options: ["Paris", "London", "Berlin", "Madrid"],
    // correctAnswer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: [
      { text: "Earth", correctAnswer: false },
      { text: "Jupiter", correctAnswer: true },
      { text: "Saturn", correctAnswer: false },
      { text: "Mars", correctAnswer: false },
    ],
    // options: ["Earth", "Jupiter", "Saturn", "Mars"],
    // correctAnswer: "Jupiter",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      { text: "Pablo Picasso", correctAnswer: false },
      { text: "Vincent van Gogh", correctAnswer: false },
      { text: "Michelangelo", correctAnswer: false },
      { text: "Leonardo da Vinci", correctAnswer: true },
    ],
    // correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which ocean is the largest on Earth?",
    options: [
      { text: "Atlantic Ocean", correctAnswer: false },
      { text: "Indian Ocean", correctAnswer: false },
      { text: "Arctic Ocean", correctAnswer: false },
      { text: "Pacific Ocean", correctAnswer: true },
    ],
    // correctAnswer: "Pacific Ocean",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: [
      { text: "Ag", correctAnswer: false },
      { text: "Au", correctAnswer: true },
      { text: "Fe", correctAnswer: false },
      { text: "Cu", correctAnswer: false },
    ],
    // options: ["Au", "Ag", "Fe", "Cu"],
    // correctAnswer: "Au",
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    options: [
      { text: "William Shakespeare", correctAnswer: true },
      { text: "Jane Austen", correctAnswer: false },
      { text: "Charles Dickens", correctAnswer: false },
      { text: "Mark Twain", correctAnswer: false },
    ],
    // correctAnswer: "William Shakespeare",
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
  resetState();
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
    // answerButton.innerHTML = option;
    answerButton.innerHTML = option.text;
    // answerLi.textContent = option;
    answerButton.classList.add("answer-btn");
    answersElement.appendChild(answerButton);
    // answersElement.appendChild(answerLi);
    if (option.correctAnswer) {
      answerButton.dataset.correctAnswer = option.correctAnswer;
      // console.log(answerButton.dataset.correctAnswer);
    }
    answerButton.addEventListener("click", selectAnswer);
  });
}
function selectAnswer(event) {
  const selectedAnswer = event.target;
  // console.log("selectedAnswer", selectedAnswer);
  const correctAnswer = selectedAnswer.dataset.correctAnswer === "true"; // needed to add "true" cos if not true it returns undefined
  // console.log("Correct Answer: ", correctAnswer);
  if (correctAnswer) {
    score++;
    selectedAnswer.classList.add("correctAnswer");
    // console.log("Correct Answer: ", correctAnswer);
    // console.log("Score: ", score);
  } else {
    selectedAnswer.classList.add("wrongAnswer");
    // console.log("Wrong Answer: ", correctAnswer);
    // console.log("Score: ", score);
  }
  Array.from(answersElement.children).forEach((answer) => {
    if (answersElement.dataset.correctAnswer === "true") {
      answer.classList.add("correctAnswer");
    }
    answer.disabled = true;
  });
  submitButton.style.display = "block";
  // submitButton.style.display = "inline";
  // selectedAnswer.classList.add("correct");
  // setTimeout(() => {
  //   selectedAnswer.classList.remove("correct");
  // }, 1000);
  // console.log("Current Question Index: ", currentQuestionIndex);
  // console.log("Quiz Data Length: ", quizData.length);
  if (currentQuestionIndex < quizData.length) {
    submitButton.innerHTML = "Next";
  } else {
    submitButton.innerHTML = "Finish";
    // Display score
  }
}
function resetState() {
  submitButton.style.display = "none";
  // console.log("Answer Element: ", answersElement);
  while (answersElement.firstChild) {
    // console.log("First Child Element: ", answersElement.firstChild);
    answersElement.removeChild(answersElement.firstChild);
  }
}
startQuiz();

submitButton.addEventListener("click", () => {
  // Check answer and update score
  if (currentQuestionIndex < quizData.length) {
    console.log(" Quiz Data: ", currentQuestionIndex);
    nextQuestion();
  } else {
    // Quiz finished
    startQuiz();
  }
});

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();

  questionElement.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your final score is ${score} out of ${quizData.length}</p>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
  submitButton.innerHTML = "Start Quiz Again";
  submitButton.style.display = "block";
}
