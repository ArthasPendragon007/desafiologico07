const {circleArea, squareArea} = require('./shape-area.js')

const converts = {circleArea, squareArea}

const raio = process.argv[2]
const lado = process.argv[3]

const areaRaio = converters.circleArea(raio)
const areaLado = converters.squareArea(lado)

console.log(`A area do raio de um circulo ${raio} é ${areaRaio.toFixed(2)}`)
console.log(`A area do raio de um quadrado ${lado} é ${areaLado.toFixed(2)}`)
