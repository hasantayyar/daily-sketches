function colorGenerator() {
  var r = () => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]
  return '#' + (new Array(6)).fill(0).map( () => r()).join('')
}

const symbols = []
var start = 0x2729
var end = 0x274A
while(start <= end ) {
  symbols.push(String.fromCharCode(start))
  start++
}

const randomSymbol = () => symbols[Math.floor(random(symbols.length))]

function setText(t) {
  var element = document.querySelector('p')
  element.innerHTML = t
  element.style.color = colorGenerator()
}

let font, fontsize = 22;

function preload() {
  font = loadFont('fonts/ArialUnicode.ttf');
}

let triangleWave = (x) => ((Math.pow(Math.cos(1), -1)) * Math.cos(x * 2))/2

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  textFont(font)
  textSize(fontsize)
}

function renderSymbolWave() {
  noStroke()
  background(0);

  // Set the gap between letters and the left and top margin
  let margin = 10;
  translate(margin * 4, margin * 4);

  let i = windowWidth / 2 * (-1)
  while(i < 1000) {
    fill( random(255) , random(255), random(255))
    text(randomSymbol(), i * 10, triangleWave(i) * 100)
    i++
  }
}

function draw() {
  background(0)
  // rotateY(millis() / 10000)
  frameRate(10)
  renderSymbolWave()
}


// boot()