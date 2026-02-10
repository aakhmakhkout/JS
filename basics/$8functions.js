//* Functions: Block of code that performs a specific task, can be invoked(call) whenever needed....

//? examples, (to invoke/call a function we use ())
console.log("hello world"); //?  A predefined function
console.log("abc".toUpperCase()); //? Also a predefined function

let list = [1,2,3];
list.push(4); //? Predefined funciton

console.log(list);

//! FUNCTION SYNTAX (user defined functions)

//* Funciton Definition. : Where we write statements and main function code, eg

function printhelloworld() {
    console.log("Hello world");
}

//* Function call : when we want to use the function, we can invoke/call it.

printhelloworld();

//? Parameters and Arguments: parameter = which is used in function definition, and arguments = which are used in function call. these can be used when the output is dependent on specific input, eg addition of a and b:

function sumOfTwoNumbers(a, b) { //? here a and b are parameters
    //todo: a and b works as local variables of the function and doesn't work outside the function, because their scope is limited(block) to the function
    let sum = a+b;
    return sum; //? return is used when we don't want to use console or print the value in the function, instead we can return the value and can be used during function call, and also when return statement is executed,then the function breaks and exits, the statements written after return doesn't work.
}

let num1 = 10;
let num2 = 20;

console.log(sumOfTwoNumbers(num1, num2)); //? num1 and num2 are arguments
console.log(sumOfTwoNumbers(4,10)); //? we can also directly pass the values

//* Arrow Functions : Compact way of writing a function. And it is used for small tasks
//* syntax : 
//*         (parameter1, parameter2, ....) => {
//*             //do some work
//*         }


const Multiplytable = (number) => { //? Multiplytable is a variable here, which is storing the function definition, hence it becomes the function itself
  for(let i = 0; i <= 20; i++) {
    console.log(`${number} * ${i} : `, number * i);
  }
}

let num = 2;
Multiplytable(num);
console.log(Multiplytable);

//!: PRACTICE QUESTIONS

//todo: Create a function using the "function" keyoword that takes a string as an argument and returns the number of vowels in the string...

function vowels(ourstring) {
    let count = 0;
     console.log(ourstring.toLowerCase());
    
    for(values of ourstring.toLowerCase()) {
        if(values === 'a' || values === 'e' || values === 'i' || values === 'o' || values === 'u') {
            count+=1;
        }
    }
    return count;
}

let string = "HellO my nAme is KanEki";

console.log("The number of vowels present in the string are : ", vowels(string));


//todo: Create an arrow function to perform the same task.

const arrowVowels = (ourstring2) => {
    let count = 0;
    console.log(ourstring2.toLowerCase());

    for(values of ourstring2.toLowerCase()) {
        if(values === 'a' || values === 'e' || values === 'i' || values === 'o' || values === 'u') {
            count+=1;
        }
    }
    return count;
}

let string2 = "Hello World, Eat COde SleEp RepEat";

console.log("The number of arrowvowels present in the string are : ", arrowVowels(string2));


//! forEach loop: method = associated with any object (eg "abc".uppercase()). only used in arrays
//! foreach = function, method when associated with arrays
//! arr.forEach(callbackfunction)
//! callbackfunction = here, it is a function to execute for each element in the array, A callback is a function passed as an argument to another function.
//? in javascript functions can be passed as parameterers, and we can also return any value in functions

function add2Nums(a,b) {
    let sum = a+b;
    return sum;
}

console.log(add2Nums(20,19));


//!for each example.

let ourarray = [1,2,3,4,5,6,7,8];
let sumofArrayValues = 0;

ourarray.forEach(function sumOfArr(values) {
    sumofArrayValues += values;
    return sumofArrayValues;
});

console.log(`The sum of array values "${ourarray}" is ${sumofArrayValues}`);

//? using arrow function

let mulOfArrVal = 1;

ourarray.forEach((values) => {
    mulOfArrVal *= values;
    return mulOfArrVal;
});

console.log(`The multiplication of the array values "${ourarray}" is ${mulOfArrVal}`);

//! forEach elements = values/items, index, array

let printarr = 1;

ourarray.forEach((values, idx, ourarray) => {
    console.log(values, idx, ourarray);
    });

//? Higher Order Function/methods = if a function is using another function as a parameter(callback) or return any other function.



//todo: For a given array of numbers, print the square of each value using the forEach loop.

let ourTestArr = [20, 13, 42, 11, 50, 6, 9, 18];
let sqVal = 0;

ourTestArr.forEach((ourvalues) => {
    sqVal = ourvalues * ourvalues;
    console.log(`The square of ${ourvalues} is ${sqVal}`); 
})

//! More array methods:
//? 1) MAP: similar to forEach but creates a new array with the results of some operation, the value its callback returns are used to form new array


//todo: print array
let numArr = [3,4,5,6,7,8];

numArr.map((val) => {
    console.log(val);
});


//todo: make a copy of array.
let newArr = numArr.map((val) => {
    return val;
})

console.log(newArr);

//? 2) Filter method: creates a new array of elements that give true for a condition/filter.
//? eg. all even elements

let ourArray2 = [13, 12, 14, 11, 9, 8, 6, 5, 19, 17];

let EvenArr = ourArray2.filter((val) => {
    return val % 2 == 0;
});

console.log("This is our normal array",ourArray2);
console.log("This is our new Even number array",EvenArr);

//? 3) Reduce method: Performs some operations and reduces the array to single value. it returns that single value.

const ourArray3 = [1,2,3,4,5,6,7,8];


let sumWithInitVal = ourArray3.reduce((pre, curr) => {
    return pre + curr;
});

console.log(sumWithInitVal);

//todo: find largest element;

const myArr = [10, 12, 11, 40, 30, 50, 45, 41, 48];

let maxNum = myArr.reduce((pre, curr) => {
    return pre > curr ? pre : curr;
});

console.log(maxNum);

//todo: we are given array of marks of students. Filter out of the marks of students that scored 90 plus.

let marksArr = [40, 50, 90, 30, 20, 70, 92, 99, 86, 95, 92, 55, 66, 67, 98, 88, 65, 70, 90, 89, 49]

let gAmarks = marksArr.filter((values) => {
    return values >= 90;
})

console.log(`90 plus marks scored by students:\n${gAmarks}`);


//todo: Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.

let N = prompt("Enter your number please: ");
let userArr = []

for(let i = 0; i<N; i++) {
    userArr[i] = i+1;
}

let redSumArr = userArr.reduce((pre, curr) => {
    return pre + curr;
});

let redMulArr = userArr.reduce((pre, curr) => {
    return pre * curr;
});

console.log(`user array : ${userArr}`);
console.log(`Sum of array : ${redSumArr}`);
console.log(`Product of array : ${redMulArr}`);