

const startButton = document.getElementById('startBtn');
const endButton = document.getElementById('endBtn');
const quiz = document.getElementById('quiz');

startButton.addEventListener('click', beginQuiz)

function beginQuiz() {
  startButton.classList.add('hidden');
  quiz.classList.remove('hidden');
  endButton.classList.remove('hidden');
}

function checkAnswers(){
var q1=document.quiz.q1.value;
var q2=document.quiz.q2.value;
var q3=document.quiz.q3.value;
var q4=document.quiz.q4.value;
var q5=document.quiz.q5.value;

var correctAnswers=0;
  if (q1 === "Blue"){
    correctAnswers++;
  }

  if (q2 === "Antarctic Blue Whale"){
    correctAnswers++;
  }
  if (q3 === "50"){
    correctAnswers++;
  }

  if (q4 === "Death Valley"){
    correctAnswers++;
  }

  if (q5 === "50"){
    correctAnswers++;
  }

document.getElementById("results").style.visibility="visible";
document.getElementById("correctAnswers").innerHTML = "Congratulations, you got " + correctAnswers + " correct";
}