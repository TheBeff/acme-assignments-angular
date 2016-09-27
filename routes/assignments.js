const router = require('express').Router();
const Assignments = require('../db').models.Assignments;

router.post('/regions/:regionId/salesPeople/:salesPersonId', function(req, res, next){
	Assignments.create({regionId: req.params.regionId, salesPersonId: req.params.salesPersonId})
	  .then(function(assignment){
	  	res.send(assignment);
	  })
	  .catch(next);
});

router.get('/regions/:regionId/salesPeople/:salesPersonId', function(req, res, next){
	Assignments.findAll({where: {regionId: req.params.regionId, salesPersonId: req.params.salesPersonId}})
	  .then(function(assignments){
	  	res.send(assignments)
	  })
	  .catch(next);
});

module.exports = router;