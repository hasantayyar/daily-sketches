function colorGenerator() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function* charGenerator() {
  var start = 0x2580
  var i = start
  var end = 0x260D
  while(i <= end ) {
    yield String.fromCharCode(i)
    i =  i === end ? start : i + 1
  }
}

function setText(t) {
  var element = document.querySelector('p')
  element.textContent = t
  element.style.color = colorGenerator()
}
function boot() {
  const iterator = charGenerator();
  setInterval( () => setText(iterator.next().value), 80)
}

boot()