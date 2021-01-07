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
    console.log(mouseX, mouseY)

    // first column
    if (mouseX > 0 && mouseX < 99) {
      // row1
      if (mouseY > 0 && mouseY < 99) {
        drawX(50, 50)
      }
      // row 2
      if (mouseY > 101 && mouseY < 199) {
        drawX(50, 150)
      }
      // row 3
      if (mouseY > 201 && mouseY < 299) {
        drawX(50, 250)
      }
    }
    // second column
    if (mouseX > 101 && mouseX < 199) {
      // row1
      if (mouseY > 0 && mouseY < 99) {
        drawX(150, 50)
      }
      // row 2
      if (mouseY > 101 && mouseY < 199) {
        drawX(150, 150)
      }
      // row 3
      if (mouseY > 201 && mouseY < 299) {
        drawX(150, 250)
      }
    }
    // third column
    if (mouseX > 201 && mouseX < 299) {
      // row1
      if (mouseY > 0 && mouseY < 99) {
        drawX(250, 50)
      }
      // row 2
      if (mouseY > 101 && mouseY < 199) {
        drawX(250, 150)
      }
      // row 3
      if (mouseY > 201 && mouseY < 299) {
        drawX(250, 250)
      }
    }

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