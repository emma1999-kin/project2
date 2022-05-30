// document.querySelector('.btn').addEventListener('click', moveBar);
// const moveBar = () => {
//     const bar = document.getElementById('bar');
//     let width = 1;

//     const rate = () => {
//         if(width >= 100){
//             clearInterval(interval);
//         }
//          else{
//         width++;
//         bar.style.width = `${width}%`;
//         } 
//     };
//     setInterval(rate,30);
// };
const quizData = [
    {
        question: "comment s'appelle le createur de js?",
        a: "brendon eich",
        b: "steve jobs",
        c: "micheal jackson",
        d: "lary page",
        correct: "a",
    },
    {
        question: "comment declare t on une variable en js",
        a: "ls",
        b:"let",
        c:"txt",
        d:"echo",
        correct:"b",
    },
    {
        question: "foction qui donne la racine carré d'un numbre",
        a: "ls",
        b:".js",
        c:"srt",
        d:"echo",
        correct:"c",
    },
    {
        question: "comment s'appelle faire une lecture en js ",
        a: "ls",
        b:".js",
        c:"txt",
        d:"echo",
        correct:"d",
    },
    {
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },{
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },{
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },{
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },{
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },{
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },{
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },{
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },{
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },{
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },{
        question: "qui a developpé le web",
        a: "elon musk",
        b:"jorges",
        c:"stromae",
        d:"lil wayne",
        correct:"a",
    },
];
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let  currentQuiz = 0;
let score = 0;
loadQuiz()

function loadQuiz(){
    deselectAnswers()
    console.log(currentQuiz)
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerE1 => {
        if(answerE1.checked){
            answer = answerE1.id
        }
    })
    return answer
}
document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault();
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score = score+1
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz() 
        } else {
            const quizContainer = document.querySelector('.contain_questions');
            quizContainer.innerHTML = `
            <h2> vous avez obtenu ${score}/${quizData.length} questions correct </h2>

            <button class ="accueil" onclick= "location.href = '/'"> Accueil</button>
            `
        }
    }
})

