const homeStartBtn = document.getElementById('home-start-btn');
const playgroundSection = document.getElementById('playground-section');
const homeSection = document.getElementById('home-section')


homeStartBtn.addEventListener('click', function () {
    homeSection.classList.add('hidden');
    playgroundSection.classList.remove('hidden');
    const displayAlpha = document.getElementById('alphabet');
    displayAlpha.innerText = getRandomAlphabet();
    const key = document.getElementById(displayAlpha.innerHTML.toLowerCase());
    key.classList.add('bg-red-600', "text-white")
})

function getRandomAlphabet() {
    const allAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArray = allAlphabets.split('');

    const randomNumber = Math.round(Math.random() * 25);
    return alphaArray[randomNumber];
}