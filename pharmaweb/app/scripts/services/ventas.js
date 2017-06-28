'use strict';

angular.module('pharmawebApp')
  .service('VentaService', function($http) {
    var _url = urlAPI + 'ventas/';

    this.get = function(id) {
      return $http({
        method: 'GET',
        url: _url + id + '/'
      }).then(function(response) {
        return response;
      });
    };


    this.getAll = function(params) {
      return $http({
        method: 'GET',
        url: _url,
        params: params
      });
    };

    this.create = function(venta) {
      return $http({
        method: 'POST',
        url: _url,
        data: venta
      });
    };
    this.update = function(venta) {
      return $http({
        method: 'PUT',
        url: _url + venta.id + '/',
        data: venta
      });
    };
  });
