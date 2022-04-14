const PI = Math.PI

function circleArea(raio) {
    return PI * raio^2
}

module.exports.circleArea = circleArea
module.exports.squareArea = function(lado) {
    return lado^2
}