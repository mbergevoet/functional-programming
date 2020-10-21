var surveyAnswer = data

// console.log(surveyAnswer);
// console.log(surveyData[0].naamAnderGeslacht);

// let oogKleuren = []
// for (answer of surveyAnswer){
//     listOfAnswers.push(answer[colomnName])
// }

const colomnName = "oogKleur"

const specificAnswer = surveyAnswer.map(answer => answer[colomnName].toUpperCase())

const hexedValues = specificAnswer.filter((color) => {
    return color.length;
})

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