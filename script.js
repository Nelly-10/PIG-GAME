'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');



// const switchPlayer = function() {
//         currentScore = 0;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//         activePlayer = activePlayer === 0 ? 1 : 0;
//         player0El.classList.toggle('player--active');
//         player1El.classList.toggle('player--active');
// }

// let scores, currentScore, activePlayer, play;

// const init = function() {
//     scores = [0, 0];
//     currentScore = 0;
//     activePlayer = 0;
//     play = true;
    
    
//     current0El.textContent = 0;
//     current1El.textContent = 0;
//     score0El.textContent = 0;
//     score1El.textContent = 0;

//     diceEl.classList.add('hidden');
//     player0El.classList.remove('player--winner');
//     player1El.classList.remove('player--winner');
//     player0El.classList.add('player--active');
//     player1El.classList.remove('player--active');
// }

// init();



// btnRoll.addEventListener('click', function() {
//         if(play) {
//             //RANDOM NUMBER
//         const dice = Math.trunc(Math.random() * 6) + 1;
//         //DICE APPEAR
//         diceEl.classList.remove('hidden');
//         diceEl.src = `dice-${dice}.png`;
    
//         if (dice !== 1) {
//             //ADD IT TO THE CURRENT SCORE
//             currentScore += dice;
//             document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//             // player0El.textContent = currentScore;
//         } else {
//             switchPlayer();
//         }
//     }
    
// })

// btnHold.addEventListener('click', function() {
//     if(play) {
//         scores[activePlayer] += currentScore;
//         document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
//         if (scores[activePlayer] >= 100) {
//             play = false;
//             document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//             document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    
//         } else {
//             switchPlayer();
//         }
//     } 
// })

// btnNew.addEventListener('click', init);

let scores, currentScore, activeScore, playing;

const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activeScore = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--winner')
}
init();


const switchPlayer =  function() {
        currentScore = 0;
        document.getElementById(`current--${activeScore}`).textContent = currentScore;
        activeScore = activeScore === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
    if(playing) {
        diceEl.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;

    //ADD THE SCORE OF THE DICE TO THE CURRENT SCORE
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activeScore}`).textContent = currentScore;
    }else {
        switchPlayer();
    }
}
    

});


btnHold.addEventListener('click', function() {
    if(playing) {
            scores[activeScore] += currentScore;
        document.getElementById(`score--${activeScore}`).textContent = scores[activeScore];

        if(scores[activeScore] >= 10) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activeScore}`).classList.add('player--winner');
            document.querySelector(`.player--${activeScore}`).classList.remove('player--active');
        }else {
            switchPlayer();
        }
    }  
})

btnNew.addEventListener('click', init);
