let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
ctx.beginPath();

// mouse coordinates
let mouseX, mouseY;

// listens for click and drax x at given coordinates
canvas.addEventListener("mouseup", mouseUp, false);

function drawX(x, y) {
    ctx.moveTo(x - 20, y - 20);
    ctx.lineTo(x + 20, y + 20);
    ctx.stroke();

    ctx.moveTo(x + 20, y - 20);
    ctx.lineTo(x - 20, y + 20);
    ctx.stroke();
}

function mouseUp(e) {
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    console.log(e.pageX, e.pageY)

    drawX(mouseX, mouseY);
}


function renderBoard() {
  ctx.moveTo(100, 0);
  ctx.lineTo(100, 300);
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 300);
  ctx.moveTo(0, 100);
  ctx.lineTo(300, 100);
  ctx.moveTo(0, 200);
  ctx.lineTo(300, 200);
  ctx.stroke();
}