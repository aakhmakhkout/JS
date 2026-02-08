//* VARIABLES AND DATA-TYPES.

//! MEDIUM 

//? question 1:  Store your birth year in a variable, and calculate your age using the current year.

let bd = 2003;
let curYear= 2025;

let age = curYear - bd;
console.log(`your age is ${age}`);

//? Question 2: Convert the string `"123"` into a number and add `10`.

let strNum = "123";
let intnum = (parseInt(strNum) + 10);

console.log(intnum);

//? question 3 : Create an object `student` with properties `name`, `rollNo`, and `marks`. Print all values.

const student = {
    name : "kaneki",
    rollno : 19,
    marks : 70
}

console.log(student);

//! HARD

//? question 1:  Write a program that swaps values of two variables without using a third variable.

let var1 = 10;
let var2 = 20;

console.log(`before swap value of var1 is ${var1} and value of var2 is ${var2}`);
var2 = var2 - var1;
var1 = var1 + var2;

console.log(`the swapped values of var1 is ${var1} and var2 is ${var2}`);

//? question 2: Write a function that checks whether a given value is **primitive** or **non-primitive**.

let value = [12, 23, "hello"];
let stringval = "hello how are you";
let numval = 123;
let boolval = true;
let undefval = undefined;
console.log(typeof(value));
if(typeof(value) == typeof(stringval) || typeof(value) == typeof(numval) || typeof(value) == typeof(boolval) ||  typeof(value) == typeof(undefval)){
    console.log(`${value} is a Primitive value`);
}
else {
    console.log(`${value} is Non-Primitive value`);
    
}


//* OPERATORS

//! MEDIUM...

//? Question 1: Write a program that checks if a number is between 50 and 100 using logical operators.

let ournum = 49;

if (ournum >= 50 && ournum <=100) {
    console.log(`yes ${ournum} is between 50 to 100`);
}
else {
    console.log(`No ${ournum} is not between 50 - 100`);
}

//? Question 2: Create a small salary calculator that adds bonus (10%) using arithmetic + assignment operators.

let salary = 35000.00;
let bonus = (salary/10);
console.log(salary + bonus);

//! HARD...

//? Question 1: Simulate a login system using logical AND/OR operators with two variables (`username`, `password`).

let username = "thisisadummyusername";
let password = "notwhatyouthinkitis";

if(username == "thisisadummyusername" && password =="notwhatyouthinkitis" ) {
    console.log("login successfull!");
}
else {
    console.log("invalid credentials!");
}

//? Question 2: Write a program that uses the ternary operator to check whether a year is leap year or not.

let year = 2005;

let leapyear = (((year%4) && (year%400 || year%100)) == 0) ? "isLeapYear" : "isNotLeapYear";

console.log(leapyear);

//? question 3: Write a function that mimics the behavior of `a && b` without using logical operators (use if-else).

let a = 5;
let b = 10;

if (a == 5){
    if(b == 10) {
        console.log("BOTH A AND B ARE TRUE");
    }
    else {
        console.log("B IS FALSE");
    }
}
else {
    console.log("A IS FALSE");
}

//* CONDITIONAL STATEMENTS 
//! MEDIUM

//? Question 1: Write a program that checks whether a character is a vowel or consonant.

let char = "u";

if (char != "a" && char != "e" && char != "i" && char != "o" && char != "u") {
    console.log(`${char} is a consonent character`);
}
else {
    console.log(`${char} is a vowel character`)
}

//? question 2: Use `switch` to display the name of the day when given a number 1–7.

// let day = parseInt(prompt("enter the day number [1-7]: "));

// switch(day) {
//     case 1 : console.log(`${day} is Sunday`);
//     break;
//     case 2 : console.log(`${day} is Monday`);
//     break;
//     case 3 : console.log(`${day} is Tuesday`);
//     break;
//     case 4 : console.log(`${day} is Wednesday`);
//     break;
//     case 5 : console.log(`${day} is Thursday`);
//     break;
//     case 6 : console.log(`${day} is Friday`);
//     break;
//     case 7 : console.log(`${day} is Saturday`);
//     break;

//     default: console.log(`${day} is invalid day number`);

// }

//! HARD...

//? Question 1: Write a program that finds the largest of three numbers (if all are same then output should be all are same and if 2 are same then the 2 largest value should be output).

let num1 = 70, num2 = 30, num3 = 70;

