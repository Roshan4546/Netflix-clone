const qustions = [
    {
        qustion: "Which is largest animal in the world ? ",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        qustion: "Which is largest desert in the world ? ",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Anarctica", correct: true },
        ]
    },
    {
        qustion: "Which is smallest country in the world ? ",
        answers: [
            { text: "vatican city", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false },
        ]
    },
    {
        qustion: "Which is largest continent ocean in the world ? ",
        answers: [
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "North Atlantic Ocean", correct: false },
        ]
    },
    {
        qustion: "Which is smallest country in the world ? ",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: false },
            { text: "Arctic", correct: false },
            { text: "Bhutan", correct: true },
        ]
    }
];


const qustionEle = document.getElementById("question");
const ansBtn = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");


let currentIdx = 0;
let score = 0;

function startQuiz() {
    currentIdx = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = qustions[currentIdx];
    let questionNo = currentIdx + 1;
    qustionEle.innerHTML = questionNo + ". " + currentQuestion.qustion;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns);
    });
}
function resetState() {
    nextBtn.style.display = "none";
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }
}
function selectAns(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    }
    else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}
function showScore() {
    resetState();
    qustionEle.innerHTML = `You scored ${score} out of ${qustions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}
function handleNextButton() {
    currentIdx++;
    if (currentIdx < qustions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
nextBtn.addEventListener("click", () => {
    if(currentIdx < qustions.length){
        handleNextButton();
    }
    else {
        startQuiz();
    }
})
startQuiz();