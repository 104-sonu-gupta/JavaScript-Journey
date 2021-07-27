'use strict';
let check = document.querySelector('#check');
let secretNumber = Math.round(Math.random() * 20);
let playAgain = document.querySelector('#reset');
let score = 20;
let highscore = 0;


const Direction = message => document.querySelector('#direction span').textContent = message



check.addEventListener('click', function () {
    let guessedNumber = Number(document.querySelector('#guess').value);
    if (guessedNumber >= 0 && guessedNumber <= 20 && score) {
        if (guessedNumber !== secretNumber) 
        {
            Direction(guessedNumber < secretNumber ? 'Too low !' : 'Too high !');
            document.querySelector('#score span').textContent = --score;
            if (score == 0) 
            {
                document.querySelector('#score span').textContent = 0;
                Direction('You lost the game ');
            }
        } 
        else 
        {
            Direction('Correct Answer 🎉🎉');
            document.querySelector('#my-num').textContent = secretNumber;
            document.querySelector('body').style.background = '#28b487';
            check.disabled = true;

            if (highscore < score) 
            {
                highscore = score;
                document.querySelector('#highscore span').textContent = highscore;
            }
        }
    } 
    else if (!score) 
        Direction(`You lost the game`);
    
    else 
    {
        Direction(`Out of range`);
        document.querySelector('#score span').textContent = --score;
    }
});

playAgain.addEventListener('click', () => {
    document.querySelector('#guess').value = '';
    check.disabled = false;
    secretNumber = Math.round(Math.random() * 20);
    console.log(secretNumber);
    score = 20;
    document.querySelector('#score span').textContent = 20;
    Direction(`Start Guessing . . .`);
    document.querySelector('#my-num').textContent = '?';
    document.querySelector('body').style.background = 'linear-gradient(to left, #5f2c82, #49a09d)';
});
