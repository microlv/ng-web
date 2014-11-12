/**
 * Created by Andy.Lv on 2014/11/11.
 */

(function (angular) {
    'use strict';

    var authentication = angular.module('authentication', []);

    window.authentication || (window.authentication = {
        authRequire: '',
        loginSuccess: '',
        loginFailed: ''

    });

    authentication.run(['$rootScope', '$state', function ($rootScope, $state) {
        $rootScope.$on('$routeChangeStart', function (evt, next, current) {
            console.log(current);
            console.log(next);
        });
        $rootScope.$on('window.authentication.authRequire', function (evt, next, current) {
            $state.go('login');
        });
    }]);


})(angular);

