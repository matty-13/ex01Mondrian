function setup() {
  createCanvas(800,784);
  background(236,240,234);
  colorMode(RGB);
  noStroke();
}

function draw() {

//red
noStroke();
fill(238,36,0);
rect(0,0,362,312)

//yellow
noStroke();
fill(251,213,0);
rect(0,514,76,786-516);

//blue
noStroke();
fill(32,30,114);
rect(372,517,608-372,743-517)

//thick strokes
  stroke(3,2,2);
  strokeWeight(12);

//centre vertical
 line(367,0,367,height)

//2
line(81,509,79,height);

line(369,748,613,748);

//thin strokes
 strokeWeight(14)

// 1
line(0,318,width,318);

// 2
line(0,508,width,512);

//3
line(614,511,614,height);
}
//texture

let img;

async function setup () {
img = await loadImage('c:\Users\matil\OneDrive - Instituto Politécnico de Lisboa\Documentos\LAVT\3º ano\1º semestre\Design de Inovação\ex01Mondrian\white-canvas-background\preview.jpg');

texture(img);
}