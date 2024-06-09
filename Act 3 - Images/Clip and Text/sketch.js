let img;
let layerOne;

function preload() {
  advent = loadImage('adventure.jpg');
}
function setup(){
  createCanvas(1000, 1000);
  //creating a graphics layer for the content to layer
  layerOne = createGraphics(width,height);
  layerOne.textSize(150);
  layerOne.textAlign(CENTER,CENTER);
  layerOne.text('Adventure',width/2,height/2);
  layerOne.text('Time',500, 750);
  //masking the outline layer with the image uploaded
  advent.mask(layerOne);
}
function draw(){
  //background color and declaring image
  background(0, 255, 255);
  image(advent,0,0,width,height);

}