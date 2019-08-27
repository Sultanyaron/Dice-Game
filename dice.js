const numberChoicesImg = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

const player1ImgEle = document.querySelector('#player1');
const player2ImgEle = document.querySelector('#player2');
const h1Ele = document.querySelector('.container h1');

function getRandomIndex() {
    return Math.floor(Math.random() * 6);
}
let player1Index = getRandomIndex();
let player2Index = getRandomIndex();
player1ImgEle.setAttribute('src', numberChoicesImg[player1Index]);
player2ImgEle.setAttribute('src', numberChoicesImg[player2Index]);

if (player1Index > player2Index) {
    h1Ele.innerHTML = '🚩Player 1 Wins';
} else if (player2Index > player1Index) {
    h1Ele.innerHTML = 'Player 2 Wins🚩';
} else {
    h1Ele.innerHTML = 'Draw';
}