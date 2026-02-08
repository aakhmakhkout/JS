
//? Question 2: Reverse an array of numbers without using reverse(). use a loop...

let ourArray = [1,2,3,4,5,6,7,8,9];
let revarray = [];
let k = 0;

for(let i = (ourArray.length)-1; i >= 0; i--) {
        revarray[k] = ourArray[i];
        k++;
    }

console.log(revarray);

//? Question 3: Given an array, count how many times a given element appears.

let fruitsAndVegies = ["apple", "tomato", "banana", "banana", "grapes", "greenleaves", "potato", "apple", "greenleaves", "carrot", "apple", "appricot", "banana", "potato", "cabage", "tomato"];

let count = 0;

let selectedFruit = "banana";

for(let i = 0; i < (fruitsAndVegies.length); i++) {
    if(selectedFruit == fruitsAndVegies[i]) {
        count++;
    }
}

console.log(`The count of ${selectedFruit} in the given array is ${count}`);


//? Question 4: Write a program that removes duplicate items from an array...

let anArray = [1,1,2,2,3,4,5,2,3,5,6,7,8,5,4,1,8,10,12,13,11,10,12,11,12,11,8,13];

for(let i = 0; i < (anArray.length); i++){
    for(let j = i+1; j < (anArray.length); j++) {
        if(anArray[i] === anArray[j]) {
            anArray.splice(j,1);
            j--;
        }
    }
}
console.log(anArray);

//? Question 5: Merge and sort. merge two arrays using concat() and sort the result

let arr1 = [2,3,7,4,1,8,5,6];
let arr2 = [20, 17, 18, 16, 9, 14, 12, 13];

let mergedArr = arr1.concat(arr2);
console.log(mergedArr);

let leng = mergedArr.length;
for(let i = 0; i < leng; i++) {
    for(let j = i+1; j < leng; j++) {
        if (mergedArr[i] > mergedArr[j]) {
            let temp = mergedArr[i];
            mergedArr[i] = mergedArr[j];
            mergedArr[j] = temp;
        }
    }
}
console.log(mergedArr);

//! HARD..

//? Question 1: Rotate an array to the right by k steps, use slice() and concat()


let orgArr = [1,2,3,4,5,6,7,8];
let steps = 3;
let istArr = [];

steps = steps % orgArr.length;

istArr = orgArr.slice(orgArr.length-steps, orgArr.length);
orgArr = orgArr.slice(0, -steps);

console.log(`our shifted array is ${istArr.concat(orgArr)}`);


//? Question 2: Find the second largest number in an array without sorting...

let ourArray2 = [5,6,10,4,7,9,2,11,3,8,12];
let largestVal = -Infinity;
let secLargestVal = -Infinity;


 for (let num of ourArray2) {
    if (num > largestVal) {
        secLargestVal = largestVal; //? 0,5,6,10,11
        largestVal = num; //? 5,6,10,12
    } else if (num > secLargestVal && num < largestVal) {
        secLargestVal = num;
    }
}
// for (let i = 0; i < ourArray2.length; i++) { 

//     if((ourArray2[i] < largestVal) && (ourArray2[i] > secLargestVal)) {
//         secLargestVal = ourArray2[i];
//     }
// }
console.log(largestVal);
console.log(secLargestVal);
