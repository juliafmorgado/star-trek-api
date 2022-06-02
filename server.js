const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const PORT = 8000

app.use(cors())

const alien = {}

app.get('/', (req, res) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (req, res) => {
    const aliensName = request.params.alienName.toLowerCase()
})