var button = document.querySelector(".submitButton");
var next = document.getElementById("nextButton");

var intro = document.querySelector("#intro");
var q1 = document.getElementById("0");
var q2 = document.getElementById("1");
//var q3 = document.getElementById("question3");
//var q4 = document.getElementById("question4");
//var container = document.querySelector(".container");

var questionNumber = 0;

//Question 1



//Question 2











button.addEventListener("click", function() {
    var currentQuestion = document.getElementById(questionNumber);

    intro.classList.add("hide");
    q1.classList.add("hide");
    q2.classList.add("hide");
    
    currentQuestion.classList.remove("hide");
    questionNumber++;
} )