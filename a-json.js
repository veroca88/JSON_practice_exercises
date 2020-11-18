const fs = require('fs')

// const movie = {
//     title: 'Hercules',
//     director: 'Joan P.'
// }

// const movieJSON = JSON.stringify(movie)
// console.log(movieJSON)

// const parseData = JSON.parse(movieJSON)
// console.log(parseData.title)

// fs.writeFileSync('a-json.json', movieJSON)

//read and return bits and bytes binary data
// const dataBuffer = fs.readFileSync('a-json.json') 

// convert into standar string in js 
// const dataJSON = dataBuffer.toString() 

// parse data into an object let us access to the data
// const data = JSON.parse(dataJSON) 

// Get the data using dot notation
// console.log(data.title)

const newDataBuffer = fs.readFileSync('a-json.json')
const newDataJSON = newDataBuffer.toString()

const ownData = JSON.parse(newDataJSON)

ownData.name = "Vero"
ownData.age = 32

const veroData = JSON.stringify(ownData)
fs.writeFileSync('a-json.json', veroData)
// console.log(veroData)

