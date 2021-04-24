var ballx= 300;
var bally = 300;
var ballSize = 5;
var ball2x= 300;
var ball2y = 300;
var ball2Size = 100;
var score = 0;
var gameState = "L1";
var img;
var img2;

function preload(){
  img = loadImage('virus.png');
  img2 = loadImage('virus.png');
}

function setup() {
createCanvas(600,600);
textAlign(CENTER);
textSize(20);
}//end setup

function draw() {
  fill(52, 73, 94);
  background(220);
  if(gameState =="L1"){
  levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
   if(gameState == "L3"){
    levelThree();
  } 
  if(gameState == "L4"){
    levelFour();
  } 
  if(gameState == "L5"){
    levelFive();
  } 
  if(gameState == "L6"){
    levelSix();
  } 
  if(gameState == "L7"){
    level7();
  } 
text(("Score:"+score),width/2,40);
}//end draw

function levelOne()
{
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX,mouseY);
  if (distToBall<ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +1;
    ballSize = ballSize +10;
  }
  if(score>10){
    gameState = "L2";
  }
  line(ballx,bally,mouseX,mouseY);
  image (img,ballx-2,bally-2,ballSize,ballSize);
}//end level one =================================

function levelTwo(){
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX,mouseY);
  if (distToBall<ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +1;
    ballSize = ballSize +10;
  }
  if(score>20){
   gameState = "L3";
  }
  image (img,ballx-80,bally-80,ballSize,ballSize);
}//end level Two =================================

function levelThree(){
  fill(250);
  text("Level 3", width/2, height-20);
  background (random(255,0,0,60));
  
  var distToBall = dist(ballx, bally, mouseX,mouseY);

  if (distToBall<ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +1;
    ballSize = ballSize +10;
  }
  if(score>30){
      gameState = "L4";
  }
  image (img,ballx-80,bally-80,ballSize,ballSize);
}//end level Three =================================

function levelFour(){
    fill(250);
    text("Level 4", width/2, height-20);
      background (random(255,0,0,60));
       
  var distToBall = dist(ballx, bally, mouseX,mouseY);
  var distToBall2 = dist(ball2x,ball2y,mouseX,mouseY);

  if (distToBall<ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +1;
    ballSize = ballSize -2;
  }
  if(distToBall2 <ball2Size) {
   ball2x=random(width);
   ball2y=random(height); 
   score = score +1; 
  }
  if(score>40){
   gameState = "L5";
  }
  image (img,ballx-50,bally-50,ballSize,ballSize);
  image (img2,ball2x-50,ball2y-50,ball2Size,ball2Size);
}//end level Four =================================

function levelFive(){
    fill(250);
   text("Level 5", width/2, height-20);
   background (random(255,0,0,60)); 
  var distToBall = dist(ballx, bally, mouseX,mouseY);
  var distToBall2 = dist(ball2x,ball2y,mouseX,mouseY);

  if (distToBall<ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +1;
    ballSize = ballSize -1;
  }
  if(distToBall2 <ball2Size) {
   ball2x=random(width);
   ball2y=random(height); 
   score = score +1; 
  }
  if(score>50){
   gameState = "L6";
  }
  image (img,ballx-50,bally-50,ballSize,ballSize);
   image (img2,ball2x-50,ball2y-50,ball2Size,ball2Size);
}//end level Five =================================

function levelSix(){
   text("Level ∞", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX,mouseY);
  if (distToBall<ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score +1;
   ballSize = ballSize-5;
  }
  if(score>100){
   gameState = "L7";
  }
 // line(ballx, bally, mouseX, mouseY);
  image (img,ballx-50,bally-50,ballSize,ballSize);
}//end level Six =================================

function level7(){
    stroke(50);
   text("End", width-300, height-300);
    score = score +1;
      if(score>99){
      }
  }
//end level Six =================================
