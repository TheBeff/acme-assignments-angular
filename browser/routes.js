angular.module('acme')
  .config(function($stateProvider){
  	
  	$stateProvider
  	  .state('regionsView', {
  		url: '/regions',
  		templateUrl: '/regions/regions.html',
  		controller: 'RegionsCtrl'
  	  })
  	  .state('salesPeopleView', {
  	  	url: '/salesPeople',
  	  	templateUrl: '/salesPeople/salesPeople.html',
  	  	controller: 'SalesPeopleCtrl'
  	  });


  });