//! step 1: Access the Elements

let boxes = document.querySelectorAll(".icn");
let resetBtn = document.querySelector(".btn");
let currentPlayer = document.querySelector("#CPN");
let winnermsg = document.querySelector("#winner");
let count = 0;

//! Step 2: Track players
let currPlr = "p1";


//! step 3: store winning conditions in 2d Array -> array inside array.
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



//! step 4: Add event listeners to each box (we can use forEach loop to travers through each box), and toggle the players and also disable double clicking;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(currPlr === "p1") {
            box.innerText = "X";
            box.classList.add("Cross");
            currentPlayer.value = "Player O";
            currPlr = "p2";
            currentPlayer.style.color = "rgb(179, 0, 255)";
        }
        else if(currPlr === "p2") {
            box.innerText = "O";
            box.classList.add("Circle");
            currentPlayer.value = "Player X";
            currentPlayer.style.color =  "#ff0400";
            currPlr = "p1";
        }
        box.disabled = true;
        let win = checkWinner();
        if(win) {
            return;
        }
        count++;
        if(count >= 9) {
            winnermsg.value = "Draw"
            winnermsg.style.backgroundColor = "yellow"
            disableBtns();
        }
    });
})


//! Check who is the winner
const checkWinner = () => {
    for(let conditions of winConditions) {
         //* here conditions itself contains 0,1,2 in first iteration, then 3,4,5 in next and so on, then we are using conditions[0], which means conditions = 0,1,2. and conditions[0] = 0, conditions[1] = 1, conditions[2] = 2 in first iteration, and next iteration conditions = 3,4,5, so condition[0] = 3, condition[1] = 4, condition[2] = 5;
        //? console.log(conditions[0], conditions[1], conditions[2]);
        
        //  //* box at each idx;
        //?  console.log(boxes[conditions[0]], boxes[conditions[1]], boxes[conditions[2]]);

        //* value in each box
        //? console.log(boxes[conditions[0]].innerText, boxes[conditions[1]].innerText, boxes[conditions[2]].innerText);

        let pos1 = boxes[conditions[0]].innerText;
        let pos2 = boxes[conditions[1]].innerText;
        let pos3 = boxes[conditions[2]].innerText;

        //? this will check all possible combinations, and if winning combination matches then return won.
        if((pos1 !== "" && pos2 !== "" && pos3 !== "") && (pos1 === pos2 && pos2 === pos3) ) {
           showWinner(pos1);
            boxes[conditions[0]].style.backgroundColor = "black";
            boxes[conditions[1]].style.backgroundColor = "black";
            boxes[conditions[2]].style.backgroundColor = "black";
            return true;
        }
       
    }
    return false;
}

//! show winner function
const showWinner = (winnerVal) => {
 let winnertxt = `winner = ${winnerVal}`;
        winnermsg.value = winnertxt;
        winnermsg.style.color = "yellow";
        disableBtns();
}

//! disable buttons after someone wins
const disableBtns = () => {
    for (let btns of boxes) {
        btns.disabled = true;
    }
}



//! reset game
const resetGame = () => {
    location.reload(true);
}
resetBtn.addEventListener("click", resetGame);
