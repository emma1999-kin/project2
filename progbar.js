// const progressBar = document.getElementsByClassName('progress_container')[0]
// setInterval(()=>{
//     const computedStyle = getComputedStyle(progressBar)
//     const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
//     progressBar.style.setProperty('--width',width + .1)
// },20);
// function initBarcount(){
//     const divTimeLeft = document.getElementById('divtimeLet')
//     const progress_count_bar = document.getElementById('progress_count_bar')
//     const starTimes = setInterval(barCount,60);
//     function barCount(){
//         if(divTimeLeft.clientWidth < progress_count_bar.clientWidth){
//             divTimeLeft.style.width = divTimeLeft.clientWidth + 1 +"px";
//         }
//         else
//         {
//             divTimeLeft.style.width = progress_count_bar.clientWidth + "px";
//             clearInterval(starTimes);
//         }
//     }
// }
// function questionCounter() {
//     const bottom_counter = form2_container.getElementByClassName('question_numero')
//     let totalCount = '<span><p id="num_question">Question</p>' + currentQuiz + '<p>/</p>' + quizData.length + '</span>';
//     bottom_counter.innerHTML = totalCount;
// }