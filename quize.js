const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('results');
const submintButton = document.getElementById('submit');

function buildQuiz(){
    const output = [];

    myQuestion.forEach(
        (currentQuestion, questionNumber) => {
            const answer = [];

            for(letter in currentQuestion.answers){

                answers.push(
                    `<label>
                    </label>`
                )
            }
        }
    )
}

function showResult(){}

buildQuiz();

submintButton.addEventListener('click', showResults);

const myQuestion = [
    {
        question: "Who was founder of JavaScript?",
        answers:{
            a: "Some pizduk",
            b: "Sasha Bolvan",
            c: "Brendan Eich"
        },
        correctAnswer: "c"        
    },
    {
        question: "When Lviv was created ?",
        answers:{
            a: 1000,
            b: 1600,
            c: 1256
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript manager package ?",
        answers:{
            a: "Node.js",
            b: "npm",
            c: "npmScript"
        },
        correctAnswer: "b"
    }
];
