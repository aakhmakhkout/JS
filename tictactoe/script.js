
let btn1 = document.querySelector("#b1");
let btn2 = document.querySelector("#b2");
let btn3 = document.querySelector("#b3");
let btn4 = document.querySelector("#b4");
let btn5 = document.querySelector("#b5");
let btn6 = document.querySelector("#b6");
let btn7 = document.querySelector("#b7");
let btn8 = document.querySelector("#b8");
let btn9 = document.querySelector("#b9");
let btn10 = document.querySelector("#btn10");
let btns = document.querySelectorAll(".icn");
let boxes = document.querySelectorAll(".boxes");
let mainbox = document.querySelector(".mainbox1");
let player = "p1";

let i = 0;

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        if(player === "p1") {
            btns[i].innerText = "X";
            btns[i].classList.add("Cross");
            player = "p2";
        }
        else if (player === "p2") {
            btns[i].innerText = "O"
            btns[i].classList.add("Circle");
            player = "p1";
        }
        
        if((btn1.innerText === "X" && btn2.innerText === "X" && btn3.innerText === "X")) {
            btns[0].style.backgroundColor = "red";
            btns[1].style.backgroundColor = "red";
            btns[2].style.backgroundColor = "red";
            alert("Player 1 WON");
            
            
        }
        else if (btn1.innerText === "O" && btn2.innerText === "O" && btn3.innerText === "O") {
            btns[0].style.backgroundColor = "black";
            btns[1].style.backgroundColor = "black";
            btns[2].style.backgroundColor = "black";
            alert("player 2 Won");
        }

        if((btn4.innerText === "X" && btn5.innerText === "X" && btn6.innerText === "X")) {
            btns[4].style.backgroundColor = "red";
            btns[5].style.backgroundColor = "red";
            btns[6].style.backgroundColor = "red";
            alert("Player 1 WON");
        }
        else if (btn4.innerText === "O" && btn5.innerText === "O" && btn6.innerText === "O") {
            btns[4].style.backgroundColor = "black";
            btns[5].style.backgroundColor = "black";
            btns[6].style.backgroundColor = "black";
            alert("player 2 Won");
        }

       if((btn7.innerText === "X" && btn8.innerText === "X" && btn9.innerText === "X")) {
           btns[7].style.backgroundColor = "red";
           btns[8].style.backgroundColor = "red";
           btns[9].style.backgroundColor = "red";
           alert("Player 1 WON");
        }
        else if (btn7.innerText === "O" && btn8.innerText === "O" && btn9.innerText === "O") {
            btns[7].style.backgroundColor = "black";
            btns[8].style.backgroundColor = "black";
            btns[9].style.backgroundColor = "black";
            alert("player 2 Won");
        }

       if((btn1.innerText === "X" && btn5.innerText === "X" && btn9.innerText === "X")) {
            alert("Player 1 WON");
            btns[1].style.backgroundColor = "red";
            btns[5].style.backgroundColor = "red";
            btns[9].style.backgroundColor = "red";
        }
        else if (btn1.innerText === "O" && btn5.innerText === "O" && btn9.innerText === "O") {
            alert("player 2 Won");
            btns[1].style.backgroundColor = "black";
            btns[5].style.backgroundColor = "black";
            btns[9].style.backgroundColor = "black";
        }

       if((btn3.innerText === "X" && btn5.innerText === "X" && btn7.innerText === "X")) {
            alert("Player 1 WON");
            btns[3].style.backgroundColor = "red";
            btns[5].style.backgroundColor = "red";
            btns[7].style.backgroundColor = "red";
        }
        else if (btn3.innerText === "O" && btn5.innerText === "O" && btn7.innerText === "O") {
            alert("player 2 Won");
            btns[3].style.backgroundColor = "black";
            btns[5].style.backgroundColor = "black";
            btns[7].style.backgroundColor = "black";
        }
       if((btn1.innerText === "X" && btn4.innerText === "X" && btn7.innerText === "X")) {
            alert("Player 1 WON");
            btns[1].style.backgroundColor = "red";
            btns[4].style.backgroundColor = "red";
            btns[7].style.backgroundColor = "red";
        }
        else if (btn1.innerText === "O" && btn4.innerText === "O" && btn7.innerText === "O") {
            alert("player 2 Won");
            btns[1].style.backgroundColor = "black";
            btns[4].style.backgroundColor = "black";
            btns[7].style.backgroundColor = "black";
        }
       if((btn2.innerText === "X" && btn5.innerText === "X" && btn8.innerText === "X")) {
            alert("Player 1 WON");
            btns[2].style.backgroundColor = "red";
            btns[5].style.backgroundColor = "red";
            btns[8].style.backgroundColor = "red";
        }
        else if (btn2.innerText === "O" && btn5.innerText === "O" && btn8.innerText === "O") {
            alert("player 2 Won");
            btns[2].style.backgroundColor = "black";
            btns[5].style.backgroundColor = "black";
            btns[8].style.backgroundColor = "black";
        }

       if((btn3.innerText === "X" && btn6.innerText === "X" && btn9.innerText === "X")) {
            alert("Player 1 WON");
            btns[3].style.backgroundColor = "red";
            btns[6].style.backgroundColor = "red";
            btns[9].style.backgroundColor = "red";
        }
        else if (btn3.innerText === "O" && btn6.innerText === "O" && btn9.innerText === "O") {
            alert("player 2 Won");
            btns[3].style.backgroundColor = "black";
            btns[6].style.backgroundColor = "black";
            btns[9].style.backgroundColor = "black";
        }
    
     
    }, {once:true})
    } 

    btn10.addEventListener("click", () => {
        location.reload(true);
    })

    // console.log("clicked")
    // if(player === "p1") {
    //     btn1.innerText = "X";
    //     btn1.classList.add("Cross");
    //     player = "p2";
    // }
    // else if (player === "p2") {
    //     btn1.innerText = "O"
    //     btn1.classList.add("Circle");
    //     player = "p1";
    // }


