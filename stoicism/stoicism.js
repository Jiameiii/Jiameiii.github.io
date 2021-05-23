let img3;
let img33;

function preload() {
  img3 = loadImage('stoicism.gif');
img33 = loadImage('stoicism.f.gif');
}
function setup() {
  createCanvas(1320, 810); // canvas size
  background(600);
}

function draw() {
  image(img3, 10, 10);
image(img33, 700, 10, 620, 800);
}