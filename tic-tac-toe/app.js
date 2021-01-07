function test() {
  alert('tst')
}

renderBoard = () => {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
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
