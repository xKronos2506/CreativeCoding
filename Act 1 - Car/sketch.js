//function setup for creating the canvas

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // body shape
  fill(255, 0, 0);
  rect(100, 200, 200, 100);
  
  // windows shape
  fill(0);
  rect(120, 220, 50, 40);
  rect(230, 220, 50, 40);
  
  // wheels shape
  fill(0);
  ellipse(130, 310, 50, 50);
  ellipse(270, 310, 50, 50);


}
