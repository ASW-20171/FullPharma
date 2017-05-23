'use strict';

angular.module('pharmawebApp')
    .controller('PersonasDetalleCtrl', function($q, $scope, PersonasService, $state, $stateParams, persona, estadosCiviles, tiposDocumento, ZonasGeograficasService) {
        var formData = new FormData();
        $scope.persona = persona;
        $scope.imagen = persona.imagen;
        $scope.estados_civiles = estadosCiviles;
        $scope.tipos_documentos = tiposDocumento;
        $scope.clicked = false;
        $scope.nombreCompleto = "Jesus Mariaca Mamani";

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
            $scope.clicked = true;

            for (var key in $scope.persona) {
                if (key == 'imagen') {
                    if ($scope.imagen != $scope.persona[key]) {
                        formData.append(key, $scope.persona[key]);
                    }
                } else {
                    formData.append(key, $scope.persona[key]);
                }
            }

            PersonasService.update($stateParams.id, formData).then(function(response) {
                Materialize.toast('Cambios registrados correctamente.', 3000, 'light-blue darken-2');
                $state.go('^', {});
            }, function(error) {
                $scope.clicked = false;
                Materialize.toast('Error al registrar cambios.', 3000, 'red');
            });
        };
    });
