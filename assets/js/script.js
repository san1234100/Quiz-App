
//movie quizz

function moviequizSubmit(){
    let moviequizz=['Movie_q1','Movie_q2','Movie_q3','Movie_q4','Movie_q5','Movie_q6','Movie_q7','Movie_q8','Movie_q9','Movie_q10']
let answers=['vijay','asuran','gangster','ram','pizza','senapathyandchandrabose','taapseepannu','2.0','vijaysethupathi','cpremkumar'];
    let count=0;
for (let i = 0; i < moviequizz.length; i++) {
    // console.log(moviequizz[i],answers[i]);
    let yes= movieSelectedValue(moviequizz[i],answers[i]);
    // console.log(yes);
    if(yes){
        count++;
    }    
}
let count1=count+'';
localStorage.setItem('moviequiz',count1);
}

//music quiz
function musicquizSubmit(){
    let moviequizz=['Movie_q1','Movie_q2','Movie_q3','Movie_q4','Movie_q5','Movie_q6','Movie_q7','Movie_q8','Movie_q9','Movie_q10']
let answers=['arrahman','spbalasubrahmanyam','dhanush','arrahman','kschithra','senapathyandchandrabose','taapseepannu','2.0','vijaysethupathi','cpremkumar'];
    let count=0;
for (let i = 0; i < moviequizz.length; i++) {
    // console.log(moviequizz[i],answers[i]);
    let yes= movieSelectedValue(moviequizz[i],answers[i]);
    // console.log(yes);
    if(yes){
        count++;
    }    
}
let count1=count+'';
localStorage.setItem('musicquiz',count1);
}








function movieSelectedValue(val,ans) {
    // Get all radio buttons with the name "color"
    var radioButtons = document.getElementsByName(val);
//    console.log(radioButtons);
  
    // Loop through the radio buttons to find the selected one
    for (var i = 0; i < radioButtons.length; i++) {
        // console.log(radioButtons[i].value,ans);
      if (radioButtons[i].checked && radioButtons[i].value===ans) {
       return true;    
      }
    }
    return false;
  }

// let moviescore=document.getElementById('moviescore');
//   moviescore.addEventListener('click',()=>{
//     // let result = localStorage.getItem('moviequiz');
//     // Set the content of the HTML element with id 'score'
//     // let score = document.getElementById('score');
//     // score.innerHTML = `10/10`;
//     console.log('Hello')
//   })
function moviescore(){
    document.getElementById('score').innerHTML=`${localStorage.getItem('moviequiz')}/10`;
}
  
function musicscore(){
    document.getElementById('score').innerHTML=`${localStorage.getItem('musicquiz')}/10`;
}