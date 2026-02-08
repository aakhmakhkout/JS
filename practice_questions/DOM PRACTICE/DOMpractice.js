//! Q1 : append text.
let ourtext = document.querySelector(".hello");

ourtext.innerText = ourtext.innerText + " by kaneki"; //* Concatination.


//! Q2: 3 DIV with different text.
let boxes = document.querySelectorAll(".boxes");

// boxes[0].innerText = "hello this is statement 1";
// boxes[1].innerText = "hello this is statement 2";
// boxes[2].innerText = "hello this is statement 3";
let idx = 0;
for(newVal of boxes) {
    newVal.innerText = `hello this is statement ${idx + 1}`;
    idx++;
}