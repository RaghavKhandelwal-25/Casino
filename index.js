let balanceDisplay = document.querySelector('#mainBalance');
let G1Entry = document.querySelector('#rpc-entry');
let G2Entry = document.querySelector('#CF-entry');
let G3Entry = document.querySelector('#TTT-entry');
let G4Entry = document.querySelector('#entry7up');
// let saviorBtn=document.querySelector('#savior');

let balance=parseInt(localStorage.getItem('balance')) || 1000; //saving balance in local storage
//parseInt() to turn string number(1000) into a number integer
balanceDisplay.innerText=balance;

function updateBalance(newBalance) {
    balance = newBalance;
    balanceDisplay.innerText = balance;
    localStorage.setItem('balance', balance);
}

G1Entry.addEventListener('click', (e) => {
        e.preventDefault();//prevent direct entry without balance check
    if (balance < 300) {
        alert('You need at least 300 coins to play this game.');
    }
    else {
        updateBalance(balance - 300);
        window.location.href = 'rps.html';
    }
});

G2Entry.addEventListener('click', (e) => {
        e.preventDefault();
    if (balance < 100) {
        alert('You need at least 100 coins to play this game.');
    }
    else {
        updateBalance(balance - 100);
    window.location.href = 'coinflip.html';
    }
});

G3Entry.addEventListener('click', (e) => {
        e.preventDefault();
    if (balance < 500) {
        alert('You need at least 500 coins to play this game.');
    }
    else {
        updateBalance(balance - 500);
    window.location.href = 'ttt.html';   
    }
});

G4Entry.addEventListener('click', (e) => {
        e.preventDefault();
    if (balance < 200) {
        alert('You need at least 200 coins to play this game.');
    }
    else {
        updateBalance(balance - 200);
    window.location.href = '7up.html';
    }
});

// saviorBtn.addEventListener('click',()=>{
//     updateBalance(1000);
// });