// url from Open Data Parkeren: TARIEFDEEL
const apiUrlOne = "https://opendata.rdw.nl/resource/534e-5vdg.json"
// url from Open Data Parkeren: TARIEFBEREKENING
const apiUrlTwo = "https://opendata.rdw.nl/resource/nfzq-8g7y.json"
const specificColumn = "amountfarepart" 

// Code adapted from Lauren Aarnoudse AKA RazPudding

// gets the data from the API url
getData(apiUrlOne)
// wait for data and covert to json
.then(result => {
    return result.json()
})
// wait for the json data and execute functions on the data
.then(rdwFareData => {
// console.log("sample row:", rdwFareData[0])
    const fareRateData = filterData(rdwFareData, specificColumn)
    // const uniqueFareRateData = listUniqueItems(fareRateData)

// source https://stackoverflow.com/questions/38206915/filter-out-array-to-have-only-unique-values/38206980
    const uniqueFareRateData = [...new Set(fareRateData)]
// console.log(fareRateData)
    console.log(uniqueFareRateData)
})

// fetches the data from the API url
function getData(url) {
    return fetch(url)
}

// filters the data from one column into a new array
function filterData(dataArray, columnName) {
    return dataArray.map(item => item[columnName])
}

// filters the data with all unique items into a new array
function listUniqueItems(dataArray) {
    let uniqueItems = []
    dataArray.map(item => {
        if (uniqueItems.indexOf(item) == -1){
            uniqueItems.push(item)
        }
    })
    return uniqueItems
}