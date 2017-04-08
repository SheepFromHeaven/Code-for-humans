function setup() {
  createCanvas(900, 600);
  background("orange");
}

var active = false;
function draw() {
  noStroke();
  if(active) {
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function mousePressed() {
  active = !active;
}
