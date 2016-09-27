const router = require('express').Router();
const SalesPeople = require('../db').models.SalesPeople;

router.post('/', function(req, res, next){
	SalesPeople.create({name: req.body.name})
	  .then(function(salesPerson){
	  	res.send(salesPerson);
	  })
	  .catch(next);
});

router.get('/', function(req, res, next){
	SalesPeople.findAll({where: {}})
	  .then(function(salesPeople){
	  	res.send(salesPeople);
	  })
	  .catch(next);
});

router.delete('/:id', function(req, res, next){
	SalesPeople.destroy({where: {id: req.params.id}})
	  .then(function(salesPersonDestroyed){
	  	res.sendStatus(204);
	  })
	  .catch(next);
});

module.exports = router;