//! conditional statements: to implement some condition in the code...

//? if statement: if conditon is true, then the code will be executed...

let username = "aakhmakhkout";

if (username === "aakhmakhkout") {
  console.log("You are a valid user");
}

let age = 20;

//! multiple if statements...
if (age >= 18) {
  console.log("You can drive");
}

if (age < 18) {
  console.log("You can't drive");
}

let mode = "light";
let color;

if (mode === "light") {
  color = "white";
}

if (mode === "dark") {
  color = "black";
}

console.log(color);

//? if else statement: if the "if" condition is true, then the code will be executed, if false, then the else part will be executed...

let fullName = "numaan";

if (fullName === "aakhmakhkout") {
  console.log("You name is valid");
} else {
  console.log("Invalid name");
}

//? else if condition: when there are multiple conditions to be checked then we can use else if statement like:
//todo: QUES: WAP that checks students marks and based on the marks you have to assign grades to each student

let marks = 99;

if (marks >= 90 && marks <=100) {
  console.log("Congrats you have done excellent job :GRADE A:")
}
else if (marks >= 80 && marks <=89){
  console.log("Well done, you have done great :GRADE B:")
}
else if (marks >= 70 && marks <=79) {
  console.log("Good, but need some improvement :GRADE C:")
}
else if (marks >= 50 && marks <=69) {
  console.log("Not good, need alot of improvement :GRADE D:")
}
else if(marks >= 0 && marks <= 49){
  console.log("Better luck next time, this time you have failed :grade FAIL:")
}
else {
  console.log("Invalid marks")
}

//? Ternary Operator: works on 3 operands , condition, true output, false output
//! syntax = condition ? true output : false output

let isAge = 20;

let result = isAge >= 18 ? "adult" : "not adult";
console.log (result);

//? Switch: expression or condition plus cases

 let month = "dec";

 switch (month) {
  case 'june':
  case 'july':
  case 'aug':
    console.log("summer");
    break;
  case 'sept':
  case 'oct' :
    console.log("autumn");
    break;
  case 'march':
  case 'april':
  case 'may':
    console.log("Monsoon");
    break;
  case 'nov':
  case 'dec':
  case 'jan':
  case 'feb':
    console.log("winter")
    break;
  default:
    console.log("invalid month");
 }

 //? Get user to input a number using prompt("enter a number: "). check if the number is a multiple of 5 or not.

let number = prompt("Enter your number: ");

if (number%5 == 0) {
  console.log("yes the number is multiple of 5");
}
else{
  console.log("this number is not multiple of 5")
}