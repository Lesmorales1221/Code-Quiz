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