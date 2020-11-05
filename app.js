let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;

let dice = Math.floor(Math.random() * 6) + 1;


document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--0' + activePlayer).innerHTML = '<em>' + dice + '</em>';

let x = document.querySelector('#score--0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';