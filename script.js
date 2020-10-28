var start = document.getElementById("startButton");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var answer = document.getElementById("answer");
var score = document.getElementById("score");
var correctAnswer;

var questionIndex = 0;

var questions = [
    {question: '1. What is the correct syntax for targetting the following using JS: div class="hello"',
    choiceA: 'document.getElementById("hello")',
    choiceB: 'document.querySelector("#hello")',
    choiceC: 'document.querySelector(".hello")',
    choiceD: 'document.getElementById(".hello")'
    correctAnswer: 'C',
    },
    {question: '2. What is the correct syntax for targetting the following using JS: div class="hello"',
    choiceA: 'document.getElementById("hello")',
    choiceB: 'document.querySelector("#hello")',
    choiceC: 'document.querySelector(".hello")',
    choiceD: 'document.getElementById(".hello")'
    correctAnswer: 'C',
    },
    {question: '3. What is the correct syntax for targetting the following using JS: div class="hello"',
    choiceA: 'document.getElementById("hello")',
    choiceB: 'document.querySelector("#hello")',
    choiceC: 'document.querySelector(".hello")',
    choiceD: 'document.getElementById(".hello")'
    correctAnswer: 'C',
    },
    {question: '4. What is the correct syntax for targetting the following using JS: div class="hello"',
    choiceA: 'document.getElementById("hello")',
    choiceB: 'document.querySelector("#hello")',
    choiceC: 'document.querySelector(".hello")',
    choiceD: 'document.getElementById(".hello")'
    correctAnswer: 'C',
    },
    {question: '5. What is the correct syntax for targetting the following using JS: div class="hello"',
    choiceA: 'document.getElementById("hello")',
    choiceB: 'document.querySelector("#hello")',
    choiceC: 'document.querySelector(".hello")',
    choiceD: 'document.getElementById(".hello")'
    correctAnswer: 'C',
    }
]

function renderQuestion() {
    var currentQuestion = questions[questionIndex];
    question.textContent = currentQuestion.question;
    choiceA.textContent = currentQuestion.choiceA;
    choiceB.textContent = currentQuestion.choiceB;
    choiceC.textContent = currentQuestion.choiceC;
    choiceD.textContent = currentQuestion.choiceD;

    questionIndex++;
}

function correctAnswer() {
    var correctAnswer = document.createElement("p");
    var lineBreak = document.createElement("hr");
    document.body.children.
}

function incorrectAnswer() {

}

start.addEventListener("click", function() {
    var start = document.getElementById("intro");
    start.setAttribute = ("style", "display: none");

} )