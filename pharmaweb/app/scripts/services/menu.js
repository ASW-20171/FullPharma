'use strict';

angular.module('pharmawebApp')
  .service('MenuService', function($http) {
    var _url = urlAPI + 'auth/cuenta-accesos/';

    this.getAll = function(params) {
      return $http({
        method: 'GET',
        url: _url,
        params: params
      });
    };
  });
