//all the data from survayAnswers.js is loaded into a single variable which i'm able to use later
var surveyAnswer = data
//the name of the colomn i want to extract data from
const colomnName = "oogKleur"

//creates an array of all the eye color values and converts them to uppercase
const specificAnswer = surveyAnswer.map(answer => answer[colomnName].toUpperCase())
//separates correct hex values and puts them into an array
const correctHexValues = specificAnswer.filter(color => color.length == 7)
//separates the incorrect hex values and puts them into an array, all incorrect value's are typicly less or more than 7 characters
const wrongValues = specificAnswer.filter(color => color.length != 7)
//goes through all incorrect values and by checking if they contain a number a # is added to make the values correct hex value's

const correctedValues = wrongValues.filter(color => 
    color.hasNumbersAndLetters(wrongValues)
    if (true){
        //if true and lenght is 6 add #
    }
    //idk what to do :/
)

// color.length == 6


// sources for hasNumber function 
// https://www.regextester.com/21
// https://stackoverflow.com/questions/22100243/how-to-check-if-a-string-contains-a-number-in-javascript/36077900
// https://www.xspdf.com/resolution/50918967.html

//function that outputs true if a string contains numbers and letters
function hasNumbersAndLetters(string) {
    const regex = /\d/g
    return regex.test(string)
}    


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

// function getIrregularAnswers(searchTerm, startingPosition){
//     let listOfRegular = []
//     let listOfNoneSense = []
//     for (let i = 0; i < specificAnswer.length; i++) {
//         let correctValue = specificAnswer.startsWith(searchTerm, startingPosition);
//                 if (correctValue == true){
//                     listOfRegular.push(answer[i])
//                     return
//                 } else {
//                     listOfNoneSense.push(answer[i])
//                 }
//       }
// }