routerApp.config(function ($urlRouterProvider, $locationProvider, $stateProvider) {

  $stateProvider.state('_.productos', {
    abstract: true,
    ncyBreadcrumb: {
      label: "Productos"
    }
  }).state('_.productos.list', {
    url: "/productos",
    ncyBreadcrumb: {
      label: "Lista Productos"
    },
    resolve: {
      listas: function (ProductoService) {
        return ProductoService.getAll().then(function (response) {
          return response.data.results;
        });
      }
    },
    views: {
      'contenido@_': {
        templateUrl: "views/productos/list.html",
        controller: "ProductoListCtrl"
      }
    }
  }).state('_.productos.nuevo', {
        url: '/nuevo',
        ncyBreadcrumb: {
            label: 'Nuevo'
        },
        views: {
            'contenido@_': {
                templateUrl: 'views/productos/form.html',
                controller: 'ProductoNuevoCtrl'
            }
        }
    }).state('_.productos.edit', {
        url: '/:id',
        ncyBreadcrumb: {
            label: 'Modificar'
        },
        views: {
            'contenido@_': {
                templateUrl: 'views/productos/form.html',
                controller: 'ProductoEditCtrl'
            }
        }
    });


});
