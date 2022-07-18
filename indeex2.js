const data = [
    {
        question: "emsal sale ..."
        , a: "1389 ast",
        b: "1390 ast",
        c: "1400 ast",
        d: "1401 ast",
        correct: "d",
    },
    {
        question: "farda yede:"
        , a: "ghorban ast",
        b: "fetr ast",
        c: "ghadir ast",
        d: "noroz ast",
        correct: "c",
    },
    {
        question: "html mokhafaf chist?"
        , a: "Hypertext Markup language",
        b: "Hypertext Markdown language",
        c: "Hyperloop machine language",
        d: "Hyperloop Markdown language",
        correct: "a",
    },
    {
        question: "css mokhafaf chist?"
        , a: "centran style sheets",
        b: "cas cading style shetts",
        c: "cascading style shetts",
        d: "cars suvs sheets",
        correct: "c",
    }
   
]
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")

const submitBtn = document.getElementById("submit")
let currentQuiz = 0;
let score = 0;
loadQuiz()
function loadQuiz() {
    deselectAnnswers()

    const currentQuizData = data[currentQuiz]
    questionEl.innerText = currentQuizData.question
    optionA.innerHTML = currentQuizData.a
    optionB.innerHTML = currentQuizData.b
    optionC.innerHTML = currentQuizData.c
    optionD.innerHTML = currentQuizData.d

}
function deselectAnnswers() {
    answerEls.forEach((answerEL) => (
       answerEL.checked=false
    ))
    

}
function getSelect() {
    let answer
    answerEls.forEach((answerEL) => {

        if (answerEL.checked) {
            answer = answerEL.id
        }
    })
    return answer

}
submitBtn.addEventListener('click', () => {
    const answer = getSelect()
    if (answer) {
        if (answer === data[currentQuiz].correct) {
            score++
            submitBtn.style.background = "green"
        }
        else if(answer !== data[currentQuiz].correct)
        {
            submitBtn.style.background = "red" 
        }
        currentQuiz++


        if (currentQuiz < data.length) {
            loadQuiz()
        }

        else {
            quiz.innerHTML = `
        <h2> emtiaze shoma ${score} az/${data.length} ast </h2>
        <button onclick="location.reload()">tekrare azmon</button>
        `
        }
    }

})