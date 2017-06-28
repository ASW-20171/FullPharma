'use strict';

angular.module('pharmawebApp')
  .controller('ProductoNuevoCtrl', function ($scope, ProductoService, $state) {
    $scope.producto = {};
    
    $scope.clicked = false;

    $scope.guardar = function () {

      $scope.clicked = true;
      ProductoService.create($scope.producto).then(function (response) {
        Materialize.toast('Cambios registrados correctamente.', 3000, 'light-blue darken-2');
        $scope.producto.nombre_invalid_class = false;
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
  });
