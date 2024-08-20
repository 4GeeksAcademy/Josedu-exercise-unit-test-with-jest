
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return Number(valueInDollar.toFixed(2));
}

const fromDollarToYen = function(valueInUsd) {
    const valueInEuro = valueInUsd / oneEuroIs.USD
    const valueInYen = valueInEuro * oneEuroIs.JPY
    return Number(valueInYen.toFixed(2))
}

const fromYenToPound = function(valueInYen) {
    const valueInEuro = valueInYen / oneEuroIs.JPY
    const valueInPound = valueInEuro * oneEuroIs.GBP
    return Number(valueInPound.toFixed(2))
}

console.log(fromDollarToYen(100));
console.log(fromEuroToDollar(100));
console.log(fromYenToPound(100));


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }

