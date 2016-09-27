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

  	SalesPeopleService.getAll = function(){
  		return $http.get('/api/salesPeople')
  		  .then(function(salesPeople){
  		  	angular.copy(salesPeople.data, _salesPeople);
  		  	return _salesPeople;
  		  })
  	};

  	SalesPeopleService.destroy = function(salesPerson){
  		return $http.delete('/api/salesPeople/' + salesPerson.id)
  		  .then(function(salesPersonDestroyed){
  		  	_salesPeople.splice(_salesPeople.indexOf(salesPerson), 1);
  		  })
  	};

  	return SalesPeopleService;
  });