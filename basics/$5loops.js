//! LOOPS:Loops are used to excute a piece of code again and again (repeatedly)

//* FOR LOOP: used for iteration looping, contains 3 stages, initialization, condition, updation
//todo: Print Hello World 30 Times;

for(let i = 0; i < 30; i++) {
    console.log("hello world");
}

//todo: ques: calculate sum of 1 to n

//* let n = prompt("Enter any number: ");
let n = 15;
let sum = 0;
for(let i = 1; i <= n; i++) {
    sum += i;
}

console.log("sum of 1 to", n, " is = ", sum);

//? While loop
//* syntax = while(condition){
//*           // statements               
//*           }

//todo: Create a table of number n

let j = 8;
let count = 1;
let result = 0;
while (count <= 20) {
    result = j * count;
    console.log(j, " * ", count, " : ", result);
    count++;
}

//? do while: condition is checked at last, therefore do while loop will run atleast once even if the condition is false

let i = 10;

do {
    console.log(i);
    i++;
}while(i <= 5);

//! for of loop: used to loop over strings and arrays: like "hello world", then using for of loop we can traverse on each character in a string or traverse over an element in an array

//*syntax = for(let val(variable) of strvar(string/array variable))

let myName = "kaneki ken";

for (let val of myName){
    console.log(val);
}

//! For in loop: used for objects, in for-in loop we can traverse/iterate over object keys

const studentdetails = {
    name : "kaneki",
    age : 20,
    cgpa : 7,
    isGraduated : true
}

for(let keys in studentdetails) {
    console.log(keys, studentdetails[keys]);
}

//? PRACTICE QUESTIONS: 
//todo: Q1 = print all even numbers from 1 to 100

for(let num = 1; num <= 100; num++) {
    if(num%2 === 0) {
        console.log(num);
    }
}

//todo: Q2: Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let randomVal = 67;
// usersGuess = prompt (enter your guess val)
while (true) { // usersGuess != randomVal
    let usersGuess = prompt("Enter you guess value: ");
    if(usersGuess == randomVal) {
        console.log ("congrats your guess is correct, you won!");
        break;
    }
    else {
        console.log ("Wrong guess, try again");
    }
}

