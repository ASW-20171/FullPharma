'use strict';

angular.module('pharmawebApp')
  .controller('ProductoListCtrl', function ($scope, ProductoService, $interval, $stateParams) {
    
    $scope.producto = [];


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
