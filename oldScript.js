///////////////////
//      WIP     //
//////////////////

// How my code will be working once its done
//  1. Gets the data from the other js file
//  2. Uppercases the data and removes spaces and hastags
//  3. Filters out the correct HEX values 
//  4. Filters out written colors and replaces them with HEX values
//  5. Filters out RGB colors and converts it to HEX
//  6. Puts all the correct data back together 

//all the data from survayAnswers.js is loaded into a single variable which i'm able to use later
const surveyAnswer = data
//the name of the colomn i want to extract data from
const colomnNameOne = "oogKleur"
// const colomnNameTwo = "geboorteplaats"
const brownHex = "4F1B03"
const blueHex = "6074A6"
const lightBlueHex = "9BBCCC"
const greenHex = "045C41"

//creates an array of all the eye color values and converts them to uppercase
//with help from Sergio I was able to have a better map function
const eyeColors = surveyAnswer.map(answer => answer[colomnNameOne]
    .toUpperCase()
    .replace("#", "")
    .replace(" ", "")
)

// console.log(eyeColors)

//separates correct hex values and puts them into an array
const correctHexValues = eyeColors.filter(color => color.length == 6)
//separates the incorrect hex values and puts them into an array, all incorrect value's are typicly less or more than 6 characters
const wrongValues = eyeColors.filter(color => color.length != 6)

console.log(correctHexValues)
console.log(wrongValues)

// source https://stackoverflow.com/questions/40454296/filter-a-list-element-starting-with-a-letter-in-javascript
const rgbValues = wrongValues.filter((color) => color.startsWith("RGB"))

const correctedRGB = rgbValues.rgbToHex(rgbValues[0])

// source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function lettersToDigits(array) {
    array.replace("BRUIN", brownHex)
    array.replace("LICHTBLAUW", lightBlueHex)
    array.replace("BLAUW", blueHex)
    array.replace("GROEN", greenHex)
}

// console.log(specificAnswer)
// console.log(correctHexValues)
// console.log(wrongValues)