/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

                 // values and variables
console.log("charles");
console.log(23);

// storing them into variables for reusing them

let firstName='Churu';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// convections and ruled for naming variables 

// camel case   :  first word with lower case and the next word with upper case
let myFirstJob = 'Programmer';
console.log(myFirstJob);

// do not start with numbers or special characters except $ and _
// do not use reserved keywords
// use meaningful names for variables
// do not start with upper case letter
// for constants use all upper case letters 
let PI =3.1414;
// make the variable names as descriptive as possible 
let myFirstJobEver='programmer';
let currentJob='teacher';
*/
                 // data types 

// let javascriptIsFun=true;// boolean data type 
// console.log(javascriptIsFun)
// // checking the type of a valu using type of 

// console.log(typeof javascriptIsFun)
// console.log(typeof 'hello')
// console.log(typeof 1)

// javascriptIsFun='YES!'
// console.log(javascriptIsFun)
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year)
// console.log(typeof year)

// year =2013;
// console.log(year)
// console.log(typeof year)

// console.log(typeof null)
                        // let const  and var 

// let age =20;
// age=31;
// //  for const varables  
// // const birthYear=1991;
// // birthYear=1999 // cannot be reinitialized 

// // const job; // cannot be a undefined 
// var job='programmer';
// job='teacher';

                        // basic operators
//                         // math operators
// const now=2037;
// const ageCharles=now-2000;
// const ageSarah =now-2010;
// console.log(ageCharles,ageSarah);
// console.log(ageCharles*2, ageSarah/2);
// // 2**3 means 2 to the power of 3=2*2*2
// const firstName='charles';
// const lastName='churu';
// console.log(firstName+" "+lastName);

// //    assignment operators

// let sum=10 +5;
// console.log(sum);
// sum+=10 ;//sum=sum+10
// console.log(sum);
// sum*=4;
// console.log(sum);
// sum++
// console.log(sum);
// sum--;
// sum--;
// console.log(sum);

// //    comparison operators

// console.log(ageCharles>ageSarah);//>,<,>=,<=
// console.log(ageCharles<ageSarah);
// console.log(ageSarah>=18);

// const isFullAge=ageSarah>=18;
// console.log(isFullAge);
// console.log(now-1991>now-2002);

               // operator precidence
// const now=2037;
// const ageCharles=now-1991;
// const ageSarah=now-2018;

// console.log(now-1991>now-2018);  // from mdn docs get the operator precidence table and get the operators with high precedence and thos with lower precidence 

// console.log(25-10-5);
// let x,y;
// x=y=25-10-5;
// console.log(x,y);
// const averageAge= (ageCharles+ageSarah)/2
// console.log(ageCharles,ageSarah)
// console.log(averageAge)
            //  coding challenge
// BMI COMPARISON CHALLENGE
// let johnHeight=1.95;
// let markHeight=1.69;
// let massJohn=92;
// let massMark=78;

// const BMIMark=massMark/markHeight**2;
// const BMIJohn=massJohn/johnHeight**2;

// let markHigherBMI=BMIMark>BMIJohn
// console.log(markHigherBMI)
// console.log(`mark has a BMI of ${BMIMark} which is higher than john's which is ${BMIJohn}`)
                // string tempelate literals
// const firstName= 'charles';
// const job='programmer'
// const birthYear=1991;
// const now=2037;


// const charles= " I'M " + firstName + ',a '+ (now-birthYear)  +" Years old " + job;
// console.log(charles);

// console.log(`I'm ${firstName}, a ${now-birthYear} years old ${job}! `);
// console.log("a string with \n multiple lines \n here and here");
// console.log(`A string with
// multiple lines here
// and there  `);

//                         // taking decisions with a program 
// const age=15;
// const isOldEnough=age>=18;

// if (isOldEnough){
//     console.log("You are old enough to drive 🚗")
// } else{
//     console.log(`you have to wait ${18-age} years to drive 🚗`)
// }

            //  coding challenge 2

// BMI COMPARISON CHALLENGE   enhanced using an if else statement
// let johnHeight=1.95;
// let markHeight=1.69;
// let massJohn=92;
// let massMark=78;

// const BMIMark=massMark/markHeight**2;
// const BMIJohn=massJohn/johnHeight**2;

// let markHigherBMI=BMIMark>BMIJohn
// console.log(markHigherBMI) 

// if (BMIJohn>BMIMark){
//     console.log(`John's BMI ${BMIJohn} Is higher than Mark's BMI ${BMIMark}`)
// } else{
//     console.log(`Mark's BMI ${BMIMark} Is higher than John's BMI ${BMIJohn}`)
// }

                    // type conversion and coercion
// 1. // type conversion

// convert between different data types directly  manually
// coersion javascript automatically converts the data types for us
// const inputYear='1991';
// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear)+18);

// console.log(Number('charles'));  // the operation will yield NaN which means not a number
// console.log(typeof NaN); // NaN is a number type

// console.log(String(23),23)

// // 2. // type coercion
// console.log("I'm  " + 23 + " years old");
// console.log('23'-'10'-3);
// console.log("23"*"2");

// let n='1'+1;
// n=n-1;
// console.log(n);

//                truethy and falsy values 
// falsy values : 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean({}));
// console.log(Boolean(undefined));

//           equality operators 
// const age=18;
// if (age===18) console.log("you just became an adult(strict)");

//                        coding challenge 3 

let dolphinScore1=96;
let dolphinScore2=108;
let dolphinScore3=89;
let koalasScore1=88;
let koalasScore2=91;
let koalasScore3=110;

const dolphinAverage=(dolphinScore1+dolphinScore2+dolphinScore3)/3
const koalasAverage=(koalasScore1+koalasScore2+koalasScore3)/3

if (dolphinAverage>koalasAverage){
    console.log(`dolphin's average ${dolphinAverage} is higher than koalas' average ${koalasAverage}`)
}
else{
    console.log(`koalas's average ${koalasAverage} is higher than dolphins' average ${dolphinAverage}`)
    
}