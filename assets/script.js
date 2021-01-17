var timerEl = document.querySelector(".timer");
var beginQuiz = document.querySelector(".btn-start");

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


//create variable to begin quiz and display questions in array
// timer starts at click of button, score will start at 0
function showQuiz() {
    document.getElementById('click', 'questions-container');
}

console.log(showQuiz);

//Loop over questions if loop

//Compare answers

//Increase score

//If answer wrong, time decreases by 10 secs

//Questions answered or timer reaches 0, end quiz

//Show Final Score

//Save highscore and initials to localStorage