'use strict';

/**
 * @ngdoc overview
 * @name pharmawebApp
 * @description
 * # pharmawebApp
 *
 * Main module of the application.
 */


angular
  .module('pharmawebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router',
    'LocalStorageModule',
    'ng-draggabilly'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var routerApp = angular.module('pharmawebApp');
var urlAPI = 'http://localhost:8000/api/';

routerApp.config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    views: {
      'login': {
        templateUrl: 'views/auth/login.html',
        controller: 'LoginCtrl'
      }
    }
  }).state('logout', {
    url: '/logout',
    templateUrl: 'views/auth/logout.html',
    controller: 'LogoutCtrl'
  }).state('_', {
    abstract: true,
    ncyBreadcrumb: {
      label: 'Home'
    },
    resolve: {
      grupos: function ($stateParams, MenuService) {
        return MenuService.getAll().then(
          function (success) {
            var grupos = [];
            var accesos = success.data;
            var grupo = {};
            grupo.nombre = '';
            grupo.accesos = [];

            accesos.forEach(function (e, i, l) {
              var acceso = {};
              acceso.nombre = e.data_acceso.nombre;
              acceso.url = e.data_acceso.url;
              acceso.icono = e.data_acceso.icono;

              if (grupo.nombre == e.data_acceso.data_grupo.nombre) {
                grupo.accesos.push(acceso);
                if ((i + 1) == l.length) {
                  grupos.push(angular.copy(grupo));
                }
              } else {
                if (grupo.nombre == '') {
                  grupo.nombre = e.data_acceso.data_grupo.nombre;
                  grupo.icono = e.data_acceso.data_grupo.icono;
                  grupo.accesos.push(acceso);
                } else {
                  grupos.push(angular.copy(grupo));
                  grupo.accesos = [];
                  grupo.nombre = e.data_acceso.data_grupo.nombre;
                  grupo.icono = e.data_acceso.data_grupo.icono;
                  grupo.accesos.push(acceso);
                  if ((i + 1) == l.length) {
                    grupos.push(angular.copy(grupo));
                  }
                }
              }

            });

            return grupos;
          },
          function (error) {

          }
        );
      }
    },
    views: {
      '': {
        templateUrl: 'components/body.html'
      },
      'menu': {
        templateUrl: 'components/menu.html',
        controller: 'MenuCtrl'
      },
      'header': {
        templateUrl: 'components/cabecera.html'
      }
    }
  }).state('_.home', {
    url: "/",
    views: {
      '': {
        templateUrl: 'components/body.html',
        controller: 'HomeController'
      }
    }
  });

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  // $breadcrumbProvider.setOptions({
  //   prefixStateName: 'home',
  //   includeAbstract: true
  // });
});
