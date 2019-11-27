const line = (r) => {
  const rd = Math.random()
  const decide1 = rd < 0.50
  const decide2 = rd >= 0.50
  const decide3 = Math.random() > 0.98
  const c = document.getElementById('cnv')
  const ctx = c.getContext("2d")
  ctx.beginPath()
  ctx.moveTo( 1000 * Math.random() * Math.PI, 0)
  ctx.lineTo(decide1 ? 600 : 0 , 600)
  ctx.moveTo( 100 * Math.random() * Math.PI, 0)
  ctx.lineTo(400, 600)
  var gradient = ctx.createLinearGradient(0, 0, 170, 0)
  gradient.addColorStop('0', '#999900')
  gradient.addColorStop('0.5' , '#0011FF')
  gradient.addColorStop('1.0', '#990099')
  ctx.strokeStyle = gradient
  ctx.stroke()
  if (decide3){
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.restore()
  }
}

const rec = () => {
  const i = Math.floor(Math.random() * 100)
  line(Math.floor(Math.random() * 10))
  setTimeout(rec, i)
}

rec()
