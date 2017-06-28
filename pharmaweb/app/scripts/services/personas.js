'use strict';

angular.module('pharmawebApp')
  .service('PersonaService', function($http) {
    var _url = urlAPI + 'personas/';

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

    this.create = function(persona) {
      return $http({
        method: 'POST',
        url: _url,
        data: persona
      });
    };
    this.update = function(persona) {
      return $http({
        method: 'PUT',
        url: _url + persona.id + '/',
        data: persona
      });
    };
  });
