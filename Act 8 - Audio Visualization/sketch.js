// var declaration of fft and song variable
var fft, song; 
//variable declaration for the song playing as false boolean once the code runs
var isPlaying = false;

let bar = 64*2; // Number of bars

// Bar width, height, and space
let barWidth, barHeight;
let barSpace = 1;


function preload() { // preload function for the sound
  song = loadSound('travis_scott.mp3'); 
}

function setup() { // setup function
  createCanvas(windowWidth, windowHeight); // window width and height for the canvas
  background(0); // set the canvas to black
  fft = new p5.FFT(); //loads the fft preset to the code
  
  // Calculate bar width
  barWidth = width / bar - barSpace;
}

function draw() { // draw function
  background(0); // sets the bar background to black, in order to optimize the fft function
  
  if (isPlaying) { // if statement to whenever the song is playing, the fft conversion processes and translates the sound into data through
    var spectrum = fft.analyze();
    noStroke();
    noFill();
    beginShape();
    for (let i = 0; i < bar; i++) {
      barHeight = map(spectrum[i], 0, 255, 0, height);
      fill(lerpColor(color('red'), color('green'), i / bar));
      rect(i * (barWidth + barSpace), height - barHeight, barWidth, barHeight);
    }
    endShape();
  }
}

function mousePressed() { // function preload for when the mouse is pressed, the audio plays
  if (song.isPlaying()) {
    song.stop();
    isPlaying = false;
  } else {
    song.play();
    isPlaying = true;
  }
}
