/* load image */
var img;
function preload() { // function preload for loading the image
  img = loadImage("sunset.jpg");
}

// function setup to create background, canvas and removing stroke 
function setup() {
  createCanvas(1600, 1067);
  background(0);
  noStroke();
  
}

function draw() { // draw function to declare the following variables a
  background(0);
  x = mouseX;
  y = mouseY;
  image(img,0,0); //declaring the image function to be set
  var c = get(x,y); // variable declaration for gathering the pixel to which the mouse hovers on
  fill(c); //sets the c variable to fill to show magnification on the part where the mouse hovers
  ellipse(x,y,100,100); // setting the shape for the pointer
  
}