'use strict';

angular.module('pharmawebApp')
    .controller('PersonasNuevoCtrl', function($scope, PersonasService, $state, estadosCiviles, tiposDocumento, ZonasGeograficasService, $q) {
        var formData = new FormData();
        $scope.persona = {};
        $scope.persona.sexo = '';
        $scope.persona.imagen = '';
        $scope.persona.estado_civil = '';
        $scope.persona.tipo_documento = '';
        $scope.estados_civiles = estadosCiviles;
        $scope.tipos_documentos = tiposDocumento;

        $scope.persona.tipo_documento_invalid_class = false;

        $scope.changeUbigeo = function(item) {
            $scope.persona.ubigeo = item.id;
            $scope.persona.nombre_completo = item.nombre_completo;
        };

        $scope.getNombreUbigeo = function(item) {
            return item.provincia.departamento.nombre + ', ' + item.provincia.nombre + ', ' + item.nombre;
        }

        $scope.buscarUbigeo = function(term) {
            var params = {};
            params.search = term;
            return ZonasGeograficasService.getAll(params).then(function(response) {
                return response.data.results;
            });
        };

        $scope.guardar = function() {

            for (var key in $scope.persona) {
                if (key == 'imagen') {
                    if ($scope.persona[key] != '') {
                        formData.append(key, $scope.persona[key]);
                    }
                } else {
                    formData.append(key, $scope.persona[key]);
                }
            }

            PersonasService.create(formData).then(function(response) {
                Materialize.toast('Cambios registrados correctamente.', 3000, 'light-blue darken-2');
                $state.go('^', {}, {'reload': true});
            }, function(response) {
                for (var key in response.data) {
                    $scope.persona[key + '_error'] = response.data[key].toString();
                    $scope.persona[key + '_invalid_class'] = true;
                }
                Materialize.toast('Error al registrar cambios.', 3000, 'red');
            });
        };

    });
