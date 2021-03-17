const canvas = document.getElementById('game')
constctx = canvas.getContext('2d');

let speed = 7;

function drawGame() {
 
    setTimeout(drawGame, 100/speed);
}

drawGame();