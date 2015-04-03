'use strict';
// Module à charger
var appServices = angular.module('AngularApp',
		[
			'ngRoute',									
			'AngularApp.ctrl.accueil'			
		]);

// COnfiguration des routes / des controller et des vues associées
appServices.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {	
			
		$routeProvider.when('/accueil',		{templateUrl: 'app/views/accueil.html', 		controller: 'AccueilCtrl'});	
		$routeProvider.otherwise({redirectTo: '/accueil'});
	}]);
	


