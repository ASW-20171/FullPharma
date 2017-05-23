'use strict';

angular.module('pharmawebApp')
    .service('PersonasService', function($http) {
        var _url = urlAPI + 'personas/';

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

        this.create = function(persona) {
            return $http({
                method: 'POST',
                headers: { 'Content-Type': undefined },
                url: _url,
                data: persona
            });
        };
        this.update = function(id, persona) {
            return $http({
                method: 'PUT',
                headers: { 'Content-Type': undefined },
                url: _url + id + '/',
                data: persona
            });
        };

        this.partialUpdate = function(id, persona) {
            return $http({
                method: 'PATCH',
                headers: { 'Content-Type': undefined },
                url: _url + id + '/',
                data: persona
            });
        };
    });
