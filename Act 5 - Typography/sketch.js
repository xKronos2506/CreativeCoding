let font; // font variable declaration

function preload() { // function preload for the font
  font = loadFont("Pacifico-Regular.ttf");
}

var points; // variable for the points

function setup() { // setup function for the canvas
  createCanvas(1000, 500);
  stroke(0);
  
  points = font.textToPoints('Bath Spa University', 50, 200, 100, { sampleFactor: 0.20}); // declaring a variable dedicated for the tranformation of the text into points, with adjustable x y and size as well as the amount of the points 

background("cyan"); // bg of the canvas

for (var i = 0; i < points.length; i++) { // for loops to iterate the points 

    var p = points[i]; //declaring the variable for the iteration of the points

    ellipse(p.x, p.y, 5, 5); // shape for the points
  fill(random(255), random(255), random(255)); // setting the color for each shape to random 

  } 
}

