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
var outro = document.getElementById("outro");
var score = document.getElementById("score");
var choices = document.querySelector("#answerChoices");

var questionIndex = 0;
score = 0;


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
    correctAnswer: 'd'
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
    correctAnswer: 'd'
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
    for (i=0; i<= questions.length; i++) {
        question.textContent = questions[questionIndex].question;
        choiceA.value = questions[questionIndex].choiceA;
        choiceB.value = questions[questionIndex].choiceB;
        choiceC.value = questions[questionIndex].choiceC;
        choiceD.value = questions[questionIndex].choiceD;
    }
};



var seconds = 60;

function time(minutes, seconds) {
    var seconds = 60;
    var mins = minutes

    function countdown() {
        var timeout;
        var counter = document.getElementById("timer");

        var current_minutes = mins - 1
        seconds--;

        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        
        if (seconds > 0) {
            timeout = setTimeout(countdown, 1000);
        }

        else {
            mins--;
            seconds = 60;
            timeout = setTimeout(countdown, 1000);
        }

        if (current_minutes < 0) {
            return;
        }

    }
    countdown();
}

function gameOver() {
    quiz.style.display = "none";
    outro.style.display = "block";
};

start.addEventListener("click", function() {
    intro.style.display = "none";
    quiz.style.display = "block";


    renderQuestion();
    time(2);
});

choices.addEventListener("click", function(event) {
    var checkedAnswer =  event.target.id
    if (checkedAnswer == questions[questionIndex].correctAnswer) {
        score++;
        answer.textContent = "Correct :)";
    }
    else if (checkedAnswer !== questions[questionIndex].correctAnswer) {
        answer.textContent = "Incorrect :(";
        seconds = seconds - 10;
    }
    questionIndex++
    if (questionIndex < questions.length) {
        renderQuestion();
    }
    else if (questionIndex = questions.length) {
        gameOver();
    }
    console.log(score);
});