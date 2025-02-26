let gameScore= JSON.parse(localStorage.getItem('gameScore')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playMove) {
    const computerMove = pickComputerMove();

    let result = '';
    if (playMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie!';
        } else if (computerMove === 'paper') {
            result = 'You Lose!';
        } else if (computerMove === 'scissors') {
            result = 'You Win!';
        }
    } else if (playMove === 'paper') {
        if (computerMove === 'paper') {
            result = 'Tie!';
        } else if (computerMove === 'scissors') {
            result = 'You Lose!';
        } else if (computerMove === 'rock') {
            result = 'You Win!';
        }

    } else if (playMove === 'scissors') {
        if (computerMove === 'scissors') {
            result = 'Tie!';
        } else if (computerMove === 'rock') {
            result = 'You Lose!';
        } else if (computerMove === 'paper') {
            result = 'You Win!'
        }
    }

    if (result === 'You Win!') {
        gameScore.wins += 1;
    } else if (result === 'You Lose!') {
        gameScore.losses += 1;
    } else if (result === 'Tie!') {
        gameScore.ties += 1;
    }

    localStorage.setItem('gameScore', JSON.stringify(gameScore));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
        <img class="move-icon" src="assets/${playMove}-emoji.png"></img>
        <img class="move-icon" src="assets/${computerMove}-emoji.png"></img>
        Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${gameScore.wins}, Losses: ${gameScore.losses}, Ties: ${gameScore.ties}`;
}


function pickComputerMove() {
    let computerMove = ''
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove ='rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }
    return computerMove;
}
let isAutoPlaying = false;
let intervalID;
function autoplay() {
    if (!isAutoPlaying) {
          intervalID =  setInterval( ()=> {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    }
    else {
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
}

