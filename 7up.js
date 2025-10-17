let d1=document.querySelector('#dice1');
let d2=document.querySelector('#dice2');
let totalsum=document.querySelector('#totalSum');
let choice=document.querySelectorAll('.btn');
let roll=document.querySelector('.btn2');
let newgame=document.querySelector('#playAgain');
let winner=document.querySelector('#winner');
let msgContainer = document.querySelector('.msg-container');    
let balance = parseInt(localStorage.getItem('balance'))|| 0;//only useful when there is no balance in local storage on home page
let balanceDisplay = document.querySelector('#mainBalance');

balanceDisplay.innerText=balance;//to sync balance on game page
let sum=null;
let userChoice=null;

function updateBalance(newBalance) {
    balance = newBalance;
    balanceDisplay.innerText = balance;
    localStorage.setItem('balance', balance);
}

choice.forEach(btn=>{
    btn.addEventListener('click',()=>{
        userChoice=btn.getAttribute('id');
        console.log(`${userChoice} clicked`);
    });
});

roll.addEventListener('click',()=>{
    playGame();
    roll.disabled=true;
     choice.forEach(btn => btn.disabled = true);
});

let playGame = () => {

    d1.classList.add('roll-animation');
    d2.classList.add('roll-animation');

    setTimeout(() => {
        let randNum1 = Math.floor(Math.random() * 6);
        let randNum2 = Math.floor(Math.random() * 6);
        console.log("Random numbers are:", randNum1, randNum2);
        
        sum = randNum1 + randNum2 + 2;
        totalsum.innerText = `Total Sum: ${sum}`;
        
        let diceFaces = [0x2680, 0x2681, 0x2682, 0x2683, 0x2684, 0x2685];
        d1.innerText = String.fromCodePoint(diceFaces[randNum1]);
        d2.innerText = String.fromCodePoint(diceFaces[randNum2]);
        
        winCondition(randNum1, randNum2);

        d1.classList.remove('roll-animation');
        d2.classList.remove('roll-animation');

    }, 800); 
};


let winCondition=(num1,num2)=>{
    msgContainer.classList.remove("hide");
    if(userChoice==="Under 7" && (num1+num2+2)<7){
        winner.innerText="You Win! It's Under 7";
        updateBalance(balance + 400);
    }
    else if(userChoice==="Exactly 7" && (num1+num2+2)===7){
        winner.innerText="You Win! It's Exactly 7";
        updateBalance(balance + 1000);
    }
    else if(userChoice==="over 7" && (num1+num2+2)>7){
        winner.innerText="You Win! It's Over 7";
        updateBalance(balance + 400);
    }
    else{
        winner.innerText="You Lose!";
    }
}

newgame.addEventListener('click',()=>{
    msgContainer.classList.add("hide");
    roll.disabled=false;
    choice.forEach(btn => btn.disabled = false);
    updateBalance(balance - 200);
    userChoice=null;
    sum=null;
    d1.innerText=String.fromCodePoint(0x2680);
    d2.innerText=String.fromCodePoint(0x2680);
});
