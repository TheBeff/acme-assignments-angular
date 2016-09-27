angular.module('acme')
  .factory('AssignmentsService', function($http){
  	var AssignmentsService = {};
  	var _assignments = [];

  	AssignmentsService.assign = function(region, salesPerson){
  		return $http.post('/api/assignments/regions/' + region.id + '/salesPeople/' + salesPerson.id)
  		  .then(function(assignment){
  		  	_assignments.push(assignment.data);
  		  })
  	};

  	AssignmentsService.isAssigned = function(region, salesPerson){
  		return $http.get('/api/assignments/regions/' + region.id + '/salesPeople/' + salesPerson.id)
  		  .then(function(assignment){
  		  	console.log(assignment);
  		  	return true;
  		  })
  	};

  	return AssignmentsService;
  });