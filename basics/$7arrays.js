//! ARRAYS: collection of items to store in a linear form (based on indices), can be same type of data as well as different type of data...

let studentMarks = [25, 30, 36, 78, 59, 50];
console.log(studentMarks);
console.log(studentMarks.length); //? property (returns a value)

let students = ["kaneki", "ken", "saturo", "inumaki"];
console.log(students);
console.log(typeof(students)); //? object (array is special type of object where we are using indices instead of keys);


//* Array indices: array indices are used to traverse over elements of array, it is the position of an element starting from 0 and stored in a linear form;
//? QUESTION: For a given array with marks of students -> [85, 97, 44, 37, 76, 60]

let ourItems = ["hello", "this", "is", "me"];


console.log(ourItems[0]);
console.log(ourItems[1]);
console.log(ourItems[2]);
console.log(ourItems[3]);
console.log(ourItems[4]); //? undefined

ourItems[3] = "kaneki"; //? arrays are mutable in js

console.log(ourItems);

//! LOOPING OVER AN ARRAY....: Print all elements of array

for(let i=0; i < (studentMarks.length); i++) {
    console.log(`Element on index ${i} is ${studentMarks[i]}\n`);
}

for(let element of students) {
    console.log(element.toUpperCase());
}

//? QUESTION: For a given array with marks of students -> [85, 97, 44, 37, 76, 60] find the average marks of the entire class

let marks = [85, 97, 44, 37, 76, 60];
let avg = 0, sum = 0;

for(let stuMarks of marks) {
    sum += stuMarks;
}
avg = (sum/(marks.length))

console.log(`The average marks of the class is ${avg}`);

//? Question 2: For a given array with prices of 5 items -> [250, 645, 300, 900, 50], all items have an offer of 10% off on them. Change the array to store final price after applying offer...


//todo: this will only make a copy of the original array and will not change the original array.
// let ourOrgPrice = [250, 645, 300, 900, 50];
// let discount = 0;
// for(let items of ourOrgPrice) {
//     console.log(`Price before discount: ${items}`);
//     discount = items/10;
//     items-=discount;
//     console.log(`Price after discount: ${items}\n`);
// }

//todo: to change the original array we can use normal loop

let ourOrgPrice = [250, 645, 300, 900, 50];
let discount = 0;
for(let i = 0; i < (ourOrgPrice.length); i++) {
    console.log(`Price before discount: ${ourOrgPrice[i]}`);
    discount = ourOrgPrice[i]/10;
    ourOrgPrice[i]-=discount;
    console.log(`Price after discount: ${ourOrgPrice[i]}\n\n`);
}

//* Array Methods:

//! Push() : add to end.

let fruits = ["apple", "banana", "watermelon", "grapes"];
// console.log(fruits);

for(items of fruits) {
    console.log(items);
}

fruits.push("peach", "dragon fruit", "apricot"); //? add element at the end of the array

for(items of fruits) {
    console.log(items);
}

//! Pop() : delete from end & return

let deletedItem = fruits.pop();

for(items of fruits) {
    console.log(items);
}

console.log(`${deletedItem} is the deleted item`);

//! tostring(): converts array into string...

console.log(fruits.toString()); //? This is a string not an array but only a copy of it, it doesn't change the original array...


//! concat(): joins multiple arrays and returns the result (doesn't change the original instead returns a new result)

let teamZPlayers = ["isagi", "nagi", "kaiser", "rin"];
let teamXPlayers = ["Bachira", "riyo", "kunigami", "yoichi"];

let allPlayers = teamZPlayers.concat(teamXPlayers);

console.log(allPlayers);

//!unshift(): add to start

teamZPlayers.unshift("seishiro");
console.log(teamZPlayers);

//! shift(): deletes from start and returns

let removedPlayer = teamXPlayers.shift(); //! removes starting element
console.log(teamXPlayers);

console.log(removedPlayer);

//! slice(): returns a piece of the array (using indices), it doesn't change the original array

let heores = ["ironman", "captain america", "superman", "batman", "aquaman", "wonder woman", "spiderman", "thor", "winter soilder", "war machine"];

let dc_heores = heores.slice(2, 6);
console.log(dc_heores);
console.log(heores.slice(3));
console.log(heores.slice(0,3));
console.log(heores.slice(3, ));
console.log(heores.slice(-1, ));
console.log(heores.slice(-3, ));
console.log(heores.slice(-5, -1));

//! splice(): change original array (add, remove, replace);

//? syntax = splice(startidx, delcount, newelement1, newelement2 ......)
//? == startidx = starts modification/changes, delcount = how many elements to remove/delete, replace = which elements should be replaced (starts replacing elements from startidx)

let rollNumbers = [1,2,3,4,5,9,8,10,11,12];
console.log(rollNumbers);

// rollNumbers.splice(4, 3);
// console.log(rollNumbers);

// rollNumbers.splice(5, 0, 20,30,40);
// console.log(rollNumbers);

// rollNumbers.splice(5);
// console.log(rollNumbers); //? acts like slice

rollNumbers.splice(5, 5, 6,7,8,9);
console.log(rollNumbers);

