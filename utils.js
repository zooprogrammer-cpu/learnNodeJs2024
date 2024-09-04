function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

function celsiusToFahrenheit(celcius) {
    return (celcius * 9/5 + 32);
}

// module.exports = {
//     generateRandomNumber,
//     celsiusToFahrenheit
// }

export {generateRandomNumber, celsiusToFahrenheit };

