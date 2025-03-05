let userScore =0;
let compScore = 0;
const choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock" , "paper" ,"scissors"];
   const randomInd = Math.floor( Math.random()*3);
   return options[randomInd];
};

const drawGame = ()=>{
    msg.innerText ="DRAW!!!";
    msg.style.backgroundColor="rgb(21, 21, 51)";

};
const showWinner = (userWin , userChoice , compChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You WIN!!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You LOSE!!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
};

const playGame =(userChoice) =>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
           userWin =  compChoice=== "paper" ?false : true;
        }
        else if(userChoice ==="paper"){
            userWin = compChoice === "scissors" ?false :true;
        }
        else{
            userWin = compChoice ==="rock" ?false :true;
        }
        showWinner(userWin , userChoice , compChoice );
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});