routerApp.config(function ($urlRouterProvider, $locationProvider, $stateProvider) {

  $stateProvider.state('_.categorias', {
    abstract: true,
    ncyBreadcrumb: {
      label: "Categorias"
    }
  }).state('_.categorias.list', {
    url: "/categorias",
    ncyBreadcrumb: {
      label: "Lista Categorias"
    },
    resolve: {
      listas: function (CategoriaService) {
        return CategoriaService.getAll().then(function (response) {
          return response.data.results;
        });
      }
    },
    views: {
      'contenido@_': {
        templateUrl: "views/categoria/list.html",
        controller: "CategoriaListCtrl"
      }
    }
  });

});
