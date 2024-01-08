const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Lion", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "San Marino", correct: false },
      { text: "Liechtenstein", correct: false },
    ],
  },
  {
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Pacific Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Atlantic Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
      { text: "Berlin", correct: false },
    ],
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtb = e.target;
  const isCorrect = selectedBtb.dataset.correct === "true";
  if (isCorrect) {
    selectedBtb.classList.add("correct");
    score++;
  } else {
    selectedBtb.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
     resetState();
     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
     answerButtons.innerHTML = "";
     nextButton.innerHTML = "Play Again";
     nextButton.style.display = "block";
}

function handledNextQuestion() {
  currentQuestionIndex++;
  resetState();
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handledNextQuestion();
  } else {
    startQuiz();
  }
});
startQuiz();
