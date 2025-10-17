let btns=document.querySelectorAll(".btn");
let toss=document.querySelector(".btn2");
let win=document.querySelector("#winner");
let msgContainer = document.querySelector('.msg-container');
let playAgain = document.querySelector('#newGame');
let coin=document.querySelector('.button');
let balance = parseInt(localStorage.getItem('balance')) || 200;
let balanceDisplay = document.querySelector('#mainBalance');

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

let userChoice=null;

btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        userChoice=btn.getAttribute("id");
        console.log(`${userChoice} clicked`);
        
    });
});

let computerChoice=()=>{
    let choices=["Head","Tail"];
    let randNum=Math.floor(Math.random()*2);
    return choices[randNum];
}

toss.addEventListener("click",()=>{
    coinflipAnimation();
    toss.disabled=true;
});

let playGame=(userChoice , compChoice)=>{
    
    console.log("Computer chose:",compChoice);

    if(userChoice===compChoice){
        msgContainer.classList.remove("hide");
        win.innerText=`You Win! It's ${compChoice}`;
        win.style.background="linear-gradient(to right, #22c55e, #15803d)";
        credit(200);
    }
    else{
        msgContainer.classList.remove("hide");
        win.innerText=`You Lose! It's ${compChoice}`;
        win.style.background="linear-gradient(to right, #ef4444, #b91c1c)";
    }
};

let coinflipAnimation = () => {
    
    let interval;
    let duration = 2000; // 2 seconds

    coin.classList.add('spin');
    coin.innerText = "H";
    
    interval = setInterval(() => {
        coin.innerText = coin.innerText === "H" ? "T" : "H";
    }, 100);

    let compChoice = computerChoice();
    
    setTimeout(() => {
        clearInterval(interval);
        coin.classList.remove('spin');

        coin.innerText = compChoice === "Head" ? "H" : "T";

        playGame(userChoice, compChoice);
    }, duration);
};

playAgain.addEventListener('click',()=>{
    msgContainer.classList.add("hide");
    toss.disabled=false;
    userChoice=null;
    coin.innerText="H";
    coin.classList.remove('spin');
    debit(100);
});
