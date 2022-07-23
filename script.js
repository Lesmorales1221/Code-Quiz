function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


// Displaying the question
function displayQuestion() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    buttononclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};


function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

function showScores() {
    let quizEndHTML = 
    `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions =[
    new Question(
        "Which is not a various formatting tags in HTML?",
        ["b", "em", "strong", "h1"], "h1"
    ),
    new Question(
        "What are the elements of the CSS Box Model?",
        ["margins, border, color, padding", "borders, sizing, margins, content", "margins, border, padding, content", "borders, content, font, margins"], "margins, borders, padding, content"
    ),
    new Question(
        "Which of these answers does NOT describe what an HTML element is",
        ["HTML Elements hold the content", "They specify the general content", "An example of an element is <a></a>", "The element is an individual component of the HTML web page or document that consists of a start tag, its attributes, an end tag, and everything in between. "], "An example of an element is <a></a>"
    ),
    new Question(
        "What are the uses of an embedded style sheet?"
        ["Embedded style sheet gives us the privilege to define styles in one place in an HTML document.", "Embedded style sheet is a link to images.", "Embedded style sheet is a rank that decides which style declaration has to be used to an element.", "Embedded style sheet is a property of css which allows you to display a smooth transformation between 2 or more specified colors"],"Embedded style sheet gives us the privilege to define styles in one place in an HTML document."
    ),
    new Question(
        "Which HTML tag does not comein a pair?"
        ["br", "h1", "div","span" ], "br"
    )
 ];
 


// create quiz
let quiz = new Quiz(questions);

// display quiz
displayQuestion();

// Add A CountDown for the Quiz
let time = 1;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown(){
    let quizTimer = setInterval(function(){
    if(quizTime <= 0) {
        clearInterval(quizTimer);
        showScores();
    } else {
        quizTime--;
        let sec = Math.floor(quizTime % 60);
        let min = Math.floor(quizTime / 60) % 60;
        counting.innerHTML = `TIME: ${min} : ${sec}`;   
    }
},1000);
}

startCountdown();