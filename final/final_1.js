let img;
let img1;
let img2;
let img3;
function preload() {
  img = loadImage('photo/moon.gif');
  img1 = loadImage('photo/flower.gif');
  img2 = loadImage('photo/skull.gif');
  img3 = loadImage('photo/stoicism.gif');
}
function setup() {
  createCanvas(2000, 2000);  // canvas size
  background(600);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
}

function draw() {
    image(img, 10, 10,620,800);
  image(img1, 700, 10, 620,800 );
  image(img2, 10,900);
  image(img3, 700, 900);
}
