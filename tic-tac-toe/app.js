function renderPlayground() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.beginPath();
  // first row
  ctx.rect(0, 0, 100, 100);
  ctx.rect(100, 0, 100, 100);
  ctx.rect(200, 0, 100, 100);
  // second row
  ctx.rect(0, 100, 100, 100);
  ctx.rect(100, 100, 100, 100);
  ctx.rect(200, 100, 100, 100);
  // third row
  ctx.rect(0, 200, 100, 100);
  ctx.rect(100, 200, 100, 100);
  ctx.rect(200, 200, 100, 100);

  ctx.stroke();
}