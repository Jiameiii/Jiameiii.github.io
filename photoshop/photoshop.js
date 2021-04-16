var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var ima7;
var initials ='jl'; // your initials
var choice = '0'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61 ; // last screenshot never taken


function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
  img1 = loadImage('giphy.gif');
  img2 = loadImage('yes.gif');
  img3 = loadImage('nah.gif');
  img4 = loadImage('maskon.gif');
  img5 = loadImage('washhand.gif');
  img6 = loadImage('thumbsup.gif');
  img7 = loadImage('explosion.gif');
  img8 = loadImage('star.gif');
}

function setup() {
createCanvas(1300, 900);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
  image(img1, mouseX-200, mouseY-200,200,200);
    
  } else if (toolChoice == '2') { // second tool
  image(img2, mouseX-190, mouseY-140,200,200);
   
  } else if (toolChoice == '3') { // third tool
  image(img3, mouseX-190, mouseY-140,200,200);
  
  } else if (toolChoice == '4') {
  image(img4, mouseX-180, mouseY-170,200,200);
  
  } else if (key == '5') { // this tool calls a function
  image(img5, mouseX-160, mouseY-150,200,200);
   
   
  } else if (toolChoice == '6') {
  image(img6, mouseX-160, mouseY-150,200,200);
   
  } else if (toolChoice == '7') {
  image(img7, mouseX-160, mouseY-150);
 
  }
  else if (toolChoice == '8') 
  {
 image(img8, mouseX-400, mouseY-200);
 
  } else if (toolChoice == '9') {
    
   fill(0,0,0,127);
    stroke(0,0);
    ellipse(mouseX, mouseY, 20,20);
    
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    circle(mouseX-100, mouseY-70, 200, 150);
  
  } else if (toolChoice == 'l' || toolChoice == 'L') { // g places the image we pre-loaded
    image(img, mouseX-180, mouseY-140);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'c' || key == 'C') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 's' || key == 'S') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
