function setup() {
  createCanvas(800, 800);
  background(255);
  noLoop(); // from looping
}

function draw() { // function draw to declare let variables needed for the grifd
  let cols = 10;
  let rows = 10;
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  for (let i = 0; i < cols; i++) { // for loop to iterate the whole grid and its size
    for (let j = 0; j < rows; j++) {
      let x = i * cellWidth;
      let y = j * cellHeight;

      // drawing the shapes needed for the pattern (triangle shapes)
      fill(random(255), random(255), random(255));
      let triangleSize = random(cellWidth / 2, cellWidth);
      let x1 = x + cellWidth / 2;
      let y1 = y + cellHeight / 2 - triangleSize / 2;
      let x2 = x + cellWidth / 2 - triangleSize / 2;
      let y2 = y + cellHeight / 2 + triangleSize / 2;
      let x3 = x + cellWidth / 2 + triangleSize / 2;
      let y3 = y + cellHeight / 2 + triangleSize / 2;
      triangle(x1, y1, x2, y2, x3, y3);
    }
  }
}
