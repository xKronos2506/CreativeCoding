function setup() {
  createCanvas(800, 800);
  background(255);
  noLoop();
}

function draw() {
  //alien head drawing
  fill(0, 255, 0);
  noStroke();
  beginShape();
  vertex(400, 300);
  bezierVertex(500, 200, 700, 300, 400, 700);
  bezierVertex(100, 300, 300, 200, 400, 300);
  endShape(CLOSE);

  //left eye drawing
  fill(255);
  beginShape();
  vertex(350, 350);
  bezierVertex(360, 340, 380, 340, 390, 350);
  bezierVertex(380, 360, 360, 360, 350, 350);
  endShape(CLOSE);
  
  //right eye drawing
  fill(255);
  beginShape();
  vertex(450, 350);
  bezierVertex(460, 340, 480, 340, 490, 350);
  bezierVertex(480, 360, 460, 360, 450, 350);
  endShape(CLOSE);

  //left pupil drawing
  fill(0);
  ellipse(370, 350, 10, 10);

  //right pupil drawing
  fill(0);
  ellipse(470, 350, 10, 10);

  // mouth drawing
  fill(255, 0, 0);
  beginShape();
  vertex(370, 450);
  bezierVertex(380, 470, 420, 470, 430, 450);
  bezierVertex(420, 460, 380, 460, 370, 450);
  endShape(CLOSE);
}
