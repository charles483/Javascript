'use strict';

// let hasDriversLicence=false;
// const passTest=true;

// if(passTest)hasDriversLicence=true;
// if(hasDriversLicence) console.log('I can drive')


// const interface='Audio';
// const private=234;
//       javascript functions 

// a function is a piece of code that can be reused over and over again 

function logger() {
    console.log("This is a simple function. ");
}
logger(); //invoking/ running or calling the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice=` juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice=fruitProcessor(5,0);
console.log(appleJuice)
const appleOrangeJuice=fruitProcessor(2,4)
console.log(appleOrangeJuice)