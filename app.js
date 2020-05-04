function click(){
    document.getElementById("start-btn").onclick = function() {countdown()};
    populate();
}

function populate() {
    if(quiz.isEnded()) {
        document.getElementById("quiz-area").classList.add('hide');
        document.getElementById("display-left").classList.add('hide');
        document.getElementById("restart-area").classList.remove('hide');
        document.getElementById("restart-btn").classList.remove('hide');
        document.getElementById("controls-01").classList.remove('hide');
        document.getElementById("name-confirm").classList.remove('hide');
        document.getElementById("popup-name").classList.remove('hide');
        document.getElementById("enter-btn").classList.remove('hide');
        showScores();

    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        var score = document.getElementById("show");
        score.innerHTML = quiz.score;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);

        }

        showProgress();
     }
     
};

//Choose answer
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

//Show the process of making a question
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

//Show score
function showScores() {
    var gameOverHTML = "<h1>Your score: " + quiz.score + "</h1>";
    var element = document.getElementById("scores");
    element.innerHTML = gameOverHTML;
};

//Set up time
function countdown(){
    var count = 59;
    var interval = setInterval(function(){
        document.getElementById('timer').innerHTML=count;
        count--;
        if(count === 0){
            // document.getElementById("start-area").classList.add('hide');
            document.getElementById("quiz-area").classList.add('hide');
            document.getElementById("display-left").classList.add('hide');
            document.getElementById("restart-area").classList.remove('hide');
            document.getElementById("restart-btn").classList.remove('hide');
            document.getElementById("controls-01").classList.remove('hide');
            document.getElementById("name-confirm").classList.remove('hide');
            document.getElementById("popup-name").classList.remove('hide');
            document.getElementById("enter-btn").classList.remove('hide');
            showScores();
        }    
    }, 1000);
}
// create questions
var questions = [
    new Question("Shi", ["し", "に","き", "い"], "し"),
    new Question("Na", ["く", "て", "な", "ね"], "な"),
    new Question("Wa", ["わ", "は","た", "ち"], "わ"),
    new Question("No", ["と", "の", "か", "つ"], "の"),
    new Question("Mu", ["ぬ", "と", "さ", "む"], "む"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
click();

