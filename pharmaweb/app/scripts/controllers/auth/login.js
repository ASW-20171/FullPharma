'use strict';

angular.module('pharmawebApp')
  .controller('LoginCtrl', function($scope, authService, $location) {

    $scope.loginData = {
      userName: "",
      password: "",
      useRefreshTokens: false
    };

    $scope.message = "";

    $scope.login = function() {
      authService.login($scope.loginData).then(function(response) {
        $location.path('/');
      }, function(error) {
        $scope.message = err.error_description;
      });
    };
  });
