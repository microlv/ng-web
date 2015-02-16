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
                .state('topic', {
                    url: '/topic', templateUrl: '/templates/topic'
                })
                .state('article', {
                    url: '/article/:id', templateUrl: '/templates/article'
                })
                .state('about', {
                    url: '/about', templateUrl: '/templates/about'
                })
                .state('category', {
                    url: '/topic/:category', templateUrl: '/templates/topic/topic-category'
                })
                .state('edit-article', {
                    url: '/edit-article', templateUrl: '/templates/edit-article'
                })
                .state('update-article', {
                    url: '/edit-article/:id', templateUrl: '/templates/edit-article'
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

