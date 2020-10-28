var start = document.getElementById("startButton");
var timer = document.getElementById("timer");
var intro = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var answer = document.getElementById("correct");
var score = document.getElementById("score");
var choices = document.querySelector("#answerChoices");

var questionIndex = 0;


var questions = [
    {question: '1. What is the correct syntax for targetting the following using JS: div class="hello"',
    choiceA: 'document.getElementById("hello")',
    choiceB: 'document.querySelector("#hello")',
    choiceC: 'document.querySelector(".hello")',
    choiceD: 'document.getElementById(".hello")',
    correctAnswer: 'c'
    },
    {question: '2. What is the correct syntax for targetting the following using JS: div class="hello"',
    choiceA: 'document.getElementById("hello")',
    choiceB: 'document.querySelector("#hello")',
    choiceC: 'document.querySelector(".hello")',
    choiceD: 'document.getElementById(".hello")',
    correctAnswer: 'c'
    },
    {question: '3. What is the correct syntax for targetting the following using JS: div class="hello"',
    choiceA: 'document.getElementById("hello")',
    choiceB: 'document.querySelector("#hello")',
    choiceC: 'document.querySelector(".hello")',
    choiceD: 'document.getElementById(".hello")',
    correctAnswer: 'c'
    },
    {question: '4. What is the correct syntax for targetting the following using JS: div class="hello"',
    choiceA: 'document.getElementById("hello")',
    choiceB: 'document.querySelector("#hello")',
    choiceC: 'document.querySelector(".hello")',
    choiceD: 'document.getElementById(".hello")',
    correctAnswer: 'c'
    },
    {question: '5. What is the correct syntax for targetting the following using JS: div class="hello"',
    choiceA: 'document.getElementById("hello")',
    choiceB: 'document.querySelector("#hello")',
    choiceC: 'document.querySelector(".hello")',
    choiceD: 'document.getElementById(".hello")',
    correctAnswer: 'c'
    }
];

function renderQuestion() {
        question.textContent = questions[questionIndex].question;
        choiceA.value = questions[questionIndex].choiceA;
        choiceB.value = questions[questionIndex].choiceB;
        choiceC.value = questions[questionIndex].choiceC;
        choiceD.value = questions[questionIndex].choiceD;

        questionIndex++
 
}

start.addEventListener("click", function() {
    intro.style.display = "none";
    quiz.style.display = "block";
    renderQuestion();
} )

choices.addEventListener("click", function() {
    renderQuestion();
    checkAnswer(answer);
})