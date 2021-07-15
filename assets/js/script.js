

var question2El = $('#question2');
var question1El = $('#question1');
var startBtnEl = $('#startBtn');
var answerBtnEl = $('.answerBtn');

var questionList = [question1El, question2El];
var questionNum = 0;
var score = 0;

// start the quiz
startBtnEl.on('click', function () {
    var time = 20;
    score = 0;
    displayQuestion();
});

//Show question then 
function displayQuestion() {
    var currentQuestion = questionList[questionNum];
    currentQuestion.css({ 'display': 'block' });
};

//user has clicked an answer
answerBtnEl.on('click', function(){
    if($(this).hasClass('correct')){
        score++
    }
    else{
        score--
    }
    console.log(score);
    currentQuestion.css({ 'display': 'none' });
    questionNum++
    displayQuestion()
});


