/**
 * Created by Andy.Lv on 2014/11/10.
 */

(function (angular) {
  'use strict';

  angular.module('platform', []).config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('topic');

      $stateProvider
        .state('topic', {
          url: '/topic', templateUrl: '/templates/topic'
        }).state('article', {
          url: '/article/:id', templateUrl: '/templates/article'
        }).state('category', {
          url: '/topic/:category', templateUrl: '/templates/topic/topic-category'
        }).state('edit-article', {
          url: '/edit-article', templateUrl: '/templates/edit-article'
        }).state('update-article', {
          url: '/edit-article/:id', templateUrl: '/templates/edit-article'
        }).state('livejs', {
          url: '/livejs', templateUrl: '/templates/livejs'
        }).state('ng-message', {
          url: '/ng-message', templateUrl: '/templates/ng-message'
        }).state('about', {
          url: '/about', templateUrl: '/templates/about'
        });
      //$locationProvider.html5Mode(true).hashPrefix('!');
    }]);
})(angular);

