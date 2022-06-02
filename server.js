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
        'features':'Rounded ears, hair on head and face (sometimes)',
        'interestingFact': 'Founded the United Federation of Planets after first contact with the Vulcans' ,
        'notableExamples' : "James T. Kirk, Zephram Cochran, Abraham Lincoln",
        'image': 'https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg'
    },
    'vulcans': {
        'speciesName' : 'Vulcans',
        'homeworld': 'Vulcan',
        'features':'Pointed ears, upward-curving eyebrows',
        'interestingFact': 'Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak' ,
    },
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