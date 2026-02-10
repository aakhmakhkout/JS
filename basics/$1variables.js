console.log("Numaan nabi");

//? variables in javascript  (string, integer, float, null{no value}, undefined, boolean{true or false})

MyName = "nouman nabi";
console.log(MyName);

age = 20;
console.log(age);

course = "BCA";
console.log(course);

x = null;
console.log(x);

y = undefined;
console.log(y);

isLiked = false;
console.log(isLiked);

//! Variable Rules;

//todo: 1: Variable names are case sensitive; "a" & "A" is different

MyName = "numan nabi";
console.log(MyName);

myname = "aakh makh kout";
console.log(myname);

//todo: 2: only letters(a,b,c....), digits(0,1,2...), underscore (_) and $ is allowed in variable name (space is not allowed)

age = 20;
age2 = 19;
age_3 = 30;
age$ = 29;

//todo: 3: only a letter, underscore or dollor should be a first character in a variable name (not digits)

occupation = "student";
$occupation = "student";
_occupation = undefined;

//todo: 4: reserved words (fixed words) can't be used as variable names
// for example; console, break, case, catch, undefined (exception = case sensitive, Console, BREAK etc)

// console = " noumaan";
// console.log(console);

// undefined = "noumaan";
// console.log(undefined);

// cases in js (camel case, snake case, pascal case etc)

fullName = "numaan nabi"; // camel case (mostly used)
fullname = "aakh makh kout"; // small case
full_name = "numaan nabi"; // snake case
FullName = "aakhmakhkout"; // pascal case

//? defining variables (let, var, const)

//! var: variable can be re-declared and updated. A global scope Variable
//! let: variable cannot be re-declared but can be updated. A block scope variable
//! const: variable cannot be re-decalred and cannot be updated. A block scope variable

//* var
var fullname = "noumaan nabi";
var myAge = 24;
console.log(fullname);
console.log(myAge);

//* var re-declaration
var fullname = "aakhmakhkout";
var myAge = 20;
console.log(fullname);
console.log(myAge);

//* let declaration
let myName = "noumaan nabi";
let my_age = 18;
console.log(myName);
console.log(my_age);

//* let updation
myName = "numaan";
my_age = 20;
console.log(myName);
console.log(my_age);

//* const (defines constants)

const yourName = "mikasa";
console.log(yourName);

//* const yourName = "something", yourName = "something" {ERROR} (cannot be re-declared or updated)

const PI = 3.14;
console.log(PI);

//* const declaration must be intialized(value)

//* let a; NO ERROR
//* const b; ERROR
