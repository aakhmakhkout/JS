//! STRINGS: string is a sequence of charaters used to represent text, eg, name = "kaneki", address = "something" etc.

let firstName = prompt("enter your firstname: ");
let lastName = prompt("enter your lastname: ");
let userid = prompt("enter your user id: ")
let password = prompt("enter your password: ")

if ((firstName == "kaneki" && lastName == "ken" || userid == 882506) && password == "mainahibatawuga") {
    console.log("Login successfull, Welcome...");
}
else {
    console.log("invalid credentials!");
}

//? string length
 let str = "hello, how are you?"

 console.log(str.length)

 //? string indices: can access indivisual characters from string using index (position), which starts from 0 to (str.length - 1)

 let str2 = "catch me if you can";

 console.log(str2[7]);

 //? Template literals: A way to have embedded expressions in strings

let sentance = `this sentance is a template literal, it is a special string type, which works like normal string `; //* but we are using `` instead of " ", because:-

//? why do we use template litterals

//todo: normal string
let costOfPen = 20;
let costOfBook = 300;

console.log("the cost of pen is ", costOfPen, " and the cost of book is ", costOfBook);

//todo: template string: makes it oneliner and easier to write string and variables/ special stexpression togather

console.log(`the cost of pen is ${costOfPen} and the cost of book is ${costOfBook}`) //* To create strings by doing substitution of placeholders is called string interpolation

console.log(`Sum of ${1}, ${2} and ${3} is ${1+2+3} `);

//? Escape charaters: some characters are reserved or cannot be typed directly like "", newline, etc, to include them in a string we can use escape charaters (length is counted as 1)

//todo: escape charaters: \' (single quote), \" (double quote), \\ (backslash itself), \n (newline), \t (tab), 

let greetings = "he said, \"hello\"!";
console.log(greetings);

let fullName = "Kaneki\nken";
console.log(fullName);

let user_id = ("CBS\t8080\t7PBC");
console.log(user_id);

//? STRING METHODS: these are built in functions to manipulate a string  special st

//* str.toUppercase(): to turn string into uppercase

let username = "KaneKI_kEn";
// console.log(username.toUpperCase());

let passkey = 1234;

if (username.toUpperCase() === "KANEKI_KEN" && passkey === 1234) {
    console.log ("valid user");
}
else {
    console.log ("invalid user");
}

//* string methods don't change the original string data, instead make a updated copy of them,(strings are immutable in js) like:

let testingStr = "hello this is me in small characters";
testingStr.toUpperCase();
console.log(testingStr); //* this will remain unchanged

console.log(testingStr.toUpperCase()); //* this is a copy of updated string

//? str.toLowerCase() : turns all characters into lower case

console.log(username.toLowerCase());

//? str.trim(): removes all white spaces (starting and ending, not in between)

let myName = "      kaneki_ken     ";
console.log(myName.trim());

//? str.slice(start,end): return a part of a string

let usernamestr = "the username is xymoexyom";
console.log (usernamestr.slice(16, usernamestr.length));
console.log (usernamestr.slice(16));
console.log (usernamestr.slice(0));
console.log (usernamestr.slice());
console.log (usernamestr.slice(-5, -2)); 

//? str1.concat(str2): concatinates(str2) or joins string with str1 (or can be done with +)

let str1 = "hello my name is kaneki";
let strr2 = "\nand my age is 21";

console.log(str1.concat(strr2));
console.log(str1 + strr2);

//? str.replace(searchval, replace/newval): replaces the selected value with new value

let nickname = "hello my nickname xymoexyom, and my full name is xymoexyom";
console.log(nickname.replace("xymoexyom", "kane")) //* only replaces the first instance
console.log(nickname.replaceAll("xymoexyom", "kane"));

//? str.charAt (index): finds character at any perticular index, eg;

let strrr = "find me";
console.log (strrr.charAt(5));


//? Practice Question: Prompt the user to enter their ist and last name. Generate a username for them based on the input, start username with @, followed by their full name and ending with the fullname length

let istname = prompt("Enter your first name: ");
let lastname = prompt("Enter your lastname name: ");
let symbol = "@";
let ending = (istname + lastname).length
let username1 = (symbol+istname+lastname+ending)

console.log(`your username is ${username1.toLowerCase()}`);