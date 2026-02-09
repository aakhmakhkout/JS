// let tm = setInterval(() => {
//     console.log("Hello");
// }, 3000);

// clearInterval(tm);

let input = document.querySelector("#input");
let display = document.querySelector("#displayCounter");
let strbtn = document.querySelector("#start button");
let stpbtn = document.querySelector("#stop button");
let resetbtn = document.querySelector("#resetbtn");

let start = null;

strbtn.addEventListener("click", () => {
   if(start !== null) {
    return;
   }
    let inputVal = input.value; 
    let counter = 0;
        start = setInterval(() => {
        if(inputVal > 0) {
            counter = inputVal--;
            display.value = counter;
            console.log(counter);
        }
        else {
            display.value = "Timer reached 0";
            clearInterval(start);
            start = null;
            resetbtn.classList.toggle("hidden");
        }
    }, 1000);
});

stpbtn.addEventListener("click", () => {
    if(start === null) {
        return;
    }
    clearInterval(start);
    start = null;
    resetbtn.classList.toggle("hidden");
});

resetbtn.addEventListener("click", ()=> {
   input.value = 0;
   display.value = 0;
   resetbtn.classList.toggle("hidden");
});