const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d');

let speed = 7;
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;


function drawGame() {

    clearScreen();
    setTimeout(drawGame, 100/speed);
}

const clearScreen = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
};

drawGame();