let buttons=document.querySelectorAll('.buttons');
let playerChoice=document.querySelector('#choice');
let challenge=document.querySelector('#challenge');
let userScoreElement=document.querySelector('#user-score');
let compScoreElement=document.querySelector('#comp-score');

let userScore=0;
let compScore=0;

let userChoice = null;//global variable

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log("button clicked");
        userChoice=button.getAttribute('id');
        console.log(userChoice);
        playerChoice.innerText=`Your Choice: ${userChoice}`;
        reset();
    });
});

let reset=()=>{
    challenge.innerText='Challenge Computer!';
    challenge.style.background= "linear-gradient(to right, #a855f7, #7e22ce)";
};

challenge.addEventListener('click',()=>{
    playGame(userChoice);
});

let generateCompChoice=()=>{
    let randNum=Math.floor(Math.random()*3);
    let choices=['Rock','Paper','Scissor'];
    return choices[randNum];
};

let playGame=(userChoice)=>{
    let compChoice=generateCompChoice();
    console.log(compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==='Rock'){
            //scissor,paper
            userWin = compChoice==='Scissor'?true:false;
        }
        else if(userChoice==='Paper'){
            //rock,scissor
            userWin = compChoice==='Rock'?true:false;
        }
        else{
            //paper,rock
            userWin = compChoice==='Paper'?true:false;
        }
        Winner(userWin , userChoice , compChoice);
    }
    };

let drawGame=()=>{
    console.log("Game Draw");
    challenge.innerText='Game Draw!';
    challenge.style.background="linear-gradient(to right, #eab308, #a16207)";
}    

let Winner=(userWin , userChoice , compChoice)=>{
    if(userWin){
        console.log("You Win!");
        challenge.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        challenge.style.background="linear-gradient(to right, #22c55e, #15803d)";
        userScore++;
        userScoreElement.innerText=userScore;
    }
    else{
        console.log("You Lose");
        challenge.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        challenge.style.background="linear-gradient(to right, #ef4444, #b91c1c)";
        compScore++;
        compScoreElement.innerText=compScore;
    }
};