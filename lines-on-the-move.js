# HW4
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

var shift = 0;

function draw() {
  background(255);

  for (var x = 10; x < 500; x = x + 10) {
    line(x+shift, height/2, x+100+shift, height/2-75);
  }

    shift = shift + 2;
 
 if(shift > width)
  shift = 0;
}
