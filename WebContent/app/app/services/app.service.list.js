'use strict';
var myApp = angular.module('AngularApp.Service.List',['elasticsearch'])


.factory('ListService',['$http','$q','$filter',function($http,$q,$filter,ejsResource )
{
	return {
		
		
		GetRequete : function(type,data) {			
			var client = new elasticsearch.Client();
			return client.search({
				 index: 'imietp_v1',
				 type: type,
				  body: data
				 
					});
			
	
		},
		
		GetAll : function(type) {
			return this.Get("http://localhost:9200/imietp_v1/"+type+"/_search");
		},
		
		// -----------------------------------------------------------------------------------
	
		// Méthodes utilitaires --------------------------------------------------------------
		Get : function(url)
		{
			var deferred = $q.defer();	
			$http.get(url).then(function(response){ deferred.resolve(response.data); });
			return deferred.promise;
		},
		
		Post : function(url,data)
		{
			var deferred = $q.defer();	
			$http.post(url,data).then(function(response){deferred.resolve(response.data); });
			return deferred.promise;
		}
		
		// -----------------------------------------------------------------------------------
		
	};
		
}]);