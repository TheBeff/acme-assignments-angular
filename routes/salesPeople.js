const router = require('express').Router();
const SalesPeople = require('../db').models.SalesPeople;

router.post('/', function(req, res, next){
	SalesPeople.create({name: req.body.name})
	  .then(function(salesPerson){
	  	res.send(salesPerson);
	  })
	  .catch(next);
});

module.exports = router;