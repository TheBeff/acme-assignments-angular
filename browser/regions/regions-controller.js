angular.module('acme')
  .controller('RegionsCtrl', function($scope, $log, RegionsService){

  	$scope.create = function(){
  		RegionsService.create({zip: $scope.zip})
  		  .then(function(region){
  		  	$scope.zip = "";
  		  })
  		  .catch($log.error);
  	};

  	RegionsService.getAll()
  	  .then(function(regions){
  	  	$scope.regions = regions;
  	  })
  	  .catch($log.error);

  	$scope.destroy = function(region){
  		RegionsService.destroy(region)
  		  .then(function(region){
  		  	console.log("region deleted")
  		  })
  		  .catch($log.error);
  	};
  });