if (num1 == num2 && num2 == num3) {
    console.log (`${num1}, ${num2}, ${num3} are equal`);
}
else if(num1 >= num2 && num1 > num3) {
    console.log(`${num1} is largest of all`);
}
else if(num2 >= num1 && num2 > num3) {
    console.log(`${num2} is largest of all`);
}
else {
    console.log(`${num3} is largest of all`);
}

//? Question 2: Implement a simple ATM withdrawal program (check balance before withdrawal).

// let accountno = 11780;
// let pin = 1209;
// let balance = 40000.00
// let tries = 3;
// let isLogin = false;
// let isWithdraw = 0;
// let withdraw_amount = 0;

// while (true) {
//     useraccno = parseInt(prompt("enter your account no: "));
//     userpin = parseInt(prompt(`enter your Pin: `));

//     if (useraccno != accountno) {
//     console.log("No account found!");
//     break;
//    }
//    else if(useraccno == accountno && userpin != pin) {
//         tries--;
//        while(tries > 0){
//         userpin = prompt(`invalid pin, please try again: ${tries} attempts left: `)
//         if(userpin == pin) {
//             isLogin = true;
//             break;
//         }
//         else {
//             tries--;
//         }
//     }
        
//         if(isLogin == false) {
//             console.log("you have entered wrong pin 3 times and your card has been blocked, please visit your nearest bank");
//             break;
//         }
// }

//    if ((useraccno == accountno && userpin == pin) || (useraccno == accountno && isLogin == true)){
//         console.log("Login successful!");
//         console.log(`your balance is ${balance}`);
//         isWithdraw = parseInt(prompt("Do you want to withdraw your money? 1 for yes and 0 for No"));

//         if(isWithdraw == 1) {
//             withdraw_amount = parseInt(prompt("Enter the amount you want to withdraw: "));

//             if(withdraw_amount <= balance) {
//                 console.log(`your withdrawal of ${withdraw_amount} is successful`);
//                 balance-= withdraw_amount;
//                 console.log(`your remaining balance is ${balance}`);
//                 break;
//             }
//             else {
//                 console.log("Insufficient balance!");
//                 break;
//             }
//         }
//         else {
//             console.log("Logging out...");
//             break;
//         }


//     }
// }

//? question 3: Write a program that categorizes temperature: Cold (<20), Warm (20–30), Hot (>30).

let temp = 40;

if (temp <20) {
    console.log("COLD")
}
else if (temp >= 20 && temp <= 30) {
    console.log("WARM")
}
else if (temp > 30) {
    console.log ("HOT");
}
else {
    console.log("ERROR");
}

//? Question 4:  Implement a mini calculator using `switch` (`+`, `-`, `*`, `/`).

// let number1 = 0, operator = "0", number2 = 0;
// let choice = 0;
// while (true) {
//     choice = parseInt(prompt("Enter your choice(1 for continue, 0 for exit): "));
//     if (choice == 0) {
//         break;
//     }
//     number1 = parseInt(prompt("Enter your first number: "));
//     operator = prompt("choose the operation you want to perform(+,-,*,/,%,**): ");
//     number2 = parseInt(prompt("Enter your 2nd number: "));

//     switch(operator) {
//         case "+" : console.log(`${number1} + ${number2} = ${number1+number2}`);
//         break;

//         case "-" : console.log(`${number1} - ${number2} = ${number1-number2}`);
//         break;

//         case "*" : console.log(`${number1} * ${number2} = ${number1*number2}`);
//         break;

//         case "/" : console.log(`${number1} / ${number2} = ${number1/number2}`);
//         break;

//         case "%" : console.log(`${number1} % ${number2} = ${number1%number2}`);
//         break;

//         case "**" : console.log(`${number1} ** ${number2} = ${number1**number2}`);
//         break;

//         default: console.log("Invalid operator!");
//     }
// }

//* LOOPS...

//! MEDIUM...

//? QUESTION 1: Write a program to find the factorial of a number.

let n = 5;
let fact = 1;

for(let i = 1; i <= n; i++) {
    fact*=i;
}

console.log(`factorial of ${n} is ${fact}`);

//? Question 2:  Use a loop to reverse a number (e.g., `123 → 321`).

let orgNumber = 123;
let leng = 3;
let revNumberpre = 0, revNumbernex = 0;

while (orgNumber > 0) {

    revNumberpre = orgNumber%10; 
    revNumbernex = revNumbernex * 10 + revNumberpre;
    orgNumber = parseInt(orgNumber/10);
}
console.log(revNumbernex);

//! HARD...

//? Question 1: Write a program that prints the Fibonacci sequence up to 15 terms.

let terms = 15;
let preVal = 0;
let nextVal = 1;
let container = 1;

