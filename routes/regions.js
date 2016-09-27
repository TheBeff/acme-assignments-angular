const router = require('express').Router();
const Regions = require('../db').models.Regions;

router.post('/', function(req, res, next){
	Regions.create({zip: req.body.zip})
	  .then(function(region){
	  	res.send(region);
	  })
	  .catch(next);
});

router.get('/', function(req, res, next){
	Regions.findAll({where: {} })
	  .then(function(regions){
	  	res.send(regions);
	  })
	  .catch(next);
});

router.delete('/:id', function(req, res, next){
	Regions.destroy({where: {id: req.params.id}})
	  .then(function(regionDestroyed){
	  	res.sendStatus(204);
	  })
	  .catch(next);
});

module.exports = router;