
let xspacing = 10; // Distance between each horizontal location
let w; // Width of entire wave
let amplitude = 75.0; // Height of wave
let period = 1000.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let xi = 0;
let i = 0;
let triangleWave = (x) => ((Math.pow(Math.cos(1), -1)) * Math.cos(x * 2))/2

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  w = windowWidth + 20;
  dx = (PI * 2 / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  frameRate(60);
}

function calcWave() {
  // For every x value, calculate a y value with sine function
  let x = 0;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = triangleWave(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  const x = Math.floor(random(10));
  fill( random(255) , random(255), random(255));
  amplitude = random(100);
  for (let x = 0; x < yvalues.length; x++) {
    ellipse( (windowWidth / 2 * -1) + (x * xspacing), yvalues[x], 80, 80);
  }
}

const xpos = () => (windowWidth / 2 * -1) + (xi * xspacing)
const ypos = () => triangleWave(i * 2)

function draw() {
  background(0);
  //calcWave();
  // rotateY(millis() / 10000);
  //renderWave();

  if(xpos() > windowWidth / 2){
    xi = 0
    i = 0 
  } else {
    i++;
    xi++;
  }
  ellipse(xpos(), ypos() * 200, 80, 80);
}
