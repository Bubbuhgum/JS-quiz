var timerEl = document.querySelector(".timer");
var beginQuizButton = document.querySelector("#btn-start");

var wrongAnswer = document.querySelector("#btn-wrong");
var timeLeft = 60;
var isAnswered = false;

var trackQuestions = 0;
var currentCorrectAnswer;
var question = document.querySelector("#question");
var status = document.querySelector("#status");
var answer1 = document.querySelector("#a-btn-answer-1");
var answer2 = document.querySelector("#a-btn-answer-2");
var answer3 = document.querySelector("#a-btn-answer-3");
var answer4 = document.querySelector("#a-btn-answer-4");
answer1.addEventListener("click", checkAnswer); 
answer2.addEventListener("click", checkAnswer); 
answer3.addEventListener("click", checkAnswer); 
answer4.addEventListener("click", checkAnswer); 


// Add event listener to start button
beginQuizButton.addEventListener("click", startQuiz); 
wrongAnswer.addEventListener("click", decreaseTime); 

//Hide question and answers on first screen
document.getElementById("questions-container").style.display = 'none';

//create array for questions
const questions = [ 
    //Question 1
    { 
        question: 'What color is the sky?', 
        answer: ['1. blue', '2. green', '3. orange', '4. red'],
        correctAnswer: 1
    },
    //Question 2
    { 
        question: 'How many arms do you have?', 
        answer: [ '1. 5', '2. 6', '3. 2', '4. 1'],
        correctAnswer: 3
    },
    //Question 3
    { 
        question: 'Name a fruit that is red with a green rind.', 
        answer: [ '1. orange', '2. apple', '3. watermelon', '4. blueberry'],
        correctAnswer: 3
    },
    //Question 4
    { 
        question: 'In what state is the city Miami?', 
        answer: [ '1. Florida', '2. Georgia', '3. New York', '4. Virginia'],
        correctAnswer: 1
    },
    //Question 5
    { 
        question: 'Where is Waldo?', 
        answer: [ '1. Who knows', '2. who cares', '3. why', '4. All of the Above'],
        correctAnswer: 4
    }
]; 

//create variable to begin quiz and display questions in array
// timer starts at click of button, score will start at 0
function startQuiz() {
    console.log('showQuiz');
    document.getElementById('intro-text').style.display = 'none';
    document.getElementById('questions-container').style.display = 'block';

    //document.getElementById('click', 'questions-container');

    startTimer();

    /*askQuestion(questions[0]);
    askQuestion(questions[1]);
    askQuestion(questions[2]);
    askQuestion(questions[3]);
    askQuestion(questions[4]);*/


    /*for(x=0; x < questions.length; x++)
    {
        currentCorrectAnswer = questions[x].correctAnswer;
        status.innerHTML = '';

        question.innerHTML = questions[x].question;
        answer1.innerHTML = questions[x].answer;
        answer1.data = questions[x].answer[0];
        answer2.innerHTML = questions[x].answer[1];        
        answer3.innerHTML = questions[x].answer[2];        
        answer4.innerHTML = questions[x].answer[3];

        console.log(questions[x]);
    }*/

    
    /*questions.forEach(function(q, index){
        currentCorrectAnswer = q.correctAnswer;
        
            if(isAnswered == false){
                status.innerHTML = 'Select an answer';

                question.innerHTML = q.question;
                answer1.innerHTML = q.answer[0];
                answer1.data = q.answer[0];
                answer2.innerHTML = q.answer[1];        
                answer3.innerHTML = q.answer[2];        
                answer4.innerHTML = q.answer[3];  

                console.log(q);
            }
        
    });*/
    /*questions.forEach(function(q, index){
        while(isAnswered == false)
            askQuestion(q); 
    });*/

    askQuestion(questions[trackQuestions]);
}

function askQuestion(q){
    isAnswered = true;
    status.innerHTML = 'Select an answer';
    currentCorrectAnswer = q.correctAnswer;

    question.innerHTML = q.question;
    answer1.innerHTML = q.answer[0];
    answer1.data = q.answer[0];
    answer2.innerHTML = q.answer[1];        
    answer3.innerHTML = q.answer[2];        
    answer4.innerHTML = q.answer[3];  

    console.log(q);
}

function checkAnswer() {
    var chosenAnswer = (this.getAttribute('data-answer-id'));

    console.log('checkAnswer');
    console.log(currentCorrectAnswer);
    console.log(chosenAnswer);

    if(currentCorrectAnswer == chosenAnswer){
        //update status
        console.log('correct');
        status.innerHTML = 'Correct!'
    }
    else{
        decreaseTime();
        console.log('incorrect');
        //update status
        status.innerHTML = 'Incorrect!'
    }
    isAnswered = false;

    trackQuestions++; 
    askQuestion(questions[trackQuestions]);
}

function decreaseTime() {
    timeLeft -= 10;
}

function startTimer() {
    console.log('startTimer')
    var timer = setInterval(function()
    {
        timeLeft--;
        timerEl.innerHTML = timeLeft;
        if(timeLeft < 0 || trackQuestions >= questions.length)
        {
            clearInterval(timer);
            alert('You Lose');
            endQuiz();
        }    
    },1000);
}


function endQuiz(){
    timerEl.innerHTML = '0';
    
}


//console.log(showQuiz);

///////////////
// Initializers
// Get references to the start button element
//var startButton = document.querySelector("#btn-start");



//Loop over questions if loop

//Compare answers

//Increase score

//If answer wrong, time decreases by 10 secs

//Questions answered or timer reaches 0, end quiz

//Show Final Score

//Save highscore and initials to localStorage