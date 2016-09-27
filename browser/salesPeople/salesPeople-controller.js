angular.module('acme')
  .controller('SalesPeopleCtrl', function($scope, $log, SalesPeopleService){

  	$scope.create = function(){
  		SalesPeopleService.create({name: $scope.name})
  		 .then(function(salesPerson){
  		 	$scope.name = "";
  		 })
  		 .catch($log.error);
  	};

  	SalesPeopleService.getAll()
  	  .then(function(salesPeople){
  	  	$scope.salesPeople = salesPeople;
  	  })
  	  .catch($log.error);

  	  $scope.delete = function(salesPerson){
  	  	SalesPeopleService.destroy(salesPerson)
  	  	  .then(function(salesPersonDestroyed){
  	  	  	console.log("Sales person removed.");
  	  	  })
  	  	  .catch($log.error);
  	  };

  });