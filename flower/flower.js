let img;
let img2;
let img22;

function preload() {
  img1 = loadImage('flower.gif');
img11 = loadImage('flower.f.gif');
}
function setup() {
  createCanvas(2800, 1800); // canvas size
  background(600);
}

function draw() {
  image(img1,10, 10,620,800);
image(img11,700, 10, 620,800);
}
