// image variable 
var img;
function preload() { // function preload for loading the image
img = loadImage("sunset.jpg");
}

// function setup for creating the canvas and the backgroun
function setup () {
createCanvas (800, 800);
background(0);
}

// function draw for setting the background, placing the image as well as a variable declaration with a filter 
function draw() {
background(0);
image(img, 0, 0);
var v = map(mouseX, 0, width, 2, 20);
filter(POSTERIZE, v);

}