while (terms != 1) {
    if (container == 1 && preVal == 0){
        console.log(1);
    }
    preVal = nextVal;
    nextVal = container;
    container = nextVal + preVal;
    console.log(nextVal);
    terms--;
}

//? Question 2: Create a nested loop that prints a triangle pattern of `*`.

for(let i = 0; i <= 5; i++) {
    let line = "";
    for(let k = 5; k > i; k--) {
        line = line + " ";
    }

    for(let j = 0; j <= i; j++) {
        line = line + "**";
    }
    
    
    console.log(line);
}

//? Question 3:  Write a program to check if a number is prime using a loop.

let ourNumber = 17;
isPrime = false;

if(ourNumber == 1) {
    console.log(`1 is not a prime number`);
}
for (let i = 2; i < ourNumber; i++) {
    if (ourNumber%i == 0 ) {
        isPrime = true;
        break;
    }
}

if(isPrime == true) {
    console.log(`${ourNumber} is a not prime number`);
}
else if(isPrime == false && ourNumber != 1){
    console.log(`${ourNumber} is a prime number`);
}

//? Question 4: Implement a program that checks Armstrong numbers (e.g., 153).

let userNumber = 153;
let tempNumber = userNumber;
let lastDigit = 0;
let sum = 0;
let noOfDigits = 0;

while (tempNumber > 0) {
    tempNumber = parseInt(tempNumber/10);
    noOfDigits++;
}
tempNumber = userNumber

while (tempNumber != 0) {
    lastDigit = tempNumber%10;
    tempNumber = parseInt(tempNumber/10);
    sum += (lastDigit**noOfDigits);
}

if(sum === userNumber) {
    console.log(`${userNumber} is an armstrong number`);
}
else {
    console.log(`${userNumber} is not an armstrong number`)
}

//* STRINGS

//! Medium
//? question 1: Write a program to count the number of vowels in a string.

let ourStr = "hello this is me, kaneki ken";
let vowelCount = 0;
for(let val of ourStr) {
    if(val == "a" || val == "e" || val == "i" || val == "o" || val == "u") {
        vowelCount++;
    }
    else {
        continue;
    }
}
console.log(vowelCount);

//? Question 2: Reverse a string without using `.reverse()`.

let ourStr2 = "hello, i am under the water, please help me";
let ourStr2len = ourStr2.length;
let revStr = "";

for(let i = (ourStr2len-1); i >= 0; i--) {
    revStr = revStr.concat(ourStr2[i]);
}
console.log(revStr);

//? Question 3: Check if a string is palindrome (`madam`, `racecar`).

let ourWord = "madam";
let ourRevWord = "";
let strlen = ourWord.length;

for(let i = (strlen - 1); i >= 0; i--) {
    ourRevWord = ourRevWord.concat(ourWord[i]);
}

if(ourWord === ourRevWord) {
    console.log(`${ourWord} is a palindrome word`);
}
else {
    console.log(`${ourWord} is not a palindrome word`);
}

//! HARD..

//? Question 1: Write a program to find the most frequent character in a string.

let ourStr3 = "lets count the most frequent characters";
let counter = 0;
let counterWord = "";
let ourChar = "";

for(let i = 0; i < (ourStr3.length); i++) {
    counterWord = ourStr3[i];
    let step = 0;
    for(let j = i+1; j < ourStr3.length; j++) {
        if(counterWord == ourStr3[j]) {
            step++;
        }
    }
    if (step > counter) {
        counter = step;
        ourChar = counterWord;
    }
}
console.log(`${ourStr3}\nFrequent character is ${ourChar} with ${counter+1} occurances`);

//? Question 2: Remove all spaces from a string without using `.replaceAll()`.

let ourStr4 = "t h i s is a nosp a ce t ex t s ow ewi llt ry t o rem ov eall t he sp ace s";
let ourNewString = "";

for(let ourValues of ourStr4) {
    if(ourValues === " ") {
        continue;
    }
    else {
        ourNewString = ourNewString.concat(ourValues);
    }
}
console.log(ourNewString);

//* ARRAYS

//! Medium...

//? Question 1: Create an array to store companies -> "bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"...

//todo: a) Remove the first company from the array

let companies = ["bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

for(let compNames of companies){
    console.log(compNames);
}

companies.shift()
console.log(companies);

//todo: b) Remove uber and add old in its place

companies.splice(2, 1, "Ola");
console.log(companies);

//todo: Add Amazon at the end...

companies.push("Amazon");
console.log(companies);

