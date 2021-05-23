
let img;
let imgg;
let img1;
let img11;
let img2;
let img22;
let img3;
let img33;
function preload() {
  img = loadImage('https://github.com/Jiameiii/Jiameiii.github.io/blob/main/final/photo/moon.gif');
imgg = loadImage('https://github.com/Jiameiii/Jiameiii.github.io/blob/main/final/photo/moon.1.gif');
  img1 = loadImage('https://github.com/Jiameiii/Jiameiii.github.io/blob/main/final/photo/flower.gif');
img11 = loadImage('https://github.com/Jiameiii/Jiameiii.github.io/blob/main/final/photo/flower.1.gif');
  img2 = loadImage('https://github.com/Jiameiii/Jiameiii.github.io/blob/main/final/photo/skull.gif');
img22 = loadImage('https://github.com/Jiameiii/Jiameiii.github.io/blob/main/final/photo/skull.1.gif');
  img3 = loadImage('https://github.com/Jiameiii/Jiameiii.github.io/blob/main/final/photo/stoicism.gif');
img33 = loadImage('https://github.com/Jiameiii/Jiameiii.github.io/blob/main/final/photo/stoicism.1.gif');
}
function setup() {
  createCanvas(2800, 1800);  // canvas size
  background(600);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
}

function draw() {
    image(img, 10, 10,620,800);
  image(imgg, 700, 10, 620,800 );
  
  image(img1, 1400, 10, 620,800 );
image(img11, 2100, 10, 620,800 );

  image(img2, 10,900);
image(img22, 700,900,620,800);

  image(img3, 1400, 900);
image(img33, 2100, 900, 620, 800);
}