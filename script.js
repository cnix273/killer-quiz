// Variables retrieved from HTML using id
var start = document.getElementById("start-button");
var counter = document.getElementById("timer");
var intro = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var answer = document.getElementById("answer");
var result = document.getElementById("result");
var outro = document.getElementById("outro");
var choices = document.querySelector("#answer-choices");
var finalScore = document.querySelector("#final-score");
var submitScore = document.getElementById("submit-score");
var highscorePage = document.getElementById("highscores");
var highscoreList = document.getElementById("highscore-list")
var link = document.getElementById("link");
var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");

// JS Variables
var questionIndex = 0;
var checkedAnswer;
var deductTime = false;
score = 0;
var seconds = 75;
var timeout;


// Array of quiz questions
var questions = [
    {question: '1. What does HTML stand for?',
    choiceA: 'high tech material letters',
    choiceB: 'hypertext markup language',
    choiceC: 'happy text markup language',
    choiceD: 'hello to my love',
    correctAnswer: 'b'
    },
    {question: '2. What is the name of the data type that has a value of true or false',
    choiceA: 'string',
    choiceB: 'array',
    choiceC: 'object',
    choiceD: 'boolean',
    correctAnswer: 'd'
    },
    {question: '3. What is the name of the following method for accessing values in an object: "var x = object.item;',
    choiceA: 'period notation',
    choiceB: 'object notation',
    choiceC: 'bracket notation',
    choiceD: 'dot notation',
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

// Render quiz questions
function renderQuestion() {
    for (i=0; i<= questions.length; i++) {
        question.textContent = questions[questionIndex].question;
        choiceA.value = questions[questionIndex].choiceA;
        choiceB.value = questions[questionIndex].choiceB;
        choiceC.value = questions[questionIndex].choiceC;
        choiceD.value = questions[questionIndex].choiceD;
    }
};


// Set timer
function time(seconds) {

    function countdown() {

        seconds--;

        counter.innerHTML = "Timer: " + String(seconds);
        
        if (seconds > 0) {
            timeout = setTimeout(countdown, 1000);
        }

        if (deductTime) {
            clearTimeout(timeout);
            seconds -= 10;
            counter.innerHTML = "Timer: " + String(seconds);
            timeout = setTimeout(countdown, 1000);
            deductTime = false;
        }

        if (seconds > 0 && questionIndex == questions.length || seconds < 1) {
            clearTimeout(timeout);
            gameOver();
        }

    }
    countdown();
}

// Quiz over
function gameOver() {
    quiz.style.display = "none";
    result.style.display = "block";
    outro.style.display = "block";

    finalScore.innerHTML = "Your final score is " + score + "/" + questions.length + "!";
}

// Declare highscore variables

 var highscore1 = document.getElementById("highscore1");
 var highscore2 = document.getElementById("highscore2");
 var highscore3 = document.getElementById("highscore3");
 var highscore4 = document.getElementById("highscore4");
 var highscore5 = document.getElementById("highscore5");

 // Add score and initials to highscore list
function highscore() {
    intro.style.display = "none";
    quiz.style.display = "none";
    outro.style.display = "none";
    result.style.display = "none";
    highscorePage.style.display = "block";
    counter.style.display = "none";
    link.style.display = "none";

    var initials1 = localStorage.getItem(initials1);
    var initials2 = localStorage.getItem(initials2);
    var initials3 = localStorage.getItem(initials3);
    var initials4 = localStorage.getItem(initials4);
    var initials5 = localStorage.getItem(initials5);
   
    var score1 = localStorage.getItem(score1);
    var score2 = localStorage.getItem(score2);
    var score3 = localStorage.getItem(score3);
    var score4 = localStorage.getItem(score4);
    var score5 = localStorage.getItem(score5);

    var initials = document.getElementById("initials").value;


    if (score1 == null) {
        score1 = score;
        initials1 = initials.toUpperCase();
        localStorage.setItem("score1", score1)
        localStorage.setItem("initials1", initials1)
        highscore1.innerText = "1. " + initials1 + " - " + score1;
        return;
    }
    if (score2 == null) {
        score2 = score;
        initials2 = initials.toUpperCase();
        localStorage.setItem("score2", score2)
        localStorage.setItem("initials2", initials2)
        highscore2.innerText = "2. " + initials2 + " - " + score2;
        return;
    }
    if (score3 == null) {
        score3 = score;
        initials3 = initials.toUpperCase();
        localStorage.setItem("score3", score3)
        localStorage.setItem("initials3", initials3)
        highscore3.innerText = "3. " + initials3 + " - " + score3;
        return;
    }
    if (score4 == null) {
        score4 = score;
        initials4 = initials.toUpperCase();
        localStorage.setItem("score4", score4)
        localStorage.setItem("initials4", initials4)
        highscore4.innerText = "4. " + initials4 + " - " + score4;
        return;
    }
    if (score5 == null) {
        score5 = score;
        initials5 = initials.toUpperCase();
        localStorage.setItem("score5", score5)
        localStorage.setItem("initials5", initials5)
        highscore5.innerText = "5. " + initials5 + " - " + score5;
        return;
    }

    if (score > score1) {
        score1 = score;
        initials1 = initials.toUpperCase();
        localStorage.setItem("score1", score1)
        localStorage.setItem("initials1", initials1)
        highscore1.innerText = "1. " + initials1 + " - " + score1;
        return;
    }
    if (score > score2) {
        score2 = score;
        initials2 = initials.toUpperCase();
        localStorage.setItem("score2", score2)
        localStorage.setItem("initials2", initials2)
        highscore2.innerText = "2. " + initials2 + " - " + score2;
        return;
    }
    if (score > score3) {
        score3 = score;
        initials3 = initials.toUpperCase();
        localStorage.setItem("score3", score3)
        localStorage.setItem("initials3", initials3)
        highscore3.innerText = "3. " + initials3 + " - " + score3;
        return;
    }
    if (score > score4) {
        score4 = score;
        initials4 = initials.toUpperCase();
        localStorage.setItem("score4", score4)
        localStorage.setItem("initials4", initials4)
        highscore4.innerText = "4. " + initials4 + " - " + score4;
        return;
    }
    if (score > score5) {
        score5 = score;
        initials5 = initials.toUpperCase();
        localStorage.setItem("score5", score5)
        localStorage.setItem("initials5", initials5)
        highscore5.innerText = "5. " + initials5 + " - " + score5;
        return;
    }

    if (score1 !== null && score < score1) {
        highscore1.innerText = "1. " + initials1 + " - " + score1;
        return;
    }
    if (score2 !== null && score < score2) {
        highscore2.innerText = "2. " + initials2 + " - " + score2;
        return;
    }
    if (score3 !== null && score < score3) {
        highscore3.innerText = "1=3. " + initials3 + " - " + score3;
        return;
    }
    if (score4 !== null && score < score4) {
        highscore4.innerText = "4. " + initials4 + " - " + score4;
        return;
    }
    if (score5 !== null && score < score5) {
        highscore5.innerText = "5. " + initials5 + " - " + score5;
        return;
    }
}

// Start quiz button
start.addEventListener("click", function start() {
    intro.style.display = "none";
    quiz.style.display = "block";
    result.style.display = "block";
    questionIndex = 0;
    score = 0;

    renderQuestion();
    time(seconds);
});

// Select answer button and check to see if it's correct
choices.addEventListener("click", function(event) {
    checkedAnswer = event.target.id

    if (checkedAnswer == questions[questionIndex].correctAnswer) {
        score++;
        answer.textContent = "Correct :)";
    }
    else if (checkedAnswer !== questions[questionIndex].correctAnswer) {
        answer.textContent = "Incorrect :(";
        deductTime = true;
    }

    questionIndex++

    if (questionIndex < questions.length) {
        renderQuestion();
    }

    else if (questionIndex = questions.length) {
        gameOver();
    }
});

// Submit initials button
submitScore.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.getElementById("initials").value;
    console.log(initials);
    if (initials == '') {
        alert("Please enter your initials so that we can save your score!!");
    }
    else {
        highscore();
    }
});

// View highscores button function
link.addEventListener("click", function() {
    intro.style.display = "none";
    quiz.style.display = "none";
    outro.style.display = "none";
    result.style.display = "none";
    highscorePage.style.display = "block";
    counter.style.display = "none";
    link.style.display = "none";
});

// Restart the quiz button function
backBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    highscorePage.style.display = "none";
    intro.style.display = "block";
    counter.style.display = "block";
    link.style.display = "block";
});

// Clear highscores button function
clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    highscore1.innerText = "";
    highscore2.innerText = "";
    highscore3.innerText = "";
    highscore4.innerText = "";
    highscore5.innerText = "";

    initials1 = localStorage.getItem(initials1);
    initials2 = localStorage.getItem(initials2);
    initials3 = localStorage.getItem(initials3);
    initials4 = localStorage.getItem(initials4);
    initials5 = localStorage.getItem(initials5);
   
    score1 = localStorage.getItem(score1);
    score2 = localStorage.getItem(score2);
    score3 = localStorage.getItem(score3);
    score4 = localStorage.getItem(score4);
    score5 = localStorage.getItem(score5);
});