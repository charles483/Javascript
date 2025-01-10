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
//handling the click of a button

// event listeners

document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
});