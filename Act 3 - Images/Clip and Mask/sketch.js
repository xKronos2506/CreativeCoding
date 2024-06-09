let advent; // variable declaration for the background

function preload() { // function preload for the image
  advent = loadImage('adventure.jpg');
}

function setup() { // create canvas
  createCanvas(500, 300);
}

function draw() { // set background
  background(255);

  
  advent.resize(500, 300); // resizing the image variable
  let layerOne = createGraphics(500, 300); // creating a graphics for layering
  layerOne.circle(250, 150, 200); // adding a layer of a shape to the bg image
  advent.mask(layerOne); //masking the layered graphic to the image
  image(advent, 0, 0); //setting the image

}

