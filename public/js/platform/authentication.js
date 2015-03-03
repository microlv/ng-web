/**
 * Created by Andy.Lv on 2014/11/11.
 */

(function (angular) {
  'use strict';

  //currently this auth function is not using.

  var authentication = angular.module('authentication', []);

  window.authentication = window.authentication || {
    tokenKey: 'authentication.key.edu.online',
    authRequire: '',
    authSuccess: '',
    loginSuccess: '',
    loginFailed: ''
  };

  authentication.provider('tokenAuth', function () {

    this.$get = ['$injector', '$q', function ($injector, $q) {
      var storage;
      if (window.localStorage) {
        storage = window.localStorage;
      }

      function login(name, password) {

      }

      function checkTokenAuth() {

      }

      function getTokenAuth() {
        var tokenKey = storage.getItem(window.authentication.tokenKey);
        var json = JSON.parse(tokenKey);
        return json;
      }

      return {checkTokenAuth: checkTokenAuth};
    }];
  });

  authentication.factory('tokenAuthHttpInterceptor',
    ['$rootScope', '$q', 'tokenAuth', function ($rootScope, $q, tokenAuth) {
      function checkTokenAuth() {
        if (tokenAuth.checkTokenAuth()) {
          $rootScope.$broadcast(window.authentication.authSuccess);
        }
        else {
          $rootScope.$broadcast(window.authentication.authRequire);
        }
      }

      var interceptor = {
        'request': function (config) {
          return config;
        },
        'response': function (response) {
          return response;
        },
        'requestError': function (rejection) {
          return rejection;
        },
        'responseError': function (rejection) {
          return rejection;
        }
      };
      return interceptor;
    }]);

  authentication.config(function ($httpProvider) {
    //$httpProvider.interceptors.push('tokenAuthHttpInterceptor');
  });

})(angular);

