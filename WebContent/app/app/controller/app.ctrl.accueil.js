'use strict';

var myApp = angular.module('AngularApp.ctrl.accueil', ['AngularApp.Service.List']);

myApp.controller('AccueilCtrl', ['$scope','$location','ListService', function($scope,$location, ListService) 
{
	$scope.title = 'Exo elasticSearch';
	
	$scope.launch = function() {
		
		ListService.GetRequete('book',$scope.rq).then(function(response){
			$scope.rq_response  = response;
			$scope.$apply();
		});
	};
	
	$scope.all = function() {		
		ListService.GetAll('book').then(function(response){
			$scope.rq_response  = response;
			$scope.$apply();
		});
	};
	
}]);