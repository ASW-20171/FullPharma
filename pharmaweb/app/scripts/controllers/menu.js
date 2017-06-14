'use strict';

angular.module('pharmawebApp')
  .controller('MenuCtrl', function($scope, localStorageService, grupos) {
    consolr.log("hi menu controlador aqui")
    $scope.cuenta = localStorageService.get('authorizationData').info;
    
  });
