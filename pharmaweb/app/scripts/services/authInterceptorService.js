
'use strict';

angular.module('pharmawebApp').factory('authInterceptorService', ['$q', '$injector', '$location', 'localStorageService', function($q, $injector, $location, localStorageService) {

  var _request = function(config) {

    config.headers = config.headers || {};

    var authData = localStorageService.get('authorizationData');

    if (authData) {
      config.headers.Authorization = 'Bearer ' + authData.token;
    } else {
      $location.path('/login');
    }

    return config;
  }

  var _responseError = function(rejection) {

    var loggedIn = false;
    var authData = localStorageService.get('authorizationData');
    if (authData) {
      loggedIn = true;
    }
    //We only want to go to the login page if the user is not
    //logged in. If the user is logged in and they get a 401 is
    //because they don't have access to the resource requested.
    if (rejection.status === 401 && !loggedIn) {
      var authService = $injector.get('authService');
      authService.logOut();
      $location.path('/login');
    }

    if (rejection.status === 401) {
      var authService = $injector.get('authService');
      authService.logOut();
      $location.path('/login');
    }

    if (!loggedIn) {
      $location.path('/login');
    }

    return $q.reject(rejection);
  }

  return {
    request: _request,
    responseError: _responseError,
  };
}]);
