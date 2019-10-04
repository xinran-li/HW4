# HW4
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 400, 300, 100);
}

function draw() {
  background(255);
  colorMode(HSB, 500, 300, 100);

  
  for (var x = 10; x < width-10; x = x + 10) {
   stroke(x, x, 100);
   line(x, height/2, mouseX, mouseY);
  }
}
