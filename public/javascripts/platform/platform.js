/**
 * Created by Andy.Lv on 2014/11/10.
 */

(function (angular) {
    'use strict';


    var platform = angular.module('platform', []);

    platform.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('topic');

            $stateProvider
                //.state('index', {
                //    url: '/topic', templateUrl: '/templates/topic'
                //})
                .state('topic', {
                    url: '/topic', templateUrl: '/templates/topic'
                })
                .state('article', {
                    url: '/article/:category/:id', templateUrl: '/templates/article'
                })
                .state('about', {
                    url: '/about', templateUrl: '/templates/about'
                })
                .state('javascript', {
                    url: '/topic/javascript', templateUrl: '/templates/topic/javascript'
                })
                .state('angularjs', {
                    url: '/topic/angularjs', templateUrl: '/templates/topic/angularjs'
                })
                .state('nodejs', {
                    url: '/topic/nodejs', templateUrl: '/templates/topic/nodejs'
                })
                .state('mongodb', {
                    url: '/topic/mongodb', templateUrl: '/templates/topic/mongodb'
                })
                .state('sql', {
                    url: '/topic/sql', templateUrl: '/templates/topic/sql'
                })
                .state('csharp', {
                    url: '/topic/csharp', templateUrl: '/templates/topic/csharp'
                });
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

