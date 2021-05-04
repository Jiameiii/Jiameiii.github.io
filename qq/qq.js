function setup() {
  createCanvas(300, 400);
}

function draw() {
  var t = second();
  var Millis = millis();
  var s = millis()/1000;
  background(255,228,181);

   //face*
  strokeCap(ROUND);
  
  //inner face
  fill(253,245,230);
  rect(85,200,230,55);
  //stroke of the entire face
  stroke(0);
  strokeWeight(8);
  
  //botton half of the face
  bezier(95,250,120,330,280,330,300,250);
 
  //blush
  noStroke();
  fill(255,99,71,50);
  ellipse(115,268,25,12);
  ellipse(285,268,25,12);
  stroke(139,69,19);
 
  //eye
  if (mouseIsPressed) {
    close();
  } else {
    eye(mouseX,mouseY);
  }
  
  //hair*
  //top half of hair/and band
  a=-10;
  fill(66, 35, 35);
  stroke(0);
  arc(200,200,270,280,PI,0);
   
  
  //under hair shadow face
  noStroke();
  fill(255,218,198);
  triangle(150,160,80,200,170,200);
  triangle(240,180,220,200,270,200);
  
  //white area of face 
  fill(66, 35, 35);
  triangle(210,240,160,150,220,150);
  triangle(227,226,180,189,240,180);
  triangle(95,260,60,210,105,160);
  triangle(74,210,40,210,78,155);
  triangle(78,155,40,160,95,125);
  triangle(308,262,298,200,340,200);
  triangle(298,200,285,270,310,240);
  triangle(325,200,350,213,325,160);
 
  //botton hair of the head
  stroke(0);
  bezier(160,155+a,155,196,180,235,210,240);
  line(210,240,208,213);
  line(208,213,227,226);
  line(227,226,232,180);
  arc(286,180+a,112,100,0.9*HALF_PI, PI);
  arc(100,155+a,120,130,0,HALF_PI);
  bezier(100,190,95,230,98,240,102,260);
  bezier(78,240,85,250,94,255,102,260);
  bezier(60,200,62,210,60,240,85,255);
  bezier(295,200,300,230,288,250,282,264);
  bezier(282,264,290,262,300,260,310,245);
  line(310,245,308,262);
  bezier(308,262,325,250,340,225,340,200);
  bezier(65,200,56,205,48,212,42,210);
  line(42,210,69,160);
  bezier(65,160,58,162,49,165,43,160);
  line(43,160,89,124);
  bezier(335,200,344,205,352,212,353,210);
  line(353,210,330,160);
  
  //pony tail*
//ellipse(95, 350, 50, 150);
//ellipse(305, 350, 50, 150);
  //right pony tail
  arc(305, 355,50,150,PI,TWO_PI+HALF_PI);
  noStroke();
  rect(283,352,39,44);
  stroke(0);
  bezier(305,430,301,425,302,415,301,388);
  bezier(300,390,290,420,280,400,280,352);
   //left pony tail
  //arc(95,250,50,150,0,TWO_PI+HALF_PI,PI);
  arc(95, 355,50,150,PI,TWO_PI+HALF_PI);
  noStroke();
  rect(74, 350,39,42);
  stroke(0);
  bezier(95,430,89,425,99,415,91,388);
  bezier(90,390,80,420,70,400,70,352);
  
  fill('#eabf9f');
  ellipse(93, 270, 20, 20);
  ellipse(305, 270, 20, 20);


  //hair highlight 
  noStroke();
  fill(255);
  ellipse(95,150,20,20);
  ellipse(108,162,8,8);
  
  
  elli(mouseX,mouseY,40,3,s+0.3*PI);
}   
//mouse (circle)
function elli(x,y,d,w,s)
{
  t=s%PI;
  noFill();
  stroke(255);
  strokeWeight(w);
  //ellipse(x,y,d,d);
  for(i=0;i<20;i+=2){
    strokeCap(PROJECT);
    arc(x,y,d,d,t*0.1*PI*(i),t*0.1*PI*(i+1));
  }
}
    
    
function eye(x,y)
  {
  if(x<=400)
    tx=x/400*15;
  else
    tx=15;
 if(y<=400)
   ty=y/400*30;
 else
  ty=30;

  //eye shadow 
  noStroke();
  fill(255,248,244);
  arc(130,205,50,120,0,PI);
  arc(270,205,50,120,0,PI);
  fill(0,0,0,20);
  rect(105,205,50,20);
  rect(245,205,50,20);
  
 //color of the eye ball
  fill(0);
  rect(105+tx,205,30,45);
  rect(245+tx,205,30,45);
  
//line of the eye
  stroke(0);
  line(105,205,155,205);
  line(105+tx,205,105+tx,250);
  line(135+tx,205,135+tx,250);
  arc(120+tx,250,30,30,0,PI);
  
  //right eye
  line(295,205,245,205);
  line(275+tx,205,275+tx,250);
  line(245+tx,205,245+tx,250);
  arc(260+tx,250,30,30,0,PI);
  
  //stroke of the eyeball
  noStroke();
  fill(255,255,255,50);
  ellipse(120+tx,250,20,20);
  ellipse(260+tx,250,20,20);
  
  //small ellipse(highlight of the eye)
  fill(255);
  ellipse(135+tx,215+ty,14,8);
  ellipse(275+tx,215+ty,14,8);
  stroke(139,69,19); 
  
  
  //mouth
  stroke(0);
  line(195,280,205,280);
}

  //closed face
function close()
{
  stroke(8);
  line(115,220,165,240);
  line(115,260,165,240);
  line(285,220,235,240);
  line(235,240,285,260);
  noFill();
  strokeWeight(8);
  arc(200,285,20,14,PI,0);
  strokeWeight(8);
}
