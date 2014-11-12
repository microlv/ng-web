/**
 * Created by Andy.Lv on 2014/11/10.
 */

(function (angular) {
    'use strict';

    var platform = angular.module('platform', []);

    platform.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
//            .state('/', {url: '', templateUrl: 'mainframe'})
            .state('index', {
                url: '',
                views: {
                    'header': { templateUrl: 'header'},
                    'search': { templateUrl: 'search'},
                    'content': { templateUrl: 'content'},
                    'sidebar': { templateUrl: 'sidebar'},
                    'footer': { templateUrl: 'footer'}
                }
            })
            .state('index.about', {url: '/about', templateUrl: 'about'})
            .state('index.action', {url: '/action', templateUrl: 'templates/action-box' })
            .state('login', {
                url: '/login', templateUrl: 'login'
            });
    }]);

    platform.controller('platformController', ['$state', function ($state) {

    }]);


})(angular);

