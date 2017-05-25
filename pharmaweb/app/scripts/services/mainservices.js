'use strict';

/**
 * @ngdoc service
 * @name arquitecturaApp.Services
 * @description
 * # Services
 * Service in the arquitecturaApp.
 */
var fpUrl = 'http://localhost:9001/api/pharma/';
var config = {fpUrl: fpUrl};


angular.module('pharmawebApp')

	.value('config_pharmaweb', config)
  
    .factory("FP", function($resource, config_pharmaweb) {
    	var url = config_pharmaweb.fpUrl;
    
        return {
        
         Almacenes: $resource(url + "almacenes/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            //"list": { method: 'GET', isArray: false, params: { query: '@query', page: '@page', page_size: '@page_size' } }
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results : angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options : {
                        "count": 1,
                        "pages": 1,
                        "page": 1,
                        "range": "all",
                        "previous": null,
                        "page_size": 1,
                        "next": null
                    };
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    //if (angular.fromJson(r).actions)
                    return angular.fromJson(r).actions.POST;
                }
            }
        }),




	    };
	}); 

