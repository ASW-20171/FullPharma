'use strict';

/**
 * @ngdoc overview
 * @name pharmawebApp
 * @description
 * # pharmawebApp
 *
 * Config module of the application.
 */

var baseUrl = 'http://localhost:8000/';


var client_id = 'NZWPbCZEhWDlEPaveVmEc3ZpGkEtoobqJLxOqxYa';
var client_secret = 'FYjjM3zcxSEfNTJLZgUuJzu5Vrq4pShb91j61q4qofGOJLlnyVM1YRqDGcGXcGLu9SYvB9lxQLDOp9myZVnnmn9QNy8wcaNmC5oDhLv0DM11024eUWyZhnabIOQYFOaS';

var grant_type = 'password';

var config = {
  baseUrl: baseUrl,
  client_id: client_id,
  client_secret: client_secret,
  grant_type: grant_type,
};

angular.module('pharmawebApp')
  .value('config', config);

angular.module('pharmawebApp')
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
  });


angular.module('pharmawebApp').run(['$rootScope', '$state', function ($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function () {
    $rootScope.stateIsLoading = true;
  });


  $rootScope.$on('$stateChangeSuccess', function () {
    $rootScope.stateIsLoading = false;
  });

}]);
