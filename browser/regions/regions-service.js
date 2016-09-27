angular.module('acme')
  .factory('RegionsService', function($http, $log){

  	var RegionsService = {};
  	var _regions = [];
  	var _assignments = [];

  	RegionsService.create = function(zip){
  		return $http.post('/api/regions', zip)
  		  .then(function(region){
  		  	_regions.push(region.data);
  		  })
  	};

  	RegionsService.getAll = function(){
  		return $http.get('/api/regions')
  		  .then(function(regions){
  		  	angular.copy(regions.data, _regions);
  		  	return _regions;
  		  })
  	};

  	RegionsService.destroy = function(region){
  		return $http.delete('/api/regions/' + region.id)
  		  .then(function(regionDestroyed){
  		  	_regions.splice(_regions.indexOf(region), 1);
  		  })
  	};

  	return RegionsService;
  });