'use strict';
// console.log(document.querySelector(".message")) // first dom manipulation
// getting the text
// console.log(document.querySelector(".message").textContent);

// what is dom and dom manipulation
// structured representation of html documents
// change attributes and styles and manipulate them 
// dom is document object model 
// used to interact with HTML

// document.querySelector('.message').textContent = '🥳 correct number'
// document.querySelector('.number').textContent=13
// document.querySelector('.score').textContent=10

// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value=23;
// handling the click of a button

// event listeners


let secretNumber =Math.trunc(Math.random()*20)+1
let score=20;
let highScore=0;

document.querySelector('.check').addEventListener('click', function(){
    const guess=Number (document.querySelector('.guess').value);
    console.log(guess,typeof guess)

    if(!guess){
        document.querySelector('.message').textContent='⛔no number'
    }else if(guess==secretNumber){
        document.querySelector('.message').textContent='🎉 correct number'
        document.querySelector('.number').textContent=secretNumber
 
        document.querySelector('body').style.backgroundColor='#60b347'
        document.querySelector('.number').style.width='30rem'
        if(score>highScore){
            highScore=score 
            document.querySelector('.highscore').textContent=highScore;
        }
    }else if(guess>secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='📈 too high'
            score-=1
            document.querySelector('.score').textContent=score
        }else{
            document.querySelector('.message').textContent='💥 you lost the game'
            document.querySelector('.score').textContent=0

        }
    }else if(guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='📉 too low'
            score-=1
            document.querySelector('.score').textContent=score
        }else{
            document.querySelector('.message').textContent='💥 you lost the game'
            document.querySelector('.score').textContent=0
        }
    }
});
document.querySelector(".again").addEventListener('click', function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1
    document.querySelector('.message').textContent='Start guessing...'
    document.querySelector('.score').textContent=score
    document.querySelector('.number').textContent='?'
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
});
