var timerEl = document.querySelector(".timer");
var beginQuizButton = document.querySelector("#btn-start");
var wrongAnswer = document.querySelector("btn-wrong");
var timeLeft = 60;

//Add event listener to start button
beginQuizButton.addEventListener('click', startQuiz);
wrongAnswer.addEventListener('click', decreaseTime);

//Hide question and answers on first screen
var hideQuiz = document.getElementById("questions-container").style.display = 'none';

//create array for questions
const questions = [ 
    //Question 1
    { question: 'What color is the sky?', 
    answer: ['1. blue', '2. green', '3. orange', '4. red'],
    correctAnswer: '1'
    },
    //Question 2
    { question: 'How many arms do you have?', 
    answer: [ '1. 5', '2. 6', '3. 2', '4. 1'],
    correctAnswer: '3'
    },
    //Question 3
    { question: 'Name a fruit that is red with a green rind.', 
    answer: [ '1. orange', '2. apple', '3. watermelon', '4. blueberry'],
    correctAnswer: '3'
    },
    //Question 4
    { question: 'In what state is the city Miami?', 
    answer: [ '1. Florida', '2. Georgia', '3. New York', '4. Virginia'],
    correctAnswer: '1'
    },
    //Question 5
    { question: 'Where is Waldo?', 
    answer: [ '1. Who knows', '2. who cares', '3. why', '4. All of the Above'],
    correctAnswer: '4'
    }
]; 

// time decreases by 10 sec at click of wrong answer
function decreaseTime() {
    timeLeft -=10;
}

function startTimer() {
    var timer = setInterval(function() {
        timeLeft --;
        timerEl.innerHTML = timeLeft;
        if (timeLeft <0) {
            clearInterval(timer);
            alert('You Lose');
            endQuiz();
        }
    }, 1000);
}

//endQuiz function
function endQuiz() {
    timerEl.innerHTML = "0";
}

//create variable to begin quiz and display questions in array
// timer starts at click of button, score will start at 0
function startQuiz() {
    startTimer();
    document.getElementById('click', 'questions-container');
}

//Loop over questions if loop

//Compare answers

//Increase score

//If answer wrong, time decreases by 10 secs

//Questions answered or timer reaches 0, end quiz

//Show Final Score

//Save highscore and initials to localStorage