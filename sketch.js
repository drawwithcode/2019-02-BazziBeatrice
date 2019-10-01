let xoff = 0.0;
let xincrement = 0.1;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);


  let c = map(mouseX, 0, width, 0, 100);

  let d = map(mouseX, 0, width, 50, 350);

  for (var a = 0; a < windowWidth; a+=100){
      for (var b = 0; b < windowHeight; b+=100){
        fill(0, c, a);
        ellipse(a, b, d, d);
      }
  }

  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);

  fill(255);
  stroke(255);
  ellipse(x, y, 50, 50);

  textSize(16);
  textAlign(CENTER);
  text('Follow your dot', x + 100, y - 50);
  }
