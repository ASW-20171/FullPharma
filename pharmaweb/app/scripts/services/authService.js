
'use strict';
angular.module('pharmawebApp').factory('authService', ['$http', '$q', 'localStorageService', 'config',
  function($http, $q, localStorageService, config) {

    var serviceBase = config.baseUrl;
    var authServiceFactory = {};

    var _authentication = {
      isAuth: false,
      userName: "",
      userRetrieved: false
    };

    var _login = function(loginData) {

      var data = "grant_type=" + config.grant_type + "&client_id=" +
        config.client_id + "&client_secret=" + config.client_secret + "&username=" +
        loginData.userName + "&password=" + loginData.password;

      var deferred = $q.defer();

      $http.post(serviceBase + '/', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(response) {
        localStorageService.set('authorizationData', {
          token: response.access_token,
          userName: loginData.userName,
          refreshToken: response.refresh_token,
          useRefreshTokens: true
        });



        _authentication.isAuth = true;
        _authentication.userName = loginData.userName;
        _authentication.userRetrieved = false;

        getUserInfo().then(function(info) {
          var x = localStorageService.get('authorizationData');
          x.info = info.data[0];
          localStorageService.set('authorizationData', x);

          _authentication.userRetrieved = true;
          _authentication.usuarios = info.data[0];
          deferred.resolve(info);

        }, function(erro) {
          console.log("Error al obtener datos del usuario.");
        });

        // console.log("aaa");
        // getUserInfo().then(function(result) {
        //   console.log("llegando");
        //   console.log(result);
        //   _authentication.userRetrieved = true;
        //   _authentication.usuarios = result.data[0];
        //   deferred.resolve(result);
        //   console.log("Resuelto");
        // });

        // deferred.resolve(response);

      }).error(function(err, status) {
        _logOut();
        deferred.reject(err);
      });

      return deferred.promise;

    };

    var _logOut = function() {

      localStorageService.remove('authorizationData');

      _authentication.isAuth = false;
      _authentication.userName = "";
      _authentication.userRetreived = false;

    };


    function getUserInfo() {
      return $http.get(serviceBase + 'api/auth/usuarios/');
    }

    var _fillAuthData = function() {
      var authData = localStorageService.get('authorizationData');
      if (authData) {
        _authentication.isAuth = true;
        _authentication.userName = authData.userName;
        if (!_authentication.userRetrieved) {
          return getUserInfo().then(function(result) {
            _authentication.userRetrieved = true;
            _authentication.usuarios = result.data[0];
          });
        }

      }
      return $q.when(true);
    };



    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
  }
]);
