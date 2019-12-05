const fs = require('fs');
const crypto = require('crypto')

const contents = fs.readFileSync(process.argv[2], 'utf8').split("\n").map( x => crypto.createHash('md5').update(x).digest("hex"));

console.log('var dataPoints =[')
contents.forEach( x => console.log(`"${x}",`))
console.log(']')
