let img;
let imgg;

function preload() {
  img = loadImage('moon.gif');
imgg = loadImage('moon.f.gif');
}
function setup() {
  createCanvas(2800, 1800); // canvas size
  background(600);
}

function draw() {
    image(img, 10, 10,620,800);
  image(imgg, 700, 10, 620,800);
}
