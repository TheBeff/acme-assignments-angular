angular.module('acme')
  .controller('SalesPeopleCtrl', function($scope, $log){

  	$scope.create = function(){
  		SalesPeopleService.create({name: $scope.name})
  		 .then(function(salesPerson){
  		 	$scope.name = "";
  		 })
  		 .catch($log.error);
  	};

  });