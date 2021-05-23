let img2;
let img22;

function preload() {
  img2 = loadImage('skull.gif');
img22 = loadImage('skull.f.gif');
}
function setup() {
  createCanvas(1320, 810); // canvas size
  background(600);
}

function draw() {
  image(img2, 10,10);
image(img22, 700,10,620,800);
}
