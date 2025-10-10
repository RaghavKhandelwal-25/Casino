let boxes = document.querySelectorAll('.buttons');//nine boxex can be thinked as array
let msgContainer = document.querySelector('.msg-container');
let NewGame = document.querySelector('#newGame');
let winpara = document.querySelector('#winner');

let turnX =true;//first chance is of X
let count =0;

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

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box clicked");
        count++;
        if(turnX){
            box.innerText='X';
            turnX=false;
        }
        else{
            box.innerText='O';
            turnX=true;
        }
        box.disabled=true;

        checkWin();
    })
    });

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
    }
    else{
        winpara.innerText=`${winner}`;
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
        msgContainer.classList.add("hide");
        turnX=true;
    });
});