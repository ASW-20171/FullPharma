'use strict';

angular.module('pharmawebApp')
  .controller('ProductoEditCtrl', function ($scope, $stateParams, ProductoService, $state) {
    $scope.producto = {};
   
    $scope.guardar = function () {
      $scope.clicked = true;
      ProductoService.update($scope.producto).then(function (response) {
      Materialize.toast('Cambios registrados correctamente.', 3000, 'light-blue darken-2');
        
         $state.go('^', {});
      }, function (response) {
        $scope.clicked = false;
        Materialize.toast('Error al registrar cambios.', 3000, 'red');

        for (var key in response.data) {
          $scope.producto[key + '_error'] = response.data[key].toString();
          $scope.producto[key + '_invalid_class'] = true;
        }
      });
    };


    var loadData = function () {
      ProductoService.get($stateParams.id).then(function (response) {
        $scope.producto = response.data;
        $scope.showLoader = false;
      }, function (response) {
        Materialize.toast('Error al obtener datos del servidor.', 3000, 'red');
        $scope.showLoader = false;
      });
    };

    loadData();
  });
