function preload() {
	sfondo = loadImage("./assets/sfondo.jpg");
	jordan = loadImage("./assets/michael.png")
	basket = loadImage("./assets/basket.png")
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
	
	//imposta sfondo
	backgroundImage(sfondo)
 	 function backgroundImage(img) {
		push();
		translate(width/2,height/2);
		imageMode(CENTER);
		let scale = Math.max(width/img.width,height/img.height);
		image(img,0,0,img.width*scale,img.height*scale)
		pop();}

	//micheal
	
	scale = jordan.height/height

	push()
	imageMode(CENTER)
	translate(width/2, height/2)
	image(jordan, 0, 0, jordan.width/scale, jordan.height/scale)
	pop()

	image(basket, 0, 0, basket.width/scale, basket.height/scale)

	

	
	
	
    
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
  }
  

function draw() {
	// put drawing code here
}