// btn2.addEventListener("click", () => {
//       console.log("clicked");
//     if(player === "p1") {
//         btn2.innerText = "X";
//         btn2.classList.add("Cross");
//         player = "p2";
//     }
//     else if (player === "p2") {
//         btn2.innerText = "O"
//         btn2.classList.add("Circle");
//         player = "p1";
//     }
// }, {once: true});

// btn3.addEventListener("click", () => {
//       console.log("clicked");
//     if(player === "p1") {
//         btn3.innerText = "X";
//         btn3.classList.add("Cross");
//         player = "p2";
//     }
//     else if (player === "p2") {
//         btn3.innerText = "O"
//         btn3.classList.add("Circle");
//         player = "p1";
//     }
// }, {once: true});

// btn4.addEventListener("click", () => {
//   console.log("clicked");
//     if(player === "p1") {
//         btn4.innerText = "X";
//         btn4.classList.add("Cross");
//         player = "p2";
//     }
//     else if (player === "p2") {
//         btn4.innerText = "O"
//         btn4.classList.add("Circle");
//         player = "p1";
//     }
// }, {once: true});

// btn5.addEventListener("click", () => {
//   console.log("clicked");
//     if(player === "p1") {
//         btn5.innerText = "X";
//         btn5.classList.add("Cross");
//         player = "p2";
//     }
//     else if (player === "p2") {
//         btn5.innerText = "O"
//         btn5.classList.add("Circle");
//         player = "p1";
//     }
// }, {once: true});

// btn6.addEventListener("click", () => {
//   console.log("clicked");
//     if(player === "p1") {
//         btn6.innerText = "X";
//         btn6.classList.add("Cross");
//         player = "p2";
//     }
//     else if (player === "p2") {
//         btn6.innerText = "O"
//         btn6.classList.add("Circle");
//         player = "p1";
//     }
// }, {once: true});

// btn7.addEventListener("click", () => {
//   console.log("clicked");
//     if(player === "p1") {
//         btn7.innerText = "X";
//         btn7.classList.add("Cross");
//         player = "p2";
//     }
//     else if (player === "p2") {
//         btn7.innerText = "O"
//         btn7.classList.add("Circle");
//         player = "p1";
//     }
// }, {once: true});

// btn8.addEventListener("click", () => {
//   console.log("clicked");
//     if(player === "p1") {
//         btn8.innerText = "X";
//         btn8.classList.add("Cross");
//         player = "p2";
//     }
//     else if (player === "p2") {
//         btn8.innerText = "O"
//         btn8.classList.add("Circle");
//         player = "p1";
//     }
// }, {once: true});

// btn9.addEventListener("click", () => {
//    console.log("clicked");
//     if(player === "p1") {
//         btn9.innerText = "X";
//         btn9.classList.add("Cross");
//         player = "p2";
//     }
//     else if (player === "p2") {
//         btn9.innerText = "O"
//         btn9.classList.add("Circle");
//         player = "p1";
//     }
// }, {once: true});

//btn10.addEventListener("click", () => {
// })
