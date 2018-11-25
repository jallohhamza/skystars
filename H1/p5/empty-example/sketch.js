var stars=100;

function setup() {
  // put setup code here
  createCanvas(600,700);
}

function draw() {
  // put drawing code here
  background("#003366");
  //fill("#ADD8E6");//light blue
  stroke(255);
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random (0,width),random(0,height));
  // percentage RGB notation
    
	//fill('rgba(0,255,0, 0.25)');
	ellipse(300,300,stars,stars);
	var r = map(mouseX, 0, width, 50, 255); // red;
	var g = map(mouseY, 0, height, 50, 255); // green
	var b = 0; // blue
	fill(r, g, b);
	ellipse(mouseX, mouseY, 25);
	
	//textSize(50);
	
    textFont("Georgia");
	textAlign("center");
	noStroke();
	var t= text("Please move the cursor in order to change the color and please click to increase to cercle",width/2,650);
	var tSize = 15;
	textSize(tSize)
	text(t)
  
  
}
function mousePressed() {
	
	stars= stars+50; 
	if (stars>= 600) {
		stars=0;
	
    }

	  
	
}
