//variable declaration for the following variables needed

let bird; // declare for the bird function
let pipes = []; // array variable to store data for the pipes (obstacles)
let score = 0; // the score variable
let gameState = 0; // variable to declare what the number equivalent for the screen to show (0 for menu, 1 for the in-game progress, 2 for game over)
let bg; // variable to store background image

function preload() {
  bg = loadImage('forest.jpeg'); // load the background image
}

function setup() { // setup function to load the canvas, along the variable for the bird and the pipe
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() { // draw function to write the whole proccess of the game
  background(bg); // display the background image

  if (gameState === 0) {// if state for showing the menu ui on what part of the game is it for the user (0 is for main menu)
    textSize(32);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Flappy Bird", width / 2, height / 3);
    textSize(18);
    text("Press space to start", width / 2, height / 2);
    if (keyIsPressed && keyCode === 32) { // if statement for the controls for teh whole game, as well as reloading the following variables to render and start the process
      gameState = 1;
      score = 0;
      pipes = [];
      pipes.push(new Pipe());
    }
  } else if (gameState === 1) { /*if state for showing the menu ui on what part of the game is it for the user (0 is for main menu)*/
    for (let i = pipes.length - 1; i >= 0; i--) { // for variable to render the pipes once the game starts
      pipes[i].show(); 
      pipes[i].update();
      

      if (pipes[i].hits(bird)) { // if statements for when the bird hits the obstacle, the game directs to the game over screen
        gameState = 2;
      }

      if (pipes[i].offscreen()) { // if statement to remove the pipe object when the screen passes it by. 
        pipes.splice(i, 1);
      }
    }

    bird.update(); //function to update the bird's position
    bird.show(); // function to 

    if (frameCount % 150 === 0) { // if statement for adding the pipes constantly according to the framecount  
      pipes.push(new Pipe());
    }
    // for loop for the rendering of the pipes, along with the score iteration each time the bird passess by on the pipe
    for (let i = pipes.length - 1; i >= 0; i--) {
      if (pipes[i].x + pipes[i].w < bird.x) {
        score += 1;
      }
    }
    textSize(32);
    fill(255);
    text(score, width / 2, 50);
  } else if (gameState === 2) { // else if statement for the game over menu screen
    textSize(32);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 3);
    text("Score: " + score, width / 2, height / 2);
    textSize(18);
    text("Press space to restart", width / 2, height * 2 / 3);
    if (keyIsPressed && keyCode === 32) {
      gameState = 0;
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    bird.up();
  }
}

class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
    this.iconSize = 32;
  }

  show() {
    fill(255, 205, 0); // Yellow color for bird
    ellipse(this.x, this.y, this.iconSize, this.iconSize); // circle to demonstrate the bird
  }

  up() { // the function for the ability to make the bird go up
    this.velocity += this.lift; //increment for the velocity of the bird and the lift of the bird
  }

  update() { // the function to update the birds position to each time the space key is pressed to float the bird
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

class Pipe { // pipe class declaration (for the obstacle)
  constructor() { // a constructor function to settle following variables designated in designing, arranging and rendering the pipes
    this.spacing = 175;
    this.top = random(height / 6, 3 / 4 * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = 3;
  }

  hits(bird) { // function statement with an if statement for when the bird hits on the pipe with a specific placement or part of the obstacle of which the hit is registered
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true; // this return signifies that if the whole proccess met the criteria, then it can be labeled as game over
      }
    }
    return false; // this part of the return works part of the else statement
  }

  show() { // function statement for the whole object of the bird
    fill(0, 255, 0); // color for the pipes
    rect(this.x, 0, this.w, this.top); // shape for the pipe on the top
    rect(this.x, height - this.bottom, this.w, this.bottom);
  } // shape for the pipe on the bottom

  update() { // function statement for updating the constant position for the bird object each time it is being commanded to move up
    this.x -= this.speed;
  }

  offscreen() { // function statement for a check of which the object has moved out of the screen width
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
