const http = require('http')

const url = "http://api.weatherstack.com/current?access_key=52e1f850e2ff9ae23b93c6a7686796db&query=45,-75&units=f"

const request = http.request(url, (response) => {
    let data = ''
    //function to register a handler
    response.on('data', (chunk) => {
        //To convert buffer to string
        data = data + chunk.toString()
    })
    
    response.on('end', () => {
        //parse (analizar gramaticalmente) json string to get an object
        const body = JSON.parse(data)
        console.log(body)

    })
})
request.on('error', (error) => {
console.log("an error", error)
})
request.end()
