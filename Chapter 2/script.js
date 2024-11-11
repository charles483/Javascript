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

// reviewing functions
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstNmae) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstNmae} retires after ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstNmae} has already retired`);
//     return -1;
//   }
//   //   return `${firstNmae} retires after ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "charles"));
// console.log(yearsUntilRetirement(1950, "churu"));

// CODING CHALLENGE 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const avgDolhins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// const checkWiner = function (avgDolhins, avgKoalas) {
//   if (avgDolhins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     console.log(`Dolphins win (${avgKoalas} vs ${avgDolhins})`);
//   } else {
//     console.log("No team wins");
//   }
// };
// checkWiner(avgDolhins, avgKoalas);

//          introduction to arrays
// array is like a big contatainer in which we can store our data
// it is a type of a data structure

// there are varous methods to create arrays
// 1. using the square brackets the literall syntax
// const friends = ["Charles", "Churu", "Wambui"];
// console.log(friends);

// // 2. using the array method
// const y = new Array(1991, 1992, 2008, 2020);
// console.log(y);

// console.log(friends[0]);
// console.log[friends[2]];

// console.log(friends.length);
// console.log(friends[friends.length - 2]);

// // adding elements and rmeoving in an array

// friends[2] = "James";
// console.log(friends);
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.unshift();
// console.log(friends);
// console.log(friends.indexOf("Charles"));

// console.log(friends.indexOf("Bob"));

// console.log(friends.includes("Charles"));
// friends.push(23);
// console.log(friends.includes("23")); // will produce false

// if (friends.includes("Charles")) {
//   console.log("you have a a friend called Charles");
// }

// friends = ["bob", "jj"];  ilegal

// can hold different values at the same time
// const firstName = "charles";
// const charles = [firstName, "Churu", 2037 - 1991, "programmer", friends];
// console.log(charles);
// console.log(charles.length);

// // array exercise
// const calcAge2 = function calcage2(birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[1]);
// const age3 = calcAge2(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge2(years[0]),
//   calcAge2(years[1]),
//   calcAge2(years[years.length - 1]),
// ];

//     CODING CHALLENGE 2
// here we are concentrating on arrays tobuild a tip calculator
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
//   // return tip;
// };
// const bill = 275;
// const tip = calcTip(bill);
// const total = tip + bill;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`,
// );

// // now let us use arrays to calculate the tips
// const bills = [125, 555, 44];
// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];
// const totals = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[bills.length - 1] + tips[tips.length - 1],
// ];
// console.log(bills);
// console.log(tips);
// console.log(totals);

//          introduction to objects
// objects are another fundamental concept in javascript
// objects are like arrays but with key value pairs
// objects are used to group together different variables and functions
// recap of arrays
// const charlesArray = [
//   "charles",
//   "churu ",
//   2037 - 1991,
//   "programmer",
//   ["charles", "churu", "wambui"],
// ];
// console.log(charlesArray);

// const charles = {
//   firstName: "Charles",
//   lastName: "Churu",
//   job: "Programmer",
//   age: 2037 - 1991,
//   frienddsList: ["charles", "churu", "wambui"],
// };
// console.log(charles);

// ertrieving data from an object

const charles = {
  firstName: "Charles",
  lastName: "Churu",
  job: "Programmer",
  age: 2037 - 1991,
  frienddsList: ["charles", "churu", "wambui"],
};
console.log(charles);
console.log(charles.lastName);
console.log(charles["lastName"]);
