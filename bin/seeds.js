const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')

const celebrities = [
    {
        name: 'Dick Emery',
        occupation: 'Actor',
        catchPhrase: 'Ooh, you are awful ... but I like you!'
    },
    {
        name: 'Stan Marsh',
        occupation: 'Сharacter',
        catchPhrase: 'Oh my God, they killed Kenny'
    },
    {
        name: 'Sheldon Cooper',
        occupation: 'Сharacter',
        catchPhrase: 'Bazinga'
    },
    {
        name: 'Smn',
        occupation: 'Сharacter',
        catchPhrase: 'Дерьмо'
    }
]

Celebrity.insertMany(celebrities)
	.then(celebrities => {
		console.log(`Success - added ${celebrities.length} to the db`)
		mongoose.connection.close()
	})
	.catch(err => {
		console.log(err)
	})