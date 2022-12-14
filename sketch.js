let jordanX;
let jordanY;
let maloneX;
let maloneY
let scale;
let initialscale;

function preload() {
	sfondo = loadImage("./assets/Sfondo.jpg");
	jordan = loadImage("./assets/Michael.png")
	dunk = loadImage("./assets/basket_dunk.png")
	basket = loadImage("./assets/Basket.png")
	malone = loadImage("./assets/Malone.png")
	
	crowd =loadSound("./assets/crowd.mp3")
	piano =loadSound("./assets/basket.mp3")
	loud =loadSound("./assets/loud.mp3")
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	jordanX = width/2
	jordanY = height/2

	maloneX = 0;
	maloneY = 0;

	initialscale = height/jordan.height
	scale = initialscale*1.1

	analyzer = new p5.Amplitude();
  	analyzer.setInput(crowd);
	crowd.loop(); 

	textFont("Bebas Neue")
	fill(255)
	
	
}

function draw() {
	//imposta sfondo
	backgroundImage(sfondo)
 	 function backgroundImage(img) {
		push();
		translate(width/2,height/2);
		imageMode(CENTER);
		let scale = Math.max(width/img.width,height/img.height);
		image(img,0,0,img.width*scale,img.height*scale)
		pop();}

	//scritta
	
	
	
	
	
	textSize(height)
	textAlign(CENTER, CENTER)
	text("JUMP", width/2, height/2);
	

	
	textSize(height/20);
	textAlign(RIGHT, BASELINE);
	text("use arrows or click and drag mike to the basket", width-50, height-50);
	

	//micheal e basket

	if (keyIsDown(LEFT_ARROW)) {
		jordanX -= 3;
	  }
	
	  if (keyIsDown(RIGHT_ARROW)) {
		jordanX += 3;
	  }
	
	  if (keyIsDown(UP_ARROW)) {
		jordanY -= 3;
	  }
	
	  if (keyIsDown(DOWN_ARROW)) {
		jordanY += 3;
	  }
	
	
	
	if (jordanX < width/4) {

		image(dunk, 0, 0, basket.width*scale, basket.height*scale)
		

		if (piano.isPlaying() === false){piano.play();}
		if (loud.isPlaying() === false){loud.play();}

	} else {

		push()
			imageMode(CENTER)
			translate(jordanX, jordanY)
			image(jordan, 0, 0, jordan.width*scale, jordan.height*scale)
		pop()

		image(basket, 0, 0, basket.width*scale, basket.height*scale)

		}

	image(malone, maloneX, maloneY, malone.width*scale, malone.height*scale)
	
	
	let scaleratio = map(jordanX, width, 0, 1, 1.5)
	scale = initialscale*scaleratio	

	maloneY = map(jordanX, width, 0, 200, -100)

}

function mouseDragged() {
	jordanX = mouseX;
	jordanY = mouseY;
	
	

	
}



  


