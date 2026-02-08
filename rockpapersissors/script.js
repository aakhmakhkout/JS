let usrScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choices");
let userMove = document.querySelector("#usermove"); 
let userscore = document.querySelector("#usrscore"); 
let computerscore = document.querySelector("#computerscore"); 
let computerMove = document.querySelector("#computermove"); 
let result = document.querySelector(".result");


const computersChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    // let compChoice = "";
    let randomOption = Math.floor(Math.random() * 3);
    let choice = options[randomOption];
    computerMove.value = choice
    // if(randomOption === 0) {
    //      compChoice = options[0];
    //     computerMove.value = "Rock";
    // }
    // else if (randomOption === 1) {
    //      compChoice = options[1];
    //     computerMove.value = "Paper";
    // }
    // else{
    //     compChoice = options[2];
    //     computerMove.value = "Scissors";
    // }
return choice;
}

const gamePlay = (userchoice) => {
    
    let whatComputerChose = computersChoice();
    
    if (userchoice === whatComputerChose) {
        result.value = "Draw";
        result.style.width = "80px";
    }
    
    else if (userchoice === "Rock" && whatComputerChose === "Scissors") {
        result.value = "User wins! Rock beats scissors";
        usrScore++;
    }
    
    else if (userchoice === "Paper" && whatComputerChose === "Rock") {
        result.value = "User wins! Paper beats rock";
        usrScore++;
        
    }

    else if (userchoice === "Scissors" && whatComputerChose === "Paper") {
        result.value = "User wins! Rock beats Scissors";
        usrScore++;
    }
    
    // else if (userchoice === "Rock" && whatComputerChose === "Scissors"){
    //     result.value = "User wins! Rock beats Scissors";
    //     usrScore++;
    // }
    
    
    // else if (userchoice === "Paper" && whatComputerChose === "Scissors") {
    //     result.value = "Computer wins! Scissors beats paper";
    //     compScore++;
    // }
    
    // else if (userchoice === "Scissors" && whatComputerChose === "Paper") {
    //     result.value = "User wins! Scissors beats Paper";
    //     usrScore++;
    // }
    else {
        result.value = `Computer wins! ${whatComputerChose} beats ${userchoice}`;
        compScore++;
    }

    result.style.width = "250px";
    userscore.value = usrScore;
    computerscore.value = compScore;
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        // if(userchoice === "Rock") {
        //     userMove.value = "Rock";
        //     gamePlay(userchoice);
        // }
        // else if (userchoice === "Paper") {
        //     userMove.value = "Paper";
        //     gamePlay(userchoice);
        // }
        // else {
        //     userMove.value = "Scissors";
        //     gamePlay(userchoice);
        
        // }
        userMove.value = userchoice
        gamePlay(userchoice);
    })
})