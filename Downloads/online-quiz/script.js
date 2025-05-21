let quizData = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerId;

async function loadQuestions() {
  const res = await fetch("http://localhost:3000/api/questions");
  quizData = await res.json();
  showQuestion();
}

function showQuestion() {
  clearInterval(timerId);
  timeLeft = 30;

  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  const options = [q.option1, q.option2, q.option3, q.option4];

  options.forEach(option => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = option;

    const label = document.createElement("label");
    label.innerText = option;
    label.classList.add("option");

    const br = document.createElement("br");

    optionsDiv.appendChild(radio);
    optionsDiv.appendChild(label);
    optionsDiv.appendChild(br);
  });

  document.getElementById("timer").innerText = timeLeft;

  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;
    if (timeLeft === 0) {
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  clearInterval(timerId);

  const selected = document.querySelector('input[name="option"]:checked');
  if (selected && selected.value === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML =
      `<h2>Quiz Completed!</h2><p>Your score: ${score}/${quizData.length}</p>`;
  }
}

window.onload = function () {
  loadQuestions();
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
};
