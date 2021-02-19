canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function drawcircle(x, y) {
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.arc(x, y, 20, 0, 360);
  ctx.stroke();
}
drawcircle(100, 100);
canvas.addEventListener("mousedown", circle1);
function circle1(event) {
  console.log(event);
  mouseclickX=event.clientX-canvas.offsetLeft;
  mouseclickY=event.clientY-canvas.offsetTop;
  drawcircle(mouseclickX,mouseclickY);
}
