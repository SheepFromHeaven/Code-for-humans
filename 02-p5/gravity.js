function setup() {
  createCanvas(900, 600);
  background("black");
}

var y = 0;
var velocity = 1;
var dampening = 0;
function draw() {
  background("black");
  ellipse(100, y, 50, 50);
  rect(500, y, 50, 50);

  y = y + velocity;
  velocity++;
  if(y >= height - 25) {
    velocity = -20;
  }
}
