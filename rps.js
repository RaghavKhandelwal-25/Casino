let buttons=document.querySelectorAll('.buttons');
let playerChoice=document.querySelector('#choice');
let challenge=document.querySelector('#challenge');
let userScoreElement=document.querySelector('#user-score');
let compScoreElement=document.querySelector('#comp-score');
let balance = parseInt(localStorage.getItem('balance')) || 200;
let balanceDisplay = document.querySelector('#mainBalance');
let msgContainer = document.querySelector('.msg-container');
let playAgain = document.querySelector('#playAgain');
let rounds=document.querySelector('#roundsCount');

balanceDisplay.innerText = balance;


function credit(amount) {
  balance += amount;
  localStorage.setItem('balance', balance);
  document.querySelector('#balance-display').innerText = balance;
}

function debit(amount) {
  balance -= amount;
  localStorage.setItem('balance', balance);
  document.querySelector('#balance-display').innerText = balance;
}

let count=1;
let userScore=0;
let compScore=0;

let userChoice = null;//global variable

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log("button clicked");
        userChoice=button.getAttribute('id');
        console.log(userChoice);
        playerChoice.innerText=`Your Choice: ${userChoice}`;
        // reset();
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
    showMessage();
}    

let Winner=(userWin , userChoice , compChoice)=>{
    if(userWin===true){
        console.log("You Win!");
        challenge.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        challenge.style.background="linear-gradient(to right, #22c55e, #15803d)";
        userScore++;
        userScoreElement.innerText=userScore;
        showMessage();
    }
    else{
        console.log("You Lose");
        challenge.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        challenge.style.background="linear-gradient(to right, #ef4444, #b91c1c)";
        compScore++;
        compScoreElement.innerText=compScore;
        showMessage();    
    }
};

let showMessage=()=>{
    msgContainer.classList.remove("hide");
    
    if(count<4){
        playAgain.innerText=`Next Round`;
    }
    else{
        playAgain.innerText=`Game Over! Play Again`;
        // if(userScore>compScore){
        //     challenge.innerText=`You Won the Game!`;
        // }
        // else if(userScore<compScore){
        //     challenge.innerText=`You Lost the Game!`;
        // }
        // else{
        //     challenge.innerText=`It's a Draw!`;
        // }
}}

playAgain.addEventListener('click',()=>{
    msgContainer.classList.add("hide");
    reset();
    rounds.innerText=`Round ${count}`;
        count++;
        if(count===4){
            count=0;
        }    
        userScore=0;
        compScore=0; 
});