const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('hello express!')
})

app.listen(6000, () => {
    console.log('Server is up on port 6000')
})