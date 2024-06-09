var table; // declaring the variable for the table
var place = []; // placement array
var songName = []; // song name array
var colors = [
  "#e61515",
  "#dcf70f",
  "#0ff70f",
  "#187a9e",
  "#db12e6"
]; // array for the colors

function preload() { // function preload for loading the excel sheet
  table = loadTable("songs.csv", "csv", "header");
}

function setup() { // function setup for creating the canvas, as well as setting the variables for the headers for the graph
  createCanvas(windowWidth, windowHeight); // canvas with window width and height
  place = table.getColumn("Streams: ");
  songName = table.getColumn("Song name: ");
  
}

function draw() { // function draw in creating the graph and text
	background(255);
  fill(0);
	noStroke();
	textSize(50);
  text("Top 5 Travis Scott songs, in billions", width/6, height/6);
  translate(width/3,height/4);
	
	//for loop on the ranking placement 
	for (var i = 0; i<place.length; i++){
		var mappedData = map(place[i],
											 min(place), 
											 max(place),100,400);
		fill(colors[i % colors.length]);
		rect(0,i*70, mappedData,45); 
		
	//Interaction - reveal ranked placement alongside the bars
		if (mouseY > 120 && mouseX > 260){
		fill(0);
		textSize(12);
		text(place[i],mappedData+10,(i*70)+20);}
		push();
		
		//songs label for the songs
		translate(-100,0);
    fill(0);
		textSize(16);
		textAlign(RIGHT);
	  text(songName[i],70,(i*70)+25);
		pop();
	}
}
