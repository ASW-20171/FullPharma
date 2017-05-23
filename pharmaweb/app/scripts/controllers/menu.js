'use strict';

angular.module('pharmawebApp')
  .controller('MenuCtrl', function($scope, localStorageService, grupos) {
    $scope.cuenta = localStorageService.get('authorizationData').info;
    $scope.grupos = grupos;
  });
