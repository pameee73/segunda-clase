sketch.js
var x = 0;
var y = 0;
var canvas; 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo");
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background("pink");
  noStroke();
}

function draw() {
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  fill("white");
  textSize(100);
  text("👾",x,y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}