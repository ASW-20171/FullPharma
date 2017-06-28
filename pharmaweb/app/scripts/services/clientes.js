'use strict';

angular.module('pharmawebApp')
  .service('ClienteService', function($http) {
    var _url = urlAPI + 'clientes/';

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

    this.create = function(cliente) {
      return $http({
        method: 'POST',
        url: _url,
        data: cliente
      });
    };
    this.update = function(cliente) {
      return $http({
        method: 'PUT',
        url: _url + cliente.id + '/',
        data: cliente
      });
    };
  });
