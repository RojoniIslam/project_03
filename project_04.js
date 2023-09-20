
let randonNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault()
       const guess = parseInt(userInput.value)
    //    console.log(guess);
       validateGuess (guess)
    })
}

//////// F1 //////////

function validateGuess(guess) {
   if (isNaN (guess)) {
    alert ('Please enter a valid number!')
   } else if (guess < 1) {
    alert ('Please enter a number greater than 1')
   } else if (guess> 100) {
    alert('Please enter a number less than 100.')
   } else {
    preGuess.push(guess)
    if(numGuess === 11) {
        displayGuess(guess)
        displayMsg(`Game Over! Random number was ${randonNumber}`)
        endGame()
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
   }
}

////////// F2 ////////////

function checkGuess(guess) {
    if(guess === randonNumber) {
        displayMsg (`You guessed it right!😍`)
        endGame()
    } else if (guess < randonNumber) {
        displayMsg(`The number you guessed is less than random number. 😥`)

    } else if (guess > randonNumber) {
        displayMsg(`The number you guessed is greater than random number.😯`)
    }
}

/////////// F3 /////////////

function displayGuess(guess) {
    userInput.value = ''  ///// cleanup value //////
    guessSlot.innerHTML += `${guess}, `   ///////// (+= is to add something) /////
    numGuess ++;
    remaining.innerHTML = `${11 - numGuess}`
}


/////////// F4 ////////////

function displayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

/////////// F5 ////////////

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disableed', "")
    p.classList.add('button')
    // p.innerHTML = `<h2 id = 'newGame'>Start New Game!</h2>`
    p.innerHTML = `<button id = "newGame">Start New Game</button>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

////////// F6 ////////////

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randonNumber = parseInt(Math.random() * 100 + 1);
        preGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}

