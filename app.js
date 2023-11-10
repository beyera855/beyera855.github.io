// Run: node app.js
const express = require("express")
const app = express()

const host = 'localhost'
const port = 8080


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/html/home.html`)
})


app.listen(port, () => {
    console.log('Listening on: http://localhost:' + port)
})