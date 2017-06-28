'use strict';

angular.module('pharmawebApp')
  .controller('ProductoListCtrl', function ($scope, ProductoService, $interval, $stateParams) {
    
    $scope.producto = [];


    $scope.eliminar = function(p,index) {
      var confirm = $mdDialog.confirm()
        .title('¿Quieres eliminar el producto?')
        .textContent('Se eliminará  ' +p.producto.nombre)
        .ok('Eliminar')
        .cancel('Cancelar');
      $mdDialog.show(confirm).then(function() {
        var idx=$scope.lista_id_productos.indexOf(p.producto)
        $scope.producto.splice(index,1);
        $scope.lista_id_productos.splice(idx,1);
        $scope.calculandoTotal();
      });
    };


    var loadData = function() {
      ProductoService.getAll().then(function (response) {
        $scope.producto= response.data;
        console.log(response);
        $scope.count = response.data;
    
      }, function(response) {
        Materialize.toast('Error al obtener datos del servidor.', 3000, 'red');
      });
    }
    
    //setInterval(function () {
    loadData();
    //    }, 5000);

    

  });
