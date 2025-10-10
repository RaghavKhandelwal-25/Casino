let balance = document.querySelector('#balance');
// balance.innertext = '1000';


let G1Entry = document.querySelector('#rpc-entry');
let G2Entry = document.querySelector('#CF-entry');
let G3Entry = document.querySelector('#TTT-entry');
let G4Entry = document.querySelector('#7up-entry');


G1Entry.addEventListener('click', () => {
    if (balance.innerText < 300) {
        alert('You need at least 300 coins to play this game.');
    }});

G2Entry.addEventListener('click', () => {
    if (balance.innerText < 100) {
        alert('You need at least 100 coins to play this game.');
    }});

G3Entry.addEventListener('click', () => {
    if (balance.innerText < 500) {
        alert('You need at least 500 coins to play this game.');
    }});

G4Entry.addEventListener('click', () => {
    if (balance.innerText < 200) {
        alert('You need at least 200 coins to play this game.');
    }});