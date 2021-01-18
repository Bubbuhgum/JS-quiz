var timerEl = document.querySelector(".timer");
var scoreBoard = document.querySelector("#score-board");
var highScores = document.querySelector("#high-scores");
var beginQuizButton = document.querySelector("#btn-start");
var saveScoreButton = document.querySelector("#btn-save-score");
var answers = document.querySelector("#answers");
var questionsContainer = document.querySelector("#questions-container");
var timeLeft;
var score;
var trackQuestions;
var currentCorrectAnswer;
var scoreResult = document.querySelector("#score");
var endOfQuiz = document.querySelector("#quiz-end");
var question = document.querySelector("#question");
var result = document.querySelector("#result");
var answer1 = document.querySelector("#a-btn-answer-1");
var answer2 = document.querySelector("#a-btn-answer-2");
var answer3 = document.querySelector("#a-btn-answer-3");
var answer4 = document.querySelector("#a-btn-answer-4");
answer1.addEventListener("click", checkAnswer); 
answer2.addEventListener("click", checkAnswer); 
answer3.addEventListener("click", checkAnswer); 
answer4.addEventListener("click", checkAnswer); 

var goBackButton = document.querySelector("#btn-go-back");
var clearHighScoresButton = document.querySelector("#btn-clear-high-scores");
goBackButton.addEventListener("click", goBack);
clearHighScoresButton.addEventListener("click", clearHighScores); 

beginQuizButton.addEventListener("click", startQuiz); 
saveScoreButton.addEventListener("click", saveScore); 

//Hide question and answers on first screen
document.getElementById("questions-container").style.display = 'none';

//create array for questions
const questions = [ 
    //Question 1
    { 
        question: 'Commonly used data types Do NOT include:', 
        answer: ['1. alerts', '2. strings', '3. Booleans', '4. numbers'],
        correctAnswer: 1
    }
    ,
    //Question 2
    { 
        question: 'The condition in an if/else statement is enclosed with:', 
        answer: [ '1. quotes ', '2. square brackets', '3. parentheses', '4. curly brackets'],
        correctAnswer: 3
    },
    //Question 3
    { 
        question: 'String values must be enclosed within ____ when being assigned to variables.', 
        answer: [ '1. commas', '2. curl brackets', '3. quotes', '4. parentheses'],
        correctAnswer: 3
    },
    //Question 4
    { 
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:', 
        answer: [ '1. console log', '2. JavaScript', '3. terminal/bash', '4. for loops'],
        correctAnswer: 1
    },
    //Question 5
    { 
        question: 'Arrays in JavaScript can be used to store ______.', 
        answer: [ '1. other arrays', '2. numbers', '3. strings', '4. All of the Above'],
        correctAnswer: 4
    }
]; 

//create variable to begin quiz and display questions in array
// timer starts at click of button, score will start at 0
function startQuiz() {
    timeLeft = 60;
    trackQuestions = 0;
    score = 0;
    scoreName = '';
    console.log('startQuiz');
    document.getElementById('intro-text').style.display = 'none';
    document.getElementById("score-name").value = '';
    questionsContainer.style.display = 'block';
    endOfQuiz.style.display = 'none';
    highScores.style.display = 'none';

    startTimer();

    askQuestion(questions[trackQuestions]);
}

//Loop through each question, end quix at last question
function askQuestion(q){
    console.log('timeout' + ' ' + trackQuestions + ' ' + questions.length)
    if(trackQuestions < questions.length - 1)
    {
        console.log('question count: ' + trackQuestions);
        answers.style.visibility = 'visible';

        currentCorrectAnswer = q.correctAnswer;
        result.innerHTML = '';

        question.innerHTML = q.question;
        answer1.innerHTML = q.answer[0];
        answer1.data = q.answer[0];
        answer2.innerHTML = q.answer[1];        
        answer3.innerHTML = q.answer[2];        
        answer4.innerHTML = q.answer[3];  

        console.log(q);
    }
    else
        endQuiz();
}

// check answers when clicked, display correct or incorrect
function checkAnswer() {
    var chosenAnswer = (this.getAttribute('data-answer-id'));

    console.log('checkAnswer');
    console.log(currentCorrectAnswer);
    console.log(chosenAnswer);

    answers.style.visibility = 'hidden';

    if(currentCorrectAnswer == chosenAnswer){
        console.log('correct');
        result.innerHTML = '<span style="color:green;">Correct!</span>';
        score += 10;
    }
    else{
        decreaseTime();
        console.log('incorrect');
        result.innerHTML = '<span style="color:red;">Incorrect!</span>';
        score -= 2;
    }

    trackQuestions++; 

    setTimeout(function(){
        askQuestion(questions[trackQuestions]);
    }, 1000);
}

//Save score at end of game and show Highscores
function saveScore(){
    console.log(document.getElementById("score-name").value);
    var node = document.createElement("p");
    var nodeValue = document.createTextNode(document.getElementById("score-name").value + ': ' + score);
    node.appendChild(nodeValue);
    scoreBoard.appendChild(node);
    endOfQuiz.style.display = 'none';
    highScores.style.display = 'block';
}

//decrease time by 10 point when answer is incorrect
function decreaseTime() {
    timeLeft -= 10;
}

//start timer when Begin Quiz button is clicked, end time after all questiosn are answered or time is at 0
function startTimer() {
    console.log('startTimer')
    var timer = setInterval(function()
    {
        timeLeft--;
        timerEl.innerHTML = timeLeft;
        if(timeLeft < 0 || trackQuestions == questions.length - 1)
        {
            clearInterval(timer);
            endQuiz(timer);
        }    
    },1000);
}

//Show Final Score
function endQuiz(timer){
    timerEl.innerHTML = 'DONE';
    questionsContainer.style.display = 'none';
    endOfQuiz.style.display = 'block';
    scoreResult.innerHTML = 'Your final score is: ' + score;
}

//Go back to start of quiz when it is over
function goBack(){
    startQuiz();
}

//clear high scores
function clearHighScores(){
    scoreBoard.innerHTML='';
}
