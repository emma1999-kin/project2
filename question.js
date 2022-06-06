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
        b: "let",
        c: "txt",
        d: "echo",
        correct: "b",
    },
    {
        question: "foction qui donne la racine carré d'un numbre",
        a: "ls",
        b: ".js",
        c: "srt",
        d: "echo",
        correct: "c",
    },
    {
        question: "comment s'appelle faire une lecture en js ",
        a: "ls",
        b: ".js",
        c: "txt",
        d: "echo",
        correct: "d",
    },
    {
        question: "comment déclarer une constante en js",
        a: "const",
        b: "let",
        c: "var",
        d: "alert",
        correct: "a",
    },
    {
        question: "Pour minifier, on utilise ...",
        a: "tooljs",
        b: "jquery",
        c: "webpack",
        d: "publish",
        correct: "c",
    },
    {
        question: "Le mode strict se déclare avec ...",
        a: "use strict",
        b: "def strict",
        c: "mode strict",
        d: "import strict",
        correct: "a",
    },
    {
        question: "Pour attendre, on utilise la fonction...",
        a: "timer()",
        b: "setTimeout()",
        c: "delay()",
        d: "waitFor()",
        correct: "b",
    },
    {
        question: "la soumission d'un formulaire s'appelle ...",
        a: "submit",
        b: "return",
        c: "post",
        d: "reset",
        correct: "a",
    },
    {
        question: "Pour ajouter un élément HTML, on utilise....",
        a: "appendElement()",
        b: "createElement()",
        c: "addElement()",
        d: "newElement()",
        correct: "b",
    },
    {
        question: " la propriété window.location...",
        a: "search",
        b: "param",
        c: "get",
        d: "chearch",
        correct: "a",
    },
    {
        question: "L'évènement de chargement d'une page s'appelle...",
        a: "open",
        b: "load",
        c: "start",
        d: "run",
        correct: "b",
    },
    {
        question: "on peut utiliser la propriété CSS...pour animer",
        a: "effect",
        b: "animation",
        c: "passage",
        d: "transition",
        correct: "d",
    },
    {
        question: "gestionnaire d'évènements, on utilise la méthode...",
        a: "addEventHandler()",
        b: "newEventHandler()",
        c: "addEventListener()",
        d: "newEventListener()",
        correct: "c",
    },
    {
        question: "Le clic déclenche l'évènement...",
        a: "onclick",
        b: "buttonclick",
        c: "mouseclick",
        d: "onmouse",
        correct: "a",
    }
];

const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const quitbtn = document.getElementById('Quitter')
const form2_container = document.querySelector('#form_contain_question');
const timeCount = form2_container.querySelector('.timer_prog .time');
let currentQuiz = 0;
let score = 0;
let counter;
loadQuiz()


function loadQuiz() {
    questionCounter();
    startTimer(60);
    deselectAnswers()
    console.log(currentQuiz)
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function questionCounter() {
    const bottom_counter = form2_container.querySelector('.question_numero');
    let totalCount = '<p> Question  <p>' + ' ' + (currentQuiz + 1) + '</p>/<p>' + quizData.length + '</p></p>';
    bottom_counter.innerHTML = totalCount;
}

let timerId = null;


function move() {
    const element = document.getElementById("myBar");
    let width = 60;
    if (timerId) clearInterval(timerId);
    timerId = setInterval(frame, 1000);
    function frame() {
        if (width == 0) {
            clearInterval(timerId);
        } else {
            width--;
            element.style.width = (width * (10 / 6)) + '%';
        }
    }
}

function startTimer(time) {
    if (counter) clearInterval(counter);
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        questionCounter();
        if (time <= 0) {
            clearInterval(counter);
        }
    }

}

function getSelected() {
    let answer
    answerEls.forEach(answerE1 => {
        if (answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}


document.getElementById('Reset').addEventListener("click", (event) => {
    // Quand on clique sur quitter

    // Gérer la reponse courant

    const answer = getSelected()
    if (answer === quizData[currentQuiz].correct) {
        score = score + 1
    }


    const quizContainer = document.querySelector('.contain_questions');
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('mail');
    const hasWinTheQuiz = (score / quizData.length) >= 0.5;
    quizContainer.innerHTML = `
            <section class="container_score" >
            <div class="header_score">
               <strong><p id="name">${name}</p></strong> 
                <p id="email">${email}</p>
            </div>
            <div class="image_score">
            ${hasWinTheQuiz ?
            '<img src="succes.png" class="image_score">'
            : '<img src="echec.png" class="image_score">'
        }
               
            </div>
                <div class="score_position">
                <p> <strong>${score}/${quizData.length}</strong>  </p>
                </div>
            <div class="button_accueil">
            <button class ="accueil" onclick= "location.href = '/'"> Accueil</button>
            </div>
        </section>
            `



});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    move();
    const answer = getSelected()


    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score = score + 1
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()

            if (currentQuiz == quizData.length-1) {
                // Dernière question
                // Selectionne le boutton
                // btn.textContent = 'Terminer';
                submitBtn.textContent = 'Terminer';
                
            }

        } else {
            const quizContainer = document.querySelector('.contain_questions');
            let name = localStorage.getItem('name');
            let email = localStorage.getItem('mail');
            const hasWinTheQuiz = (score / quizData.length) >= 0.5;
            quizContainer.innerHTML = `
            <section class="container_score" >
            <div class="header_score">
               <strong><p id="name">${name}</p></strong> 
                <p id="email">${email}</p>
            </div>
            <div class="image_score">
            ${hasWinTheQuiz ?
                    '<img src="succes.png" class="image_score">'
                    : '<img src="echec.png" class="image_score">'
                }
               
            </div>
                <div class="score_position">
                <p> <strong>${score}/${quizData.length}</strong>  </p>
                </div>
            <div class="button_accueil">
            <button class ="accueil" onclick= "location.href = '/'"> Accueil</button>
            </div>
        </section>
            `
        }
    }
})
