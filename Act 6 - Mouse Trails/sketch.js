// function setup canvas, with the background to black
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // if statement to whenever the mouse is pressed
  if (mouseIsPressed) {
    // setting a let variable for a random color everytime the mouseIsPressed function is activated
    let randomColor = color(random(255), random(255), random(255));
    // sets the stroke color according to the let variable
    stroke(randomColor);
    // setting a let variable the randomizes the size of the stroke
    let randomSize = random(1, 50);
    //assigns the strokeweight to the randomSize variable
    strokeWeight(randomSize);
    // sets the stroke in the pointer area of the mouse
    translate(mouseX, mouseY);
    // draws the point in its new place
    point(0, 0);
  }
}
