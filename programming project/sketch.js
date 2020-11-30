//declare and initialize global variables named x, y, d, and h
let x = 200;
let y = 200;
let d = 200;
let h = 100;

function setup() {
  //create a canvas 400px by 400px
  createCanvas(400, 400);
  
}

function draw() {
  //drawing a grey background
  background(220);
  
  if (dist(mouseX, mouseY, x, y) < d/2){
    //set fill to green
    fill(0,255,0);
  }
  else{
    console.log("the cursor is not over the circle");
    fill(139, 69, 13);
  }
  //draw frog head
  ellipse(x,y,d,h);
  

  //draw frog eyes
  ellipse(150, 150, 50, 50);
  ellipse(250, 150, 50, 50);
  
  //draw frog eyeballs and set fill to white
  fill(255);
  ellipse(150, 150, 40, 40);
  ellipse(250, 150, 40, 40);
  
  //draw frog iris and set fill to black
  fill(0);
  ellipse(150, 150, 30, 30);
  ellipse(250, 150, 30, 30);
  
  //draw frog eye flare and set fill to white
  fill(255);
  ellipse(146, 146, 15, 15);
  ellipse(246, 146, 15, 15);
  
  //draw frog nostrils and set fill to black
  fill(0);
  ellipse(x-15,y, 5, 5);
  ellipse(x+15,y, 5, 5);
  
  //draw smile
  noFill()
  arc(width/2, 1.5 * width /3, 180, 80, 0, PI)
  
}