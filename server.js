const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const PORT = 8000

app.use(cors())

const alien = {
    'humans': {
        'speciesName' : 'Humans',
        'homeworld': 'Earth',
        'location': 'Alpha Quadrant',
    },
    'vulcans': {},
    'klirgons': {},
    'romulans': {},
    'borg': {},
    'gorn': {},
    'trill': {}
}

app.get('/', (req, res) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (req, res) => {
    const aliensName = request.params.alienName.toLowerCase()
    if(alien[aliensName]){
        response.json(alien[aliensName])
    }else{
        response.json(alien[humans])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`);
})