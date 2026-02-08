//! comments : extra information related to code, but not the part of the code...

//! Operators in javascript: used to perform some operation on data...

//* 1. ARITHMETIC OPERATORS [+, -, *, /, %(modulus), **(Exponentiation/power), ]

let a = 20;
let b = 12;
console.log("a + b : ", a + b);
console.log("a - b : ", a - b);
console.log("a * b : ", a * b);
console.log("a / b : ", a / b);
console.log("a % b : ",a % b); //? output = remainder (division)
console.log("a ** b : ", a ** b); //? a^b (power)

//* unary opr = (increment ++, decrement--), needs single oprand...

console.log("before post inc : ",a) //? 20
a++; //? a=a+1, 20
console.log("after post inc : ",a); //? (21)

console.log("before post dec : ", b) //? (12)
b--; //? b=b-1, 12
console.log("after post dec : ", b); //? (11)

//* post-increment(a++) increments in next line, and pre-increment(++a) increments first then prints incremented value
console.log("post-inc = ", a++); //? post-increment  memory = 22, print = (21)
console.log("post-inc val = ", a); //? 22

console.log("pre-inc = ", ++a); //? pre-increment (23)

//* post-decrement(b--) and pre-decrement(--b)
console.log("post-dec = ", b--); //? post-decrement  (11)
console.log("post-dec val = ", b); //? 10

console.log("pre-dec = ", --b); //? pre-decrement (9)

//! ASSIGNMENT OPERATORS : (=, +=, -=, *=, %=, **=) used to assign values to variables...

let var1 = 25;
let var2 = 15;

console.log("var1 = var1 + var2 = ", var1, "+", var2, " = ", (var1 += var2)); //? var1 = var1 + var2...  (25+15 = 40)
console.log("var1 = var1 - var2 = ",var1, "-", var2, " = ", (var1 -= var2)); //? var1 = var1 - var2... (40 - 15 = 25)
console.log("var1 = var1 * var2 = ",var1, "*", var2, " = ", (var1 *= var2)); //? var1 = var1 * var2... (25 * 15 = 375)
console.log("var1 = var1 % var2 = ",var1, "%", var2, " = ", (var1 %= var2)); //? var1 = var1 % var2... (375 % 15 = 0)
console.log("var1 = var1 ** var2 = ",var1, "**", var2, " = ", (var1 **= var2)); //? var1 = var1 ** var2... (0 ** 15 = 0)

//! COMPARISION OPERATORS: used to compare two values (==, ===, ?=, !===, >, >=, <, <=)

let num1 = 22;
let num2 = 25;
let num3 = "22";
//* ==
console.log("num1==num2 : ", num1 == num2); //? checks if num1(22) is equal to num2(25) (output= false)
console.log("num1==num3 : ", num1 == num3); //? checks if num1(22) is equal to num3("22"), but not the data-type (output= true)

//* !=
console.log("num1!=num2 : ", num1 != num2); //? checks if num1(22) is not equal to num2(25) (output= true)
console.log("num1!=num3 : ", num1 != num3); //? checks if num1(22) is not equal to num3("22"), but not the data-type (output= false)

//* ===
console.log("num1===num2 : ", num1 === num2); //? checks if num1(22) is equal to num2(25), including data-Type (output= false)
console.log("num1===num3 : ", num1 === num3); //? checks if num1(22) is equal to num3("22"), and also the data-type (output= false)

//* !==
console.log("num1!==num2 : ", num1 !== num2); //? checks if num1(22) is not equal to num2(25), including data-Type (output= true)
console.log("num1!==num3 : ", num1 !== num3); //? checks if num1(22) is not equal to num3("22"), and also the data-type (output= true)

//* >, >=
console.log("num1>num2", num1 > num2); //? checks if num1(22) is greater than num2(25) (output=false)
console.log("num1>=num2", num1 >= num2); //? checks if num1(22) is greater than or equal to num2(25) (output=false)
console.log("num1>=num3", num1 >= num3); //? checks if num1(22) is greater than or equal to num3("22"), excluding data-type (output=true)

//* <, <=
console.log("num1<num2", num1 < num2); //? checks if num1(22) is less than num2(25) (output=true)
console.log("num1<=num2", num1 <= num2); //? checks if num1(22) is less than or equal to num2(25) (output=true)
console.log("num1<=num3", num1 <= num3); //? checks if num1(22) is less than or equal to num3("22"), excluding data-type (output=true)

//! LOGICAL OPERATORS: checks logic between two equation (logical AND (&&), logical OR(||), logical NOT(!), calculates multiple expression and gives a final answer)

//* AND (&&)
let n1 = 45;
let n2 = 47;
let n3 = 45;
let n4 = 49;

let cond1 = n1 >= n3;
let cond2 = n1 <= n4;
let cond3 = n2 <= n4;
let cond4 = n3 != n1;

console.log("cond1 && cond2 = ", cond1 && cond2); //? if both/all conditions, i.e cond1 and cond2 are true, then the output will also be true
console.log("cond3 && cond4 = ", cond3 && cond4); //? if one condition, i.e cond3 or cond4 is false, then the output will also be false

//* OR (||)
let cond5 = n1 === n3;
let cond6 = n4 <= n1;
let cond7 = n2 >= n4;
let cond8 = n3 === n4;

console.log("cond5 || cond6 = ", cond5 || cond6); //? if one condition, i.e cond5 or cond6 is true, then the output will also be true
console.log("cond7 || cond8 = ", cond7 || cond8); //? if both/all conditions, i.e cond7 and cond8 are false, then the output will also be false

//* NOT (!) : if true

let cond9 = !(n1 === n3); //? if cond is true output will be false
let cond10 = !(n3 >= n2); //? if cond is false output will be true
let cond11 = !(n1 <= n3); //? if cond is true output will be false
let cond12 = !(n1 >= n4); //? if cond is false output will be true

console.log(cond9); //? false
console.log(cond10); //? true
console.log(cond11); //? false
console.log(cond12); //? true
