const router = require("express").Router();
const Celebrity = require('../models/Celebrity')

router.get('/celebrities', (req, res, next) => {
	Celebrity.find()
		.then(celebsFromDB => {
			console.log(celebsFromDB)
			res.render('celebrities', { celebrities: celebsFromDB })
		})
		.catch(err => {
			next(err)
		})
})


