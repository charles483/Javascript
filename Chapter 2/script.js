"use strict";

// let hasDriversLicence=false;
// const passTest=true;

// if(passTest)hasDriversLicence=true;
// if(hasDriversLicence) console.log('I can drive')

// const interface='Audio';
// const private=234;
//       javascript functions

// a function is a piece of code that can be reused over and over again

// function logger() {
//     console.log("This is a simple function. ");
// }

// //invoking/ running or calling the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice=` Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice=fruitProcessor(5,0);
// console.log(appleJuice)

// const appleOrangeJuice=fruitProcessor(2,4)
// console.log(appleOrangeJuice)

//         function declaration vs expressions
// function declaration
// function calcAge1(birthYear){
//     const age=2037-birthYear;
//     return age;
// }

// const age1=calcAge1(1991);
// console.log(age1)

// // function expressions

// const calcAge2=function calcage2(birthYear){
//     const age=2037-birthYear
//     return age
// }

// const age2=calcAge2(1991);

// console.log(age1,age2)

//  arrow functions
// const calcAge3=birthYear=>2037-birthYear;

// const age3=calcAge3(1991);
// console.log(age3)

// const yearUntillRetirement=(birthYear, firstName)=>{
//     const age=2037-birthYear;
//     const retirement=65-age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearUntillRetirement(1991, 'charles'));
// console.log(yearUntillRetirement(1991, 'Bob'));

// functions calling other functions \
/* function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = ` Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}
console.log(fruitProcessor(2, 3)); */
