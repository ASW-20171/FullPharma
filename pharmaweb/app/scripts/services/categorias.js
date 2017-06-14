'use strict';

angular.module('pharmawebApp')
    .service('CategoriaService', function($http) {
        var _url = urlAPI + 'categorias/';

        this.get = function(id) {
            return $http({
                method: 'GET',
                url: _url + id + '/'
            });
        };


        this.getAll = function(params) {
            return $http({
                method: 'GET',
                url: _url,
                params: params
            });
        };

        this.create = function(categoria) {
            return $http({
                method: 'POST',
                headers: { 'Content-Type': undefined },
                url: _url,
                data: categoria
            });
        };
        this.update = function(id, categoria) {
            return $http({
                method: 'PUT',
                headers: { 'Content-Type': undefined },
                url: _url + id + '/',
                data: categoria
            });
        };
    });
