angular.module('acme')
  .factory('SalesPeopleService', function($http){

  	var SalesPeopleService = {};
  	var _salesPeople = [];

  	SalesPeopleService.create = function(name){
  		return $http.post('/api/salesPeople', name)
  		  .then(function(salesPerson){
  		  	_salesPeople.push(salesPerson.data);
  		  })
  	};

  	return SalesPeopleService;
  });