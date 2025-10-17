let boxes = document.querySelectorAll('.buttons');//nine boxex can be thinked as array
let msgContainer = document.querySelector('.msg-container');
let NewGame = document.querySelector('#newGame');
let winpara = document.querySelector('#winner');
let balance = parseInt(localStorage.getItem('balance')) || 0;
let balanceDisplay = document.querySelector('#mainBalance');

balanceDisplay.innerText = balance;

function updateBalance(newBalance) {
    balance = newBalance;
    balanceDisplay.innerText = balance;
    localStorage.setItem('balance', balance);
}

let turnX =true;//first chance is of X
let count =0;
let gameOver=false; 

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnX && box.innerText === "" && !gameOver) {
            box.innerText = 'X';
            box.disabled = true;
            count++;
            turnX = false;
            checkWin();

            if (!turnX && count < 9 && !gameOver) {
                setTimeout(computerTurn, 500);
            }
        }
    });
});

let computerTurn = () => {
    if(gameOver) return;//stops when someone wins

    let emptyBoxes = Array.from(boxes).filter(box => box.innerText === "");
    if (emptyBoxes.length === 0) return;

    let randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    randomBox.innerText = 'O';
    randomBox.disabled = true;
    count++;
    turnX = true;
    checkWin();
};

let checkWin=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log(`${pos1val} is the winner`);
                disableBoxes();
                showWinner(pos1val);
                
            }
            else if(count===9){
                showWinner("No one Wins, It's a Draw");
            }}
    }};

let showWinner=(winner)=>{
    msgContainer.classList.remove("hide");
    if(count!=9){
    winpara.innerText=`Congratulations! ${winner} is the Winner!`;
    updateBalance(balance + 1000);
    gameOver=true; 
     return; //exit after win
    }
    else{
        winpara.innerText=`${winner}`;
        gameOver=true; 
        return; //exit after win
        updateBalance(balance + 500);
    }
};

let disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};

NewGame.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    msgContainer.classList.add("hide");
        turnX=true;
        count=0;
    updateBalance(balance - 500);
    gameOver=false;
});