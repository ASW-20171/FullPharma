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
var urlAPI = 'http://0.0.0.0:8000/api/';

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
    views: {
      '': {
        templateUrl: 'components/body.html'},
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
