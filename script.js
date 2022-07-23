// Creating a quiz class
class Quiz {
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

//question Class
class Question {
    constructor(text,choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

//Display questions
function displayQuestion() {
    if (Quiz.isEnded()) {
        showScores();
    } else {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    let choices = quiz.getQuestionIndex().choices;
    for (let i=0; i < choices.lenght; i++) {
        let choiceElement = document.getElementById("choice" + i);
        choiceElement.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
    }

    showProgress(); 
 }

};

//Guess answer
function guess(id,guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

// Progress of the quiz
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML = 
    'Question ${currentQuestionNumber} of ${quiz.Question.length}';

}

//show the scores
function showScores() {
    let quizEndHTML = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// The quiz questions =>
let questions =[
    new Question(
        "Which is not a various formatting tags in HTML?",
        ["<b>", "<em>", "<strong>", "<h1>"], "<h1>"
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
        ["<br>", "<h1>", "<div>","<span>" ], "<br>"
    )
];

let quiz = new quiz(questions);

//display the question
displayQuestion();
