/**
 * Created by Andy.Lv on 2014/11/10.
 */

(function (angular) {
    'use strict';


    var platform = angular.module('platform', []);

    platform.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('');

        $stateProvider
            .state('index', {
                url: '',
                views: {
                    'header': {templateUrl: '/layout/header'},
                    'search': {templateUrl: '/layout/search'},
                    'content': {templateUrl: '/layout/content'},
                    'sidebar': {templateUrl: '/layout/sidebar'},
                    'footer': {templateUrl: '/layout/footer'}
                }
            })
            .state('index.about', {
                url: '/about', templateUrl: '/templates/about'
            })
            .state('index.action', {
                url: '/action', templateUrl: '/templates/action-box'
            })
            .state('index.article', {
                url: '/article', templateUrl: '/templates/article'
            });
            //.state('index.*', {
            //    url: '/error', templateUrl: '/templates/article'
            //});
    }]);

    platform.run(['$rootScope', '$state', 'dialogService', function ($rootScope, $state, dialogService) {
        //$rootScope.$on('$routeChangeStart', function (evt, next, current) {
        //    dialogService.show();
        //
        //    console.log(current);
        //    console.log(next);
        //});
        //$rootScope.$on('window.authentication.authRequire', function (evt, next, current) {
        //    $state.go('login');
        //});
    }]);

})(angular);

