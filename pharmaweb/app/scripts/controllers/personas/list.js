'use strict';

angular.module('pharmawebApp')
  .controller('PersonasListCtrl', function($scope, personas, $stateParams, $state) {
    $scope.personas = personas.results;

    $scope.count = personas.count;
    $scope.page = $stateParams.page ? $stateParams.page : 1;
    $scope.page_size = 10;
    $scope.fields = 'apellido_paterno,apellido_materno,nombres';
    $scope.sort = 'apellido_paterno,apellido_materno,nombres';
    $scope.search = $stateParams.search;

    //Valores por defecto
    var params = {};
    params.fields = $scope.fields;
    params.page_size = $scope.page_size;
    params.sort = $scope.sort;


    if ($scope.search) {
      params.search = $scope.search;
    }

    $scope.buscar = function(q) {
      params.page = 1;
      params.search = q;

      $state.go('_.personas', params);
    };

  });
