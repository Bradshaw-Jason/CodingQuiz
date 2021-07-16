var highscoreEl = $('#highscores');
var introEl = $('.intro');
var question2El = $('#question2');
var question1El = $('#question1');
var startBtnEl = $('#startBtn');
var answerBtnEl = $('.answerBtn');
var timerEl = $('#timer');

var questionList = [question1El, question2El];
var questionNum = 0;
var score = 0;
var currentQuestion;
var timerCount;
var timer;
var quizComleted;
var savedInitials="no saved initals";
var csavedScore="no saved score";

// start the quiz
startBtnEl.on('click', function () {
    score = 0;
    timerCount = 10
    startTimer()
    introEl.css({ 'display': 'none' });
    displayQuestion();
});

//Show question then 
function displayQuestion() {
    currentQuestion = questionList[questionNum];
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


//timer function
function startTimer() {
    timer = setInterval(function() {
    timerCount--;
    timerEl.text("Time remaining: "+timerCount);

    if(timerCount===0){
        clearInterval(timer);
        quizOver();
    }


    }, 1000);
  };

  function quizOver(){
    currentQuestion.css({ 'display': 'none' });
    introEl.css({ 'display': 'block' });
    timerEl.text("Time remaining: 10");
    console.log("game over")

    var initials=prompt("Enter your initials to save your highscore");
    if(initials == null || initials == ""){
        return;
    }
    else{
        localStorage.setItem('savedInitials', initials);
        localStorage.setItem('savedScore',score);
    }
        
  }
  
  highscoreEl.on('click', function(){
      alert('HIGHSCORE!\nInitials: '+localStorage.getItem('savedInitials')+'\nScore: '+localStorage.getItem('savedScore'));
  });