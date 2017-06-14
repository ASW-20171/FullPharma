'use strict';

angular.module('pharmawebApp')
  .controller('CategoriaListCtrl', function ($scope, CategoriaService, $stateParams) {
    
    $scope.categoria = [];


    var loadData = function() {
      CategoriaService.getAll().then(function (response) {
        $scope.categoria= response.data;
        $scope.count = response.data;
    
      }, function(response) {
        Materialize.toast('Error al obtener datos del servidor.', 3000, 'red');
      });
    }

    loadData();

  });
