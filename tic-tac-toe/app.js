let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
ctx.lineWidth = 2;

// draws board -> # when page loads
function renderBoard() {
  ctx.beginPath();
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

let board = {
  s1: "", s2: "", s3: "",
  s4: "", s5: "", s6: "",
  s7: "", s8: "", s9: ""
}

// listens for click and calls mouseUp() which
// will determine the coordinates of x on screen
canvas.addEventListener("mouseup", mouseUp, false);

function drawX(x, y) {
  ctx.beginPath();
  // line 1
  ctx.moveTo(x - 35, y - 35);
  ctx.lineTo(x + 35, y + 35);
  ctx.stroke();

  // line 2 (striking over line 1)
  ctx.moveTo(x + 35, y - 35);
  ctx.lineTo(x - 35, y + 35);
  ctx.stroke();
}

// takes mouse clicks coordinates and determines
// coordinates for x based on region clicked
function mouseUp(e) {
  // mouse coordinates
  let mouseX, mouseY;
  // offsetting coordinates on page
  // to proper coordinates within canvas
  mouseX = e.pageX - canvas.offsetLeft;
  mouseY = e.pageY - canvas.offsetTop;
  console.log(mouseX, mouseY)

  // first column
  if (mouseX > 0 && mouseX < 99) {
    // row1 (s1)
    if (mouseY > 0 && mouseY < 99) {
      if (board.s1 === "") {
        board.s1 = "x";
        drawX(50, 50)
      }
      console.log(board)
    }
    // row 2 (s4)
    if (mouseY > 101 && mouseY < 199) {
      if (board.s4 === "") {
        board.s4 = "x";
        drawX(50, 150)
      }
      console.log(board)
    }
    // row 3 (s7)
    if (mouseY > 201 && mouseY < 299) {
      if (board.s7 === "") {
        board.s7 = "x";
        drawX(50, 250)
      }
      console.log(board)
    }
  }
  // second column
  if (mouseX > 101 && mouseX < 199) {
    // row1 (s2)
    if (mouseY > 0 && mouseY < 99) {
      if (board.s2 === "") {
        board.s2 = "x";
        drawX(150, 50)
      }
      console.log(board)
    }
    // row 2 (s5)
    if (mouseY > 101 && mouseY < 199) {
      if (board.s5 === "") {
        board.s5 = "x";
        drawX(150, 150)
      }
      console.log(board)
    }
    // row 3 (s8)
    if (mouseY > 201 && mouseY < 299) {
      if (board.s8 === "") {
        board.s8 = "x";
        drawX(150, 250)
      }
      console.log(board)
    }
  }
  // third column
  if (mouseX > 201 && mouseX < 299) {
    // row1 (s3)
    if (mouseY > 0 && mouseY < 99) {
      if (board.s3 === "") {
        board.s3 = "x";
        drawX(250, 50)
      }
      console.log(board)
    }
    // row 2 (s6)
    if (mouseY > 101 && mouseY < 199) {
      if (board.s6 === "") {
        board.s6 = "x";
        drawX(250, 150)
      }
      console.log(board)
    }
    // row 3 (s9)
    if (mouseY > 201 && mouseY < 299) {
      if (board.s9 === "") {
        board.s9 = "x";
        drawX(250, 250)
      }
      console.log(board)
    }
  }
  // Check score after every click
  scoreChecker()

}

function scoreChecker(){
  let keys = Object.keys(board);
  let won = false;
  // check columns
  let columnsMarked = 0;
  let column = 1;
  while (column < 4) {
    columnChecker(column, columnsMarked)
    column++;
  }
  // check rows
  // check diagnals


}


// scoreChecker helper functions
function columnChecker(spaceNum, marked) {
  if (spaceNum > 9) { return; }

  if (board[`s${spaceNum}`] === 'x') {
    marked++;
    if (marked === 3) {
      alert('You\'ve Won!');
      won = true;
    }
    columnChecker(spaceNum + 3, marked)
  }
}