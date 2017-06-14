'use strict';

angular.module('pharmawebApp')
  .service('ProductoService', function($http) {
    var _url = urlAPI + 'productos/';

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

    this.create = function(producto) {
      return $http({
        method: 'POST',
        url: _url,
        data: producto
      });
    };
    this.update = function(producto) {
      return $http({
        method: 'PUT',
        url: _url + producto.id + '/',
        data: producto
      });
    };
  });
