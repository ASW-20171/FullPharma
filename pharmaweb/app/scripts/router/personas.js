routerApp.config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
  $stateProvider.state('_.personas', {
    url: "/personas?page&search",
    ncyBreadcrumb: {
      label: 'Personas'
    },
    resolve: {
      personas: function (PersonasService, $stateParams) {
        var data = {};

        data.page = $stateParams.page ? $stateParams.page : 1;
        data.page_size = 10;
        data.sort = 'apellido_paterno,apellido_materno,nombres';
        data.fields = 'apellido_paterno,apellido_materno,nombres';

        if ($stateParams.search) {
          data.search = $stateParams.search;
        }

        return PersonasService.getAll(data).then(function (response) {
          data.results = response.data.results;
          data.count = response.data.count;
          return data;
        }, function (error) {
          return data;
        });
      }
    },
    views: {
      'contenido': {
        templateUrl: 'views/personas/list.html',
        controller: 'PersonasListCtrl'
      }
    }
  }).state('_.personas.nuevo', {
    url: '/nuevo',

    ncyBreadcrumb: {
      label: 'Nuevo'
    },
    resolve: {
      estadosCiviles: function (EstadosCivilesService) {
        return EstadosCivilesService.getAll().then(function (response) {
          return response.data;
        }, function (error) {
          return [];
        });
      },
      tiposDocumento: function (TiposDocumentosService) {
        var params = {};
        params.fields = 'mostrar_persona';
        params.search = true;
        return TiposDocumentosService.getAll(params).then(function (response) {
          return response.data;
        }, function (error) {
          return [];
        });
      }
    },
    views: {
      'contenido@_': {
        templateUrl: 'views/personas/form.html',
        controller: 'PersonasNuevoCtrl'
      }
    }
  }).state('_.personas.detalle', {
    url: '/:id',
    ncyBreadcrumb: {
      label: 'Modificar'
    },
    resolve: {
      persona: function (PersonasService, $stateParams) {
        return PersonasService.get($stateParams.id).then(function (response) {
          return response.data;
        }, function (error) {
          return {};
        });
      },
      estadosCiviles: function (EstadosCivilesService) {
        return EstadosCivilesService.getAll().then(function (response) {
          return response.data;
        }, function (error) {
          return [];
        });
      },
      tiposDocumento: function (TiposDocumentosService) {
        var params = {};
        params.fields = 'mostrar_persona';
        params.search = true;
        return TiposDocumentosService.getAll(params).then(function (response) {
          return response.data;
        }, function (error) {
          return [];
        });
      }
    },
    views: {
      'contenido@_': {
        templateUrl: 'views/personas/form.html',
        controller: 'PersonasDetalleCtrl'
      }
    }
  });
});
