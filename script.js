///////////////////
//      WIP     //
//////////////////

//all the data from survayAnswers.js is loaded into a single variable which i'm able to use later
const surveyAnswer = data
//the name of the colomn i want to extract data from
const colomnNameOne = "oogKleur"
// const colomnNameTwo = "geboorteplaats"

//creates an array of all the eye color values and converts them to uppercase
//with help from Sergio I was able to have a better map function
const eyeColors = surveyAnswer.map(answer => answer[colomnNameOne]
    .toUpperCase()
    .replace("#", "")
    .replace(" ", "")
)

console.log(eyeColors)

//separates correct hex values and puts them into an array
const correctHexValues = eyeColors.filter(color => color.length == 6)
//separates the incorrect hex values and puts them into an array, all incorrect value's are typicly less or more than 7 characters
const wrongValues = eyeColors.filter(color => color.length != 6)
//goes through all incorrect values and by checking if they contain a number a # is added to make the values correct hex value's
const rgbValues = wrongValues.filter(color => color.startsWith = "RGB")
rgbValues.rgbToHex()

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function lettersToDigits(arr) {
    arr.replace("BRUIN", "4F1B03")
    arr.replace("LICHTBLAUW", "9BBCCC")
    arr.replace("BLAUW", "6074A6")
    arr.replace("GROEN", "045C41")
}

// sources for hasNumber function 
// https://www.regextester.com/21
// https://stackoverflow.com/questions/22100243/how-to-check-if-a-string-contains-a-number-in-javascript/36077900
// https://www.xspdf.com/resolution/50918967.html

//function that outputs true if a string contains numbers and letters
// function hasNumbersAndLetters(string) {
//     const regex = /\d/g
//     return regex.test(string)
// }    


// console.log(specificAnswer)
// console.log(correctHexValues)
// console.log(wrongValues)

// .filter()

// console.log(upperCasedEyeColors)

// function getIrregular() {
//     let listOfColors = []
//     for (answer of specificAnswer){
//         let correctValue = specificAnswer.startsWith(searchTerm, 0);
//         if (correctValue == true){
//             listOfColors.push(answer[i])
//         } else {

//         }
//     } 
// }