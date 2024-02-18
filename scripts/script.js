const homeStartBtn = document.getElementById('home-start-btn');
const playgroundSection = document.getElementById('playground-section');
const homeSection = document.getElementById('home-section');
const gameOverSection = document.getElementById('game-over');
const finalScore = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again-btn');


homeStartBtn.addEventListener('click', function () {
    homeSection.classList.add('hidden');
    playgroundSection.classList.remove('hidden');
    const displayAlpha = document.getElementById('alphabet');
    displayAlpha.innerText = getRandomAlphabet();
    const key = document.getElementById(displayAlpha.innerHTML.toLowerCase());
    key.classList.add('bg-red-600', "text-white")
})

function increaseScore (){
    let scoreNumber = document.getElementById('score-number');
    scoreNumber.innerText++;
    finalScoreBlock(scoreNumber.innerText)
}

function gameOver (life){
    if(life == 0){
        gameOverSection.classList.remove('hidden');
        playgroundSection.classList.add('hidden');
    }
}

function finalScoreBlock(score){
    finalScore.innerText = score;
}

function decreaseLife(){
    const lifeNumber = document.getElementById('life-number');
    lifeNumber.innerText--;
    gameOver(lifeNumber.innerText);
}

function playAgain(){
    gameOverSection.classList.add('hidden');
    playgroundSection.classList.remove('hidden');
    document.getElementById('score-number').innerText = 0;
    document.getElementById('life-number').innerText = 5;
    // decreaseLife();
    // increaseScore();
}

function handleEventInKeyPress (event){
    const pressedKey = event.key;
    const expectedKey = document.getElementById('alphabet').innerHTML.toLowerCase();
    if(pressedKey === expectedKey){
        const displayAlpha = document.getElementById('alphabet');
        displayAlpha.innerText = getRandomAlphabet();
        const key = document.getElementById(displayAlpha.innerText.toLowerCase());
        key.classList.add('bg-red-600', "text-white");
        const removableKey = pressedKey;
        document.getElementById(removableKey).classList.remove('bg-red-600', 'text-white');
        increaseScore();
    }else{
        decreaseLife();
    }
}

playAgainBtn.addEventListener('click', playAgain)

document.addEventListener('keyup', handleEventInKeyPress);

function getRandomAlphabet() {
    const allAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArray = allAlphabets.split('');

    const randomNumber = Math.round(Math.random() * 25);
    return alphaArray[randomNumber];
}