let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;



/*
document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--0' + activePlayer).innerHTML = '<em>' + dice + '</em>';

let x = document.querySelector('#score--0').textContent;
console.log(x);
*/

document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--0').textContent = '0';


document.querySelector('.btn--roll').addEventListener('click', function() {
    // 1. random num
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    let diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    

    // 3. update the round score if not 1
    if (dice !== 1){
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;

    } else {
        //next player
        activePlayer ===  0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        

        //document.querySelector('.player--0').classList.remove('player--active');
       //document.querySelector('.player--1').classList.add('player--active');
        
    }

});
