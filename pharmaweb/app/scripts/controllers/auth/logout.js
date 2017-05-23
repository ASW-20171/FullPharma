'use strict';

angular.module('pharmawebApp')
  .controller('LogoutCtrl', function($scope, authService, $location) {

    authService.logOut();
    $location.path('/login');

  });
